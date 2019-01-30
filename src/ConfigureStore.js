import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import reducer from './reducers'
import { getAllProducts } from './actions';

const ConfigureStore = () =>{

    const middleware = [ thunk ];
    if(process.env.NODE_ENV !== 'production') {
        middleware.push(createLogger())
    }

    const store = createStore(
        reducer, 
        applyMiddleware(...middleware)
    );

    store.dispatch(getAllProducts())
    
    store.subscribe(() =>{
        console.log(store.getState())
    })
    return store;
}

export default ConfigureStore;
