// player select function
let totalPlayerExpense = 0;
function getInputValueById(playerName, btn) {
    const liLength = calculatePlayer();
    const playerList = document.getElementById('player-list');
    if (liLength <= 4) {
        const li = document.createElement('li');
        li.innerText = document.getElementById(playerName).innerText;
        playerList.appendChild(li);
        const btnDisable = document.getElementById(btn);
        btnDisable.style.background = '#1695c0';
        btnDisable.disabled = true;
    }
    else {
        alert('Sorry,mate!!Cannot let you add more than 5');
    }
}

function calculatePlayer() {
    const liLength = document.querySelectorAll('#player-list li').length;
    return liLength;
}

function btnDisable(boolean) {
    return boolean;
}

document.getElementById('player-one-btn').addEventListener('click', function () {
    getInputValueById('player-one', 'player-one-btn');
})
document.getElementById('player-two-btn').addEventListener('click', function () {
    getInputValueById('player-two', 'player-two-btn');
})
document.getElementById('player-three-btn').addEventListener('click', function () {
    getInputValueById('player-three', 'player-three-btn');
})
document.getElementById('player-four-btn').addEventListener('click', function () {
    getInputValueById('player-four', 'player-four-btn');
})
document.getElementById('player-five-btn').addEventListener('click', function () {
    getInputValueById('player-five', 'player-five-btn');
})
document.getElementById('player-six-btn').addEventListener('click', function () {
    getInputValueById('player-six', 'player-six-btn');
})
document.getElementById('player-seven-btn').addEventListener('click', function () {
    getInputValueById('player-seven', 'player-seven-btn');
})
document.getElementById('player-eight-btn').addEventListener('click', function () {
    getInputValueById('player-eight', 'player-eight-btn');
})
document.getElementById('player-nine-btn').addEventListener('click', function () {
    getInputValueById('player-nine', 'player-nine-btn');
})

// calculate total cost code
document.getElementById('per-player-btn').addEventListener('click', function () {
    const perPlayerCost = document.getElementById('per-player-cost');
    const getPlayerCost = parseInt(perPlayerCost.value);
    let totalPlayerCost = getPlayerCost * calculatePlayer();
    const playerCost = document.getElementById('player-expense');
    playerCost.innerText = totalPlayerCost;
    totalPlayerExpense = totalPlayerCost;
    perPlayerCost.value = '';
    return totalPlayerCost;
})

document.getElementById('total-cost-btn').addEventListener('click', function () {
    const managerCost = document.getElementById('manager-cost');
    const getManagerCost = parseInt(managerCost.value);
    const coachCost = document.getElementById('coach-cost');
    const getCoachCost = parseInt(coachCost.value);
    let totalExpense = getManagerCost + getCoachCost + totalPlayerExpense;
    const totalSpend = document.getElementById('total-spend');
    totalSpend.innerText = totalExpense;
})
