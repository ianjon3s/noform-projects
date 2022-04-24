var r = document.querySelector(':root');

const
  range = document.getElementById('range'),
  rangeV = document.getElementById('rangeV'),
  setValue = ()=>{
    const
      newValue = Number( (range.value - range.min) * 100 / (range.max - range.min) ),
      newPosition = 10 - (newValue * 0.2),
      range2 = Number (range.value * 2),
      range3 = Number (range.value * 3),
      range4 = Number (range.value * 4),
      range5 = Number (range.value * 5),
      range6 = Number (range.value * 6);
    rangeV.innerHTML = `<span>${range.value}</span>`;
    rangeV.style.left = `calc(${newValue}% + (${newPosition}px))`;
    r.style.setProperty('--moire-rotation-1', `${range.value}deg`);
    r.style.setProperty('--moire-rotation-2', `${range2}deg`);
    r.style.setProperty('--moire-rotation-3', `${range3}deg`);
    r.style.setProperty('--moire-rotation-4', `${range4}deg`);
    r.style.setProperty('--moire-rotation-5', `${range5}deg`);
    r.style.setProperty('--moire-rotation-6', `${range6}deg`);
  };
document.addEventListener("DOMContentLoaded", setValue);
range.addEventListener('input', setValue);
