import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom'; // Import the custom matchers
import axios from 'axios';
import Users from './Users';
import userEvent from '@testing-library/user-event';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import UsersDetailesPage from '../../pages/UsersDetailesPage';
import { renderWithRouter } from '../../tests/helpers/renderWithRouter';

jest.mock('axios');
describe('Test Users', () => {
    let response: { data: { id: string; name: string }[] };
    beforeEach(() => {
        response = {
            data: [
                { id: '1', name: 'Egor Pavlov' },
                { id: '2', name: 'Peta Pavlov' },
                { id: '3', name: 'Alex Pavlov' },
            ],
        };
    });
    afterEach(() => {
        jest.clearAllMocks();
    });
    test('renders learn react link', async () => {
        // Use jest.spyOn to create a mock of axios.get
        const mockedAxiosGet = jest.spyOn(axios, 'get');
        // Use mockReturnValue on the mocked function
        mockedAxiosGet.mockReturnValue(Promise.resolve(response));
        render(
            <MemoryRouter initialEntries={['/users']}>
                <Routes>
                    <Route path="/users" element={<Users />} />
                    <Route path="/users/:id" element={<UsersDetailesPage />} />
                </Routes>
            </MemoryRouter>
        );
        const users = await screen.findAllByTestId('user-item');
        expect(users.length).toBe(3);
        expect(axios.get).toBeCalledTimes(1);
    });
    test('test redirect to detalis page', async () => {
        const mockedAxiosGet = jest.spyOn(axios, 'get');
        mockedAxiosGet.mockReturnValue(Promise.resolve(response));
        renderWithRouter(null, '/users');
        const users = await screen.findAllByTestId('user-item');
        await waitFor(() => userEvent.click(users[0]));
        expect(screen.getByTestId('user-page')).toBeInTheDocument();
    });
});
