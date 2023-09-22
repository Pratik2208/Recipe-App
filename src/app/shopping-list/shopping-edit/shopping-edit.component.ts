import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Ingrediant } from 'src/app/shared/ingrediant.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {

  @ViewChild('inputName') inputNameRef : ElementRef;
  @ViewChild('inputAmount') inputAmountRef : ElementRef;

  @Output() ingrediantAdded = new EventEmitter<Ingrediant>();

  onAddItem(){
    const ingrediantName = this.inputNameRef.nativeElement.value;
    const ingrediantAmount = this.inputAmountRef.nativeElement.value;
    const newIngrediant = new Ingrediant(ingrediantName,ingrediantAmount);
    this.ingrediantAdded.emit(newIngrediant);
  }
}
