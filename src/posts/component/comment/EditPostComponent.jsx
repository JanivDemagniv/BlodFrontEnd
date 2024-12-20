import React, { useEffect, useState } from 'react'
import { Dialog, DialogContent, DialogContentText, DialogTitle, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import CommentFormComponent from './CommentFormComponent';
import useForm from '../../../forms/hooks/useForm';
import initialComment from '../../helpers/initialForms/initialComment';
import commentSchema from '../../models/commentSchema';
import { useCurrentUser } from '../../../users/provider/UserProvider';
import mapCommentToModel from '../../helpers/normalize/mapTOCommentModel';

export default function EditPostComponent({ comment, handleEdit }) {
    const [open, setOpen] = useState(false);
    const { user } = useCurrentUser();
    const {
        data,
        setData,
        errors,
        handleChange,
        validateForm,
        onSubmit
    } = useForm(initialComment, commentSchema, (data) => {
        handleEdit(data, comment);
        setOpen(false)
    })

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };



    useEffect(() => {
        setData(mapCommentToModel(comment));
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
            </Dialog>
        </>
    )
}
