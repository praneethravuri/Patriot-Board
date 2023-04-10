Open the website using http-server:

1. Install http-server by running the command "npm install http-server"
2. Open the folder in terminal and run "http-server --cors -c-1"
3. Open "localhost:8080/index.html" for login page
4. Open "localhost:8080/home-page.html" for Homepage
5. Open "localhost:8080/registration.html" for Registration
6. The correct credentials to access the website are in model/credentials.json
7. When a particular user has signed in, the courses unique to the user are displayed on the home-page.html along with the grades
8. In registration.html, user can enter the department code (eg infs, cs, swe) in the course department input box and the course number in the course number input box to search for a specific course. On clicking the submit button, the user can see the search results in the box on the right side
9. When add course is clicked, the student has registered to all the courses in the search results
10. All the available courses are present in model/courseList.json

Testing with JEST
1. Go to project directory and install npm install --save-dev jest
2. install npm install --save-dev puppeteer
3. run the command jest filename.test.js
4. server should be active for running the scripts 
5. screenshots and videos are provided in jest video folder
