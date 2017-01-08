import { BuildInDirectivesPage } from './app.po';

describe('build-in-directives App', function() {
  let page: BuildInDirectivesPage;

  beforeEach(() => {
    page = new BuildInDirectivesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
