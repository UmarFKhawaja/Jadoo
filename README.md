```bash
# clone repository
# cd into repository folder
npm install
npm run build

cd Scripts
# generate .env files
# in various parts of the solution
# - Apps/browser-app/.env
# - Apps/server-app/.env
# - Modules/data-module/.env
# - Services/jadoo/.env
# - Tools/helper-tool/.env
./generate-env-files.sh
# generate root CA certificate
# in "Keys" folder under your user's home folder
./generate-ca-certificate.sh
# register the ~/Keys/huntingdonresearch.crt in your machine and browser's CA root trust store
# generate localhost certificate
# in the "Keys" folder in the root of the repository folder
./generate-localhost-certificate.sh
cd ..

cd Services/jadoo
# start Docker containers for MySQL, Redis, and Cerbos
docker-compose up -d
cd ../..

cd Modules/data-module
# create database schema by running migrations
npm run typeorm -- migrations:run
cd ../..
```

```bash
# in another prompt
# cd into repository folder
cd Apps/server-app
npm run start
```

```bash
# in another prompt
# cd into repository folder
cd Apps/browser-app
npm run start
```
