import {readFile} from '../../utilities/readFile.js'

const POINT_ALLOC = {
    ")": 3,
    "]": 57,
    "}": 1197,
    ">": 25137
}

const CORRES = {
    '{': '}',
    '[': ']',
    '<': '>',
    '(': ')'
}

const main = () => {
    let input = readFile().split('\r\n')
    let score = 0
    for (const row of input) {
        let _input = []
        for (const char of row) {
            if (char === '{' || char === '(' || char === '[' || char === '<') {
                _input.push(char)
                continue
            }
            if (char !== CORRES[_input.pop()]) {
                score += POINT_ALLOC[char]
                break
            }
        }
    }
    console.log(score)
}

main()