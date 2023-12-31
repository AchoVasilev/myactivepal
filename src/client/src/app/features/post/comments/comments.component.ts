import { Component, Input } from '@angular/core';
import {
  ActiveComment,
  CommentEmittedType,
  CommentViewResource,
} from 'app/shared/shared-module/models/comment';

@Component({
  selector: 'gains-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss'],
})
export class CommentsComponent {
  @Input() comments?: CommentViewResource[];
  activeComment!: ActiveComment | null;

  @Input() currentUserId!: string;
  onSubmit(comment: CommentEmittedType): void {}

  setActiveComment(comment: ActiveComment | null) {
    this.activeComment = comment;
  }

  updateComment($event: { text: string; commentId: string }) {
    throw new Error('Method not implemented.');
  }

  deleteComment($event: string) {
    throw new Error('Method not implemented.');
  }

  addComment($event: { text: string; parentId: string | null }) {
    console.log($event)
  }

  getRootComments() {
    return this.comments?.filter((comment) => comment?.parentId === null);
  }

  getReplies(comment: CommentViewResource): CommentViewResource[] {
    return comment.replies;
  }
}
