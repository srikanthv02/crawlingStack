# Web Crawler
Building a simple web crawler usig NodeJS


### Overview ### 
- This entire project is built on NodeJS.
- Version of NodeJS is v8.9.4.
- Version of NPM is 4.6.1 (There is an issue with the latest version of node, so have reverted to an older version for compatability on my local machine. It works fine on other Mac Laptops with the newer version).
- Editor used for building this web crawler is Sublime Text.
- Number of links obtained including images are 104.
- All links are stored in a XML file.
- .gitignore file is available.

### Steps to Build - Using Script ###
- There is a shell script file called as build.sh, which installs node and npm for MAC machines, along with Git Clone and npm install on the path. Only pre-requisite is HomeBrew. Run the file as 'sh build.sh'

### Steps to Build - Manual ###
- Install node and npm on MAC using brew install node. (In case HomeBrew is working)
- In case of Ubuntu machines, install node and npm via 
  - sudo apt-get update
  - sudo apt-get install nodejs
  - sudo apt-get install npm
- git clone  https://github.com/srikanthv02/webCrawler
- cd /webCrawler
- run 'sudo npm install'
- run 'node webCrawler.js'

Once the nodejs file is run it extracts all the links from the given domain and stores it onto a .xml file
