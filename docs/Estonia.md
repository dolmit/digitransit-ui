# Eesti serveri paigaldus

### Peliase püsti seadmine

Installeerida docker:

```
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"
sudo apt-get update
sudo apt-get install -y docker-ce
//et ei peaks dockeri käske sudo'ga käivitama:
sudo usermod -aG docker ${USER}
```

Installeerida docker-compose:

```
sudo curl -L https://github.com/docker/compose/releases/download/1.18.0/docker-compose-`uname -s`-`uname -m` -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose
```

Installeerida pelias:

```
git clone https://github.com/dolmit/pelias-docker.git ~/pelias
cd ~/pelias
git fetch
git checkout estonia
ln -s ~/pelias/pelias /usr/local/bin/pelias
```

Pelias serveri käivitamine:

```
mkdir /data

// käskude käivitamiseks minna asukohta
cd ~/pelias/projects/estonia

pelias compose pull
pelias elastic start
pelias elastic wait
pelias elastic create
pelias download all
pelias prepare all
pelias import all
pelias compose up
```

Rohkem infot Peliase kohta - <https://github.com/dolmit/pelias-docker>

Peatuste importimine Peliasi:

```
git clone https://github.com/HSLdevcom/pelias-gtfs.git
cd pelias-gtfs
// node ja npm installeerimine
curl -sL https://deb.nodesource.com/setup_10.x | sudo bash -
sudo apt install nodejs
// Ubuntu jaoks on vajalik
sudo apt-get install build-essential
npm install
// 
node import.js -d /path-to-gtfs-data/ --prefix=ee
```

### Digitransiti püsti seadmine

ehitada mbtiles fail:

```
git clone https://github.com/dolmit/osm2vectortiles.git
cd osm2vectoriles
git fetch
git checkout origin/estonia
make postgis
make import-osm
make import-sql
make import-external
make export-mbtiles
sh run.sh
```

