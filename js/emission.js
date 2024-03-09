function calculate() {
    var coalInput = parseFloat(document.getElementById('coal').value);
    var mazutInput = parseFloat(document.getElementById('mazut').value);
    var gasInput = parseFloat(document.getElementById('gas').value);
  
    var coalEmission = 1000000 / 20.47 *0.8*25.2/(100-1.5)*(1-0.985);
    var mazutEmission = 1000000 /39.48 * 0.15/100 * (1-0.985);
    var gasEmission = 0; // тут я подумав :)
  
    console.log(coalEmission, mazutEmission);

    var coalEmissionTotal = 0.000001 * coalEmission * 20.47 * coalInput; 
    var mazutEmissionTotal = 0.000001 * mazutEmission * 39.48 * mazutInput; 
    var gasEmissionTotal = 0; // тут я подумав :) x2
  
    document.getElementById('coalEmission').innerText = coalEmission.toFixed(2);
    document.getElementById('coalEmissionTotal').innerText = coalEmissionTotal.toFixed(2);
    document.getElementById('mazutEmission').innerText = mazutEmission.toFixed(2);
    document.getElementById('mazutEmissionTotal').innerText = mazutEmissionTotal.toFixed(2);
    document.getElementById('gasEmission').innerText = gasEmission;
    document.getElementById('gasEmissionTotal').innerText = gasEmissionTotal;
  }
  