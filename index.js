const poke = document.querySelector(".poke");
const apiUrl = {
  url: "https://pokeapi.co/api/v2/",
  type: "pokemon",
  id: 25,
};
const { url, type, id } = apiUrl;
const urlData = `${url}${type}/${id}`;

async function fetchData(url) {
  const data = await fetch(url);
  const response = await data.json();

  //generate html
  const generateHtml = (data) => {
    const html = `<div class="card mx-auto" style="width: 16rem;">
      <img src=${data.sprites.front_default} class="card-img-top" alt="...">
      <div class="card-body bg-dark text-white">
        <h5 class="card-title text-center mb-3">${data.name.toUpperCase()}</h5>
        <p class="card-text d-flex justify-content-between"><span>Height: ${
          data.height
        }</span> <span>Weight: ${data.weight}</span></p>
      </div>
    </div>`;
    poke.innerHTML += html;
  };
  generateHtml(response)();
}
fetchData(urlData);
