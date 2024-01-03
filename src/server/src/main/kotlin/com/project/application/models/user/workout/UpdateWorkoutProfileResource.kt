package com.project.application.models.user.workout

import com.project.domain.user.Gender
import io.micronaut.serde.annotation.Serdeable

@Serdeable
data class UpdateWorkoutProfileResource(
    val height: Double?,
    val weight: Double?,
    val gender: Gender?,
    val age: Int?,
    val bodyFat: Double?
)