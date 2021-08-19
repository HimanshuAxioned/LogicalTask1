console.log("Hello World")

console.log("1)\n")
function first(){
  let s="";
  for (let i = 1; i <= 4; i++) {
    for (let j = 1; j <= 5 - i; j++) {
      s+=" ";
    }
    for(let j=1 ;j<i+i ;j++){
      if( j%2 !==0) {
        s+="*";
      }
      else  {
        s+="A";
      }
    }
   s+="\n";
  }
  console.log(s+"\n");
}

first();
console.log("\n");

console.log("2)\n");
function two() {
  let s = "";
  for (i = 1; i <= 5; i++) {
    // space ie. 5-1=4 for first row , 5-2=3 for second row and so on.
    for (let j = 1; j <= 5 - i; j++) {
      s += " ";
    }

    for (let star = 0; star < 2 * i - 1; star++) {
      if (i == 1 || i === 5) {
        s += "*";
      }
      else {
        if (star === 0 || star === 2 * i - 2) {

            s += "*";
          }
          else {
            s += " ";
          }
        }
      }
      s += "\n"
    }
    console.log(s + "\n")
  }
  two();

  console.log("3)\n");
  function three() {
    let s = "";
    for (let i = 1; i <= 3; i++) {
      for (let j = 1; j <= i; j++) {
        s += j ** i + " ";
      }
      s += "\n";
    }
    console.log(s + "\n");
  }

  three();


  console.log("4)\n")

  function four() {
    let s = "";
    // top
    for (let i = 1; i <= 5; i++) {
      for (let j = 5; j >= i; j--) {
        s += "*";
      }

      for (let j = 1; j <= i - 1; j++) {
        s += " ";
      }

      for (let j = 5; j <= i + 3; j++) {
        s += " ";
      }
      for (let j = 5; j >= i; j--) {
        s += "*";
      }
      s+="\n";
    }
    // bottom
    for (let i = 1; i <= 4; i++) {
      for (let j = 1; j <= i + 1; j++) {
        s += "*";
      }

      for (let j = 5; j >= i + 2; j--) {
        s += " ";
      }

      for (let j = 5; j >= i + 2; j--) {
        s += " ";
      }

      for (let j = 1; j <= i + 1; j++) {
        s += "*";
      }
      s+= "\n";

    }
    console.log(s+"\n");
  }

  four();


  console.log("5)\n")
function five(){
  let s="";
  // top
  for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= i; j++) {
      s+="*";
    }

    for (let j = 4; j >= i; j--) {
      s+= " ";
    }

    for (let j = 4; j >= i; j--) {
      s+=" ";
    }

    for (let j = 1; j <= i; j++) {
      s+="*";
    }
    s+="\n"

  }
  // bottom
  for (let i = 1; i <= 5; i++) {
    for (let j = 5; j >= i; j--) {
      s+="*";
    }

    for (let j = 2; j <= i; j++) {
      s+=" ";
    }

    for (let j = 2; j <= i ; j++) {
      s+=" ";
    }
    for (let j = 5; j >= i; j--) {
      s+="*";
    }
    s+="\n";
  }
  console.log(s+"\n");
}

five();

  



  // console.log("6)\n")

  // for(let i=1; i<=6; i++){
  //   for (let j=1 ; j<=i; j++){
  //     console.log(" ")
  //   }
  //   console.log("\n");
  // }

  console.log("6)\n")
  function six(){
    let s="";
    for (let i = 1; i <= 6; i++) {
      for (let j = 1; j <= i; j++) {
        s+="#";
      }
      s+="\n";
    }
    console.log(s + "\n");
  }
  console.log("\n");

  six();


  console.log("7)\n");
  function seven() {
    let s = "";
    for (let i = 1; i <= 5; i++) {
      var x=i;
      for (let j = 4; j >= i ; j--) {
        s+=" ";
      }
      for (let l = 1; l<=i ; l++) {
        s+= x;
        x++;
      }
      x--;
      x--;
      for(r=1; r<i; r++){
        s+= x;
        x--;
      }
      s+="\n";
    }
    console.log(s + "\n");
  }

  seven();
