var fs = require('fs');
var path = require('path');
var handlebars = require('handlebars');

module.exports = {
  write: function (results, options, done) {

    var reportFilename = options.filename_prefix + (Math.floor(Date.now() / 1000)) + '.html';
    var reportFilePath = path.join(__dirname, options.output_folder, reportFilename);

    // read the html template
    fs.readFile('integration-testing/html-reporter.hbs', function (err, data) {
      if (err) throw err;

      var template = data.toString();

      // merge the template with the test results data
      var html = handlebars.compile(template)({
        results: results,
        options: options,
        timestamp: new Date().toString(),
        browser: options.filename_prefix.split('_').join(' '),
        totalTests: results.passed + results.failed + results.errors
      });

      // write the html to a file
      fs.writeFile(reportFilePath, html, function (err) {
        if (err) throw err;
        console.log('Report generated: ' + reportFilePath);
        done();
      });
    });
  }
};