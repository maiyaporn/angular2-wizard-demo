import { Angular2WizardDemoPage } from './app.po';

describe('angular2-wizard-demo App', function() {
  let page: Angular2WizardDemoPage;

  beforeEach(() => {
    page = new Angular2WizardDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
