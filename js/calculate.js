function getValue(inputId1, inputId2) {
  const inputString1 = document.getElementById(inputId1);
  const inputFloat1 = parseFloat(inputString1.value);
  const inputString2 = document.getElementById(inputId2);
  const inputFloat2 = parseFloat(inputString2.value);
      const area = inputFloat1 * inputFloat2;
      
  return area;
      
}
let count = 0;
function calculationArea(name, area) {
  count += 1;
  const tr = document.createElement("tr");

  const parent = document.getElementById("area-container");
  tr.innerHTML = `
    <td class="">${count}</td>
    <td class="">${name}</td>
    <td class="">${area}cm&#178</td>
    <td>
    <button class='btn btn-primary'>Covert to m&#178;</button>
    </td>`;
  parent.appendChild(tr);
  console.log(tr);
}

