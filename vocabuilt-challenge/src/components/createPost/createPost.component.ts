import { Component } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { BlogService } from "src/services/blogService";

@Component({
    selector: 'something-component',
    templateUrl: './createPost.component.html',
    styleUrls: ['./createPost.component.scss'],
})
export class CreatePostComponent {
    public createPostForm: FormGroup;
    
    constructor(private blogService: BlogService) {
        this.createPostForm = new FormGroup({
            title: new FormControl('', Validators.required),
            text: new FormControl('', Validators.required),
        });
    }

    // NOTE: Could add directives and more validation if not pressed for time
    public async submitBlogPost() {
        const payload = {
            title: this.createPostForm.get('title')?.value,
            text: this.createPostForm.get('text')?.value,
            timestamp: new Intl.DateTimeFormat(
                'en-GB',
                { dateStyle: 'full', timeStyle: 'long' }
            ).format(Date.now())
        };

        await this.blogService.createPost(payload);
    }
}
