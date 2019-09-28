// ==UserScript==
// @name Old YT
// @namespace Violentmonkey Scripts
// @match https://www.youtube.com/*
// @author 538ROMEO Coding Akethorpe Implimentation 
// @homepage https://github.com/Akethorpe/Old-YT
// @homepageURL https://github.com/Akethorpe/Old-YT
// @website https://github.com/Akethorpe/Old-YT
// @source https://github.com/Akethorpe/Old-YT
// @grant none
// @run-at document-start
// ==/UserScript==

if(window.location.search.indexOf('&disable_polymer=true') == -1) {window.location.search += '&disable_polymer=true';}