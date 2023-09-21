import { Component, OnInit } from '@angular/core';
import { Ingrediant } from '../shared/ingrediant.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit{

  ingrediants: Ingrediant[] = [
    new Ingrediant('apples',5),
    new Ingrediant('tomatoes',10),
  ];

  ngOnInit(){
    throw new Error('Method not implemented.');
  }

}
