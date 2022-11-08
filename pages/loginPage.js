const { I } = inject()
module.exports = {
inputEmail: "#email",
inputPassword: "#password",
checkboxRemember: "#remember-device-checkbox",
signInButton: "[type='submit']",



SlotegratorLogin(email, password) {
    I.waitForVisible(this.inputEmail, 20)
    I.fillField(this.inputEmail, email)
    I.fillField(this.inputPassword, password)
    I.checkOption(this.checkboxRemember)
    I.click(this.signInButton)
},
}
