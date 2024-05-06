package com.project.posts.domain

import com.project.common.BaseEntity
import jakarta.persistence.Entity
import jakarta.persistence.Id
import jakarta.persistence.ManyToOne
import java.util.UUID

@Entity(name = "likes")
class Like protected constructor(): BaseEntity() {
    @Id
    private val id: UUID? = UUID.randomUUID()

    @ManyToOne
    var comment: Comment? = null

    constructor(comment: Comment) : this() {
        this.comment = comment
    }
}