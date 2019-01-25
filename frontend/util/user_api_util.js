export const updateUser = (user) => {
    return $.ajax({
        method: "PATCH",
        url: `api/users/${user.id}`,
        data: formData,
        contentType: false,
        processData: false
    });
};