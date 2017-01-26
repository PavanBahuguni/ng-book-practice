import { DiSimpleAppPage } from './app.po';

describe('di-simple-app App', function() {
  let page: DiSimpleAppPage;

  beforeEach(() => {
    page = new DiSimpleAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
