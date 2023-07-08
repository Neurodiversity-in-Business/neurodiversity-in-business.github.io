var Homepage = function() {


  this.get = function() {
    browser.get('http://localhost:8080');
  };

};
module.exports = new Homepage();