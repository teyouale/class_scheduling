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

var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
var meetingTime = ["2:00 - 3:00", "3:00 - 4:00", "4:00 - 5:00", "5:00 - 6:00", "7:00-8:00", "8:00-9:00", "9:00-10:00"];
var teachers = ["teacher 1", "teacher 2", "teacher 3", "teacher 4", "teacher 5"];
var classRooms = ["b1", "b2", "b3", "b4", "b5", "b6"];
var roomCapacity = [100, 80, 50, 150, 40, 140];
var csCourses = [];
//var csCourses = ["Algebra", "Calculus", "Programming", "Database", "Discrete Math", "Data Structure", "Algorithms", "Electronics", "Comp Arc"];
var creditHour = [];
var CourseTeachermapping = [teachers[0], teachers[0], teachers[1], teachers[2], teachers[3], teachers[4], teachers[1], teachers[2], teachers[3]];
var numberOfStudent = 100;


dep[0] = new Department(meetingTime, days, teachers, classRooms, roomCapacity, csCourses, creditHour, CourseTeachermapping, numberOfStudent);
// dep[1] = new Department(meetingTime1, days1, teachers1, classRooms1, roomCapacity1, csCourses1, creditHour1, CourseTeachermapping1, numberOfStudent1);
// dep[2] = new Department(meetingTime2, days2, teachers2, classRooms2, roomCapacity2, csCourses2, creditHour2, CourseTeachermapping2, numberOfStudent2);

// schedule(dep, 0);
// schedule(dep, 1);
// schedule(dep, 2);

export const inputFields = (item) => {
    console.log(item);
    var CourseName = inputsCourseName(item);
    var CourseHour = inputsCourseCreditHour(item);
    console.log(CourseName);
    console.log(CourseHour);
    dep[0] = new Department(meetingTime, days, teachers, classRooms, roomCapacity, csCourses, creditHour, CourseTeachermapping, numberOfStudent);
    console.log(dep[0].schedule)
    return schedule(dep, 0);
}
export const inputsCourseCreditHour = (inputs) => {
    var result = [];

    for (let i = 0; i < inputs.course.length; i++) {
        var single = inputs.course[i].creditHour;
        if (single != "") {
            result.push(single)
            creditHour.push(inputs.course[i].creditHour)
        }

    }
    // console.log(result)
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
            csCourses.push(inputs.course[i].courseName);
            result.push(single)
        }
    }
    return result;
}
export const initalzation = () => {
    console.log(dep[0].schedule)
    return dep[0].schedule
}

function schedule(dep, num) {

    if (!isPossible(dep[num])) {
        return;
    }

    var x = 0;
    for (var i = 0; i < dep[num].schedule.length; i++) {
        for (var j = 0; j < dep[num].schedule[i].length; j++) {
            if (dep[num].schedule[i][j] == "") {
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

function assignRoom(dep, num) {

    var x = 0;
    for (var i = 0; i < dep[num].assignedRooms.length; i++) {
        for (var j = 0; j < dep[num].assignedRooms[i].length; j++) {
            if (dep[num].assignedRooms[i][j] == "") {
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
                    if (!conflict && dep[num].classRooms[x] >= dep[num].numberOfStudent) {
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