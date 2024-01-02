dycalendar.draw({
    target: '#dycalendar',
    dayformat: 'full',
    type: 'month',
    monthformat: 'full',
    highlighttoday: true,
    prevnextbutton: 'show'
});

var year = document.querySelector('.container .dy-year');

const currentDate = new Date();
const currentYear =  currentDate.getFullYear();

year.innerHTML = currentYear;