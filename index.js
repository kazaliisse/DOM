const input = document.getElementById('input')
const items = document.getElementById('list')
document.getElementById('basic-addon2').addEventListener('click', function(e){

if(input.value === "" ){
    alert('write something please')
}
else{
   const list = document.createElement('li')
   list.textContent = input.value
   list.classList.add('list-group-item', 'categoryTag')
   items.appendChild(list)
   items.addEventListener('click', function(e){
    e.target.remove();
   })
   
    
}
document.addEventListener('keydown', function(e){
    const list = document.createElement('li')
    if(e.key==='Enter')
    list.textContent = input.value
    list.classList.add('list-group-item', 'categoryTag')
    items.appendChild(list)
    items.addEventListener('click', function(e){
     e.target.remove();

})

})

input.value = ""
})
