let studentEmail = localStorage.getItem("studentEmail");


async function readJSONFile(url) {
    const data = await $.getJSON(url);
    return data;
}

let courseList = await readJSONFile("./model/courseList.json");
let studentData = await readJSONFile("./model/studentData.json");
let studentDetails = await readJSONFile("./model/credentials.json");

studentDetails = studentDetails[studentEmail];


$(document).ready(function(){
    let row = "<tr>"
    row += "<td>" + studentDetails["name"] + "</td>"
    row += "<td>" + studentDetails["g-number"] + "</td>"
    row += "<td>" + studentDetails["phone"] + "</td>"
    row += "<td>" + studentEmail + "</td>"
    $("#currStudentInfo").append(row);
});

let currStudentData = studentData[studentEmail];

for(let i = 1; i<=3; i++){
    let currentCourse = currStudentData[i-1];
    document.getElementById("course-title-" + i.toString()).innerHTML = currentCourse;
    document.getElementById("course-prof-" + i.toString()).innerHTML = courseList[currentCourse].instrName;
    document.getElementById("course-desc-" + i.toString()).innerHTML = courseList[currentCourse].description;
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