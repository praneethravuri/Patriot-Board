async function readJSONFile(url) {
    const data = await $.getJSON(url);
    return data;
}

let data = await readJSONFile("http://localhost:8080/model/credentials.json");

$(document).ready(function(){
    $(".btn-primary").click(function(){
        let studentID = $("#student-id").val();
        let password = $("#password").val();

        if(studentID in data){
            if(data[studentID].password === password){
                window.location.href = "home-page.html";
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