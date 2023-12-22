var valeurEntrer = [];
var classValeurSorti = document.getElementsByClassName("case");
var idvalider = document.getElementById("valider");
idvalider.onclick = resolutionFonction;
var idrecommencer = document.getElementById("recommencer");
idrecommencer.onclick = viderFonction;







// on vider le contenu du tableau
function viderFonction(){
    afficherTableauFonction(true);
    for(var i = 0; i < valeurEntrer.length; i++){
        valeurEntrer[i].value = "";
    }

}
// on resoud le tower docu
function resolutionFonction(){
    // on recupere les valeurs entrer
    valeurEntrer = [];
    for(var i = 1; i <= 16; i++){
        valeurEntrer.push(document.getElementById("valeurEntrer" + i))
    }
    // on fait tourner 16 boucles entre elles pour tester des compositions de tableau mais on filtre pour que les lignes et les colonnes ne contienne pas 2 fois la meme valeur on passe de 4 milliards de possibilites a 1152
    // premiere ligne
    for(var i1 = 1; i1 <= 4; i1++){
        for(var j1 = 1; j1 <= 4; j1++){
            if(i1 != j1){
                for(var k1 = 1; k1 <= 4; k1++){
                    if(i1 != k1 && j1 != k1){
                        for(var l1 = 1; l1 <= 4; l1++){
                            if(i1 != l1 && j1 != l1 && k1 != l1){
                                // deuxieme ligne
                                for(var i2 = 1; i2 <= 4; i2++){
                                    if(i1 != i2){
                                        for(var j2 = 1; j2 <= 4; j2++){
                                            if(i2 != j2 && j1 != j2){
                                                for(var k2 = 1; k2 <= 4; k2++){
                                                    if(i2 != k2 && j2 != k2 && k1 != k2){
                                                        for(var l2 = 1; l2 <= 4; l2++){
                                                            if(i2 != l2 && j2 != l2 && k2 != l2 && l1 != l2){
                                                                // troisieme ligne
                                                                for(var i3 = 1; i3 <= 4; i3++){
                                                                    if(i1 != i3 && i2 != i3){
                                                                        for(var j3 = 1; j3 <= 4; j3++){
                                                                            if(i3 != j3 && j1 != j3 && j2 != j3){
                                                                                for(var k3 = 1; k3 <= 4; k3++){
                                                                                    if(i3 != k3 && j3 != k3 && k1 != k3 && k2 != k3){
                                                                                        for(var l3 = 1; l3 <= 4; l3++){
                                                                                            if(i3 != l3 && j3 != l3 && k3 != l3 && l1 != l3 && l2 != l3){
                                                                                                // quatrieme ligne
                                                                                                for(var i4 = 1; i4 <= 4; i4++){
                                                                                                    if(i1 != i4 && i2 != i4 && i3 != i4){
                                                                                                        for(var j4 = 1; j4 <= 4; j4++){
                                                                                                            if(i4 != j4 && j1 != j4 && j2 != j4 && j3 != j4){
                                                                                                                for(var k4 = 1; k4 <= 4; k4++){
                                                                                                                    if(i4 != k4 && j4 != k4 && j1 != j4 && j2 != j4 && j3 != j4){
                                                                                                                        for(var l4 = 1; l4 <= 4; l4++){
                                                                                                                            if(i4 != l4 && j4 != l4 && k4 != l4 && l1 != l4 && l2 != l4 && l3 != l4){
                                                                                                                                // on teste la composition de tableau proposer
                                                                                                                                if(verificationTableauFonction(i1, j1, k1, l1, i2, j2, k2, l2, i3, j3, k3, l3, i4, j4, k4, l4) == true){
                                                                                                                                    // on affiche le tableau avec les reponses
                                                                                                                                    afficherTableauFonction(false, i1, j1, k1, l1, i2, j2, k2, l2, i3, j3, k3, l3, i4, j4, k4, l4);
                                                                                                                                    return 0;
                                                                                                                                }
                                                                                                                            }
                                                                                                                        }
                                                                                                                    }
                                                                                                                }
                                                                                                            }
                                                                                                        } 
                                                                                                    }
                                                                                                }
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        } 
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
// on verifie si les possibilites corresponde pour la tableau entier
function verificationTableauFonction(i1, j1, k1, l1, i2, j2, k2, l2, i3, j3, k3, l3, i4, j4, k4, l4){
    // on verifie les 4 verticales et les 4 horizontales
    var correct = 0;
    if(verificationLigneFonction(0, i1, j1, k1, l1) == true){
        correct++;
    }
    if(verificationLigneFonction(1, i2, j2, k2, l2) == true){
        correct++;
    }
    if(verificationLigneFonction(2, i3, j3, k3, l3) == true){
        correct++;
    }
    if(verificationLigneFonction(3, i4, j4, k4, l4) == true){
        correct++;
    }
    if(verificationLigneFonction(4, i1, i2, i3, i4) == true){
        correct++;
    }
    if(verificationLigneFonction(6, j1, j2, j3, j4) == true){
        correct++;
    }
    if(verificationLigneFonction(8, k1, k2, k3, k4) == true){
        correct++;
    }
    if(verificationLigneFonction(10, l1, l2, l3, l4) == true){
        correct++;
    }
    // en fonction du resultat on return true ou false
    if(correct == 8){
        return true;
    }
    return false;
}
// on verifie si les possibilites corresponde pour une ligne
function verificationLigneFonction(numeroLigne, case1, case2, case3, case4){
    visible1 = 1;
    visible2 = 1;
    if(numeroLigne <= 3){
        doitEtreVisible1 = valeurEntrer[numeroLigne].value;
        doitEtreVisible2 = valeurEntrer[numeroLigne + 12].value;
    }
    else if(numeroLigne >= 4){
        doitEtreVisible1 = valeurEntrer[numeroLigne].value;
        doitEtreVisible2 = valeurEntrer[numeroLigne + 1].value;
    }
    if(case2 > case1){
        visible1++;
    }
    if(case3 > case2 && case3 > case1){
        visible1++;
    }
    if(case4 > case3 && case4 > case2 && case4 > case1){
        visible1++;
    }
    if(case3 > case4){
        visible2++;
    }
    if(case2 > case4 && case2 > case3){
        visible2++;
    }
    if(case1 > case4 && case1 > case3 && case1 > case2){
        visible2++;
    }
    if(visible1 == doitEtreVisible1 && visible2 == doitEtreVisible2){
        return true;
    }
    return false;
}
// on vide ou on rempli le tableau avec les reponses
function afficherTableauFonction(ilFautVider, i1, j1, k1, l1, i2, j2, k2, l2, i3, j3, k3, l3, i4, j4, k4, l4){
    if(ilFautVider == true){
        for(var i = 0; i < classValeurSorti.length; i++){
            classValeurSorti[i].innerHTML = "";
        }
    }
    else{
        // ligne 1
        classValeurSorti[0].innerHTML = i1;
        classValeurSorti[1].innerHTML = i2;
        classValeurSorti[2].innerHTML = i3;
        classValeurSorti[3].innerHTML = i4;
        // ligne 2
        classValeurSorti[4].innerHTML = j1;
        classValeurSorti[5].innerHTML = j2;
        classValeurSorti[6].innerHTML = j3;
        classValeurSorti[7].innerHTML = j4;
        // ligne 3
        classValeurSorti[8].innerHTML = k1;
        classValeurSorti[9].innerHTML = k2;
        classValeurSorti[10].innerHTML = k3;
        classValeurSorti[11].innerHTML = k4;
        // ligne 4
        classValeurSorti[12].innerHTML = l1;
        classValeurSorti[13].innerHTML = l2;
        classValeurSorti[14].innerHTML = l3;
        classValeurSorti[15].innerHTML = l4;
    }
}