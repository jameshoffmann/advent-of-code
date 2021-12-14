import {readFile} from '../../utilities/readFile.js'

let graph = {}
readFile()
    

const main = () => {
    let paths = []
    dfs('start', paths, [], false)
    console.log(paths)
    console.log(paths.length)
}

const dfs = (node, paths, visited = [], hasVisitedTwice) => {
    visited.push(node)
    if (node === 'end') {
        paths.push(visited.join(','))
        return
    }
    for (const elem of graph[node]) {
        if (elem === 'start') continue
        if (elem === elem.toLowerCase() && visited.includes(elem) && hasVisitedTwice) continue
        if (elem === elem.toLowerCase() && visited.includes(elem) && !hasVisitedTwice) {
            let _hasVisitedTwice = true
            dfs(elem, paths, JSON.parse(JSON.stringify(visited)), _hasVisitedTwice)
        }
        else dfs(elem, paths, JSON.parse(JSON.stringify(visited)), hasVisitedTwice)
    }
}

main()