describe('EsriArcStoryTest', () =>
{
    //Verify User is able to reach correct login page
    it('can sign in', ()=>
    {
        cy.visit('https://storymaps.arcgis.com/');
        cy.contains('Sign in').click();
        cy.url().should('include', 'https://www.arcgis.com/sharing/rest/oauth2/authorize?client_id=arcgisstorymaps&response_type=token&expiration=20160&redirect_uri=https%3A%2F%2Fstorymaps.arcgis.com%2Foauth-callback%3FreturnURL%3D%252Fstories&hideCancel=true&showSignupOption=true&force_login=true')
    });
});