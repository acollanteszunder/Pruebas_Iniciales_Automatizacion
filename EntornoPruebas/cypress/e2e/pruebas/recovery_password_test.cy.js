describe('Testing recovery password', () => {

    beforeEach(() => {
      //Para cada caso(cada caso es un it) que haya en este fichero lo primero que hara sera ir a la direccion que indicamos a continuacion
      cy.visit('https://panel.zunder.com/')
    })
  
  
    it('Recover password', () => {
  
      //Comprobamos que en la pantalla de login aparezca el texto "Recuperar contraseña" y clickamos sobre el
      cy.xpath('//a/span[@class="el-link--inner"]').should('exist');
      cy.xpath('//a/span[@class="el-link--inner"]').click()
      
      //Comprobamos la existencia del campo donde vamos a introducir el correo para recuperar la contraseña
      cy.xpath('//input[@class="form-control" and @id="username"]').should('exist');
      cy.xpath('//input[@class="form-control" and @id="username"]').type('alvaro.collantes@zunder.com');

      //Comprobamos la existencia del boton "Recuperar contraseña" y clickamos sobre el
      cy.xpath('//input[@class="btn btn-primary" and @type="button"]').should('exist');
      cy.xpath('//input[@class="btn btn-primary" and @type="button"]').click()

      //Comprobamos que aparece el mensaje de que el correo se ha enviado correctamente
      cy.xpath('//h1[@id="user_resetting_request_error"]').should('exist');

    })
    
  })
  