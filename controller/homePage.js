let studentDetails = ["Praneeth Ravuri", "G01369627", "571-683-8719"];
let studentEmail = "pravuri@gmu.edu";

$(document).ready(function(){
    let row = "<tr>"
    row += "<td>" + studentDetails[0] + "</td>"
    row += "<td>" + studentDetails[1] + "</td>"
    row += "<td>" + studentDetails[2] + "</td>"
    row += "<td>" + studentEmail + "</td>"
    $("#currStudentInfo").append(row);
});

async function readJSONFile(url) {
    const data = await $.getJSON(url);
    return data;
}

let courseList = await readJSONFile("http://localhost:8080/model/courseList.json");
let studentData = await readJSONFile("http://localhost:8080/model/studentData.json");

let currStudentData = studentData[studentEmail];

for(let i = 1; i<=3; i++){
    let currentCourse = currStudentData[i-1];
    document.getElementById("course-title-" + i.toString()).innerHTML = currentCourse;
    document.getElementById("course-prof-" + i.toString()).innerHTML = courseList[currentCourse].instrName;
    document.getElementById("course-loc-" + i.toString()).innerHTML = courseList[currentCourse].location;
    document.getElementById("timings-" + i.toString()).innerHTML = courseList[currentCourse].timings;
}

$(document).ready(function(){
    for(let i = 1; i<=3; i++){
        let currentCourse = currStudentData[i-1];
        let id = "course-" + i.toString();
        $("#" + id).text(currentCourse);
    }
});