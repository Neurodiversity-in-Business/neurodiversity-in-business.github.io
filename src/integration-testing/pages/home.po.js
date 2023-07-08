

var HomePage = function () {
  this.navigateToHome = () => {
    browser.get("http://localhost:8080");

  };
};

module.exports = { HomePage };
