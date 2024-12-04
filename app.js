 const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

      
      const btn = document.getElementById("btn");

      
      const color = document.querySelector(".color");

      
      btn.addEventListener("click", () => {
       
        const randomNumber = getRandomNumber();

        
        const colorPicked = colors[randomNumber];

        
        document.body.style.backgroundColor = colorPicked;

        
        color.textContent = colorPicked;
      });

      
      function getRandomNumber() {
        return Math.floor(Math.random() * colors.length);
      }
