const readJSONFile = require("../JS/registration.js").readJSONFile;


test("check if the data is retrieved", async () => {
    const testData = {
        "courseName" : {
            "instrName" : "profName",
            "location" : "classLocation",
            "timings" : "classTimings"
        }
    }

    setTimeout( () => {
        const data = $.getJSON("http://localhost:8080/JSON/studentData.json");
        expect(data).toBe(testData)
    }, 5000)
});