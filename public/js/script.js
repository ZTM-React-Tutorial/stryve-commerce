const toggleMenu = (e) => {
  console.log("toggle menu");
  const headerEl = document.querySelector(".header-container");
  //   const htmlEl = document.getElementsByTagName("html");
  //   console.log(htmlEl.classList);
  headerEl.classList.toggle("nav-open");
  if (headerEl.classList.contains("nav-open")) {
    document.body.classList.add("overflow-y-disable");
  } else {
    document.body.classList.remove("overflow-y-disable");
  }
};

const sectionHeroEl = document.querySelector(".section-hero");

const obs = new IntersectionObserver(
  function (entries) {
    // indicates the object defined below , since its one element hence entries[0]
    const ent = entries[0];
    if (!ent.isIntersecting) {
      // isIntersecting is set to false once the object being observed is out of viewport
      // apply the stickky class ot body which would load the right style.
      document.body.classList.add("sticky");
    } else {
      document.body.classList.remove("sticky");
    }
  },
  {
    // root of null indicates the viewport
    // threshold indicates once the object is out of viewport
    root: null,
    threshold: 0,
    // indicates display the sticky nav once the hero section is -80px below viewport.
    rootMargin: "-80px",
  }
);
// Observe on the heroElement.
obs.observe(sectionHeroEl);
