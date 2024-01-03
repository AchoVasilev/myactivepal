import { Routes } from '@angular/router';
import { PostDetailsComponent } from './post-details/post-details.component';
import { ListPostsComponent } from './list-posts/list-posts.component';
import { resolveTitle } from 'app/core/title-resolvers/posts-title-resolvers';

const POST_ROUTES: Routes = [
  {
    path: '',
    children: [
      {
        path: 'details/:id/:title',
        component: PostDetailsComponent,
        pathMatch: 'full',
        title: resolveTitle
      },
      {
        path: 'list/:itemType/:itemName/:itemId',
        component: ListPostsComponent,
        pathMatch: 'full',
      }
    ]
  }
];

export default POST_ROUTES;