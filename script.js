function openForm() {
  document.querySelector("[data-form]").style.display = "block";
}

function closeForm() {
  document.querySelector("[data-form]").style.display = "none";
}

let library = [];

function Book(title, author, publish, read) {
  // the constructor
  this.title = title;
  this.author = author;
  this.publish = publish;
  this.read = read;
}

const form = document.getElementById("addBookForm");
const tbody = document.querySelector("[data-tbody]");

function addBookToLibrary() {
  // do stuff here
  let titleForm = document.forms["form"]["title"].value;
  let authorForm = document.forms["form"]["author"].value;
  let publishForm = document.forms["form"]["publish"].value;
  let readForm = document.forms["form"]["read"].value;

  let newBook = new Book(titleForm, authorForm, publishForm, readForm);
  library.push(newBook);

  let tr = document.createElement("tr");
  tr.innerHTML = `<tr>
                      <td>${titleForm}</td>
                      <td>${authorForm}</td>
                      <td>${publishForm}</td>
                      <td>${readForm}</td>
                      <td>
                      <button class="read-button">Read</button>
                      <button class="edit-button">Edit</button>
                      <button class="delete-button">Delete</button>
                    </td>
                  </tr>`;
  tbody.appendChild(tr);

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(library);
  });
}

