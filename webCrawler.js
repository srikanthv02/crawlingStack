var request = require('request'); //used for HTTP requests. These modules are added in the package.json
var URL = require('url-parse'); //used for parsing URL
var cheerio = require('cheerio'); //for HTML elements. No need of building HTML parsing. Cheerio implements a subset of core jQuery
var fs = require('fs'); //for writing to a file. fs = file system

var baseURL = "http://wiprodigital.com";


var pagesVisited = {};
var pagesToVisit = [];
//parsing the url string;
var parsedURL = new URL(baseURL);

pagesToVisit.push(baseURL);
crawlingDomain();

function crawlingDomain() {
  
  var nextPage = pagesToVisit.pop();
    // New page that is present and is not visited;
	if(nextPage !=undefined){
		visitPage(nextPage, crawlingDomain);	
	}
  
}

function visitPage(url,callback) {
  //adding page to the pageVisited set by making it true.
  pagesVisited[url] = true;
  console.log('the page has been visited',pagesVisited);
  
  request(url, function(error, response, body) {
     
     // Check for error status code. 200 is for success state 
     if(response.statusCode !== 200) {
       callback();	
       return;
     }
     // Parse the document body
     var $ = cheerio.load(body); 
     collectInternalLinks($);
     callback();
  });
}

function collectInternalLinks($) {

  var domainLinks = [];

  //this is to avoid usage of linkedin, google, facebook etc. As they don't have '.com' attached to the hostname.
  var parsedLinks = $("a[href*='"+ parsedURL.hostname +"']");
  
  parsedLinks.each(function() {	
  	  domainLinks.push($(this).attr('style'));
      domainLinks.push($(this).attr('href'));
  });
  console.log("Found " + domainLinks.length + " domainLinks ");

  //to show the links in the next line.
  var crawlerURL = domainLinks.join('\r\n');
  
  //this is an asynchronous operation
  fs.writeFile('webCrawler.xml', crawlerURL , (err) => { 
  		if (err) throw 'error writing file: ' + err;
        // success case, the file was saved
    	console.log('file saved!');
   });
}

