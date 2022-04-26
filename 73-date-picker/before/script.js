import { format, compareAsc, parseISO } from 'date-fns';
import toDate from 'date-fns/toDate'

// const newDate = format(new Date(2014, 1, 11), 'MM/dd/yyyy');
// console.log(newDate);


const dateButtonPicker = document.querySelector('.date-picker-button');
const datePicker = document.querySelector('.date-picker');
const dateDay = document.querySelectorAll('.date');
const arrows = document.querySelectorAll('.month-button');
const dateButton = document.querySelector('.date-picker-button');
const currentMonth = document.querySelector('.current-month');



// this is the date of the current day.
const dateTodayRaw = new Date();
const dateTodayFormated = format(dateTodayRaw, `MMMM do, yyy`)

currentMonth.textContent = format(dateTodayRaw, 'MMMM - yyy')
const dateSelected = new Date();
dateButton.textContent = dateTodayFormated;

arrows.forEach(arrow => {
    if (arrow.classList.contains('prev-month-button')) {

    }
})

datePicker.addEventListener('click', e => {
    if (!e.target.classList.contains('date')) return;
    dateDay.forEach(day => {
        day.addEventListener('click', e => {
            deselect();
            // console.log(day);
            e.target.classList.toggle('selected')
            console.log(e.target.textContent);
            const days = e.target.textContent;
            const newDate = format(new Date(2020, 9, days), 'MM/dd/yyyy');
            console.log(newDate);
            // console.log(toDate(parseISO(newDate)));

        })

    })
})

dateButtonPicker.addEventListener('click', e => {
    datePicker.classList.toggle('show');
})

function deselect() {
    dateDay.forEach(day => {
        day.classList.remove('selected');
    })
}
