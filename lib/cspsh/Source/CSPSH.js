//importing all the tokens of each language
import { JSTOKENS } from './LangTokens/CSPSHJS.js'
import { CPPTOKENS } from './LangTokens/CSPSHCPP.js'
import { CTOKENS } from './LangTokens/CSPSHC.js'
import { JAVATOKENS } from './LangTokens/CSPSHJAVA.js'
import { SSTOKENS } from './LangTokens/CSPSHSS.js'

//importing other files that required cspsh
import { HighLight } from './CSPSH/HighLight.js'

//Initializing all the required variables and constants.
let clipboardText
let content = []
let openBraceCount = 0
let fileName
let isEOLINFOR
let forCount
let lang
let mode = 'dark'
let theme = 'cspsh'
let themesList = []
let tempStr = []
let copySvg
let lineCountHolder
let lineCount = 0
let code
let params
let links = [...document.head.getElementsByTagName('link')]
let settings
//the following block will move the user's css to the down
for (let h = 0; h < links.length; h++) {
    let link = links[h]
    link.parentElement.removeChild(link)
}
const CopySvg = ` `

window.onload = function () {
    const cspsh = new CSPSH
    cspsh.highlight()
}

export class CSPSH {
    //Runs right after the page is loaded
    highlight(options) {
        let codes = document.getElementsByClassName('CSPSH');
        //Reads the required attributes and links the required stylesheets based on selected theme
        for (let i = 0; i < codes.length; i++) {
            let codeHolder = codes[i]
            fileName = codeHolder.getAttribute('name')
            codeHolder.className += ` ${codeHolder.getAttribute('theme').toUpperCase()}`
            if (codeHolder.getAttribute('theme') && !themesList.includes(codeHolder.getAttribute('theme'))) {
                theme = codeHolder.getAttribute('theme')
                themesList.push(theme)
                document.head.innerHTML += `<link rel="stylesheet" href="/Source/ThemeStyles/${theme.toUpperCase()}${mode.toUpperCase()}.css">`
            } else
                theme = codeHolder.getAttribute('theme')
            if (!fileName) {
                fileName = `file`//sets default file name to file
            }
            //push all the code content.
            content.push(codeHolder.innerHTML)
            let codeContent = codeHolder.innerHTML
            //Detect the language and start highlighting
            switch (codeHolder.lang) {
                case 'js' || 'ts':
                    lang = new JSTOKENS()
                    lineCount = 0
                    code = HighLight(SetParams(params, codeHolder, codeContent))
                    if (codeHolder.getAttribute('linecount'))
                        DisplayLineCount(lineCountHolder, lineCount)
                    ReplaceDIvWithCode(codeHolder, code)
                    lang = null
                    break
                case 'cpp':
                    lang = new CPPTOKENS()
                    lineCount = 0
                    code = HighLight(SetParams(params, codeHolder, codeContent))
                    if (codeHolder.getAttribute('linecount'))
                        DisplayLineCount(lineCountHolder, lineCount)
                    ReplaceDIvWithCode(codeHolder, code)
                    lang = null
                    break
                case 'c':
                    lang = new CTOKENS()
                    lineCount = 0
                    code = HighLight(SetParams(params, codeHolder, codeContent))
                    if (codeHolder.getAttribute('linecount'))
                        DisplayLineCount(lineCountHolder, lineCount)
                    ReplaceDIvWithCode(codeHolder, code)
                    lang = null
                    break
                case 'java' || 'c#':
                    lang = new JAVATOKENS()
                    lineCount = 0
                    code = HighLight(SetParams(params, codeHolder, codeContent))
                    if (codeHolder.getAttribute('linecount'))
                        DisplayLineCount(lineCountHolder, lineCount)
                    ReplaceDIvWithCode(codeHolder, code)
                    lang = null
                    break
                case 'sts':
                    lang = new SSTOKENS()
                    lineCount = 0
                    code = HighLight(SetParams(params, codeHolder, codeContent))
                    if (codeHolder.getAttribute('linecount'))
                        DisplayLineCount(lineCountHolder, lineCount)
                    // ReplaceDIvWithCode(codeHolder, code)
                    lang = null
                    break
            }
        }
        links.forEach(link => {
            document.head.appendChild(link)
        })
        //Copy to clipboard functionlity inside the HighLight() method
        const buttons = document.getElementsByClassName('copyVector')
        const CSPSHsvgs = document.getElementsByClassName('CSPSHsvg')

        for (let j = 0; j < buttons.length; j++) {
            const button = buttons[j];
            button.addEventListener('click', function () {
                clipboardText = content[j]
                copySvg = CSPSHsvgs[j]
                var inp = document.createElement("textarea")
                document.body.appendChild(inp)
                inp.value = clipboardText.replaceAll('&lt;', '<').replaceAll('&gt;', '>')
                inp.select()
                document.execCommand("Copy");
                document.body.removeChild(inp)
                copySvg.innerHTML = `<polyline points="11 13.5, 13.5 17.5, 22.5 10" fill="transparent" stroke="green" stroke-linecap="round"
            stroke-width="3" stroke-linejoin="round"/>`
                setTimeout(function () {
                    copySvg.innerHTML = CopySvg
                }, 2000)
            })
        }

    }
}

function DisplayLineCount(lineCountHolder, lineCount) {
    for (var line = 1; line < lineCount; line++) {
        lineCountHolder.innerHTML += `&nbsp;${line}<hr/>`
    }
    return
}
function ReplaceDIvWithCode(codeHolder, code) {
    codeHolder.innerHTML += `<code>${code.innerHTML}</code>`
    code.innerHTML = ''
    const codes = [...document.getElementsByClassName('code')]
    codes.forEach(code => {
        code.remove()
    })
}

function SetParams(params, codeHolder, codeContent) {
    params = {
        codeHolder: codeHolder,
        codeContent: codeContent,
        openBraceCount: openBraceCount,
        fileName: fileName,
        isEOLINFOR: isEOLINFOR,
        forCount: forCount,
        lang: lang,
        theme: theme,
        tempStr: tempStr,
        copySvg: CopySvg,
        lineCountHolder: lineCountHolder,
        lineCount: lineCount,
        code: code
    }
    return params
}