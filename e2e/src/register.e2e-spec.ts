import { element, by, browser, ExpectedConditions } from 'protractor';

describe('Register Page', () => {
  it('Valid register should redirect to inicio page', async () => {
    await browser.get('register');
    const name = await element(by.css('input[type="text"]'));
    name.clear().then(() => {
      name.sendKeys('roberto');
    });
    const email = await element(by.css('input[type="email"]'));
    email.clear().then(() => {
      email.sendKeys('roberto@mail.com'); // Invalid Email
    });
    const password = await element(by.css('input[type="password"]'));
    password.clear().then(() => {
      password.sendKeys('123456');
    });
    await element(by.id('account-type-input')).all(by.tagName('ion-radio')).get(0).click();
    await element(by.id('register-button')).click();
    await browser.sleep(2000);
    expect(await browser.getCurrentUrl()).toContain('/inicio');
  });
});
