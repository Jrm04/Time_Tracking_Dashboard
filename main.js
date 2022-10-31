import data from './data.json' assert {type: 'json'};
console.log(data);

let bgColors = [
  'hsl(15, 100%, 70%)',
  'hsl(195, 74%, 62%)',
  'hsl(348, 100%, 68%)',
  'hsl(145, 58%, 55%)',
  'hsl(264, 64%, 52%)',
  'hsl(43, 84%, 65%)'
]

let dailyArray = data.map(item => item.timeframes.daily);
let weeklyArray = data.map(item => item.timeframes.weekly);
let monthlyArray = data.map(item => item.timeframes.monthly);
console.log(dailyArray);

let dailyBtn = document.querySelector('#Daily');
let weeklyBtn = document.querySelector('#Weekly');
let monthyBtn = document.querySelector('#Monthly');
let secondSection = document.querySelector('.second-section');

drawElement(dailyArray);

dailyBtn.addEventListener('click', ()=>{
   drawElement(dailyArray);
});

weeklyBtn.addEventListener('click', ()=>{
    drawElement(weeklyArray);
 });

monthyBtn.addEventListener('click', ()=>{
    drawElement(monthlyArray);
 });

function drawElement(array){
    secondSection.innerHTML = '';
    array.forEach( (element, index) =>{
       // console.log(element)

       let title = data[index].title;
       let titleMinusculas = title.toLocaleLowerCase();
       if(titleMinusculas == 'self care'){
        titleMinusculas = 'self-care'
       }

        secondSection.innerHTML += `
        <div class="card">

        <div class="card__background" style = "background-color: ${bgColors[index]}">
          <img class="card__image" src="./images/icon-${titleMinusculas}.svg" alt="">
        </div>

        <div class="card__details">
          <div class="card__activity">
            <p class="card__title">${title}</p>
            <img class="card__dots" src="./images/icon-ellipsis.svg" alt="theree dots">
          </div>
          <div class="card__time">
            <p class="card__hours">${element.current}hrs</p>
            <p class="card__previous">Previous - ${element.previous}hrs</p>
          </div>
        </div>
      </div>`
    } )
}