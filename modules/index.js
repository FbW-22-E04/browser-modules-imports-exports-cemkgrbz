// Your code goes here!

import { fixRoundingErrors, calculateAspectRatio } from "./aspect-ratio.js";
import { modulo, percentage, percentageOf, difference } from "./percentage.js"


//modulo

const modulo1 = document.querySelector("#modulo_1");
const modulo2 = document.querySelector("#modulo_2");
const moduloResult = document.querySelector("#modulo_result");

modulo1.addEventListener("input", () => {

    const result = modulo(modulo1.value, modulo2.value);
    moduloResult.value = fixRoundingErrors(result);
  });
  
modulo2.addEventListener("input", () => {

    const result = modulo(modulo1.value, modulo2.value);
    moduloResult.value = fixRoundingErrors(result);
  });

// Percentage

const percentage1 = document.querySelector("#percentage_1");
const percentage2 = document.querySelector("#percentage_2");
const percentage_result = document.querySelector("#percentage_result");

percentage1.addEventListener("input", () => {
    
    const result = percentage(percentage1.value, percentage2.value);
    percentage_result = result;
  });
  
percentage2.addEventListener("input", () => {
    
    const result = percentage(percentage1.value, percentage2.value);
    percentage_result = result;
  });

//percentage of

const percentageOf1 = document.querySelector("#percentageOf_1");
const percentageOf2 = document.querySelector("#percentageOf_2");
const percentageOf_result = document.querySelector("#percentageOf_result");


percentageOf1.addEventListener("input", () => {

    const result = percentageOf(percentageOf1.value, percentageOf2.value);
    percentageOf_result.value = result;
});

percentageOf2.addEventListener("input", () => {

    const result = percentageOf(percentageOf1.value, percentageOf2.value);
    percentageOf_result.value = result;
});

// difference 

const difference1 = document.querySelector("#difference_1");
const difference2 = document.querySelector("#difference_2");
const difference_result = document.querySelector("#difference_result");

difference1.addEventListener("input", () => {

    const result = difference(difference1.value, difference2.value);
    difference_result = result;
});

difference2.addEventListener("input", () => {

    const result = difference(difference1.value, difference2.value);
    difference_result = result;
});


//aspect ratio

const originalWidth = document.querySelector("#ratio_1");
const originalHeight = document.querySelector("#ratio_2");
const newWidth = document.querySelector("#ratio_result-width");
const newHeight = document.querySelector("#ratio_result-height");

newHeight.addEventListener("input", () => {

    const result = calculateAspectRatio(originalWidth.value, originalHeight.  value, newWidth.value);
    newHeight.value = result;
});

newHeight.addEventListener("input", () => {
    
    const result = calculateAspectRatio(originalWidth.value, originalHeight.value, newWidth.value);
    newHeight.value = result;
});