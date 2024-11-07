// Data to be displayed in the table
const data = [
    { Name: "Alice", Age: 25 },
    { Name: "Bob", Age: 30 },
    { Name: "Charlie", Age: 35, Gender: "M" }
];

// Create a table element
const table = document.createElement('table');
table.setAttribute('data-user', 'nithin.koutam45@gmail.com');

// Create the table header
const thead = document.createElement('thead');
const headerRow = document.createElement('tr');
const headers = ['Name', 'Age', 'Gender'];

// Add headers to the row
headers.forEach(header => {
    const th = document.createElement('th');
    th.textContent = header;
    headerRow.appendChild(th);
});
thead.appendChild(headerRow);
table.appendChild(thead);

// Create the table body
const tbody = document.createElement('tbody');

// Add rows based on the data
data.forEach(row => {
    const tr = document.createElement('tr');
    const tdName = document.createElement('td');
    tdName.textContent = row.Name;
    tr.appendChild(tdName);

    const tdAge = document.createElement('td');
    tdAge.textContent = row.Age;
    tr.appendChild(tdAge);

    const tdGender = document.createElement('td');
    tdGender.textContent = row.Gender || ''; // Empty if no Gender exists
    tr.appendChild(tdGender);

    tbody.appendChild(tr);
});

// Append the body to the table
table.appendChild(tbody);

// Append the table to the document (assuming there's an element with the ID 'table-container')
document.getElementById('table-container').appendChild(table);
