let button=document.getElementById("button");
var numbershape=1;
var oldvalue=0;

button.onclick = () =>
{
    let n=document.getElementById("number").value;
    const circle=document.getElementById("circle");
    const square=document.getElementById("square");
    const rectangle=document.getElementById("rectangle");
    const box=document.getElementById("box"); 

    n=Number(n)+Number(oldvalue);

    for (let j = numbershape; j <=n; j++) {
        let shape=document.createElement("div");
        shape.innerHTML+=numbershape;
        if(circle.checked)
        {
            shape.classList.add("circle");
        }
        else if(square.checked)
        {
            shape.classList.add("square");
        }
        else if(rectangle.checked)
        {
            shape.classList.add("rectangle");
        }
        else if(triangle.checked)
        {
            shape.classList.add("triangle");
        }
        else
        {
            document.write("Invalid Input");
        }
        numbershape++;
        box.appendChild(shape);
        oldvalue=document.getElementById("box").lastElementChild.innerHTML;
    }
}