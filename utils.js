export const getRandomNum = (num) => {
    return Math.floor(Math.random() * num)
}

export const getData = () => {
    const date = new Date()
    return `${date.getHours()}:${date.getMinutes()}`
}

