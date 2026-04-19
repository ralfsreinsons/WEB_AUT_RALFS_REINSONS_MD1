import { BasePage } from "./BasePage";

export class SelectablePage extends BasePage {
    static get url() {
        return "/selectable";
    }

    static get gridTab() {
        return cy.get('#demo-tab-grid');
    }

    static get two(){

    }
// Getteri katram ciparam atsevišķi
    static get one() { 
        return cy.get('#gridContainer').contains('li', 'One'); 
    }
    static get two() { 
        
        return cy.get('#gridContainer').contains('li', 'Two');
     }
    static get three() {

         return cy.get('#gridContainer').contains('li', 'Three');
         }
    static get four() { 

        return cy.get('#gridContainer').contains('li', 'Four');
     }
    static get five() { 

        return cy.get('#gridContainer').contains('li', 'Five'); 
    }
    static get six() { 

        return cy.get('#gridContainer').contains('li', 'Six'); 
    }
    static get seven() {

         return cy.get('#gridContainer').contains('li', 'Seven'); 
        }
    static get eight() { 

        return cy.get('#gridContainer').contains('li', 'Eight'); }

    static get nine() {
         return cy.get('#gridContainer').contains('li', 'Nine');
         }

}