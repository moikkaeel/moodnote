const addButton = document.querySelector('.add');
const emptyFeed = document.querySelector('.empty');
const noteContainer = document.getElementById('container');

function addNote() {

    const template = document.getElementById('template');
    const clone = template.content.cloneNode(true);
    const noteImg = clone.getElementById('image');
    const uploadDiv = clone.querySelector('.upload-photo');
    const newImg = clone.getElementById('input-file');
    const deleteBtn = clone.querySelector('.icon');

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

    // Add note to noteContainer
    noteContainer.appendChild(clone);
};

addButton.addEventListener('click', (e) => {
    
    // Hide the empty feed text
    emptyFeed.style.display = 'none';

    // Add a new note
    addNote();
});
