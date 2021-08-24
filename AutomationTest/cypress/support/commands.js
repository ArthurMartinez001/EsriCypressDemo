Cypress.Commands.add('login', (username, password) =>
       {
        //this function is to login only.    
        cy.get('#user_username').type(username);
        cy.get('#user_password').type(password);
        cy.get('#signIn').click();
        
       })
    
       //delete function
Cypress.Commands.add('deleteStory', () =>
{
    //breakdown function
    cy.get('[aria-label= "Stories"]').click();
    cy.get('[data-testid="context-menu-button"]').last().click(); //after finding testid, click the last button. 
    cy.get('button').contains('Delete').click();
    cy.get('button').contains('Yes, delete').click();
})

Cypress.Commands.add('loginURL', () =>
{
    //link to url login page
    cy.visit('https://www.arcgis.com/sharing/rest/oauth2/authorize?client_id=arcgisstorymaps&response_type=token&expiration=20160&redirect_uri=https%3A%2F%2Fstorymaps.arcgis.com%2Foauth-callback%3FreturnURL%3D%252Fstories&hideCancel=true&showSignupOption=true&force_login=true');
       

})

//break down
Cypress.Commands.add('signOut', () =>
{
    cy.get('.dropdown-target').click();
    cy.get('.dropdown-menu-item-content').contains('Sign out').click();
    
})

