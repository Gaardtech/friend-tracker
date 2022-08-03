import { Component, NgModule } from '@angular/core';
import { RouterModule, Route, Routes } from '@angular/router';
import { EditFriendPageComponent } from './Components/edit-friend-page/edit-friend-page.component';
import { FriendDetailPageComponent } from './Components/friend-detail-page/friend-detail-page.component';
import { FriendsPageComponent } from './Components/friends-page/friends-page.component';
import { NewFriendPageComponent } from './Components/new-friend-page/new-friend-page.component';
import { NotFoundPageComponent } from './Components/not-found-page/not-found-page.component';
import { UserProfilePageComponent } from './Components/user-profile-page/user-profile-page.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/friends',
    pathMatch: 'full'
  },
  {
    path: 'friends',
    component: FriendsPageComponent,
  },
  {
    path: 'user-profile',
    component: UserProfilePageComponent,
  },
  {
    path: 'friends/:friendId',
    component: FriendDetailPageComponent,
  },
  {
    path: 'edit-friend/:friendId',
    component: EditFriendPageComponent,
  },
  {
    path: 'new-friend',
    component: NewFriendPageComponent,
  },
  {
    path: '**',
    component: NotFoundPageComponent,
  }
];


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
