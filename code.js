//Variable that will be used to generate recommendation
var total = 0;
var month = 0;
var day = 0;

//Code for buttons:
  
  //a. Home page
onEvent("start_button", "click", function(){
  setScreen("number_select");
});
  
  //b. Number buttons
numberInput();
  
  //c. Number screen-changing buttons
onEvent("home_btn1", "click", function(){
  goHome();
});
onEvent("next_btn1", "click", function(){
  setScreen("sign_select");
});
  
  //d. Sign button
signInput();

  //e. Sign screen system button
onEvent("idk_btn","click",function(){
  setScreen("birthday_input");
});
onEvent("home_btn2","click",function(){
  goHome();
});
onEvent("next_btn2","click",function(){
  generateResults();
});
  
  //f. Birthday input
onEvent("dropdown1","change",function(){
  monthAssign();
  console.log(month);
});
onEvent("dropdown2","change",function(){
  day = getNumber("dropdown2");
  console.log(day);
});
onEvent("done_btn","click",function(){
  signAssign();
});
  
  //g. Birthday system buttons
onEvent("ret_btn","click",function(){
  setScreen("sign_select");
});
onEvent("home_btn3","click",function(){
  goHome();
});
  
  //h. Results system buttons
onEvent("home_btn4","click",function(){
  goHome();
});
onEvent("home_btn5","click",function(){
  goHome();
});
onEvent("home_btn6","click",function(){
  goHome();
});
onEvent("home_btn7","click",function(){
  goHome();
});
onEvent("home_btn8","click",function(){
  goHome();
});

//Functions
function signAssign(){
  if ((month == 1 && day >= 20)||(month == 2 && day <= 18)){
    setText("sign_text", "Aquarius");
  }
  else if ((month == 2 && day >= 19)||(month == 3 && day <= 20)) {
    setText("sign_text", "Pisces");
  }
  else if ((month == 3 && day >= 21)||(month == 4 && day <= 19)){
    setText("sign_text", "Aries");  
  }
  else if ((month == 4 && day >= 20)||(month == 5 && day <= 20)){
    setText("sign_text", "Taurus");  
  }
  else if ((month == 5 && day >= 21)||(month == 6 && day <= 20)){
    setText("sign_text", "Gemini");
  }
  else if ((month == 6 && day >= 21)||(month == 7 && day <= 22)){
    setText("sign_text", "Cancer");  
  }
  else if ((month == 7 && day >= 23)||(month == 8 && day <= 22)){
    setText("sign_text", "Leo");
  }
  else if ((month == 8 && day >= 23)||(month == 9 && day <= 22)){
    setText("sign_text", "Virgo");
  }
  else if ((month == 9 && day >= 23)||(month == 10 && day <= 22)){
    setText("sign_text", "Libra");
  }
  else if ((month == 10 && day >= 23)||(month == 11 && day <= 21)){
    setText("sign_text", "Scorpio");
  }
  else if ((month == 11 && day >= 22)||(month == 12 && day <= 21)){
    setText("sign_text", "Sagittarius");
  }
  else if ((month == 12 && day >= 22)||(month == 1 && day <= 19)){
    setText("sign_text", "Capricorn");
  }
}
function monthAssign(){
  month = getText("dropdown1");
  if (month == "January"){
    month = 1;
  } else if (month == "February"){
    month = 2;
  }else if (month == "March"){
    month = 3;
  }else if (month == "April"){
    month = 4;
  }else if (month == "May"){
    month = 5;
  }else if (month == "June"){
    month = 6;
  }else if (month == "July"){
    month = 7;
  }else if (month == "August"){
    month = 8;
  }else if (month == "September"){
    month = 9;
  }else if (month == "October"){
    month = 10;
  }else if (month == "November"){
    month = 11;
  }else if (month == "December"){
    month = 12;
  }
}
function generateResults(){
    if (total <= 5){
    setScreen("result_1");
  } else if (total > 5 && total <= 10){
    setScreen("result_2"); 
  } else if (total > 10 && total <= 15){
    setScreen("result_3");
  } else if (total > 15 && total <= 20){
    setScreen("result_4");
  } else {
    setScreen("result_5");
  }
}
function signInput(){
  onEvent("aqua_btn", "click", function(){
    total = total + 1;
  });
  onEvent("pis_btn", "click", function(){
    total = total + 2;
  });
  onEvent("ari_btn", "click", function(){
    total = total + 3;
  });
  onEvent("tau_btn", "click", function(){
    total = total + 4;
  });
  onEvent("gem_btn", "click", function(){
    total = total + 5;
  });
  onEvent("can_btn","click", function(){
    total = total + 6;
});
onEvent("leo_btn", "click", function(){
  total = total + 7;
});
onEvent("vir_btn","click",function(){
  total = total + 8;
});
onEvent("lib_btn","click", function(){
  total = total + 9;
});
onEvent("scor_btn","click",function(){
  total = total + 10;
});
onEvent("sag_btn","click",function(){
  total = total + 11;
});
onEvent("capri_btn","click", function(){
  total = total + 12;
});
}
function goHome(){
  setScreen("home_page");
  resetVariables();
}
function numberInput (){
  onEvent("number_0", "mouseup", function(){
    total = 0 + 0;
  });
  onEvent("number_1", "mouseup", function(){
    total = 0 + 1;
  });
  onEvent("number_2", "mouseup", function(){
    total = 0 + 2;
  });
  onEvent("number_3", "mouseup", function(){
    total = 0 + 3;
  });
  onEvent("number_4", "mouseup", function(){
    total = 0 + 4;
  });
  onEvent("number_5", "mouseup", function(){
    total = 0 + 5;
  });
  onEvent("number_6", "mouseup", function(){
    total = 0 + 6;
  });
  onEvent("number_7", "mouseup", function(){
    total = 0 + 7;
  });
  onEvent("number_8", "mouseup", function(){
    total = 0 + 8;
  });
  onEvent("number_9", "mouseup", function(){
    total = 0 + 9;
  });
  onEvent("number_10", "mouseup", function(){
    total = 0 + 10;
  });
}
function resetVariables(){
  total = 0;
  month = 0;
  day = 0;
  console.log(total);
}