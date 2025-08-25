//mobile menu dropdown
const hamburger = document.getElementById("hamburger");
const navList = document.getElementById("navbar-list");
const activator = "active";
hamburger.addEventListener("click", function () {
  const isActive = navList.classList.contains(activator);
  if (isActive) {
    navList.classList.remove(activator);
  } else {
    navList.classList.add(activator);
  }
});

// Close mobile menu when clicking on a link
const navItems = document.querySelectorAll(".navbar-list a");
navItems.forEach((item) => {
  item.addEventListener("click", () => {
    navList.classList.remove("active");
    hamburger.classList.remove("active");
  });
});

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Add active class to navigation on scroll
window.addEventListener("scroll", () => {
  let current = "";
  const sections = document.querySelectorAll("section");

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (scrollY >= sectionTop - 200) {
      current = section.getAttribute("id");
    }
  });

  navItems.forEach((item) => {
    item.classList.remove("active");
    if (item.getAttribute("href") === `#${current}`) {
      item.classList.add("active");
    }
  });
});

// Optional: Add typing effect to hero title
const heroTitle = document.querySelector(".hero-title");
if (heroTitle) {
  const text = heroTitle.textContent;
  heroTitle.textContent = "";
  let index = 0;
  function typeWriter() {
    if (index < text.length) {
      heroTitle.textContent += text.charAt(index);
      index++;
      setTimeout(typeWriter, 200);
    }
  }
  // Start typing effect when page loads
  window.addEventListener("load", typeWriter);
}

// Optional: Fade in animation for project cards
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -100px 0px",
};

const observer = new IntersectionObserver(function (entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

// Observe all project cards
document.addEventListener("DOMContentLoaded", () => {
  const projectCards = document.querySelectorAll(".project-card");
  projectCards.forEach((card) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(20px)";
    card.style.transition = "opacity 1s ease-in, transform 1s ease";
    observer.observe(card);
  });
});

//contact modal
const modalOpeners = document.querySelectorAll("[data-open]");
const closers = document.querySelectorAll("[data-close]");
for (const btn of modalOpeners) {
  btn.addEventListener("click", function () {
    const modalID = this.dataset.open;
    const modal = document.querySelector(`#${modalID}`);
    modal.classList.add("active");
  });
}
for (const btn of closers) {
  btn.addEventListener("click", function () {
    const modalID = this.dataset.close;
    const modal = document.querySelector(`#${modalID}`);
    modal.classList.remove("active");
  });
}

//hide contact btn at contacts section
const floatingContactBtn = document.getElementById("floating-contact-btn");

const contactSection = document.getElementById("contact");

const msgBtnObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        floatingContactBtn.classList.add("hidden");
      } else {
        floatingContactBtn.classList.remove("hidden");
      }
    });
  },
  { threshold: 0.3 }
);

msgBtnObserver.observe(contactSection);

//profile img observer
const profileImg = document.querySelector(".profile-image");

const aboutSection = document.getElementById("about");

const profileImgObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        profileImg.classList.add("active");
      } else {
        profileImg.classList.remove("active");
      }
    });
  },
  {
    threshold: 0.4,
  }
);
profileImgObserver.observe(aboutSection);

//Projects Section Cards:

const formatCard = (cardData, id) => {
  const { image, title, description, tags, sourceLink, pageLink } = cardData;
  let tagsText = "";
  for (let tag of tags) {
    tagsText += ` <span>${tag}</span>`;
  }
  let linksText = "";
  if (sourceLink) {
    linksText += `<a href="${sourceLink}" target="_blank"><i class="fa-brands fa-github"></i> View Code</a>`;
  }
  if (pageLink) {
    linksText += `<a href="${pageLink}" target="_blank"
                  ><i class="fa-solid fa-up-right-from-square"></i> Live Demo</a
                >`;
  }
  return `          <div class="project-card">
            <div class="image-container" id="project-card-${id}">
              <img src="${image}" alt="${title}" />
            </div>
            <div class="card-text">
              <div class="features">
              ${tagsText}
              </div>
              <h4>${title}</h4>
              <p>${description}</p>
              <div class="btns">
                ${linksText}   
              </div>
            </div>
          </div>`;
};

const projects = [
  {
    image: "../assets/saas.png",
    title: "Saas Site",
    description: "Software as a service example commercial site",
    tags: ["Saas", "e-commerce"],
    sourceLink: "https://github.com/SmokyDaBear/css-final-project-saas-solved",
    pageLink: "https://smokydabear.github.io/css-final-project-saas-solved/",
  },
  {
    image: "../assets/folio.png",
    title: "folio.",
    description: "Portfolio showcase example website",
    tags: ["javascript", "themes", "search functionality", "modals"],
    sourceLink: "https://github.com/SmokyDaBear/folio-project",
    pageLink: "https://smokydabear.github.io/folio-project/",
  },
  {
    image: "../assets/encrypter.png",
    title: "Message Encryption Site",
    description: "Encrypts messages using various ciphers",
    tags: ["javascript", "cryptography"],
    sourceLink: "https://github.com/SmokyDaBear/message-encryption-site",
    pageLink: "https://smokydabear.github.io/message-encryption-site/",
  },
  {
    image: "../assets/wp-portfolio.png",
    title: "Word Press Portfolio",
    description: "Personal portfolio site built with Word Press",
    tags: ["WordPress"],
    sourceLink: "",
    pageLink: "https://jessgreenportfolio.wordpress.com/",
  },
  // {
  //   image: "../assets/fresh-bread.png",
  //   title: "Remmy's Bakery",
  //   description: "Bakery Site",
  //   tags: ["food", "e-commerce"],
  //   sourceLink: "",
  //   pageLink: "",
  // },
  // {
  //   image: "../assets/green-lyon-auto-logo.png",
  //   title: "Green Lyon Auto",
  //   description: "Automotive Repair site",
  //   tags: ["automotive", "commercial", "industrial"],
  //   sourceLink: "",
  //   pageLink: "",
  // },
];

const projectsSection = document.getElementById("projects-container");
let projectCardCount = 0;
for (let item of projects) {
  projectsSection.innerHTML += formatCard(item, projectCardCount);
  projectCardCount++;
}
