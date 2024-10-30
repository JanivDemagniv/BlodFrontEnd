const normalizeComment = (comment, newContent) => ({
    post: comment.post,
    content: newContent.content,
    creator: {
        _id: comment.creator._id,
        name: comment.creator.name,
        image: {
            url: comment.creator.image.url,
            alt: comment.creator.image.alt
        }
    }
});

export default normalizeComment;