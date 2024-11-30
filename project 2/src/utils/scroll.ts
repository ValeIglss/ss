export const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (!element) return;

  const isMobile = window.innerWidth < 768;
  const headerOffset = isMobile ? 64 : 80;
  
  // For mobile, we need a small delay to ensure the section is rendered
  if (isMobile) {
    requestAnimationFrame(() => {
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'instant'
      });
    });
  } else {
    const elementPosition = element.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = elementPosition - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'instant'
    });
  }
};