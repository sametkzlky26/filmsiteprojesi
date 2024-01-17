const arrows = document.querySelectorAll(".arrow")
const movieLists = document.querySelectorAll(".movie-list");

arrows.forEach((arrow, i) => {
    let clickCounter = 0;
    const imageItem = movieLists[i].querySelector("img").clientHeight;
    console.log(imageItem);
    arrow.addEventListener("click", function () {
        clickCounter++;
        
        movieLists[i].style.transform = `translateX(${movieLists[i].computedStyleMap().get("transform")[0].x.value -300}px)`
    });
   
});
