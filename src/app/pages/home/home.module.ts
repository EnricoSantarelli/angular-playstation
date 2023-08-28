import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { ComponentsModule } from 'src/app/shared/components/components.module';
import { CardComponent } from './components/card/card.component';



@NgModule({
  declarations: [
    HomeComponent,
    CardComponent,
    
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
