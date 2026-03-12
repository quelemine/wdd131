const input = document.querySelector('#favchap');
const buttonElement = document.querySelector('button');
const list = document.querySelector('#list');


buttonElement.addEventListener('click', function () {
  if (input.value.trim() != "") {
    const li = document.createElement('li');
    li.textContent = input.value;
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = '❌';
    // li.appendChild(deleteButton);
    list.appendChild(li);

    deleteBtn.addEventListener('click', function () {
      list.removeChild(li);
      input.focus();
    });
    // add the button to the list item
    li.appendChild(deleteBtn);
    // OUTPUT: finally display the completed list item to the unordered list
    list.appendChild(li);
    // clear the user input field
    input.value = "";
  }
  // focus the user back to the input field
  input.focus();
});

// input.addEventListener('click', function () {
//   input.value = '';
//   input.focus();
// })