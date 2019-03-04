import React from 'react';
import { render, cleanup, waitForElement  } from 'react-testing-library';
import { MemoryRouter } from 'react-router-dom';
import BoardShow from '../../components/boards/board_show';

global.fetch = require('jest-fetch-mock');

afterEach(() => {
    cleanup();
    console.error.mockClear();
});


const user = {
    board_ids: [1,2,3],
    follower_userIds: [1,2]
};

console.error = jest.fn();

test('<BoardShow />', async  () => {
    fetch.mockResponseOnce(
        JSON.stringify({
            board: {
                id: '1',
                title: 'fashion',
                numPins: 10
            }
        })
    );
});

test('<BoardShow />', () => {
    const { debug, getByText } = render(
        <MemoryRouter>
            <BoardShow user={user}/>
        </MemoryRouter>
        await waitForElement( () => getByText('fashion'))
    );
    debug();
});
