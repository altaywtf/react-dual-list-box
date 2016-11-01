# React Component Starter

<p align="center">
  <img src="https://s10.postimg.org/wtlotfkmx/Desktop_HD.png" />
  <b>Starter project for crafting React Components.</b>
</p>

## Features

* [CSS modules](https://github.com/css-modules/) configuration with SCSS syntax, 
* ESlint configuration with [Airbnb's React Styleguide](https://github.com/airbnb/javascript/tree/master/react), 
* Testing setup powered by [Jest](https://github.com/facebook/jest) & [Enzyme](https://github.com/airbnb/enzyme/), 
* Example project configuration which builds into `docs` folder as a static webpage so you can serve it from Github repository.

## Installation

```bash
$ git clone git@github.com:altayaydemir/react-component-starter.git

$ cd react-component-starter

$ npm install 

```

## Usage

### Development Flow

```bash
# run this while developing your component
$ npm run start

# run documentation project (separately from first one)
$ npm run start:docs
```

### Production Build

```bash
# build the library
$ npm run build:lib

# build the docs
$ npm run build:docs

# build'em all!
$ npm run build
```

### Testing

```bash
# run tests in watch mode
$ npm run test:watch

# run tests and generate code coverage
$ npm run test
```
