const EMPTY = 0;
const addButton = document.querySelector('.add');
const emptyFeed = document.querySelector('.empty');
const noteContainer = document.getElementById('container');

const noteObserver = new MutationObserver(() => {

    if(noteContainer.children.length === EMPTY){
        emptyFeed.style.display = 'block';
    }
    else emptyFeed.style.display = 'none';
})


function addNote() {

    const template = document.getElementById('template');
    const clone = template.content.cloneNode(true);
    const noteImg = clone.getElementById('image');
    const uploadDiv = clone.querySelector('.upload-photo');
    const newImg = clone.getElementById('input-file');
    const deleteBtn = clone.querySelector('.delete');
    const noteText = clone.getElementById('input-text');
    const submitBtn = clone.querySelector('.submit');
    const paragraph = document.createElement('p');

    // Create onclick events for clones

    noteImg.onclick = () => {
        uploadDiv.style.display = 'block';
    }

    // By clicking the delete button the note gets deleted
    deleteBtn.onclick = () => {
        // Finds the parent note and gets its id
        const note = deleteBtn.closest('.note');
        noteContainer.removeChild(note);
    }

    // Change note image
    newImg.onchange = () => {
        noteImg.src = URL.createObjectURL(newImg.files[0]);
        console.log("Picture changed");

        // Remove the uploadDiv after changing the picture
        uploadDiv.style.display = 'none';
    }

    // Listens for global click and makes upload div disappear if needed
    document.addEventListener('click', (e) => {

        if(!uploadDiv.contains(e.target) && !noteImg.contains(e.target)) {

            uploadDiv.style.display = 'none';
        }
    });

    // Change input field into a paragraph element
    submitBtn.onclick = () => {

        text = noteText.value;

        if(text.length == EMPTY) {
            return;
        }

        paragraph.textContent = text;
        noteText.replaceWith(paragraph);

        // Remove the submit button
        submitBtn.style.display = 'none';
    }

    paragraph.onclick = () => {
        submitBtn.style.display = 'block';
        paragraph.replaceWith(noteText);
    }

    // Add note to noteContainer
    noteContainer.appendChild(clone);
};

addButton.addEventListener('click', (e) => {

    // Add a new note
    addNote();
});

noteObserver.observe(noteContainer, { childList: true });