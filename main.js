const $arenas = document.querySelector('.arenas')
const $fightButton = document.querySelector('.button')
const $formFight = document.querySelector('.control')

const HIT = {
    head: 30,
    body: 25,
    foot: 20,
}
const ATTACK = ['head', 'body', 'foot'];

let player1 = {
    player: 1,
    name: 'Scorpion',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    weapon: ['Chain', 'Kunai'],
    attack: function () {
        console.log(name + 'Fight...')
    },
    elHP,
    changeHP,
    renderHP,
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
    elHP,
    changeHP,
    renderHP,
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

function getRandomNum (num) {
    return Math.floor(Math.random() * num)
}

function changeHP(value) {
    this.hp -= value
    if (this.hp <= 0) {
        this.hp = 0
    }
    this.renderHP()
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

// $randomButton.addEventListener('click', function () {
//     // changeHP(randomPlayer(playerArr))
//
//     player1.changeHP(getRandomNum(20))
//     player2.changeHP(getRandomNum(20))
//     player1.renderHP()
//     player2.renderHP()
//
//
//     if (player1.hp === 0 || player2.hp === 0) {
//         $randomButton.disabled = true
//         createReloadButton()
//     }
//
//     if (player1.hp === 0 && player1.hp < player2.hp) {
//         $arenas.appendChild(playerWin(player2.name))
//
//     } else if (player2.hp === 0 && player2.hp < player1.hp) {
//         $arenas.appendChild(playerWin(player1.name))
//     } else if (player1.hp === 0 && player2.hp === 0) {
//         $arenas.appendChild(playerWin())
//     }
// })

$arenas.appendChild(createPlayer(player1))
$arenas.appendChild(createPlayer(player2))

function enemyAttack () {
    const hit = ATTACK[getRandomNum(3)]
    const defence = ATTACK[getRandomNum(3)]

    return {
        value: getRandomNum(HIT[hit]),
        hit,
        defence,
    }
}

function finishFight() {
    if (player1.hp === 0 && player1.hp < player2.hp) {
        $arenas.appendChild(playerWin(player2.name))
    }
    if (player2.hp === 0 && player2.hp < player1.hp) {
        $arenas.appendChild(playerWin(player1.name))
    }
    if (player1.hp === 0 && player2.hp === 0) {
        $arenas.appendChild(playerWin())
    }
    createReloadButton()
}

$formFight.addEventListener('submit', function(e) {
    e.preventDefault()
    const enemy = enemyAttack()
    const attack = {};

    for (let item of $formFight) {
        if (item.checked && item.name === 'hit') {
            attack.value = getRandomNum(HIT[item.value])
            attack.hit = item.value
        }
        if (item.checked && item.name === 'defence') {
            attack.defence = item.value
        }
        item.checked = false
    }

    if (attack.hit !== enemy.defence) {
        player2.changeHP(attack.value)
    }

    if (enemy.hit !== attack.defence) {
        player1.changeHP(enemy.value)
    }

    if (player1.hp === 0 || player2.hp === 0) {
        $fightButton.disabled = true
        finishFight()
    }
})