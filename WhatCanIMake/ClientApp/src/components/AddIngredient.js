import React, { Component } from 'react';

export class AddIngredient extends Component {
    displayName = AddIngredient.name

    constructor(props) {
        super(props);
        this.findRecipes = this.findRecipes.bind(this);
    }

    findRecipes(event) {
        console.log(event.target);
        
    }

    render() {
        return (
            <button key={this.props.ingredient} onClick={this.findRecipes}>{this.props.ingredient}</button>
        );
    }
}
