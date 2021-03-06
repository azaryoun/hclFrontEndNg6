import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JasonWebToken } from '../../models/platform/jason-web-token';
import { AppUtility } from '../../app.utility';


// the interceptor service for mounting JWT in Header of every HTTP request
// and for recieving new JWT from header of each response.
@Injectable()
export class JasonWebTokenInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        let oJasonWebToken = AppUtility.getAuth();

        let strAccessToken = '';

        if (oJasonWebToken != null) {
            strAccessToken = oJasonWebToken.payLoad;
        }

        const authReq = req.clone({
            headers: req.headers
                .set('Authorization', `Bearer ${strAccessToken}`)
                .set('Accept', 'application/json')
                .set('content-type', 'application/json'),

        });


        return next.handle(authReq).pipe(event => {
            if (event instanceof HttpResponse) {
                strAccessToken = event.headers.get('Authorization');
                oJasonWebToken = new JasonWebToken(strAccessToken);
                AppUtility.setAuth(oJasonWebToken);
            }
            return event;
        });
    }


}
