

    $("#btnInscription").click(function () {
        console.log("Enter click btnInscription");
        OpenFormulaire();

    });

    function OpenFormulaire() {
        console.log("Enter in OpenFormulaire");
        $("idFormulaire").html('');
    }
    $("#btnEnvoyer").click(window.onload = function () {
        var nom = document.getElementById("idNom").value;
        var prenom = document.getElementById("idPrenom").value;
        var email = document.getElementById("idEmail").value;
        var message = document.getElementById("idMessage").value;
        
        console.log("nom : " + nom + "prenom " + prenom + "email " + email + "message " + message);
        var resultat = '<div>Votre nom est : ' + nom + ' votre prénom est : ' + prenom + ' votre email est : ' + email + ' et votre message est : </div>';
       document.getElementById("idResultat").innerHTML = resultat;
        $("idResultat").value(resultat);
    });


