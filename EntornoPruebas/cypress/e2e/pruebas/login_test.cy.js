describe('Testing control panel login', () => {

  beforeEach(() => {
    //Para cada caso que haya en este fichero lo primero que hara sera ir a la direccion que indicamos a continuacion
    cy.visit('https://panel.zunder.com/')
  })


  it('Login correcto', () => {

    // Usa XPath para seleccionar el campo de entrada y verificar que existe. Despues escribira el correo electronico que le indicamos.
    cy.xpath('//input[@name="username" and @type="text"]').should('exist');
    cy.xpath('//input[@name="username" and @type="text"]').type('alvaro.collantes@zunder.com')

    // Usa XPath para seleccionar el campo de entrada y verificar que existe. Despues escribira la contraseña que le indicamos.
    cy.xpath('//input[@type="password"]').should('exist');
    cy.xpath('//input[@type="password"]').type('Kux99860');

    //El siguiente paso que daremos sera pulsar sobre el boton "Entrar", sacamos su identificador xpath y clickamos
    cy.xpath('//button[@type="button"]').should('exist');
    cy.xpath('//button[@type="button"]').click()

  })

  it('Login incorrecto, contraseña erronea', () => {

    // Usa XPath para seleccionar el campo de entrada y verificar que existe. Despues escribira el correo electronico que le indicamos.
    cy.xpath('//input[@name="username" and @type="text"]').should('exist');
    cy.xpath('//input[@name="username" and @type="text"]').type('alvaro.collantes@zunder.com')

    // Usa XPath para seleccionar el campo de entrada y verificar que existe. Despues escribira la contraseña que le indicamos.
    cy.xpath('//input[@type="password"]').should('exist');
    cy.xpath('//input[@type="password"]').type('sadasda');

    //El siguiente paso que daremos sera pulsar sobre el boton "Entrar", sacamos su identificador xpath y clickamos
    cy.xpath('//button[@type="button"]').should('exist');
    cy.xpath('//button[@type="button"]').click()

    //Como el login debe ser erroneo, no debe acceder al panel, por lo que comprobaremos que en la pantalla nos aparezca el titulo html "Iniciar sesion"
    cy.xpath('//div[@class="title-container"]').should('exist');
    

  })

  it('Login incorrecto, mail erroneo', () => {

    // Usa XPath para seleccionar el campo de entrada y verificar que existe. Despues escribira el correo electronico que le indicamos.
    cy.xpath('//input[@name="username" and @type="text"]').should('exist');
    cy.xpath('//input[@name="username" and @type="text"]').type('alvarodfs.collantes@zunder.com')

    // Usa XPath para seleccionar el campo de entrada y verificar que existe. Despues escribira la contraseña que le indicamos.
    cy.xpath('//input[@type="password"]').should('exist');
    cy.xpath('//input[@type="password"]').type('sadasda');

    //El siguiente paso que daremos sera pulsar sobre el boton "Entrar", sacamos su identificador xpath y clickamos
    cy.xpath('//button[@type="button"]').should('exist');
    cy.xpath('//button[@type="button"]').click()

    //Como el login debe ser erroneo, no debe acceder al panel, por lo que comprobaremos que en la pantalla nos aparezca el titulo html "Iniciar sesion"
    cy.xpath('//div[@class="title-container"]').should('exist');
    

  })

  it('Login incorrecto, mail y password vacios', () => {

    //El siguiente paso que daremos sera pulsar sobre el boton "Entrar", sacamos su identificador xpath y clickamos
    cy.xpath('//button[@type="button"]').should('exist');
    cy.xpath('//button[@type="button"]').click()

    //Como el login debe ser erroneo, no debe acceder al panel, por lo que comprobaremos que en la pantalla nos aparezca el titulo html "Iniciar sesion"
    cy.xpath('//div[@class="title-container"]').should('exist');

    //Comprobamos que al dejar los campos mail y contraseña vacios, nuestra el mensaje "Introduce tu correo electronico" y "Introduce tu contraseña"
    cy.xpath('//div[contains(@class, "el-form-item__error") and contains(text(), "Introduce tu correo electrónico")]').should('exist');
    cy.xpath('//div[contains(@class, "el-form-item__error") and contains(text(), "Introduce tu contraseña")]').should('exist');
    

  })
  
})




    //EJEMPLO DE TIMEOUT
   // cy.xpath('//div[contains(@class, "el-form-item__error") and contains(text(), "Introduce tu correo electrónico")]', { timeout: 10000 }).should('exist');
    
    