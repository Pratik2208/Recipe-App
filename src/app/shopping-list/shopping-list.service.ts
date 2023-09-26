import { EventEmitter } from "@angular/core";
import { Ingrediant } from "../shared/ingrediant.model";

export class ShoppingService{

ingrediantChanged = new EventEmitter<Ingrediant[]>();

private ingrediants: Ingrediant[] = [
        new Ingrediant('apples',5),
        new Ingrediant('tomatoes',10),
    ];

    getIngrediants(){
        return this.ingrediants.slice();
    }

    addIngrediant(ingrediant : Ingrediant){
        this.ingrediants.push(ingrediant);
        this.ingrediantChanged.emit(this.ingrediants.slice());
    }

    addIngrediants(ingrediants : Ingrediant[]){
        this.ingrediants.push(...ingrediants);
        this.ingrediantChanged.emit(this.ingrediants.slice());
    }
}