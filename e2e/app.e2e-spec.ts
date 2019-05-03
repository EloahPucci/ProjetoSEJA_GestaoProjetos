import { ProjetoSEJAPage } from './app.po';

describe('projeto-seja App', function() {
  let page: ProjetoSEJAPage;

  beforeEach(() => {
    page = new ProjetoSEJAPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
