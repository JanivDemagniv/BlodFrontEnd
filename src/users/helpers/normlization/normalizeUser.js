const normalizeUser = (user) => ({
    userName: user.username,
    name: {
        first: user.first,
        middle: user.middle,
        last: user.last
    },
    email: user.email,
    password: user.password,
    profilePic: {
        url: user.imageUrl,
        alt: user.imageAlt
    }
});

export default normalizeUser;