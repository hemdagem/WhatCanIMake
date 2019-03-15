import React, { Component } from 'react';
import { SeachBox } from './SearchBox';

export class Home extends Component {
    displayName = Home.name

    constructor(props) {
        super(props);
    }

    render() {
        return <SeachBox />;
    }
}