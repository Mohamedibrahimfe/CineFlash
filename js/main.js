fetch('https://api.themoviedb.org/3/discover/movie?api_key=7014728ebc18e1989f4fc892bc7e02a2')
  .then(response => response.json())
  .then(function(data) {
    let movies=data.results

    movies.map(movie=>{
        let content=`
         <div onclick="getMovieDetails(${movie.id})" class="owl-carousel-info-wrap item">
                                    <img onclick="scroll()" src="${baseImageUrl}${movie.poster_path}" class="owl-carousel-image img-fluid" alt="">
                                    <img src="images/${movie.adult ? 'verified':'18'}.png" class="owl-carousel-verified-image img-fluid" alt="">
                                    <div class="owl-carousel-info">
                                        <h4 class="mb-2">
                                            ${movie.original_title}
                                        </h4>
                                        <span class="badge">Lang ${movie.original_language}</span>
                                        <span class="badge">Rate: ${movie.vote_average}</span>
                                    </div>
        `
        document.querySelector('.owl-carousel').innerHTML+=content
        scroll()
    })
    $('.owl-carousel').owlCarousel({
        center: true,
        loop: true,
        margin: 30,
        autoplay: false,
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
const options = {
    method: 'GET',
    headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MDE0NzI4ZWJjMThlMTk4OWY0ZmM4OTJiYzdlMDJhMiIsIm5iZiI6MTcxOTM2MDM2OS44MzM2NjEsInN1YiI6IjY2N2E0ZTIwOTA4MjgyNDYxMDU3M2Y0YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.PyySv-16ttssB8kVG2Obx3epUuSJNgitU-vSzfTWLdI'
    }
};

function getMovieDetails(id){      
        fetch(`${baseUrl}/movie/${id}`, options)
        .then(response => response.json())
        .then(function(data){
            const latestPodcast = document.getElementById('latestPodcast')
                content=`
                <div class="col-lg-6 col-12 mb-4 mb-lg-0">
                            <div class="custom-block d-flex">
                                <div class="">
                                    <div class="custom-block-icon-wrap">
                                        <div class="section-overlay"></div>
                                        <a href="detail-page.html" class="custom-block-image-wrap">
                                            <img src="${baseImageUrl}${data.poster_path}" class="custom-block-image img-fluid" alt="">

                                            <a href="#" class="custom-block-icon">
                                                <i class="bi-play-fill"></i>
                                            </a>
                                        </a>
                                    </div>

                                    <div class="mt-2">
                                        <a href="${data.homepage}" class="btn custom-btn">
                                            HomePage
                                        </a>
                                    </div>
                                </div>

                                <div class="custom-block-info">
                                    <div class="custom-block-top d-flex mb-1">
                                        <small class="me-4">
                                            <i class="bi-chat-square custom-icon"></i>
                                            ${data.tagline}
                                        </small>
                                    </div>

                                    <h5 class="mb-2">
                                        <a href="detail-page.html">
                                            ${data.original_title}
                                        </a>
                                    </h5>

                                    <div class="profile-block d-flex">
                                        <img src="images/verified.png" class="profile-block-image img-fluid" alt="">

                                        <p>
                                            
                                            <strong>${data.vote_average}</strong></p>
                                    </div>

                                    <p class="mb-0">${data.overview}</p>

                                    <div class="custom-block-bottom d-flex justify-content-between mt-3">
                                        <a href="#" class="bi-eye me-1">
                                            <span>${data.popularity}</span>
                                        </a>
                                    </div>
                                </div>

                                <div class="d-flex flex-column ms-auto">
                                    <a href="#" class="badge ms-auto">
                                        <i class="bi-heart"></i>
                                    </a>

                                    <a href="#" class="badge ms-auto">
                                        <i class="bi-bookmark"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                `
                latestPodcast.innerHTML=content
        }
        )}
        

function scroll(){
    // document.getElementById("here").scrollIntoView(true);
}

function search(name){
        fetch('https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
}
search()