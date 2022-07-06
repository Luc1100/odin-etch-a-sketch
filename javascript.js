const container = document.querySelector('.container')

for (let i = 0; i < 16 * 16; i++) {
    const pixel = document.createElement('div');
    const percent = 1/16*100;
    pixel.classList.add('pixel');
    pixel.style.flex = `0 0 ${percent}%`;
    pixel.style.height = `${percent}%`;
    container.append(pixel);
}

let pixels = document.querySelectorAll('.pixel');

pixels.forEach(pixel => {
    pixel.addEventListener('mouseover', function(e) {
        console.log(e.target.style.backgroundColor = 'black');
    });
});

