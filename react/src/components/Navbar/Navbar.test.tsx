import userEvent from '@testing-library/user-event';
import Navbar from './Navbar';
import { screen, waitFor } from '@testing-library/react';
import { renderWithRouter } from '../../tests/helpers/renderWithRouter';
import '@testing-library/jest-dom';

describe('Test Navbar', () => {
    test('test user link', async () => {
        renderWithRouter(<Navbar />);
        const usersLink = screen.getByTestId('users-link');
        userEvent.click(usersLink);
        await waitFor(() => expect(screen.getByTestId('users-page')).toBeInTheDocument()) 
    });
    test('test about link', async () => {
        renderWithRouter(<Navbar />);
        const aboutLink = screen.getByTestId('about-link');
        userEvent.click(aboutLink);
        await waitFor(() => expect(screen.getByTestId('about-page')).toBeInTheDocument()) 
    });
    test('test main link', async () => {
        renderWithRouter(<Navbar />, '/users');
        const mainLink = screen.getByTestId('main-link');
        userEvent.click(mainLink);
        await waitFor(() => expect(screen.getByTestId('main-page')).toBeInTheDocument()) 
    });
});
