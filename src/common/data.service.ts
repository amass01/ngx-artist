import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class DataService {

    private appId: string;
    private baseUrl: string;

    constructor(
        private http: HttpClient
    ) {
        this.appId = 'thiscanbeanystring';
        this.baseUrl = 'https://rest.bandsintown.com';
    }

    getArtistInfoByName(artistName: string) {
        return this.http.get(`${this.baseUrl}/artists/${artistName}?app_id=${this.appId}`);
    }

    getArtistEventsByName(artistName: string) {
        return this.http.get(`${this.baseUrl}/artists/${artistName}/events?app_id=${this.appId}`);
    }
}
