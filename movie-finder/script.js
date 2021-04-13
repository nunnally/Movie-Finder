function renderMovies(){

    const url= "https://mock-api.bootcamp.respondeai.com.br/api/v2/moviefinder/filmes" 

    axios.get(url).then(function (response) {
        
        let html="";

        response.data.forEach(movie => {
            
            html+=`
            <div class="movie">
                <img src="${movie.imagem}">
                <div class="title">${movie.titulo}</div>
                <button>
                Comprar
                <ion-icon name="cart-outline"></ion-icon>
                </button>
          </div>`
            
        });

        document.querySelector('.movies').innerHTML=html;
  })

  //const html=""


}

renderMovies()