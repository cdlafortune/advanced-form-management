//Form validation tests

describe('new name', function() {
    it('selects name input and types a name', function() {
        cy.visit("http://localhost:3000/")
        cy.get("#name").type("Cris").contains("Cris")
    })
})

describe('email', function () {
    it('selects and types in an email', function(){
        cy.visit("http://localhost:3000/")
        cy.get("#email").type("cdsuddreth@gmail.com")
    })
})

describe('password', function () {
    it('selects and types in a password', function(){
        cy.visit("http://localhost:3000/")
        cy.get("#password").type("password")
    })
})

describe('terms of service', function () {
    it('selects terms of service checkbox', function(){
        cy.visit("http://localhost:3000/")
        cy.get("#terms").click()
    })
})

describe('submit button', function () {
    it('clicks submit button', function(){
        cy.visit("http://localhost:3000/")
        cy.get("#submit").click()
    })
})

describe("is valid?", function (){
    it("sees what happens if you try to submit without completing the form", function(){
        cy.visit("http://localhost:3000/")
        cy.get("#submit").click()
    })
})