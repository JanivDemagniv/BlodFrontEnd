const mapCommentToModel = (comment) => ({
    post: comment.post,
    content: comment.content
});

export default mapCommentToModel;