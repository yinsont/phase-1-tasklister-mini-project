document.addEventListener("DOMContentLoaded", () => {
  // your code here
  //if button is pressed, take the text and put it in a list
  //next to each on list, add a button to remove from list
  let form = document.querySelector('form')
  form.addEventListener('submit', (name) => {
    name.preventDefault() //prevents usual resetting of page
    
    addToList(name.target.new_task_description.value) //puts text in the box into function
    form.reset() //reset the form
  })
})

function addToList(task){
  let button = document.createElement('button') //make button
  button.addEventListener('click', remove) //add click event to button
  button.textContent = 'delete' //put text on button

  let text = document.createElement('p') //new text element in p format
  text.textContent = task //adds text to text
  document.querySelector('#tasks').appendChild(text) //appaneds child to specific element
  text.appendChild(button) //create button on text
}

function remove(name){
  name.target.parentNode.remove() //remove target 
}