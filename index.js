
const items = document.getElementById('list')
const form = document.querySelector('form')
form.addEventListener('submit', function(e){
    if ( e.target.input.value ===""){
        alert("Please enter a valid");
        
    }    else{
        const list = document.createElement("li")
           list.innerText = input.value
           list.classList.add("list-group-item")
           items.appendChild(list)
            }
    

})



