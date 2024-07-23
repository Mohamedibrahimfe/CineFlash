fetch('https://api.themoviedb.org/3/discover/movie?api_key=7014728ebc18e1989f4fc892bc7e02a2')
  .then(response => response.json())
  .then(function(data) {
    let movies=data.results

    movies.map(movie=>{

        let content=`
         <div class="owl-carousel-info-wrap item">
                                    <img src="${baseImageUrl}${movie.poster_path}" class="owl-carousel-image img-fluid" alt="">
                                    <img src="images/${movie.adult ? '18':'verified'}.png" class="owl-carousel-verified-image img-fluid" alt="">
                                    <div class="owl-carousel-info">
                                        <h4 class="mb-2">
                                            ${movie.original_title}
                                        </h4>
                                        <span class="badge">Lang ${movie.original_language}</span>
                                        <span class="badge">Rate: ${movie.vote_average}</span>
                                    </div>
        `
        document.querySelector('.owl-carousel').innerHTML+=content
    })
    $('.owl-carousel').owlCarousel({
        center: true,
        loop: true,
        margin: 30,
        autoplay: true,
        responsiveClass: true,
        responsive:{
            0:{
                items: 2,
            },
            767:{
                items: 3,
            },
            1200:{
                items: 4,
            }
        }
    });
})