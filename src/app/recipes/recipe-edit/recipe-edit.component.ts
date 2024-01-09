import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {

  recipeForm : FormGroup;
  id: number;
  editMode: boolean = false;

  constructor(private route: ActivatedRoute , private recipeService : RecipeService) { }

  public get controls() {
    // a getter!
    return (<FormArray>this.recipeForm.get('ingrediants')).controls;
  }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          // checking if we can edit or not
          this.editMode = params['id'] != null;
          this.initForm();
        }
      )
  }

  // Now we need to initialize the form before it is loading the HTML template
  private initForm(){

    let recipeName = '';
    let recipeImagePath = '';
    let recipeDescription = '';
    let recipeIngrediants = new FormArray([]);

    // Now we need to get initial values for form
    if(this.editMode){
      const recipe = this.recipeService.getRecipe(this.id);
      recipeName = recipe.name;
      recipeImagePath = recipe.imagePath;
      recipeDescription = recipe.description;
      if(recipe['ingrediants']){
        for(let ingrediant of recipe.ingrediants){
          recipeIngrediants.push(
            new FormGroup({
              'name' : new FormControl(ingrediant.name, Validators.required),
              'amount' : new FormControl(ingrediant.amount, [Validators.required ,
              Validators.pattern(/^[1-9][0-9]*$/)])
            })
          );
        }
      }

      this.recipeForm = new FormGroup({
        'name' : new FormControl(recipeName, Validators.required),
        'imagePath' : new FormControl(recipeImagePath, Validators.required),
        'description' : new FormControl(recipeDescription, Validators.required),
        'ingrediants' : recipeIngrediants
      })

    }

    else{
      this.recipeForm = new FormGroup({
        'name' : new FormControl(null , Validators.required),
        'imagePath' : new FormControl(null , Validators.required),
        'description' : new FormControl(null, Validators.required),
        'ingrediants' : recipeIngrediants
      })
    }

    // Now after initializing the form object we will bind to HTML template
  }

  onAddIngrediant(){
    (<FormArray>this.recipeForm.get('ingrediants')).push({
      'name' : new FormControl(null),
      'amount' : new FormControl(null, [Validators.required ,
        Validators.pattern(/^[1-9][0-9]*$/)])
    })
  }

  onSubmit(){
    if(this.editMode){
      this.recipeService.updateRecipe(this.id , this.recipeForm.value);
    }
    else{
      console.log('Inside Add method...');
      this.recipeService.addRecipe(this.recipeForm.value);
    }
  }
}
