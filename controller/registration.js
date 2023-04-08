/*function showPWField() {
    var id = document.getElementById("AdvancedSearch");
    if (id.style.display === "none") {
        id.style.cssText = "display: flex; flex-direction:column; min-height: 20%; justify-content: space-between;";
    } else {
        id.style.display = "none";
    }
}
*/

$("#AdvancedSearch").hide();

$(document).ready(function(){
    $("#advanced-option").click(function(){
        $("#AdvancedSearch").show();
        document.getElementById("AdvancedSearch").style.cssText = "display: flex; flex-direction:column; min-height: 20%; justify-content: space-between;";
    })
})

async function readJSONFile(url) {
    const data = await $.getJSON(url);
    return data;
}

let courseList = await readJSONFile("http://localhost:8080/model/courseList.json");

module.exports = readJSONFile;

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
        $("#search-result-course").append(row);
    });
}



$(document).ready(function(){
    $("#search-btn").click(function(){
        let course = ($("#dcode").val().trim() + " " + $("#cno").val().trim()).toUpperCase();
        if(course in courseList){
            showResults(course, courseList);
        }
        else{
            $("#search-result").text("This course is not available");
        }
    });
});

$(document).ready(function(){
    $("#add-class").click(function(){
        addAllRows();
    });
});

function addAllRows(){
    $("#registered-courses-table").find("tr:gt(0)").remove();
    $("#courses-status").text("Registered Courses");
    $("#registered-courses-table").show();
    $("#search-result-course tr").each(function(){
        $("#registered-courses-table-body").append($(this).clone());
    });
}

