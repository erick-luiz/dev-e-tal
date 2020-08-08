const getToday = () => {
    let d = new Date();
    return `${d.getFullYear()}-${d.getMonth()}-${d.getDay()}`
}

export default getToday;