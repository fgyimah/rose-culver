// control buttons
const nextBtn = document.querySelector('footer img.next');
const prevBtn = document.querySelector('footer img.prev');
const randomBtn = document.querySelector('footer img.random');
const body = document.body;

// circle
const circle = document.querySelector('section div.circle');

// output text
const output = document.querySelector('h2');

// data
const data = [
    {
        text: 'a Brooklyn-based graphic designer',
        backgroundColor: '#edc7a9',
        circleColor: '#3e78ed',
    },
    { text: "Kanye West's biggest fan", backgroundColor: '#a1fffe', circleColor: '#e34a47' },
    {
        text: 'looking for a job at the start of October',
        backgroundColor: '#d3c7f3',
        circleColor: '#f7fe00',
    },
    {
        text: 'letting you <a href="pdf.pdf">download her PDF</a>',
        backgroundColor: '#faffb8',
        circleColor: '#b472e6',
    },
];
// index
let currentIndex = 0;

// event listeners
// next button
nextBtn.addEventListener('click', () => {
    if (currentIndex !== data.length - 1) currentIndex++;
    else currentIndex = 0;
    applyStyles();
});

// prev button
prevBtn.addEventListener('click', () => {
    if (currentIndex !== 0) currentIndex--;
    else currentIndex = data.length - 1;
    applyStyles();
});

// random button
randomBtn.addEventListener('click', () => {
    currentIndex = Math.floor(Math.random() * 4);
    applyStyles();
});

// apply styles function
function applyStyles() {
    const item = data[currentIndex];

    output.innerHTML = item.text;
    circle.style.backgroundColor = item.circleColor;
    body.style.backgroundColor = item.backgroundColor;
}
