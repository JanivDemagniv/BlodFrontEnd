const normalizeUpdateUser = (user) => ({
    first: user.name.first,
    middle: user.name.middle,
    last: user.name.last,
    imageUrl: user.profilePic.url,
    imageAlt: user.profilePic.alt
});



export default normalizeUpdateUser;

