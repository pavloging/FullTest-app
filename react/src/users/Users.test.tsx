import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; // Import the custom matchers
import axios from 'axios';
import Users from './Users';

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
    test('renders learn react link', async () => {
        // Use jest.spyOn to create a mock of axios.get
        const mockedAxiosGet = jest.spyOn(axios, 'get');
        // Use mockReturnValue on the mocked function
        mockedAxiosGet.mockReturnValue(Promise.resolve(response));
        render(<Users />);
        const users = await screen.findAllByTestId('user-item');
        expect(users.length).toBe(3);
        expect(axios.get).toBeCalledTimes(1);
        screen.debug();
    });
});
