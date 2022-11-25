import { browser, element, by, ExpectedConditions } from 'protractor';

describe('Login Page', () => {
  it('Invalid login should display alert message', async () => {
    await browser.get('login');
    const email = await element(by.css('input[type="email"]'));
    email.clear().then(() => {
      email.sendKeys('mail@mail.com');
    });
    const password = await element(by.css('input[type="password"]'));
    password.clear().then(() => {
      password.sendKeys('1234567');
    });
    await element(by.id('login-button')).click();
    await browser.sleep(2000);
    expect(await element(by.tagName('ion-alert')).isPresent()).toBeTruthy();
  });
});


