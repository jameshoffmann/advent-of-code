import {readFile} from '../../utilities/readFile.js'

const POINT_ALLOC = {
    "(": 1,
    "[": 2,
    "{": 3,
    "<": 4
}

const CORRES = {
    '{': '}',
    '[': ']',
    '<': '>',
    '(': ')'
}

const main = () => {
    let input = readFile().split('\r\n')
    let scores = []
    for (const row of input) {
        let score = 0
        let _row = []
        for (const char of row) {
            if (char === '{' || char === '(' || char === '[' || char === '<') {
                _row.push(char)
                continue
            }
            if (char !== CORRES[_row.pop()]) {
                _row = []
                break
            }
        }
        while (_row.length !== 0) {
            score = score * 5
            score += POINT_ALLOC[_row.pop()]
        }    
        if (score > 0) scores.push(score)
    }
    scores.sort(function(a, b){return a - b})
    console.log(scores[Math.round((scores.length - 1) / 2)])
}

main()