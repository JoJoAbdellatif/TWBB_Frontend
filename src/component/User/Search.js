import { useState } from "react";
import axios from "axios";
import SearchList from "./SearchList";
const Search = () => {
    const [searched , setSearched] = useState('');
    const [data,setData] = useState([])
    const handleSubmit = (e) => {
        e.preventDefault();
      
        
    };
    function SearchOutput(e,id){
       
        axios.get(`http://localhost:5000/api/product/search?page=0&searchInput=${id}`).then(function (response) {
            setData(response.data)
            console.log(data);
        })
        console.log(data,'hi'); 
        return
    }

    return(
        <div className="searchbar" align="center"> 
                <br></br>
     
            <form onSubmit={handleSubmit} >       
                <div class="input-group input-group-lg">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="inputGroup-sizing-lg">Search</span>
                    </div>
                    <input type="text" placeholder="Search" className="custom-input2" required value={searched} onChange={(e) => setSearched(e.target.value)} /><br /><br></br>
                    
                    <div class="input-group-append">
                         <button class="btn btn-lg"  type="button" onClick={(e)=>SearchOutput(e,searched)}>Search</button>
                    </div>
                </div><br></br>
               
                {data && <SearchList products={data} />}
            </form>
            
         
        </div>); 
};

export default Search;

