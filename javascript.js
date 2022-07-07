
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
            addAlpha(e.target);
        });
    });
}

function addAlpha(target) {
    let currentBGC = target.style.backgroundColor;
    currentBGC = currentBGC.split(", ");
    console.log(currentBGC);

    let alpha = currentBGC[currentBGC.length - 1];
    alpha = parseFloat(alpha.substring(0, [alpha.length - 1]));
    
    let newAlpha = alpha + 0.10;

    if (newAlpha < 1) {
        target.style.backgroundColor = `rgba(0, 0, 0, ${newAlpha})`;
    }
} 

function clearContainer() {
    const container = document.querySelector('.container');
    container.innerHTML = '';
}

setupContainer(16);

const pixelSlider = document.querySelector('.pixel-slider');
const slideValue = document.querySelector('.slide-value');

pixelSlider.oninput = () => {
    slideValue.innerText = pixelSlider.value;
    clearContainer()
    setupContainer(pixelSlider.value);
}

