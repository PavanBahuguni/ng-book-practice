import { RouterAuthPage } from './app.po';

describe('router-auth App', function() {
  let page: RouterAuthPage;

  beforeEach(() => {
    page = new RouterAuthPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
