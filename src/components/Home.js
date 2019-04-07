import React, { useState, useEffect } from 'react';
import Recipe from './Recipe'

export default function Home() {

    const [ingredients, setIngredients] = useState([]);
    const [selectedIngredients, setSelectedIngredients] = useState([]);
    const [recipes, setRecipes] = useState([]);

    function removeIngredient(event) {
        var index = selectedIngredients.indexOf(event._targetInst.key);
        var ingredients = selectedIngredients;
        if (index > -1) {
            ingredients.splice(index, 1);
            setSelectedIngredients(ingredients);
            
        }
    }

    useEffect(() => {   
        findRecipes();
    })

    function addIngredient(event) {
        if (selectedIngredients.includes(event._targetInst.key)) {
            return;
        }
        var ingredients = selectedIngredients;
        ingredients.push(event._targetInst.key);

        setSelectedIngredients(ingredients);
    }

    function findRecipes() {
        fetch('/recipes.json')
            .then(response => response.json())
            .then(data => {
                setRecipes(data);
            });
    }

    function findIngredients() {
        fetch('/ingredients.json')
            .then(response => response.json())
            .then(data => {
                setIngredients(data);
            });
    }

    return (
        <div>
            <div className="form-group">
                <label htmlFor="ingredientFinder">Type Ingredients:</label>
                <input type="text" className="form-control" placeholder="Enter Ingredients" name="ingredientFinder" id="ingredientFinder" onKeyUp={findIngredients} />
                <ul className="list-group">
                    {ingredients.map(ingredient =>
                        <li className="list-group-item" key={ingredient}>
                            <button key={ingredient} onClick={addIngredient}>{ingredient}</button>
                        </li>
                    )}
                </ul>
            </div>

            <h2>Recipes</h2>
            <ul className="list-group">
                {recipes.map(recipe =>
                    <li className="list-group-item" key={recipe.name}>
                        <Recipe recipe={recipe} />
                    </li>

                )}
            </ul>
            <h2>Selected Ingredients</h2>
            <ul className="list-group">
                {selectedIngredients.map(ingredient =>
                    <li class="list-group-item" key={ingredient}>
                        <button key={ingredient} onClick={removeIngredient}>Remove {ingredient}</button>
                    </li>
                )}
            </ul>
        </div>
    );

}
