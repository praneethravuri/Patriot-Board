const readJSONFile = require("./JS/homePage.js/readJSONFile");


test("check if the data is retrieved", async () => {
    const testData = {
        "courseName" : {
            "instrName" : "profName",
            "location" : "classLocation",
            "timings" : "classTimings"
        }
    }

    const data = await  $.getJSON("http://localhost:8080/JSON/studentData.json");
    expect(data).toBe(testData)
});