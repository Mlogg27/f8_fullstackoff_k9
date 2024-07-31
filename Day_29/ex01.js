var carouselInner = document.querySelector(".carousel .carousel-inner");
var nextBtn = document.querySelector(".carousel .carousel-nav .next");
var prevBtn = document.querySelector(".carousel .carousel-nav .prev");
var items = document.querySelectorAll(".carousel .carousel-inner .item");
var navigationBox = document.querySelector(".carousel .navigation-box");

var carouselWidth = carouselInner.clientWidth;
var totalWidth = carouselWidth * items.length;
var limitWidth = 0.25 * carouselWidth;
var startPosition;
var endPosition;
var isDragging = false;
var distance;

var position = 0;
nextBtn.addEventListener("click", function () {
  if (Math.abs(position) + carouselWidth >= totalWidth) {
    return;
  }
  position -= carouselWidth;
  carouselInner.style.transform = `translateX(${position}px)`;
  updateActiveDot();
});
prevBtn.addEventListener("click", function () {
  if (Math.abs(position) === 0) {
    return;
  }
  position += carouselWidth;
  carouselInner.style.transform = `translateX(${position}px)`;
  updateActiveDot();
});

items.forEach(function (itemEl, index) {
  createNavBtn(index);
});

function createNavBtn(index) {
  var navBtn = document.createElement("span");
  navBtn.classList.add("navigation-dot");
  if (index === 0) {
    navBtn.classList.add("active");
    navBtn.style.backgroundColor = "orange";
  }
  navigationBox.append(navBtn);
}

var dots = document.querySelectorAll(".navigation-box .navigation-dot");
dots.forEach(function (dot, index) {
  dot.addEventListener("click", function () {
    position = -carouselWidth * index;
    carouselInner.style.transform = `translateX(${position}px)`;
    updateActiveDot();
  });
});

function updateActiveDot() {
  var index = Math.abs(position) / carouselWidth;
  dots.forEach(function (dotEl, idx) {
    if (idx === index) {
      dotEl.classList.add("active");
      dotEl.style.backgroundColor = "orange";
    } else {
      dotEl.classList.remove("active");
      dotEl.style.backgroundColor = "#fff";
    }
  });
}

items.forEach(function (itemEl) {
  itemEl.addEventListener("mousedown", function (e) {
    e.preventDefault();
    if (e.which === 1) {
      startPosition = e.clientX;
      isDragging = true;
      document.addEventListener("mousemove", handleDrag);
      document.addEventListener("mouseup", handleDrop);
    }
  });
});

function handleDrag(e) {
  if (isDragging) {
    endPosition = e.clientX;
    distance = endPosition - startPosition;
    carouselInner.style.transform = `translateX(${position + distance}px)`;
  }
}

function handleDrop(e) {
  if (isDragging) {
    isDragging = false;
    document.removeEventListener("mousemove", handleDrag);

    if (Math.abs(distance) > limitWidth) {
      if (distance < 0) {
        position -= carouselWidth;
      } else {
        position += carouselWidth;
      }
    }

    if (position > 0) position = 0;
    if (Math.abs(position) + carouselWidth > totalWidth) {
      position = -(totalWidth - carouselWidth);
    }

    carouselInner.style.transform = `translateX(${position}px)`;
    updateActiveDot();
  }
}
