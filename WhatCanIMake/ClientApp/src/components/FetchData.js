import React, { Component } from 'react';
import { SeachBox } from './SearchBox';

export class FetchData extends Component {
    displayName = FetchData.name

    constructor(props) {
        super(props);
        this.state = { forecasts: [], loading: true };
    }

    render() {
        return (
            <div>
                <SeachBox />
            </div>
        );
    }
}