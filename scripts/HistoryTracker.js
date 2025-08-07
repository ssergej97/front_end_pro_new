class HistoryTracker {
  #visitedUrls = null;

  push(url) {
    history.pushState({}, "", url);
    const fullUrl = `${location.origin}${url}`;
    this.#visitedUrls.push(fullUrl);
  }

  back() {
    history.back();
  }
}

const result = new HistoryTracker();

console.log(result);

result.push("/HistoryTracker/src/pages/products.html");
