// Assuming you have a parent element with id "tableBody" where the rows will be appended

import {sections} from "./data.js";

const parentElement = document.getElementById("tableBody");

function generateTableSection(sectionName, products) {
  // Create section header
  const header = document.createElement("h2");
  header.textContent = sectionName;
  header.setAttribute("id", sectionName.toLowerCase().replace(/\s/g, "-")); // Add id attribute
  parentElement.appendChild(header);

  // Generate table rows for each product in the section
  for (let i = 0; i < products.length; i++) {
    const product = products[i];

    const row = document.createElement("tr");

    const descriptionCell = document.createElement("td");
    descriptionCell.textContent = product.description;
    descriptionCell.setAttribute("width", "527");

    const priceCell = document.createElement("td");
    priceCell.textContent = "$" + product.price.toFixed(2);

    row.appendChild(descriptionCell);
    row.appendChild(priceCell);

    parentElement.appendChild(row);
  }
}



for (let i = 0; i < sections.length; i++) {
  const section = sections[i];
  generateTableSection(section.sectionName, section.products);
}


// function generateTableRow(data) {
//     const parentElement = document.getElementById("tableBody");
//     // Create table row element
//     const row = document.createElement("tr");
    
//     // Create table data elements for description and price
//     const descriptionCell = document.createElement("td");
//     descriptionCell.textContent = data.description;
//     descriptionCell.setAttribute("width", "587");
    
//     const priceCell = document.createElement("td");
//     priceCell.textContent = "$" + data.price.toFixed(2); // Assuming the price is a number
    
//     // Append the table data elements to the row
//     row.appendChild(descriptionCell);
//     row.appendChild(priceCell);
    
//     // Append the row to the parent element
//     parentElement.appendChild(row);
// }



// for (let i = 0; i < sections.length; i++) {
//     generateTableRow(products[i]);
// }