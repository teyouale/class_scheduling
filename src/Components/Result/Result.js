import React, { useState, useEffect, useRef } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { StyledTableCell, StyledTableRow } from './styles';
import ReactToPrint from "react-to-print";

const useStyles = makeStyles({
    table: {
        minWidth: 700,
    },
});

const Result = ({ schedules }) => {
    const classes = useStyles();
    const [newResult, setNewResult] = useState([]);
    const tableRef = useRef()

    useEffect(() => {
        displayTable()
    }, [])

    const displayTable = () => {
        console.log(schedules);
        var result = [];
        if (isNaN(schedules)) {
            // for (var i = 0; i < schedules[0].length; i++) {
            //     result[i] = new Array(schedules[0].length).fill();
            //     for (var j = 0; j < schedules.length; j++) {
            //         result[i][j] = schedules[j][i]; // Here is the fixed column access using the outter index i.
            //     }
            // }
            setNewResult(schedules);
        }

        console.log(result)
    }
    return (
        <div>
            <ReactToPrint
                trigger={() => <button>Print this out!</button>}
                content={() => tableRef.current}
            />

            <TableContainer component={Paper} ref={tableRef}>
                <Table className={classes.table} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Monday</StyledTableCell>
                            <StyledTableCell>Tuesday</StyledTableCell>
                            <StyledTableCell>Wednesday</StyledTableCell>
                            <StyledTableCell>Thrusday</StyledTableCell>
                            <StyledTableCell>Friday</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {newResult.map((row, index) => (
                            <StyledTableRow key={index} >
                                <StyledTableCell component="th" scope="row">
                                    {row[0]}
                                </StyledTableCell>
                                <StyledTableCell >{row[1]}</StyledTableCell>
                                <StyledTableCell >{row.[2]}</StyledTableCell>
                                <StyledTableCell >{row.[3]}</StyledTableCell>
                                <StyledTableCell >{row.[4]}</StyledTableCell>
                            </StyledTableRow>
                        ))}
                        {/*     <StyledTableRow  >
                        
                        <StyledTableCell component="th" scope="row">  {newResult[0][0]} </StyledTableCell>
                        <StyledTableCell component="th" scope="row">  {newResult[0][1]} </StyledTableCell>
                        <StyledTableCell component="th" scope="row">  {newResult[0][2]} </StyledTableCell>
                        <StyledTableCell component="th" scope="row">  {newResult[0][3]} </StyledTableCell>
                        <StyledTableCell component="th" scope="row">  {newResult[0][4]} </StyledTableCell>
                    </StyledTableRow>

                    <StyledTableRow  >
                        <StyledTableCell component="th" scope="row">  {newResult[1][0]} </StyledTableCell>
                        <StyledTableCell component="th" scope="row">  {newResult[1][1]} </StyledTableCell>
                        <StyledTableCell component="th" scope="row">  {newResult[1][2]} </StyledTableCell>
                        <StyledTableCell component="th" scope="row">  {newResult[1][3]} </StyledTableCell>
                        <StyledTableCell component="th" scope="row">  {newResult[1][4]} </StyledTableCell>
                    </StyledTableRow>
                    <StyledTableRow  >
                        <StyledTableCell component="th" scope="row">  {newResult[2][0]} </StyledTableCell>
                        <StyledTableCell component="th" scope="row">  {newResult[2][1]} </StyledTableCell>
                        <StyledTableCell component="th" scope="row">  {newResult[2][2]} </StyledTableCell>
                        <StyledTableCell component="th" scope="row">  {newResult[2][3]} </StyledTableCell>
                        <StyledTableCell component="th" scope="row">  {newResult[2][4]} </StyledTableCell>
                    </StyledTableRow>
                    <StyledTableRow  >
                        <StyledTableCell component="th" scope="row">  {newResult[3][0]} </StyledTableCell>
                        <StyledTableCell component="th" scope="row">  {newResult[3][1]} </StyledTableCell>
                        <StyledTableCell component="th" scope="row">  {newResult[3][2]} </StyledTableCell>
                        <StyledTableCell component="th" scope="row">  {newResult[3][3]} </StyledTableCell>
                        <StyledTableCell component="th" scope="row">  {newResult[3][4]} </StyledTableCell>
                    </StyledTableRow>
                    <StyledTableRow  >
                        <StyledTableCell component="th" scope="row">  {newResult[4][0]} </StyledTableCell>
                        <StyledTableCell component="th" scope="row">  {newResult[4][1]} </StyledTableCell>
                        <StyledTableCell component="th" scope="row">  {newResult[4][2]} </StyledTableCell>
                        <StyledTableCell component="th" scope="row">  {newResult[4][3]} </StyledTableCell>
                        <StyledTableCell component="th" scope="row">  {newResult[4][4]} </StyledTableCell>
                    </StyledTableRow> */}


                    </TableBody>
                </Table>
            </TableContainer >
        </div>
    );
}

export default Result;