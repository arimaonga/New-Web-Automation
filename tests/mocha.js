import assert from 'assert';

describe('webdriver.io page', () => {
    it('should have the right title', () => {
        browser.url('https://webdriver.io');
        const title = browser.getTitle();
        assert.equal(title, 'WebdriverIO · Next-gen WebDriver test framework for Node.js');
    
        browser.pause(30000);

    });
});