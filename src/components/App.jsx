import React from 'react';
import Home from './Views/Home';
import {Provider} from 'react-redux';
import store from '../redux/store';

class App extends React.Component{
    render(){
        return(
            <Provider store={store}>
                <Home/>
            </Provider>
        )
    }
}

export default App;