import { UserViewResource } from "./user";

export interface CommentViewResource {
  id: string;
  createdBy: UserViewResource;
  createdAt: string;
  text: string;
  replies: CommentViewResource[];
}

export interface ActiveComment {
  id: string;
  type: ActiveCommentType;
}

export enum ActiveCommentType {
  replying = 'replying',
  editing = 'editing',
}
