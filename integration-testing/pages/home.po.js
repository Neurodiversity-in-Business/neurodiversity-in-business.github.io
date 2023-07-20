var HomePage = function () {
  this.navigateTo = (urlString) => {
    browser.navigateTo(urlString);
  };
};

module.exports = { HomePage };
