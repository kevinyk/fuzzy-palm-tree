import { NotesPage } from './app.po';

describe('notes App', () => {
  let page: NotesPage;

  beforeEach(() => {
    page = new NotesPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
