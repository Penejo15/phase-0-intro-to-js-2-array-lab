// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(CatName){
    cats.push(CatName)
}

function destructivelyPrependCat(CatName){
    cats.unshift(CatName)
}

function destructivelyRemoveLastCat(CatName){
    cats.pop()
}

function destructivelyRemoveFirstCat(CatName){
    cats.shift()
}

function appendCat(CatName){
    return [...cats, CatName]
}

function prependCat(CatName){
    return [CatName, ...cats]
}

function removeFirstCat(){
    return cats.slice(1)
}

function removeLastCat(){
    return cats.slice(0, cats.length -1)
}