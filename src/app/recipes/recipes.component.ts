import { Component } from '@angular/core';
import { Recipe } from './recepi.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent {

  selectedRecipe: Recipe;

}
