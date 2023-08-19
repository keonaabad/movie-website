// Search Engine  
const searchInput = document.getElementById("search-text");
const moviesFromDOM = document.getElementsByClassName("movie-box");
const popularHeading = document.querySelectorAll(".popular");
const rightArrow = document.querySelectorAll(".right-arrow");

searchInput.addEventListener("keyup", (event) => {
  const { value } = event.target;
  const searchQuery = value.toLowerCase();
  const uniqueMovies = new Set(); // Use a Set to store unique movie names

  for (const nameElement of moviesFromDOM) {
    let name = nameElement.textContent.toLowerCase();
    if (name.includes(searchQuery)) {
      uniqueMovies.add(name); // Add matching movie names to the set
    }
  }

  for (const nameElement of moviesFromDOM) {
    let name = nameElement.textContent.toLowerCase();
    if (uniqueMovies.has(name)) {
      nameElement.style.display = "block";
      uniqueMovies.delete(name); // Remove the displayed movie name from the set
    } else {
      nameElement.style.display = "none";
    }
  }

  // Loop through each element with class "popular"
  popularHeading.forEach((element) => {
    if (searchQuery && uniqueMovies.size === 0) {
      element.style.display = "none";
    } else {
      element.style.display = "block";
    }
  });

  // Loop through each element with class "right-arrow"
  rightArrow.forEach((element) => {
    if (searchQuery && uniqueMovies.size === 0) {
      element.style.display = "none";
    } else {
      element.style.display = "block";
    }
  });

  
});
















const carouselWrapper = document.querySelector(".movie-container-1 .movie-wrapper");
const arrowRight = document.querySelector(".movie-container-1 .right-arrow");
const arrowLeft = document.querySelector(".movie-container-1 .left-arrow");

let currentPosition = 0;
let isTransitioning = false;
let rightArrowClickedOnce = false; // Track if the right arrow has been clicked once

const movieItems = document.querySelectorAll(".movie-container-1 .movie-box");
const itemWidth = movieItems[0].offsetWidth + 25; // Width of each movie item including gap;
const totalItems = movieItems.length;
const visibleItems = Math.floor(carouselWrapper.offsetWidth / itemWidth);

// Duplicate the movie items and append them to the carouselWrapper
for (let i = 0; i < visibleItems * 2; i++) {
  movieItems.forEach((item) => {
    carouselWrapper.appendChild(item.cloneNode(true));
  });
}

// Initially hide the left arrow
arrowLeft.style.display = "none";

arrowRight.addEventListener("click", () => {
  if (!isTransitioning) {
    currentPosition -= itemWidth;
    isTransitioning = true;
    carouselWrapper.style.transition = "transform 1s ease-in-out";
    carouselWrapper.style.transform = `translateX(${currentPosition}px)`;

    if (!rightArrowClickedOnce) {
      rightArrowClickedOnce = true;
      arrowLeft.style.display = "block";
    }

    setTimeout(() => {
      if (currentPosition <= -itemWidth * totalItems) {
        currentPosition += itemWidth * totalItems;
        carouselWrapper.style.transition = "none";
        carouselWrapper.style.transform = `translateX(${currentPosition}px)`;
      }
      isTransitioning = false;
    }, 1000);
  }
});

arrowLeft.addEventListener("click", () => {
  if (!isTransitioning && rightArrowClickedOnce) {
    currentPosition += itemWidth;
    isTransitioning = true;
    carouselWrapper.style.transition = "transform 1s ease-in-out";
    carouselWrapper.style.transform = `translateX(${currentPosition}px)`;

    setTimeout(() => {
      if (currentPosition >= 0) {
        currentPosition -= itemWidth * totalItems;
        carouselWrapper.style.transition = "none";
        carouselWrapper.style.transform = `translateX(${currentPosition}px)`;
      }
      isTransitioning = false;
    }, 1000);
  }
});













const comedyCarouselWrapper = document.querySelector(".movie-container-2 .movie-wrapper");
const comedyArrowRight = document.querySelector(".movie-container-2 .right-arrow");
const comedyArrowLeft = document.querySelector(".movie-container-2 .left-arrow");

let comedyCurrentPosition = 0;
let comedyIsTransitioning = false;
let comedyRightArrowClickedOnce = false; // Track if the right arrow has been clicked once

const comedyMovieItems = document.querySelectorAll(".movie-container-2 .movie-box");
const comedyItemWidth = comedyMovieItems[0].offsetWidth + 25; // Width of each movie item including gap;
const comedyTotalItems = comedyMovieItems.length;
const comedyVisibleItems = Math.floor(comedyCarouselWrapper.offsetWidth / comedyItemWidth);

// Duplicate the movie items and append them to the comedyCarouselWrapper
for (let i = 0; i < comedyVisibleItems * 2; i++) {
  comedyMovieItems.forEach((item) => {
    comedyCarouselWrapper.appendChild(item.cloneNode(true));
  });
}

// Initially hide the left arrow for comedy carousel
comedyArrowLeft.style.display = "none";

comedyArrowRight.addEventListener("click", () => {
  if (!comedyIsTransitioning) {
    comedyCurrentPosition -= comedyItemWidth;
    comedyIsTransitioning = true;
    comedyCarouselWrapper.style.transition = "transform 1s ease-in-out";
    comedyCarouselWrapper.style.transform = `translateX(${comedyCurrentPosition}px)`;

    if (!comedyRightArrowClickedOnce) {
      comedyRightArrowClickedOnce = true;
      comedyArrowLeft.style.display = "block";
    }

    setTimeout(() => {
      if (comedyCurrentPosition <= -comedyItemWidth * comedyTotalItems) {
        comedyCurrentPosition += comedyItemWidth * comedyTotalItems;
        comedyCarouselWrapper.style.transition = "none";
        comedyCarouselWrapper.style.transform = `translateX(${comedyCurrentPosition}px)`;
      }
      comedyIsTransitioning = false;
    }, 1000);
  }
});

comedyArrowLeft.addEventListener("click", () => {
  if (!comedyIsTransitioning && comedyRightArrowClickedOnce) {
    comedyCurrentPosition += comedyItemWidth;
    comedyIsTransitioning = true;
    comedyCarouselWrapper.style.transition = "transform 1s ease-in-out";
    comedyCarouselWrapper.style.transform = `translateX(${comedyCurrentPosition}px)`;

    setTimeout(() => {
      if (comedyCurrentPosition >= 0) {
        comedyCurrentPosition -= comedyItemWidth * comedyTotalItems;
        comedyCarouselWrapper.style.transition = "none";
        comedyCarouselWrapper.style.transform = `translateX(${comedyCurrentPosition}px)`;
      }
      comedyIsTransitioning = false;
    }, 1000);
  }
});












const romanticCarouselWrapper = document.querySelector(".movie-container-3 .movie-wrapper");
const romanticArrowRight = document.querySelector(".movie-container-3 .right-arrow");
const romanticArrowLeft = document.querySelector(".movie-container-3 .left-arrow");

let romanticCurrentPosition = 0;
let romanticIsTransitioning = false;
let romanticRightArrowClickedOnce = false; // Track if the right arrow has been clicked once

const romanticMovieItems = document.querySelectorAll(".movie-container-3 .movie-box");
const romanticItemWidth = romanticMovieItems[0].offsetWidth + 25; // Width of each movie item including gap;
const romanticTotalItems = romanticMovieItems.length;
const romanticVisibleItems = Math.floor(romanticCarouselWrapper.offsetWidth / romanticItemWidth);

// Duplicate the movie items and append them to the romanticCarouselWrapper
for (let i = 0; i < romanticVisibleItems * 2; i++) {
  romanticMovieItems.forEach((item) => {
    romanticCarouselWrapper.appendChild(item.cloneNode(true));
  });
}

// Initially hide the left arrow for romantic carousel
romanticArrowLeft.style.display = "none";

romanticArrowRight.addEventListener("click", () => {
  if (!romanticIsTransitioning) {
    romanticCurrentPosition -= romanticItemWidth;
    romanticIsTransitioning = true;
    romanticCarouselWrapper.style.transition = "transform 1s ease-in-out";
    romanticCarouselWrapper.style.transform = `translateX(${romanticCurrentPosition}px)`;

    if (!romanticRightArrowClickedOnce) {
      romanticRightArrowClickedOnce = true;
      romanticArrowLeft.style.display = "block";
    }

    setTimeout(() => {
      if (romanticCurrentPosition <= -romanticItemWidth * romanticTotalItems) {
        romanticCurrentPosition += romanticItemWidth * romanticTotalItems;
        romanticCarouselWrapper.style.transition = "none";
        romanticCarouselWrapper.style.transform = `translateX(${romanticCurrentPosition}px)`;
      }
      romanticIsTransitioning = false;
    }, 1000);
  }
});

romanticArrowLeft.addEventListener("click", () => {
  if (!romanticIsTransitioning && romanticRightArrowClickedOnce) {
    romanticCurrentPosition += romanticItemWidth;
    romanticIsTransitioning = true;
    romanticCarouselWrapper.style.transition = "transform 1s ease-in-out";
    romanticCarouselWrapper.style.transform = `translateX(${romanticCurrentPosition}px)`;

    setTimeout(() => {
      if (romanticCurrentPosition >= 0) {
        romanticCurrentPosition -= romanticItemWidth * romanticTotalItems;
        romanticCarouselWrapper.style.transition = "none";
        romanticCarouselWrapper.style.transform = `translateX(${romanticCurrentPosition}px)`;
      }
      romanticIsTransitioning = false;
    }, 1000);
  }
});







const actionCarouselWrapper = document.querySelector(".movie-container-4 .movie-wrapper");
const actionArrowRight = document.querySelector(".movie-container-4 .right-arrow");
const actionArrowLeft = document.querySelector(".movie-container-4 .left-arrow");

let actionCurrentPosition = 0;
let actionIsTransitioning = false;
let actionRightArrowClickedOnce = false; // Track if the right arrow has been clicked once

const actionMovieItems = document.querySelectorAll(".movie-container-4 .movie-box");
const actionItemWidth = actionMovieItems[0].offsetWidth + 25; // Width of each movie item including gap;
const actionTotalItems = actionMovieItems.length;
const actionVisibleItems = Math.floor(actionCarouselWrapper.offsetWidth / actionItemWidth);

// Duplicate the movie items and append them to the actionCarouselWrapper
for (let i = 0; i < actionVisibleItems * 2; i++) {
  actionMovieItems.forEach((item) => {
    actionCarouselWrapper.appendChild(item.cloneNode(true));
  });
}

// Initially hide the left arrow for action carousel
actionArrowLeft.style.display = "none";

actionArrowRight.addEventListener("click", () => {
  if (!actionIsTransitioning) {
    actionCurrentPosition -= actionItemWidth;
    actionIsTransitioning = true;
    actionCarouselWrapper.style.transition = "transform 1s ease-in-out";
    actionCarouselWrapper.style.transform = `translateX(${actionCurrentPosition}px)`;

    if (!actionRightArrowClickedOnce) {
      actionRightArrowClickedOnce = true;
      actionArrowLeft.style.display = "block";
    }

    setTimeout(() => {
      if (actionCurrentPosition <= -actionItemWidth * actionTotalItems) {
        actionCurrentPosition += actionItemWidth * actionTotalItems;
        actionCarouselWrapper.style.transition = "none";
        actionCarouselWrapper.style.transform = `translateX(${actionCurrentPosition}px)`;
      }
      actionIsTransitioning = false;
    }, 1000);
  }
});

actionArrowLeft.addEventListener("click", () => {
  if (!actionIsTransitioning && actionRightArrowClickedOnce) {
    actionCurrentPosition += actionItemWidth;
    actionIsTransitioning = true;
    actionCarouselWrapper.style.transition = "transform 1s ease-in-out";
    actionCarouselWrapper.style.transform = `translateX(${actionCurrentPosition}px)`;

    setTimeout(() => {
      if (actionCurrentPosition >= 0) {
        actionCurrentPosition -= actionItemWidth * actionTotalItems;
        actionCarouselWrapper.style.transition = "none";
        actionCarouselWrapper.style.transform = `translateX(${actionCurrentPosition}px)`;
      }
      actionIsTransitioning = false;
    }, 1000);
  }
});






const darkCarouselWrapper = document.querySelector(".movie-container-5 .movie-wrapper");
const darkArrowRight = document.querySelector(".movie-container-5 .right-arrow");
const darkArrowLeft = document.querySelector(".movie-container-5 .left-arrow");

let darkCurrentPosition = 0;
let darkIsTransitioning = false;
let darkRightArrowClickedOnce = false; // Track if the right arrow has been clicked once

const darkMovieItems = document.querySelectorAll(".movie-container-5 .movie-box");
const darkItemWidth = darkMovieItems[0].offsetWidth + 25; // Width of each movie item including gap;
const darkTotalItems = darkMovieItems.length;
const darkVisibleItems = Math.floor(darkCarouselWrapper.offsetWidth / darkItemWidth);

// Duplicate the movie items and append them to the darkCarouselWrapper
for (let i = 0; i < darkVisibleItems * 2; i++) {
  darkMovieItems.forEach((item) => {
    darkCarouselWrapper.appendChild(item.cloneNode(true));
  });
}

// Initially hide the left arrow for dark carousel
darkArrowLeft.style.display = "none";

darkArrowRight.addEventListener("click", () => {
  if (!darkIsTransitioning) {
    darkCurrentPosition -= darkItemWidth;
    darkIsTransitioning = true;
    darkCarouselWrapper.style.transition = "transform 1s ease-in-out";
    darkCarouselWrapper.style.transform = `translateX(${darkCurrentPosition}px)`;

    if (!darkRightArrowClickedOnce) {
      darkRightArrowClickedOnce = true;
      darkArrowLeft.style.display = "block";
    }

    setTimeout(() => {
      if (darkCurrentPosition <= -darkItemWidth * darkTotalItems) {
        darkCurrentPosition += darkItemWidth * darkTotalItems;
        darkCarouselWrapper.style.transition = "none";
        darkCarouselWrapper.style.transform = `translateX(${darkCurrentPosition}px)`;
      }
      darkIsTransitioning = false;
    }, 1000);
  }
});

darkArrowLeft.addEventListener("click", () => {
  if (!darkIsTransitioning && darkRightArrowClickedOnce) {
    darkCurrentPosition += darkItemWidth;
    darkIsTransitioning = true;
    darkCarouselWrapper.style.transition = "transform 1s ease-in-out";
    darkCarouselWrapper.style.transform = `translateX(${darkCurrentPosition}px)`;

    setTimeout(() => {
      if (darkCurrentPosition >= 0) {
        darkCurrentPosition -= darkItemWidth * darkTotalItems;
        darkCarouselWrapper.style.transition = "none";
        darkCarouselWrapper.style.transform = `translateX(${darkCurrentPosition}px)`;
      }
      darkIsTransitioning = false;
    }, 1000);
  }
});







const psychologicalCarouselWrapper = document.querySelector(".movie-container-6 .movie-wrapper");
const psychologicalArrowRight = document.querySelector(".movie-container-6 .right-arrow");
const psychologicalArrowLeft = document.querySelector(".movie-container-6 .left-arrow");

let psychologicalCurrentPosition = 0;
let psychologicalIsTransitioning = false;
let psychologicalRightArrowClickedOnce = false; // Track if the right arrow has been clicked once

const psychologicalMovieItems = document.querySelectorAll(".movie-container-6 .movie-box");
const psychologicalItemWidth = psychologicalMovieItems[0].offsetWidth + 25; // Width of each movie item including gap;
const psychologicalTotalItems = psychologicalMovieItems.length;
const psychologicalVisibleItems = Math.floor(psychologicalCarouselWrapper.offsetWidth / psychologicalItemWidth);

// Duplicate the movie items and append them to the psychologicalCarouselWrapper
for (let i = 0; i < psychologicalVisibleItems * 2; i++) {
  psychologicalMovieItems.forEach((item) => {
    psychologicalCarouselWrapper.appendChild(item.cloneNode(true));
  });
}

// Initially hide the left arrow for psychological carousel
psychologicalArrowLeft.style.display = "none";

psychologicalArrowRight.addEventListener("click", () => {
  if (!psychologicalIsTransitioning) {
    psychologicalCurrentPosition -= psychologicalItemWidth;
    psychologicalIsTransitioning = true;
    psychologicalCarouselWrapper.style.transition = "transform 1s ease-in-out";
    psychologicalCarouselWrapper.style.transform = `translateX(${psychologicalCurrentPosition}px)`;

    if (!psychologicalRightArrowClickedOnce) {
      psychologicalRightArrowClickedOnce = true;
      psychologicalArrowLeft.style.display = "block";
    }

    setTimeout(() => {
      if (psychologicalCurrentPosition <= -psychologicalItemWidth * psychologicalTotalItems) {
        psychologicalCurrentPosition += psychologicalItemWidth * psychologicalTotalItems;
        psychologicalCarouselWrapper.style.transition = "none";
        psychologicalCarouselWrapper.style.transform = `translateX(${psychologicalCurrentPosition}px)`;
      }
      psychologicalIsTransitioning = false;
    }, 1000);
  }
});

psychologicalArrowLeft.addEventListener("click", () => {
  if (!psychologicalIsTransitioning && psychologicalRightArrowClickedOnce) {
    psychologicalCurrentPosition += psychologicalItemWidth;
    psychologicalIsTransitioning = true;
    psychologicalCarouselWrapper.style.transition = "transform 1s ease-in-out";
    psychologicalCarouselWrapper.style.transform = `translateX(${psychologicalCurrentPosition}px)`;

    setTimeout(() => {
      if (psychologicalCurrentPosition >= 0) {
        psychologicalCurrentPosition -= psychologicalItemWidth * psychologicalTotalItems;
        psychologicalCarouselWrapper.style.transition = "none";
        psychologicalCarouselWrapper.style.transform = `translateX(${psychologicalCurrentPosition}px)`;
      }
      psychologicalIsTransitioning = false;
    }, 1000);
  }
});







