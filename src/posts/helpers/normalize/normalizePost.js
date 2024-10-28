const normlizePost = (post) => ({
    title: post.title,
    subtitle: post.subtitle,
    artist: post.artist,
    album: post.album,
    content: post.content,
    image: {
        url: post.imageUrl,
        alt: post.imageAlt || 'Album Cover'
    }
});

export default normlizePost;