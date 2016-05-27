# Simple project to demo cross-platform d3-style svg graphs in react-native

## Setup

`npm install`

`npm install rnpm -g # React-Native package manager`

`rnpm link react-native-svg`

## Running

For iOS: 
  `react-native run-ios`
  
For Android: 
  `react-native run-android`

## What it is
A very very very quick port of a D3-generated graph to react-native-svg, showing that it shouldn't be terribly difficult to port non-interactive D3 graphs, or even a subset of D3 itself.

## Bad things
It's not super trivial to make the graph itself interactive :(

Hypothetically it should be possible to put an onPress hook on any SVG element, but this didn't work in the 60 seconds I played with it so I didn't do it. 

I also suspect making interactive d3 graphs with a high-quality touch UX and a good mouse UX would be impossible, which kills my dream of sharing the exact same visualization code between desktop, android, and iOS.
