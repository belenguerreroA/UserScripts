// ==UserScript==
// @name         push square adjust height comments section
// @updateURL    https://github.com/belenguerreroA/UserScripts/raw/main/push_square.js
// @downloadURL  https://github.com/belenguerreroA/UserScripts/raw/main/push_square.js
// @namespace    https://github.com/belenguerreroA
// @version      0.1
// @description  try to take over the world!
// @author       bele g
// @match        https://www.pushsquare.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=pushsquare.com
// ==/UserScript==

(function() {
    let comments_list = document.querySelectorAll(".comments-list");

    for (let i = 0; i < comments_list.length; i++) {
        comments_list[i].style.height = "865px";
        comments_list[i].style.overflowY = "scroll";
    }
})();