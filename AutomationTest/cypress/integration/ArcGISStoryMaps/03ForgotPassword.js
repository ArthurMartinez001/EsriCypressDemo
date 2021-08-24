describe('EsriArcStoryTest', () =>
{
    it('forgot password', ()=>
    {
        /* 
        User is able to click on the "Forgot Password link"
        1. User forgot password.
        2. User clicks on "Forgot password"
        3. User is now in the forgot password page. 
        */
        
        cy.loginURL(); //login page function
        cy.contains('Forgot password?').click();
        cy.get('#pageTitle').invoke('text').should('include', 'Forgot password');
        cy.go('back');



    })
})