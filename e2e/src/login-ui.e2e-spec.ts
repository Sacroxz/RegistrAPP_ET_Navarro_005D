import { browser, element, by } from 'protractor';

describe('Login Page UI elements', () => {
  beforeEach(async () => {
    await browser.get('login');
  });

  it('should display email input', async () => {
    expect(await element(by.css('input[type="email"]')).isPresent()).toBeTruthy();
  });

  it('should display password input', async () => {
    expect(await element(by.css('input[type="password"]')).isPresent()).toBeTruthy();
  });

  it('should display password input', async () => {
    expect(await element(by.css('input[type="password"]')).isPresent()).toBeTruthy();
  });

  it('should display login button', async () => {
    expect(await element(by.id('login-button')).isPresent()).toBeTruthy();
  });
});
