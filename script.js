function openForm() {
  document.querySelector("[data-form]").style.display = "block";
}

function closeForm() {
  document.querySelector("[data-form]").style.display = "none";
}

let library = [
  {
    title: "Pale Blue Dot",
    author: "Carl Sagan",
    publish: 1994,
    read: "Not",
  },
  {
    title: "Modern Chemistry",
    author: "H. Clark Metcalfe",
    publish: 1974,
    read: "Not",
  },
];

function Book(title, author, publish, read) {
  // the constructor
  this.title = title;
  this.author = author;
  this.publish = publish;
  this.read = read;
}

const form = document.getElementById("addBookForm");

function addBookToLibrary() {
  // do stuff here
  let titleForm = document.forms["form"]["title"].value.toString();
  let authorForm = document.forms["form"]["author"].value;
  let publishForm = document.forms["form"]["publish"].value;
  let readForm = document.forms["form"]["read"].value;

  let newBook = new Book(titleForm, authorForm, publishForm, readForm);
  library.push(newBook);

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(library);
  });
}

const tbody = document.querySelector("[data-tbody]");

function showBookToTable() {
  library.forEach((i) => {
    // console.log(i.title)
    let tr = document.createElement("tr");
    tr.innerHTML = `<tr>
                        <td>${i.title}</td>
                        <td>${i.author}</td>
                        <td>${i.publish}</td>
                        <td>${i.read}</td>
                        <td>
                        <button class="read-button">Read</button>
                        <button class="edit-button">Edit</button>
                        <button class="delete-button">Delete</button>
                      </td>
                    </tr>`;
    tbody.appendChild(tr);
  });
}
