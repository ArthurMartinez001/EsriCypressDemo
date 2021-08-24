describe('EsriArcStoryTest', () =>
{
    it('creates a story', () =>
    {
       /*
       This test is a small workflow: 
       1. User logs in
       2. Verify user logs in. 
       3. User clicks on New Story button
       4. User clicks on "Start from scratch"
       5. User created a new blank story
       
       */
        var username1 = 'arthur001'
        var password1 = 'Esri123456'

        //set up
        cy.loginURL();
        cy.login(username1, password1) //login function located in support folder
        
        //test
        cy.get('button').contains('New story').click();
        cy.get('button').contains('Start from scratch').click();
        cy.get('[aria-label= "Title your story"]', {timeout : 10000}).invoke('attr', 'placeholder').should('contain', 'Title your story');

        //breakdown
        cy.deleteStory();
        cy.signOut();

    })

})