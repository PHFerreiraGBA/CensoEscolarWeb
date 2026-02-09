import data from "./dataset.js"

const loadCards = () => {
  const container = document.getElementById("cardContainer")

  data.map((element) => {
    container.insertAdjacentHTML("afterbegin", `
      <div class="card mx-auto" style="width: 18rem;">
        <img src=${element.image} class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${element.title}</h5>
          <p class="card-text">${element.description}</p>
          <a href="#" class="btn btn-primary">Consultar</a>
        </div>
      </div>
    `)
  })
}

loadCards()
