import { Component, OnInit } from '@angular/core';

import { GithubService } from '@core/services/github/github.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  content$: Observable<string> = new Observable<string>();

  constructor(private githubService: GithubService) {}

  ngOnInit(): void {
    this.content$ = this.githubService.getContent('readme');
  }
}
