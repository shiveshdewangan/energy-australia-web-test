class HomePage {
  goToHomePage() {
    cy.visit("http://localhost:4200/festivals");
  }

  verifyTitle(title) {
    cy.title().should("eq", title);
  }

  verifyURL(url) {
    cy.url().should("eq", url);
  }

  getListOfFestivals() {
    cy.wait(10000);
    cy.get("body > app-root > app-festivals > ol > li").then(el => expect(el.text()).to.be.a("string"));
  }
}

export default new HomePage();
