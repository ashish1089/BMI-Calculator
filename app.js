const container = document.querySelector('.container')
const weightElement = document.querySelector('.weight')
const heightElement = document.querySelector('.height')
const result = document.getElementById('result')
const bmiCategory = document.querySelector('.bmi')


let weight;
let height;
let bmi;

container.addEventListener('input', (e) => {
    if (e.target.name === 'weight') {
        weight = e.target.value;
    }
    if (e.target.name === 'height') {
        height = e.target.value;
        height = height / 100 // cm to m
    }

    if (weight > 0 && height > 0) {
        // w / ( h * h) h in meters
        bmi = (weight / ((height * height))).toFixed(1);
        result.innerText = bmi
    } else {
        result.innerText = 'BMI';
    }

    if (bmi > 18.5 && bmi < 25) {
        bmiCategory.style.color = 'green';
        bmiCategory.innerText = 'Normal'
    } else if (bmi > 25 && bmi < 30) {
        bmiCategory.innerText = 'Overweight';
        bmiCategory.style.color = 'yellow';
    } else if (bmi > 30) {
        bmiCategory.innerText = 'Obese';
        bmiCategory.style.color = 'red';
    } else if (bmi < 18.5) {
        bmiCategory.innerText = 'Underweight';
        bmiCategory.style.color = 'red';
    }
})
