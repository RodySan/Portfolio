// Exemplo simples de animação GSAP para título hero
gsap.from(".hero-content h1", { duration: 1.2, y: -50, opacity: 0, ease: "power2.out" });
gsap.from(".hero-content p", { duration: 1.2, y: 50, opacity: 0, delay: 0.4, ease: "power2.out" });
gsap.from(".btn", { duration: 1, scale: 0.8, opacity: 0, delay: 0.8, ease: "back.out(1.7)" });
gsap.from(".hero-image img", { duration: 1.5, x: 100, opacity: 0, delay: 1, ease: "power2.out" });
