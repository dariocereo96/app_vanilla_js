export function PostCard(props) {
  let { title, date, id, slug, _embedded } = props;
  let urlPoster = _embedded["wp:featuredmedia"]
    ? _embedded["wp:featuredmedia"][0].source_url
    : "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/NewTux.svg/640px-NewTux.svg.png";

  return (
    '<article class="post-card"><img src="' +
    urlPoster +
    '" alt=""></img><h2>' +
    title.rendered +
    '</h2><p><time datetime="">' +
    new Date(date).toLocaleString() +
    '</time><br><a href="#/' +
    slug +
    '" data-id=' +
    id +
    " >Ver publicacion</a></p></article>"
  );
}
