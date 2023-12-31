package com.project.domain.comment

import com.project.domain.BaseEntity
import jakarta.persistence.Entity
import jakarta.persistence.Id
import jakarta.persistence.ManyToOne
import java.util.UUID

@Entity(name = "dislikes")
class Dislike protected constructor() : BaseEntity() {
    @Id
    val id: UUID? = UUID.randomUUID()

    @ManyToOne
    var comment: Comment? = null

    constructor(comment: Comment) : this() {
        this.comment = comment
    }
}