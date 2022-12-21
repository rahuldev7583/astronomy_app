const showData = document.getElementById("info");
const getDate = document.getElementById("date");
const currentDate = new Date();
const year = currentDate.getFullYear();
const month = currentDate.getMonth() + 1;
const day = currentDate.getDate();
getDate.value = `${year}-${month}-${day}`;
getDate.max = `${year}-${month}-${day}`;
const url =
  "https://api.nasa.gov/planetary/apod?api_key=aR52Wv1BXooQKbj1e4war7SmShnIciBeU7IyMgbl";
const getData = async (url) => {
  showData.innerHTML = "<h1>Loading</h1>";
  const res = await fetch(url);
  const data = await res.json();
  //console.log(data);
  showData.innerHTML = `
  <h2 class="title" >${data.title}</h2>
  <img class="img" src=${data.url} alt="pic">
  <p class="copyright">© ${data.copyright}</p>
  <p class="explanation">${data.explanation}</p>`;
  console.log(data);
  getDate.value = data.date;
};
function update() {
  const fullURL = `${url}&date=${getDate.value}`;
  getData(fullURL);
}
getData(url);
getDate.addEventListener("change", update);
