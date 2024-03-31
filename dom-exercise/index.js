// const column = 10;
// const row = 5;
// const app = document.querySelector('#app');
// const table = document.createElement('table');
// for (let r = 0; r < row ; r ++){
//   const tr = document.createElement('tr');
//   for(let c = 0; c <column; c ++){
//     const td =document.createElement('td');
//     tr.appendChild("td");
//   }
//      table.appendChild("tr");
//   }
// app.appendChild("table");
const ol = document.body
           .appendChild(document.createElement("div"))
           .appendChild(document.createElement("ol"));
const ul = document.body
           .appendChild(document.createElement("div"))
           .appendChild(document.createElement("ul"));
   for(let i = 0; i <3; i++) {
          ol.appendChild(document.createElement('li'));
          ul.appendChild(document.createElement('li'));
   }       
const a = document.body
         .appendChild(document.createElement('div'))
         .appendChild(document.createElement('a'));
         a.setAttribute("href","https://supersimple.dev/projects/amazon/");
         a.textContent = "amazone";
         a.style.textDecoration ='none';
const p = document.body
         .appendChild(document.createElement('div'))
         .appendChild(document.createElement('p'));
         p.textContent = "This is conetext of the paragraph";
         p.style.color = "white";
         p.style.backgroundColor = "skyblue";

