1.  const product = useSelector((state) => state);
   
    redux er state gulla nia ashe 
    
    
    
 2.  const dispatch = useDispatch();


redux action dispatch hook aita dia action create korar jonno


setProducts hoilo action er nam

 useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((req) => req.json())
      .then((data) => dispatch(setProducts(data)));
  }, []);



3.const reducers = combineReducers({ allproduct: productReducer });


reducer er nam productReducer






<......................siam.....................>






import { createStore, combineReducers, applyMiddleware, compose } from "redux";



import thunk from "redux-thunk";


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;\

const rootReducer = combineReducers({
  productReducer: productReducer,
});

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
