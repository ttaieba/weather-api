const loadWether = () => {
    // console.log('hellow')
    const input = document.getElementById('input-field')
    const submitText = input.value;
    // console.log(submitText)
    input.value = ''
    const url = ``
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + submitText + '&appid=a1dacf356d8e4a0806d00e33da6d3102')
        .then(res => res.json())
        .then(data => {
            const city = `Location: ${data.name}`;
            // console.memory(city)
            const tem = data.main.temp;
            const temp = tem - 273.15;
            const descriptions = data.weather[0].description;

            document.getElementById('city-name').innerText = city;
            document.getElementById('temp-scle').innerText = temp.toFixed(2);
            document.getElementById('des').innerText = descriptions;
        })

        .catch(res => alert("plase enter a correct city name"))
}
