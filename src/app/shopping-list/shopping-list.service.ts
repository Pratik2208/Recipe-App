import { Ingrediant } from '../shared/ingrediant.model';
import { Subject } from 'rxjs';

export class ShoppingService {
    ingrediantChanged = new Subject<Ingrediant[]>();
    startedEditing = new Subject<number>();

    private ingrediants: Ingrediant[] = [
        new Ingrediant('apples', 5),
        new Ingrediant('tomatoes', 10),
    ];

    getIngrediants() {
        return this.ingrediants.slice();
    }

    getIngrediant(index : number){
        return this.ingrediants[index];
    }

    addIngrediant(ingrediant: Ingrediant) {
        this.ingrediants.push(ingrediant);
        this.ingrediantChanged.next(this.ingrediants.slice());
    }

    addIngrediants(ingrediants: Ingrediant[]) {
        this.ingrediants.push(...ingrediants);
        this.ingrediantChanged.next(this.ingrediants.slice());
    }

    updateIngrediant(index : number , newIngrediant : Ingrediant){
        this.ingrediants[index] = newIngrediant;
        this.ingrediantChanged.next(this.ingrediants.slice());
    }

    deleteIngrediant(index : number){
        this.ingrediants.splice(index , 1);
        this.ingrediantChanged.next(this.ingrediants.slice());
    }
}
