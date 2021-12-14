import {readFile} from '../../utilities/readFile.js'

const STEPS = 40

const main = () => {
    let {workingStr, rules, pairCounts, charCounts} = parseInput()
    let i = 0
    while(i < workingStr.length) {
        if (i !== workingStr.length - 1) pairCounts[`${workingStr[i]}${workingStr[i+1]}`] += 1
        charCounts[workingStr[i]] += 1
        i += 1
    }
    for (let i = 0; i < STEPS; i++) {
        for (const [key, value] of Object.entries(pairCounts)) {
            //AB -> C
            //Generate new char C and add it to charCounts
            let newChar = rules[key]
            charCounts[newChar] += value

            //Add new pairs. AB -> C becomes AC and CB
            pairCounts[key[0] + newChar] += value
            pairCounts[newChar + key[1]] += value

            //Remove AB pair
            pairCounts[key] -= value
        }
    } 
    let min = 0
    let max = 0
    for (const [key, value] of Object.entries(charCounts)){
        if (min === 0) min = value
        if (max === 0) max = value
        min = Math.min(value, min)
        max = Math.max(value, max)
    }

    console.log(max - min)
}

const parseInput = () => {
    let data = readFile().split('\r\n\r\n')
    let workingStr = data[0]
    let rules = {} 
    let pairCounts = {}
    let charCounts = {}
    data[1].split('\r\n').forEach(el => {
        let rule = el.split(' -> ')
        rules[rule[0]] = rule[1]
        pairCounts[rule[0]] = 0
        charCounts[rule[1]] = 0
    })
    return {workingStr, rules, pairCounts, charCounts}
}

main()