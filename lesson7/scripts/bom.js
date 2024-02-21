const input = document.querySelector('#favchap');
const addButton = document.querySelector('button');
const deleteAllButton = document.querySelector('#deleteAllButton');
const list = document.querySelector('#list');

let chaptersArray = getChapterList() || [];

chaptersArray.forEach(chapter => {
    displayList(chapter);
});

addButton.addEventListener('click', function() {
    if (input.value !== '') {
        displayList(input.value);
        chaptersArray.push(input.value);
        setChapterList();
        input.value = '';
        input.focus();
    }
});

deleteAllButton.addEventListener('click', function() {
    while (list.firstChild) {
        list.removeChild(list.firstChild);
    }
    chaptersArray = [];
    setChapterList();
});

function getChapterList() {
    return JSON.parse(localStorage.getItem('myFavBOMList'));
}

function setChapterList() {
    localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
}

function displayList(item) {
    const li = document.createElement('li');
    const deleteButton = document.createElement('button');
    
    li.textContent = item;
    deleteButton.textContent = '❌';
    
    li.appendChild(deleteButton);
    list.appendChild(li);
    
    deleteButton.addEventListener('click', function() {
        list.removeChild(li);
        deleteChapter(item);
        input.focus();
    });
}

function deleteChapter(chapter) {
    chaptersArray = chaptersArray.filter(item => item !== chapter);
    setChapterList();
}
