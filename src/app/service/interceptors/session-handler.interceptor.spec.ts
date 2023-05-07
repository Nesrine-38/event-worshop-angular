import { TestBed } from '@angular/core/testing';

import { SessionHandlerInterceptor } from './session-handler.interceptor';

describe('SessionHandlerInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      SessionHandlerInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: SessionHandlerInterceptor = TestBed.inject(SessionHandlerInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
