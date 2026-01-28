// Animação do HERO (primeiro container)

document.addEventListener("DOMContentLoaded", () => {
  // Título (palavra por palavra)
  gsap.to(".hero-title span", {
    opacity: 1,
    y: 0,
    duration: 0.8,
    ease: "power3.out",
    stagger: 0.08
  });

  // Texto
  gsap.from(".hero-text", {
    opacity: 0,
    y: 20,
    delay: 0.6,
    duration: 0.6,
    ease: "power2.out"
  });

  // Botão
  gsap.from(".call-to-action", {
    opacity: 0,
    y: 20,
    delay: 0.9,
    duration: 0.6,
    ease: "power2.out"
  });
});

gsap.from("#sobre .tech-item", {
  scrollTrigger: { trigger: "#sobre", start: "top 70%" },
  opacity: 0,
  y: 18,
  duration: 0.5,
  ease: "power3.out",
  stagger: 0.08
});
gsap.from("#sobre .about-kicker", {
  scrollTrigger: { trigger: "#sobre", start: "top 75%" },
  opacity: 0,
  y: 10,
  duration: 0.4,
  ease: "power2.out"
});

gsap.from("#sobre .about-title", {
  scrollTrigger: { trigger: "#sobre", start: "top 75%" },
  opacity: 0,
  y: 20,
  duration: 0.6,
  delay: 0.1,
  ease: "power3.out"
});
