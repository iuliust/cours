var boutonAttaquer,
    boutonVaisselle,
    boutonGobelins,
    boutonCâlin,
    pJournalIntime,
    boutonTravailler;

class Personne {
    /*
    nom: string
    age: number
    genre: string
    classe: string
    armes: string[]
    localisation: Localisation
    race: string
    caractéristiques: Objet {
        force: number,
        dextérité: number,
        constitution: number,
        intelligence: number,
        charisme: number,
        sagesse: number
    }
    */
    constructor(nom, age, genre, classe, armes, localisation, race, caractéristiques) {
        this.expérience = 0;
        this.niveau = 1;

        this.nom = nom;
        this.age = age;
        this.genre = genre;
        this.classe = classe;
        this.armes = armes;
        this.localisation = localisation;
        this.race = race;
        this.caractéristiques = caractéristiques;

        this._pv = 100;
        this.corvées = [];
        this.htmlElement = null;
    }

    get pv() {
        return this._pv;
    }

    set pv(valeur) {
        this._pv = valeur;
        this.htmlElement.textContent = `${this.nom} (${valeur})`;
        return valeur;
    }

    attaquer(ennemi) {
        console.log(this.nom, 'attaque', ennemi.nom, 'avec', this.armes[0]);
        ennemi.pv -= this.caractéristiques.force;
        if (ennemi.pv <= 0) {
            console.log(this.nom, 'a tué', ennemi.nom);
            this.expérience += 10;
        }
    }

    ajouterCorvée(corvée) {
        this.corvées.push(corvée);
    }

    travailler() {
        for (let corvée of this.corvées) {
            corvée();
        }
    }
}

class Partie {
    constructor(aventuriers, ennemis, groupeAventuriersElement, groupeEnnemisElement) {
        this.aventuriers = aventuriers;
        this.ennemis = ennemis;
        this.groupeAventuriersElement = groupeAventuriersElement;
        this.groupeEnnemisElement = groupeEnnemisElement;

        this.partieHtmlElement = document.querySelector("#partie");

        for (let aventurier of this.aventuriers) {
            let aventurierElement = document.createElement('li');
            aventurierElement.textContent = `${aventurier.nom} (${aventurier.pv})`;
            this.groupeAventuriersElement.appendChild(aventurierElement);
            aventurier.htmlElement = aventurierElement;
        }

        for (let ennemi of this.ennemis) {
            let ennemiElement = document.createElement('li');
            ennemiElement.textContent = `${ennemi.nom} (${ennemi.pv})`;
            this.groupeEnnemisElement.appendChild(ennemiElement);
            ennemi.htmlElement = ennemiElement;
        }
    }
}

var aragorn = new Personne(
        'Aragorn',
        85,
        'm',
        'guerrier',
        ['Durandil', 'Narsil'],
        {x: 0, y: 0},
        'numénorien',
        {
            force: 16,
            dextérité: 14,
            constitution: 12,
            intelligence: 13,
            charisme: 18,
            sagesse: 13
        }
    );
var chefOrque = new Personne(
        'Krazgül',
        13,
        'm',
        'barbare',
        ['sabre'],
        {x: 1, y: 0},
        'orque',
        {
            force: 16,
            dextérité: 8,
            constitution: 15,
            intelligence: 7,
            charisme: 8,
            sagesse: 6
        }
    );

var partie = new Partie([aragorn], [chefOrque], document.querySelector('#aventuriers'), document.querySelector('#méchants'));

function faireAttaquerAragorn() {
    aragorn.attaquer(chefOrque);
}

function faireTravaillerAragorn() {
    aragorn.travailler();
}

function trouverLesElementsHtmlEtLesAffecterAuxVariablesCorrespondantes() {
    /*
    document.querySelector(sélecteur) parcourt le document à
    la recherche du premier élément qui satisfera le sélecteur
    CSS fourni en paramètre sous forme de string. Ici, on trouve
    les éléments grâce à leur ID.
    */
    boutonAttaquer = document.querySelector('#ara_attaquer');

    boutonVaisselle = document.querySelector('#ara_vaisselle');
    boutonGobelins = document.querySelector('#ara_gobelins');
    boutonCâlin = document.querySelector('#ara_câlin');

    boutonTravailler = document.querySelector('#ara_travailler');

    pJournalIntime = document.querySelector('#ara_journal_intime');
}

function attacherLesFonctionsDeRappelAuxElementsCorrespondants() {
    trouverLesElementsHtmlEtLesAffecterAuxVariablesCorrespondantes();

    // On définit les corvées qu'Aragorn exécutera au moment voulu.
    function faireLaVaisselle() {
        pJournalIntime.innerHTML += ('je fais la vaisselle<br>');
    }
    function buterLesGobelins() {
        pJournalIntime.innerHTML += ('je vais buter les gobelins du fond du jardin<br>');
    }
    function faireUnCâlin() {
        pJournalIntime.innerHTML += ('je vais <s>mettre une pétée</s> <i>faire un calin</i> à Arwen<br>');
    }

    // on définit les fonctions de rappel
    function boutonVaisselleCallback() {
        aragorn.ajouterCorvée(faireLaVaisselle);
    }
    function boutonGobelinsCallback() {
        aragorn.ajouterCorvée(buterLesGobelins);
    }
    function boutonCâlinCallback() {
        aragorn.ajouterCorvée(faireUnCâlin);
    }

    // on attache les fonctions de rappel aux boutons préalablement définis
    boutonAttaquer.addEventListener('click', () => aragorn.attaquer(chefOrque), false);
    boutonVaisselle.addEventListener('click', boutonVaisselleCallback , false);
    boutonGobelins.addEventListener('click', boutonGobelinsCallback , false);
    boutonCâlin.addEventListener('click', boutonCâlinCallback, false);

    boutonTravailler.addEventListener('click', faireTravaillerAragorn, false);
}
attacherLesFonctionsDeRappelAuxElementsCorrespondants();


// faireAttaquerAragorn();
// boutonAttaquer.addEventListener('click', function(){ aragorn.attaquer(); }, false);
// boutonAttaquer.addEventListener('click', faireAttaquerAragorn, false);
// boutonAttaquer.addEventListener('mouseover', faireAttaquerAragorn, false);
