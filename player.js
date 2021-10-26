export const player1 = {
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

export const player2 = {
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



