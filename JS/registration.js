function showPWField() {
    var id = document.getElementById("AdvancedSearch");
    if (id.style.display === "none") {
        id.style.cssText = "display: flex; flex-direction:column; min-height: 20%; justify-content: space-between;";
    } else {
        id.style.display = "none";
    }
}

function showPW() {
    var id = document.getElementById("results");
    if (id.style.display === "none") {
        id.style.cssText = "display: flex;";
    } else {
        id.style.display = "none";
    }
}

async function readJSONFile(url) {
    const data = await $.getJSON(url);
    return data;
}

let courseList = await readJSONFile("http://localhost:8080/JSON/courseList.json");

$(document).ready(function(){
    $("#registered-courses-table").hide();
    $("#courses-status").text("You have not registered for any courses");
});

function showResults(course, courseList){
    document.getElementById("results").style.display = "block";
    $(document).ready(function(){
        let row = "<tr>"
        row += "<td>" + course + "</td>"
        row += "<td>" + courseList[course].instrName + "</td>"
        row += "<td>" + courseList[course].location + "</td>"
        row += "<td>" + courseList[course].timings + "</td>"
        course = course.split(" ");
        course = course[0] + "-" + course[1];
        row += "<td><button onclick = 'addCourse()' id = 'add-class' class=" + course + ">Add Course</button></td>"
        $("#search-result-course").append(row);
    });
}



$(document).ready(function(){
    $("#search-btn").click(function(){
        let course = ($("#dcode").val() + " " + $("#cno").val()).toUpperCase();
        if(course in courseList){
            showResults(course, courseList);
        }
        else{
            $("#search-result").text("This course is not available");
        }
    });
});