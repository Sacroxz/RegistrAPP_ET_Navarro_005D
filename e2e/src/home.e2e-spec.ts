import { browser, element, by } from 'protractor';

describe('Home Page', () => {

  beforeEach(async () => {
    await browser.get('/');
  });

  it('should display a welcome message', async () => {
    expect(await element(by.css('.welcome')).getText()).toEqual('Bienvenido a RegistrAPP');
  });

  it('should display an image', async () => {
    expect(await element(by.tagName('ion-img')).isPresent()).toBeTruthy();
  });

  it('should have a login button', async () => {
    expect(await element(by.id('login')).isPresent()).toBeTruthy();
  });

  it('should have a register button', async () => {
    expect(await element(by.id('register')).isPresent()).toBeTruthy();
  });

  it('should render a custom font', async () => {
    expect(await element.all(by.tagName('ion-text')).getCssValue('font-family')).toContain('"Plus Jakarta Sans"');
  });
});
