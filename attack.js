import {getRandomNum} from "./utils.js";
import {$formFight, ATTACK, HIT} from "./main.js";

export const enemyAttack = () => {
    const hit = ATTACK[getRandomNum(3)]
    const defence = ATTACK[getRandomNum(3)]

    return {
        value: getRandomNum(HIT[hit]),
        hit,
        defence,
    }
}

export const playerAttack = () => {
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
    return attack;
}