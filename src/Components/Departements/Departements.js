import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { CssBaseline, Button, Typography, Container, Table, TableHead, TableBody, TableRow, TableCell, Paper, TableContainer } from '@material-ui/core';
import useStyles from './styles';
import Departement from './Departement/Departement';
const Departements = ({ handleMessage }) => {
    const classes = useStyles();
    const [departments, setDepartments] = useState([1]);
    const handleSingleMessage = () => {

    }
    const handleDepartement = () => {
        // console.log(departments.length)
        var value = Number(departments) + 1;
        setDepartments([...departments, Number(value)])
    }

    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="lg">
                <Typography component="div" />
                <Button variant="outlined" onClick={handleDepartement} style={{ margin: '8px' }}>Add</Button>
                <Button variant="outlined" color="primary" link='/result'>
                    <Link to='/result' style={{ textDecoration: 'none' }}>
                        Generate
                    </Link>
                </Button>
                <TableContainer component={Paper}>
                    <Table className={classes.table} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Department</TableCell>
                                <TableCell align="right">Name</TableCell>
                                <TableCell align="right">Course</TableCell>
                                <TableCell align="right">Metting Time</TableCell>
                                <TableCell align="right">No Of Student</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {departments.map((index) => (
                                <TableRow>
                                    <TableCell colSpan={5}>
                                        <Departement handleMessage={handleMessage} index={index} />
                                    </TableCell>
                                </TableRow>

                            ))}


                            {/* <TableRow>
                                <TableCell colSpan={5}>
                                    <Departement />
                                </TableCell>
                            </TableRow> */}

                            {/* {rows.map((row) => (
                                <TableRow key={row.name}>
                                    <TableCell component="th" scope="row">
                                        {row.name}
                                    </TableCell>
                                    <TableCell align="right">{row.calories}</TableCell>
                                    <TableCell align="right">{row.fat}</TableCell>
                                    <TableCell align="right">{row.carbs}</TableCell>
                                    <TableCell align="right">{row.protein}</TableCell>
                                </TableRow>
                            ))} */}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Container>
        </React.Fragment>
    )
}

export default Departements
