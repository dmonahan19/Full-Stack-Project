
export const createFollow = followtype => {
    return $.ajax({
        url: 'api/follows',
        method: 'POST',
        data: { follow: followtype }
    })
};


export const deleteFollow = (id) => {

    return $.ajax({
        url: `api/follows/${id}`,
        method: 'DELETE'
    })
};

export const fetchUserFollows = (userId) => (
    $.ajax({
        method: 'GET',
        url: `/api/users/${userId}/follows`
    })
);
