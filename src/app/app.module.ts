import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ProfileInfoComponent } from './Components/profile-info/profile-info.component';
import { PersonCardComponent } from './Components/person-card/person-card.component';
import { WelcomeMessageComponent } from './Components/welcome-message/welcome-message.component';
import { TagComponent } from './Components/tag/tag.component';
import { PeopleListComponent } from './Components/people-list/people-list.component';
import { FriendsPageComponent } from './Components/friends-page/friends-page.component';
import { UserProfilePageComponent } from './Components/user-profile-page/user-profile-page.component';
import { AppRoutingModule } from './app-routing.module';
import { FriendDetailPageComponent } from './Components/friend-detail-page/friend-detail-page.component';
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';
import { NotFoundPageComponent } from './Components/not-found-page/not-found-page.component';
import { NewFriendCardComponent } from './Components/new-friend-card/new-friend-card.component';
import { NewFriendPageComponent } from './Components/new-friend-page/new-friend-page.component';
import { FormsModule } from '@angular/forms';
import { PersonInfoFormComponent } from './Components/person-info-form/person-info-form.component';
import { EditFriendPageComponent } from './Components/edit-friend-page/edit-friend-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileInfoComponent,
    PersonCardComponent,
    WelcomeMessageComponent,
    TagComponent,
    PeopleListComponent,
    FriendsPageComponent,
    UserProfilePageComponent,
    FriendDetailPageComponent,
    NavBarComponent,
    NotFoundPageComponent,
    NewFriendCardComponent,
    NewFriendPageComponent,
    PersonInfoFormComponent,
    EditFriendPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
