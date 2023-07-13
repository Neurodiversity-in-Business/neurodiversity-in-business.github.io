var HomePage = function () {
  this.navigateToHome = () => {
    browser.navigateTo("http://localhost:8080");
  };
};

module.exports = { HomePage };
