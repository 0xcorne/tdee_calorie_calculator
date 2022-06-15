// Created with passion by Corné Adema / 0xcorne
// GitHub: https://github.com/0xcorne 

// The constants and variables to get the values and select the nodes
const form = document.getElementById('calculate_form');
const tdeeResult = document.getElementById('tdee_result');
const calculateButton = document.getElementById('calculate_button');
let age = document.getElementById('age').value;
let height = document.getElementById('height').value;
let weight = document.getElementById('weight').value;
let palValue = document.getElementById('pal').value;
let tdee;

// The function that calculates the TDEE kcal
function calculate() {
  age = document.getElementById('age').value;
  height = document.getElementById('height').value;
  weight = document.getElementById('weight').value;
  palValue = document.getElementById('pal').value;
  if (age == '' || height == '' || weight == '' || document.getElementById('male').checked === false && document.getElementById('female').checked === false) {
    alert('Please insert the correct information.');
    return;
  } else if (document.getElementById('male').checked) {
    tdee = 10 * weight + 6.25 * height - 5 * age + 5;
    tdee = Math.round(tdee * palValue);
    tdeeResult.innerHTML = `Your TDEE is: ${tdee} kcal/day`;
    return;
  } else (document.getElementById('female').checked);
  tdee = 10 * weight + 6.25 * height - 5 * age - 161;
  tdee = Math.round(tdee * palValue);
  tdeeResult.innerHTML = `Your TDEE is: ${tdee} kcal/day`;
  return;
}


// addEventListener for the 'calculate button' 
calculateButton.addEventListener('click', calculate);
