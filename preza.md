class: center, middle

# Pizzasessie React &amp; Redux
en een beetje Firebase

-- Jeroen Peeters --

---

# Topics

1. NPM
2. React
3. Redux
4. Firebase
5. Mobile app

---

# NPM

- NPM is the official package manager for Node.js
- NPM runs on the command line and manages dependencies for an application
- It also allows users to install Node.js applications that are available on the NPM registry

```json
{
  "name": "my-project",
  "version": "0.0.1",
  "description": "My Awesome Node Project",
  "main": "index.js",
  "author": "Jeroen Peeters",
  "dependencies": {
    "react": "0.4.2"
  }
}
```

---

# React

- A JavaScript library for building user interfaces

---

## Virtual DOM

- Replica of the Browser DOM
- React redraws the entire screen on change
- React calculates the minimum amount of changes required

---

## Virtual DOM

![](https://i.stack.imgur.com/S1vngl.png)

---

## Most important API methods

- React.createClass();
- React.render();

---

## React.Component

- Component superclass
- A component implements a render method which returns a single child
- That child may have an arbitrarily deep child structure

```js
var React = require('react');
class Hello extends React.Component {
  render() {
    return <h1>Hello, {this.props.friend}</h1>;
  }
}

module.exports = Hello;
```

---

### render()
- Required
- Returns a single child component that is either a virtual representation of a native DOM component or composite component


---

### render()

- Should be pure
- Should not modify component state
- Should return the same result each time it's invoked
- Should not read from or write to the DOM
- Work should be performed in other lifecycle methods

---

## React.render()

- Renders a ReactElement into the DOM of the supplied container
- Returns a reference to the component
- Replaces the contents of the container node you pass in

```js
React.render(<Hello friend="WoooHooo"/>, document.getElementById('app'));
```

---

## JSX

- JavaScript syntax extension that looks similar to XML
- Compiles to actual JavaScript

---

### Plain JS
```js
render : function () {
  return (
    React.createElement("div", {className: "ui message"},
      React.createElement("div", {className: "ui huge header"}, this.state.greeting),
      React.createElement("div", {className: "ui large header"}, this.props.friend)
    )
  );
}
```

---

### JSX
```js
render : function () {
  return (
    <div className="ui message">
      <div className="ui huge header">{this.state.greeting}</div>
      <div className="ui large header">{this.props.friend}</div>
    </div>
  );
}
```
---

# Redux

- Redux is a predictable state container for JavaScript apps
- Store
- Actions
- Reducer

---

## Basic Principle

- (previousState, action) -> newState

---

## Advanced Principles

![](http://www.theodo.fr/uploads/blog//2016/03/ui_workflow.png)

---

# Firebase

- Real time database
- By Google
- Serverless
- Push changes


---

# Acknowledgements

This presentation makes extensive use of the resources listed below and should be
considered a modest subset of all the information available in the linked resources.

- https://github.com/objectpartners/react-redux-workshop
- https://www.slideshare.net/nikgraf/react-redux-introduction
- https://btholt.github.io/complete-intro-to-react/
