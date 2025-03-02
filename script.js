const ringBtn = document.querySelectorAll('.ring-button');

for (let i = 0; i < ringBtn.length; i++) {
    ringBtn[i].addEventListener('click', (event) => {
        for (const btn of ringBtn) {
            btn.classList.remove('border-purple-700');
        }
        event.target.classList.add('border-purple-700');
        const color = event.target.id.replace('-color', '');
        console.log(color);
        let image = document.getElementById('product-image');
        image.src = './images/' + color + '.png';
    })
}