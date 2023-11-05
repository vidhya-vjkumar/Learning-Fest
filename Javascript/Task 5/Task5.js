import data from './persons.json' assert { type: 'json' }
console.log(data)
for (let person in data){
    console.log("Name: "+data[person].name)
    console.log("Age: "+data[person].age)
}

let container=document.getElementById("container")
let table=document.createElement("table")
let cols=Object.keys(data[0])
let thead=document.createElement("thead")
let tr=document.createElement("tr")

cols.forEach((item) => {
    let th=document.createElement("th")
    th.innerText=item
    th.style.border="1px solid"
    tr.appendChild(th)
    tr.style.border="1px solid"
})

thead.appendChild(tr)
table.append(tr)

data.forEach((item)=>{
    let tr=document.createElement("tr")
    let vals=Object.values(item)
    vals.forEach((elem)=>{
        let td=document.createElement("td")
        td.innerText=elem
        td.style.border="1px solid"
        tr.appendChild(td)
        tr.style.border="1px solid"
    })
    table.appendChild(tr)
})

table.style.border="1px solid"
table.style.borderCollapse="collapse"



container.appendChild(table)