import React from 'react';
import { mount } from 'enzyme';

import CommentList from 'components/CommentList';
import Root from 'Root';

let wrapped;

beforeEach(() => {
    const initialState = {
        comments: ['Commment 1', 'Comment2']
    }
    wrapped = mount(
        <Root initialState={initialState}>
            <CommentList />
        </Root>
    )
});

it("Creates an li from new comment", () => {
    expect(wrapped.find('li').length).toEqual(2)
});

it("Shows the text of each comment", () => {
    expect(wrapped.render().text()).toContain("Commment 1");
    expect(wrapped.render().text()).toContain("Comment2");
})