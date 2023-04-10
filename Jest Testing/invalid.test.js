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
    browser = await puppeteer.launch({
      headless: false,
      defaultViewport: null,
      args: ["--start-maximized"],
    });
    page = await browser.newPage();
    credentials = JSON.parse(fs.readFileSync(CREDENTIALS_FILE));
  });

  test("Invalid Credentials", async () => {
    const email = Object.keys(credentials)[0];
   
    await page.goto(BASE_URL);
    await page.type("#student-id", email);
    await page.type("#password", "password");
    await page.click(".btn-primary");

   await page.waitForSelector(".alert-danger", { visible: true });

    
    const alertText = await page.$eval(".alert-danger", (alert) => alert.textContent);

        expect(alertText).toEqual("The credentials entered are incorrect");
  });

  afterAll(async () => {
    if (browser) {
      await browser.close();
    }
  });
});
