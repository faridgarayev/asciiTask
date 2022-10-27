const showSum = document.getElementById('show');
const text = document.getElementById('text');
const button = document.getElementById('btn');

const SumPeriod = (text) => {
    let sum = 0;
    for (let i in text) {
        sum += text.codePointAt(i);
        while (sum > 255) {
            sum -= 255
        }
    }
    return sum;
};


button.addEventListener('click', () => {
    showSum.innerHTML = SumPeriod(text?.value)
})