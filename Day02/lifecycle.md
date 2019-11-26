# Lifecycle of a component in React


* Create **lifecycle.html** file
* Add the *.js* files to the head and **root div** element to the body
* Create a component with a button and label. Clicking the button will display the current time in the label. You can use the following code.

```javascript
    class Lifecycle extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
              message: ''  
            };
            this.buttonClicked = this.buttonClicked.bind(this);
        }
        
        buttonClicked() {
            console.log("buttonClicked called")
            this.setState({
                message: new Date().toLocaleTimeString()
            });
        }
        render() {
            console.log("render called");
            return (<div>
                <button onClick={this.buttonClicked}>Click</button>
                <h1>{ this.state.message }</h1>    
            </div>);
        }
    }
    ReactDOM.render(<Lifecycle/>,document.getElementById("root"));
```

* Refresh the page and observe the console output
* Click the button 3-4 times and observe the output in the console

* Add a method **componentDidMount** in the Lifecycle component

```javascript

    componentDidMount() {
        console.log("componentDidMount called");
    }

```

* Refresh the page and observe the console output
* Click the button 3-4 times and observe the output in the console
* Discuss the method in the class

* Add a method **componentDidUpdate** in the Lifecycle component

```javascript

    componentDidUpdate() {
      console.log("componentDidUpdate called");  
    }
				
```

* Refresh the page and observe the console output
* Click the button 3-4 times and observe the output in the console
* Discuss the method in the class


* Add a method **shouldComponentUpdate** in the Lifecycle component

```javascript

    shouldComponentUpdate(obj, latest) {
        console.log("shouldComponentUpdate called", latest, this.state.message);
		return true;
    }
				
```

* Refresh the page and observe the console output
* Click the button 3-4 times and observe the output in the console
* Change the return statement to **return false** and observe the output -
* Discuss the method in the class

