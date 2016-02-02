 sudo apt-get update -y
 sudo apt-get install -y git

# tools to build the front-end in app
## sudo apt-get install -y make
## sudo apt-get install -y g++

 wget -N http://nodejs.org/dist/node-latest.tar.gz
 tar xzvf node-latest.tar.gz && cd node-v*
 ./configure
 make
 sudo make install
 sudo npm install npm -g

# node.js
# curl -sL https://deb.nodesource.com/setup_5.x | sudo -E bash -
# sudo apt-get install -y nodejs

# optional - dev tools to compile and install native addons from npm
## sudo apt-get install -y build-essential

# sudo npm update -g npm

 sudo npm install -g grunt-cli bower yo generator-karma generator-angular
 
 chown -R vagrant /usr/local
 chown -R vagrant /usr/local/lib/node_modules/
 
# for server 
# sudo iptables -A INPUT -p tcp --dport 35729 -j ACCEPT
# sudo iptables -A INPUT -p tcp --dport 9000 -j ACCEPT

# for agent
# sudo iptables -A INPUT -p tcp --dport 8080 -j ACCEPT