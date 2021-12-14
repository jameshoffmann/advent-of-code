import {readFile} from '../../utilities/readFile.js'

let graph = {}
readFile()
    .split('\r\n')
    .map(el => {
        let tup = el.split('-')
        return {p1: tup[0], p2: tup[1]}
    }).forEach(el => {
        if (!(el.p1 in graph)) graph[el.p1] = new Set()
        if (!(el.p2 in graph)) graph[el.p2] = new Set()
        graph[el.p1].add(el.p2)
        if (el.p2 !== 'end' && el.p1 !== 'start') graph[el.p2].add(el.p1)
    })

const main = () => {
    let paths = []
    dfs('start', [], paths, visitedTwice)
    console.log(paths)
    console.log(paths.length)
}

const dfs = (node,  visited = [], paths) => {
    visited.push(node)
    if (node === 'end') {
        paths.push(visited.join(','))
        return
    }
    for (const elem of graph[node]) {
        if (elem === elem.toLowerCase() && visited.includes(elem)) continue
        else dfs(elem, JSON.parse(JSON.stringify(visited)), paths)
    }
}

main()