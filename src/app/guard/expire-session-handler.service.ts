import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExpireSessionHandlerService {

  isSessionExpired:BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)

  constructor() { }

}
