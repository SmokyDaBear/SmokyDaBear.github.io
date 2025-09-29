const config = {
  elementContainers: {
    featured: document.getElementById("projects-container"),
  },
  settings: {
    currentSlide: 0,
    delayTime: 4000,
    pauseSlideshow: false,
    forcePauseSlideshow: false,
    slideShowAlreadyPlaying: false,
  },
};
const nextBtn = document.getElementById("next-btn");
const prevBtn = document.getElementById("prev-btn");
const pauseBtn = document.getElementById("pause-btn");

const delay = (ms) => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
};

const updateSlideshow = (config) => {
  const children = [...config.elementContainers.featured.children];
  if (config.settings.currentSlide > children.length - 1) {
    config.settings.currentSlide = 0;
  } else if (config.settings.currentSlide < 0) {
    config.settings.currentSlide = children.length - 1;
  }
  let nextSlide =
    config.settings.currentSlide < children.length - 1
      ? config.settings.currentSlide + 1
      : 0;
  let previousSlide =
    config.settings.currentSlide > 0
      ? config.settings.currentSlide - 1
      : children.length - 1;
  children.forEach((elm) => {
    elm.classList.remove("current");
    elm.classList.remove("next");
    elm.classList.remove("previous");
  });
  children[config.settings.currentSlide].classList.add("current");
  children[nextSlide].classList.add("next");
  children[previousSlide].classList.add("previous");
};

const changeSlide = (e, config) => {
  switch (e) {
    case "next":
      config.settings.currentSlide += 1;
      break;
    case "prev":
      config.settings.currentSlide -= 1;
      break;
  }
  updateSlideshow(config);
};

/**
 *
 * @param {*} config the settings config reference from the index.js file
 * @param {*} container the container to loop the slideshow through
 */
const slideshowLoop = async (config) => {
  if (config.settings.slideShowAlreadyPlaying) {
    throw new Error("Already playing slideshow");
  }
  while (!config.settings.forcePauseSlideshow) {
    config.settings.slideShowAlreadyPlaying = true;
    if (!config.settings.pauseSlideshow) {
      updateSlideshow(config);
      config.settings.currentSlide += 1;
    }
    await delay(config.settings.delayTime);
  }
  config.settings.slideShowAlreadyPlaying = false;
};

slideshowLoop(config).catch((err) => {
  console.error(err);
});

nextBtn.addEventListener("click", () => {
  changeSlide("next", config);
  if (!config.settings.pauseSlideshow) {
    config.settings.pauseSlideshow = true;
    pauseBtn.classList.remove("fa-pause");
    pauseBtn.classList.add("fa-play");
  }
});

prevBtn.addEventListener("click", () => {
  changeSlide("prev", config);
  if (!config.settings.pauseSlideshow) {
    config.settings.pauseSlideshow = true;
    pauseBtn.classList.remove("fa-pause");
    pauseBtn.classList.add("fa-play");
  }
});

pauseBtn.addEventListener("click", () => {
  if (config.settings.forcePauseSlideshow) {
    config.settings.forcePauseSlideshow = false;
    pauseBtn.classList.remove("fa-play");
    pauseBtn.classList.add("fa-pause");
  } else {
    config.settings.forcePauseSlideshow = true;
    pauseBtn.classList.remove("fa-pause");
    pauseBtn.classList.add("fa-play");
  }
});

// Pause slideshow when hovering over project cards
document
  .getElementById("projects-container")
  .addEventListener("mouseenter", () => {
    if (!config.settings.pauseSlideshow) {
      config.settings.pauseSlideshow = true;
    }
  });

document
  .getElementById("projects-container")
  .addEventListener("mouseleave", () => {
    if (config.settings.pauseSlideshow) {
      config.settings.pauseSlideshow = false;
    }
  });

const projectCardHeight = document.querySelector(".project-card").offsetHeight;
document.getElementById("projects-container").style.height = `${
  projectCardHeight + 20
}px`;
