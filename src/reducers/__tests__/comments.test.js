import commentsReducer from 'reducers/comments';
import { SAVE_COMMENT } from 'actions/types';

it("handles actions of SAVE_COMMENT", () => {
    const action = {
        type: SAVE_COMMENT,
        payload: 'New comment'
    }
    const newState = commentsReducer([], action);
    expect(newState).toEqual(['New comment']);
});

it("handles action with unkonwn type", () => {
    const newState = commentsReducer([], { type: 'ljhljhljhlhjh' });
    expect(newState).toEqual([]);
})