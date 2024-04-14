import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom'; // Import the custom matchers
import App from './App';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';

describe('Test App', () => {
    test('Router Test', async () => {
        render(
            <MemoryRouter>
                <App />
            </MemoryRouter>
        );
        const mainLink = screen.getByTestId('main-link');
        const aboutLink = screen.getByTestId('about-link');

        userEvent.click(mainLink);
        expect(screen.getByTestId('main-page')).toBeInTheDocument();

        userEvent.click(aboutLink);
        await waitFor(() => expect(screen.getByTestId('about-page')).toBeInTheDocument());
    });

    test('Not Found Page Test', async () => {
        render(
            <MemoryRouter initialEntries={['/123qwerty']}>
                <App />
            </MemoryRouter>
        );
        expect(screen.getByTestId('not-found-page')).toBeInTheDocument();
    });
});
