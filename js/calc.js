function btnClick() {
    let Hp = parseFloat(document.getElementById('H').value);
    let Cp = parseFloat(document.getElementById('C').value);
    let Sp = parseFloat(document.getElementById('S').value);
    let Np = parseFloat(document.getElementById('N').value);
    let Op = parseFloat(document.getElementById('O').value);
    let A = parseFloat(document.getElementById('A').value);
    let W = parseFloat(document.getElementById('W').value);

    let Kpc = 100/(100-W);
    let Kpg = 100/(100-W-A);

    console.log(Kpc , Kpg)

    let Hc = Hp * Kpc;
    let Cc = Cp * Kpc;
    let Sc = Sp * Kpc;
    let Nc = Np * Kpc;
    let Oc = Op * Kpc;
    let Ac = A * Kpc;
    
    let Hg = Hp * Kpg;
    let Cg = Cp * Kpg;
    let Sg = Sp * Kpg;
    let Ng = Np * Kpg;
    let Og = Op * Kpg;


    let check1 = Hc + Cc+ Sc+ Nc + Oc + Ac;
    let check2 = Hg + Cg+ Sg+ Ng + Og;
    console.log(check1 , check2);

    //if ( check1 == 100 && check2 == 100 ) {

        let Qph = 339 * Cp + 1030*Hp - 108.8*(Op-Sp) - 25*W;
        let Qch = (Qph + 0.025*W)*100/(100-W);
        let Qgh = (Qph + 0.025*W)*100/(100-W-A);

        const resultsContainer = document.getElementById('resultsContainer');
        resultsContainer.innerHTML = `
            <h2>Результати розрахунків:</h2>
            <p>Склад сухої маси палива: ${Hp}</p>
            <p>Склад сухої маси палива: ${Qph}</p>
            <p>Склад сухої маси палива: ${Qch}</p>
            <p>Склад сухої маси палива: ${Qgh}</p>

        `;
  //  } else {
  //      const resultsContainer = document.getElementById('resultsContainer');
  //      resultsContainer.innerHTML = `
  //          <h2>Помилка у розрахунках!</h2>
   //     `;
   // }


}