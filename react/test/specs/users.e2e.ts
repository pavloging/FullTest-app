// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { expect } from '@wdio/globals';
import UsersPage from '../pageobjects/users.page.js';

describe('My Users application', () => {
    it('async loading', async () => {
        await UsersPage.loadData()
    });
    it('cheack sync', async () => {
        expect(await UsersPage.loadingTitle).toBeExisting();
    });
    it('async loading and delete users', async () => {
        await UsersPage.loadData()
        await UsersPage.deleteUser()
    });
});
