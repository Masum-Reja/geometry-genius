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

//Triangle:
document.getElementById("btn-triangle").addEventListener("click", function () {
  const triangle = getValue("triangle-b", "triangle-h");
  const triangleArea = 0.5 * triangle.toFixed(2);
  console.log(triangleArea);
  calculationArea("Triangle", triangleArea);
});

//Rectangle:
document.getElementById("btn-rectangle").addEventListener("click", function () {
  const rectangle = getValue("rectangle-w", "rectangle-I");
  const rectangleArea = rectangle.toFixed(2);
  console.log(rectangleArea);
  calculationArea("Rectangle", rectangleArea);
});

//Parallelogram:
document
  .getElementById("btn-parallelogram")
  .addEventListener("click", function () {
    const parallelogram = getValue("parallelogram-b", "parallelogram-h");
    const parallelogramArea = parallelogram.toFixed(2);
    console.log(parallelogramArea);
    calculationArea("Parallelogram", parallelogramArea);
  });

//Rhombus:
document.getElementById("btn-rhombus").addEventListener("click", function () {
  const rhombus = getValue("rhombus-d1", "rhombus-d2");
  const rhombusArea = 0.5 * rhombus.toFixed(2);
  console.log(rhombusArea);
  calculationArea("Rhombus", rhombusArea);
});

//Pentagon:
document.getElementById("btn-pentagon").addEventListener("click", function () {
  const pentagon = getValue("pentagon-p", "pentagon-b");
  const pentagonArea = (0.5 * pentagon).toFixed(2);
  console.log(pentagonArea);
  calculationArea("Pentagon", pentagonArea);
});

//Ellipse:
document.getElementById("btn-ellipse").addEventListener("click", function () {
  const ellipse = getValue("ellipse-a", "ellipse-b");
  const ellipseArea = (3.14 * ellipse).toFixed(2);
  console.log(ellipseArea);
  calculationArea("Ellipse", ellipseArea);
});

document.getElementById("btn-blog").addEventListener("click", function () {
  window.location = "question.html";
});

