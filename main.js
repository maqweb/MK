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
    },
    elHP: elHP,
    changeHP: changeHP,
    renderHP: renderHP,
}

let player2 = {
    player: 2,
    name: 'Sub-Zero',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
    weapon: ['Ice', 'Shuriken'],
    attack: function () {
        console.log(name + 'Fight...')
    },
    elHP: elHP,
    changeHP: changeHP,
    renderHP: renderHP,
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

function playerWin(name) {
    const $winTitle = createElement('div', 'winTitle')
    if (name) {
        $winTitle.innerText = name + ' wins'
    } else {
        $winTitle.innerText = 'draw '
    }
    return $winTitle
}

function randomNum (num) {
    return Math.floor(Math.random() * num)
}

function changeHP(value) {
    this.hp -= value
    if (this.hp <= 0) {
        this.hp = 0
    }
    this.elHP()
}

function elHP() {
    return document.querySelector(`.player${this.player} .life`)
}

function renderHP() {
    this.elHP().style.width = `${this.hp}%`
}

function createReloadButton() {
    const $reloadButton = createElement('div', 'reloadWrap')
    const $button = createElement('button', 'button')
    $button.innerText = 'Restart'
    $reloadButton.appendChild($button)
    $arenas.appendChild($reloadButton)

    $reloadButton.addEventListener('click', function () {
        window.location.reload()
    }, {once: true})
}

// let playerArr = [player1, player2]

/*function randomPlayer(arr) {
    const index = Math.floor(Math.random() * 2)
    console.log(arr[index])
    return arr[index]
}*/

$randomButton.addEventListener('click', function () {
    // changeHP(randomPlayer(playerArr))

    player1.changeHP(randomNum(20))
    player2.changeHP(randomNum(20))
    player1.renderHP()
    player2.renderHP()


    if (player1.hp === 0 || player2.hp === 0) {
        $randomButton.disabled = true
    }

    if (player1.hp === 0 && player1.hp < player2.hp) {
        $arenas.appendChild(playerWin(player2.name))
        createReloadButton()
    } else if (player2.hp === 0 && player2.hp < player1.hp) {
        $arenas.appendChild(playerWin(player1.name))
        createReloadButton()
    } else if (player1.hp === 0 && player2.hp === 0) {
        $arenas.appendChild(playerWin())
        createReloadButton()
    }
})

$arenas.appendChild(createPlayer(player1))
$arenas.appendChild(createPlayer(player2))