import {Injectable} from '@angular/core';
import {HeroModel} from './hero';
import {temp_heroes} from './mock-heroes';
import {Observable, of} from 'rxjs';
import {MessageService} from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) {
  }

  /*获取英雄数据*/
  getHeroes(): Observable<HeroModel[]> {
    this.messageService.addMessage('HeroService: fetched heroes');
    return of(temp_heroes);
  }
}


