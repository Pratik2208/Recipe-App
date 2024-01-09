import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Ingrediant } from 'src/app/shared/ingrediant.model';
import { ShoppingService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {

  @ViewChild('f') form: NgForm;
  subscription: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedItem: Ingrediant;

  constructor(private slService: ShoppingService) { }

  ngOnInit() {
    this.subscription = this.slService.startedEditing
      .subscribe((index: number) => {
        this.editedItemIndex = index;
        this.editMode = true;
        this.editedItem = this.slService.getIngrediant(index);
        this.form.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount
        })
      })
  }

  onSubmit(form: NgForm) {
    const value = form.value;
    const newIngrediant = new Ingrediant(value.name, value.amount);
    if (this.editMode) {
      this.slService.updateIngrediant(this.editedItemIndex, newIngrediant);
    } else {
      this.slService.addIngrediant(newIngrediant);
    }
    this.editMode = false;
    form.reset();
  }


  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onClear() {
    this.form.reset();
    this.editMode = false;
  }

  onDelete() {
    this.onClear();
    this.slService.deleteIngrediant(this.editedItemIndex);
  }
}
