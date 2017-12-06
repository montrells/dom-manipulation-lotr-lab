console.log("Linked.");

// Dramatis Personae
var hobbits = [
  'Frodo Baggins',
  'Samwise \'Sam\' Gamgee',
  'Meriadoc \'Merry\' Brandybuck',
  'Peregrin \'Pippin\' Took'
];

var buddies = [
  'Gandalf the Grey',
  'Legolas',
  'Gimli',
  'Strider',
  'Boromir'
];

var lands = ['The Shire', 'Rivendell', 'Mordor'];
var body = document.querySelector('body');


// Part 1


function makeMiddleEarth() {
  // create a section tag with an id of middle-earth
    console.log("hey");
    var middleEarth = document.createElement("section");// CREATING A SECTION

    console.log(middleEarth);                           // PRINTING MIDDLE EARTH TO THE CONSOLE
    middleEarth.setAttribute("id", "middle-earth");     // SETTING THE ID TO MIDDLE-EARTH
    console.log(middleEarth);                           // PRINTING MIDDLE EARTH TO CONSOLE
    for (var i = 0; i < lands.length; i++){             // LOOPING THE LANDS
      console.log(lands[i]);
      // inside, add each land as an article tag
      var newLand = document.createElement('article');  // CREATING ARTICLE ELEMENT AND PUTTING IT IN THE NEWLAND
        // inside each article tag include an h1 with the name of the land
      var newHeading = document.createElement('h1');    // CREATING H1 ELEMENT AND PUTTING IT IN THE NEWHEADING
      newHeading.innerHTML = lands[i];                  // ADDING MORE HTML THE DOCUMENT
      newLand.appendChild(newHeading);                  // APPENDING ARTICLE
      middleEarth.appendChild(newLand);                 // APPENDING THE H1
    }
    console.log(middleEarth);                           // PRINTING THE KINGDOM
    // append middle-earth to your document body
    body.appendChild(middleEarth);                      // ADDING (APPENDING) TO THE BODY

}

makeMiddleEarth();


// Part 2

var theShire = body.querySelectorAll('article')[0];
var rivendell = body.querySelectorAll('article')[1];
//var mordor = body.querySelectorAll('article')[2];
function makeHobbits() {
    // display an unordered list of hobbits in the shire (which is the first article tag on the page)
    var listOfHobbits = document.createElement('ul');
    for(var i = 0, len = hobbits.length; i < len; i++){
        // give each hobbit a class of hobbit
        var hobbit = document.createElement('li');
        hobbit.className = 'hobbit';
        var textNode = document.createTextNode(hobbits[i]);
        hobbit.appendChild(textNode);
        listOfHobbits.appendChild(hobbit);
    }
    theShire.appendChild(listOfHobbits);
}

makeHobbits();

// Part 3

var frodo = body.querySelectorAll('li')[0];

function keepItSecretKeepItSafe() {
    // create a div with an id of 'the-ring'
    var ring = document.createElement('div');
    ring.setAttribute('id', 'the-ring');
    // give the div a class of 'magic-imbued-jewelry'
    ring.setAttribute('class', 'magic-imbued-jewelry');
    // add an event listener so that when a user clicks on the ring, the nazgulScreech function (provided) is invoked
    ring.addEventListener('click', nazgulScreech);
    // add the ring as a child of Frodo
    frodo.appendChild(ring);
}

keepItSecretKeepItSafe()
// Part 4

function makeBuddies() {
    // create an aside tag
    var aside = document.createElement('aside');
    var listOfBuddies = document.createElement('ul');
    for(var i = 0, len = buddies.length; i < len; i++){
        // attach an unordered list of the 'buddies' in the aside
        var buddy = document.createElement('li');
        buddy.textContent = buddies[i];
        listOfBuddies.appendChild(buddy);
    }
    // insert your aside as a child element of rivendell
    aside.appendChild(listOfBuddies);
    rivendell.appendChild(aside);
}
makeBuddies();
// Part 5

var stranger = rivendell.querySelectorAll('li')[3];

function beautifulStranger() {
  // change the 'Strider' textnode to 'Aragorn'
    stranger.textContent = 'Aragon';
}
beautifulStranger();

// Part 6

function leaveTheShire() {
  // assemble the hobbits and move them to Rivendell
    rivendell.appendChild(hobbits);
}
leaveTheShire();

// Part 7

var fellowshipMembers = rivendell.querySelectorAll('li');
function forgeTheFellowShip() {
    // create a new div called 'the-fellowship' within rivendell
    var theFellowship = document.createElement('div');
    theFellowship.setAttribute('id', 'the-fellowship');
    for(var i = 0, len = fellowshipMembers.length; i < len; i++){
        theFellowship.appendChild(fellowshipMembers[i]);
        // alert(fellowshipMembers[i].textContent + ' has joined the fellowship!');
    }
    // add each hobbit and buddy one at a time to 'the-fellowship'
    // after each character is added make an alert that they have joined your party
    rivendell.appendChild(theFellowship);
}

forgeTheFellowShip();
// Part 8


function theBalrog() {
  // change the 'Gandalf' textNode to 'Gandalf the White'
  // apply style to the element
  // make the background 'white', add a grey border
}


// Part 9

function hornOfGondor() {
  // pop up an alert that the horn of gondor has been blown
  // Boromir's been killed by the Uruk-hai!
  // put a linethrough on boromir's name
  // Remove Boromir from the Fellowship
}


// Part 10

function itsDangerousToGoAlone(){
  // take Frodo and Sam out of the fellowship and move them to Mordor
  // add a div with an id of 'mount-doom' to Mordor
}


// Part 11

function weWantsIt() {
  // Create a div with an id of 'gollum' and add it to Mordor
  // Remove the ring from Frodo and give it to Gollum
  // Move Gollum into Mount Doom
}


// Part 12

function thereAndBackAgain() {
  // remove Gollum and the Ring from the document
  // remove all the baddies from the document
  // Move all the hobbits back to the shire
}
