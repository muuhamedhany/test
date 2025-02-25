document.querySelectorAll("#navbar a").forEach((a) => {
  a.addEventListener("click", function (e) {
    e.preventDefault(); // Prevent default anchor behavior
    const targetId = this.getAttribute("href").substring(1); // Get the target section id
    const targetSection = document.getElementById(targetId); // Find the target section

    if (targetSection) {
      // Scroll to the target section with smooth behavior
      targetSection.scrollIntoView({
        behavior: "smooth",
      });
    }
  });
});
