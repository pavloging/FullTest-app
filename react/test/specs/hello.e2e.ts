// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { expect } from '@wdio/globals';
import HelloPage from '../pageobjects/hello.page.js';

describe('My Hello application', () => {
    it('should toggle', async () => {
        await HelloPage.open();

        await HelloPage.toggleTitleWithInput('hello');
        await expect(HelloPage.helloTitle).toBeExisting();
        await HelloPage.toggleBtn.click();
        await expect(HelloPage.helloTitle).not.toBeExisting();
    });
});
