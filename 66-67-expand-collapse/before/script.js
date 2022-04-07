const cards = document.querySelectorAll('.card');
const expandButton = document.querySelectorAll('.expand-button');

expandButton.forEach(button => {
    button.addEventListener('click', e => {
        // console.log(e.target);
        // console.log(button);
        const card = button.closest('.card');
        console.log(card);
        const content = card.querySelector('.card-body');
        if (content.classList.contains('show')) {
            content.classList.remove('show');
        } else {
            content.classList.add('show');
        }
    })

})