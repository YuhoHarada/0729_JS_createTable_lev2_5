const zeilen = document.getElementById("zeilenFeld")
const spalten = document.getElementById("spaltenFeld")
const result = document.getElementById("result")

function generateTable() {
    let tbl = document.createElement("table")
    for (let i = 0; i < zeilen.value; i++){
        let tr = document.createElement("tr")
        for (let j = 0; j < spalten.value; j++){
            let td = document.createElement("td")
            let txt = document.createTextNode(`${i+1}.${j+1}`)
            td.appendChild(txt)
            tr.appendChild(td)
        }
        tbl.appendChild(tr)
    }
    result.appendChild(tbl)
}