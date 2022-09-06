import React, {useRef} from 'react';
import {fetchSearchCocktail} from "../redux/features/cocktailSlice"
import { useDispatch } from 'react-redux';
import "./SearchInput.css";

const SearchInput = () => {
    const SearchValue = useRef();
    const dispatch= useDispatch();

    const handleChange=()=>{
        const searchText=SearchValue.current.value;
        dispatch(fetchSearchCocktail({searchText}))
    }
const handleSubmit=(e)=>{
    e.preventDefault();
}

    return (
       <section className='section search'>
           <form className='search-form' onSubmit={handleSubmit}>
               <div className='form-control'>
                   <label htmlFor='name'>Search Cocktail</label>
                   <input type="text" name="name" id="name" ref={SearchValue} onChange={handleChange} />
               </div>
           </form>
       </section>
    )
}

export default SearchInput