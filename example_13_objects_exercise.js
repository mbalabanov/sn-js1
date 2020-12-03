// define an array with at least 3 fruits, with their names and their sweetness (1 to 10)
let fruitlist = [
    {
        "name": "Apple",
        "sweetness": 5
    },
    {
        "name": "Pear",
        "sweetness": 6
    },
    {
        "name": "Orange",
        "sweetness": 4
    },
    {
        "name": "Grapefruit",
        "sweetness": 3
    },
    {
        "name": "Mandarin",
        "sweetness": 4
    },
    {
        "name": "Lime",
        "sweetness": 3
    },
    {
        "name": "Nectarin",
        "sweetness": 6
    },
    {
        "name": "Apricot",
        "sweetness": 7
    },  
    {
        "name": "Peach",
        "sweetness": 8
    },
    {
        "name": "Plum",
        "sweetness": 7
    },
    {
        "name": "Banana",
        "sweetness": 7
    },
    {
        "name": "Mango",
        "sweetness": 10
    },
    {
        "name": "Strawberry",
        "sweetness": 8
    },
    {
        "name": "Raspberry",
        "sweetness": 7
    },
    {
        "name": "Blueberry",
        "sweetness": 7
    },
    {
        "name": "Kiwi",
        "sweetness": 7
    },
    {
        "name": "Passionfruit",
        "sweetness": 9
    },
    {
        "name": "Watermelon",
        "sweetness": 6
    }];

// write a function which can append a row to the fruits table, with a fruit as input
let fruitTable = document.getElementById('fruitTableBody');

function insertFruit(fruit, index) {
    let fruitRow = fruitTable.insertRow(index);
    let fruitCell1 = fruitRow.insertCell(0);
    let fruitCell2 = fruitRow.insertCell(1);
    console.log(fruit);
    fruitCell1.innerHTML = fruit.name;
    fruitCell2.innerHTML = fruit.sweetness;
}

// iterate over all fruits and insert them as rows in the table
fruitlist.forEach(insertFruit);