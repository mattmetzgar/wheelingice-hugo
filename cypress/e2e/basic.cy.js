describe("Wheeling Ice", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("opens the index page", () => {
    cy.get("h1").contains("Music for the People");
  });

  it("navigates to the blog page", () => {
    cy.get('a[href="/blog/"]').eq(0).click();
    cy.url().should("include", "/blog/");
    cy.get("ul.blog-posts").should("be.visible");
  });
});

describe("validate blog", () => {
  it("should have only 3 blog posts by default", () => {
    cy.visit("/blog/");
    cy.get("ul.blog-posts li").should("have.length", 3);
  });
});
