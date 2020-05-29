const next_btn = document.querySelector("#next");
const prev_btn = document.querySelector("#prev");
const slider = document.querySelector(".slider");

let first_slide;
let last_slide;

let projects = [
  {
    title: "Pool One",
    type: "0",
    content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    image:
      "https://images.unsplash.com/photo-1528495612343-9ca9f4a4de28?ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80"
  },
  {
    title: "Pool Two",
    type: "1",
    content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit 2.",
    image:
      "https://images.unsplash.com/photo-1567996035518-31da0ddf5c7b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1588&q=80"
  },
  {
    title: "Pool Three",
    type: "2",
    content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit 3.",
    image:
      "https://images.unsplash.com/photo-1582607815555-c47009f6a60e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80"
  },
  {
    title: "Pool Four",
    type: " 3",
    content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit 4.",
    image:
      "https://images.unsplash.com/photo-1567996040549-f69bb58d5ca2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  }
];

//sliders
projects.forEach(({ title, content, image, type }, i) => {
  const slide = document.createElement("div");
  slide.classList.add("slider__slide");
  slide.style.backgroundImage = "url('" + image + "')";

  if (i === 0) {
    first_slide = slide;
    slide.classList.add("active");
  } else if (i + 1 === projects.length) {
    last_slide = slide;
  }

  const slide_content = document.createElement("div");
  slide_content.classList.add("slider__content");

  const content_title = document.createElement("h3");
  content_title.classList.add("slider__title");
  content_title.textContent = title;

  const content_type = document.createElement("span");
  content_type.textContent = type;

  const content_content = document.createElement("div");
  content_content.classList.add("slider__desc");
  content_content.textContent = content;

  //content_title.appendChild(content_type);
  slide_content.appendChild(content_title);
  slide_content.appendChild(content_content);
  slide.appendChild(slide_content);

  slider.appendChild(slide);
});

// BTNs

next_btn.addEventListener("click", () => {
  const idActive = document.querySelector("span.active");
  let dots = document.querySelectorAll(".dot");
  let dotNumber = 0;
  const active_slide = document.querySelector(".slider__slide.active");
  let nextSibling = active_slide.nextElementSibling;
  let nextId = idActive.nextElementSibling;

  dots.forEach(dot => {
    if (dot.classList.contains("active") && dotNumber < dots.length) {
      dot.classList.remove("active");
      dotNumber++;
      nextId.classList.add("active");
    }

    if (nextId == null) {
      nextId = document.querySelector("#dot-0");
    }
  });

  if (nextSibling == null) {
    nextSibling = first_slide;
  }

  if (nextSibling.classList.contains("slider__slide")) {
    active_slide.classList.remove("active");
    nextSibling.classList.add("active");
  }
});

prev_btn.addEventListener("click", () => {
  const active_slide = document.querySelector(".slider__slide.active");
  let nextSibling = active_slide.previousElementSibling;
  const idActive = document.querySelector("span.active");
  let dots = document.querySelectorAll(".dot");
  let dotNumber = 0;
  let prevId = idActive.previousElementSibling;

  dots.forEach(dot => {
    if (prevId == null) {
      prevId = document.querySelector("#dot-3");
    }

    if (dot.classList.contains("active") && dotNumber < dots.length) {
      dot.classList.remove("active");
      dotNumber--;
      prevId.classList.add("active");
    }
  });

  if (nextSibling == null || !nextSibling.classList.contains("slider__slide")) {
    nextSibling = last_slide;
  }

  if (nextSibling.classList.contains("slider__slide")) {
    active_slide.classList.remove("active");
    nextSibling.classList.add("active");
  }
});
