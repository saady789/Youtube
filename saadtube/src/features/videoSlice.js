//authSlice.js
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
const initialState = {
    videos:null,
    status:"idle",
    currentVideo:null,
    comments:null,

};

export const getallvideoAsync = createAsyncThunk(
    'user/getallvideo',
    async () => {
        
        let url = "https://stubebackend.vercel.app/video/getallvideo";
        const response = await fetch(url, {
            method: 'GET',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
                // Add any additional headers if needed
            }
        });
        const d = await response.json();
        return d;
    }
);

export const getidvideoAsync = createAsyncThunk(
    'user/getidvideo',
    async (id) => {
        await fetch(`https://stubebackend.vercel.app/video/incrementviews/${id}`,{
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
                // Add any additional headers if needed
            }
        });

        let url = `https://stubebackend.vercel.app/video/getvideobyid/${id}`;
        const response = await fetch(url, {
            method: 'GET',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
                // Add any additional headers if needed
            }
        });
        const d = await response.json();
        return d;
    }
);


export const getcommentbyvideoAsync = createAsyncThunk(
    'comment/getcommentbyvideo',
    async (_, { getState }) => {
        const id = getState().video.currentVideo._id;
        let url = `https://stubebackend.vercel.app/comment/getcommentbyid/${id}`;
        const response = await fetch(url, {
            method: 'GET',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
                // Add any additional headers if needed
            }
        });
        const d = await response.json();
        return d;
    }
);

export const subscribeAsync = createAsyncThunk(
    'video/subscribe',
    async (_, { getState }) => {
        const channelId = getState().video?.currentVideo?.createdby._id;
        const userId = getState().user?.user?._id;
        let obj = {channelId,userId};
        let url = `https://stubebackend.vercel.app/user/subscribe`;
        const response = await fetch(url, {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
                // Add any additional headers if needed
            },
            body:JSON.stringify(obj)
        });
        const d = await response.json();
        return d;
    }
);


export const unsubscribeAsync = createAsyncThunk(
    'video/unsubscribe',
    async (_, { getState }) => {
        const channelId = getState().video?.currentVideo?.createdby._id;
        const userId = getState().user.user._id;
        let obj = {channelId,userId};
        let url = `https://stubebackend.vercel.app/user/unsubscribe`;
        const response = await fetch(url, {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
                // Add any additional headers if needed
            },
            body:JSON.stringify(obj)
        });
        const d = await response.json();
        return d;
    }
);

export const likeAsync = createAsyncThunk(
    'video/like',
    async (_, { getState }) => {
        const videoId = getState().video?.currentVideo?._id;
        const userId = getState().user?.user?._id;
        let obj = {videoId,userId};
        let url = `https://stubebackend.vercel.app/user/like`;
        const response = await fetch(url, {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
                // Add any additional headers if needed
            },
            body:JSON.stringify(obj)
        });
        const d = await response.json();
        return d;
    }
);

export const saveAsync = createAsyncThunk(
    'video/save',
    async (_, { getState }) => {
        const videoId = getState().video?.currentVideo?._id;
        const userId = getState().user?.user?._id;
        let obj = {videoId,userId};
        let url = `https://stubebackend.vercel.app/user/save`;
        const response = await fetch(url, {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
                // Add any additional headers if needed
            },
            body:JSON.stringify(obj)
        });
        const d = await response.json();
        return d;
    }
);
export const getlikedvideosAsync = createAsyncThunk(
    'video/getlikedvideos',
    async (_, { getState }) => {
        const id = await getState().user?.user?._id;
       
        let url = `https://stubebackend.vercel.app/user/getlikedvideos/${id}`;
        const response = await fetch(url, {
            method: 'GET',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
                // Add any additional headers if needed
            }
        });
        const d = await response.json();
        return d;
    }
);

export const getsavedvideosAsync = createAsyncThunk(
    'video/getsavedvideos',
    async (_, { getState }) => {
        const id = await getState().user?.user?._id;
    
        let url = `https://stubebackend.vercel.app/user/getsavedvideos/${id}`;
        const response = await fetch(url, {
            method: 'GET',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
                // Add any additional headers if needed
            }
        });
        const d = await response.json();
        return d;
    }
);

export const getsubchannelsAsync = createAsyncThunk(
    'video/getsavedvideos',
    async (_, { getState }) => {
        const id = await getState().user?.user?._id;
       
        let url = `https://stubebackend.vercel.app/user/getsubchannels/${id}`;
        const response = await fetch(url, {
            method: 'GET',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
                // Add any additional headers if needed
            }
        });
        const d = await response.json();
        return d;
    }
);

export const getmyvideosAsync = createAsyncThunk(
    'video/getmyvideos',
    async (_, { getState }) => {
        const id = await getState().user?.user?._id;
       
        let url = `https://stubebackend.vercel.app/user/getmyvideos/${id}`;
        const response = await fetch(url, {
            method: 'GET',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
                // Add any additional headers if needed
            }
        });
        const d = await response.json();
        return d;
    }
);







export const userSlice = createSlice({
    name: 'video',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
        increment: (state) => {

        },
    },
    extraReducers: (builder) => {
        builder
           
            .addCase(getallvideoAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getallvideoAsync.fulfilled, (state, action) => {
                if (action.payload == "Internal Server Error" || action.payload == "Not Found" ) {
                    state.status = 'fulfilled';
                    return;
                }
                else {
                    state.status = 'fulfilled';
                    state.videos = action.payload;
                }
            })
            .addCase(getidvideoAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getidvideoAsync.fulfilled, (state, action) => {
                if (action.payload == "Internal Server Error" || action.payload == "Not Found" ) {
                    state.status = 'fulfilled';
                    return;
                }
                else {
                    state.status = 'fulfilled';
                    state.currentVideo = action.payload;
                }
            })
            .addCase(getcommentbyvideoAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getcommentbyvideoAsync.fulfilled, (state, action) => {
                if (action.payload == "Internal Server Error"  ) {
                    state.status = 'fulfilled';
                    return;
                }
                else {
                    state.status = 'fulfilled';
                    state.comments = action.payload;
                }
            })
            .addCase(subscribeAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(subscribeAsync.fulfilled, (state, action) => {
                state.status = 'fulfilled';
            })
            .addCase(unsubscribeAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(unsubscribeAsync.fulfilled, (state, action) => {
                state.status = 'fulfilled';
            })
    },


});

export const { increment } = userSlice.actions;
export default userSlice.reducer;