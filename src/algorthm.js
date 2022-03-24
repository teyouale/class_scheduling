class Department {
    constructor(meetingTime, days, teachers, classRooms, roomCapacity, courses, creditHour, CourseTeachermapping, numberOfStudent) {
        this.meetingTime = meetingTime;
        this.days = days;
        this.teachers = teachers;
        this.classRooms = classRooms;
        this.roomCapacity = roomCapacity;
        this.courses = courses;
        this.creditHour = creditHour;
        this.CourseTeachermapping = CourseTeachermapping;
        this.numberOfStudent = numberOfStudent;
        this.schedule = [];
        for (var i = 0; i < meetingTime.length; i++) {
            for (var j = 0; j < days.length; j++) {
                this.schedule[i] = [];
            }
        }
        this.assignedRooms = [];
        for (var i = 0; i < meetingTime.length; i++) {
            for (var j = 0; j < days.length; j++) {
                this.assignedRooms[i] = [];
            }
        }

        for (let i = 0; i < meetingTime.length; i++) {
            for (let j = 0; j < days.length; j++) {
                this.schedule[i][j] = "";
            }
        }

        for (let i = 0; i < meetingTime.length; i++) {
            for (let j = 0; j < days.length; j++) {
                this.assignedRooms[i][j] = "";
            }
        }

    }
}


var dep = [];

// var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

var days = [true, false, true, true, true, false, false];

////////

var duration = 60
var numberOfClassPerDay = 7
var startTime = "2:00"
var time = startTime.split(":")
var hour = parseInt(time[0]) + (parseInt(time[1]) + duration ) 
if (hour > 9){
    hour = String(hour)
}
else{
    hour = "0" + String(hour)
}
minutes = (parseInt(time[1]) + duration ) % 60
if (minutes > 9){
    minutes = String(minutes)
}
else{
    minutes = "0" + String(minutes)
}
var endTime = hour +":"+ minutes
var meetingTime = [startTime + " - " + endTime]
for (let i = 0; i < numberOfClassPerDay - 1 ; i++ ){
    var temp = meetingTime[-1].split(" - ")
    startTime = temp[1]
    var time = startTime.split(":")
    var hour = parseInt(time[0]) + (parseInt(time[1]) + duration ) // 60
    if (hour > 9){
        hour = String(hour)
    }
    else{
        hour = "0" + String(hour)
    }
    var minutes = (parseInt(time[1]) + duration ) % 60
    if (minutes > 9){
        minutes = String(minutes)
    }
    else{
        minutes = "0" + String(minutes)
    }
    endTime = hour + ":" + minutes 
    meetingTime.push(startTime + " - " + endTime)
}

///////
//var meetingTime = ["2:00 - 3:00", "3:00 - 4:00", "4:00 - 5:00", "5:00 - 6:00", "7:00-8:00", "8:00-9:00", "9:00-10:00"];
var teachers = ["teacher 1", "teacher 2", "teacher 3", "teacher 4", "teacher 5"];
var classRooms = ["b1", "b2", "b3", "b4", "b5", "b6"];
var roomCapacity = [100, 80, 50, 150, 40, 140];
var csCourses = ["a", "b", "c"];
// var csCourses = ["Algebra", "Calculus", "Programming", "Database", "Discrete Math", "Data Structure", "Algorithms", "Electronics", "Comp Arc"];
var creditHour = [4, 3, 2];
var CourseTeachermapping = [teachers[0], teachers[0], teachers[1]];
var numberOfStudent = 100;


// dep[0] = new Department(meetingTime, days, teachers, classRooms, roomCapacity, csCourses, creditHour, CourseTeachermapping, numberOfStudent);
// dep[1] = new Department(meetingTime1, days1, teachers1, classRooms1, roomCapacity1, csCourses1, creditHour1, CourseTeachermapping1, numberOfStudent1);
// dep[2] = new Department(meetingTime2, days2, teachers2, classRooms2, roomCapacity2, csCourses2, creditHour2, CourseTeachermapping2, numberOfStudent2);

// schedule(dep, 0);
// schedule(dep, 1);
// schedule(dep, 2);

export const inputFields = (item, index) => {
    console.log(item.time);
    console.log(item);
    var CourseName = inputsCourseName(item);
    var CourseHour = inputsCourseCreditHour(item);
    var CourseTeachers = inputsCourseTeachers(item);
    var ClassRooms = inputsClassRoomName(item);
    var ClassRoomsCapacity = inputsClassRoomCapacity(item);
    var noOfStudent = Number(item.noOfStudent);
    var days = inputsdays(item.days)
    var meetingTimes = inputsMeetingTime(item.time)
    // console.log(CourseTeachers)
    dep[index] = new Department(meetingTimes, days, CourseTeachers, ClassRooms, ClassRoomsCapacity, CourseName, CourseHour, CourseTeachers, noOfStudent);
    //    Room Assign
    // Add CheckBox For Days
    scheduleRoom(dep, index);
    console.log(dep[index].assignedRooms)
    schedule(dep, index);
    console.log(dep[index])
    // return schedule(dep, 0);
}
export const inputsMeetingTime = (input) => {
    var result = [];
    var meetingTime = ["2:00 - 3:00", "3:00 - 4:00", "4:00 - 5:00", "5:00 - 6:00", "7:00-8:00", "8:00-9:00", "9:00-10:00"];
    console.log(input);
    if (input.m1 == true) {
        result.push(meetingTime[0]);
    }
    if (input.m2 == true) {
        result.push(meetingTime[1]);
    }
    if (input.m3 == true) {
        result.push(meetingTime[2]);
    }
    if (input.m4 == true) {
        result.push(meetingTime[3]);
    }
    if (input.m5 == true) {
        result.push(meetingTime[4]);
    }
    if (input.m6 == true) {
        result.push(meetingTime[5]);
    }
    if (input.m7 == true) {
        result.push(meetingTime[6]);
    }
    console.log(result)
    return result;
}
export const inputsdays = (input) => {
    var result = [];
    result.push(input.monday);
    result.push(input.tuesday);
    result.push(input.wensday);
    result.push(input.thrusday);
    result.push(input.friday);
    console.log(result)
    return result;
}
export const inputsClassRoomName = (inputs) => {
    var result = [];

    for (let i = 0; i < inputs.classRoom.length; i++) {
        var single = inputs.classRoom[i].roomName;
        if (single != "") {
            result.push(inputs.classRoom[i].roomName)
            // roomName.push(Number(inputs.course[i].roomName))
        }

    }
    console.log(result)
    return result;
}
export const inputsClassRoomCapacity = (inputs) => {
    var result = [];

    for (let i = 0; i < inputs.classRoom.length; i++) {
        var single = inputs.classRoom[i].roomCapacity;
        if (single != "") {
            result.push(Number(inputs.classRoom[i].roomCapacity))
            // roomCapacity.push(Number(inputs.course[i].roomCapacity))
        }

    }
    console.log(result)
    return result;

}
export const inputsCourseTeachers = (inputs) => {
    var result = [];

    for (let i = 0; i < inputs.course.length; i++) {
        var single = inputs.course[i].courseInstactor;
        if (single != "") {
            result.push(inputs.course[i].courseInstactor)
            // courseInstactor.push(Number(inputs.course[i].courseInstactor))
        }

    }
    // console.log(result)
    return result;
}
export const inputsCourseCreditHour = (inputs) => {
    var result = [];

    for (let i = 0; i < inputs.course.length; i++) {
        var single = inputs.course[i].creditHour;
        if (single != "") {
            result.push(Number(inputs.course[i].creditHour))
            // creditHour.push(Number(inputs.course[i].creditHour))
        }

    }
    console.log(result)
    return result;
}

export const inputsCourseName = (inputs) => {
    var result = [];
    //console.log(inputs);
    for (let i = 0; i < inputs.course.length; i++) {
        var single = inputs.course[i].courseName;
        // console.log(single + "ghf")
        if (single != "") {
            console.log(inputs.course[i].courseName);
            // csCourses.push(inputs.course[i].courseName);
            result.push(single)
        }
    }
    return result;
}
export const initalzation = (item, index) => {
    // console.log(dep[index].schedule)
    console.log(item.departementName);
    console.log(dep[index]);

    const initalValue = {
        departementName: item.departementName,
        departementInfo: dep[index]
    }
    return initalValue
}

function schedule(dep, num) {

    if (!isPossible(dep[num])) {
        return;
    }

    var x = 0;
    for (var i = 0; i < dep[num].schedule.length; i++) {
        for (var j = 0; j < dep[num].schedule[i].length; j++) {
            if (dep[num].schedule[i][j] == "" && dep[num].days[j]) {
                var count = 0;
                while (true) {
                    x = Math.floor(Math.random() * dep[num].courses.length);
                    var conflict = false;
                    if (count > 1000) {
                        break;
                    }
                    if (dep[num].creditHour[x] == 0) {
                        count++;
                        continue;
                    }
                    for (var a = 0; a < dep.length; a++) {
                        if (dep[a].schedule[i][j] != null)
                            if (getIndex(dep[a].schedule[i][j], dep[num].courses) != -1)
                                if (a != num && dep[a].CourseTeachermapping[getIndex(dep[a].schedule[i][j], dep[num].courses)] == dep[num].CourseTeachermapping[x]) {
                                    conflict = true;
                                    break;
                                }
                    }
                    if (!conflict) {
                        dep[num].schedule[i][j] = dep[num].courses[x];
                        dep[num].creditHour[x]--;
                        break;
                    }
                }
            }
        }
    }

}



function scheduleRoom(dep, num) {

    // if(!isPossible(dep[num])){
    //     return;
    // }

    var x = 0;
    for (var i = 0; i < dep[num].assignedRooms.length; i++) {
        for (var j = 0; j < dep[num].assignedRooms[i].length; j++) {
            if (dep[num].assignedRooms[i][j] == "" && dep[num].days[j]) {
                while (true) {
                    x = Math.floor(Math.random() * dep[num].classRooms.length);
                    var conflict = false;
                    for (var a = 0; a < dep.length; a++) {
                        if (dep[a].assignedRooms[i][j] != null)
                            if (a != num && dep[a].assignedRooms[i][j] == dep[num].classRooms[x]) {
                                conflict = true;
                                break;
                            }
                    }
                    if (!conflict && dep[num].roomCapacity[x] >= dep[num].numberOfStudent) {
                        dep[num].assignedRooms[i][j] = dep[num].classRooms[x];
                        break;
                    }
                }
            }
        }
    }

}



function getIndex(course, courses) {
    for (var i = 0; i < courses.length; i++) {
        if (course == courses[i]) {
            return i;
        }
    }
    return -1;
}

function isPossible(dep) {
    var totalCreditHour = 0;
    for (var i = 0; i < dep.creditHour.length; i++) {
        totalCreditHour += dep.creditHour[i];
    }
    var num = dep.days.length * dep.meetingTime.length;
    if (num < totalCreditHour) {
        return false
    }
    return true;
}
