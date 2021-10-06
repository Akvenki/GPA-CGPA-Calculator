function calculate(){
    var semcount=document.getElementById("sem").value;
    document.getElementById("error").setAttribute("style","display:none");
    var dept=document.getElementById("dept").value;
    if(semcount!=""){
        if(dept=="cse"){
            document.getElementById("title").innerHTML="Department : CSE  &emsp; Semester :&nbsp"+Number(semcount-1);
            document.getElementById("resultsection").setAttribute("style","display:visible");
            for(let i=0;i<=semcount;i++){
                document.getElementsByTagName("tr")[i].setAttribute("style","display:visible");
            }  
        }
        else if(dept=="ece"){
            document.getElementById("title").innerHTML="Department : ECE  &emsp; Semester :&nbsp"+Number(semcount-1);
            document.getElementById("resultsection").setAttribute("style","display:visible");
            for(let i=0;i<=semcount;i++){
                document.getElementsByTagName("tr")[i].setAttribute("style","display:visible");
            }
            document.getElementsByClassName("credit")[1].setAttribute("value","25");
            document.getElementsByClassName("credit")[2].setAttribute("value","25");
            document.getElementsByClassName("credit")[3].setAttribute("value","25");
            document.getElementsByClassName("credit")[4].setAttribute("value","24");
            document.getElementsByClassName("credit")[5].setAttribute("value","25");
            document.getElementsByClassName("credit")[6].setAttribute("value","24");
            document.getElementsByClassName("credit")[7].setAttribute("value","22");
            document.getElementsByClassName("credit")[8].setAttribute("value","16");
        }
        else if(dept=="agri"){
            document.getElementById("title").innerHTML="Department : Agri  &emsp; Semester :&nbsp"+Number(semcount-1);
            document.getElementById("resultsection").setAttribute("style","display:visible");
            for(let i=0;i<=semcount;i++){
                document.getElementsByTagName("tr")[i].setAttribute("style","display:visible");
            }
            document.getElementsByClassName("credit")[1].setAttribute("value","25");
            document.getElementsByClassName("credit")[2].setAttribute("value","22");
            document.getElementsByClassName("credit")[3].setAttribute("value","25");
            document.getElementsByClassName("credit")[4].setAttribute("value","24");
            document.getElementsByClassName("credit")[5].setAttribute("value","25");
            document.getElementsByClassName("credit")[6].setAttribute("value","25");
            document.getElementsByClassName("credit")[7].setAttribute("value","22");
            document.getElementsByClassName("credit")[8].setAttribute("value","16");
        }
        else{
            document.getElementById("error").innerHTML="Select department";
            document.getElementById("error").setAttribute("style","display:visible");
        }
    }
}   
function result(){
    var total,totalcredit=0,cg=0;
    var semcount=document.getElementById("sem").value;
    for(let j=0;j<semcount;j++){
        let credit=document.getElementsByClassName("credit")[j].value;
        let gpa=document.getElementsByClassName("gpa")[j].value;
        cg=cg+Number(credit*gpa);
        totalcredit=totalcredit+Number(credit);
    }
    total=cg/totalcredit;
    document.getElementById("result").innerHTML="Your CGPA is  "+total.toFixed(2);
    
}