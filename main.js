import {readFile, writeFile} from 'node:fs/promises'

try {
    let text = await readFile("README.md", "utf-8")
    console.log(text)
    let parsedHeadings = parseHeadings(text)
    console.log(parsedHeadings)
    let parsedEmphasis = parseEmphasis(parsedHeadings)
    console.log(parsedEmphasis)
}
catch(error){
    console.log(error.message)
}


function parseHeadings(text){
    let newText = text
    for (let level = 1; level < 8; level++){
        let re = new RegExp(`(^#{${level}}|\n#{${level}}) (.+)`, "g")
        newText = newText.replace(re, `<h${level}>$2</h${level}>`)
    }
    return newText
}
function parseEmphasis(text){
        return text
        // Find text between ** and __ and put it between <strong> tags
        .replace(/\*{2}(.+)\*{2}?/g, "<strong>$1</strong>") 
        .replace(/__(.+)__?/g, "<strong>$1</strong>") 
        // Find text between ~~ and put it between <s> tags (strike through)
        .replace(/~~(.+)~~?/g, "<s>$1</s>")
        // Find text between * and _ and put it between <strong> tags
        .replace(/_(.+)_?/g, "<em>$1</em>")
        .replace(/\*(.+)\*?/g, "<em>$1</em>")
}