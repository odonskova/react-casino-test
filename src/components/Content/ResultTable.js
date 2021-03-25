import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { useEffect, useState } from "react";

const columns = [
    { field: 'id', headerName: 'ID', width: 200 },
    { field: 'slot_1', headerName: 'First Slot', width: 180 },
    { field: 'slot_2', headerName: 'Second Slot', width: 180 },
    { field: 'slot_3', headerName: 'Third Slot', width: 180 },
    { field: 'time', headerName: 'Time', width: 200 },

];


const ResultTable = ({tableData}) => {
    const [table, setTable] = useState([]);
    useEffect(() => {
        setTable(JSON.parse(localStorage.getItem("tableOfResults")) || [])
    }, [tableData]);
    return (
            <div style={{ height: "100vh", width: '100%' }}>
                <DataGrid rows={table} columns={columns} sortingOrder={'desc'}/>
            </div>
    )
};

export default ResultTable