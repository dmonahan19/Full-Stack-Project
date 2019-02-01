export const updateUser = (user,userId) => {
    return $.ajax({
        method: "PATCH",
        url: `api/users/${userId}`,
        data: user,
        contentType: false,
        processData: false
    });
};


export const fetchSearchUsers = (searchQuery) => {
    return $.ajax({
        method: "GET",
        url: "/api/users",
        data: { search_query: searchQuery }
    });
};