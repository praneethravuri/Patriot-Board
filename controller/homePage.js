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

const courseCardsContainer = document.getElementById('courseCards');

studentCourses.forEach((course) => {
    const courseDetailsObj = courseDetails[course];
    let courseDescription = courseDetailsObj.description;
    if (courseDescription.length > 100) {
        courseDescription = courseDescription.substring(0, 107) + "...";
    }
    const cardHtml = `
        <div class="col">
            <div class="card mb-3">
                <div class="card-body">
                    <h5 class="card-title">${course}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">${courseDetailsObj.instrName}</h6>
                    <p class="card-text">${courseDetailsObj.location}</p>
                    <p class="card-text">${courseDescription}</p>
                    <p class="card-text">${courseDetailsObj.timings}</p>
                    <p class="card-text"><button class='view-btn'>View Course</button></p>
                </div>
            </div>
        </div>
    `;
    courseCardsContainer.innerHTML += cardHtml;
});
