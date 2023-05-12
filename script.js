document.addEventListener('DOMContentLoaded', function(){

    const list = document.querySelector('.list ul');
    const forms = document.forms


    //deleting
    list.addEventListener('click', (e) => {
        if(e.target.className == 'delete'){
            const li = e.target.parentElement;
            li.parentNode.removeChild(li);
        }
    });

    // adding
    const addForm = forms['add-movie'];
    addForm.addEventListener('submit', function(e){
        e.preventDefault();

        //create elements
        const value = addForm.querySelector('input[type = "text"]').value;
        const li = document.createElement('li');
        const movieName = document.createElement('span');
        const deleteBtn = document.createElement('span');


        // add text content
        movieName.textContent="delete";
        deleteBtn.textContent=value;

        // add classes
        movieName.classList.add('name');
        movieName.classList.add('delete');


        // append DOM
        li.appendChild(movieName);
        li.appendChild(deleteBtn);
        list.appendChild(li);
    })
})