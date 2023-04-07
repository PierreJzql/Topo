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

            const colorVoie = document.createElement("p");
            colorVoie.setAttribute("class","tittleVoie Color");
            colorVoie.innerHTML = `<ul></ul>${voieParam.color} :`;
            colorVoie.style.color = voieParam.hex

            const cotation = document.createElement("li");
            cotation.innerHTML =`<span>cotation :</span> ${voieParam.cotationNumber+voieParam.cotationLetter}`

            const forbidden = document.createElement("li");
            if(voieParam.forbidden===""){
                forbidden.innerHTML = "<span>Interdit :</span> Aucun"

            }else{
            forbidden.innerHTML = `<span>Interdit :</span> ${voieParam.forbidden}`}
            
            
            voieElement.appendChild(colorVoie);
            voieElement.appendChild(cotation);
            voieElement.appendChild(forbidden)
        }

        
    }

}

voieFlesselApi().then(data => generateVoies(data))

