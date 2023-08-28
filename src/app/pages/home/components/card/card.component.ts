import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() title : string= '';
  @Input() paragraph : string= '';
  @Input() price : number = 0;
  @Input() span : string= '';
  @Input() photo : string = '';
}
