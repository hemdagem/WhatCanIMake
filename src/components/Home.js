import React, { useState } from 'react';
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
            findRecipes();
        }
    }

    function addIngredient(event) {
        if (selectedIngredients.includes(event._targetInst.key)) {
            return;
        }
        var ingredients = selectedIngredients;
        ingredients.push(event._targetInst.key);

        setSelectedIngredients(ingredients);
        findRecipes();
    }

    function findRecipes() {

        function containsIngredient(element, index, array) {
            return selectedIngredients.indexOf(element) !== -1;
        }

        fetch('/recipes.json')
            .then(response => response.json())
            .then(data => {
                var recipes = data.filter(recipe => recipe.ingredients.some(containsIngredient) === true);
                setRecipes(recipes);
            });
    }

    function findIngredients(event) {

        const eventKey = event.currentTarget.value;

        function containsIngredient(element, key) {
            return selectedIngredients.indexOf(element) === -1 && element.toLowerCase().indexOf(key.toLowerCase()) > -1;
        }

        fetch('/ingredients.json')
            .then(response => response.json())
            .then(data => {
                var availableIngredients = data.filter(ingredient => containsIngredient(ingredient, eventKey) === true);
                setIngredients(availableIngredients.slice(0,9));
            });
    }

    return (
        <div>
            <div className="form-group">
                <input type="text" className="form-control" placeholder="Type Ingredients" name="ingredientFinder" id="ingredientFinder" onKeyUp={findIngredients} />
                <ul className="list-group">
                    {ingredients.map(ingredient =>
                        <li className="list-group-item" key={ingredient}>
                            <button key={ingredient} onClick={addIngredient}>{ingredient}</button>
                        </li>
                    )}
                </ul>
            </div>

            <h3>Recipes</h3>
            <ul className="list-group">
                {recipes.map(recipe =>
                    <li className="list-group-item" key={recipe.id}>
                        <Recipe recipe={recipe} />
                    </li>

                )}
            </ul>
            <h3>Selected Ingredients</h3>
            <ul className="list-group">
                {selectedIngredients.map(ingredient =>
                    <li className="list-group-item" key={ingredient}>
                        <button key={ingredient} onClick={removeIngredient}>Remove {ingredient}</button>
                    </li>
                )}
            </ul>
        </div>
    );

}
