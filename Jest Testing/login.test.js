const fs = require("fs");
const path = require("path");
const puppeteer = require("puppeteer");

const BASE_URL = "http://localhost:8080/index.html";
const CREDENTIALS_FILE = path.join(__dirname, "model", "credentials.json");

describe("Login Page", () => {
  let browser;
  let page;
  let credentials;

  beforeAll(async () => {
   const browser = await puppeteer.launch({
  headless: false,
  timeout: 0,
  defaultViewport: null,
  args: ["--start-maximized"],
  timeout: 60000
});
    page = await browser.newPage();
   
    credentials = JSON.parse(fs.readFileSync(CREDENTIALS_FILE));
  });

  afterAll(async () => {
    await browser.close();
  });

  test("Page title is correct", async () => {
    await page.goto(BASE_URL);
    const pageTitle = await page.title();
    expect(pageTitle).toBe("GMU Course registration");
  });

  test("Successful login", async () => {
    
    const studentID = Object.keys(credentials)[0];
    const password = credentials[studentID].password;
    await page.goto(BASE_URL);
    await page.type("#student-id", studentID);
    await page.type("#password", password);
    await page.click(".btn-primary");
    const currentUrl = await page.url();
    expect(currentUrl).toBe("http://localhost:8080/home-page.html");
    const localStorageEmail = await page.evaluate(() =>
   localStorage.getItem("studentEmail")
    );
    expect(localStorageEmail).toBe(studentID);
  });


   afterAll(async () => {
    if (browser) {
      await browser.close();
    }
  });


});