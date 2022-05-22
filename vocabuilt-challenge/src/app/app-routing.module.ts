import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "src/components/home/home.component";
import { ManagePostsComponent } from "src/components/managePosts/managePosts.component";
import { CreatePostComponent } from '../components/createPost/createPost.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'create-post', component: CreatePostComponent },
    { path: 'manage', component: ManagePostsComponent },
    { path: '**', redirectTo: '' }
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})

export class AppRoutingModule {}