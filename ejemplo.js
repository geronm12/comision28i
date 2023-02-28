const div = document.getElementById("app");
var res;

fetch("https://rickandmortyapi.com/api/character")
  .then((res) => res.json())
  .then((response) => {
    let string = "";
    res = response.results;
    response.results.map((element) => {
      string += `<h1>${element.name}</h1>`;
    });
    writeOnHtml(string);
  })
  .then((ob) => console.log(res))
  .catch((err) => console.log(err));

function writeOnHtml(data) {
  const app = document.getElementById("app");
  app.innerHTML = data;
}
