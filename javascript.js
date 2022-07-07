
function setupContainer(size) {
    const container = document.querySelector('.container')

    for (let i = 0; i < size * size; i++) {
        const pixel = document.createElement('div');
        const percent = 1/size*100;
        pixel.classList.add('pixel');
        pixel.style.flex = `0 0 ${percent}%`;
        pixel.style.height = `${percent}%`;
        pixel.style.backgroundColor = 'rgba(0, 0, 0, 0)';
        container.append(pixel);
    }

    const pixels = document.querySelectorAll('.pixel');

    pixels.forEach(pixel => {
        pixel.addEventListener('mouseover', (e) => {
            e.target.style.backgroundColor = currColor;
            e.target.style.borderColor = currColor;
        });
    });
}

function clearContainer() {
    const container = document.querySelector('.container');
    container.innerHTML = '';
}

function selectColor(target) {
    const colorBtns = document.querySelectorAll('.btn');
    colorBtns.forEach(btn => {
        btn.classList.remove('selected');
    });
    target.classList.add('selected');
}

// Function to color pixel initially with alpha 0.1 and continue adding 0.1 until full black reached.
// function addAlpha(target) {
//     let currentBGC = target.style.backgroundColor;
//     currentBGC = currentBGC.split(", ");
//     console.log(currentBGC);

//     let alpha = currentBGC[currentBGC.length - 1];
//     alpha = parseFloat(alpha.substring(0, [alpha.length - 1]));
    
//     let newAlpha = alpha + 0.10;

//     if (newAlpha < 1) {
//         target.style.backgroundColor = `rgba(0, 0, 0, ${newAlpha})`;
//     }
// } 

const pixelSlider = document.querySelector('.pixel-slider');
const slideValue = document.querySelector('.slide-value');

pixelSlider.oninput = () => {
    slideValue.innerText = pixelSlider.value;
    clearContainer()
    setupContainer(pixelSlider.value);
}

// Color buttons
const redBtn = document.querySelector('.red');
redBtn.addEventListener('click', (e) => {
    currColor = '#FF6663';
    selectColor(e.target);
});
const orangeBtn = document.querySelector('.orange');
orangeBtn.addEventListener('click', (e) => {
    currColor = '#FEB144';
    selectColor(e.target);
});
const yellowBtn = document.querySelector('.yellow');
yellowBtn.addEventListener('click', (e) => {
    currColor = '#FDFD97';
    selectColor(e.target);
});
const greenBtn = document.querySelector('.green');
greenBtn.addEventListener('click', (e) => {
    currColor = '#9EE09E';
    selectColor(e.target);
});
const blueBtn = document.querySelector('.blue');
blueBtn.addEventListener('click', (e) => {
    currColor = '#9EC1CF';
    selectColor(e.target);
});
const purpleBtn = document.querySelector('.purple');
purpleBtn.addEventListener('click', (e) => {
    currColor = '#CC99C9';
    selectColor(e.target);
});
const blackBtn = document.querySelector('.black');
blackBtn.addEventListener('click', (e) => {
    currColor = 'black';
    selectColor(e.target);
});

// Reset button
const resetBtn = document.querySelector('.reset');
resetBtn.addEventListener('click', () => {
    clearContainer();
    setupContainer(pixelSlider.value);
})

let currColor = 'black';
setupContainer(16);