import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Observable, ObservableInput, of } from 'rxjs';

import { ConfigurationService } from './configuration.service';
export function LoadConfiguration(http: HttpClient, config: ConfigurationService): (() => Promise<boolean>) {
    return (): Promise<boolean> => {
        return new Promise<boolean>((resolve: (a: boolean) => void): void => {
            http.get('./assets/config.json')
                .pipe(
                    map((x: ConfigurationService) => {
                        config.settings = x;
                        resolve(true);
                    }),
                    catchError((x: { status: number }, caught: Observable<void>): ObservableInput<{}> => {
                        if (x.status !== 404) {
                            resolve(false);
                        }
                        resolve(true);
                        return of({});
                    })
                ).subscribe();
        });
    };
}
