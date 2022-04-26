// import { format, compareAsc } from 'date-fns'
// const newDate = format(new Date(2014, 1, 11), 'MM/dd/yyyy');
// console.log(newDate);
const dateButtonPicker = document.querySelector('.date-picker-button');
const datePicker = document.querySelector('.date-picker');
const dateDay = document.querySelectorAll('.date');
datePicker.addEventListener('click', (e1)=>{
    if (!e1.target.classList.contains('date')) return;
    dateDay.forEach((day)=>{
        day.addEventListener('click', (e)=>{
            deselect();
            e.target.classList.toggle('selected');
            console.log(e.target.textContent);
        });
    });
});
dateButtonPicker.addEventListener('click', (e)=>{
    datePicker.classList.toggle('show');
});
function deselect() {
    dateDay.forEach((day)=>{
        day.classList.remove('selected');
    });
}

//# sourceMappingURL=index.672d4772.js.map
