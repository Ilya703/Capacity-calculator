const slider = document.querySelector('.slider');
const price = document.querySelector('.price');
const cost = document.querySelector('.cost');
const amount = document.querySelector('#amount');

let priceValue = '4.3';

const range = (e) => {
    const val = e.target.value;

    switch(true) {
        case val < 1000:
            priceValue = '4.3';
            break;
        case val >= 1000 && val < 3000:
            priceValue = '4.1';
            break;
        case val >= 3000:
            priceValue = '3.9';
            break;
    }

    amount.textContent = `${val} кВт`;
    price.textContent = priceValue;
    cost.textContent = Math.round(parseFloat(priceValue) * val * 24 * 365 / 12);
};

slider.addEventListener('input', (e) => range(e));
