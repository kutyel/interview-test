# JavaScript Interview Test

![Node version](https://img.shields.io/node/v/uno-zen.svg?style=flat-square)

> Follow this requirements each in a separate branch, named for example `step1`

## Usage

When you are done, simply do the following to know if you passed *(or failed)*:

```sh
$ npm test
```

## FIRST STEP

Create an event emitter that goes like this:
 
```javascript
const emitter = new Emitter();
```
 
Its instance allows you to subscribe to some event by passing a callback function

```javascript
emitter.subscribe('myEvent', firstArgument => console.log('a callback!'));
```

 ...any times you want...

```javascript
emitter.subscribe('myEvent', (firstArgument, secondArgument) => console.log('another callback!'));
```

You can emit the event you want and pass any number of arguments

```javascript
emitter.emit('myEvent', 'firstArgument', 'secondArgument');
```

## SECOND STEP

Make the return from the subscribe method to return a function that allows you to release that subscription:

```javascript
const sub1 = emitter.subscribe('myEvent', () => console.log('a callback!'));
sub1();
```
...but all other subscriptions shall remain intact

## THIRD STEP

Make the emit method return an array with every return value for each subscription callback

---

Good luck! 💪🏼💪🏼💪🏼
