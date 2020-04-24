# covidapi-client

Desktop client for https://covid19mm.info

## Clone First

If you're using `npm`, feel free to replace `yarn` with `npm run`.

I suggest you to install both.

``` shell
git clone --recursive https://github.com/heinthanth/covidapi-client
cd covidapi-client
git submodule init
git submodule update
cd frontend/
git pull origin master
```

## Development

``` shell
# install electron packge dependencies
yarn

# install frontend dependencies
cd frontend && npm install
# start vue dev server
npm run serve

cd ../
# start electron dev
yarn start
```

## Building

``` shell
# build frontend
cd frontend/ && npm run build
cd ../
# build electorn
yarn build
```

## Template Description

- application icons => `assets/icon.icns`, `assets/icon.ico`
- macOS dmg background => `assets/dmg-background.tiff`
- frontend web ui (vue) => `frontend/`
- electron codes => `src/`