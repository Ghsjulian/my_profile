var href = document.querySelectorAll("a");

for (var a = 0; a < href.length; a++) {
  href[a].addEventListener("click", function () {
    const link = this.getAttribute("href");
   // console.log(link);
  });
}