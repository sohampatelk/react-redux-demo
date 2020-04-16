import { combineReducers, createStore, applyMiddleware } from 'redux'
import { inventoryReducer } from './inventory/reducer'

//combine all the reducers together for a global app
const rootReducer = combineReducers({
  inventory: inventoryReducer
});

//"typeof" will grab the type that the "combineReducers" function
export type RootState = ReturnType<typeof rootReducer>;

//Here is our redux store ! It knows about our actions and reducers.
export default function configureStore(){
    const store = createStore(rootReducer);
    return store;
}