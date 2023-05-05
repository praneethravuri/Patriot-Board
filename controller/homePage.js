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
            <div class="card mb-3 mr-10">
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


// Grades Display Bar
// Get the div element with the id "grades-display"
const gradesDisplay = document.getElementById("grades-display");

// Create a loop to add the code 3 times
for (let i = 0; i < 3; i++) {
  // Create a new div element
  const progressTrackerDiv = document.createElement("div");
  progressTrackerDiv.classList.add("progress-tracker");

  const randomNumber = Math.random()* 99 + 1;
  const randomGrade = Math.round(randomNumber * 100) / 100;
  let currentCourse = studentCourses[i]

  // Set the innerHTML of the div element to the progress tracker code
  progressTrackerDiv.innerHTML = `
  <div class="progress-tracker">
  <div class="progress-label">${currentCourse}</div>
  <div class="progress-bar">
      <div class="progress"></div>
  </div>
  <div class="progress-label"><span class="progress-value">0%</span></div>
</div>


  `;

  // Append the new div element to the gradesDisplay div
  gradesDisplay.appendChild(progressTrackerDiv);
}
