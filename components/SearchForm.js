export function SearchForm() {
  const $form = document.createElement("form");
  const $input = document.createElement("input");

  $input.name = "search";
  $input.type = "search";
  $form.classList.add("search-form");
  $input.placeholder = "Buscar..";

  $form.appendChild($input);

  document.addEventListener("submit", (e) => {
    if (e.target.matches(".search-form")) {
      e.preventDefault();
      localStorage.setItem("wpSearch", e.target.search.value);
      location.hash = "#/search?search=" + e.target.search.value;
    }
  });

  return $form;
}
