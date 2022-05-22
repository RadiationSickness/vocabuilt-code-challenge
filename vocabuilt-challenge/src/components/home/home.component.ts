import { Component } from "@angular/core";
import { BlogService } from "src/services/blogService";
import { getPostsResponseType } from "src/types/blogServiceTypes";

@Component({
    selector: 'home-component',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
    public blogPosts: getPostsResponseType[] = [];
    
    constructor(private blogService: BlogService) {}

    async ngOnInit() {
        await this.blogService.getPosts().then((response) => {
            this.blogPosts = response;
            console.log(response);
        });
    }
}
