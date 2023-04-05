$(document).ready(function(){
    $.getJSON("http://localhost:8080/credentials.json", function(data){
        $(".btn-primary").click(function(){

            let emailAddress = Object.keys(data);
            let gNumbers = [];

            for(let key in data){
                gNumbers.push(data[key]["g-number"])
            }

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
});