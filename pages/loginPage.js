const { I } = inject()
module.exports = {
inputEmail: "#email",
inputPassword: "#password",
chekboksRemember: "#remember-device-checkbox",
signinButton: "[type='submit']",



SlotegratorLogin(email, password) {
    I.waitForVisible(this.inputEmail, 20)
    I.fillField(this.inputEmail, email)
    I.fillField(this.inputPassword, password)
    I.checkOption(this.chekboksRemember)
    I.click(this.signinButton)
},
}
