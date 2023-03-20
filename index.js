fetch('https://test17-3.onrender.com/data')
    .then(response => response.json())
    .then(json => console.log(json))