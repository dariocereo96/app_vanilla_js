export function Post(props) {
  let { title, date, content } = props[0];

  return (
    '<section class="post-page"><aside><h2>' +
    title.rendered +
    '</h2><time datetime="2020-11-12">' +
    new Date(date).toLocaleString() +
    +"</time></aside><hr /><article>" +
    content.rendered +
    "</article></section>"
  );
}
