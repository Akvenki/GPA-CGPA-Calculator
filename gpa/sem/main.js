var cg=0,total,tc=0,tt;
    var len=document.getElementsByClassName("credit").length;
    function result(){
       for(let i=0;i<len;i++){
            const g=document.getElementsByClassName("sel")[i].value;
            const c=document.getElementsByClassName("credit")[i].value;
            tc+=Number(c);
            cg+=Number(g*c);     
       } 
       total=cg/tc; 
      tt=total.toFixed(2);
      // document.getElementById("resultbutton").style.visibility="hidden";
      document.getElementById("result").innerHTML="Your GPA is "+tt;
    }
    function calculatemain(){
        var sem=document.getElementById("sem").value;
        var dept=document.getElementById("dept").value;
        if (dept=="cse"){
            switch (sem) {
                case "1":
                    location.href="gpa/sem/sem1.html";
                    break;
                case "2":
                    location.href="gpa/sem/sem2.html";
                    break;
                case "3":
                    location.href="gpa/sem/sem3.html";
                    break;
                case "4":
                    location.href="gpa/sem/sem4.html";
                    break;
                case "5":
                   location.href="gpa/sem/sem5.html";
                //    alert("No data found");
                //    location.href="index.html";
                    break;
                case "6":
                    location.href="gpa/sem/sem6.html";
                    // alert("No data found");
                    // location.href="index.html";
                    break;
                case "7":
                    //location.href="sem/sem7.html";
                    alert("No data found");
                    location.href="index.html";
                    break;
                case "8":
                    //location.href="sem/sem8.html";
                    alert("No data found");
                    location.href="index.html";
                    break;    
                default:
                    alert("please fill your details")
                    break;
            }
        }
        else if(dept=="ece"){
            alert("No data found");
            location.href="index.html";
        }
        else if(dept=="agri"){
            location.href="index.html";
            alert("No data found");

        }
        else{
            alert("Please fill your details");
        }
        
    }

    function calculate(){ 
        var sem=document.getElementById("sem").value;
        var dept=document.getElementById("dept").value;
        if (dept=="cse"){
            switch (sem) {
                case "1":
                    location.href="sem1.html";
                    break;
                case "2":
                    location.href="sem2.html";
                    break;
                case "3":
                    location.href="sem3.html";
                    break;
                case "4":
                    location.href="sem4.html";
                    break;
                case "5":
                    location.href="sem5.html";
                    //alert("No data found");
                   // location.href="index.html";
                    break;
                case "6":
                    location.href="sem6.html";
                    // alert("No data found");
                    // location.href="index.html";
                    break;
                case "7":
                    //location.href="sem7.html";
                    alert("No data found");
                    location.href="index.html";
                    break;
                case "8":
                    //location.href="sem8.html";
                    alert("No data found");
                    location.href="index.html";
                    break;    
                default:
                    alert("please fill your details")
                    break;
            }
        }
        else if(dept=="ece"){
            alert("No data found");
            location.href="/index.html";
        }
        else if(dept=="agri"){
            location.href="/index.html";
            alert("No data found");

        }
        else{
            alert("Please fill your details");
        }
        
    }
