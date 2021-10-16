const $arenas = document.querySelector('.arenas')
const $randomButton = document.querySelector('.button')

let player1 = {
    player: 1,
    name: 'Scorpion',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    weapon: ['Chain', 'Kunai'],
    attack: function () {
        console.log(name + 'Fight...')
    }
}

let player2 = {
    player: 2,
    name: 'Sub-Zero',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
    weapon: ['Ice', 'Shuriken'],
    attack: function () {
        console.log(name + 'Fight...')
    }
}

function createElement (tag, className) {
    const $tag = document.createElement(tag)
    if (className) {
        $tag.classList.add(className)
    }
    return $tag
}

function createPlayer(playerObj) {
    const $player = createElement('div', 'player' + playerObj.player)
    const $progressbar = createElement('div', 'progressbar')
    const $life = createElement('div', 'life')
    const $name = createElement('div', 'name')
    const $character = createElement('div', 'character')
    const $img = createElement('img')

    $life.style.width = playerObj.hp + '%'
    $name.innerText = playerObj.name
    $img.src = playerObj.img

    $progressbar.appendChild($life)
    $progressbar.appendChild($name)
    $character.appendChild($img)
    $player.appendChild($progressbar)
    $player.appendChild($character)
    return $player
}

function playerWin() {
    debugger
    const $winTitle = createElement('div', 'winTitle')
    let playerName;
    if (player1.hp === 0) {
        playerName = player2.name
    }
    if (player2.hp === 0) {
        playerName = player1.name
    }
    $winTitle.innerText = playerName + ' wins'
    $arenas.appendChild($winTitle)
}

function randomNum () {
    return Math.floor(Math.random() * 20)
}

function changeHP(player) {
    const $playerLife = document.querySelector('.player' + player.player + ' .life')

    player.hp -= randomNum()
    if (player.hp <= 0) {
        player.hp = 0
    }
    $playerLife.style.width = player.hp + '%';
    if (player.hp === 0) {
        $randomButton.disabled = true
        playerWin()
    }
}

let playerArr = [player1, player2]

function randomPlayer(arr) {
    const index = Math.floor(Math.random() * 2)
    console.log(arr[index])
    return arr[index]
}

$randomButton.addEventListener('click', function () {
    changeHP(randomPlayer(playerArr))
})

$arenas.appendChild(createPlayer(player1))
$arenas.appendChild(createPlayer(player2))