export default ({ dispatch }) => next => action => {
    //if the action has a promise
    if (!action.payload || !action.payload.then) {
        return next(action);
    }
}

