import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { of, Observable } from 'rxjs';



@Injectable({
    providedIn: 'root'
})

export class DataService {

    private appId: string;
    private baseUrl: string;
    private artistInfoCache = {};
    private artistEventsCache = {};

    constructor(
        private http: HttpClient
    ) {
        this.appId = 'thiscanbeanystring';
        this.baseUrl = 'https://rest.bandsintown.com';
    }

    getArtistInfoByName(artistName: string): Observable<any> {
        if (this.artistInfoCache[artistName] && this.artistInfoCache[artistName].artistInfo) {
            return of(this.artistInfoCache[artistName].artistInfo);
        }
        return this.http.get(`${this.baseUrl}/artists/${artistName}?app_id=${this.appId}`)
            .pipe(map((artistInfo: any) => {
                if (!this.artistInfoCache[artistName]) {
                    this.artistInfoCache[artistName] = {
                        artistInfo,
                    };
                }

                return artistInfo;
            }));
    }

    getArtistEventsByName(artistName: string): Observable<any> {
        if (this.artistEventsCache[artistName] && this.artistEventsCache[artistName].artistEvents) {
            return of(this.artistEventsCache[artistName].artistEvents);
        }
        return this.http.get(`${this.baseUrl}/artists/${artistName}/events?app_id=${this.appId}`)
            .pipe(map((artistEvents: any) => {
                if (!this.artistEventsCache[artistName]) {
                    this.artistEventsCache[artistName] = {
                        artistEvents,
                    };
                }

                return artistEvents;
            }));
    }
}
