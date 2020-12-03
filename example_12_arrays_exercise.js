// change the h1 tag with id="title" to have the text "flowers"
document.getElementById('title').innerHTML = 'Flowers';

// create a list of flowers
const flowerlist = ['Daisy', 'Carnation', 'Lily', 'Gardenia', 'Orchid', 'Rose', 'Sunflower', 'Tulip', 'Dahlia', 'Marigold', 'Aster', 'Azalea', 'Blackeyed Susan', 'Buttercup', 'California Poppy', 'Chives', 'Chrysanthemum', 'Crocus', 'Daffodil', 'Delphinium', 'Dusty Miller', 'Geranium', 'Iris', 'Lavender', 'Periwinkle', 'Petunia', 'Ranunculus', 'Snapdragon', 'Violet', 'Zinnia']

// write a function which adds a text to a ul element as an li element
function addText(flower, index) {

    let ul = document.getElementById("list");
    let li = document.createElement("li");

    li.appendChild(document.createTextNode(flower));
    ul.appendChild(li);

}

// iterate through your flowers array and create an li for each flower
flowerlist.forEach(addText);