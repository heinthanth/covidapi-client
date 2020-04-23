# covidapi-client

Desktop client for https://covid19mm.info

## Clone First

If you're using `npm`, feel free to replace `yarn` with `npm run`

``` shell
git clone --recursive https://github.com/heinthanth/covidapi-client
cd covidapi-client
git submodule init
git submodule update
```

## Development

``` shell
# install electron packge dependencies
yarn # you can use npm. I prefer yarn due to my net speed

# install frontend dependencies
cd frontend && yarn
# start vue dev server
yarn serve # to start development

cd ../
# start electron dev
yarn start
```

## Building

``` shell
# build frontend
cd frontend/ && yarn build
cd ../
# build electorn
yarn build # to build application into executable
```

## Template Description

- application icons => `assets/icon.icns`, `assets/icon.ico`
- macOS dmg background => `assets/dmg-background.tiff`
- frontend web ui (vue) => `frontend/`
- electron codes => `src/`