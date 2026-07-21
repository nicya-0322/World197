/* ==========================================
   世界197か国タイピングクイズ
   script.js
   Version 0.1.0
========================================== */

"use strict";

/* ==========================
   要素取得
========================== */

const titleScreen = document.getElementById("title-screen");
const gameScreen = document.getElementById("game-screen");
const resultScreen = document.getElementById("result-screen");

const startButton = document.getElementById("start-button");

const timer = document.getElementById("timer");
const score = document.getElementById("score");

const answeredList = document.getElementById("answered-list");

const input = document.getElementById("country-input");

/* ==========================
   状態
========================== */

let selectedTime = 300;

let answeredCountries = [];

let timerId = null;

let remainingTime = 300;

/* ==========================
   モード選択
========================== */

const modeButtons = document.querySelectorAll(".mode-btn");

modeButtons.forEach(button => {

    button.addEventListener("click", () => {

        modeButtons.forEach(btn => {

            btn.classList.remove("selected");

        });

        button.classList.add("selected");

        selectedTime = Number(button.dataset.time);

        if(selectedTime === -1){

            timer.textContent = "∞";

        }

    });

});

/* ==========================
   スタート
========================== */

startButton.addEventListener("click", startGame);

function startGame(){

    titleScreen.hidden = true;

    resultScreen.hidden = true;

    gameScreen.hidden = false;

    answeredCountries = [];

    answeredList.innerHTML = "";

    score.textContent = "0 / " + countries.length;

    remainingTime = selectedTime;

    updateTimer();

    input.value = "";

    input.focus();

}

/* ==========================
   タイマー表示
========================== */

function updateTimer(){

    if(selectedTime === -1){

        timer.textContent = "∞";

        return;

    }

    const minute = Math.floor(remainingTime / 60);

    const second = remainingTime % 60;

    timer.textContent =
        String(minute).padStart(2,"0")
        + ":"
        + String(second).padStart(2,"0");

}

/* ==========================
   Enter入力
========================== */

input.addEventListener("keydown", function(e){

    if(e.key !== "Enter"){

        return;

    }

    e.preventDefault();

    const country = input.value.trim();

    if(country === ""){

        return;

    }

    addAnswer(country);

    input.value = "";

    input.focus();

});

/* ==========================
   回答追加
========================== */

function addAnswer(inputCountry){

    let countryName = inputCountry;

    // 別名を正式名称へ変換
    if(aliases[countryName]){

        countryName = aliases[countryName];

    }

    // 国データを検索
    const country = countries.find(c => c.name === countryName);

    // 存在しない国
    if(!country){

        return;

    }

    // 重複チェック
    if(answeredCountries.includes(country.name)){

        return;

    }

    answeredCountries.push(country.name);

    const item = document.createElement("div");

    item.textContent = country.name;

    answeredList.appendChild(item);

    score.textContent =
        answeredCountries.length +
        " / " +
        countries.length;

}
