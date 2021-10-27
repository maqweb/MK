class Player {
    constructor(props) {
        this.player = props.player
        this.name = props.name
        this.hp = props.hp
        this.img = props.img
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

export const player1 = new Player({
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
})



