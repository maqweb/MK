import {player1, player2} from "./player.js";
import {createReloadButton} from "./createReloadButton.js";
import {generateLogs} from "./logs.js";
import {$arenas, $fightButton} from "./variables.js";
import {createElement} from "./createElement.js";

export const playerWin = (name) => {
    const $winTitle = createElement('div', 'winTitle')
    if (name) {
        $winTitle.innerText = name + ' wins'
    } else {
        $winTitle.innerText = 'draw '
    }
    return $winTitle
}

export const finishFight = () => {
    if (player1.hp === 0 || player2.hp === 0) {
        $fightButton.disabled = true
        createReloadButton()
    }
    if (player1.hp === 0 && player1.hp < player2.hp) {
        $arenas.appendChild(playerWin(player2.name))
        generateLogs('end', player2, player1)
    }
    if (player2.hp === 0 && player2.hp < player1.hp) {
        $arenas.appendChild(playerWin(player1.name))
        generateLogs('end', player1, player2)
    }
    if (player1.hp === 0 && player2.hp === 0) {
        $arenas.appendChild(playerWin())
        generateLogs('draw', player1, player2)
    }
}
