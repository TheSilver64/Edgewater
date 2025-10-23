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