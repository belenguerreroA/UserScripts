// ==UserScript==
// @name         lilymanga remove block message
// @updateURL    https://github.com/belenguerreroA/UserScripts/raw/main/lilymanga.js
// @downloadURL  https://github.com/belenguerreroA/UserScripts/raw/main/lilymanga.js
// @namespace    https://github.com/belenguerreroA
// @version      0.1
// @description  try to take over the world!
// @author       bele g
// @match        https://lilymanga.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=lilymanga.com
// ==/UserScript==

(function() {
    setTimeout(function () {
        var elms = document.querySelectorAll("*[style]");

        Array.prototype.forEach.call(elms, function(elm) {
            var clr = elm.style.cursor || "";

            clr = clr.replace(/\s/g, "").toLowerCase();

            switch (clr) {
                case "no-drop":
                    console.log('no-drop');
                    elm.style.display = "none";
                    break;
            }
        });
    }, 5000);
})();