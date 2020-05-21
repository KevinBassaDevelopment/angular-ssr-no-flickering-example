import { Component, OnInit, PLATFORM_ID, Inject } from '@angular/core';
import { PostsService } from './posts.service';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  public isBrowser = false;

  posts: any;
  constructor(
    private postsService: PostsService,
    @Inject(PLATFORM_ID) private platformId: any
  ) {
    console.log('HomePage constructor');
    if (isPlatformBrowser(this.platformId)) {
      this.isBrowser = true;
    }
  }

  ngOnInit() {
    this.posts = this.postsService.getAllPosts();
  }
}
