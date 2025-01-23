function sayHi() {
    console.log(`Hello ${name}`) // (`) this is tilda
}

const sayHi2 = () => {
    console.log(`Howdy ${name}`)
}

const sayHi3 = (name) => {
    return `SUPPPPPPP ${name}`
}

module.exports = {sayHi, sayHi2} // pass functions 