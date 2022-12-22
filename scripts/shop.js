document.addEventListener("DOMContentLoaded", () => {
  var active = true;
  var t2 = gsap.timeline({defaults: {ease: "power2.in"}});
  t2.from('.sidebar.sidebar__main', {x: -100});
  $(document).click(function(event) {
    var sidebar = document.querySelector('.sidebar');
    var target = event.target;
    if (!active && (target.tagName == "BODY" || target.tagName == "SECTION" || target.tagName == "HEADER" || target.tagName == "FOOTER" || target.classList.contains('items')))
    {
      sidebar.style.display = "block";
      active = !active;
      t2.play();
    }
    else if (active && (target.tagName == "BODY" || target.tagName == "SECTION" || target.tagName == "HEADER" || target.tagName == "FOOTER" || target.classList.contains('items')))
    {
      active = !active;
      t2.reverse();
      sidebar.style.display = "none";
    }
  });
});
