const target = document.getElementById('target');
// stockage des mots que l'on veut afficher
let array = ["développeuse", "créative"];
//Indique le mot sur lequel l'on se trouve dans le taleau
let wordIndex = 0;
//Indique sur quelle lettre du mot l'on se trouve
let letterIndex = 0;



//Fonction qui permet de créer chaque lettre
const createLetter = () =>
{
    //Création d'un span qui sera l'enfant de 'letter'
    const letter = document.createElement("span");
    target.appendChild(letter);

    //CSS pour chaque lettre
    letter.classList.add('letter');
    letter.style.opacity = '0';
    letter.style.animation = 'anim 5s ease forwards';

    //Affichage lettre par lettre du mot
    letter.textContent = array[wordIndex][letterIndex];

    //Efface les lettres à la fin de l'affichage
    setTimeout(()=>
    {
        letter.remove();
    },2000);
};


const loop = () =>
{
    //Création d'une lettre toutes les 8centièmes de secondes
    setTimeout(() =>
    {
        //Lorsque l'on arrive au dernier mot du tableau, retour au premier mot
        if (wordIndex>= array.length)
        {
            wordIndex = 0;
            letterIndex=0;
            loop();
        }

        /*Lorsque la lettre sur laquelle l'on se trouve n'est pas la dernière du mot en cours
        Création de la lettre suivante
        On incrémente de 1 dans le tableau des lettres pour prendre la lettre suivante
        on appel à nouveau le loop*/
        else if (letterIndex < array[wordIndex].length)
        {
            createLetter();
            letterIndex++;
            loop();
        }

        /*Si on ne rentre pas dans les conditions ci-dessus
        On passe au mot suivant
        On remet le compteur de lettre à 0 pour arriver sur la première lettre du mot suivant
        On appel à nouveau le loop dans un 'setTimeout' pour laisser le temps au mot précédent de s'afficher et de disparître*/
        else
        {
            wordIndex++;
            letterIndex = 0;
            setTimeout(() =>
            {
                loop();
            },2000);
        }
    },30);

};

loop();