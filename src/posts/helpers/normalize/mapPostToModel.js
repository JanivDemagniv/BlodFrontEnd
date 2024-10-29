const mapPostToModel = (post) => ({
    title: post.title,
    subtitle: post.subtitle,
    artist: post.artist,
    album: post.album,
    content: post.content,
    imageUrl: post.image.url,
    imageAlt: post.image.alt
});

export default mapPostToModel;