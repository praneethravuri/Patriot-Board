async function readJSONFile(url) {
    const data = await $.getJSON(url);
    return data;
}

let courseList = await readJSONFile("./model/courseList.json");
let studentData = await readJSONFile("./model/studentData.json");
let studentDetails = await readJSONFile("./model/credentials.json");

let courseDetails = courseList;



const courseSelect = document.getElementById("courseSelect");
const addedCourses = [];

for (const course in courseList) {
  const courseCode = course.split(" ")[0];
  if (!addedCourses.includes(courseCode)) {
    addedCourses.push(courseCode);
    const option = document.createElement("option");
    option.value = courseCode;
    option.text = courseCode;
    courseSelect.add(option);
  }
}
const courseNumberInput = document.getElementById("courseNumberInput");
const searchResults = document.getElementById("searchResults");

// Event listeners
courseSelect.addEventListener("change", showCourseDetails);
courseNumberInput.addEventListener("keyup", showCourseDetails);



// Function to show course details
// Function to show course details
function showCourseDetails() {
    // Clear any previous cards
    searchResults.innerHTML = "";
    $("#available-courses-title").show();
  
    // Get the selected course option
    const selectedOption = courseSelect.value !== "none" ? courseSelect.value : "";
  
    // Get the entered course number
    const courseNumber = courseNumberInput.value.trim().toUpperCase();
  
    // Loop through each course and check if it contains the selected option and/or course number
    for (const course in courseList) {
      const courseCode = course.split(" ")[0].toUpperCase();
      const courseNum = course.split(" ")[1].toUpperCase();
  
      if (courseCode.includes(selectedOption) && (courseNumber === "" || courseNum.startsWith(courseNumber))) {
        // Create a card with course details
        const card = document.createElement("div");
        card.className = "col-md-12 mb-3";
        card.innerHTML = `
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">${course}</h5>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">Instructor: ${courseList[course].instrName}</li>
                <li class="list-group-item">Location: ${courseList[course].location}</li>
                <li class="list-group-item">Timings: ${courseList[course].timings}</li>
                <li class="list-group-item"><button class="${courseCode}-${courseNum} select-course-btn">Select - ${course}</button></li>
              </ul>
            </div>
          </div>
        `;
        searchResults.appendChild(card);
      }
    }
  }

// Event listener for search results
searchResults.addEventListener("click", function(event) {
    if (event.target.classList.contains("select-course-btn")) {
      $(".template-text").hide();
        const courseCodeNum = event.target.classList[0].split("-");
        const courseCode = courseCodeNum[0];
        const courseNum = courseCodeNum[1];
        const selectedCourse = courseList[`${courseCode} ${courseNum}`];
  
      // Create a card for the selected course
      const card = document.createElement("div");
      card.className = "col-md-4 mb-3";
      card.innerHTML = `
        <div class="card custom-card">
          <div class="card-body">
            <h5 class="card-title">${courseCode} ${courseNum}</h5>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">Instructor: ${selectedCourse.instrName}</li>
              <li class="list-group-item">Location: ${selectedCourse.location}</li>
              <li class="list-group-item">Timings: ${selectedCourse.timings}</li>
              <li class="list-group-item"><button class="${courseCode} remove-course-btn">Remove</button></li>
            </ul>
          </div>
        </div>
      `;
      const selectedCoursesBox = document.getElementById("selected-courses-box");
      selectedCoursesBox.appendChild(card);
    }
  });
  