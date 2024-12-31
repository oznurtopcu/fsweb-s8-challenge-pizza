describe('Pizza Tests', () => {

    beforeEach(()=> {
        cy.visit('http://localhost:5173/order-pizza');
        cy.get('[type="radio"]').first().check();
        cy.get('[data-cy="select"]').select('Normal');
        
    });

    it('isim inputuna üç karakterden az veri girince buton disabled kalıyor mu?', () => {
        cy.get('[data-cy="checkbox"]').check(["Pepperoni", "Sosis", "Kanada Jambonu", "Tavuk Izgara", "Soğan"]);
        cy.get('[data-cy="isim"]').type('ab');
        cy.get('[data-cy="submitButton"]').should('be.disabled');

    });

    it('checkboxta 10 adetten fazla ürün seçince buton disabled kalıyor mu?', () => {
        cy.get('[data-cy="checkbox"]').check(["Pepperoni", "Sosis", "Kanada Jambonu", "Tavuk Izgara", "Soğan", "Domates", "Mısır", "Sucuk", "Jalapeno", "Sarımsak", "Biber", "Ananas"]);
        cy.get('[data-cy="isim"]').type('abcde');
        cy.get('[data-cy="submitButton"]').should('be.disabled');
    });

    it('verileri doğru girince form submit ediliyor mu?', () => {
        cy.get('[data-cy="checkbox"]').check(["Pepperoni", "Sosis", "Kanada Jambonu", "Tavuk Izgara", "Soğan"]);
        cy.get('[data-cy="isim"]').type('abcde');
        cy.get('[data-cy="submitButton"]').should('be.enabled');
    });
  });