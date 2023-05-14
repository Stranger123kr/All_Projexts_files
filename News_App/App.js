let Api_key = "f8c28fb797b1480b891e4c0fd5a523ea"; // This is news api key
let All_card = document.getElementsByClassName("All_Card")[0];
let search = document.getElementById("search");

// =====================================================

// both are use when data has not present in news api

let Deffualt_link = "https://timesofindia.indiatimes.com/";
let Not_present = " Date is Note Present Sorry for Miss Information ";
let Error_img =
  "https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-1932.jpg?w=740&t=st=1680108685~exp=1680109285~hmac=06389cf9a5d5e1f4794996ad59e43614a93544b33a7f40752916cbf557dd98db";

// ==========================================================

// this is a fetch all news to form news api

const Get_News = async (country) => {
  let URL = `https://newsapi.org/v2/top-headlines?country=${
    country !== undefined ? country : "in"
  }&apiKey=${Api_key}`;
  let response = await fetch(URL);
  let item = await response.json();
  return Show_News(item);
};

// ======================================================

// this is a show all news to display

const Show_News = async (item) => {
  let newsHtml = "";
  Array.from(item.articles).forEach((elem) => {
    let news_card = `
      <div class="card" style="width:20rem">
      <img src="${
        elem.urlToImage !== null
          ? elem.urlToImage
          : (elem.urlToImage = Error_img)
      }" class="card-img-top" alt="..." />
      <div class="card-body">
      <h5 class="card-title"><span>Author :</span> ${
        elem.author !== null ? elem.author : (elem.author = Not_present)
      }</h5><hr>
      <h5 class="card-title"><span>Source :</span> ${
        elem.source.name !== null
          ? elem.source.name
          : (elem.source.name = Not_present)
      }</h5><hr>
      <h6 class="card-title"><span>Title :</span> ${
        elem.title !== null ? elem.title : (elem.title = Not_present)
      }</h6>
      <p class="card-text"><span>Description :</span> ${
        elem.description !== null
          ? elem.description
          : (elem.description = Not_present)
      }</p>
      <p class="card-text"><span>Publish Time :</span> ${
        elem.publishedAt !== null
          ? elem.publishedAt
          : (elem.publishedAt = Not_present)
      }</p>
      <a href="${
        elem.url !== null ? elem.url : (elem.url = Deffualt_link)
      }" target="_blank" class="btn btn-primary">For More Details</a>
      </div>
      </div>
      `;
    newsHtml += news_card;
  });
  All_card.innerHTML = newsHtml;
};
Get_News();

// ===============================

function search_country() {
  // this is a funciton for get search value of all country value
  Get_News(search.value);
}
