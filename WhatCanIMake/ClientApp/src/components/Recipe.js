import React, { Component } from 'react';
import { Ingredient } from './Ingredient';

export class Recipe extends Component {
    displayName = Recipe.name

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">{this.props.recipe.name}</h5>
                        <ul>
                            {this.props.recipe.ingredients.map(ingredient =>
                                <li key={ingredient.name}>
                                    <Ingredient name={ingredient.name} />
                                </li>
                            )}
                        </ul>
                        <p class="card-text">{this.props.recipe.recipe}</p>
                    </div>
                </div>
            </div>
        );
    }
}
