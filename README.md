# React Dual List Box

A dual list box component for React, with search feature.

## Installation

```bash
$ npm install react-dual-list-box --save

```

## Usage
There is a basic example on [examples folder](/examples/components/App.jsx), which is also live [here](altayaydemir.com/react-dual-list-box).

| Prop | Type | Default Value |
| :----: |:-------------:|:-----:|
| **options** | arrayOf(shape({ value: string or number, label: node })) | [ ] |
| **value** | arrayOf(string or number) | [ ] |
| **onChange** | func | - |
| **valueType** | string | "string" |

Since HTML select tag auto formats its option values as string, if your `value` prop is a number (eg: id), you need to pass `valueType="number"` prop to DualListBox component.

## Development

### Development Flow

```bash
$ git clone git@github.com:altayaydemir/react-mobile-devices.git
 
$ cd react-mobile-devices
 
$ npm install 

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
