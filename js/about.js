const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MDE0NzI4ZWJjMThlMTk4OWY0ZmM4OTJiYzdlMDJhMiIsIm5iZiI6MTcxOTM2MDM2OS44MzM2NjEsInN1YiI6IjY2N2E0ZTIwOTA4MjgyNDYxMDU3M2Y0YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.PyySv-16ttssB8kVG2Obx3epUuSJNgitU-vSzfTWLdI",
  },
};
document.getElementById("searchForm").addEventListener("submit", function (e) {
  e.preventDefault();
  fetch(
    `${baseUrl}/search/movie?query=${this.search.value}&include_adult=false&language=en-US`,
    options
  )
    .then((response) => response.json())
    .then(function (response) {
      document.getElementById("searchContainer").innerHTML = "";
      if (this.search.value == "") {
        return;
      }
      const myModal = new bootstrap.Modal(
        document.getElementById("searchModal")
      );
      myModal.show();
      response.results.map((movie) => {
        const title = movie.title.split(" ");
        title.slice(0, 3);
        console.log(title);
        content = `
              <div class="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0 ">
                      <div class="custom-block custom-block-overlay movie">
                              <a href="detail-page.html" class="custom-block-image-wrap">
                                  <img src="${baseImageUrl}${movie.poster_path}" class="custom-block-image " alt="">
                              </a>
                          <div class="custom-block-info custom-block-overlay-info">
                              <h5 class="mb-1">
                                  <a href="listing-page.html" class="text-white">
                                      ${title}
                                  </a>
                              </h5>
                              <p class="badge bg-dark mb-0">${movie.vote_average}</p>
                          </div>
                      </div>
              </div>`;
        document.getElementById("searchContainer").innerHTML += content;
      });
    });
});
