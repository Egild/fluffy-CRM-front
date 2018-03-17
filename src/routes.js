import React from 'react';
import ReactDOM from 'react-dom';

import {
    Router,
    Route,
    IndexRoute,
    browserHistory
} from 'react-router';

/* views */
import App from './index.jsx';

ReactDOM.render(
    <App/>,
    document.getElementById("app")
);
