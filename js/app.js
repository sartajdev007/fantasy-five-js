// player select function
function getInputValueById(playerName) {
    const playerList = document.getElementById('player-list');
    const li = document.createElement('li');
    li.innerText = document.getElementById(playerName).innerText;
    playerList.appendChild(li);
}


document.getElementById('player-one-btn').addEventListener('click', function () {
    const playerAdd = getInputValueById('player-one');
    const btnDisable = document.getElementById('player-one-btn');
    btnDisable.disabled = true;
})
document.getElementById('player-two-btn').addEventListener('click', function () {
    const playerAdd = getInputValueById('player-two');
    const btnDisable = document.getElementById('player-two-btn');
    btnDisable.disabled = true;

})
document.getElementById('player-three-btn').addEventListener('click', function () {
    const playerAdd = getInputValueById('player-three');
    const btnDisable = document.getElementById('player-three-btn');
    btnDisable.disabled = true;
})
document.getElementById('player-four-btn').addEventListener('click', function () {
    const playerAdd = getInputValueById('player-four');
    const btnDisable = document.getElementById('player-four-btn');
    btnDisable.disabled = true;
})
document.getElementById('player-five-btn').addEventListener('click', function () {
    const playerAdd = getInputValueById('player-five');
    const btnDisable = document.getElementById('player-five-btn');
    btnDisable.disabled = true;
})
document.getElementById('player-six-btn').addEventListener('click', function () {
    const playerAdd = getInputValueById('player-six');
    const btnDisable = document.getElementById('player-six-btn');
    btnDisable.disabled = true;
})

// calculate total cost code

document.getElementById('per-player-btn').addEventListener('click', function () {
    const perPlayerCost = document.getElementById('per-player-cost');
    const getPlayerCost = parseInt(perPlayerCost.value);
    let totalPlayerCost = getPlayerCost * 5;
    const playerCost = document.getElementById('player-expense')
    playerCost.innerText = totalPlayerCost;
    perPlayerCost.value = '';
})

document.getElementById('total-cost-btn')
