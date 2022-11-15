
let tbody = document.getElementById("tbody")
console.log(tbody);
let count = 0;

fetch('https://northwind.vercel.app/api/products')
    .then((response) => response.json())
    .then((json) => {
        json.forEach(element => {
            count++
            tbody.innerHTML += `<tr>
        <th scope="row">${count}</th>
        <td>${element.name}</td>
        <td>${element.unitPrice}</td>
        <td style="(element.category?.name==undefined)? color:red : color:black ">${(element.category?.name == undefined) ? "category not found" : element.category.name}</td>
        <td>${(element.discontinued == true)? "YES": "FALSE"}</td>
      </tr>`
        });
    });     