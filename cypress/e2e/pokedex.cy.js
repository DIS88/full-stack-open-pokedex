describe('Pokedex', function() {
  it('front page can be opened', function() {
    cy.visit('http://localhost:5001')
    cy.contains('ivysaur', { timeout: 10000 })
    cy.contains('Pokémon and Pokémon character names are trademarks of Nintendo.')
  })

  it('pokemon page can be navigated to', function() {
    cy.visit('http://localhost:5001')
    cy.contains('ivysaur').click()
    cy.contains('chlorophyll')
  })
})
