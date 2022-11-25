import { element, by, browser, ExpectedConditions } from 'protractor';

describe('Scanner Page', () => {
  it('should open scanner', async () => {
    await browser.get('inicio');
    await element(by.id('scan-button')).click();
    await browser.sleep(2000);
    expect(await browser.getCurrentUrl()).toContain('/scanner');
  });
});
