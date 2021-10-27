import {generateLogs} from "./logs.js";
import {player1, player2} from "./player.js";
import {createElement} from "./createElement.js";
import {enemyAttack, playerAttack} from "./attack.js";
import {finishFight} from "./finishFight.js";
import {$arenas, $formFight} from "./variables.js";



export class Game {

    start = () => {
        generateLogs('start', player1, player2)
        this.addPlayerToArena(player1)
        this.addPlayerToArena(player2)
        this.formFight()
    }

    createPlayer = ({player, name, hp, img}) => {
        const $player = createElement('div', `player${player}`),
            $progressbar = createElement('div', 'progressbar'),
            $life = createElement('div', 'life'),
            $name = createElement('div', 'name'),
            $character = createElement('div', 'character'),
            $img = createElement('img')

        $life.style.width = `${hp}%`
        $name.innerText = name
        $img.src = img

        $progressbar.appendChild($life)
        $progressbar.appendChild($name)
        $character.appendChild($img)
        $player.appendChild($progressbar)
        $player.appendChild($character)
        return $player
    }

    formFight = () => {
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
    }

    addPlayerToArena = (player) => {
        $arenas.appendChild(this.createPlayer(player))
    }
}
