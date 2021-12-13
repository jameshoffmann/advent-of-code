import {readFile} from '../../utilities/readFile.js'

const R = 10
const C = 10

let input = readFile().split('\r\n').map(el => el.split('').map((el => { return {nrg: Number(el), hasFlashed: false}})))
let flashCount = 0

const main = () => {
    let stepCount = 0
    while(true) {
        let sync = true
        for (const row of input) {
            for (const el of row) {
                el.hasFlashed = false
                if (el.nrg !== 0) sync = false
            }
        }
        if (sync) break

        for (let r = 0; r < R; r++) {
            for (let c = 0; c < C; c++) {
                if (input[r][c].nrg === 9) {
                    input[r][c].nrg = 0
                    input[r][c].hasFlashed = true
                    flashCount += 1
                    flash(r, c)
                } else if (!input[r][c].hasFlashed) {
                    input[r][c].nrg += 1
                }
            }
        }
        stepCount++
    }
    console.log(stepCount)
}

const flash = (r, c) => {
    let adjacentCells = getAdjacentCells(r, c)
    for (const cell of adjacentCells) {
        if (input[cell.row][cell.col].nrg === 9) {
            input[cell.row][cell.col].nrg = 0
            input[cell.row][cell.col].hasFlashed = true
            flashCount += 1
            flash(cell.row, cell.col)
        } else if (!input[cell.row][cell.col].hasFlashed) {
            input[cell.row][cell.col].nrg += 1
        }
    }
}

const getAdjacentCells = (r, c) => {
    let cells = []
    let isTop = r === 0
    let isLeft = c === 0
    let isBot = r === R - 1
    let isRight = c === C - 1

    //NW
    if (!isTop && !isLeft) cells.push({row: r-1, col: c-1})
    //N
    if (!isTop) cells.push({row: r-1, col: c})
    //NE
    if (!isTop && !isRight) cells.push({row: r-1, col: c+1})
    //W
    if (!isLeft) cells.push({row: r, col: c-1})
    //E 
    if (!isRight) cells.push({row: r, col: c+1})
    //SW
    if (!isBot && !isLeft) cells.push({row: r+1, col: c-1})
    //S
    if (!isBot) cells.push({row: r+1, col:c})
    //SE
    if (!isBot && !isRight) cells.push({row: r+1, col: c+1})

    return cells
}

main()