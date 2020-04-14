'use strict';

const e = React.createElement;
const {
    useState
} = React

function App () {
    const [count, setCount] = useState(0)
    const handleClick = () => {
        setCount(count + 1)
    }
    return (
        e(
            'div',
            null,
            e(
              'button',
              { onClick: handleClick },
              `click me ${count}`
            )
        )
    )
}

const domContainer = document.querySelector('#app');
debugger
ReactDOM.render(e(App), domContainer);
