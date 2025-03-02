let imageBase = './images/';
let ringBtn = document.querySelectorAll('.ring-button');
for (let i = 0; i < ringBtn.length; i++) {
    ringBtn[i].addEventListener('click', (event) => {
        for (const btn of ringBtn) {
            btn.classList.remove('border-purple-700');
            btn.classList.remove('selectedColor');

        }
        event.target.classList.add('border-purple-700');
        event.target.classList.add('selectedColor');

        const color = event.target.id.replace('-color', '');
        document.getElementById('product-image').src = imageBase + color + '.png';

    })
}
// select size box 
function selectSizeBox(size) {
    const sizes = ['M', 'S', 'L', 'XL'];
    for (const siz of sizes) {
        const boxBtn = document.getElementById('size-' + siz)
        if (size === siz) {
            boxBtn.classList.add('border-purple-600');
            boxBtn.classList.add('sizeBox');
        } else {
            boxBtn.classList.remove('border-purple-600')
            boxBtn.classList.remove('sizeBox');
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

let cartModal = [];
let chekoutCount = 0;
let totalPrice = 0
document.getElementById('add-to-cart').addEventListener('click', () => {
    const isColorSelected = document.querySelector('.border-purple-700')
    const isSelectedSizeBox = document.querySelector('.sizeBox');
    const productColor = isColorSelected.id.replace('-', ' ');
    const imgName = isColorSelected.id.split('-')[0];
    const productSize = isSelectedSizeBox.innerText.split(' ')[0];
    const productPrice = parseFloat(isSelectedSizeBox.innerText.split(' ')[1].split("$")[1])
    const Quentity = parseFloat(document.getElementById('quantity').innerText);
    const Price = Quentity * productPrice;
    totalPrice += Price;

    if (isColorSelected && isSelectedSizeBox) {
        chekoutCount = chekoutCount + Quentity;
        document.getElementById('cart-count').innerText = chekoutCount;
    } else {
        return alert('Pleas Select product color and Size')
    }
    if (Quentity === 0) {
        return alert("please selec a Quentity...");
    }
    document.getElementById('checkout-container').classList.remove('hidden');
    document.getElementById('TotalPrice').innerText = `$${totalPrice}`;

    cartModal.push(
        {
            image: imageBase + imgName + '.png',
            color: productColor,
            Price: productPrice,
            Quentity: Quentity,
            size: productSize,
        }
    )
})
document.getElementById('checkout-container').addEventListener('click', () => {
    const Modal = document.getElementById('cart-modal');
   cartModal.forEach(cart => {
    const modalContainer = document.getElementById('cart-items');
    const row = document.createElement('tr');
    row.classList.add("mt-4")
    row.innerHTML = `
                <td>
                 <div class="flex items-center justify-between gap-x-2">
                  <img class="h=12 w-12 object-cover" src=${cart.image} alt="">
                  <span>Classy Modern Smart Watch</span>
                 </div>
                </td>
                <td>${cart.color}</td>
                <td>${cart.size}</td>
                <td>${cart.Quentity}</td>
                <td>${cart.Price}</td>
    `
    modalContainer.appendChild(row)
   });
    Modal.classList.remove('hidden');
});

document.getElementById('continue-shopping').addEventListener('click', ()=>{
    document.getElementById('cart-modal').classList.add('hidden');
})
document.getElementById('checkout').addEventListener('click', ()=>{
   return alert('Payment in Proggress')
})
