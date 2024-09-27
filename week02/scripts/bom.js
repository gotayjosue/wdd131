const button = document.querySelector('button[type="submit"]');

button.addEventListener('click', function(){
    const input = document.querySelector('#favchap');
    const list = document.querySelector('#list');
    
    if (input.value.trim() !== '') {
        const li = document.createElement('li');
        const deleteButton = document.createElement('button');
        li.textContent = input.value;
        deleteButton.textContent = '❌';
        input.focus();

        deleteButton.addEventListener('click', function() {
            list.removeChild(li);
            input.focus();
        });

        li.append(deleteButton);
        list.append(li);
        input.value = '';
        input.focus();
        }
});
