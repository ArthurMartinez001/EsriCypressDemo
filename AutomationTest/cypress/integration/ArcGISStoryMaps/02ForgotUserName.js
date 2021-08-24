describe('EsriArcStoryTest', () =>
{
    it('forgot username', ()=>
    {
        //Verify user is able to click Forgot password & Forgot Username is able to reach the correct page. 

        //Steps:
        //1. User is at login page
        //2. User clicks "Forgot Username" hyperlink
        //3. Hyperlink takes user to Retrieve User Name page
        
        cy.loginURL();
        cy.contains('Forgot username?').click();
        cy.get('#pageTitle').invoke('text').should('include', 'Retrieve username');
        cy.go('back');

    })
})