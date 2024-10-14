import * as React from 'react';
import Card from '@mui/material/Card';
import HeaderComponent from './HeaderComponent';
import ContentComponent from './ContentComponent';
import ActiveBarCompoenent from './ActiveBarCompoenent';

export default function PostComponent({ post }) {


    return (
        <Card sx={{ maxWidth: '90%', m: '20px auto' }}>
            <HeaderComponent post={post} />
            <ContentComponent post={post} />
            <ActiveBarCompoenent post={post} />
        </Card>
    );
}