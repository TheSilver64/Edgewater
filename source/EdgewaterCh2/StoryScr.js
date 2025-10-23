
<<<<<<< HEAD
//Sugarcube js code starts here:
=======
//Sugarcube js code starts here:

/*
learned_executor : 0 or 1 
talking to familes: 0, 1, 2
Hepburn: 0 or 1
Ashford: 0 or 1 
Wyatt: 0 or 1
You interact with different people people at the funeral:
0: The Hepburns
	If learned exceutor is 0, then
		Hepburn_convo: 0
	Else: 
		Hepburn_convo: 1
1: The Ashfords
	If learned exceutor is 0, then
		Ashford_convo: 0
	Else: 
		Ashford_convo: 1
2: The Wyatts
If learned exceutor is 0, then
		Ashford_convo: 0
	Else: 
		Ashford_convo: 1

The only thing that changes is depending on who you talk to first, that's where you’ll learn that you’re the executor of your father’s will. Flags that you’ve learned this information so when you talk to the other families this information doesn’t show up again. 
(maybe you interact differently or say something differently in response).
*/
const storyFlagsCh2 = new Map([
["learned_executor", 0], // 0 or 1
["talking_to_familes", 0], // 0, 1, 2
["Hepburn", 0], // 0 or 1
["Ashford", 0], // 0 or 1
["Wyatt", 0], // 0 or 1
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
/*--end--*/
>>>>>>> BH_3rd_Branch
