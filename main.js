import {player1, player2} from "./player.js";
import {generateLogs} from "./logs.js";
import {createElement} from "./createElement.js";
import {enemyAttack, playerAttack} from "./attack.js";
import {finishFight} from "./finishFight.js";

/* variables */
export const $arenas = document.querySelector('.arenas'),
    $fightButton = document.querySelector('.button'),
    $formFight = document.querySelector('.control'),
    $chat = document.querySelector('.chat'),

    ATTACK = ['head', 'body', 'foot'],

    HIT = {
        head: 30,
        body: 25,
        foot: 20,
    };
/* end of variables */

const createPlayer = (playerObj) => {
    const $player = createElement('div', 'player' + playerObj.player),
        $progressbar = createElement('div', 'progressbar'),
        $life = createElement('div', 'life'),
        $name = createElement('div', 'name'),
        $character = createElement('div', 'character'),
        $img = createElement('img')

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

$arenas.appendChild(createPlayer(player1))
$arenas.appendChild(createPlayer(player2))

$formFight.addEventListener('submit', (e) => {
    e.preventDefault()
    const enemy = enemyAttack()
    const player = playerAttack()

    if (player.hit !== enemy.defence) {
        player2.changeHP(player.value)
        generateLogs('hit', player2, player1)
    } else {
        generateLogs('defence', player1, player2)
    }

    if (enemy.hit !== player.defence) {
        player1.changeHP(enemy.value)
        generateLogs('hit', player1, player2)
    } else {
        generateLogs('defence', player2, player1)
    }

    finishFight()
})

function init() {
    generateLogs('start', player1, player2)
}

init()