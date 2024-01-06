export function invalid_log(
    clientNo = "X0000123",
    login = "AUTOTEST.C",
    password = "Test123"
  ) {
    cy.get('input[name="clientNo"]').type(clientNo);
    cy.get('input[name="clientLogin"]').type(login);
    cy.get('input[name="password"]').type(password);
    cy.get('input[type="submit"]').click();
  
    cy.wait(3000);
  
    Cypress.on("uncaught:exception", (err, runnable) => {
      return true;
    });
  }