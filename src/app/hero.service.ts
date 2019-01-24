import {Injectable} from '@angular/core';
import {HeroModel} from './hero';
import {Observable, of} from 'rxjs';
import {MessageService} from './message.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError, map, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class HeroService {
  private heroesUrl = 'api/heroes';

  constructor(private httpClient: HttpClient, private messageService: MessageService) {
  }

  /*获取英雄数据*/
  getHeroes(): Observable<HeroModel[]> {
    // this.log('HeroService: fetched heroes');
    // return of(temp_heroes);
    return this.httpClient.get<HeroModel[]>(this.heroesUrl)
      .pipe(
        tap(_ => this.log('fetch heroes')), catchError(this.handleError('getHeroes', [])));
  }

  getHero(id: number): Observable<HeroModel> {
    // this.log(`HeroService:fetch hero id = ${id}`);
    // return of(this.getHeroes().subscribe().find(hero => hero.id === id));
    const url = `${this.heroesUrl}/${id}`;
    return this.httpClient.get<HeroModel>(url)
      .pipe(tap(_ => this.log(`fetch hero id=${id}`)), catchError(this.handleError<HeroModel>('get hero is')));
  }

  updateHero(hero: HeroModel): Observable<any> {
    return this.httpClient.put(this.heroesUrl, hero, httpOptions).pipe(
      tap(_ => this.log(`update hero name= ${hero.id}`)), catchError(this.handleError<any>('updateHero'))
    );
  }

  addHero(hero: HeroModel): Observable<HeroModel> {
    return this.httpClient.post<HeroModel>(this.heroesUrl, hero, httpOptions).pipe(
      tap(_ => this.log(`add hero id= ${hero.id}`)), catchError(this.handleError<HeroModel>('updateHero'))
    );
  }

  deleteHero(hero: HeroModel): Observable<HeroModel> {
    const id = hero.id;
    const url = `${this.heroesUrl}/${id}`;
    return this.httpClient.delete<HeroModel>(url, httpOptions)
      .pipe(tap(_ => this.log('delete hero')), catchError(this.handleError<HeroModel>('delete hero')));
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.addMessage(`HeroService: ${message}`);
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};


