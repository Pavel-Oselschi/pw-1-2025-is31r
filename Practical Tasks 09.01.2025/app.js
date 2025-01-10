document.addEventListener('DOMContentLoaded', () => {

    let x = Number(prompt('enter x '))
    console.log(`x=${x}`)
    let y = Number(prompt('Pleas enter y'))
    console.log(`y=${y}`)

    console.log(`x+y=`,
        x + y)
    console.log(`x-y=`,
        x - y)
    console.log(`x*y`,
        x * y)
    console.log(`x/y=`,
        x / y)

    let a = Number(prompt('enter a '))
    console.log(`a=${a}`)
    let b = Number(prompt('enter b '))
    console.log(`b=${b}`)
    let str = 0;

    for (let i = a; i < b + 1; i++) {
        str = str + i;
    }
    console.log(`suma cifrelor din segmentul ${a}I------I${b}=${str}`)

});