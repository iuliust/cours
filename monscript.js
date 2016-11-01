console.log('Tuto javascript');

                                                                                /* PARTIE 1 : LES TYPES */
console.log('\t\t\tpartie 1 : les types'); // \t imprime une tabulation

/*
 - il y a plusieurs types de valeurs possibles :
 1) les types 'primitifs'
 - string : pour du texte
 - number : pour n'importe quel nombre
 - boolean : pour représenter si quelque chose est vrai ou faux
 - regex : pour trouver du texte rapidement dans un texte... On ne les abordera pas avant un moment, ça ne sert que très rarement.
 2) les autres types
 - object : pour représenter quelque chose qui a des propriétés, chaque propriété a un nom et une valeur associée. Cette valeur est de l'un des types cités ici.
 - array (tableau): pour représenter une liste ordonnée de valeurs, chacune étant de l'un des types cités ici.
 - function
*/

var personnage1_nom = 'Aragorn';
var personnage1_age = 85;
var personnage1_estUnGentil = true;
var personnage1_armes = ['Durandil', 'Narsil', 'Sabitt'];
var personnage1_attaquer = function() {
    console.log(personnage1_nom, 'attaque avec fureur');
}

console.log(personnage1_nom); // "Aragorn"
console.log(personnage1_age); // 85
console.log(personnage1_estUnGentil); // true
console.log(personnage1_armes); // ["Durandil", "Narsil", "Sabitt"]
console.log(personnage1_attaquer); // function() {...

// Bien. Voyons l'usage de l'opérateur 'typeof', qui permet de...
// (roulement de tambour)...
// donner le type d'une variable, sous forme de string (valeur entre guillemets) :

console.log(typeof personnage1_nom); // "string"
console.log(typeof personnage1_age); // "number"
console.log(typeof personnage1_estUnGentil); // "boolean"
console.log(typeof personnage1_armes); // "object"

// regardons à présent comment accéder aux différentes armes :
console.log(personnage1_armes[0]); // "Durandil"
console.log(personnage1_armes[1]); // "Narsil"
console.log(personnage1_armes[2]); // "Sabitt"

// et on peut utiliser typeof comme plus haut :
console.log(typeof personnage1_armes[1]); // "string"
console.log(typeof personnage1_armes[0]); // "string"
console.log(typeof personnage1_armes[2]); // "string"


                                                                                /* PARTIE 2 : LES COMMENTAIRES */
var numéroPartie = 2;
console.log('fin de la partie 1\n\n\n\t\t\tPartie', numéroPartie, ": les commentaires"); // \n dans un string signifie "retour à la ligne"


// console.log('coucou');
// on peut remarquer que la ligne précédente n'est pas imprimée à l'écran.
// C'est parce que c'est un commentaire. On dit que ce code est 'commenté'.
// Les commentaires sont lus par la machine, mais ne sont ni interprétés, ni exécutés.
// Il y a deux types de commentaires :
// Quand on écrit '//', ce qui suit et qui se trouve sur la même ligne est 'commenté'.
// ce sont les commentaires 'inline'.
// Puis il y a les commentaires de type 'block', qu'on ouvre avec /* et que l'on ferme
// avec */. Jugez plutôt :
console.log('Jean a de longues', 'moustaches');
console.log('Jean a une superbe', //, 'moustaches');
'implantation capillaire');
console.log('Patrick a une énorme'/*, 'trique'*/, 'tête');

/* cela signifie également que l'on peut ainsi commenter
 sur plusieurs lignes.
*/ console.log('...en revanche, dès qu\'on écrit */, ce qui suit est exécuté !');




                                                                                /* PARTIE 3 : LES OPÉRATEURS */
numéroPartie = numéroPartie + 1 // numéroPartie = 3, maintenant.
console.log('fin de la partie 2\n\n\n\t\t\tPartie ' + numéroPartie + ' : les opérateurs');
// remarquez l'espace que j'ai insérée après Partie... parce que sinon,
// ça aurait écrit : 'Partie3'. Pensez à insérer des espaces quand on colle
// des strings les uns aux autres, c'est une erreur classique de débutant/d'étourderie

// LES ADDITIONS
console.log(personnage1_age); // 85
// ici, on veut imprimer 'combien vaut l'age d'Aragorn plus un ?'
console.log(personnage1_age + 1); // 86
// ...mais ça ne change pas l'age de ce dernier :
console.log(personnage1_age); // 85
// Si on veut le changer, il faut assigner une nouvelle valeur à celui-ci :
personnage1_age = personnage1_age + 1;
// maintenant seulement Aragorn a 86 ans.
console.log(personnage1_age); // 86
// Faisons vieillir notre numénorien favori :
personnage1_age = personnage1_age + 10;
console.log(personnage1_age); // 96
personnage1_age += 10; // on incrémente de 10
console.log(personnage1_age); // 106
personnage1_age++; // on incrémente (quand un programmeur parle, s'il ne précise pas de combien on incrémente, cela signifie qu'on ajoute 1)
console.log(personnage1_age); // 107
++personnage1_age; // on incrémente encore.
console.log(personnage1_age); // 108
// "comment ça... ? ++bidule et bidule++ veulent dire exactement la même chose ? C'est pas un peu redondant ?", pourriez-vous me dire.
// Et bien en fait, il y a une petite nuance que l'on va éclairer tout de suite :
console.log(personnage1_age); // 108
console.log(personnage1_age++); // 108
console.log(personnage1_age); // 109
// Quand on utilise bidule++, cela signifie qu'on fait les choses dans un certain ordre :
// d'abord on récupère la valeur de la variable et seulement après l'avoir récupérée, on incrémente.
// Alors que ++bidule va incrémenter la variable avant de rendre sa valeur. Voyons ça :
console.log(personnage1_age); // 109
console.log(++personnage1_age); // 110
console.log(personnage1_age); // 110
// Si vous ne pigez pas la différence, ce n'est pas non plus très grave, cette distinction n'est que rarement décisive.

//      Les autres opérateurs arithmétiques
console.log(3 - 4); // -1
console.log(3 + -4); // -1
console.log(3 * 4); // 12
console.log(1 / 2); // 0.5
console.log(4 ** 2); // 16 (4 puissance 2), ne fonctionne que sur les navigateurs qui implémente cette nouvelle opération
console.log(4 ** 3); // 64 (4 puissance 3), idem
console.log(12 % 4); // 0 (reste de la division entière de 12 par 4)
console.log(13 % 4); // 1

//      Les opérateurs logiques OU (||), ET (&&), et NON (!)
/*
&& (ET) rend vrai si et seulement si les expressions de droite et de gauche sont vraies.
|| (OU) rend vrai si au moins une des expressions de droite et de gauche est vraie.
*/
console.log(true && true); // true
console.log(true && false); // false
console.log(true || true); // true
console.log(true || false); // true
console.log(!true); // false
console.log(!false); // true

//      Les assignations
/*
 L'opérateur de base de l'assignation est le signe =
 On assigne à ce qui se trouve à gauche du = le résultat de l'expression située à sa droite :
*/
var a = 2;
console.log(a); // 2
a *= 10; // 20 cela est équivalent à : a = a * 10
console.log(a); // 20
a /= 4; // 5 équivaut à a = a * 4
console.log(a); // 5
a **= 3; // 125 <=> a = a ** 3
a %= 50; // 25 <=> a = a % 100 (reste de la division entière par 50)

//      Priorité des opérateurs
console.log(3 + 25 * 2); // 53, car la multiplication a priorité sur l'addition : 3 + (2 * 25)
// le ET (&&) prime sur le OU (||)
// le = a une très faible priorité.
// plus d'infos à la page suivante : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence

//      Quelques fonctions mathématiques
console.log(Math.floor(10.7)); // 10 // arrondit à l'entier inférieur
console.log(Math.ceil(10.7)); // 11 // arrondit à l'entier supérieur
console.log(Math.round(10.7)); // 11 // arrondit à l'entier le plus proche
console.log(Math.round(10.5)); // 11 // arrondit à l'entier supérieur si on est à mi-chemin
console.log(Math.round(10.1)); // 10
console.log(Math.sqrt(16)); // 4 (racine carrée)
console.log(16 ** .5); // 4 (racine carrée)
console.log(Math.random()); // rend un nombre au hasard situé entre 0 et 1



/*
Bon, maintenant, revenons à notre exemple de personnage.
On a déclaré une variable pour chacune de ses caractéristiques,
mais ce n'est pas bien pratique. D'une part, ça crée plein de
variables 'pour rien'. Ce serait mieux si toutes les caractéristiques
d'Aragorn étaient regroupées en une seule variable. Nous pourrions les
regrouper dans un seul et même tableau, de la façon suivante :
*/
var personnage1_tableau1 = ['Aragorn', 85, true, ['Durandil', 'Narsil', 'Sabitt']];
console.log(personnage1_tableau1);

/*
Mais ce n'est pas pratique, parce que, en regardant la ligne précédente,
on ne sait pas nécéssairement à quoi correspond 85, ou true.
Le programmeur qui arrive sur le projet devrait alors savoir que,
par convention, la case n°0 est dédiée au nom du personnage,
la case n°1 est dédiée à sa age, et ainsi de suite.
Comment résoudre ce problème, uniquement avec des tableaux ?
On pourrait faire la chose suivante :
*/
var personnage1_tableau2 = [['nom', 'Aragorn'], ['age', 85], ['estUnGentil', true], ['armes', ['Durandil', 'Narsil', 'Sabitt']]];
/*
Mais admettons-le, ce n'est pas vraiment pratique non plus...
C'est pour cela que les Objets viennent à notre rescousse :
*/
var personnage1_objet1 = {
    nom: 'Aragorn', // je peux mettre un commentaire ici OKLM
    age: 85,
    estUnGentil/* ou ici aussi, même si c'est une très mauvaise pratique */: true,
    armes: ['Durandil', 'Narsil', 'Sabitt']
};

/*
Super ! Nous avons quelque chose qui est aisément lisible !
Observons la syntaxe d'un peu plus près :
1) la déclaration d'un objet est délimitée par des accolades.
2) entre les accolades, il y a une liste d'assignations de
propriétés, délimitées les unes des autres par des virgules.
3) par convention, on met une propriété par ligne (mais ce n'est pas obligé)
*/














/*


var villeNom = 'Boiscommun';
var villePopulation = 5000;
console.log(villePopulation);

var boiscommun = {
    nom: 'Boiscommun',
    population: 5000
};

console.log(boiscommun);


var eleve = {
    nom: 'Ducobu',
    prenom: 'Bernard',
    notes: [2, 4, 2, 13, 4.5]
};
var eleve2 = {
    nom: 'Hebert',
    prenom: 'Patricia',
    notes: [18, 13, 8, 19, 15]
};

var classe = {
    niveau: 'CP',
    eleves: [eleve, eleve2]
};

var ecole = {
    adresse: '18 rue Riblette',
    ville: 'Paris',
    classes: [classe],
    proviseur: 'Jean Charles Totayx'
}

console.log(eleve);

var a = 1;
var b = 3;
var c = a + b;
a = 2;
var d = a / b;

var note = 2;

var mention = function(laNote) {
    if (laNote > 18) {
        console.log('félicitations du jury')
    } else if (laNote > 16) {
        console.log('excellent');
    } else if (laNote > 14) {
        console.log('très bien');
    } else if (laNote > 12) {
        console.log('bien');
    } else if (laNote > 10) {
        console.log('passable');
    } else {
        console.log('recalé');
    }
}


var calculerMoyenne = function(tableau) {
    var accumulateur = 0;
    for (var i = 0; i < tableau.length; i++) {
        accumulateur = accumulateur + tableau[i];
    }
    var resultat = accumulateur / tableau.length;
    return resultat;
}

var direCoucou = function() {
    console.log('coucou');
}

var moyenne = calculerMoyenne(eleve.notes);




class Personne {
    constructor(prenom, nom) {
        this.prenom = prenom;
        this.nom = nom;
    }
}

class Eleve extends Personne {
    constructor(prenom, nom, notes) {
        super(prenom, nom);
        this.notes = notes;
    }

    calculerMoyenne() {
        var accumulateur = 0;
        for (let note of this.notes) {
            accumulateur = accumulateur + note;
        }
        return accumulateur / this.notes.length;
    }
}

class Classe {
    constructor(maitresse, eleves) {
        this.maitresse = maitresse;
        this.eleves = eleves;
    }

    calculerMoyenne() {
        var accumulateur = 0;
        for (let eleve of this.eleves) {
            accumulateur = accumulateur + eleve.calculerMoyenne();
        }
        return accumulateur / this.notes.length;
    }
}

var eleve3 = new Eleve('Agnan', 'Touriquet', [15, 16, 13]);
var eleve4 = new Eleve('Amine', 'El Hachimi', [11, 10, 18]);
*/
