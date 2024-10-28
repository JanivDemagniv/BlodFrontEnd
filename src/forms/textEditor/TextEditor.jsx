import React, { useEffect, useState } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css';


export default function TextEditor({
    onChange,
    data
}) {
    const [value, setValue] = useState();


    return (
        <ReactQuill value={data.content} onChange={(e) => { onChange(e); setValue(p => p) }} />
    )
}
