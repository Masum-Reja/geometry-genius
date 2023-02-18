// Calculate Area Function

function getValue(inputId1, inputId2) {
  const inputString1 = document.getElementById(inputId1);
  const inputFloat1 = parseFloat(inputString1.value);
  const inputString2 = document.getElementById(inputId2);
  const inputFloat2 = parseFloat(inputString2.value);
  const area = inputFloat1 * inputFloat2;
  return area;
}

// Create new Element and set value

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
}
  
//  Color Function

function getColor(cardId) {
  var x = Math.floor(Math.random() * 256);
  var y = Math.floor(Math.random() * 256);
  var z = Math.floor(Math.random() * 256);
  var bgColor = "rgb(" + x + "," + y + "," + z + ")";
  cardId.style.backgroundColor = bgColor;
}
  

//Triangle:
document.getElementById("btn-triangle").addEventListener("click", function () {
  const triangle = getValue("triangle-b", "triangle-h");
  const triangleArea = 0.5 * triangle.toFixed(2);
  calculationArea("Triangle", triangleArea);
});
 document
   .getElementById("triangle")
   .addEventListener("mouseenter", function () {
     getColor(triangle);
   });

//Rectangle:
document.getElementById("btn-rectangle").addEventListener("click", function () {
  const rectangle = getValue("rectangle-w", "rectangle-I");
  const rectangleArea = rectangle.toFixed(2);
  calculationArea("Rectangle", rectangleArea);
});

   document
     .getElementById("rectangle")
     .addEventListener("mouseenter", function () {
       getColor(rectangle);
     });

//Parallelogram:
document
  .getElementById("btn-parallelogram")
  .addEventListener("click", function () {
    const parallelogram = getValue("parallelogram-b", "parallelogram-h");
    const parallelogramArea = parallelogram.toFixed(2);
    calculationArea("Parallelogram", parallelogramArea);
  });
  
    document
      .getElementById("parallelogram")
      .addEventListener("mouseenter", function () {
        getColor(parallelogram);
      });

//Rhombus:
document.getElementById("btn-rhombus").addEventListener("click", function () {
  const rhombus = getValue("rhombus-d1", "rhombus-d2");
  const rhombusArea = 0.5 * rhombus.toFixed(2);
  calculationArea("Rhombus", rhombusArea);
});

  document
    .getElementById("rhombus")
    .addEventListener("mouseenter", function () {
      getColor(rhombus);
    });

//Pentagon:
document.getElementById("btn-pentagon").addEventListener("click", function () {
  const pentagon = getValue("pentagon-p", "pentagon-b");
  const pentagonArea = (0.5 * pentagon).toFixed(2);
  calculationArea("Pentagon", pentagonArea);  
});

  // Random Color
  document
    .getElementById("pentagon")
    .addEventListener("mouseenter", function () {
      getColor(pentagon);
    });

//Ellipse:
document.getElementById("btn-ellipse").addEventListener("click", function () {
  const ellipse = getValue("ellipse-a", "ellipse-b");
  const ellipseArea = (3.14 * ellipse).toFixed(2);
  calculationArea("Ellipse", ellipseArea);
});

  document
    .getElementById("ellipse")
    .addEventListener("mouseenter", function () {
      getColor(ellipse);
    });

 document
   .getElementById("calculate")
   .addEventListener("mouseenter", function () {
     getColor(calculate);
   });

// Blog Button Show the Question Answer

document.getElementById("btn-blog").addEventListener("click", function () {
  window.location = "question.html";
});

