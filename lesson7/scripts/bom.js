const input = document.querySelector('#favchap')
const button = document.querySelector('button')
const deleteAllButton = document.querySelector('#deleteAllButton');
const list = document.querySelector('#list')
let chaptersArray = getChapterList() ||[];

button.addEventListener('click', function() {
    if (input.value != '') {
        
        const li = document.createElement('li');
    
        const deleteButton = document.createElement('button');
        
        li.textContent = input.value;
        deleteButton.textContent = '❌';
    
        li.append(deleteButton);
        list.append(li);
    
        deleteButton.addEventListener('click', function () {
            list.removeChild(li);
            input.focus();
        });
        
        input.focus();
        
        input.value = '';
    }
});

deleteAllButton.addEventListener('click', function() {
    while (list.firstChild) {
        list.removeChild(list.firstChild);
    }
});

function getChapterList() {

    return [];
}

chaptersArray.forEach(chapter => {
    displayList(chapter);
  });