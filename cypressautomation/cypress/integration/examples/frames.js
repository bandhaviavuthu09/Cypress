/// <reference types="cypress" />
/// <reference types="cypress-iframe" />//
import 'cypress-iframe'

describe('my Finding frames suite',function()
{

    it('My first frames case',function()
    {
        
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.frameloaded('#courses-iframe')
        cy.iframe().find("a[href*='mentorship']").eq(0).click()
        cy.iframe().find("h1[class*='pricing-title']").should('have.length',2)


    })

})