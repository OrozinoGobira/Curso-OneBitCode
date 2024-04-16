function show() {
    // Obtém o elemento com o ID 'contact-list'
    const contactList = document.getElementById('contact-list')
    console.log(contactList)

    // Obtém todos os elementos 'li' no documento
    const listElements = document.getElementsByTagName('li')
    console.log(listElements)

    // Obtém todos os elementos com a classe 'contact-input'
    const contactInput = document.getElementsByClassName('contact-input')
    console.log(contactInput)

    // Obtém todos os elementos 'label' que são filhos de 'li' dentro de '#contact-list'
    const contacts = document.querySelectorAll('#contact-list > li > label')
    console.log(contacts)

    // Obtém todos os elementos com o atributo 'name' igual a 'contact1'
    const contact1 = document.getElementsByName('contact1')
    console.log(contact1)

    // Obtém o primeiro elemento 'label' que é filho de 'li' dentro de '#contact-list'
    const firstContact = document.querySelector('#contact-list > li > label')
    console.log(firstContact)
}