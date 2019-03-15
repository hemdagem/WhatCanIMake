import React, { Component } from 'react';
import { Recipe } from './Recipe';

export class SeachBox extends Component {

    displayName = SeachBox.name

    constructor(props) {
        super(props);
        this.state = { ingredients: [], recipes: [], selectedIngredients: [] };
        this.findIngredients = this.findIngredients.bind(this);
        this.findRecipes = this.findRecipes.bind(this);
        this.removeIngredient = this.removeIngredient.bind(this);
        this.addIngredient = this.addIngredient.bind(this);
    }

    removeIngredient(event) {
        var index = this.state.selectedIngredients.indexOf(event._targetInst.key);
        var ingredients = this.state.selectedIngredients;
        if (index > -1) {
            ingredients.splice(index, 1);
            this.setState({ selectedIngredients: ingredients });
            this.findRecipes();
        }
    }

    addIngredient(event) {
        if (this.state.selectedIngredients.includes(event._targetInst.key)) {
            return;
        }
        var ingredients = this.state.selectedIngredients;
        ingredients.push(event._targetInst.key);

        this.setState({ selectedIngredients: ingredients });
        this.findRecipes();
    }

    getRecipe() {

        if (this.props.recipe === undefined) {
            fetch('api/Recipes/GetById/' + this.props.match.params.id)
                .then(response => response.json())
                .then(data => {
                    this.setState({ recipe: data });
                });
        }
    }

    findRecipes() {

        let ingredients = this.state.selectedIngredients;

        fetch('api/Recipes/Post', {
            method: 'post',
            body: JSON.stringify(ingredients),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(data => {
                this.setState({ recipes: data });
            });
    }

    findIngredients(event) {
        fetch('api/Ingredients/Get?Summary=' + event.target.value)
            .then(response => response.json())
            .then(data => {
                this.setState({ ingredients: data });
            });
    }

    render() {

        return (
            <div>
                <div class="form-group">
                    <label for="ingredientFinder">Type Ingredients:</label>
                    <input type="text" className="form-control" placeholder="Enter Ingredients" name="ingredientFinder" id="ingredientFinder" onKeyUp={this.findIngredients} />
                    <ul className="list-group">
                        {this.state.ingredients.map(ingredient =>
                            <li class="list-group-item" key={ingredient}>
                                <button key={ingredient} onClick={this.addIngredient}>{ingredient}</button>
                            </li>
                        )}
                    </ul>
                </div>

                <h2>Recipes</h2>
                <ul className="list-group">
                    {this.state.recipes.map(recipe =>
                        <li class="list-group-item" key={recipe.name}>
                            <Recipe recipe={recipe} />
                        </li>

                    )}
                </ul>
                <h2>Selected Ingredients</h2>
                <ul className="list-group">
                    {this.state.selectedIngredients.map(ingredient =>

                        <li class="list-group-item" key={ingredient}>
                            <button key={ingredient} onClick={this.removeIngredient}>Remove {ingredient}</button>
                        </li>
                    )}
                </ul>
            </div>
        );
    }
}
