import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { reduxPromise, applyMiddleware } from 'redux-promise';
import reducers from 'reducers';

export default ({ children, initialState = {} }) => {
    const store = createStore(reducers, initialState, applyMiddleware(reduxPromise));
    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}