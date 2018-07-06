import React, {Component} from 'react';

class GoodApp extends Component {
    static buttonFunction(){
        let nextThing = window.confirm('Nothing. Ok?');
        if (nextThing) window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
    }

    render() {
        return (
            <div>
                <input type='text' placeholder={this.props.textThing}/>
                <button onClick={GoodApp.buttonFunction.bind(this)}>Nothing</button>
            </div>
        );
    }
}

export default GoodApp;
