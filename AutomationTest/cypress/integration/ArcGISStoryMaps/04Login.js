
        /*
        This test is user is able to sign in.
        1. User inputs username
        2. User inputs password
        3. User clicks sign in button
        4. User is able to sign in. 
        */
        describe('EsriArcStoryTest', () =>
       {
        it('Login', ()=>
        {
        var username2 = 'arthur001'
        var password2 = 'Esri123456'

        cy.loginURL(); // login page function
        cy.login(username2, password2); //login function
        cy.get("h2").should('contain', 'Stories');
        cy.signOut(); //signout function
        })
          

       })
       
