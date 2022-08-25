/// <reference types="cypress" />

describe('my Finding checkbox suite',function()
{

    it('My first checkbox case',function()
    {
        
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        //select on checkbox
        cy.get('#checkBoxOption1').should('be.checked').and('have.value','option1')
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
        //multiple checkboxes

        cy.get('input[type="checkbox"]').check(['option2','option3'])

        //static dropdowns
        cy.get('select').select('option3').should('have.value','option3')

        //Dynamic Dropdowns
        cy.get('#autocomplete').type('ind')
        cy.get('.ui-menu-item div').each(($el, index, $list) => {

            if($el.text()==="India")
            {
                cy.wrap($el).click()
            }

        })

        //Invisible or visible example
        cy.get('#autocomplete').should('have.value','India')
        cy.get('#displayed-text').should('be.visible')
        cy.get('#hide-textbox').click()
        cy.get('#hide-textbox').should('not.be.visible')
        cy.get('#show-textbox').click()
        cy.get('#displayed-text').should('be.visible')

        //Radio Button
        cy.get('[value="radio2"]').check().should('be.checked')

        cy.get('#opentab').then(function(e1)
        {
            const url=e1.prop('href')
            cy.visit(url)
        })



    })
})