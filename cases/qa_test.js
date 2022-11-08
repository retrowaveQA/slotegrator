Feature('test code');

Scenario('test_something', ({ I, loginPage }) => {
  I.amOnPage('/')
  loginPage.SlotegratorLogin('dashadmin@mail.com', 'Test123')
});