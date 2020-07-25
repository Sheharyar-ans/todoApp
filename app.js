var list = document.getElementById('list');

function addTodo(){
    var Item_todo = document.getElementById('todoItem');
    var li = document.createElement('li');
    var liText = document.createTextNode(Item_todo.value);
    li.appendChild(liText)
    list.appendChild(li);
    Item_todo.value = ""


    var delBtn = document.createElement('button');
    var btnText = document.createTextNode('Delete');
    delBtn.appendChild(btnText);
    li.appendChild(delBtn);
    delBtn.setAttribute("onclick","delItem(this)")
    delBtn.setAttribute('Class','btn');

    var editBtn = document.createElement('button');
    var btnText = document.createTextNode('Edit');
    editBtn.appendChild(btnText);
    li.appendChild(editBtn)
    editBtn.setAttribute("onclick","editBtn(this)");
    editBtn.setAttribute('Class',"edit")

   
}

function editBtn(a){
    var val = prompt('Enter Edit Value',a.parentNode.firstChild.nodeValue);
    a.parentNode.firstChild.nodeValue = val;
    
}

function delItem(s){
    s.parentNode.remove();
}

function delAll(){
    list.innerHTML = ""
}