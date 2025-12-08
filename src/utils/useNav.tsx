function useNav() {
  function scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }
  function goToPage(pageUrl: string) {
    window.location.href = pageUrl;
    window.location.reload();
  }

  return { scrollToSection, goToPage };
}

export default useNav;
