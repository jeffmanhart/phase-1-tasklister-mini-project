document.addEventListener("DOMContentLoaded", () => {
    document.querySelector('form').addEventListener('submit', (e) => {
      e.preventDefault()
      buildToDo(e.target["new-task-description"].value)
    })
});


function buildToDo(task) {
  let li = document.createElement('li')
  li.textContent = task
  document.querySelector('#tasks').appendChild(li)
}