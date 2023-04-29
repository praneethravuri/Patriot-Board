async function readJSONFile(url) {
    const data = await $.getJSON(url);
    return data;
}

let data = await readJSONFile("./model/credentials.json");

//module.exports = readJSONFile;

$(document).ready(function(){
    $(".btn-primary").click(function(){
        let studentID = $("#student-id").val();
        let password = $("#password").val();
        console.log(studentID);
        console.log(password);
        let url = "/home-page.html"
        if(studentID in data){
            if(data[studentID].password === password){
                localStorage.setItem("studentEmail", studentID);
                window.location.href = "./home-page.html";
            }
            else{
                alert("The credentials entered are incorrect");
            }
        }
        else{
            alert("This account does not exists");
        }
    });
});