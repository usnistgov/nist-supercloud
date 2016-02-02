 sudo apt-get update -y
 sudo apt-get install -y git

# tools to build the front-end in app
## sudo apt-get install -y make
## sudo apt-get install -y g++

source /etc/lsb-release && echo "deb http://download.rethinkdb.com/apt $DISTRIB_CODENAME main" | sudo tee /etc/apt/sources.list.d/rethinkdb.list
wget -qO- https://download.rethinkdb.com/apt/pubkey.gpg | sudo apt-key add -
sudo apt-get update -y
sudo apt-get install -y rethinkdb


# wget -N http://nodejs.org/dist/node-latest.tar.gz
# tar xzvf node-latest.tar.gz && cd node-v*
# ./configure
# make
# sudo make install
# sudo npm install npm -g

# node.js
# curl -sL https://deb.nodesource.com/setup_5.x | sudo -E bash -
# sudo apt-get install -y nodejs

# optional - dev tools to compile and install native addons from npm
## sudo apt-get install -y build-essential

# sudo npm update -g npm

#  sudo npm install -g grunt-cli bower yo generator-karma generator-angular
 
# chown -R vagrant /usr/local
# chown -R vagrant /usr/local/lib/node_modules/

# open database port 
 sudo iptables -A INPUT -p tcp --dport 28015 -j ACCEPT
 sudo iptables -A INPUT -p tcp --dport 8080 -j ACCEPT