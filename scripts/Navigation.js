class Navigation {
  #getUrlPath() {
    return window.location.pathname.split("/").at(-1);
  }

  #addActiveClass() {
    const list = document.querySelectorAll("a:not(.navbar-brand)");
    for (let elem of list) {
      if (elem.getAttribute("href") === this.#getUrlPath()) {
        elem.classList.add("active");
      } else {
        elem.classList.remove("active");
      }
    }
  }

  #renderPage(state) {
    if (state.page === "about.html") {
      const main = document.querySelector("main");
      main.innerHTML = `<div class="container">
                          <h1>About</h1>
                        </div>`;
    } else if (state.page === "contact.html") {
      const main = document.querySelector("main");
      main.innerHTML = `<div class="container">
                          <h1>Contact</h1>
                        </div>`;
    } else if (state || state.page === "home.html") {
      const main = document.querySelector("main");
      main.innerHTML = `<div class="container">
                          <h1>Home</h1>
                        </div>`;
    }
  }

  changeUrl() {
    const wrapper = document.querySelector("ul");
    console.log(wrapper);
    wrapper.addEventListener("click", (e) => {
      e.preventDefault();
      console.log(e.target.getAttribute("href"));
      const currentPage = e.target.getAttribute("href");
      const state = { page: currentPage };
      console.log(state);
      history.pushState(state, "", currentPage);
      this.#renderPage(state);
      this.#addActiveClass();
    });
  }

  backForwardNavigation() {
    window.addEventListener("popstate", (e) => {
      console.log(e.state);
      this.#renderPage(e.state);
    });
  }
}

const nav = new Navigation();
nav.changeUrl();
nav.backForwardNavigation();
