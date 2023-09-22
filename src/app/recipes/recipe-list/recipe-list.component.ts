import { Component, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recepi.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {

@Output() recipeWasSelected = new EventEmitter<Recipe>();

recipes : Recipe[] = [
  new Recipe('A Test Recipe','This is Simple Test','https://www.seriouseats.com/thmb/uH_msyHurzKTDRzc4c_goGoLANI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/SEA-classic-panzanella-salad-recipe-hero-03-74d7b17dde8f498795387ef0c22d7215.jpg'),

  new Recipe('A Original Recipe','This is Original','https://www.seriouseats.com/thmb/uH_msyHurzKTDRzc4c_goGoLANI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/SEA-classic-panzanella-salad-recipe-hero-03-74d7b17dde8f498795387ef0c22d7215.jpg')

];

onRecipeSelected(recipe : Recipe){
  this.recipeWasSelected.emit(recipe);
}

}
