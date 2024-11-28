
describe("Sample scenario",()=>{
    it("login Scenario",()=>{
        cy.visit("https://magento.softwaretestingboard.com/")
        cy.get("div[class='panel header'] ul[class='header links'] a").contains("Sign In").click()
    })
})