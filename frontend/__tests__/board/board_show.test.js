import React from 'react';
import { render, cleanup, waitForElement  } from 'react-testing-library';
import { MemoryRouter } from 'react-router-dom';
import BoardShow from '../../components/boards/board_show';
import 'babel-polyfill';

global.fetch = require('jest-fetch-mock');

afterEach(() => {
    cleanup();
    console.error.mockClear();
});

console.error = jest.fn();

const user = {
    board_ids: [1,2,3],
    follower_userIds: [1,2]
};

const board = {
    id: '1',
    title: 'fashion',
    numPins: 10
};

test('<BoardShow />', async () => {
    fetch.mockResponseOnce(JSON.stringify(board));

    const { debug, getByText, getByTestId } = render(<BoardShow user={user} />);
    await waitForElement(() => getByText('board.title'));
});



