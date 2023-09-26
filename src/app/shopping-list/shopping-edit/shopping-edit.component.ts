import { Component, ElementRef, ViewChild } from '@angular/core';
import { Ingrediant } from 'src/app/shared/ingrediant.model';
import { ShoppingService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {

  @ViewChild('inputName') inputNameRef : ElementRef;
  @ViewChild('inputAmount') inputAmountRef : ElementRef;

  constructor(private slService : ShoppingService){}

  onAddItem(){
    const ingrediantName = this.inputNameRef.nativeElement.value;
    const ingrediantAmount = this.inputAmountRef.nativeElement.value;
    const newIngrediant = new Ingrediant(ingrediantName,ingrediantAmount);
    this.slService.addIngrediant(newIngrediant);
  }
}
