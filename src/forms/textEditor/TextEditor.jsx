import { Box } from '@mui/material';
import React from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css';


export default function TextEditor({
    onChange,
    data
}) {

    return (
        <Box sx={{ m: '5px', width: '100%', border: '1px solid #bbb', minHeight: '50vh', borderRadius: '5px' }}>
            <ReactQuill value={data.content} onChange={(e) => { onChange(e); setValue(p => p) }} />
        </Box>
    )
}
