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
var teachers = ["teacher 1", "teacher 2", "teacher 3"];
var classRooms = ["b1", "b2", "b3", "b4", "b5", "b6"];
var roomCapacity = [100, 80, 50, 150, 40, 140];
var csCourses = ["Algebra", "Calculus", "Programming"];
var creditHour = [3, 3, 4];
var CourseTeachermapping = [teachers[0], teachers[1], teachers[2]];
var numberOfStudent = 100;

dep[0] = new Department(meetingTime, days, teachers, classRooms, roomCapacity, csCourses, creditHour, CourseTeachermapping, numberOfStudent);

console.log(dep[0])

// schedule(dep, 0);   
// console.log(dep)
// schedule(dep, 1);
// schedule(dep, 2);



function createTable(item, tableid) {
    /*  var table = document.getElementById(tableid);
     for (let i = 0; i < item.length; i++) {
         var tr = document.createElement("tr");
         table.appendChild(tr);
         for (let j = 0; j < item[i].length; j++) {
             var th = document.createElement("th");
             var time = document.createTextNode(item[i][j]);
             th.appendChild(time);
             tr.appendChild(th);
         }
     }
  */
}


function schedule(dep, num) {
    if (!isPossible(dep[num])) {
        console.log("not possible");
        return;
    }
    var x = 0;
    for (var i = 0; i < dep[num].schedule.length; i++) {
        for (var j = 0; j < dep[num].schedule[i].length; j++) {
            if (dep[num].schedule[i][j] == "") {
                var count = 0;
                while (true) {
                    x = Math.floor(Math.random() * dep[num].courses.length);
                    console.log(x);
                    var conflict = false;
                    if (count > 10000) {
                        console.log("10000")
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
export const initalzation = (inputs) => {
    // days = day;
    console.log(inputs.course)
    var y = inputsCourseName(inputs.course);
    // csCourses = y;
    console.log(dep)
    var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
    var meetingTime = ["2:00 - 3:00", "3:00 - 4:00", "4:00 - 5:00", "5:00 - 6:00", "7:00-8:00", "8:00-9:00", "9:00-10:00"];
    var teachers = ["teacher 1", "teacher 2", "teacher 3"];
    var classRooms = ["b1", "b2", "b3", "b4", "b5", "b6"];
    var roomCapacity = [100, 80, 50, 150, 40, 140];
    var csCourses = ["Algebra", "Calculus", "Programming"];
    var creditHour = [3, 3, 4];
    var CourseTeachermapping = [teachers[0], teachers[1], teachers[2]];
    var numberOfStudent = 100;
    schedule(dep, 0);
    var item = dep;


    for (let i = 0; i < item.length; i++) {
        // var tr = document.createElement("tr");
        // table.appendChild(tr);
        for (let j = 0; j < item[i].length; j++) {
            // var th = document.createElement("th");
            // console.log(item[i][j])
            // var time = document.createTextNode(item[i][j]);
            // th.appendChild(time);
            // tr.appendChild(th);
        }
        // console.table(item[0].schedule)
        return item[0].schedule
    }
    // console.log(day);
}
export const toMap = (inputs) => {
    var result = []
    if (isNaN(inputs)) {
        for (var i = 0; i < inputs[0].length; i++) {
            result[i] = new Array(inputs[0].length).fill();
            for (var j = 0; j < inputs.length; j++) {
                result[i][j] = inputs[j][i]; // Here is the fixed column access using the outter index i.
            }
        }
    }
    return result;
}
export const inputsCourseName = (inputs) => {
    var result = [];

    for (let i = 0; i < inputs.length; i++) {
        var single = inputs[i].courseName;
        if (single != "") {
            result.push(single)
        }

    }
    return result;
}
export const inputsCourseCreditHour = (inputs) => {
    var result = [];

    for (let i = 0; i < inputs.length; i++) {
        var single = inputs[i].creditHour;
        if (single != "") {
            result.push(single)
        }

    }
    return result;
}


/* export const createTable = (item) => {
    // var table = document.getElementById(tableid);
    // for (let i = 0; i < item.length; i++) {
    //     var tr = document.createElement("tr");
    //     table.appendChild(tr);
    //     for (let j = 0; j < item[i].length; j++) {
    //         var th = document.createElement("th");
    //         var time = document.createTextNode(item[i][j]);
    //         th.appendChild(time);
    //         tr.appendChild(th);
    //     }
    // }
    // alert("asd")
    // console.log("asd")
    return days;
}
 */
