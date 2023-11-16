
/**
 Protractor is a Node-based test runner that is used to tackle end-to-end or
 automated acceptance testing. Essentially, it is a tool that allows us to
 programmatically control a web browser. Just like in manual testing,
 Protractor has the ability to browse to a specific page by entering its
 URL, and then interact with the elements on the page itself.

 We can use Protractor to browse to the login page at the start of each test,
 enter valid credentials, hit the Login button, and then interact with the site's pages.

 Protractor uses the Selenium driver under the hood to control web browser instances.
 Note that Selenium requires a Java runtime to have been installed, so go ahead and
 install Java if required.

 Let's start by installing the Selenium Server for use with Protractor as follows:
 ```
 webdriver-manager update
 ```

 This command will download a few packages, including the correct version of
 chromedriver for our operating system. Once it has completed, we now need
 to start the Selenium server as follows:
 ```
 webdriver-manager start
 ```

 Once the server is up and running, we will need a configuration file for
 Protractor that tells Protractor where to find the Selenium server.
 @see protactor.conf.js
 */

// Protractor is installed as an npm package as follows:
// ```
//  npm install -g protractor
// ```
import { browser, By, Key } from 'protractor';

// If you keep an eye on your screen while running this test,
// you will notice that Protractor is starting a new instance
// of a Chrome browser session, navigating to the Google home
// page, and then running the tests.
describe("simple protractor test", () => {
    // Note that this test has been marked as async, so that
    // we can use an await call within the body of the test.
    it("should navigate to google and find a title", async () => {
        browser.driver.get('https://www.google.com');
        expect(browser.driver.getTitle()).toContain("Google");

        // Note that calls to Selenium are, by nature, asynchronous,
        // as Selenium needs to interact with the browser instance,
        // and we don't know how long it will take to navigate to a
        // web page, or access any of its elements.
        let title = await browser.driver.getTitle();
        console.log(`await getTitle() returned : ${title}`);
    });

    // Selenium has a number of functions that we can use in order to find HTML
    // elements on a page during testing. We can search for an element using its
    // id property, or we can use a CSS selector, or xpath.
    it("should search for the term TypeScript", async () => {
        browser.driver.get('https://www.google.com');

        await browser.driver.findElement(
            By.css(`input[type=text]`)
        // we input the text "TypeScript" by using the sendKeys function.
        ).sendKeys("TypeScript");

        await browser.driver.findElement(
            By.xpath(`//*[@id="tsf"]/div[2]/div[1]/div[1]/div/div[2]/input`)
        // We are then using the sendKeys function to simulate the user hitting the Enter key.
        ).sendKeys(Key.ENTER);

        let title = await browser.driver.getTitle();

        expect(title).toContain(`TypeScript`);
        console.log(`await getTitle() returned : ${title}`);
    });

});

