function show0() {
            let base = document.getElementById('tri-base').value    
            let height = document.getElementById('tri-height').value  
            let areaOfTriangle = 0.5*base*height 
            displayTriangle.innerHTML = `<p>Area of triangle = ${areaOfTriangle.toFixed(2)}cm²</p>`
            document.getElementById('tri-base').value = ''
            document.getElementById('tri-height').value = ''
        }

function show1() {
    let side = document.getElementById('square-side').value
    let areaOfSquare = side*side
    displaySquare.innerHTML = `<p>Area of square = ${areaOfSquare.toFixed(2)}cm²</p>`
    document.getElementById('square-side').value = ''
}

function show2() {
    let radius = document.getElementById('circle-radius').value
    let areaOfCircle = Math.PI * radius * radius
    displayCircle.innerHTML = `<p>Area of circle = ${areaOfCircle.toFixed(2)}cm²</p>`
    document.getElementById('circle-radius').value = ''
}

function show3() {
    let d = document.getElementById('quad-d').value
    let h1 = document.getElementById('quad-h1').value
    let h2 = document.getElementById('quad-h2').value
    let areaOfQuadrilateral = 1/2*d*(h1+h2)
    displayQuadrilateral.innerHTML = `<p>Area of quadrilateral = ${areaOfQuadrilateral.toFixed(2)}cm²</p>`
    document.getElementById('quad-d').value = ''
    document.getElementById('quad-h1').value = ''
    document.getElementById('quad-h2').value = ''
}

function show4() {
    let diagonal1 = document.getElementById('rhombus-d1').value
    let diagonal2 = document.getElementById('rhombus-d2').value
    let areaOfRhombus = 0.5 * diagonal1 * diagonal2
    displayRhombus.innerHTML = `<p>Area of rhombus = ${areaOfRhombus.toFixed(2)}cm²</p>`
    document.getElementById('rhombus-d1').value = ''
    document.getElementById('rhombus-d2').value = ''
}



function show7() {
    let weight = Number(document.getElementById('bmi-weight').value)
    let height = Number(document.getElementById('bmi-height').value)
    let bmi = weight / (height * height)
    displayBmi.innerHTML = `<p>BMI = ${bmi.toFixed(2)}</p>`
    document.getElementById('bmi-weight').value = ''
    document.getElementById('bmi-height').value = ''
}

