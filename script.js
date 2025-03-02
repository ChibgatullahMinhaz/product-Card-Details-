const ringBtn = document.querySelectorAll('.ring-button');

for (let i = 0; i < ringBtn.length; i++) {
    ringBtn[i].addEventListener('click', (event) => {
        for (const btn of ringBtn) {
            btn.classList.remove('border-purple-700');
        }
        event.target.classList.add('border-purple-700');
        const color = event.target.id.replace('-color', '');
        return image = document.getElementById('product-image').src = './images/' + color + '.png';
        
    })
}
// select size box 
function selectSizeBox(size) {
    const sizes = ['M', 'S', 'L', 'XL'];
    for (const siz of sizes) {
        const boxBtn = document.getElementById('size-' + siz)
        if (size === siz) {
            boxBtn.classList.add('border-purple-600')
        } else {
            boxBtn.classList.remove('border-purple-600')

        }
    }
}
// handle quantity
document.querySelectorAll('.quantity-button').forEach(btn => {
    btn.addEventListener('click', (e) => {
        const Quentity = parseFloat(document.getElementById('quantity').innerText);
        const amount = e.target.innerText === "+" ? 1 : -1;
        document.getElementById('quantity').innerText = Math.max(0, Quentity + amount)
    })
});

// add to cart
let chekoutCount = 0;
document.getElementById('add-to-cart').addEventListener('click', () => {
    const Quentity = parseFloat(document.getElementById('quantity').innerText);
    if (Quentity === 0) {
       return alert("please selec a Quentity...")
    }
    chekoutCount  = chekoutCount + Quentity;
    document.getElementById('checkout-container').classList.remove('hidden');
    document.getElementById('cart-count').innerText= chekoutCount;
})
