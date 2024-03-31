    
  //  seting the back
   document.body.style.backgroundColor = '#008080 '; // Green
    const container =document.body
                 .appendChild(document.createElement('div'))
    const plainText1 = document.body
                 .appendChild(document.createElement('p'));
      plainText1.textContent = 'CHOOSE YOUR LUCK'          
      plainText1.style.color = 'white';
      // plainText1.style.textAlign = 'center';
      plainText1.style.fontFamily = 'arial';
      plainText1.style.fontWeight = 'bolder';
      plainText1.style.fontSize = '30px';
      // plainText1.style.marginTop = '80px';
      plainText1.style.marginRight = 'auto';
      plainText1.style.marginLeft = 'auto'
    const container1 =document.body
                  .appendChild(document.createElement('div'))
    const container2 =document.body
                  .appendChild(document.createElement('div'))
    const container3 =document.body
                  .appendChild(document.createElement('div'))
    const button1 =document.body
                  .appendChild(document.createElement('button'));
    const button2 =document.body
                   .appendChild(document.createElement('button'));               
    const button3 =document.body
                   .appendChild(document.createElement('button'));

      
      button1.style.marginLeft = '200px';
      button1.textContent = 'Yellow';
      button1.style.backgroundColor = '#800000';
      button1.style.color = 'yellow';
      button1.style.width = '200px';
      button1.style.height = '100px';
      button1.style.fontFamily = 'arial';
      button1.style.fontSize = '20px'
      button1.style.marginRight = '50px';
      button1.style.marginLeft = '300px';
      button1.style.marginTop = '100px';
      button1.style.fontWeight = 'bolder'
      button1.style.borderRadius = '3px'; // Add border
      
      
      button2.textContent = 'Green';
      button2.style.backgroundColor = '#800000';
      button2.style.color = 'green';
      button2.style.width = '200px';
      button2.style.height = '100px';
      button2.style.fontFamily = 'arial';
      button2.style.fontSize = '20px'
      button2.style.marginTop = '100px';
      button2.style.fontWeight = 'bolder'
      button2.style.borderRadius = '3px'; // Add border
      
      button3.textContent = 'Red';
      button3.style.backgroundColor = '#800000';
      button3.style.color = 'red';
      button3.style.width = '200px';
      button3.style.height = '100px';
      button3.style.fontFamily = 'arial';
      button3.style.fontSize = '20px';
      button3.style.marginLeft = '50px';
      button3.style.marginTop = '100px';
      button3.style.fontWeight = 'bolder'
      button3.style.borderRadius = '3px'; // Add border
      
      container.appendChild(plainText1);
      container.style.display = 'flex';
      container.style.alignItems = 'center';
      container.style.justifyContent = 'center'
      container.style.border = '2px solid white'; // Add border
      container.style.boxSizing = 'border-box';
      container.style.textAlign = 'center';;
      container.style.width = '500px';
      container.style.height = '100px';
      container.style.marginLeft = '450px';
      container.style.boxShadow = '5px 5px 10px rgba(0, 0, 0, 0.5)';
      container.style.width = '400px';
      container.style.marginTop = '100px'
      container.style.backgroundColor = '#CD7F32'

      container1.style.display = 'inlineblock';
      container2.style.display = 'inlineblock';
      container3.style.display = 'inlineblock';

      button1.addEventListener('click', function() {
        playGame(button1);
      });
      button2.addEventListener('click',function(){
        playGame(button2);
      })
      button3.addEventListener('click',function(){
        playGame(button3);
      })
      
    function playGame(userChoice) {

      const button1 = Math.random() * 10;
      const button2 = Math.random() * 10;
      const button3 = Math.random() * 10;

      console.log('Button 1:', button1);
      console.log('Button 2:', button2);
      console.log('Button 3:', button3);

      if (userChoice === button1 && button1 > button2 && button1 > button3 ) {
             alert('win');
      }   
      else if (userChoice === button2 && button2 > button1 && button2 > button3 ) {
            alert('win');
      }
      else if (userChoice === button3 && button3 > button2 && button3 > button1 ) {
             alert('win');
      }
      else {
             alert('lose >:(.. ..lets take another shoot :-)')
      }
    }