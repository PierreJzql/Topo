const colorRoad = {
    Orange : "#F39C12",
    Blanche : "#FFFFFF",
    Verte : "#52BE80",
    Violette : "#A569BD",
    Rouge : "#E74C3C",
    Rose : "#FA8DF3",
    Jaune : "#F4D03F",
    Bleue : "#3924D4",
    Noire : "#000000",
    Grise : "#8A898B"
}
console.log("Orange : #F39C12 =",colorRoad.Orange)
// console.log("Grise : #8A898B =",colorRoad.Grise)

// for(let key in colorRoad)
// console.log(key + ': ' + colorRoad[key]);


async function voieFlesselApi(){
const reponseApi = await fetch("../Data/Flessel.json");
const voiesFlessel = await reponseApi.json();

return voiesFlessel
}

function generateVoies (affichage) {
    for (let i = 0; i< affichage.length; i++){
        const voie = affichage[i];
        
        const sectionVoie = document.querySelector(".voieFlessel");
        const voieElement = document.createElement("article");
        voieElement.setAttribute("class","listeVoieFlessel")
        

        const imageVoie = document.createElement("img");
        imageVoie.src = "../Image/Climbing_pictogram.svg.png";
        // imageVoie.setAttribute("width","100px");
        

        const numVoie = document.createElement("p");
        numVoie.setAttribute("class","tittleVoie")
        numVoie.innerText= `Ligne n°${voie.ligne}`;
        // numVoie.style.fontSize= "2rem";
        // numVoie.style.fontWeight= "bold";


        sectionVoie.appendChild(voieElement);
        voieElement.appendChild(imageVoie);
        voieElement.appendChild(numVoie)

        for (let j=0 ; j<voie.voie.length ; j++)
        {
            const voieParam= voie.voie[j];
            // const couleur =  toString(voie.voie[j].color);
            const couleur =  voie.voie[j].color;

            let hex = colorRoad[couleur]
            
            // console.log("CL voie.voie[j] =",voie.voie[j].color)
        //    console.log("CL couleur = ",typeof couleur);
        //    console.log("CL colorRoad = ",colorRoad[couleur]);
           
        //    console.log("CL colorRoad.couleur = ",colorRoad[couleur]);

            const colorVoie = document.createElement("p");
            colorVoie.setAttribute("class","tittleVoie Color");
            colorVoie.innerHTML = voieParam.cotationNumber+voieParam.cotationLetter;
            // colorVoie.innerHTML = `<ul></ul>${voieParam.color} :`;
            // colorVoie.style.color = voieParam.hex;
            colorVoie.style.color = hex;

            // const cotation = document.createElement("li");
            // cotation.innerHTML =`<span>cotation :</span> ${voieParam.cotationNumber+voieParam.cotationLetter}`

            // const forbidden = document.createElement("li");
            // if(voieParam.forbidden===""){
            //     forbidden.innerHTML = "<span>Interdit :</span> Aucun"

            // }else{
            // forbidden.innerHTML = `<span>Interdit :</span> ${voieParam.forbidden}`}
            
            
            voieElement.appendChild(colorVoie);
            // voieElement.appendChild(cotation);
            // voieElement.appendChild(forbidden)
        }

        
    }

}

voieFlesselApi().then(data => generateVoies(data))

