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
    const {id, penulis, judul, deskripsi, img} = book;
    let card = document.createElement("div");
    card.className = "shadow-lg";
    card.innerHTML = `<div
    class="card bg-[url(${img})] bg-center bg-cover relative rounded-md cursor-pointer overflow-hidden h-[300px] max-sm:h-[320px] max-[431px]:h-[380px] max-sm:w-[220px] max-[431px]:w-[280px] w-[200px]"
  >
    <button
      class="bg-red-600 absolute top-0 right-0 py-2 px-4 text-xl rounded-bl-lg text-slate-50 hover:bg-red-700 duration-300"
      onclick="window.location.href='story.html?id=' + ${id};"
    >
      <ion-icon name="book-outline"></ion-icon>
    </button>
    <p class="absolute bg-red-600 text-slate-50 bottom-0 w-full h-[15%] text-center pt-3">${judul}</p>
  </div>`;
    booksContainer.appendChild(card);
  });
}
