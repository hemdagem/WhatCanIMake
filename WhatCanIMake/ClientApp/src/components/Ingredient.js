import React, { Component } from 'react';

export class Ingredient extends Component {
    displayName = Ingredient.name

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <span>{this.props.name}</span>
        );
    }
}
