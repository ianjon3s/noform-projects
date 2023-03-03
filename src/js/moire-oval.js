var r = document.querySelector(':root');

const
  range = document.getElementById('range'),
  rangeV = document.getElementById('rangeV'),
  setValue = ()=>{
    const
      newValue = Number( (range.value - range.min) * 100 / (range.max - range.min) ),
      valueRatio = Number( range.value * 0.25),
      newPosition = 10 - (newValue * 0.2),
      range1 = Number (valueRatio * 1),
      range2 = Number (valueRatio * 2),
      range3 = Number (valueRatio * 3),
      range4 = Number (valueRatio * 4),
      range5 = Number (valueRatio * 5),
      range6 = Number (valueRatio * 6),
      range7 = Number (valueRatio * 7),
      range8 = Number (valueRatio * 8),
      range9 = Number (valueRatio * 9),
      range10 = Number (valueRatio * 10),
      range11 = Number (valueRatio * 11),
      range12 = Number (valueRatio * 12),
      range13 = Number (valueRatio * 13),
      range14 = Number (valueRatio * 14),
      range15 = Number (valueRatio * 15),
      range16 = Number (valueRatio * 16),
      range17 = Number (valueRatio * 17),
      range18 = Number (valueRatio * 18),
      range19 = Number (valueRatio * 19),
      range20 = Number (valueRatio * 20),
      range21 = Number (valueRatio * 21),
      range22 = Number (valueRatio * 22),
      range23 = Number (valueRatio * 23),
      range24 = Number (valueRatio * 24),
      range25 = Number (valueRatio * 25),
      range26 = Number (valueRatio * 26),
      range27 = Number (valueRatio * 27),
      range28 = Number (valueRatio * 28),
      range29 = Number (valueRatio * 29),
      range30 = Number (valueRatio * 30),
      range31 = Number (valueRatio * 31),
      range32 = Number (valueRatio * 32),
      range33 = Number (valueRatio * 33),
      range34 = Number (valueRatio * 34),
      range35 = Number (valueRatio * 35),
      range36 = Number (valueRatio * 36);
    rangeV.innerHTML = `<span>${range.value}</span>`;
    rangeV.style.left = `calc(${newValue}% + (${newPosition}px))`;
    r.style.setProperty('--moire-rotation-1', `${range1}deg`);
    r.style.setProperty('--moire-rotation-2', `${range2}deg`);
    r.style.setProperty('--moire-rotation-3', `${range3}deg`);
    r.style.setProperty('--moire-rotation-4', `${range4}deg`);
    r.style.setProperty('--moire-rotation-5', `${range5}deg`);
    r.style.setProperty('--moire-rotation-6', `${range6}deg`);
    r.style.setProperty('--moire-rotation-7', `${range7}deg`);
    r.style.setProperty('--moire-rotation-8', `${range8}deg`);
    r.style.setProperty('--moire-rotation-9', `${range9}deg`);
    r.style.setProperty('--moire-rotation-10', `${range10}deg`);
    r.style.setProperty('--moire-rotation-11', `${range11}deg`);
    r.style.setProperty('--moire-rotation-12', `${range12}deg`);
    r.style.setProperty('--moire-rotation-13', `${range13}deg`);
    r.style.setProperty('--moire-rotation-14', `${range14}deg`);
    r.style.setProperty('--moire-rotation-15', `${range15}deg`);
    r.style.setProperty('--moire-rotation-16', `${range16}deg`);
    r.style.setProperty('--moire-rotation-17', `${range17}deg`);
    r.style.setProperty('--moire-rotation-18', `${range18}deg`);
    r.style.setProperty('--moire-rotation-19', `${range19}deg`);
    r.style.setProperty('--moire-rotation-20', `${range20}deg`);
    r.style.setProperty('--moire-rotation-21', `${range21}deg`);
    r.style.setProperty('--moire-rotation-22', `${range22}deg`);
    r.style.setProperty('--moire-rotation-23', `${range23}deg`);
    r.style.setProperty('--moire-rotation-24', `${range24}deg`);
    r.style.setProperty('--moire-rotation-25', `${range25}deg`);
    r.style.setProperty('--moire-rotation-26', `${range26}deg`);
    r.style.setProperty('--moire-rotation-27', `${range27}deg`);
    r.style.setProperty('--moire-rotation-28', `${range28}deg`);
    r.style.setProperty('--moire-rotation-29', `${range29}deg`);
    r.style.setProperty('--moire-rotation-30', `${range30}deg`);
    r.style.setProperty('--moire-rotation-31', `${range31}deg`);
    r.style.setProperty('--moire-rotation-32', `${range32}deg`);
    r.style.setProperty('--moire-rotation-33', `${range33}deg`);
    r.style.setProperty('--moire-rotation-34', `${range34}deg`);
    r.style.setProperty('--moire-rotation-35', `${range35}deg`);
    r.style.setProperty('--moire-rotation-36', `${range36}deg`);
  };
document.addEventListener("DOMContentLoaded", setValue);
range.addEventListener('input', setValue);
