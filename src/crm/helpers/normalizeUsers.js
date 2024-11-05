const normalizeUserToCrm = (user) => {
    const row = {
        id: user._id,
        username: user.userName,
        email: user.email,
        first: user.name.first,
        middle: user.name.middle,
        last: user.name.last,
        isCreator: user.isCreator,
        imgUrl: user.profilePic.url,
        imgAlt: user.profilePic.alt
    };
    return row
};

export { normalizeUserToCrm };