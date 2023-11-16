
// let's install the jquery library as well:
// ```
//  npm install jquery
// ```
import $ from "jquery";
// And the @types declaration files for both libraries as follows:
// ```
//  npm install @types/jquery --save-dev
// ```

// Consider the following code:

function setTestDiv(text: string) {
    $('#test_div').html(`<p>${text}</p>`);
}

// We can now write a test for this function as follows:

describe("html_tests", () => {
    it("should set text on div", () => {
        // create the DOM elements
        document.body.innerHTML = `<div id="test_div"></div>`;
        let htmlElement = $('#test_div');
        // If jQuery does not find the named element in the DOM, it
        // will return an empty object, or {}, which has a length of 0.
        expect(htmlElement.length).toBeGreaterThan(0);

        setTestDiv("Hello World");
        expect(htmlElement.html()).toContain("Hello World");
    });
});
