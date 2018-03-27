import * as React from 'react';
import { Navigation } from './components/header';
import { Home } from './components/home';
import { VPRR } from './components/vprr/';

require('./App.scss');

export const App = () => {
    return (
        <div>
            <Navigation />
            <Home />
            <VPRR />
        </div>
    );
};
