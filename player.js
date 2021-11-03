import {createElement} from "./createElement.js";
import {$arenas} from "./variables.js";

export class Player {
    constructor(props) {
        this.player = props.player
        this.name = props.name
        this.hp = props.hp
        this.img = props.img
    }

    createPlayer = () => {
        const $player = createElement('div', `player${this.player}`),
            $progressbar = createElement('div', 'progressbar'),
            $life = createElement('div', 'life'),
            $name = createElement('div', 'name'),
            $character = createElement('div', 'character'),
            $img = createElement('img')

        $life.style.width = `${this.hp}%`
        $name.innerText = this.name
        $img.src = this.img

        $progressbar.appendChild($life)
        $progressbar.appendChild($name)
        $character.appendChild($img)
        $player.appendChild($progressbar)
        $player.appendChild($character)
        $arenas.appendChild($player)
    }

    changeHP = (value) => {
        this.hp -= value
        if (this.hp <= 0) {
            this.hp = 0
        }
        this.renderHP()
    };
    elHP = () => {
        return document.querySelector(`.player${this.player} .life`)
    };
    renderHP = () => {
        this.elHP().style.width = `${this.hp}%`
    };

}

/*export const player1 = new Player({
    player: 1,
    name: 'Scorpion',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
})


export const player2 = new Player({
    player: 2,
    name: 'Sub-Zero',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
})*/



