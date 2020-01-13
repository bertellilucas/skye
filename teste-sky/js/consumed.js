$(document).ready(function() {
    getData();
})

const montaMovie = (movieList) => {

    const start = `<div class="row">`;
    const end = `</div>`;

    let content = start;

    movieList.forEach((movie, i) => {
        if (i % 9 !== 0) {
            content += `<div class="movie col-sm-4 col-md-4 col-lg-4 py-3 efeito">
                <img width="240" height="240" class="image img-fluid" src="${movie.images[0].url}" />
            </div>`
        }
        if (i > 0 && i % 9 === 0) {
            content += `<div class="movie col-sm-4 col-md-4 col-lg-4 py-3 efeito">
                <img width="240" height="240" class="image img-fluid" src="${movie.images[0].url}" />
            </div>`
            content += end;
            content += start;
        }
    })

    $('#movies-all .movies-list').append(content);
}

const montaHighlits = (movie, i) => {
    return `<div class="carousel-item ${i === 0 ? "active":""}">
    <img class="d-block w-100" src="${movie.images[0].url}" alt="First slide">
  </div>`
}

const getData = async() => {
    let highlights = movies.filter(category => category.type === 'highlights')[0];
    let carousel = movies.filter(category => category.type === 'carousel-portrait')[0];
    let menu = movies.filter(category => category.type === 'menu')[0];


    highlights.items.forEach((highlight, i) => {
        $('.carousel-inner').append(montaHighlits(highlight, i));
    })

    montaMovie(carousel.movies)

}