// import React from 'react';
// import { render, cleanup, fireEvent } from 'react-testing-library';
// import { MemoryRouter } from 'react-router-dom';
// import Profile from '../../components/profile/profile';

// // afterEach(() => {
// //     cleanup();
// //     console.error.mockClear();
// // });

// console.error = jest.fn();

// test('<Profile />', () => {
//     render(<Profile />);
// });

// const user = {
//     id: '1',
//     follower_userIds: [1,2,3],
//     following_userIds: [4, 5]
// };

// test('<Profile /> with follow', () => {
//     const { debug, getByTestId } = render(
//         <MemoryRouter>
//             <Profile user={user} />
//         </MemoryRouter>
//     )
//     expect(getByTestId('follow-link').getAttribute('href')).toBe(`/users/${user.id}/followers`)
//     debug();
// });



