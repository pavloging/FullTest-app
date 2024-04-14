import React from 'react';
import { createReduxStore, RootState } from "../../store/store";
import { Provider } from "react-redux";

export const renderWithRedux = (component: React.ReactNode, initialState: RootState) => {
    const store = createReduxStore(initialState);

    return (
        <Provider store={store}>
            {component}
        </Provider>
    )
}