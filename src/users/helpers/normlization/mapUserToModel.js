const mapUserToModel = (user) => ({
    name: {
        first: user.first,
        middle: user.middle,
        last: user.last
    },
    profilePic: {
        url: user.imageUrl,
        alt: user.imageAlt
    }
});

export default mapUserToModel;