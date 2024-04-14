import counterReduser from "./reducers/counterReducer"
import { combineReducers, configureStore } from '@reduxjs/toolkit'

const rootReduser = combineReducers({
    counter: counterReduser
})
export const createReduxStore = (initialState = {}) => {
    return configureStore({
      reducer: rootReduser,
      preloadedState: initialState
    })

}
export type RootState = ReturnType<typeof createReduxStore>['getState']