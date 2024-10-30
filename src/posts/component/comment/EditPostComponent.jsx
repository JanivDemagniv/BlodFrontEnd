import React, { useEffect, useState } from 'react'
import { Dialog, DialogContent, DialogContentText, DialogTitle, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import CommentFormComponent from './CommentFormComponent';
import useForm from '../../../forms/hooks/useForm';
import initialComment from '../../helpers/initialForms/initialComment';
import commentSchema from '../../models/commentSchema';
import usePosts from '../../hooks/usePosts';
import { useCurrentUser } from '../../../users/provider/UserProvider';
import mapCommentToModel from '../../helpers/normalize/mapTOCommentModel';

export default function EditPostComponent({ comment }) {
    const [open, setOpen] = useState(false);
    const { handleUpdateComment } = usePosts();
    const { user } = useCurrentUser();
    const {
        data,
        setData,
        errors,
        handleChange,
        validateForm,
        onSubmit
    } = useForm(initialComment, commentSchema, (data) => {
        handleUpdateComment(data, comment);
    })

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };



    useEffect(() => {
        setData(mapCommentToModel(comment))
    }, [])
    return (
        <>
            <IconButton onClick={handleClickOpen}>
                <EditIcon sx={{ color: 'white' }} fontSize="small" />
            </IconButton>
            <Dialog
                open={open}
                onClose={handleClose}
            >
                <DialogTitle>Edit Comment</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Edit Comment
                    </DialogContentText>
                    <CommentFormComponent
                        onSubmit={onSubmit}
                        validateForm={validateForm}
                        errors={errors}
                        data={data}
                        onInputChange={handleChange}
                        user={user}
                    />
                </DialogContent>
                {/* <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button type="submit">Subscribe</Button>
                </DialogActions> */}
            </Dialog>
        </>
    )
}
