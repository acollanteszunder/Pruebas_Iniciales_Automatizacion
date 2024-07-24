describe('Create a user', () => {

  beforeEach(() => {
    //Para cada caso que haya en este fichero lo primero que hara sera ir a la direccion que indicamos a continuacion
    cy.visit('https://devel.zunder.com/')
    //cy.visit('https://panel.zunder.com/')
  })


  it('Create a user', () => {

    // Usa XPath para seleccionar el campo de entrada y verificar que existe. Despues escribira el correo electronico que le indicamos.
    cy.xpath('//input[@name="username" and @type="text"]').should('exist');
    cy.xpath('//input[@name="username" and @type="text"]').type('alvaro.collantes@zunder.com')

    // Usa XPath para seleccionar el campo de entrada y verificar que existe. Despues escribira la contraseña que le indicamos.
    cy.xpath('//input[@type="password"]').should('exist');
    cy.xpath('//input[@type="password"]').type('1234Mhetthsmm');

    //El siguiente paso que daremos sera pulsar sobre el boton "Entrar", sacamos su identificador xpath y clickamos
    cy.xpath('//button[@type="button"]').should('exist');
    cy.xpath('//button[@type="button"]').click()

    //Clickamos sobre el boton del panel usuarios para que nos despliegue la lista de opciones
    cy.xpath('/html/body/div[1]/div/div[1]/div[1]/div[1]/div/ul/li[3]/div/span').click()

    //Clickamos sobre la opcion de usuarios
    cy.xpath('/html/body/div[1]/div/div[1]/div[1]/div[1]/div/ul/li[3]/ul/li[1]').click()

    //Vamos a meter un tiempo de espera para que los elementos carguen en la pagina
    // Pausa la ejecución del test por 2 segundos
    cy.wait(2000);


    //Clickamos sobre el boton de añadir usuarios
    cy.xpath('//button/span[text()="Añadir"]').should('exist');

    cy.wait(2000);

    cy.xpath('//button/span[text()="Añadir"]').click()

    //Comprobamos que existe el campo del correo
    cy.xpath('//input[@placeholder="Correo"]').should('exist');
    cy.xpath('//input[@placeholder="Correo"]').type('prueba@prueba.com')

    //Rellenamos el numero de telefono
    cy.xpath('//input[@placeholder="Teléfono"]').should('exist');
    cy.xpath('//input[@placeholder="Teléfono"]').type('987784533')

    //Seleccionamos la organizacion
    cy.xpath('//input[@placeholder="Organización"]').should('exist');
    cy.xpath('//input[@placeholder="Organización"]').click()
    cy.xpath('//ul/li/span[text()="Ayuntamiento de Palencia"]').click()

    //Clickamos sobre el boton de crear usuario
    cy.xpath('//span[text()="Crear Usuario"]').should('exist');
    cy.xpath('//span[text()="Crear Usuario"]').click()
    

  })

  
})


    //EJEMPLO DE TIMEOUT, espera un segundo para que aparezca ese elemento
   // cy.xpath('//div[contains(@class, "el-form-item__error") and contains(text(), "Introduce tu correo electrónico")]', { timeout: 10000 }).should('exist');
    
    