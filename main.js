let player1 = {
    name: 'Scorpion',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    weapon: ['Chain', 'Kunai'],
    attack: function () {
        console.log(name + 'Fight...')
    }
}

let player2 = {
    name: 'Sub-Zero',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
    weapon: ['Ice', 'Shuriken'],
    attack: function () {
        console.log(name + 'Fight...')
    }
}

const $arenas = document.querySelector('.arenas')

function createPlayer(player, obj) {
    const $player = document.createElement('div')
    $player.classList.add(player)

    const $progressbar = document.createElement('div')
    $progressbar.classList.add('progressbar')

    const $life = document.createElement('div')
    $life.classList.add('life')
    $life.style.width = obj.hp + '%'

    const $name = document.createElement('div')
    $name.classList.add('name')
    $name.innerText = obj.name

    $progressbar.appendChild($life)
    $progressbar.appendChild($name)

    const $character = document.createElement('div')
    $character.classList.add('character')

    const $img = document.createElement('img')
    $img.src = obj.img

    $character.appendChild($img)

    $player.appendChild($progressbar)
    $player.appendChild($character)

    $arenas.appendChild($player)
}

createPlayer('player1', player1)
createPlayer('player2', player2)