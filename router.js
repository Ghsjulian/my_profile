const route = (event) => {
  event = event || window.event;
  event.preventDefault();
  window.history.pushState({}, "", event.target.href);
  setTimeout(function() {
    handleLocation();
  }, 1000);
};

const routes = {
  404: "404.html",
  "/": "index.html",
  "/profile": "profile.html",
  "/login": "login.html",
  "/register": "register.html"
}

const handleLocation = async () => {
  const path = window.location.pathname;
  var route = routes[path] || routes[404];
  if (route == "404.html" || route == "index.html") {
    route = "home.html";
  }
  const html = await fetch (route).then((data) => {
    return data;
  }).
  then((res) => {
    return res.text();
  });

  document.getElementById('main').innerHTML= html;
};

window.onpopstate = handleLocation;
window.route;
handleLocation();