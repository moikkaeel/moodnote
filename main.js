const addButton = document.querySelector('.add');
const emptyFeed = document.querySelector('.empty');
const noteText = document.querySelector('.text');
const noteContainer = document.getElementById('container');

function addNote() {
    const template = document.getElementById('template');
    const clone = template.content.cloneNode(true);
    noteContainer.appendChild(clone);
};

addButton.addEventListener('click', (e) => {

    console.log('Button pressed');

    // Hide the empty feed text
    emptyFeed.style.display = 'none';
    //
    // Add a new note
    addNote();

    console.log(noteContainer.children.length);

});

