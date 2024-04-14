import { render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import Counter from './Counter';
import AppRouter from '../../router/AppRouter';
import { MemoryRouter } from 'react-router-dom';
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../../store/reducers/counterReducer';

describe('Counter test', () => {
    // Create a mock store with the initial state
    const mockStore = configureStore({
        reducer: {
            counter: counterReducer,
        },
        preloadedState: {
            counter: { value: 10 },
        },
    });

    test('Test router', async () => {
        render(
            <Provider
                store={mockStore}
            >
                <MemoryRouter initialEntries={['/']}>
                    <AppRouter />
                    <Counter />
                </MemoryRouter>
            </Provider>
        );

        const incrementBtn = screen.getByTestId('increment-btn');
        expect(screen.getByTestId('value-title')).toHaveTextContent('10');
        userEvent.click(incrementBtn);
        await waitFor(() => expect(screen.getByTestId('value-title')).toHaveTextContent('11'))
    });
});
