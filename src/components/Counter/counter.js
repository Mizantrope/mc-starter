function Counter(selector, number, time, step) {
    const counter = document.querySelector(selector);

    let res = 0;

    const allTime = Math.round(time / (number / step));

    let interval = setInterval(() => {
        res = res + step;

        if (res === number) {
            clearInterval(interval);
        }

        counter.innerHTML = numberFormat(res);
    }, allTime);
}

function numberFormat(num) {
    if (!isFinite(num)) {
        return num;
    }

    var parts = num.toString().split('.');

    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ' ');

    return parts.join('.');
}

Counter('.counter', 100000, 1000, 1000);
