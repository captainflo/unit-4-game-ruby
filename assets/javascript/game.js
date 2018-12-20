  var vader =   Math.floor(Math.random() * 10);  
  var kylo = Math.floor(Math.random() * 10);  
  var luke = Math.floor(Math.random() * 10);  
  var che = Math.floor(Math.random() * 10);  

  var win = 0;
  var lose = 0;
  var total = 0;

  var randomNumber = Math.floor(Math.random() * 100);

  $(".ramdom-number").text(randomNumber);
  $(".win").text(win);
  $(".lose").text(lose);


  $(".vader").on("click", function(){
    total += vader;
    $(".total").text(total);
    play();
  })
  
  $(".kylo").on("click", function(){
    total += kylo;
    $(".total").text(total);
    play();
  })
  
  $(".luke").on("click", function(){
    total += luke;
    $(".total").text(total);
    play();
  })
  
  $(".chewbacca").on("click", function(){
    total += che;
    $(".total").text(total);
    play();
  })

  function play(){
    if(total > randomNumber){
      alert("You lose");
      lose++;
      $(".lose").text(lose);
      start();
    }
    else if(total === randomNumber){
      alert("You win");
      win++;
      $(".win").text(win);
      start();
    }
  };
  
  function start(){
    total = 0;
    $(".total").text(total);
    randomNumber = Math.floor(Math.random() * 100);
    $(".ramdom-number").text(randomNumber);
  }

 





