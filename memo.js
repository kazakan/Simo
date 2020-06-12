var memoList = [];

var addBt = document.getElementById('addBt')
var typeHere = document.getElementById('typeHere')
var memoContainer = document.getElementById('memoContainer')

memoList = JSON.parse(localStorage.getItem('memos')).memo

memoList.forEach(m => {
    addMemoView(m)
});

addBt.onclick = function(){
    var memo = typehere.value
    memoList.push(memo)
    localStorage.setItem('memos',JSON.stringify({'memo':memoList}))
    addMemoView(memo)

    typeHere.value = ""
}


function addMemoView(memo){
    var node = document.createElement("div")
    var textNode = document.createElement("text")
    var buttonNode = document.createElement("button")

    textNode.innerText = memo;
    buttonNode.innerText = 'x'
    node.appendChild(textNode);
    node.appendChild(buttonNode);
    node.classList.add("memo")
    buttonNode.classList.add("removeButton")

    buttonNode.onclick=function(){
        memoList.splice(memoList.indexOf(memo),1)
        memoContainer.removeChild(node)
    }

    memoContainer.appendChild(node);
}




