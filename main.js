// ==UserScript==
// @name         Hide FA Ads
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Hides ad elements on FurAffinity.net
// @author       EricaPomme
// @match        *.furaffinity.net/*
// @icon         https://www.google.com/s2/favicons?domain=furaffinity.net
// @grant        none
// ==/UserScript==

const blockedClasses = [
    'leaderboardAd__slot',
    'sidebarAds__slot',
    'footerAds__slot'
]

blockedClasses.forEach(blockedClass => Array.from(document.getElementsByClassName(blockedClass)).forEach(element => element.remove()));

