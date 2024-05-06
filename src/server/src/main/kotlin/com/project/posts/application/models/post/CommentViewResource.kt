package com.project.posts.application.models.post

import com.project.application.models.user.UserViewResource
import com.project.posts.domain.Comment
import io.micronaut.serde.annotation.Serdeable
import java.time.Instant
import java.util.UUID

@Serdeable
data class CommentViewResource(val id: UUID, val createdBy: UserViewResource, val createdAt: Instant, val text: String?,
                               val parentId: UUID?, val replies: List<CommentViewResource>) {
    companion object {
        fun from(comment: Comment): CommentViewResource {
            return CommentViewResource(comment.id, UserViewResource.from(comment.user!!),
                    comment.createdAt, comment.text, comment.parentId,
                    comment.replies.map { c: Comment -> from(c) }
                            .sortedBy { commentViewResource: CommentViewResource -> commentViewResource.createdAt })
        }
    }
}