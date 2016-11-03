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

console.log('personnage1_nom', personnage1_nom); // Aragorn
console.log('personnage1_age', personnage1_age); // 85
console.log('personnage1_estUnGentil', personnage1_estUnGentil); // true
console.log('personnage1_armes', personnage1_armes); // ["Durandil", "Narsil", "Sabitt"]
console.log('personnage1_attaquer', personnage1_attaquer); // function() {...

// Bien. Voyons l'usage de l'opérateur 'typeof', qui permet de...
// (roulement de tambour)...
// donner le type d'une variable, sous forme de string (valeur entre guillemets) :

console.log('typeof personnage1_nom', typeof personnage1_nom); // "string"
console.log('typeof personnage1_age', typeof personnage1_age); // "number"
console.log('typeof personnage1_estUnGentil', typeof personnage1_estUnGentil); // "boolean"
console.log('typeof personnage1_armes', typeof personnage1_armes); // "object"
console.log('typeof personnage1_attaquer', typeof personnage1_attaquer); // "function"

// regardons à présent comment accéder aux différentes armes :
console.log('personnage1_armes[0]', personnage1_armes[0]); // "Durandil"
console.log('personnage1_armes[1]', personnage1_armes[1]); // "Narsil"
console.log('personnage1_armes[2]', personnage1_armes[2]); // "Sabitt"

// et on peut utiliser typeof comme plus haut :
console.log('typeof personnage1_armes[1]', typeof personnage1_armes[1]); // "string"
console.log('typeof personnage1_armes[0]', typeof personnage1_armes[0]); // "string"
console.log('typeof personnage1_armes[2]', typeof personnage1_armes[2]); // "string"


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
console.log('personnage1_age', personnage1_age); // 85
// ici, on veut imprimer 'combien vaut l'age d'Aragorn plus un ?'
console.log('personnage1_age + 1', personnage1_age + 1); // 86
// ...mais ça ne change pas l'age de ce dernier :
console.log('personnage1_age', personnage1_age); // 85
// Si on veut le changer, il faut assigner une nouvelle valeur à celui-ci :
personnage1_age = personnage1_age + 1;
// maintenant seulement Aragorn a 86 ans.
console.log('personnage1_age', personnage1_age); // 86
// Faisons vieillir notre numénorien favori :
personnage1_age = personnage1_age + 10;
console.log('personnage1_age', personnage1_age); // 96
personnage1_age += 10; // on incrémente de 10
console.log('personnage1_age', personnage1_age); // 106
personnage1_age++; // on incrémente (quand un programmeur parle, s'il ne précise pas de combien on incrémente, cela signifie qu'on ajoute 1)
console.log('personnage1_age', personnage1_age); // 107
++personnage1_age; // on incrémente encore.
console.log('personnage1_age', personnage1_age); // 108
// "comment ça... ? ++bidule et bidule++ veulent dire exactement la même chose ? C'est pas un peu redondant ?", pourriez-vous me dire.
// Et bien en fait, il y a une petite nuance que l'on va éclairer tout de suite :
console.log('personnage1_age', personnage1_age); // 108
console.log('personnage1_age++', personnage1_age++); // 108
console.log('personnage1_age', personnage1_age); // 109
// Quand on utilise bidule++, cela signifie qu'on fait les choses dans un certain ordre :
// d'abord on récupère la valeur de la variable et seulement après l'avoir récupérée, on incrémente.
// Alors que ++bidule va incrémenter la variable avant de rendre sa valeur. Voyons ça :
console.log('personnage1_age', personnage1_age); // 109
console.log('++personnage1_age', ++personnage1_age); // 110
console.log('personnage1_age', personnage1_age); // 110
// Si vous ne pigez pas la différence, ce n'est pas non plus très grave, cette distinction n'est que rarement décisive.
// Notez que l'opérateur + permet également de coller un string à un autre :
console.log('Bonjour Monsieur' + ' Anderson'); // on appelle ça une concaténation. verbe : concaténer. Opération très importante, car très courante.

//      Les autres opérateurs arithmétiques
console.log('3 - 4', 3 - 4); // -1
console.log('3 + -4', 3 + -4); // -1
console.log('3 * 4', 3 * 4); // 12
console.log('1 / 2', 1 / 2); // 0.5
console.log('4 ** 2', 4 ** 2); // 16 (4 puissance 2), ne fonctionne que sur les navigateurs qui implémente cette nouvelle opération
console.log('4 ** 3', 4 ** 3); // 64 (4 puissance 3), idem
console.log('12 % 4', 12 % 4); // 0 (reste de la division entière de 12 par 4)
console.log('13 % 4', 13 % 4); // 1

//      Les opérateurs logiques OU (||), ET (&&), et NON (!)
/*
&& (ET) rend vrai si et seulement si les expressions de droite et de gauche sont vraies.
|| (OU) rend vrai si au moins une des expressions de droite et de gauche est vraie.
*/
console.log('true && true', true && true); // true
console.log('true && false', true && false); // false
console.log('true || true', true || true); // true
console.log('true || false', true || false); // true
console.log('!true', !true); // false
console.log('!false', !false); // true

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
console.log('Math.floor(10.7)', Math.floor(10.7)); // 10 // arrondit à l'entier inférieur
console.log('Math.ceil(10.7)', Math.ceil(10.7)); // 11 // arrondit à l'entier supérieur
console.log('Math.round(10.7)', Math.round(10.7)); // 11 // arrondit à l'entier le plus proche
console.log('Math.round(10.5)', Math.round(10.5)); // 11 // arrondit à l'entier supérieur si on est à mi-chemin
console.log('Math.round(10.1)', Math.round(10.1)); // 10
console.log('Math.sqrt(16)', Math.sqrt(16)); // 4 (racine carrée)
console.log('16 ** .5', 16 ** .5); // 4 (racine carrée)
console.log('Math.random()', Math.random()); // rend un nombre au hasard situé entre 0 et 1


                                                                                /* PARTIE 4 : LES FONCTIONS */

console.log('fin de la partie ' + numéroPartie++ +'\n\n\n\t\t\tPartie ' + numéroPartie + ' : les fonctions');
/*
Une fonction est un morceau de code qui est exécuté sur commande.
Observons la syntaxe d'une fonction et le vocabulaire associé :
*/
var imprimerCarre = function(nombre) { // le nom de la fonction est imprimerCarre
    // , elle a un paramère qui s'appelle 'nombre' cela signie
    // que dans le corps de la fonction (la partie située entre les accolades),
    // il y a une variable appelée 'nombre' à laquelle on peut accéder.
    console.log(nombre * nombre); // imprime nombre élevé au carré
}

// imaginons qu'Aragorn ait dix pièces d'or
var personnage1_argent = 10;
// et qu'il gagne un pari avec Gimli
// et celui-ci doit lui verser 10**2 pièces.
personnage1_argent = personnage1_argent + imprimerCarre(10);
console.log('personnage1_argent', personnage1_argent); // NaN (Not a Number)
/*
Quel est donc le problème ici ?
eh bien, le problème est que la fonction imprimerCarre
ne fait QUE écrire dans la console le nombre fourni
en paramère, élevé au carré... Ce qu'il faut, c'est
que la fonction RENVOIE le résultat de l'opération,
pas qu'elle l'écrive à l'écran. On fait ça avec le mot-clé 'return' :
*/

var calculerCarre = function(nombre) {
    return nombre * nombre;
}
personnage1_argent = 10; // on réinitialise le flouze d'Aragorn.
personnage1_argent += calculerCarre(10);
console.log('personnage1_argent', personnage1_argent); // 110, c'est bon !

/*
On verra bien d'autres choses sur les fonctions, mais je voudrais vous
expliquer le concept d'objet avant. Depuis tout à l'heure, nous
faisons face à un problème : on a créé tout plein de variables.
Petit récapitulatif des variables créées :
personnage1_nom
personnage1_age
personnage1_estUnGentil
personnage1_armes
personnage1_attaquer
numéroPartie
a
imprimerCarre
calculerCarre

Ça n'en fait pas tant que ça, mais ça pose deux problèmes :
1) si on ne fait pas attention, à un moment, on pourrait
créer une variable du même nom qu'une précédémment déclarée
et ça écraserait la valeur, ça ferait des bugs, et on préfère éviter
2) ce serait quand même plus pratique si l'on pouvait regrouper
toutes les variables qui concernent Aragorn.
3) si on crée une dizaine de personnage, ce sera très vite un
bordel sans nom

Pour résoudre ce problème, nous allons créer une nouvelle variable,
que l'on nommera aragorn (sans la majuscule, parce que, par convention,
on ne met jamais de majuscule à la première lettre d'une variable)

Nous pourrions les regrouper toutes les caractéristiques
d'Aragorn dans un seul et même tableau, de la façon suivante :
*/
var aragornTableau1 = ['Aragorn', 85, true, ['Durandil', 'Narsil', 'Sabitt'], function() {console.log('Aragorn attaque avec fougue')}];
// notez bien cette façon de choisir les minuscules et les majuscules.
// on commence par une minuscule et comme on ne peut pas mettre d'espace
// dans un nom de variable, on met une majuscule à chaque début de nouveau
// mot après le premier. C'est ce qu'on appelle le camelCase.
console.log('aragornTableau1', aragornTableau1);

/*
Mais ce n'est pas pratique, parce que, en regardant la ligne précédente,
on ne sait pas nécéssairement à quoi correspond 85 (c'est sa taille, son age, son poids ?), ou true.
Le programmeur qui arrive sur le projet devrait alors savoir que,
par convention, la case n°0 du tableau est dédiée au nom du personnage,
la case n°1 est dédiée à sa age, et ainsi de suite.
Comment résoudre ce problème, uniquement avec des tableaux ?
On pourrait faire la chose suivante :
*/
var aragorn_tableau2 = [['nom', 'Aragorn'], ['age', 85], ['estUnGentil', true], ['armes', ['Durandil', 'Narsil', 'Sabitt']], ['attaquer', function() {console.log('Aragorn attaque en rigolant')}]];
/*
Mais admettons-le, ce n'est pas vraiment pratique non plus...
Imaginez-vous : si vous voulez accéder à l'age d'Aragorn, il faudrait écrire :
*/
console.log('aragorn_tableau2[0][1]', aragorn_tableau2[0][1]);
/*
Et si jamais l'ordre des propriétés change, il faudrait changer
toutes les lignes où l'on accède aux propriétés... Bref, un enfer.

C'est pour cela que les Objets viennent à notre rescousse :
*/
var aragornObjet = {
    nom: 'Aragorn',
    age: 85,
    estUnGentil/* ou ici aussi, même si c'est une très mauvaise pratique car ça empêche la lisibilité du code */: true,
    armes: ['Durandil', 'Narsil', 'Sabitt'],
    attaquer: function() {
        console.log('Aragorn attaque avec nonchalence');
    },
    argent: 100
};

/*
Super ! Nous avons quelque chose qui est aisément lisible !
Observons la syntaxe d'un peu plus près :
1) la déclaration d'un objet est délimitée par des accolades.
2) entre les accolades, il y a une liste d'assignations de
propriétés, délimitées les unes des autres par des virgules.
3) par convention, on met une propriété par ligne (même si ce n'est pas obligé)
Chouette ! mais comment fait-on pour accéder à l'age d'Aragorn ?
*/

console.log('aragornObjet.age', aragornObjet.age); // 85
console.log('++(aragornObjet.age)', ++(aragornObjet.age)); // 86
aragornObjet.argent += 50; // 150

/*
Maintenant, revenons à nos fonctions.
Et si on créait une fonction qui crée un personnage ?
*/

var creerPersonnage = function(nom, age, estUnGentil, armes) {
    var résultat = {
        nom: nom,
        age: age,
        attaquer: function() {
            console.log(nom + ' attaque OKLM');
        },
        argent: 50,
        experience: 0 // on considère que tous les personnages commencent avec 0 expérience
    };

    return résultat;
};

var gimli = creerPersonnage('Gimli', 220, true, ['grosse hache']);
console.log(gimli);
// on va assigner à la variable aragornObjet une nouvelle valeur, en utilisant notre fonction :
aragornObjet = creerPersonnage('Aragorn', 85, true, ["Narsil", "Durandil"]);

// faisons attaquer nos deux personnages
gimli.attaquer(); // Gimli attaque OKLM
aragornObjet.attaquer(); // Aragorn attaque OKLM
aragornObjet.nom = "Grand-Pas";
aragornObjet.attaquer(); // Aragorn attaque OKLM

/*
Comment comment ? cela ne devrait-il pas afficher 'Grand-Pas attaque OKLM' ???
Analysons la cause de tout cela :
var creerPersonnage = function(nom, age, estUnGentil, armes) {
    var résultat = {
        ...
        attaquer: function() {
            console.log(nom + ' attaque OKLM');
            // 'nom' FAIT REFERENCE AU NOM QUE LE PERSONNAGE AVAIT
            // LORSQUE LA FONCTION DE CREATION DE PERSONNAGE A
            // ÉTÉ INVOQUEE, et non à la valeur de l'objet
            // au moment où on invoque la fonction attaquer()
        },
        ...
    };

    return résultat;
};
n'hésitez pas à mettre en pause le debugger de chrome dans la fonction attaquer
pour bien comprendre ce qui est en jeu, c'est important.

Pour faire référence à l'objet qui possède la fonction en cours d'invocation,
il faut utiliser le mot-clé this. Nous allons d'abord l'utiliser dans un objet
général, puis nous allons intégrer ce changement à la fonction.
*/
var gandalf = {
    nom: 'Gandalf le Gris',
    attaquer: function() {
        console.log(this.nom + ' lance un sort niveau 1');
    }
};
gandalf.attaquer(); // Gandalf le Gris lance un sort niveau 1
gandalf.nom = "Gandalf le Blanc";
gandalf.attaquer(); // Gandalf le Blanc lance un sort niveau 1

/*
Chouette, ça marche ! Assignons une nouvelle fonction à creerPersonnage :
*/

creerPersonnage = function(nom, age, estUnGentil, armes) {
    var résultat = {
        nom: nom,
        age: age,
        attaquer: function() {
            console.log(this.nom + ' attaque OKLM'); // this fait référence à l'objet lui-même.
            // notez que pour résoudre le problème, on aurait aussi pu écrire : console.log(résultat.nom + '...
            // mais c'est différent
        },
        argent: 50,
        experience: 0 // on considère que tous les personnages commencent avec 0 expérience
    };

    return résultat;
};

var legolas = creerPersonnage('Legolas', 1200, true, ['Bandedur']);
legolas.attaquer(); // Legolas lance un sort niveau 1
legolas.nom = "Benjamin Button";
legolas.attaquer(); // Benjamin Button le Blanc lance un sort niveau 1

/*
Il y a un truc que je ne vous ai pas dit.
Jusqu'à présent, nous n'avons utilisé que des fonctions anonymes.
Qu'est-ce qu'une fonction anonyme ? C'est une fonction qui n'a pas
de nom. C'est à dire que à chaque fois, nous déclarions une variable qui, elle, a un nom,
et nous mettions une fonction anonyme dedans. Bien, me dites-vous, mais alors à
quoi ressemble une fonction nommée alors ? En voici une :
*/
function calculerCube(nombre) {
    return nombre ** 3;
}
console.log(calculerCube(3)); // 27

/*
Et pourquoi est-ce important ?
Parce que si la fonction que l'on définit a besoin de s'appeler elle-même,
on ne peut pas le faire avec une fonction anonyme, parce que comme elle n'a
pas de nom et que la variable à qui on l'assigne n'a pas encore de valeur,
la fonction ne peut s'appeler elle-même. Exemple :
*/
// décommentez la fonction suivante pour essayer, ça plantera :
// var factorielle = function(nombre) {
//     if (nombre < 1) {
//         return 1;
//     } else {
//         return nombre * factorielle(nombre - 1);
//     }
// }
/* tout ça parce que javascript va d'abord devoir calculer ce qu'il y a à droite
 du signe = avant de pouvoir le mettre dans la variable située à gauche.*/

/*
En revanche, si la fonction est définie ainsi :
*/
function factorielle2(nombre) {
    if (nombre < 1) {
        return 1;
    } else {
        return nombre * factorielle2(nombre - 1);
    }
}
/*
..., on dit qu'elle est 'hoistée', ce qui signifie qu'elle est disponible
et utilisable dans le code avant même l'endroit où elle est déclarée. Par
conséquent, elle sera également disponible à elle-même quand elle sera exécutée.
Encore une fois, c'est un concept un peu difficile à appréhender, mais on finit
généralement par comprendre.
Si on tient vraiment à mettre la fonction dans une variable, on peut faire :
*/
var fac = function factorielle3(nombre) {
    if (nombre < 1) {
        return 1;
    } else {
        return nombre * factorielle2(nombre - 1);
    }
}

/*
Et là aussi ça fonctionne, mais la fonction 'factorielle3' n'est pas disponible
dans "l'espace global", c'est-à-dire que vous n'y avez pas accès ailleurs que dans elle-même.
*/

fac(3); // 6
// factorielle3(3); // Uncaught ReferenceError: factorielle3 is not defined


/*
Quand on déclare une variable avec le mot-clé var, cette variable est immédiatement
accessible dans l'espace global, mais vaut 'undefined' tant qu'on n'a pas atteint
la ligne de code qui lui assigne une valeur :
*/
console.log(toto); // undefined
var toto = "toto";
console.log(toto); // toto

/*
c'est comme si on avait fait la chose suivante :
*/
var toto2;
console.log(toto2); // undefined
toto2 = "toto2";
console.log(toto2); // toto2

/*
La variable toto est donc hoistée avec comme valeur undefined jusqu'à temps qu'on
daigne lui assigner une vraie valeur. En fait, quand on déclare une variable de façon habituelle, c'est comme
si on faisait :
var toto3;
toto3 = "toto3";

En revanche, comme je l'ai dit, pour les fonctions nommées, elles sont hoistées
avec leur vraie valeur dès le début :
*/
console.log(toto4()); // toto4
function toto4() {
    return "toto4";
}


                                                                                /* PARTIE 5 : LES ESPACES DE NOM */

console.log(`fin de la partie ${numéroPartie++}\n\n\n\t\t\tPartie ${numéroPartie} : les espaces de nom`);
/*
Que se passe-t-il dans la situation suivante ?
*/
var poisson = "baleine";
function bidouille1(poisson) {
    poisson = "saumon";
}
bidouille1();
console.log('bidouille1 : ', poisson); // baleine

function bidouille2() {
    var poisson = "hareng";
}
bidouille2();
console.log('bidouille2 : ', poisson); // baleine

function bidouille3() {
    poisson = "hareng";
}
bidouille3();
console.log('bidouille3 : ', poisson); // baleine

/*
Que peut-on en conclure ?
Que chaque fonction a son propre "espace" (aussi appelé "environnement" ou "espace de nom"). Et que quand on cherche à
accéder à la valeur d'une variable à un endroit, le moteur javascript va d'abord chercher cette valeur
dans l'espace actuel, puis s'il ne la trouve pas dans celui-ci, il va la chercher dans l'espace qui se trouve
un niveau en-dessous. La fonction bidouille1 a son propre espace, et il y a un poisson dedans. Donc pas
besoin d'aller chercher plus loin. Idem pour la fonction bidouille2. En revanche, aucun poisson n'est déclaré
dans bidouille3 (ni en paramère, ni en tant que variable) donc le moteur affecte le premier poisson à portée,
qui se trouve en-dehors de bidouille3.

Et maintenant, la question piège : que se passe-t-il dans le cas suivant ?
*/
poisson = "baleine";
function bidouille4() {
    poisson = "hareng";
    var poisson;
}
console.log('bidouille4 : ', poisson);

/*
Quand le moteur arrive dans bidouille4, il voit qu'il y a un poisson quelque part dans le corps de la fonction,
il hoiste donc poisson en lui donnant la valeur provisoire undefined. Quand il arrive à `poisson = "hareng"`,
il affecte la valeur "hareng" au poisson du corps de la fonction. Ce qui se passe dans la fonction reste dans
la fonction et le poisson de l'espace global n'est donc pas affecté.
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
