import { getGreeting } from '../support/app.po';

describe('angular-core-workshop', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to angular-core-workshop!');
  });
});
