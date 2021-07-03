import React, { useState } from 'react';
import { Accordion, AccordionSummary, AccordionDetails, TextField, Typography, InputLabel, Input, FormHelperText } from '@material-ui/core';
import { FormControl, FormGroup, Grid, IconButton } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Add as AddIcon, Remove as RemoveIcon } from '@material-ui/icons';
import Button from '../../Controls/Button';
import useStyles from './styles';
import { ContactSupportOutlined } from '@material-ui/icons';


const Departement = ({ handleMessage, index }) => {
    const classes = useStyles();


    const [departementName, setDepartementName] = useState('')
    // Values of Inputs
    const [courseFields, setcourseFields] = useState([
        { courseName: '', creditHour: '', courseInstactor: '' }
    ])
    const [classRoomFields, setclassRoomFields] = useState([
        { roomName: '', roomCapacity: '' }
    ])

    const handleRoomClick = () => {
        // console.log("sjdkf")
        const values = [...classRoomFields];
        values.push({ roomName: '', roomCapacity: '' });
        setclassRoomFields(values);
        console.log(courseFields.length);
    }
    const handleCourseRemoveClick = (i) => {
        console.log(i)
    }
    const handleCourseClick = () => {
        // console.log("sjdkf")
        const values = [...courseFields];
        values.push({ courseName: '', creditHour: '', courseInstactor: '' });
        setcourseFields(values);
        console.log(courseFields.length);
    }
    const handleRoomRemoveClick = (i) => {
        console.log(i)
    }
    const handleInputChange = (index, event) => {
        const courseValue = [...courseFields];
        const classRoomValue = [...classRoomFields];
        if (event.target.name === "courseName") {
            courseValue[index].courseName = event.target.value;
        } else if (event.target.name === "courseCreditHour") {
            courseValue[index].creditHour = event.target.value;
        } else if (event.target.name === "courseInstactor") {
            courseValue[index].courseInstactor = event.target.value;
        } else if (event.target.name === "roomName") {
            classRoomValue[index].roomName = event.target.value;
        } else if (event.target.name === "roomCapacity") {
            classRoomValue[index].roomCapacity = event.target.value;
        }

        setcourseFields(courseValue);
        setclassRoomFields(classRoomValue);
    };
    const resetForm = () => {
        setclassRoomFields([{ roomName: '', roomCapacity: '' }]);
        setcourseFields([{ courseName: '', creditHour: '' }]);
    }

    const handleSingleItemChange = (e) => {
        if (e.target.name === "Departement") {
            // console.log(e.target.value);
            setDepartementName(e.target.value)
        }

    }

    const initalValue = {
        departementName: departementName,
        course: courseFields
    }
    const handleSave = () => {
        handleMessage(initalValue, index - 1);
    }


    return (
        <div className={classes.root}>
            <Accordion className={classes.a}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography className={classes.heading}>{departementName != '' ? departementName : "Departement"}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography className={classes.root} fullWidth>
                        <form noValidate autoComplete="off" >
                            <Grid container>
                                <Grid item xs={12}>
                                    <TextField id="filled-full-width" onChange={handleSingleItemChange} name='Departement' label="Departement" style={{ margin: 8 }} placeholder="Enter Your Departement" fullWidth margin="large" InputLabelProps={{ shrink: true, }} variant="filled" />
                                    {/* Course */}
                                    {courseFields.map((courseField, index) => (
                                        <FormGroup className={classes.tableCenter} key={index} >

                                            <TextField id="filled-full-width" name='courseName' value={courseField.courseName} onChange={event => handleInputChange(index, event)} label="Course" style={{ margin: 8 }} placeholder="Enter Your Course" InputLabelProps={{ shrink: true, }} variant="filled" />
                                            <TextField id="filled-full-width" name='courseCreditHour' value={courseField.creditHour} onChange={event => handleInputChange(index, event)} label="Credit Hour" style={{ margin: 8 }} placeholder="Enter Your Credit Hour" InputLabelProps={{ shrink: true, }} variant="filled" />
                                            <TextField id="filled-full-width" name='courseInstactor' value={courseField.courseInstactor} onChange={event => handleInputChange(index, event)} label="Instractor" style={{ margin: 8 }} placeholder="Enter Your Instractor" InputLabelProps={{ shrink: true, }} variant="filled" />
                                            {courseField.length !== 1 &&
                                                <IconButton onClick={() => handleCourseRemoveClick(index)}>
                                                    <RemoveIcon />
                                                </IconButton>}

                                            {(courseFields.length - 1 === index) &&
                                                <IconButton onClick={handleCourseClick}>
                                                    <AddIcon />
                                                </IconButton>
                                            }
                                        </FormGroup>
                                    ))}
                                    {/* Class Room */}
                                </Grid>
                                <Grid item xs={12} >
                                    <TextField id="filled-full-width" label="No of Students" style={{ margin: 8, marginLeft: 16 }} placeholder="Enter No of Student" fullWidth InputLabelProps={{ shrink: true, }} variant="filled" />
                                    {classRoomFields.map((classRoomField, index) => (
                                        <FormGroup className={classes.tableCenter} key={index} >
                                            <TextField id="filled-full-width" name='roomName' value={classRoomField.roomName} onChange={event => handleInputChange(index, event)} label="Room" style={{ margin: 8 }} placeholder="Enter Room" InputLabelProps={{ shrink: true, }} variant="filled" />
                                            <TextField id="filled-full-width" name='roomCapacity' value={classRoomField.roomCapacity} label="Capacity" onChange={event => handleInputChange(index, event)} style={{ margin: 8 }} placeholder="Enter Capacity" InputLabelProps={{ shrink: true, }} variant="filled" />
                                            {classRoomField.length !== 1 &&
                                                <IconButton onClick={() => handleRoomRemoveClick(index)}>
                                                    <RemoveIcon />
                                                </IconButton>}

                                            {(classRoomFields.length - 1 === index) &&
                                                <IconButton onClick={handleRoomClick}>
                                                    <AddIcon />
                                                </IconButton>
                                            }
                                        </FormGroup>
                                    ))}


                                </Grid>
                                <div>
                                    <Button
                                        // type="submit"
                                        text="Save"
                                        onClick={handleSave} />
                                    {/* <Button
                                        text="Reset"
                                        color="default"
                                        onClick={resetForm}
                                    /> */}
                                    {/* <button type={'reset'} onClick={() => props.sendDataToParent('test string')}>Click Here</button> */}
                                </div>
                            </Grid>
                        </form>
                    </Typography>
                </AccordionDetails>
            </Accordion>

        </div >
    );
}

export default Departement;