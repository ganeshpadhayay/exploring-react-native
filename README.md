In this repo, I have used:

1. jest - this comes in built with a vanilla react native project and used for unit testing functions and objects. It can also be used to do snapshot testing for 
compoments but I do not prefer that as it becomes difficult to manage complex components.
2. react-native-testing-library - this is being used to test the components behaviour, this is different from enzyme as it only tests the behaviour and not the
internals of a component(who wants to test the internals anyway?).
3. detox - this is being used to write robust end to end tests in conjunction with Jest runner.

This whole sample focuses on implementing the Uncle Bob's clean architecture in react native and writing tests in accordance with that architecture.

Feel free to point out mistakes as I am a complete newbie when it comes to react-native.

Here is the package.json file for this project dated 28th July 2020

{
  "name": "sample-clean-testing-architecture",
  "version": "0.0.1",
  "private": true,
  "scripts": {
    "android": "react-native run-android",
    "ios": "react-native run-ios",
    "start": "react-native start",
    "test": "jest",
    "lint": "eslint ."
  },
  "dependencies": {
    "axios": "^0.19.2",
    "react": "16.13.1",
    "react-native": "0.63.1",
    "react-native-testing-library": "^2.1.1"
  },
  "devDependencies": {
    "@babel/core": "^7.8.4",
    "@babel/runtime": "^7.8.4",
    "@react-native-community/eslint-config": "^1.1.0",
    "@types/jest": "^26.0.7",
    "@types/react": "^16.9.43",
    "@types/react-native": "^0.63.2",
    "@types/react-test-renderer": "^16.9.2",
    "babel-jest": "^25.1.0",
    "detox": "^17.2.1",
    "eslint": "^6.5.1",
    "jest": "^26.0.1",
    "jest-circus": "^26.1.0",
    "metro-react-native-babel-preset": "^0.59.0",
    "react-test-renderer": "^16.13.1",
    "typescript": "^3.9.7"
  },
  "jest": {
    "preset": "react-native"
  }
}


Thanks!
