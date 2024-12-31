const myInput = document.getElementById('myinput');
const myList = document.getElementById('mylist');

function myAdd() {
    if (myInput.value === ''){
    alert('You most enter a task');
}
else {
    const listItem = document.createElement('li');
    listItem.innerHTML = myInput.value ;
    myList.appendChild(listItem);
    let span = document.createElement('span');
    span.innerHTML = 'x';
    listItem.appendChild(span);
}
myInput.value = '';


}

myList.addEventListener("click", function(e) {
    if (e.target.tagName ==='LI'){
        e.target.classList.toggle('checked');
        
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        

    }
    });



