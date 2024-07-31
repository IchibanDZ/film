// 

// async function afficherFilms() {
//     const reponse = await fetch("https://api.npoint.io/b63dccb6f75ee23dcf45");
//     const filmographie = await reponse.json();
//     filmographie.films.map((film)=>{

//     })
// }

// async function afficherDuree() {
//     const reponse = await fetch("https://api.npoint.io/b63dccb6f75ee23dcf45");
//     const filmographie = await reponse.json();
//     filmographie.films.map((film)=>{

//     })
// }
// let app = document.querySelector('.app')

// async function afficherMiniature() {
//   const reponse = await fetch("https://api.npoint.io/b63dccb6f75ee23dcf45");
//   const filmographie = await reponse.json();
//   filmographie.films.map((film) => {
//     let pic = document.createElement("img");
//     pic.src = film.miniature;
//     let title = document.createElement("h2");
//     title.innerText = film.titre;
//     let duree = document.createElement("h3");
//     duree.innerText = film.duree;
//     let synopsis = document.createElement("h4");
//     synopsis.innerText = film.synopsis;
//     let realisateur = document.createElement("h5");
//     realisateur.innerText = film.realisateur;
//     let Years = document.createElement("h6");
//     Years.innerText = film.annee_de_sortie;

//     app.appendChild(realisateur)
//     app.appendChild(annee_de_sortie)
//     app.appendChild(Years)
//     app.appendChild(synopsis)
//     app.appendChild(pic);
//     app.appendChild(title);
//     app.appendChild(duree)
//   });
// }

// afficherMiniature();

let app = document.querySelector('.app');

async function afficherMiniature() {
  const reponse = await fetch("https://api.npoint.io/b63dccb6f75ee23dcf45");
  const filmographie = await reponse.json();
  filmographie.films.map((film) => {
    let container = document.createElement('div');

    let pic = document.createElement("img");
    pic.src = film.miniature;
    
    let title = document.createElement("h2");
    title.innerText = film.titre;
    
    let duree = document.createElement("h3");
    duree.innerText = film.duree;
    
    let synopsis = document.createElement("h4");
    synopsis.innerText = film.synopsis;
    
    let realisateur = document.createElement("h5");
    realisateur.innerText = film.realisateur;
    
    let years = document.createElement("h6");
    years.innerText = film.annee_de_sortie;

    container.appendChild(pic);
    container.appendChild(title);
    container.appendChild(duree);
    container.appendChild(synopsis);
    container.appendChild(realisateur);
    container.appendChild(years);
    
    app.appendChild(container);
  });
}

afficherMiniature();
