
function setupContainer(size) {
    const container = document.querySelector('.container')

    for (let i = 0; i < size * size; i++) {
        const pixel = document.createElement('div');
        const percent = 1/size*100;
        pixel.classList.add('pixel');
        pixel.style.flex = `0 0 ${percent}%`;
        pixel.style.height = `${percent}%`;
        container.append(pixel);
    }

    const pixels = document.querySelectorAll('.pixel');

    pixels.forEach(pixel => {
        pixel.addEventListener('mouseover', (e) => {
            e.target.style.backgroundColor = 'black';
        });
    });
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

