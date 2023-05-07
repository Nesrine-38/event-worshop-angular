import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UserAuthGuard implements CanActivate {

  constructor(private router:Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      
      if(state.url == '/auth')
      {
       
        if(localStorage.getItem('token') != '')
        {
          this.router.navigate(['/','home'],{state:{myVar:"gfffffffff"}})
          return false 
        }

      }else
      {
        
        if(localStorage.getItem('token') == '')
        {  
          
          this.router.navigate(['/','auth'])
          return false 
        }

      }
      
      return true;

      
    }
  
}
