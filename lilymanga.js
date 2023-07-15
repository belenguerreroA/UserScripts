// ==UserScript==
// @name         lilymanga remove block message
// @updateURL    https://github.com/belenguerreroA/UserScripts/raw/master/lilymanga.js
// @downloadURL  https://github.com/belenguerreroA/UserScripts/raw/master/lilymanga.js
// @namespace    https://github.com/belenguerreroA
// @version      0.1
// @description  try to take over the world!
// @author       bele g
// @match        https://lilymanga.net/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=lilymanga.com
// ==/UserScript==

(function() {
    setTimeout(function () {
        console.log('readyy')
        let btn = document.createElement("button");
        btn.innerHTML = "no-drop";
        btn.style.position = "fixed";
        btn.style.top = "5px";
        btn.style.left = "5px";
        btn.style.zIndex = "97766251";
        btn.style.border = "0";
        btn.style.borderRadius = "4px";
        btn.style.background = "#666";
        btn.style.color = "#f0f8ff";
        btn.addEventListener("click", function () {
            var elms = document.querySelectorAll("*[style]");

            Array.prototype.forEach.call(elms, function(elm) {
                var clr = elm.style.cursor || "";

                clr = clr.replace(/\s/g, "").toLowerCase();

                switch (clr) {
                    case "no-drop":
                        elm.style.display = "none";
                        break;
                }
            });
        });
        document.body.appendChild(btn);


        
    }, 5000);
})();
