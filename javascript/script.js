// OPEN MENU FUNCTION
function openMenu(el) {
  const navMenu = document.querySelector(".nav-menu");
  el.name === "menu"
    ? ((el.name = "close"),
      navMenu.classList.add("top-[76px]"),
      navMenu.classList.add("opacity-100"))
    : ((el.name = "menu"),
      navMenu.classList.remove("top-[76px]"),
      navMenu.classList.remove("opacity-100"));
}

// BOOKS FETCH
// AJAX REQUEST FOR FETCHING BOOKS DATA
const xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
    const booksData = JSON.parse(xhr.responseText);
    displayBooks(booksData);
  }
};
xhr.open("GET", "json/books.json", true);
xhr.send();

function displayBooks(books) {
  const dataBooks = books.cerita_horor;
  dataBooks.forEach((book) => {
    const booksContainer = document.querySelector(".book-container");
    const {id, judul, deskripsi, img} = book;
    let card = document.createElement("div");
    card.className = "shadow-lg";
    card.innerHTML = `<div
    class="bg-[url(${img})] bg-center bg-cover relative rounded-md cursor-pointer overflow-hidden z-[-2] h-[250px] w-[180px]"
  >
    <button
      class="bg-red-600 absolute top-0 right-0 py-2 px-4 text-xl rounded-bl-lg text-slate-50 hover:bg-red-700 duration-300"
    >
      <ion-icon name="book-outline"></ion-icon>
    </button>
  </div>`;
    booksContainer.appendChild(card);
  });
}
