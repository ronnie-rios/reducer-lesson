import { createContext, useReducer } from "react";
import apiReducer from "./ApiReducer";

const ApiContext = createContext();

export const ApiProvider = ({ children }) => {
    const initialState = {
        posts: [],
        post: [],
        comments: [],
        loading: true
    }
    const [state, dispatch] = useReducer(apiReducer, initialState);

    return <ApiContext.Provider value={{
        ...state,
        dispatch
    }}>
        {children}
    </ApiContext.Provider>
};

export default ApiContext;