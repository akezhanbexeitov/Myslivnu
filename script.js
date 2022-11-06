let title, description1, description2, contactUs;
const languageWrap = document.querySelector('.header__languages')
const languageLinks = document.querySelectorAll('.language__item')
const main = document.querySelector('.main__container')
const footerText = document.querySelector('.footer__container')

let data = {
    "english": {
        "title": "We apologize to the clients, we are currently renovating LD Myslivna, which will be open again in 2024!",
        "description1": "We want to build a comprehensive spa treatment and relaxation center for you right near the center of Karlovy Vary, so you can enjoy a unique resort atmosphere in the very heart of the most famous resort town in the Czech Republic, a few steps from the Spa Colonnade!",
        "description2": "Karlovy Vary is characterized by the beneficial effects of warm mineral springs, magical architecture, a unique resort therapeutic landscape and a rich offer of social events.",
        "contact-us": "Do not hesitate to contact us with any wishes or questions"
    },
    "czech": {
        "title": "Omlouváme se klientům, právě rekonstrujeme LD Myslivnu, která by měla být opět otevřena v roce 2024!",
        "description1": "Chceme pro vás vybudovat komplexní lázeňské léčení a relaxační centrum přímo v blízkosti centra v Karlových Varech a tak si vychutnat jedinečnou lázeňskou atmosféru v samém srdci nejznámějšího lázeňského města v České Republice, pár kroků od Vřídelní kolonády!",
        "description2": "Karlovy Vary se vyznačují blahodárnými účinky teplých zřídel minerálních pramenů, kouzelnou architekturou, unikátní lázeňskou terapeutickou krajinou a bohatou nabídkou společenských akcí.",
        "contact-us": "S jakýmkoliv přáním či dotazem nás neváhejte kontaktovat"
    }
}

main.innerHTML = `
    <div class="main__text text">
        <h1 class="text__item">${data['czech'].title}</h1>
        <p class="text__item">${data['czech'].description1}</p>
        <p class="text__item">${data['czech'].description2}</p>
    </div>
    <div class="main__image">
        <img src="images/building.png" alt="Building">
    </div>
`

footerText.innerHTML = `
    <h2 class="footer__text">${data['czech']["contact-us"]}</h2>
    <ul class="contact__links links">
        <li class="links__item">
            <i class="fa-solid fa-phone"></i>
            <a href="tel:+420728168411">+420728168411</a>
        </li>
        <li class="links__item">
            <i class="fa-solid fa-envelope"></i>
            <a href="mailto:obchod@margotrade.cz ">obchod@margotrade.cz</a>
        </li>
        <li class="links__item">
            <i class="fa-solid fa-location-dot"></i>
            <a href="#">Sovová stezka 470/1 360 01, Karlovy Vary<br>IČO: 044 68 520</a>
        </li>
    </ul>
`


languageLinks.forEach(el => {
    el.addEventListener('click', () => {
        languageWrap.querySelector('.active').classList.remove('active')
        el.classList.add('active')
        const attr = el.getAttribute('id')
        title = data[attr].title
        description1 = data[attr].description1
        description2 = data[attr].description2
        contactUs = data[attr]['contact-us']

        main.innerHTML = `
            <div class="main__text text">
                <h1 class="text__item">${title}</h1>
                <p class="text__item">${description1}</p>
                <p class="text__item">${description2}</p>
            </div>
            <div class="main__image">
                <img src="images/building.png" alt="Building">
            </div>
        `

        footerText.innerHTML = `
            <h2 class="footer__text">${contactUs}</h2>
            <ul class="contact__links links">
                <li class="links__item">
                    <i class="fa-solid fa-phone"></i>
                    <a href="tel:+420728168411">+420728168411</a>
                </li>
                <li class="links__item">
                    <i class="fa-solid fa-envelope"></i>
                    <a href="mailto:obchod@margotrade.cz ">obchod@margotrade.cz</a>
                </li>
                <li class="links__item">
                    <i class="fa-solid fa-location-dot"></i>
                    <a href="#">Sovová stezka 470/1 360 01, Karlovy Vary<br>IČO: 044 68 520</a>
                </li>
            </ul>
        `
    })
})
