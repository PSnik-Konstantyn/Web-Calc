function btnClick() {
    let Hp = parseFloat(document.getElementById('H').value);
    let Cp = parseFloat(document.getElementById('C').value);
    let Sp = parseFloat(document.getElementById('S').value);
    let Np = parseFloat(document.getElementById('N').value);
    let Op = parseFloat(document.getElementById('O').value);
    let A = parseFloat(document.getElementById('A').value);
    let W = parseFloat(document.getElementById('W').value);

    let Kpc = 100 / (100 - W);
    let Kpg = 100 / (100 - W - A);

    console.log(Kpc, Kpg)

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

    //завдання 2 (захаркоджене)
    let Hq = 11.2;
    let Cq = 85.5;
    let Sq = 2.5;
    let Oq = 0.8;
    let Vq = 333.3;
    let Wq = 2;
    let Aq = 0.15;
    let Qq = 40.4;

    let Ht = Hq * (100 - Wq - Aq) / 100;
    let Ct = Cq * (100 - Wq - Aq) / 100;
    let Ot = Oq * (100 - Wq / 10 - Aq / 10) / 100;
    let St = Sq * (100 - Wq - Aq) / 100;
    let At = Aq * (100 - Wq) / 100;
    let Vt = Vq * (100 - Wq) / 100;
    let Qt = Qq * (100 - Wq - Aq) / 100;

    let check1 = Hc + Cc + Sc + Nc + Oc + Ac;
    let check2 = Hg + Cg + Sg + Ng + Og;


    console.log(check1, check2);

    if (check1 == 100 && check2 == 100) {

        let Qph = (339 * Cp + 1030 * Hp - 108.8 * (Op - Sp) - 25 * W);
        let Qch = (Qph / 1000 + 0.025 * W) * 100 / (100 - W);
        let Qgh = (Qph / 1000 + 0.025 * W) * 100 / (100 - W - A);

        const resultsContainer = document.getElementById('resultsContainer');
        resultsContainer.innerHTML = `
            <h2>Результати розрахунків (1):</h2>
            <p>Коефіцієнт переходу від робочої до сухої маси становить: ${Kpc.toFixed(2)}</p>
            <p>Коефіцієнт переходу від робочої до горючої маси становить: ${Kpg.toFixed(2)}</p>
            <p>Склад сухої маси палива становитиме: H<sup>C</sup>=${Hc.toFixed(2)}%, C<sup>C</sup>=${Cc.toFixed(2)}%,
            S<sup>C</sup>=${Sc.toFixed(2)}%, N<sup>C</sup>=${Nc.toFixed(2)}%, O<sup>C</sup>=${Oc.toFixed(2)}% 
            A<sup>C</sup>=${Ac.toFixed(2)}% </p>
            <p>Склад горючої маси палива становитиме: H<sup>C</sup>=${Hg.toFixed(2)}%, C<sup>C</sup>=${Cg.toFixed(2)}%,
            S<sup>C</sup>=${Sg.toFixed(2)}%, N<sup>C</sup>=${Ng.toFixed(2)}%, O<sup>C</sup>=${Og.toFixed(2)}% </p>
            <p>Нижча теплота згоряння для робочої маси за заданим складом компонентів палива
            становить: ${Qph.toFixed(2)} KДж</p>
            <p>Нижча теплота згоряння для сухої маси за заданим складом компонентів палива
            становить: ${Qch.toFixed(2)} МДж</p>
            <p>Нижча теплота згоряння для горючої маси за заданим складом компонентів палива
            становить: ${Qgh.toFixed(2)} МДж</p>
            <h2>Результати розрахунків (2):</h2>
            <table border="1">
            <tr>
                <th>Склад робочої маси мазуту</th>
                <th>%</th>
            </tr>
            <tr>
                <td>H<sup>Р</sup></td>
                <td>${Ht.toFixed(2)}</td>
            </tr>
            <tr>
                <td>C<sup>Р</sup></td>
                <td>${Ct.toFixed(2)}</td>
            </tr>
            <tr>
                <td>S<sup>Р</sup></td>
                <td>${St.toFixed(2)}</td>
            </tr>
            <tr>
                <td>O<sup>Р</sup></td>
                <td>${Ot.toFixed(2)}</td>
            </tr>
            <tr>
                <td>V<sup>Р</sup></td>
                <td>${Vt.toFixed(2)}</td>
            </tr>
            <tr>
                <td>A<sup>Р</sup></td>
                <td>${At.toFixed(2)}</td>
            </tr>
            <tr>
                <td>Нижча теплота згоряння</td>
                <td>${Qt.toFixed(2)} МДж/кг</td>
            </tr>
            </table>
        `;
    } else {
        const resultsContainer = document.getElementById('resultsContainer');
        resultsContainer.innerHTML = `
           <h2>Помилка у розрахунках!</h2>
       `;
    }


}