'use strict';
let factField = document.getElementById('factField');
let generate = document.getElementById('generate');
factField.innerHTML = 'Want to see a fun fact? Click on the button below to start.';



var limit = 1;
var apiKey = '--enter-your-key-here--';


generate.onclick = function () {
    factField.innerHTML = 'Loading...';
    fetch('https://api.api-ninjas.com/v1/facts?limit=' + limit, {
        method: 'GET',
        headers: {
            'X-Api-Key': apiKey,
            'Content-Type': 'application/json'
        }
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok: ' + response.statusText);
            }
            return response.json();
        })
        .then(result => {
            console.log(result);
            factField.innerHTML = result[0].fact;
        })
        .catch(error => {
            console.error('Error: ', error.message);
        });
};
