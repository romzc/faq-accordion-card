/** Get all elementos with accordion class name <div> */
const togleParagraph = document.getElementsByClassName('accordion');


const closeAll = ( list) => {
    for ( let element of list ) {

        element.children[0].children[0].classList.remove('focus');
        element.children[0].children[1].classList.remove('close');
        element.children[1].classList.remove('active');

    }
};



const accordion = ( list ) => {

    for( let element of list  ) {
        element.children[0].addEventListener('click', ( ) =>{ 
            /** icon arrow down rotate 180 degrease */

            let auxFocus = element.children[0].children[0];
            let auxClose = element.children[0].children[1];
            let auxActive = element.children[1];

            closeAll(list);

            auxFocus.classList.toggle('focus');
            auxClose.classList.toggle('close');
            
            /** makes the p tag visible  */
            auxActive.classList.toggle('active');
        });
    }
}


accordion(togleParagraph);