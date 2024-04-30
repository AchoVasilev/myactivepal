package com.project.common.result

import com.project.common.exception.base.ErrorCode
import com.project.common.exception.exceptions.OperationException

open class OperationResult<TValue> private constructor(private val isSuccess: Boolean, val status: ResultStatus) {
    var error: Error = Error.none()
        private set

    private var value: TValue? = null

    private constructor(isSuccess: Boolean, error: Error, status: ResultStatus): this(isSuccess, status) {
        require(!(isSuccess && error != Error.none() || !isSuccess && error == Error.none())) {
            "Invalid error"
        }

        this.error = error
    }

    private constructor(value: TValue?, isSuccess: Boolean, error: Error, status: ResultStatus): this(isSuccess, error, status) {
        this.value = value
    }

    val isFailure: Boolean
        get() = !isSuccess

    fun value(): TValue {
        return if (this.isSuccess) this.value!! else throw OperationException(ErrorCode.OPERATION_RESULT_VALUE_FAILED_EXCEPTION)
    }

    companion object {
        fun <TValue> success(): OperationResult<TValue> = OperationResult(true, Error.none(), ResultStatus.Ok)

        fun <TValue> success(value: TValue): OperationResult<TValue> = OperationResult(value, true, Error.none(), ResultStatus.Ok)

        fun <TValue> success(value: TValue, status: ResultStatus): OperationResult<TValue> = OperationResult(value, true, Error.none(), status)

        fun <TValue> failure(error: Error, status: ResultStatus): OperationResult<TValue> = OperationResult(false, error, status)

        fun <TValue> fromNullable(value: TValue?): OperationResult<TValue> {
            return if (value != null) {
                success(value, ResultStatus.Ok)
            } else {
                failure(Error.nullValue(), ResultStatus.Invalid)
            }
        }
    }
}