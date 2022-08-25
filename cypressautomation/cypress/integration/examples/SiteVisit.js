/// <reference types="cypress"/>

describe('my first suite',function()
{

    it('My first Test case',function()
    {
        cy.visit("https://www.google.co.in");
        cy.get('.gLFyf.gsfi').type('cypress')
        

    })
})