import { Ingredient } from "../shared/ingredient.model";
import { EventEmitter } from "@angular/core";

export class ShoppingListService{

    //When a new ingredient added, emit an event to make all copies synced.
    ingredientsChanged = new EventEmitter<Ingredient[]>();

    ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10)
      ];

    getIngredients(){
        //By using slice, it return a copy of the ingredients. and future operations will be made on this returned copy, not he original one.
        return this.ingredients.slice();
    }

    addIngredients(ingredient: Ingredient){
        this.ingredients.push(ingredient);

        this.ingredientsChanged.emit(this.ingredients);
    }
}