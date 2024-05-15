// GET BOOK PAGE ID
const urlParams = new URLSearchParams(window.location.search);
const bookId = urlParams.get("id");
const xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
    const booksData = JSON.parse(xhr.responseText);
    const book = booksData.cerita_horor.find(
      (data) => data.id.toString() === bookId
    );
    displayBook(book);
  }
};
xhr.open("GET", "json/books.json", true);
xhr.send();

// DISPLAY BOOK
function displayBook(book) {
  const audioFiles = [
    "audio/horror-backsound.mp3",
    "audio/horror-backsound (1).mp3",
    "audio/horror-backsound (2).mp3",
    "audio/horror-backsound (3).mp3",
    "audio/horror-backsound (4).mp3",
  ];
  const randomIndex = Math.floor(Math.random() * audioFiles.length);
  const audio = new Audio(audioFiles[randomIndex]);
  audio.play();
  const {id, judul, penulis, deskripsi, img} = book;
  const container = document.querySelector(".section-container");
  container.innerHTML = "";
  const story = document.createElement("div");
  story.innerHTML = `
  <div class="overflow-auto max-md:w-[98%] w-[85%] mx-auto py-5 px-7 rounded bg-stone-950 opacity-95">
            <h1 class="max-sm:text-center mb-3 max-sm:text-4xl text-5xl text-red-600 font-semibold">${judul}</h1>
            <h3 class="max-sm:text-center text-slate-200">${penulis}</h3>
            <div class="mt-5 max-sm:flex max-sm:flex-col max-sm:items-center max-sm:justify-center">
                <img src="${img}" alt="gambar ${judul}" class="float-left mr-7 mb-3 w-[300px] max-sm:self-center rounded max-sm:mb-5">
                <p class="inline">${deskripsi}</p>
            </div>
        </div>`;
  container.appendChild(story);
}
