/// <reference types="Cypress" />

describe('Central de Atendimento ao Cliente TAT', function() {
    
    beforeEach(() => 
        cy.visit('./src/index.html')
        )


    it('CT 01 - verifica o título da aplicação', function() {
        cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
    })

    it('CT 02 - preenche os campos obrigatórios e envia o formulário', function() {
 
        const longtext = 'Teste, Teste, Teste, Teste, Teste, Teste, Teste, Teste, Teste, Teste, Teste, Teste, Teste, Teste, Teste.'
     
        cy.get('#firstName').type('Teste', {delay: 0})
        cy.get('#lastName').type('2', {delay: 0})
        cy.get('#email').type('teste@gmail.com', {delay: 0})
        cy.get('#product').select('blog').should('have.value', 'blog')
        cy.get('#open-text-area').type(longtext, {delay: 0})
        cy.contains('button', 'Enviar').click()
        cy.get('.success').should('be.visible')
    })


  it('CT 03 - preenche todos os campos obrigatórios e envia o formulário', function() {
   
    const longtext = 'Teste, Teste, Teste, Teste, Teste, Teste, Teste, Teste, Teste, Teste, Teste, Teste, Teste, Teste, Teste.'
 
    cy.get('#firstName').type('Teste', {delay: 0})
    cy.get('#lastName').type('3', {delay: 0})
    cy.get('#email').type('teste@gmail.com', {delay: 0})
    cy.get('#phone').type('619999999', {delay: 0})
    cy.get('#product').select('blog').should('have.value', 'blog')
    cy.get('#phone-checkbox').click().check('phone')
    cy.get('#open-text-area').type(longtext, {delay: 0})
    cy.contains('button', 'Enviar').click()
    cy.get('.success').should('be.visible')
  })

  it('CT 04 - não preenche os campos obrigatórios', function() {
    
    const longtext = 'Teste, Teste, Teste, Teste, Teste, Teste, Teste, Teste, Teste, Teste, Teste, Teste, Teste, Teste, Teste.'
 
    cy.get('#firstName').type('Teste', {delay: 0})
    cy.get('#lastName').type('4', {delay: 0})
    cy.get('#email').type('teste@gmail.com', {delay: 0})
    cy.get('#product').select('blog').should('have.value', 'blog')
    cy.get('#phone-checkbox').click().check('phone')
    cy.get('#open-text-area').type(longtext, {delay: 0})
    cy.contains('button', 'Enviar').click()
    cy.get('.error').should('be.visible')
  })

  it('CT 05 - exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', function(){
    const longtext = 'Teste, Teste, Teste, Teste, Teste, Teste, Teste, Teste, Teste, Teste, Teste, Teste, Teste, Teste, Teste.'

    cy.get('#firstName').type('Teste', {delay: 0})
    cy.get('#lastName').type('5', {delay: 0})
    cy.get('#email').type('testegmail.com', {delay: 0})
    cy.get('#phone').type('619999999', {delay: 0})
    cy.get('#product').select('blog').should('have.value', 'blog')
    cy.get('#phone-checkbox').click().check('phone')
    cy.get('#open-text-area').type(longtext, {delay: 0})
    cy.contains('button', 'Enviar').click()
    cy.get('.error').should('be.visible')

  })

  it('CT 06 - validar campo telefone com valor em string', function(){
    const longtext = 'Teste, Teste, Teste, Teste, Teste, Teste, Teste, Teste, Teste, Teste, Teste, Teste, Teste, Teste, Teste.'

    cy.get('#firstName').type('Teste', {delay: 0})
    cy.get('#lastName').type('6', {delay: 0})
    cy.get('#email').type('teste@gmail.com', {delay: 0})
    cy.get('#phone').type('TesteTel', {delay: 0}).should('have.value', '')
    cy.get('#product').select('blog').should('have.value', 'blog')
    cy.get('#phone-checkbox').click().check('phone')
    cy.get('#open-text-area').type(longtext, {delay: 0})
    cy.contains('button', 'Enviar').click()
    cy.get('.error').should('be.visible')

  })

  it('CT 07 - exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário', function(){
    
    const longtext = 'Teste, Teste, Teste, Teste, Teste, Teste, Teste, Teste, Teste, Teste, Teste, Teste, Teste, Teste, Teste.'
 
    cy.get('#firstName').type('Teste', {delay: 0})
    cy.get('#lastName').type('7', {delay: 0})
    cy.get('#email').type('teste@gmail.com', {delay: 0})
    cy.get('#product').select('blog').should('have.value', 'blog')
    cy.get('#phone-checkbox').check('phone')
    cy.get('#open-text-area').type(longtext, {delay: 0})
    cy.contains('button', 'Enviar').click()
    cy.get('.error').should('be.visible')

  })
  
  it('CT 08 - exibe mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios', function(){

    cy.contains('button', 'Enviar').click()
    cy.get('.error').should('be.visible')

  })

  it('CT 09 - envia o formulário com sucesso usando um comando customizado', function(){
    cy.fillMandatoryFieldsAndSubmit()
    cy.get('.success').should('be.visible')
  })

  it('CT 10 - seleciona um produto (YouTube) por seu texto', function(){
    cy.get('#product')
    .select('YouTube')
    .should('have.value', 'youtube')

  })

  it('CT 11 - seleciona um produto (Mentoria) por seu valor (value)', function(){
    cy.get('#product')
    .select('mentoria')
    .should('have.value', 'mentoria')
  })

  it('CT 12 - seleciona um produto (Blog) por seu índice', function(){
    cy.get('#product')
    .select(1)
    .should('have.value', 'blog')
  })

  it('CT 13 - marca o tipo de atendimento "Feedback"', function(){
    cy.get('input[type="radio"]')
    .check('feedback')
    .should('be.checked')
  })

  it('CT 14 - marca cada tipo de atendimento', function(){
    cy.get('input[type="radio"]')
    .should('have.length', 3)
    .each(($radio) => {
        cy.wrap($radio).check()
        cy.wrap($radio).should('be.checked')
    })
  })

  it('CT 15 - marca ambos checkboxes, depois desmarca o último', function(){
    cy.get('input[type="checkbox"]')
    .check()
    .should('be.checked')
    .last()
    .uncheck()
    .should('not.be.checked')
  })

    it('CT 16 - seleciona um arquivo da pasta fixtures', function(){
      cy.get('#file-upload')
      .then(input => {
        expect(input[0].files.length).to.equal(0)
      })
      .selectFile('cypress/fixtures/example.json')
      .then(input => {
        expect(input[0].files[0].name).to.equals('example.json')
        
      })
    }) 

    it('CT 17 - seleciona um arquivo simulando um drag-and-drop', function(){
      cy.get('#file-upload')
      .selectFile('cypress/fixtures/example.json', { action: 'drag-drop' })
      .then(input => {
        expect(input[0].files[0].name).to.equals('example.json')
      })
    }) 

    it('CT 18 - seleciona um arquivo utilizando uma fixture para a qual foi dada um alias', function(){
      cy.fixture('example.json').as('exampleFile')
      cy.get('#file-upload')
      .selectFile('@exampleFile')
      .then(input => {
        expect(input[0].files[0].name).to.equals('example.json')
      })
    })

    it('CT 19 - verifica que a política de privacidade abre em outra aba sem a necessidade de um clique', function(){
      cy.get('#privacy a').should('have.attr', 'target', '_blank')
    })

    it('CT 20 - acessa a página da política de privacidade removendo o target e então clicando no link', function(){
      cy.get('#privacy a').invoke('removeAttr', 'target').click()
      cy.contains('CAC TAT - Política de privacidade')
    })
})