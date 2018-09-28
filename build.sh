#installing node and npm on a mac machine. pre-requisite is homebrew
if which node > /dev/null
    then
        echo "node is installed, skipping..."
    else
        # add deb.nodesource repo commands 
        # install node
        brew install node
    fi


# cloning the web crawler repository.
git clone https://github.com/srikanthv02/webCrawler

cd webCrawler/

echo 'inside'
	
#run npm install to install all dependencies included in package.json
sudo npm install

#run the server to extract the links and images path
node webCrawler.js

exit 0