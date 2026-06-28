function generateResume(){

let name=document.getElementById("name").value;
let skills=document.getElementById("skills").value;

document.getElementById("resume").innerHTML=`
<h2>${name}</h2>
<p><strong>Professional Summary</strong></p>
<p>A motivated and enthusiastic professional with skills in ${skills}.</p>

<h3>Skills</h3>
<p>${skills}</p>
`;

}
