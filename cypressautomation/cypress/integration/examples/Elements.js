/// <reference types="cypress"/>

describe('my Finding Elements suite',function()
{

    it('My first element case',function()
    {
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
        cy.get('.search-keyword').type('ca')
        cy.wait(2000)
        cy.get('.product:visible').should('have.length',4)
        cy.get('.products').as('productLocator')
        cy.get(".products").find('.product').should('have.length',4)
        cy.get('.products').find('.product').eq(1).contains('ADD TO CART').click();
        cy.get('@productLocator').find('.product').eq(2).contains('ADD TO CART').click().then(function()
        
        {
            console.log("sf");
        }
        )
        

        cy.get('.products').find('.products').each(($el, index, $list) => {

            const vegText=$el.find('h4.product-name').text()
            console.log(vegText);
            if(vegText.includes('Capsicum'))
            {
                cy.wrap($el).find('button').click()
            }


        })

        cy.get('.brand').should('have.text','GREENKART')
        cy.get('.brand').then(function(logoElement)
        {
            cy.log(logoElement.text())
        })

        

    })
})