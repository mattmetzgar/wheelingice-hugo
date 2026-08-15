describe("Wheeling Ice", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("opens the index page", () => {
    cy.get("h1").contains("Music for the People");
    cy.get('.site-banner img[alt="Wheeling Ice"]').should("be.visible");
    cy.get(".home-art img").should("be.visible");
  });

  it("shows the social links", () => {
    cy.get(".social-links a").should("have.length", 3);
    cy.get('.social-links a[href="https://soundcloud.com/wheelingice"]');
    cy.get('.social-links a[href="https://youtu.be/p9K8Y5NlK3g"]');
    cy.get('.social-links a[href="https://twitter.com/wheelingice"]');
  });

  it("contains the full song feed on the homepage", () => {
    cy.get(".song-feed").should("be.visible");
    cy.get(".song-entry").should("not.exist");
    cy.get(".no-songs").contains("New songs will appear here.");
  });
});
