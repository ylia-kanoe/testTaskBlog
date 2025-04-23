import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { postsData } from "../../../services/postsApi/types"

export interface CounterState {
    posts: postsData[],
    post: postsData,
    reactions: string
}

const initialState: CounterState = {
    post: {} as postsData,
    posts: [],
    reactions: ''
}

export const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        setPosts: (state, action: PayloadAction<postsData[]>) => {
            state.posts = action.payload
        },
        setPost: (state, action: PayloadAction<postsData>) => {
            state.post = action.payload
        },
        setReactions: (state, action: PayloadAction<string>) => {
            state.reactions = action.payload
            localStorage.setItem('reaction', state.reactions);
        }
    },
})

export const { setPost, setPosts, setReactions } = postsSlice.actions

export default postsSlice.reducer