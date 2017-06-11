import { combineReducers } from 'redux';

const FETCH_POSTS = 'FETCH_POSTS';
const FETCH_POSTS_COMPLETE = 'FETCH_POSTS_COMPLETE';

const redditDefaultState = [
    { data: { author: 'PaquitoSoft' } },
    { data: { author: 'Tyler McGuinnis' } },
    { data: { author: 'Addy Osmani' } }
];

const redditReducer = (state = redditDefaultState, action) => {
    switch (action.type) {
        case FETCH_POSTS:
            return state;
        case FETCH_POSTS_COMPLETE:
            return [...state, ...action.payload];
        default:
            return state;
    }
};

export const rootReducer = combineReducers({ reddit: redditReducer });
