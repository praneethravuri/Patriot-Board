let studentEmail = localStorage.getItem("studentEmail");


async function readJSONFile(url) {
    const data = await $.getJSON(url);
    return data;
}

let courseList = await readJSONFile("./model/courseList.json");
let studentData = await readJSONFile("./model/studentData.json");
let studentDetails = await readJSONFile("./model/credentials.json");

studentDetails = studentDetails[studentEmail];
let studentCourses = studentData[studentEmail];
let courseDetails = courseList;


$(document).ready(function(){
    let row = "<tr>"
    row += "<td class='text-nowrap'>" + studentDetails["name"] + "</td>"
    row += "<td class='text-nowrap'>" + studentDetails["g-number"] + "</td>"
    row += "<td class='text-nowrap'>" + studentDetails["phone"] + "</td>"
    row += "<td class='text-nowrap'>" + studentEmail + "</td>"
    $("#currStudentInfo").append(row);
});