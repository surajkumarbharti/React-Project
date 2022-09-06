import {createSlice,createAsyncThunk} from "@reduxjs/toolkit";


export const fetchCocktails = createAsyncThunk(
    "cockTails/fetchCocktails",
    async () =>{
        return fetch(
            "www.thecocktaildb.com/api/json/v1/1/search.php?s="

        ).then((res)=>res.json());
    }
);
// ...
export const fetchSingleCocktail = createAsyncThunk(
    "cockTails/fetchSingleCocktail",
    async ({id}) =>{
        return fetch(
            `www.thecocktaildb.com/api/json/v1/1/search.php?s=${id}`
        ).then((res)=>res.json());
    }
);
// ----
export const fetchSearchCocktail = createAsyncThunk(
    "cockTails/fetchSearchCocktail",
    async ({searchText}) =>{
        return fetch(
            `www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchText}`
        ).then((res)=>res.json());
    }
);

const CocktailReducer = createSlice({
    name:"cocktails",
    initialState: {
        cocktails:[],
        cocktail:[],
        loading: false,
        error:null,
    },
    extraReducers: {
        [fetchCocktails.pending]: (state,action)=>{
            state.loading=true;
        },
        [fetchCocktails.fulfilled]:(state,action)=>{
            state.loading=false;
            state.cocktails=action.payload.drinks;
        },
        [fetchCocktails.rejected]:(state,action) => {
            state.loading=false;
            state.error=action.payload
        },
        // ...
        [fetchSingleCocktail.pending]: (state,action)=>{
            state.loading=true;
        },
        [fetchSingleCocktail.fulfilled]:(state,action)=>{
            state.loading=false;
            state.cocktails=action.payload.drinks;
        },
        [fetchCocktails.rejected]:(state,action) => {
            state.loading=false;
            state.error=action.payload
        },
        // ---
        [fetchSearchCocktail.pending]: (state,action)=>{
            state.loading=true;
        },
        [fetchSearchCocktail.fulfilled]:(state,action)=>{
            state.loading=false;
            state.cocktails=action.payload.drinks;
        },
        [fetchSearchCocktail.rejected]:(state,action) => {
            state.loading=false;
            state.error=action.payload
        },
    },
});

export default CocktailReducer.reducer;
// export default CocktailReducer