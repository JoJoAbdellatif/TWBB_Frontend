import ProductList from './component/Product/ProductList';
// import useFetch from './useFetch';
import { useState,useRef } from "react"
const axios = require('axios')


const ProductsUrl = 'http://localhost:5000/api/product?page='


const Home = () => {
  const [page,setPage]= useState(0)
  const [data,setData] = useState([])
  const [flag,setFlag]  = useState(true)
  const [isPending,setIsPending] = useState(true)
  

  function increment(e) {
    const newCountValue = page + 1;

    setPage(newCountValue);
    setFlag(true)
    ProductOutput()
  }   

  function decrement(e) {
    const newCountValue = page - 1;

    setPage(newCountValue);
    setFlag(true)
    ProductOutput()
  }
  
  function ProductOutput(){
    if(flag){
      
      axios.get(ProductsUrl+ page).then(function (response) {
          setData(response.data)
      })
      setFlag(false)
      setIsPending(false)
      return
    }
    
  }
  
  return (  
    <div className="home" key={page.toString()}>
      <div>
      {ProductOutput()}
      {isPending && <div class="d-flex justify-content-center">
<div class="spinner-border spinner-border-lg " role="status">
  <span class="sr-only">Loading...</span>
</div></div>}
      {data && <ProductList products={data} />}
      </div>
      <div className="position-fixed bottom-0 start-50 translate-middle">
      <button className='btn bi bi-skip-backward-btn' onClick={(e) => decrement(e)}></button>
      <button className='btn bi bi-skip-forward-btn' onClick={(e) => increment(e)}></button>
      </div>

    </div>   
  );     
}   
export default Home;  
