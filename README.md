Hooks only work with functional component.
It replace the setState() in the class base component (container)
The convention with hooks is that we use `use` prefix like `use`State


useState() return always two elements

1. the current state of the application `state`
2. the function to set the state `setState`
```js
const [state, setState] = useState({
  counter: 0,
  text: 'hello world'
});
```

When we use setState, we overwrite all state in the application, so after this example, text state is undefined
```js
setState({counter : 1})
```

To keep the state, use the spread operator to

```js
setState({
  ...state,
  counter : 1
})
```

With functional component, we can use multiple states.

## To add lifecycles in functional component add useEffect()
It can replace componentDidMount()
```js

```
