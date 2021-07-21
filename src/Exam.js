import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import { TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import { IndexedSourceMapConsumer } from 'webpack-sources/node_modules/source-map';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import '@date-io/date-fns';
import DragDrop from "./DragDrop/index2";
import {
  MuiPickersUtilsProvider,
  KeyBoardTimePicker,
  KeyBoarddatePicker,
  KeyboardDatePicker
} from '@material-ui/pickers';
import { FormControl, FormGroup, Accordion, AccordionSummary, AccordionDetails, Typography, InputLabel, Input, FormHelperText, FormLabel, FormControlLabel, Checkbox, Divider, AccordionActions } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  button: {
    margin: theme.spacing(1),
  }
}))


function Exam() {
  const classes = useStyles()

  const [time, settime] = useState({
    m1: true,
    m2: false,
    m3: false
  })
  const { m1, m2, m3 } = time;
  const handletimeChange = (event) => {
    settime({ ...time, [event.target.name]: event.target.checked });
  };

  const [selectedDate, setSelectedDate] = React.useState(
    new Date("2020-09-11T12:00:00")
  )

  const handleDateChange = (date) => {
    setSelectedDate(date)
  }

  const [selectedDate2, setSelectedDate2] = React.useState(
    new Date("2020-10-11T12:00:00")
  )

  const handleDateChange2 = (date) => {
    setSelectedDate2(date)
  }

  const [noOfStudent, setnoOfStudent] = useState(0);

  const handleSingleItemChange = (e) => {
    setnoOfStudent(e.target.value);
  }

  const [inputFields, setInputFields] = useState([
    { courseName: '', invigilatorName: '' },
  ]);

  const [inputFields2, setInputFields2] = useState([
    { Room: '', Capacity: '' },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("InputFields", inputFields);
    console.log("InputFields2", inputFields2);
    console.log("number of student", noOfStudent);
    console.log("Exam start date", selectedDate);
    console.log("Exam end date", selectedDate2);
    console.log("Assigned time", time);
  }

  const handleReset = (e) => {
    setInputFields([{ courseName: '', invigilatorName: '' }]);
    setInputFields2([{ Room: '', Capacity: '' }]);
    setnoOfStudent(0);
    setSelectedDate(new Date("2020-09-11T12:00:00"));
    setSelectedDate2(new Date("2020-10-11T12:00:00"));
    settime([{ m1: true, m2: false, m3: false }]);
  }


  const handleChangeInput = (index, event) => {
    const values = [...inputFields];
    values[index][event.target.name] = event.target.value;
    setInputFields(values);
  }

  const handleChangeInput2 = (index, event) => {
    const values = [...inputFields2];
    values[index][event.target.name] = event.target.value;
    setInputFields2(values);
  }

  const handleAddFields = () => {
    setInputFields([...inputFields, { courseName: '', invigilatorName: '' }])
  }

  const handleAddFields2 = () => {
    setInputFields2([...inputFields2, { Room: '', Capacity: '' }])
  }

  const handleRemoveFields = (index) => {
    const values = [...inputFields];
    values.splice(index, 1);
    setInputFields(values);
  }


  const handleRemoveFields2 = (index) => {
    const values = [...inputFields2];
    values.splice(index, 1);
    setInputFields2(values);
  }
  return (

    <Container>
      {/* <Typography variant="h3">DragDrop</Typography> */}
      {/* <DragDrop /> */}
      {/* <h1>Exam Scheduler</h1> */}
      <Typography variant="h3">Exam Scheduler</Typography>
      <form className={classes.root} onSubmit={handleSubmit}>
        {inputFields.map((inputField, index) => (
          <div key={index}>
            <TextField
              name="courseName"
              label="Course"
              variant="filled"
              value={inputField.courseName}
              onChange={event => handleChangeInput(index, event)}
            />
            <TextField
              name="invigilatorName"
              label="Invigilator"
              variant="filled"
              value={inputField.invigilatorName}
              onChange={event => handleChangeInput(index, event)}
            />
            <IconButton
              onClick={() => handleRemoveFields(index)}
            >
              <RemoveIcon />
            </IconButton>
            <IconButton
              onClick={() => handleAddFields()}
            >
              <AddIcon />
            </IconButton>
          </div>
        ))}

        <TextField id="filled-full-width" onChange={handleSingleItemChange} value={noOfStudent} label="No of Students" name='totalStudent' style={{ margin: 8 }} placeholder="Enter No of Student" fullWidth InputLabelProps={{ shrink: true, }} variant="filled" />

        {inputFields2.map((inputField, index) => (
          <div key={index}>
            <TextField
              name="Room"
              label="Room"
              variant="filled"
              value={inputField.Room}
              onChange={event => handleChangeInput2(index, event)}
            />
            <TextField
              name="Capacity"
              label="Capacity"
              variant="filled"
              value={inputField.Capacity}
              onChange={event => handleChangeInput2(index, event)}
            />
            <IconButton
              onClick={() => handleRemoveFields2(index)}
            >
              <RemoveIcon />
            </IconButton>
            <IconButton
              onClick={() => handleAddFields2()}
            >
              <AddIcon />
            </IconButton>
          </div>
        ))}

        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <Grid container >
            <KeyboardDatePicker
              disableToolbar
              variant='inline'
              format='MM/dd/yyy'
              id='date-picker'
              label='Exam start day'
              value={selectedDate}
              onChange={handleDateChange}
              KeyboardButtonProps={{

                'arial-label': 'change date'
              }}
            />
          </Grid>
        </MuiPickersUtilsProvider>

        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <Grid container >
            <KeyboardDatePicker
              disableToolbar
              variant='inline'
              format='MM/dd/yyy'
              id='date-picker2'
              label='Exam end day'
              value={selectedDate2}
              onChange={handleDateChange2}
              KeyboardButtonProps={{

                'arial-label': 'change date'
              }}
            />
          </Grid>
        </MuiPickersUtilsProvider>

        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend">Assign Time</FormLabel>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox checked={m1} onChange={handletimeChange} name="m1" />}
              label="Morning"
            />
            <FormControlLabel
              control={<Checkbox checked={m2} onChange={handletimeChange} name="m2" />}
              label="Afternoon"
            />
            <FormControlLabel
              control={<Checkbox checked={m3} onChange={handletimeChange} name="m3" />}
              label="Mixed"
            />
          </FormGroup>
        </FormControl>
        <div>
          <Button
            className={classes.button}
            variant="contained"
            color="primary"
            type="submit"
            onClick={handleSubmit}
          >Generate</Button>

          <Button
            className={classes.button}
            variant="contained"
            color="primary"
            type="reset"
            onClick={handleReset}
          >Reset</Button>
        </div>
      </form>
    </Container>
  );
}

export default Exam;