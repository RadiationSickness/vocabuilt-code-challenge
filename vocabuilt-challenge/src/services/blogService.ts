import { Injectable } from "@angular/core";
import { getPostsResponseType } from "src/types/blogServiceTypes";

@Injectable({
    providedIn: 'root'
})
export class BlogService {
    private baseUrl = 'https://us-central1-mbtcandidate.cloudfunctions.net/posts/';
    private userName = 'tnewton';

    // NOTE: incorrect date stamp on id: "-N2XsYWI6wUg4R3qmyIw" in response, should be "Thu Jan 25 10:30:20 PST 2018"
    public async getPosts(): Promise<getPostsResponseType[]> {
        const url = `${this.baseUrl}${this.userName}`;
        return await fetch(url)
            .then(async (response) => {
                const data = await response.json();
                let results = data;

                return await Promise.resolve(results.response);
            })
            .catch(async (error) => {
                console.error("API responded with non-200");
                return await Promise.reject(error);
            });
    }

    public async createPost(data = {}): Promise<void> {
        const url = `${this.baseUrl}${this.userName}`;

        const response = await fetch(url, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(async (response) => {
            if (response.status === 200) {
                return Promise.resolve();
            }
        })
        .catch(async (error) => {
            console.error("API responded with non-200");
            return await Promise.reject(error);
        });;
    }
}