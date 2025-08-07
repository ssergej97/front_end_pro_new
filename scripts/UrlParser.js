class URLParser {
  url = null;
  constructor(url) {
    this.url = url;
  }

  #validateUrl() {
    if (typeof this.url !== "string") throw new Error("URL is not a string");
  }

  get protocol() {
    this.#validateUrl();
    if (this.url.startsWith("https")) {
      return this.url.slice(0, 5);
    } else if (this.url.startsWith("http")) {
      return this.url.slice(0, 4);
    }
  }

  get hostname() {
    this.#validateUrl();
    return this.url.split("/")[2];
  }

  get path() {
    this.#validateUrl();
    const editedUrl = this.url.split("?")[0].split("/");
    editedUrl.splice(0, 3);
    const result = editedUrl.join("/");
    return `/${result}`;
  }

  get queryParams() {
    const obj = {};
    this.#validateUrl();
    const editedUrl = this.url.split("?")[1];
    const params = new URLSearchParams(editedUrl);
    params.forEach((value, name) => {
      obj[name] = value;
    });
    return obj;
  }
}

const parser = new URLParser(
  "https://example.com/products/item?search=book&page=2",
);
console.log(parser.queryParams); // { search: "book", page: "2" }
