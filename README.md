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
