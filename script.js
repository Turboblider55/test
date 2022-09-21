document.getElementById("lab1").innerHTML = (Math.floor(Math.random()*100))+"";
        document.getElementById("lab2").innerHTML = (Math.floor(Math.random()*100))+"";
        let RandNums = () =>{
            document.getElementById("lab1").innerHTML = Math.floor(Math.random()*100);
            document.getElementById("lab2").innerHTML = Math.floor(Math.random()*100);
            document.getElementById("result").classList.remove("true");
            document.getElementById("result").classList.remove("false");
            document.getElementById("result").innerHTML = '<i class="fa-solid fa-question"></i>';
        }
        let Check = () =>{
            let num1 = +document.getElementById("lab1").innerText;
            let num2 = +document.getElementById("lab2").innerText;
            if(num1 + num2 == document.getElementById("answer").value){
                document.getElementById("result").classList.remove("false")
                document.getElementById("result").classList.add("true");
                document.getElementById("result").innerHTML = '<i class="fa-solid fa-thumbs-up"></i>';
            }
            else{
                document.getElementById("result").classList.remove("true")
                document.getElementById("result").classList.add("false");
                document.getElementById("result").innerHTML = '<i class="fa-solid fa-thumbs-down"></i>';
            }
        }