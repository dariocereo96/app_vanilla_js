import { ajax } from "../helpers/ajax.js";
import api from "../helpers/wp_api.js";
import { Post } from "./Post.js";
import { PostCard } from "./PostCard.js";
import { SearchCard } from "./SearchCard.js";

export async function Router() {
  let { hash } = location;
  console.log(hash);

  if (!hash || hash === "#/") {
    await ajax({
      url: api.POSTS,
      cbSuccess: (posts) => {
        console.log(posts);
        let html = "";
        posts.forEach((post) => {
          html += PostCard(post);
        });
        document.getElementById("posts").innerHTML = html;
      },
    });
  } else if (hash.includes("#/search")) {
    let query = localStorage.getItem("wpSearch");
    if (!query) return false;

    await ajax({
      url: api.SEARCH + query,
      cbSuccess: (searchs) => {
        console.log(searchs);
        let html = "";
        searchs.forEach((search) => {
          html += SearchCard(search);
        });
        document.getElementById("posts").innerHTML = html;
      },
    });
  } else {
    await ajax({
      url: api.POST + "?slug=" + hash.slice(2),
      cbSuccess: (post) => {
        console.log(post);
        document.getElementById("posts").innerHTML = Post(post);
      },
    });
  }

  document.querySelector(".loader").style.display = "none";
}
