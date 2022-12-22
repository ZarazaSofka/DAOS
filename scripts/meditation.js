document.addEventListener("DOMContentLoaded", () => {
  var types = document.querySelectorAll('.box');
  var notif = document.querySelector(".notification");
  var notif_h1 = document.querySelector(".notification h1");
  var notif_p = document.querySelector(".notification p");
  var t2 = gsap.timeline({defaults: {ease: "power2.in"}});
  t2.from('.notification', {opacity: 0});
  t2.pause();
  types.forEach(type => {
    $(document).click(function(event) {
      var target = event.target;
      notif.style.display = "none";
      t2.progress(0);
      if (target.classList.contains("box"))
      {
        notif_h1.textContent = target.getAttribute("data-h1");
        notif_p.textContent = target.getAttribute("data-p");
        notif.style.display = "block";
        t2.play();
      }
    });
  });
});
