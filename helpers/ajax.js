export async function ajax(props) {
  let { url, cbSuccess } = props;

  await fetch(url)
    .then((res) => (res.ok ? res.json() : Promise.reject(res)))
    .then((json) => cbSuccess(json))
    .catch((err) => {
      let mensaje = err.statusText || "OCURRIO UN ERROR";

      document.getElementById("root").innerHTML =
        "<p class='error'>Error" + err.status + "</p>";
      console.log(mensaje);
    });
}
