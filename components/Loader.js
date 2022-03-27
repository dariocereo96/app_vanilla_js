export function Loader() {
  const $loader = document.createElement("img");
  $loader.src =
    "http://www.controlentergroup.com/wp-content/themes/controlenter/img/loading.io%20-%20Your%20SVG%20+%20GIF%20Ajax%20Loading%20Icons_files/hourglass.svg";

  $loader.classList.add("loader");

  return $loader;
}
