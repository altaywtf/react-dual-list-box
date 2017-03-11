# React Dual List Box
[![NPM](https://nodei.co/npm/react-dual-list-box.png?downloads=true)](https://nodei.co/npm/react-dual-list-box/)

A dual list box component for React, with search feature.

## Installation

```bash
# Yarn
$ yarn add react-dual-list-box

# NPM
$ npm install react-dual-list-box --save
```

## Usage
There is a basic example on [examples folder](/examples/components/App.jsx), which is also live [here](https://altayaydemir.github.io/react-dual-list-box/).

| Prop | Type | Default Value |
| :----: |:-------------:|:-----:|
| **options** | arrayOf(shape({ value: string or number, label: node })) | [ ] |
| **initialValue** | arrayOf(string or number) | [ ] |
| **valueType** | string | "string" |
| **onChange** | func | - |
| **disabled** | bool | false |
| **leftButtonContent** | node (number, string, html element) | > |
| **rightButtonContent** | node (number, string, html element) | < |
| **texts** | object | {{ item: 'Item', items: 'Items', noItem: 'No Items', search: 'Search...' }} |

Since HTML select tag auto formats its option values as string, if your `value` prop is a number (eg: id), you need to pass `valueType="number"` prop to DualListBox component.

## Contribution

This project has initialized from [react-component-starter](https://github.com/altayaydemir/react-component-starter), which contains detailed documentation about installation, development and build flow of the package.
