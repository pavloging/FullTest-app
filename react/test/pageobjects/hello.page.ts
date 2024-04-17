import { $ } from '@wdio/globals';
import Page from './page.js';

class HelloPage extends Page {
    public get toggleBtn() {
        return $('#btn');
    }
    public get searchInput() {
        return $('#search');
    }
    public get helloTitle() {
        return $('#hello');
    }

    public async toggleTitleWithInput(text: string) {
        await this.searchInput.setValue(text);
        await this.toggleBtn.click();
    }

    public open() {
        return super.open('hello');
    }
}

export default new HelloPage();