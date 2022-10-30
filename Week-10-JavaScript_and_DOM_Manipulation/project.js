let id = 0;

document.getElementById('add').addEventListener('click', () => {
    let createdDate = new Date();
    let table = document.getElementById('list');
    let row = table.insertRow(1);
    row.setAttribute('id', `item-${id}`);
    row.insertCell(0).innerHTML = `${createdDate.getMonth() + 1}-${createdDate.getDate()}-${createdDate.getFullYear()}`;
    row.insertCell(1).innerHTML = document.getElementById('time').value;
    row.insertCell(2).innerHTML = document.getElementById('meal').value;
    row.insertCell(3).innerHTML = document.getElementById('comment').value;
    let actions = row.insertCell(4);
    actions.appendChild(createdDeleteButton(id++));
    document.getElementById('meal').value = '';

});

function createdDeleteButton(id) {
    let btn = document.createElement('button');
    btn.className = 'btn btn-danger';
    btn.id = id;
    btn.innerHTML = 'Delete';
    btn.onclick = () => {
        console.log(`Deleting row with id: item-${id}`);
        let elementToDelete = document.getElementById(`item-${id}`);
        elementToDelete.parentNode.removeChild(elementToDelete);
    };
    return btn;
}