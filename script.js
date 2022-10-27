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

  updateTable();

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(library);
  });
}

function toggleReadButton(key) {
  let readForm = document.forms["form"]["read"].value;
  key = readForm;
  console.log(key);
}

function getReadStatus(index) {
  let td = document.createElement("td");
  let btn = document.createElement("button");

  btn.textContent = "Change Read Status";

  btn.addEventListener("click", () => {
    // let readForm = document.forms["form"]["read"].value;
    if (library[index].read == "yes") {
      library[index].read = "not";
    } else if (library[index].read == "not") {
      library[index].read = "yes";
    }

    updateTable();
  });

  td.appendChild(btn);
  return td;
}

function updateTable() {
  tbody.textContent = "";

  library.forEach((book, index) => {
    let tr = document.createElement("tr");
    Object.keys(book).forEach((prop) => {
      let td = document.createElement("td");
      td.textContent = book[prop];
      tr.appendChild(td);
    });

    tr.appendChild(getReadStatus(index));
    tbody.appendChild(tr);
  });
}
