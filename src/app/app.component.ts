import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router , NavigationEnd,ActivatedRoute}          from '@angular/router';
import { filter, map } from 'rxjs';
import { PageService } from './services/page.service';
import { SessionService } from './services/session.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'fe_dicky';
  constructor(
    private router:Router, 
    private setTitleService:Title, 
    private pageService : PageService,
    private sessionService : SessionService
    ) {
    //is login
    this.sessionService.set('admin',{picture:'/assets/img/user.png'});
    //-----------------

    router.events.pipe(
      filter((event) => event instanceof NavigationEnd),
        map(() => {
          let route: ActivatedRoute = this.router.routerState.root;
          let routeTitle = '';
          let realRoute:any;
          
          while (route!.firstChild) {
            route = route.firstChild;
          }
          
          if (route.snapshot.data['title'] && route.snapshot.data['subtitle']) {
            routeTitle = route!.snapshot.data['title']+" - "+route!.snapshot.data['subtitle'];
            realRoute=route!.snapshot.routeConfig;
          }
          else if (route.snapshot.data['title']) {
            routeTitle = route!.snapshot.data['title'];
            realRoute=route!.snapshot.routeConfig;
          }
          else if (route.snapshot.routeConfig){
            realRoute=route!.snapshot.routeConfig;
          }
          
          return {
            pageTitle:routeTitle,
            ...realRoute
          };
          
        })
      ).subscribe((res: any) => {
        if (res) {
          console.log('change route start',res);
          if(res.pageTitle)
          this.setTitleService.setTitle(`${res.routeTitle}`);

          if(res.data && res.data.title){
            this.pageService.set(res.data.title,res);
          }

        }
      }
      );
    
  }
}
