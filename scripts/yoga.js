document.addEventListener("DOMContentLoaded", () => {
  var t2 = gsap.timeline({defaults: {ease: "power2.in"}});
  t2.from('.interactive', {opacity: 0, y: -20});
  t2.pause();
  document.querySelectorAll('.type').forEach(type => {
    type.addEventListener('mouseenter', () => {
      t2.progress(0);
      t2.play();
  });
  });
});
