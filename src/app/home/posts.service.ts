import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor() { }

  getAllPosts(){
    return [
      {
        title: "SSR with Angular Universal And Ionic",
        image: "assets/imgs/ionic-universal.png",
        description: "So, Angular universal is a thing… And it seems it is something you all have been very excited about for some time. Since I tweeted about this some time ago, it’s been one of the top 3 most common questions asked of us (right behind “when’s...",
        category: "Tech"
      },
      {
        title: "Nest 7. What's new?",
        image: "assets/imgs/nest7.png",
        description: "Today I am excited to announce the official release of NestJS 7. This is a major release spanning the entire platform, including the fram...",
        category: "Tech"
      },
      {
        title: "Angular a11y: 11 tips on how to make your apps more accessible",
        image: "assets/imgs/angular-accessibility.png",
        description: "This article is a must-read to understand accessibility and how to work with it in Angular. l'll focus on 11 things you can do to make make your Angular app more accessible...",
        category: "Tech"
      }
    ] 
  }
}
