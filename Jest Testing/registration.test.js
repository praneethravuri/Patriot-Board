const readJSONFile = require("../controller/registration.js").readJSONFile;


test("check if the data is retrieved", async () => {
    const testData = {
        "courseName" : {
            "instrName" : "profName",
            "location" : "classLocation",
            "timings" : "classTimings"
        }
    }

    setTimeout( () => {
        const data = $.getJSON("./model/courseList.json");
        expect(data).toBe(testData)
    }, 5000)
});