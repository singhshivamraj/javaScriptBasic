
    function showName() {
      let name = document.getElementById("username").value;
      document.getElementById("output1").innerText = "Hello " + name + "!";
    }

    function addNumbers() {
      let num1 = parseFloat(document.getElementById("num1").value);
      let num2 = parseFloat(document.getElementById("num2").value);
      let sum = num1 + num2;
      document.getElementById("output2").innerText = "Sum: " + sum;
    }

    function changeBG() {
      // Random color generator
      const colors = ["#fce38a", "#eaffd0", "#95e1d3", "#f38181", "#a2d5f2"];
      let randomColor = colors[Math.floor(Math.random() * colors.length)];
      document.body.style.backgroundColor = randomColor;
    }
  