let cities = {
    ger: ['Berlin', 'Munich', 'Hamburg'],
    usa: ['New York', 'Los Angeles', 'Chicago'],
    ukr: ['Kyiv', 'Lviv', 'Ternopil']
};

let countrySelect = document.querySelector('#country');
let citySelect = document.querySelector('#city');
let result = document.querySelector('#result');

countrySelect.addEventListener('change', function () {
    let country = this.value;

    citySelect.innerHTML = '';

    if (!country) {
        citySelect.disabled = true;
        citySelect.innerHTML = '<option value="">-- Спочатку оберіть країну --</option>';
        result.textContent = '';
        return;
    }

    citySelect.disabled = false;
    let defaultOpt = document.createElement('option');
    defaultOpt.value = '';
    defaultOpt.textContent = '-- Оберіть місто --';
    citySelect.appendChild(defaultOpt);

    for (let i = 0; i < cities[country].length; i++) {
        let opt = document.createElement('option');
        opt.value = cities[country][i];
        opt.textContent = cities[country][i];
        citySelect.appendChild(opt);
    }

    result.textContent = '';
});

citySelect.addEventListener('change', function () {
    let country = countrySelect.options[countrySelect.selectedIndex].text;
    let city = this.value;

    if (city) {
        result.textContent = 'Вибрано: ' + country + ', ' + city;
    } else {
        result.textContent = '';
    }
});
