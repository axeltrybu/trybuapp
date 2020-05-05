export default ({ dispatch }) => next => action => {
    //if the action has a promise
    if (!action.payload || !action.payload.then) {
        return next(action);
    }
    //we want the promise to resolve
    action.payload.then(function (response) {
        const newAction = { ...action, payload: response };
        dispatch(newAction);
    })
}

