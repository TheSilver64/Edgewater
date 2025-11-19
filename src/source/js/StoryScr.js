/* === character dialogue macros === */

/**
 * each line of dialogue will get a <span> with the correct class and hover glow
 * 
 *  usage:
 * <<arthur "I'm sorry, Winona.|I shouldn't have abandoned you.">>
 * splits on | to create multiple lines 
 * 
 * supernatural glow:
 * <<arthur-glow "I'm sorry, Winona.|I shouldn't have abandoned you.">>
 */
(function() {
    const characters = [
        "arthur","winona","dove","namid","silas","olivia","colin","harold","martha",
        "rhona","isaac","alexander","rachel","asiniiwin","npc"
    ];
    characters.forEach(name => { // character macro
        Macro.add(name, {
            handler: function() {
                if(this.args.length === 0) return;
                const lines = this.args.join(" ").split("|");
                lines.forEach(line => {
                    const el = document.createElement("span");
                    el.className = name;
                    el.textContent = line.trim();
                    this.output.appendChild(el);
                    this.output.appendChild(document.createElement("br"));
                });
            }
        });
        Macro.add(name + "-glow", { // supernatural glow macro
            handler: function() {
                if(this.args.length === 0) return;
                const lines = this.args.join(" ").split("|");
                lines.forEach(line => {
                    const el = document.createElement("span");
                    el.className = name + " supernatural-glow";
                    el.textContent = line.trim();
                    this.output.appendChild(el);
                    this.output.appendChild(document.createElement("br"));
                });
            }
        });
    });
    Macro.add("scary", { // scary text macro
        handler: function() {
            if(this.args.length === 0) return;
            const lines = this.args.join(" ").split("|");
            lines.forEach(line => {
                const el = document.createElement("span");
                el.className = "scary";
                el.textContent = line.trim();
                this.output.appendChild(el);
                this.output.appendChild(document.createElement("br"));
            });
        }
    });
    Macro.add("superScary", { // super scary text macro
        handler: function() {
            if(this.args.length === 0) return;
            const lines = this.args.join(" ").split("|");
            lines.forEach(line => {
                const el = document.createElement("span");
                el.className = "super-scary supernatural-glow";
                el.textContent = line.trim();
                this.output.appendChild(el);
                this.output.appendChild(document.createElement("br"));
            });
        }
    });
})();

//Story Flags:

/*--code for story flags--*/
// Map containing story flags. 0 is the default value, 
// so flags are tripped to be 1 or 2 to avoid possible bugs
/*SugarCube.State.variables.story_flags = new Map([
    // prologue
    ["prologue_choice", 1],  // determines which nightmare player gets: 1 or 2 (used in ch1)
    // ch1
    ["calm_down_method", 0], // how the player calmed down: 1 or 2
    // ch2
    ["learned_executor", 0], // 0 if player does not know, 1 if player knows
    ["hepburn_convo_funeral", 0], // 0 if player has not talked to Hepburn family, 1 otherwise
    ["ashford_convo_funeral", 0], // 0 if player has not talked to Ashford family, 1 otherwise
    ["wyatt_convo_funeral", 0], // 0 if player has not talked to Wyatt family, 1 otherwise
    // ch3
    ["sibling_convo", 0], //1 is Winona, 2 is Dove (used in ch4)
    // ch4 (basement and dove's rooms end the chapter)
    ["explored_livingroom", 0], // 0 false, 1 true
    ["explored_kitchen", 0],
    ["explored_entryway", 0],
    ["explored_parents_room", 0],
    ["explored_doves_room", 0],
    ["explored_room", 0],
    ["explored_winona_room", 0],
    ["explored_bathroom", 0],
    ["explored_basement", 0],
    // ch5
    ["explore_outside", 0], // 1: forest, 2: garden, 3: lakeside
    // ch6
    // Act 1 Epilogue
    ["who_you_call", 0], // 1:Olivia, 2: Isaac, 3: Rachel

    ["herb1", 0],
    ["herb2", 0],
    ["herb3", 0]
]);*/

// Updates a specified flag key to a given value
window.update_flag = function (key, value) {
    SugarCube.State.variables.story_flags[key] = value;
    return "";
}
// Gets the value of a specified flag key
window.get_flag = function (key) {
    return SugarCube.State.variables.story_flags[key];
}
/*--end--*/

/*--code for text crawl--*/
/*
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
    */
/*--end--*/