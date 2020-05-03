import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import Root from 'Root';
import App from 'components/App';

ReactDOM.render(
    <Root>
        <BrowserRouter history={history} basename={process.env.PUBLIC_URL}>
            <Route path="/" component={App} />
        </BrowserRouter>
    </Root>,
    document.querySelector('#root')
)