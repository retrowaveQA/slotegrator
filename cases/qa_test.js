Feature('test code');

Scenario('test_something', ({ I, loginPage }) => {
  I.amOnPage('http://test.react-back-office-app.netreportservice.xyz/admin/login')
  loginPage.SlotegratorLogin('dashadmin@mail.com', 'Test123')
});