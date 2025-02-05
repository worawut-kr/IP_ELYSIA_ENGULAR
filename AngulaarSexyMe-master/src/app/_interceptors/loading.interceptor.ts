import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core'
import { delay, finalize } from 'rxjs'
import { LoadingService } from '../services/loading.service';


export const loadingInterceptor: HttpInterceptorFn = (req, next) => {
  const loadingservice = inject(LoadingService)
  loadingservice.loading()
  return next(req).pipe(
    delay(1000),
    finalize(() =>
      loadingservice.idle())
  )
 
};
