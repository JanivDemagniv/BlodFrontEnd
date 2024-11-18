import React, { useEffect } from 'react'
import useAdmin from '../hooks/useAdmin'
import Spinner from '../../components/Spinner';
import Error from '../../components/Error';
import { Avatar, Box, Typography } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import ActionsButtons from './components/ActionsButtons';
import { useTheme } from '../../providers/CustomTheme';

export default function AllUsers({ handleGetAllUsers, handleUpdateStatus, handleDeleteUser, error, isLoading, allUsers }) {
    // const { handleGetAllUsers, handleUpdateStatus, handleDeleteUser, error, isLoading, allUsers } = useAdmin();
    const { isDark } = useTheme();

    const columns = [
        { field: 'id', headerName: 'Id', width: 250, disableColumnMenu: true, headerClassName: 'header-color' },
        { field: 'username', headerName: 'Username', width: 200, disableColumnMenu: true, headerClassName: 'header-color' },
        {
            field: 'Avatar', headerName: 'Avatar', width: 60, disableColumnMenu: true, headerClassName: 'header-color',
            renderCell: (params) => {
                return (
                    <Box sx={{ p: '2px' }}>
                        <Avatar alt={params.row.imgAlt} src={params.row.imgUrl} />
                    </Box>)
            }
        },
        { field: 'first', headerName: 'First Name', width: 130, disableColumnMenu: true, headerClassName: 'header-color' },
        { field: 'middle', headerName: 'Middle Name', width: 130, disableColumnMenu: true, headerClassName: 'header-color' },
        { field: 'last', headerName: 'Last Name', width: 130, disableColumnMenu: true, headerClassName: 'header-color' },
        {
            field: 'isCreator', header: 'Creator', width: 130, disableColumnMenu: true, headerClassName: 'header-color'
        },
        {
            field: 'actions',
            type: 'actions',
            headerName: 'Actions',
            width: 100,
            headerClassName: 'header-color',
            renderCell: (params) => {
                return [
                    < ActionsButtons key={params.id} handleDeleteUser={handleDeleteUser} handleUpdateStatus={handleUpdateStatus} userId={params.id} />
                ]
            }
        },
    ]

    const paginationModel = { page: 0, pageSize: 10 };

    // useEffect(() => {
    //     handleGetAllUsers();
    // }, [])

    if (isLoading) return <Spinner />
    if (error) return <Error errorMessage={error} />
    if (allUsers === undefined || allUsers === null) return <Typography>no users to display</Typography>
    if (allUsers)
        return (
            <Box>
                <DataGrid
                    rows={allUsers}
                    getRowId={(row) => row.id}
                    columns={columns}
                    initialState={{ pagination: { paginationModel } }}
                    pageSizeOptions={[5, 10, 25, 50, 100]}
                    sx={{
                        border: 0, '& .header-color': {
                            backgroundColor: isDark ? '#607D8B' : '#ed6c02',
                        }
                    }}
                    editMode='row'
                    disableRowSelectionOnClick
                />
            </Box>
        )
}
