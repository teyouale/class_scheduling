import React, { useState } from 'react';
import { Accordion, AccordionSummary, AccordionDetails, TextField, Typography, InputLabel, Input, FormHelperText, FormLabel, FormControlLabel, Checkbox, Divider, AccordionActions, Button } from '@material-ui/core';
import { FormControl, FormGroup, Grid, IconButton } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Add as AddIcon, Remove as RemoveIcon } from '@material-ui/icons';
// import Button from '../../Controls/Button';
import useStyles from './styles';
import { ContactSupportOutlined } from '@material-ui/icons';


const Departement = ({ handleMessage, index }) => {
    const classes = useStyles();

    const [state, setState] = useState({
        monday: true,
        tuesday: false,
        wensday: false,
        thrusday: false,
        friday: false,
    });
    const [time, settime] = useState({
        m1: true,
        m2: false,
        m3: false,
        m4: false,
        m5: false,
        m6: false,
        m7: false
    })
    const { monday, tuesday, wensday, thrusday, friday } = state;
    const { m1, m2, m3, m4, m5, m6, m7 } = time;

    const [departementName, setDepartementName] = useState('')
    // Values of Inputs
    const [courseFields, setcourseFields] = useState([
        { courseName: '', creditHour: '', courseInstactor: '' }
    ])
    const [classRoomFields, setclassRoomFields] = useState([
        { roomName: '', roomCapacity: '' }
    ])
    const [noOfStudent, setnoOfStudent] = useState(0);

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
        setDepartementName('')
        setnoOfStudent(0)
    }

    const handleSingleItemChange = (e) => {
        if (e.target.name === "Departement") {
            // console.log(e.target.value);
            setDepartementName(e.target.value)
        } else if (e.target.name === "totalStudent") {
            setnoOfStudent(e.target.value)
        }

    }


    const handleSave = () => {
        handleMessage(initalValue, index - 1);
        console.log(state);
    }
    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };
    const handletimeChange = (event) => {
        settime({ ...time, [event.target.name]: event.target.checked });
    };

    const initalValue = {
        departementName: departementName,
        course: courseFields,
        classRoom: classRoomFields,
        noOfStudent: noOfStudent,
        days: state,
        time: time
    }

    return (
        <div className={classes.root}>
            <Accordion className={classes.a}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <div className={classes.column}>
                        <Typography className={classes.heading}>{departementName != '' ? departementName : "Departement"}</Typography>

                    </div>
                    <div className={classes.column}>
                        <Typography className={classes.secondaryHeading}>Select Class Property </Typography>
                    </div>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography className={classes.root} fullWidth>
                        <form noValidate autoComplete="on" >
                            <Grid container>
                                <Grid item xs={12}>
                                    <TextField id="filled-full-width" onChange={handleSingleItemChange} value={departementName} name='Departement' label="Departement" style={{ margin: 8 }} placeholder="Enter Your Departement" fullWidth margin="large" InputLabelProps={{ shrink: true, }} variant="filled" />
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
                                    <TextField id="filled-full-width" onChange={handleSingleItemChange} value={noOfStudent} label="No of Students" name='totalStudent' style={{ margin: 8 }} placeholder="Enter No of Student" fullWidth InputLabelProps={{ shrink: true, }} variant="filled" />
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
                                    <Grid container>
                                        <Grid item xs={6}>
                                            <FormControl component="fieldset" className={classes.formControl}>
                                                <FormLabel component="legend">Assign No of Days</FormLabel>
                                                <FormGroup>
                                                    <FormControlLabel
                                                        control={<Checkbox checked={monday} onChange={handleChange} name="monday" />}
                                                        label="Monday"
                                                    />
                                                    <FormControlLabel
                                                        control={<Checkbox checked={tuesday} onChange={handleChange} name="tuesday" />}
                                                        label="Tuesday"
                                                    />
                                                    <FormControlLabel
                                                        control={<Checkbox checked={wensday} onChange={handleChange} name="wensday" />}
                                                        label="Wensday"
                                                    />
                                                    <FormControlLabel
                                                        control={<Checkbox checked={thrusday} onChange={handleChange} name="thrusday" />}
                                                        label="Thrusday"
                                                    />
                                                    <FormControlLabel
                                                        control={<Checkbox checked={friday} onChange={handleChange} name="friday" />}
                                                        label="Friday"
                                                    />

                                                </FormGroup>
                                                {/* <FormHelperText>Be careful</FormHelperText> */}
                                            </FormControl>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <FormControl component="fieldset" className={classes.formControl}>
                                                <FormLabel component="legend">Assign Time</FormLabel>
                                                <FormGroup>
                                                    <FormControlLabel
                                                        control={<Checkbox checked={m1} onChange={handletimeChange} name="m1" />}
                                                        label="2:00 - 3:00"
                                                    />
                                                    <FormControlLabel
                                                        control={<Checkbox checked={m2} onChange={handletimeChange} name="m2" />}
                                                        label="3:00 - 4:00"
                                                    />
                                                    <FormControlLabel
                                                        control={<Checkbox checked={m3} onChange={handletimeChange} name="m3" />}
                                                        label="4:00 - 5:00"
                                                    />
                                                    <FormControlLabel
                                                        control={<Checkbox checked={m4} onChange={handletimeChange} name="m4" />}
                                                        label="5:00 - 6:00"
                                                    />
                                                    <FormControlLabel
                                                        control={<Checkbox checked={m5} onChange={handletimeChange} name="m5" />}
                                                        label="7:00-8:00"
                                                    />
                                                    <FormControlLabel
                                                        control={<Checkbox checked={m6} onChange={handletimeChange} name="m6" />}
                                                        label="8:00-9:00"
                                                    />
                                                    <FormControlLabel
                                                        control={<Checkbox checked={m7} onChange={handletimeChange} name="m7" />}
                                                        label="9:00-10:00"
                                                    />

                                                </FormGroup>
                                            </FormControl>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </form>
                    </Typography>
                </AccordionDetails>
                <Divider />
                <AccordionActions>
                    <Button size="small" onClick={resetForm}>Reset</Button>
                    <Button size="small" color="primary" onClick={handleSave} >
                        Save
                    </Button>
                </AccordionActions>
            </Accordion>

        </div >
    );
}

export default Departement;