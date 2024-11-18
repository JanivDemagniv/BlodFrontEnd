import React from 'react';
import { Box } from '@mui/material';
import SearchAera from './components/SearchAera';
import ListOrPostToggle from './components/ListOrPostToggle';
import SearchParameterSelect from './components/SearchParameterSelect';


export default function SearchAndOrderComponent({ isList, handleToggle, parameter, handleParameter, checked }) {

    return (
        <Box sx={{ display: 'flex', justifyContent: 'space-evenly' }}>
            <ListOrPostToggle checked={checked} isList={isList} handleToggle={handleToggle} />
            <Box>
                <SearchAera />
                <SearchParameterSelect parameter={parameter} handleParameter={handleParameter} />
            </Box>
        </Box>
    )
}
