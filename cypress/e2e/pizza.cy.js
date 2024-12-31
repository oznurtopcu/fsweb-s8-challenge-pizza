describe('inputa bir metin giren test', () => {
    it('should load the homepage', () => {
      cy.visit('http://localhost:3000');
      cy.get('h1').should('contain', 'Welcome to React');
    });
  });


  describe('birden fazla malzeme seçilebilen bir test', () => {
    it('should load the homepage', () => {
      cy.visit('http://localhost:3000');
      cy.get('h1').should('contain', 'Welcome to React');
    });
  });


  describe('formu gönderen bir test', () => {
    it('should load the homepage', () => {
      cy.visit('http://localhost:3000');
      cy.get('h1').should('contain', 'Welcome to React');
    });
  });
