# electron-compile-structure

## Install

Clone this repo and then:

- `npm install`
- `cd src`
- `npm install`

## Run simply

`npm start`

You should see 'I AM DUMMY' in the browser window Electron opens.

## Run packaged with asar

`npm run asared`

This packages the app, asars it, then runs the result.

You should see 'I AM DUMMY' in the browser window Electron opens.

## Run packaged without asar

`npm run nonasared`

This packages the app, then runs the result (without asar packaging).

You should see 'I AM DUMMY' in the browser window Electron opens.

### A word about asar

Asar introduced a narly recursion bug in `v0.12.0` so this is pinned at `asar@0.11.0`.
See [here](https://github.com/electron/asar/issues/78).
