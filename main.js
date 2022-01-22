let lightMode = true;
const bt = 'rgb(70, 70, 70)';

if (document.cookie == 'dark'){
    switchMode();
}

function switchMode(){
    lightMode = !lightMode;
    if (lightMode){
        document.cookie = 'light';
    } else {
        document.cookie = 'dark';
    }
    const el1 = document.getElementsByTagName('html')[0].style;
    const el2 = document.getElementsByTagName('main')[0].style;
    let skdes = document.querySelectorAll('.skdes');
    // const gh = document.getElementById('ghicon');

    if (lightMode){
        el1.backgroundColor = 'white';
        el2.backgroundColor = 'white';

        el2.color = 'black';

        for (let el of skdes){
            el.style.color = 'black';
        }

        // gh.src = './img/github.png';
        // gh.style.width = '75px';
    } else {
        el1.backgroundColor = bt;
        el2.backgroundColor = bt;

        el2.color = 'white';
        for (let el of skdes){
            el.style.color = 'white';
        }
        // gh.src = './img/ghw.png';
        // gh.style.width = '90px';
    }
}
