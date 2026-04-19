import { SelectablePage } from "../PageObjects/SelectablePage";

describe('Final Task', () => {
    beforeEach(() => {

        SelectablePage.visit();
    });

    it('should validate grid selection', () => {
        SelectablePage.gridTab.click()

        SelectablePage.two.click();
        SelectablePage.four.click();
        SelectablePage.six.click();
        SelectablePage.eight.click();

        SelectablePage.two.should('have.class', 'active');
        SelectablePage.four.should('have.class', 'active');
        SelectablePage.six.should('have.class', 'active');
        SelectablePage.eight.should('have.class', 'active');


        SelectablePage.one.should('not.have.class', 'active');
        SelectablePage.three.should('not.have.class', 'active');
        SelectablePage.five.should('not.have.class', 'active');
        SelectablePage.seven.should('not.have.class', 'active');
        SelectablePage.nine.should('not.have.class', 'active');


    });
});