import { NestedPage } from './app.po';

describe('nested App', function() {
  let page: NestedPage;

  beforeEach(() => {
    page = new NestedPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
