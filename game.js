import {generateLogs} from "./logs.js";
import {Player} from "./player.js";
import {playerAttack} from "./attack.js";
import {finishFight} from "./finishFight.js";
import {$formFight} from "./variables.js";
import {getRandomNum} from "./utils.js";

export let player1;
export let player2;

export class Game {

    getPlayer = async () => {
        const body = fetch('https://reactmarathon-api.herokuapp.com/api/mk/players').then(res => res.json())
        return body
    }

    getEnemy = async () => {
        const body = fetch('https://reactmarathon-api.herokuapp.com/api/mk/player/choose').then(res => res.json())
        return body
    }

    getAttack = async (hit, defence) => {
        const body = fetch('http://reactmarathon-api.herokuapp.com/api/mk/player/fight', {
            method: 'POST',
            body: JSON.stringify({
                hit,
                defence,
            })
        }).then(res => res.json())
        return body
    }

    fight = async () => {
        const {hit, defence} = playerAttack()
        const players = await this.getAttack(hit, defence)
        // console.log('PLAYER1', player1, 'PLAYER2', player2)
        return players
    }

    start = async () => {

        const player = await this.getPlayer()
        const p1 = player[getRandomNum(player.length) - 1]
        const enemy = await this.getEnemy()

        player1 = new Player({
            ...p1,
            player: 1,
            rootSelector: 'arenas',
        })

        player2 = new Player({
            ...enemy,
            player: 2,
            rootSelector: 'arenas',
        })

        player1.createPlayer()
        player2.createPlayer()

        generateLogs('start', player1, player2)
        this.formFight()
    }



    formFight = () => {
        $formFight.addEventListener('submit', async (e) => {
            e.preventDefault()

            const players = await this.fight()
            const {player1: player, player2: enemy} = players

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
}
