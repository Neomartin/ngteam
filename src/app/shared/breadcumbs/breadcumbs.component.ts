import { Component, OnInit } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-breadcumbs',
  templateUrl: './breadcumbs.component.html',
})
export class BreadcumbsComponent implements OnInit {
  public title: string;
  constructor(
    private router: Router,
    private pagetitle: Title,
    private meta: Meta
  ) {
      this.getDataRoute().subscribe(event => {
        this.title = event.title;
        this.pagetitle.setTitle('NG™ ' + event.title);
        const metaTag = [
          {
            name: 'Description',
            content: this.title
          },
          {
            name: 'Author',
            content: 'Neo'
          }
        ];
        this.meta.addTags(metaTag);
      });
    }

  ngOnInit() {
  }
  getDataRoute() {
    return this.router.events.pipe(
    filter(event => event instanceof ActivationEnd),
    filter((event: ActivationEnd) => !event.snapshot.firstChild),
      map(event => event.snapshot.data)
    );
  }
}
