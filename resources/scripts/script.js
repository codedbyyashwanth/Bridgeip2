const menu = document.getElementById("menu");
const nav = document.getElementById("nav");
const icon = document.getElementById("menu-icon");
var clicked = false;


const btn = document.getElementById("search-btn");
let clickedSearch = false;
btn.addEventListener("click", () => {
    const searchField = document.getElementById("search");

    if (clickedSearch) {
        searchField.style.display = "none";
        clickedSearch = false;
    } else {
        searchField.style.display = "block";
        clickedSearch = true;
    }
})


const faqQuest = document.getElementsByClassName("accordation");
const faqAns = document.getElementsByClassName("answer");
const addBtn = document.getElementsByClassName("add-btn");

for (let i = 0; i < faqQuest.length; i++) {
    faqQuest[i].addEventListener("click", () => {

        const name = addBtn[i].attributes.name.nodeValue;
        console.log(name)

        if (name === "add")
            addBtn[i].attributes.name.nodeValue = "remove";
        else
            addBtn[i].attributes.name.nodeValue = "add";

        if (faqAns[i].style.display === "block") {
            faqAns[i].style.display = "none";
        } else {
            faqAns[i].style.display = "block";
        }
    });
}


menu.addEventListener('click', () => {
    if (clicked) {
        nav.classList.remove("nav");
        icon.setAttribute("name", "menu");
        clicked = false;
    } else {
        nav.classList.add("nav");
        icon.setAttribute("name", "close");
        clicked = true;
    }
});

const tabs = document.querySelectorAll('[data-tab-target]')
const tabContents = document.querySelectorAll('[data-tab-content]')
const overviewSection = document.getElementById("over-view-id");
const featuresSection = document.getElementById("features-id");
const benefitsSection = document.getElementById("benefits-id");
const pricingSection = document.getElementById("pricing-id");

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.tabTarget)
    
    if (tab.dataset.tabTarget === "#overview") {
      overviewSection.style.display = "block";
      featuresSection.style.display = "none";
      benefitsSection.style.display = "none";
      pricingSection.style.display = "none";
    }

    if (tab.dataset.tabTarget === "#features") {
      overviewSection.style.display = "none";
      featuresSection.style.display = "block";
      benefitsSection.style.display = "none";
      pricingSection.style.display = "none";
    }

    if (tab.dataset.tabTarget === "#benefits") {
      overviewSection.style.display = "none";
      featuresSection.style.display = "none";
      benefitsSection.style.display = "block";
      pricingSection.style.display = "none";
    }

    if (tab.dataset.tabTarget === "#pricing") {
      overviewSection.style.display = "none";
      featuresSection.style.display = "none";
      benefitsSection.style.display = "none";
      pricingSection.style.display = "block";
    }

    tabContents.forEach(tabContent => {
      tabContent.classList.remove('active')
    })
    tabs.forEach(tab => {
      tab.classList.remove('active')
    })
    tab.classList.add('active')
    target.classList.add('active')
  })
})

$('.market-layout').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,
    // centerMode: true,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 700,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
});


$('.opinion-layout').slick({
    infinite: true,
    dots: true,
    slidesToShow: 5,
    slidesToScroll: 5,
    arrows: false,
    autoplay: true,
    centerMode: true,
    focusOnSelect: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        }
      },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          }
        },
        {
          breakpoint: 700,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            centerMode: false,

          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: false,
          }
        }
      ]
});

$('.logo-section').slick({
  dots: true,
  infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,

})

var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
  },
});


AOS.init();