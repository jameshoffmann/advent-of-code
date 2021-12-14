import {readFile} from '../../utilities/readFile.js'

const STEPS = 17

const main = () => {
    let {workingStr, rules} = parseInput()
    for (let i = 0; i < STEPS; i++) {
        let j = 0
        while (j < workingStr.length - 1) {
            if (rules[`${workingStr[j]}${workingStr[j+1]}`]) {
                workingStr = insert(workingStr, j + 1, rules[`${workingStr[j]}${workingStr[j+1]}`])
                j += 1
            }
            j += 1
        }
    }
    console.log(workingStr)
    console.log(workingStr.length)
    let counts = {}
    for (const char of workingStr) {
        if (!(char in counts)) counts[char] = 1
        else counts[char] += 1
    }
    let min = 0, max = 0
    for (const [key, value] of Object.entries(counts)){
        if (min === 0) min = value
        if (max === 0) max = value
        min = Math.min(value, min)
        max = Math.max(value, max)
    }
    // console.log(max - min)
}

const parseInput = () => {
    let data = readFile().split('\r\n\r\n')
    let workingStr = data[0]
    let rules = {} 
    data[1].split('\r\n').forEach(el => {
        let rule = el.split(' -> ')
        rules[rule[0]] = rule[1]
    })
    return {workingStr, rules}
}

const insert = (str, index, value) => {
    return str.substr(0, index) + value + str.substr(index);
}

main()