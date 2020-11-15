import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class WikipediaService {

  constructor(private http: HttpClient ) { }

  public search(term: string) {
    return this.http.get('https://en.wikipedia.org/w/api.php', {
      params: {
            action: 'query',
            list: 'search',
            format: 'json',
            utf8: '1',
            srsearch: term,
            origin: '*'
        }
    });
  }
}


// var params = {
//     action: "query",
//     list: "search",
//     srsearch: "space",
//     format: "json",
//     utf8=1
// };