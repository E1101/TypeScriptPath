
/**
 Jest uses a library named jsdom to allow for testing HTML elements and interactions.
 Jsdom is not an actual browser; it is a library that implements the JavaScript DOM API,
 and can, therefore, simulate a full-blown browser experience. The benefit of using
 jsdom is in the speed at which we can run our tests, and the fact that we do not have
 to provide an environment that can run a full browser.

 There are times when we need to test DOM events, such as an onclick or onselect event,
 which are tied to a particular JavaScript function held within an HTML script tag. The
 jsdom library will parse these script tags and JavaScript functions and execute them,
 as long as we have set up the test to do so.
 */

// We can install the jsdom library using npm as follows:
// ```
//  npm install jsdom --save-dev
// ```
import { JSDOM } from "jsdom";
// And the @types declaration files for both libraries as follows:
// ```
//  npm install @types/jsdom --save-dev
// ```

// We can use this sort of technique for other DOM events,
// including onchange, onfocus, ondrag, or anything else.
// Having the ability to construct snippets of HTML and test
// them is a very powerful feature of jest and jsdom. We can
// fill in forms, click on the submit, cancel, or OK buttons,
// and generally simulate user interaction with our application.
describe("html_tests", () => {

    const htmlWithClickEvent = `
        <body>
            <script type="text/javascript">
                function handle_click_event() {
                    console.log("handle_click_event() called.");
                }
            </script>
            <div id="click_handler_div"
                onclick="handle_click_event()"
            >Click Here</div>
        </body>
        `;

    it("should trigger an onclick DOM event", () => {
        // This JSDOM class is being constructed with two arguments.
        // The first argument is the string value that represents the
        // HTML itself, and the second argument is a configuration
        // object with the property runScripts, which has been set to
        // "dangerously". This option will run both the onclick DOM events,
        // and any JavaScript that is contained within our source HTML.
        // Without this option, these will be ignored.
        let dom = new JSDOM(
            htmlWithClickEvent,
            { runScripts: "dangerously" }
        );

        // to find a DOM element with the id of "click_handler_div". Note that we
        // must use the querySelector function on the dom.window.document property,
        // which represents our HTML DOM root.
        let clickHandler = <HTMLElement> dom.window.document.querySelector("#click_handler_div");
        let clickEventSpy = jest.spyOn(clickHandler, "click");

        clickHandler.click();
        expect(clickEventSpy).toHaveBeenCalled();
    });
});
