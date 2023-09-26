import { EventEmitter, Injectable } from "@angular/core";
import { Recipe } from "./recepi.model";
import { Ingrediant } from "../shared/ingrediant.model";
import { ShoppingService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService{

    recipeSelected = new EventEmitter<Recipe>();

    constructor(private slService : ShoppingService){}

    private recipes : Recipe[] = [

        new Recipe
        ('A Test Recipe',
        'This is Simple Test',
        'https://www.seriouseats.com/thmb/uH_msyHurzKTDRzc4c_goGoLANI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/SEA-classic-panzanella-salad-recipe-hero-03-74d7b17dde8f498795387ef0c22d7215.jpg',
        [
            new Ingrediant('Banana',1),
            new Ingrediant('Mango',2)
        ]),

        new Recipe
        ('A Original Recipe',
        'This is Original',
        'https://www.seriouseats.com/thmb/uH_msyHurzKTDRzc4c_goGoLANI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/SEA-classic-panzanella-salad-recipe-hero-03-74d7b17dde8f498795387ef0c22d7215.jpg',
        [
            new Ingrediant('Potato',1),
            new Ingrediant('Onion',2)
        ])

    ];

    getRecipes(){
        return this.recipes.slice();
    }

    addIngrediantsToShoppingList(ingrediants : Ingrediant[]){
        this.slService.addIngrediants(ingrediants);
    }

}