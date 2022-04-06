import React, { useState, useEffect, useRef } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import {
	Table,
	Button,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Paper,
} from "@material-ui/core";
import { StyledTableCell, StyledTableRow } from "./styles";
import SaveIcon from "@material-ui/icons/Save";
import ReactToPrint from "react-to-print";
import styled from "styled-components";

const useStyles = makeStyles({
	table: {
		minWidth: 700,
	},
});

const Result = ({ schedules }) => {
	const classes = useStyles();
	const [scheduleResult, setscheduleResult] = useState([]);
	const [assignedRoomResult, setassignedRoomResult] = useState([]);
	const [meetingTimes, setMeetingTimes] = useState([]);
	const tableRef = useRef();

	const meetingTime = [
		"2:00 - 3:00",
		"3:00 - 4:00",
		"4:00 - 5:00",
		"5:00 - 6:00",
		"7:00-8:00",
		"8:00-9:00",
		"9:00-10:00",
	];
	const HeadingTitle = styled.h1`
		font-family: sans-serif;
		font-weight: 700;
		font-size: 54px;
		line-height: 70px;
		margin: 0px;
		padding: 3px;
		margin: 0 auto;
		text-align: center;
		text-transform: uppercase;
	`;
	useEffect(() => {
		displayTable();
		console.log(schedules + "sadfs");
	}, []);

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
			setscheduleResult(schedules.departementInfo.schedule);
			setassignedRoomResult(schedules.departementInfo.assignedRooms);
			setMeetingTimes(schedules.departementInfo.meetingTime);
			// console.log(schedules.departementInfo.assignedRooms)
		}
		console.log(scheduleResult);
		// console.log(result)
	};
	return (
		<div>
			<ReactToPrint
				trigger={() => (
					<Button
						variant='contained'
						color='#f9fafe'
						size='large'
						className={classes.button}
						startIcon={<SaveIcon />}>
						{" "}
						Export{" "}
					</Button>
				)}
				content={() => tableRef.current}
			/>

			<TableContainer component={Paper} ref={tableRef}>
				<HeadingTitle>{schedules.departementName}</HeadingTitle>
				<Table className={classes.table} aria-label='customized table'>
					<TableHead>
						<TableRow>
							<StyledTableCell>Times</StyledTableCell>
							<StyledTableCell>Monday</StyledTableCell>
							<StyledTableCell>Tuesday</StyledTableCell>
							<StyledTableCell>Wednesday</StyledTableCell>
							<StyledTableCell>Thrusday</StyledTableCell>
							<StyledTableCell>Friday</StyledTableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{/* {scheduleResult.map((row, index) => (
                            <StyledTableRow key={index} >
                                <StyledTableCell component="th" scope="row">
                                    {meetingTimes[index]}
                                </StyledTableCell>
                                <StyledTableCell> {(row.[0] != '' ? (row.[0] + ' (' + assignedRoomResult[index][0] + ')') : "")}  </StyledTableCell>
                                <StyledTableCell> {(row.[1] != '' ? (row.[1] + ' (' + assignedRoomResult[index][0] + ')') : "")}  </StyledTableCell>
                                <StyledTableCell> {(row.[2] != '' ? (row.[2] + ' (' + assignedRoomResult[index][0] + ')') : "")}  </StyledTableCell>
                                <StyledTableCell> {(row.[3] != '' ? (row.[3] + ' (' + assignedRoomResult[index][0] + ')') : "")}  </StyledTableCell>
                                <StyledTableCell> {(row.[4] != '' ? (row.[4] + ' (' + assignedRoomResult[index][0] + ')') : "")}  </StyledTableCell>
                            </StyledTableRow>
                        ))} */}
						{/*     <StyledTableRow  >
                        
                        <StyledTableCell component="th" scope="row">  {scheduleResult[0][0]} </StyledTableCell>
                        <StyledTableCell component="th" scope="row">  {scheduleResult[0][1]} </StyledTableCell>
                        <StyledTableCell component="th" scope="row">  {scheduleResult[0][2]} </StyledTableCell>
                        <StyledTableCell component="th" scope="row">  {scheduleResult[0][3]} </StyledTableCell>
                        <StyledTableCell component="th" scope="row">  {scheduleResult[0][4]} </StyledTableCell>
                    </StyledTableRow>

                    <StyledTableRow  >
                        <StyledTableCell component="th" scope="row">  {scheduleResult[1][0]} </StyledTableCell>
                        <StyledTableCell component="th" scope="row">  {scheduleResult[1][1]} </StyledTableCell>
                        <StyledTableCell component="th" scope="row">  {scheduleResult[1][2]} </StyledTableCell>
                        <StyledTableCell component="th" scope="row">  {scheduleResult[1][3]} </StyledTableCell>
                        <StyledTableCell component="th" scope="row">  {scheduleResult[1][4]} </StyledTableCell>
                    </StyledTableRow>
                    <StyledTableRow  >
                        <StyledTableCell component="th" scope="row">  {scheduleResult[2][0]} </StyledTableCell>
                        <StyledTableCell component="th" scope="row">  {scheduleResult[2][1]} </StyledTableCell>
                        <StyledTableCell component="th" scope="row">  {scheduleResult[2][2]} </StyledTableCell>
                        <StyledTableCell component="th" scope="row">  {scheduleResult[2][3]} </StyledTableCell>
                        <StyledTableCell component="th" scope="row">  {scheduleResult[2][4]} </StyledTableCell>
                    </StyledTableRow>
                    <StyledTableRow  >
                        <StyledTableCell component="th" scope="row">  {scheduleResult[3][0]} </StyledTableCell>
                        <StyledTableCell component="th" scope="row">  {scheduleResult[3][1]} </StyledTableCell>
                        <StyledTableCell component="th" scope="row">  {scheduleResult[3][2]} </StyledTableCell>
                        <StyledTableCell component="th" scope="row">  {scheduleResult[3][3]} </StyledTableCell>
                        <StyledTableCell component="th" scope="row">  {scheduleResult[3][4]} </StyledTableCell>
                    </StyledTableRow>
                    <StyledTableRow  >
                        <StyledTableCell component="th" scope="row">  {scheduleResult[4][0]} </StyledTableCell>
                        <StyledTableCell component="th" scope="row">  {scheduleResult[4][1]} </StyledTableCell>
                        <StyledTableCell component="th" scope="row">  {scheduleResult[4][2]} </StyledTableCell>
                        <StyledTableCell component="th" scope="row">  {scheduleResult[4][3]} </StyledTableCell>
                        <StyledTableCell component="th" scope="row">  {scheduleResult[4][4]} </StyledTableCell>
                    </StyledTableRow> */}
					</TableBody>
				</Table>
			</TableContainer>
		</div>
	);
};

export default Result;
