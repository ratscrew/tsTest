import {bootstrap}    from 'angular2/platform/browser'
import {AppComponent} from './components/myApp/app.component'
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {provider} from  'ng2-redux';
import {rootReducer} from './reducers';

//const provider = require('ng2-redux')

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(rootReducer);

bootstrap(AppComponent,[provider(store)]);
