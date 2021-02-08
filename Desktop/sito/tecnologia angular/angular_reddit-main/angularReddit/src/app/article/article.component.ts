import { Component, OnInit, HostBinding, Input } from '@angular/core';
import {Article} from './article.model';
@Component({
  selector: 'app-article', //Il tag per inserire il componente sarà <app-article>
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  @HostBinding('attr.class') cssClass = 'card';
  @Input() article: Article;
  

  constructor() {
   
  
    this.article = new Article('Angular 2','http://angular.io',3);

  }

  voteUp():Boolean { //Aggiunto tipo di ritorno
    this.article.voteUp();
    return false; //Non propagare l'evento 
}
voteDown():Boolean{
    this.article.voteDown();
    return false; //Non propagare l'evento 
}
  ngOnInit() {}

 

}
