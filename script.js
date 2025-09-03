document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    document.querySelector('.login-container').style.display = 'none';
    document.getElementById('menu-page').style.display = 'block';
    document.querySelector('#menu-page h2').innerText = `Welcome, ${username}! Select Your Pizza to Make`;
});

function makePizza(type) {
    const summaryDiv = document.getElementById('pizza-summary');
    summaryDiv.innerHTML = `<h3>You made a delicious ${type} Pizza!</h3><p>Enjoy your Italian creation!</p>`;
}