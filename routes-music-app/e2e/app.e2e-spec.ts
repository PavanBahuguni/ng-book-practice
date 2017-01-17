import { RoutesMusicAppPage } from './app.po';

describe('routes-music-app App', function() {
  let page: RoutesMusicAppPage;

  beforeEach(() => {
    page = new RoutesMusicAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
