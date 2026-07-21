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

    score.textContent = "0 / 197";

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

function addAnswer(country){

    if(answeredCountries.includes(country)){

        return;

    }

    answeredCountries.push(country);

    const item = document.createElement("div");

    item.textContent = country;

    answeredList.appendChild(item);

    score.textContent =
        answeredCountries.length
        + " / 197";

}
