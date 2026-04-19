export class BasePage {
    static get baseUrl() {
        return "https://demoqa.com";
    }

    static visit() {
        cy.visit(this.baseUrl + this.url);
    }
}