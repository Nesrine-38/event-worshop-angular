import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable,tap } from 'rxjs';
import { ExpireSessionHandlerService } from 'src/app/guard/expire-session-handler.service';

@Injectable()
export class SessionHandlerInterceptor implements HttpInterceptor {

  constructor(private sessionHandler:ExpireSessionHandlerService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    
    return next.handle(request).pipe(tap({error:(response:any)=>{
      
      if (response.status == 403)
      {

        this.sessionHandler.isSessionExpired.next(true)

      }

    }}));
  }
  
}
