import { Component, OnDestroy, OnInit } from '@angular/core';
import { Ingrediant } from '../shared/ingrediant.model';
import { ShoppingService } from './shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit , OnDestroy{

  ingrediants: Ingrediant[];
  private igChangedSub : Subscription;

  constructor(private slService : ShoppingService){
  }

  ngOnInit(){
    this.ingrediants = this.slService.getIngrediants();
    this.igChangedSub = this.slService.ingrediantChanged
    .subscribe(
      (ingrediants : Ingrediant[]) => {
        this.ingrediants = ingrediants;
      }
    )
  }

  ngOnDestroy(): void {
      this.igChangedSub.unsubscribe();
  }

  onEditItem(index : number){
    this.slService.startedEditing.next(index);
  }
}
