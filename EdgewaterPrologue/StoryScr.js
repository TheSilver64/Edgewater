
/*
Main Chapter branch: 0 or 1 
A: Story 1 gets nightmare 1
B: Story 2 gets nightmare 2
*/

const storyFlagsPro = new Map([
["Main_Chapter_Branch", 0], // 0 or 1

// Determines which nightmare happens:
["Story", 0], // 0 = Story 1, 1 = Story 2
])

// Updates a specified flag key to a given value
function update_flag(key, value) {
    story_flags.set(key, value);
}
// Gets the value of a specified flag key
function get_flag(key) {
    return story_flags.get(key);
}
/*--end--*/

/*--code for text crawl--*/
window.textWaitTime = 20; // wait time in ms for each character to appear
window.urgentTextWaitTime = 5; // Shorter wait time for urgency effect in text
window.slowTextWaitTime = 30; // A... slow... typewriter...

// helper function to add delays between characters
window.sleep = function (ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// used to produce a text crawl effect for a given string of text, 
// output to an html element with the given id (e.g. <p id=example></p>)
window.textCrawl = async function (id, text) {
    let s = text;
    for(i = 0; i <= s.length; i++) {
        await sleep(textWaitTime);
        document.getElementById(id).innerHTML = s.slice(0, i);
    }
}
// Faster text crawl for urgency effect in text
window.textCrawlFast = async function (id, text) {
    let s = text;
    for(i = 0; i <= s.length; i++) {
        await sleep(urgentTextWaitTime);
        document.getElementById(id).innerHTML = s.slice(0, i);
    }
}
// Slow... Typewriter... Function...
window.textCrawlSlow = async function (id, text) {
    let s = text;
    for(i = 0; i <= s.length; i++) {
        await sleep(slowTextWaitTime);
        document.getElementById(id).innerHTML = s.slice(0, i);
    }
}
/*--end--*/

/*
<<timed 3s>>
<<=window.textCrawl("textid",
""
)>>
<</timed>>
*/