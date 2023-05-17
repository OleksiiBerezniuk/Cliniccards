describe("Login", function(){

  it("Error empty Email", function(){
    cy.visit('https://cliniccards.com/');
    cy.get('div[id="newMenuTopLine"]').find('a[id="loginButton"]').should('be.visible').click();
    cy.get('button[type="submit"]').click();
    cy.get('span[id="emailError"]').should('be.visible').contains('Введіть коректний Email');
  })

  it("Error empty Password", function(){
    cy.visit('https://cliniccards.com/');
    cy.get('div[id="newMenuTopLine"]').find('a[id="loginButton"]').should('be.visible').click();
    cy.get('button[type="submit"]').click();
    cy.contains('Введіть коректний Email').should('be.visible');
  })

})