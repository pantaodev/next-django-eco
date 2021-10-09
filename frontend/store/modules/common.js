import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getCategories } from 'services/category.service';


// First, create the thunk
export const fetchCategory = createAsyncThunk(
    'common/fetchCategory',
    async () => {
        console.log('Fetching ' );
        const response = await getCategories()
        return response
        // const response = await userAPI.fetchById(userId)
        // return response.data
    }
)

const initialState = {
    value: 0,
    categories: ''
}
export const commonSlice = createSlice({
    name: 'common',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload
        },
    },
    extraReducers: {
        [fetchCategory.fulfilled]: (state, action) => {
            console.log('Fetching Data', action.payload);
            state.categories = action.payload
        },
        [fetchCategory.rejected]: (state, action) => {
            console.log('rejected  Data');
            state.categories = []
        },
    },
})
// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = commonSlice.actions
export default commonSlice.reducer