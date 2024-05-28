const main = document.querySelector("#main");
const about = document.querySelector("#about");
const work = document.querySelector("#work");
const source = document.querySelector("#source");

function mainStart(){
    main.style.display="block";
    about.style.display="none";
    work.style.display="none";
    source.style.display="none";
}

function aboutStart(){
    main.style.display="none";
    about.style.display="block";
    work.style.display="none";
    source.style.display="none";
}

function workStart(){
    main.style.display="none";
    about.style.display="none";
    work.style.display="block";
    source.style.display="none";
}

function sourceStart(){
    main.style.display="none";
    about.style.display="none";
    work.style.display="none";
    source.style.display="block";

}