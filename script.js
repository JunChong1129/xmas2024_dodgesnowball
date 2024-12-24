const btn = document.getElementById("btn");
const round = document.getElementById("round");
const position = document.getElementById("position");

const Cmp1 = document.getElementById("Cmp1");
const Cmp2 = document.getElementById("Cmp2");
const Cmp3 = document.getElementById("Cmp3");
const Cmp4 = document.getElementById("Cmp4");
const Cmp5 = document.getElementById("Cmp5");
const Cmp6 = document.getElementById("Cmp6");
const Cmp7 = document.getElementById("Cmp7");
const Cmp8 = document.getElementById("Cmp8");
const Cmp9 = document.getElementById("Cmp9");
const Cmp10 = document.getElementById("Cmp10");
const Cmp11 = document.getElementById("Cmp11");
const Cmp12 = document.getElementById("Cmp12");

const Ply1 = document.getElementById("Ply1");
const Ply2 = document.getElementById("Ply2");
const Ply3 = document.getElementById("Ply3");
const Ply4 = document.getElementById("Ply4");
const Ply5 = document.getElementById("Ply5");
const Ply6 = document.getElementById("Ply6");
const Ply7 = document.getElementById("Ply7");
const Ply8 = document.getElementById("Ply8");
const Ply9 = document.getElementById("Ply9");

const Player = "X" ;
const PC = "O" ;

let i, j, k;
let x, y;

let Start = 0;
let Game = 0;
let PlyBox = Ply5 ;
let PlyPost = 5 ;
let A = 2, B = 2 ;
let Stop = 0;

let numCmp ;
let CmpSide = [0,0,0,0] ;
let CmpPost = [[0,0],[0,0],[0,0],[0,0]];
let CmpTimmer ;

let A_CmpBoxs = [0,0,0] ;
let B_CmpBoxs = [0,0,0] ;
let C_CmpBoxs = [0,0,0] ;
let D_CmpBoxs = [0,0,0] ;
let T1_CmpBoxs = [0,0,0,0] ;
let T2_CmpBoxs = [0,0,0,0] ;
let T3_CmpBoxs = [0,0,0,0] ;
let A_CmpId ;
let B_CmpId ;
let C_CmpId ;
let D_CmpId ;
let CmpId ;

btn.onclick = startGame ;
function startGame(){
    if(Start==0){
        Game = 0 ;
        PlyBox = Ply5 ;
        PlyPost = 5 ;
        A = 2 ;
        B = 2 ;

        Start = 1 ;

        btn.style.backgroundColor = "#5A626B" ;

        getPly();
        resetGame();
        genCmp();
    }
}

function resetGame(){
    Cmp1.textContent = " ";
    Cmp2.textContent = " ";
    Cmp3.textContent = " ";
    Cmp4.textContent = " ";
    Cmp5.textContent = " ";
    Cmp6.textContent = " ";
    Cmp7.textContent = " ";
    Cmp8.textContent = " ";
    Cmp9.textContent = " ";
    Cmp10.textContent = " ";
    Cmp11.textContent = " ";
    Cmp12.textContent = " ";

    Cmp1.style.background = "#B3C1CE";
    Cmp2.style.background = "#B3C1CE";
    Cmp3.style.background = "#B3C1CE";
    Cmp4.style.background = "#B3C1CE";
    Cmp5.style.background = "#B3C1CE";
    Cmp6.style.background = "#B3C1CE";
    Cmp7.style.background = "#B3C1CE";
    Cmp8.style.background = "#B3C1CE";
    Cmp9.style.background = "#B3C1CE";
    Cmp10.style.background = "#B3C1CE";
    Cmp11.style.background = "#B3C1CE";
    Cmp12.style.background = "#B3C1CE";

    Ply1.textContent = "1";
    Ply2.textContent = "2";
    Ply3.textContent = "3";
    Ply4.textContent = "4";
    Ply5.textContent = "5";
    Ply6.textContent = "6";
    Ply7.textContent = "7";
    Ply8.textContent = "8";
    Ply9.textContent = "9";    

    displayContent();
}

function displayContent(){
    round.textContent = "Round : " + Game ;
    position.textContent = "Current Position : " + PlyPost ;
    PlyBox.textContent = Player ;
    PlyBox.style.backgroundColor = "#717171" ; 
}

function getPly(){
    Ply1.addEventListener("mouseover",chgOver);
    Ply2.addEventListener("mouseover",chgOver);
    Ply3.addEventListener("mouseover",chgOver);
    Ply4.addEventListener("mouseover",chgOver);
    Ply5.addEventListener("mouseover",chgOver);
    Ply6.addEventListener("mouseover",chgOver);
    Ply7.addEventListener("mouseover",chgOver);
    Ply8.addEventListener("mouseover",chgOver);
    Ply9.addEventListener("mouseover",chgOver);
    function chgOver(event){
        let word = event.target.textContent;
        if(word!=Player)
            event.target.style.backgroundColor = "#928E8D" ;
    }

    Ply1.addEventListener("mouseout",chgOut);
    Ply2.addEventListener("mouseout",chgOut);
    Ply3.addEventListener("mouseout",chgOut);
    Ply4.addEventListener("mouseout",chgOut);
    Ply5.addEventListener("mouseout",chgOut);
    Ply6.addEventListener("mouseout",chgOut);
    Ply7.addEventListener("mouseout",chgOut);
    Ply8.addEventListener("mouseout",chgOut);
    Ply9.addEventListener("mouseout",chgOut);
    function chgOut(event){
        let word = event.target.textContent;
        if(word!=Player)
            event.target.style.backgroundColor = "#AAAAAA" ;
    }

    Ply1.addEventListener("click",chgClick);
    Ply2.addEventListener("click",chgClick);
    Ply3.addEventListener("click",chgClick);
    Ply4.addEventListener("click",chgClick);
    Ply5.addEventListener("click",chgClick);
    Ply6.addEventListener("click",chgClick);
    Ply7.addEventListener("click",chgClick);
    Ply8.addEventListener("click",chgClick);
    Ply9.addEventListener("click",chgClick);
    function chgClick(event){
        let ignoreO = event.target.textContent ;
        
        if(ignoreO!="O")
        {
            PlyBox.textContent = PlyPost ;
            PlyBox.style.backgroundColor = "#AAAAAA" ;
            
            PlyPost = event.target.textContent;
            switch (PlyPost)
            {
                case "1" : PlyBox = Ply1; A=1; B=1; break;
                case "2" : PlyBox = Ply2; A=1; B=2; break;
                case "3" : PlyBox = Ply3; A=1; B=3; break;
                case "4" : PlyBox = Ply4; A=2; B=1; break;
                case "5" : PlyBox = Ply5; A=2; B=2; break;
                case "6" : PlyBox = Ply6; A=2; B=3; break;
                case "7" : PlyBox = Ply7; A=3; B=1; break;
                case "8" : PlyBox = Ply8; A=3; B=2; break;
                case "9" : PlyBox = Ply9; A=3; B=3; break;
            }
        }

        displayContent();
    }
}

function genCmp(){
    let sideRdmCmp, postRdmCmp ;
    let CmpVer=0 , CmpHor=0 ;

    // Number of Cmp
    if(Game==0||Game==1)
        numCmp = 1 ;
    else
        numCmp = Game ;

    // Side of Each Cmp
    if(numCmp==1)
        CmpSide[0] = Math.ceil(Math.random()*4);
    else if(numCmp==2)
    {
        for( i=0 ; i<2 ; i++ )
        {
            sideRdmCmp = Math.floor(Math.random()*2);
            if(i==0)
                sideRdmCmp++ ;
            else
                sideRdmCmp+=3 ;
            CmpSide[i] = sideRdmCmp ;
        }
    }
    else if(numCmp==3)
    {
        sideRdmCmp = Math.ceil(Math.random()*4);
        i = 0 ;
        for(j=1;j<=4;j++)
        {
            if(j!=sideRdmCmp)
            {
                CmpSide[i] = j ;
                i++;
            }
        }
    }
    else
    {
        CmpSide[0] = 1;
        CmpSide[1] = 2;
        CmpSide[2] = 3;
        CmpSide[3] = 4;
    }

    // Post of Each Cmp
    for(i=0;i<numCmp;i++)
    {
        sideRdmCmp = CmpSide[i];

        if(sideRdmCmp==1)
        {
            CmpPost[i][0] = 0;
            CmpVer++;
        }
        else if(sideRdmCmp==2)
        {
            CmpPost[i][0] = 4;
            CmpVer++;
        }   
        else if(sideRdmCmp==3)
        {
            CmpPost[i][1] = 0;
            CmpHor++;
        }
        else
        {
            CmpPost[i][1] = 4; 
            CmpHor++;
        }

        if((sideRdmCmp==1||sideRdmCmp==2)&&CmpVer!=2)
            CmpPost[i][1] = B;
        else if((sideRdmCmp==3||sideRdmCmp==4)&&CmpHor!=2)
            CmpPost[i][0] = A; 
        else if(sideRdmCmp==1||sideRdmCmp==2)
        {
            do
            {
                postRdmCmp = Math.ceil(Math.random()*3); 
            }while(postRdmCmp==B)
            CmpPost[i][1] = postRdmCmp;
        }
        else
        {
            do
            {
                postRdmCmp = Math.ceil(Math.random()*3); 
            }while(postRdmCmp==A)
            CmpPost[i][0] = postRdmCmp;            
        }      
    }

    // Display of Cmp
    for(i=0;i<numCmp;i++)
    {
        x = CmpPost[i][0];
        y = CmpPost[i][1];

        if(x==0)
            switch(y)
            {
                case 1 : Cmp1.textContent = PC ;
                            Cmp1.style.background = "#7D9198"; break;
                case 2 : Cmp2.textContent = PC ;
                            Cmp2.style.background = "#7D9198"; break;
                case 3 : Cmp3.textContent = PC ;
                            Cmp3.style.background = "#7D9198"; break;
            }
        else if(x==4)
            switch(y)
            {
                case 1 : Cmp9.textContent = PC ;
                            Cmp9.style.background = "#7D9198"; break;
                case 2 : Cmp8.textContent = PC ;
                            Cmp8.style.background = "#7D9198"; break;
                case 3 : Cmp7.textContent = PC ;
                            Cmp7.style.background = "#7D9198"; break;
            }
        else if(y==0)
            switch(x)
            {
                case 1 : Cmp12.textContent = PC ;
                            Cmp12.style.background = "#7D9198"; break;
                case 2 : Cmp11.textContent = PC ;
                            Cmp11.style.background = "#7D9198"; break;
                case 3 : Cmp10.textContent = PC ;
                            Cmp10.style.background = "#7D9198"; break;
            }   
        else      
            switch(x)
            {
                case 1 : Cmp4.textContent = PC ;
                            Cmp4.style.background = "#7D9198"; break;
                case 2 : Cmp5.textContent = PC ;
                            Cmp5.style.background = "#7D9198"; break;
                case 3 : Cmp6.textContent = PC ;
                            Cmp6.style.background = "#7D9198"; break;
            }     
    }

    // Cmp Timmer
    if(Game==0)
        CmpTimmer = 750 ;
    else
        CmpTimmer = 500 ;

    setTimeout(disCmp,750);
}

function disCmp(){
    let CmpBoxs = [ 0 , 0 , 0 ] ;

    for(i=0;i<numCmp;i++)
    {
        x = CmpPost[i][0] ;
        y = CmpPost[i][1] ;

        if(x==0)
            switch(y)
            {
                case 1 : CmpBoxs = [1,4,7] ; break;
                case 2 : CmpBoxs = [2,5,8] ; break;
                case 3 : CmpBoxs = [3,6,9] ; break;
            }
        else if(x==4)
            switch(y)
            {
                case 1 : CmpBoxs = [7,4,1] ; break;
                case 2 : CmpBoxs = [8,5,2] ; break;
                case 3 : CmpBoxs = [9,6,3] ; break;
            }       
        else if(y==0) 
            switch(x)
            {
                case 1 : CmpBoxs = [1,2,3] ; break;
                case 2 : CmpBoxs = [4,5,6] ; break;
                case 3 : CmpBoxs = [7,8,9] ; break;
            }  
        else    
            switch(x)
            {
                case 1 : CmpBoxs = [3,2,1] ; break;
                case 2 : CmpBoxs = [6,5,4] ; break;
                case 3 : CmpBoxs = [9,8,7] ; break;
            } 

        if(i==0)
            A_CmpBoxs = CmpBoxs;
        else if(i==1)
            B_CmpBoxs = CmpBoxs;   
        else if(i==2)
            C_CmpBoxs = CmpBoxs;   
        else
            D_CmpBoxs = CmpBoxs;     
    }

    for(i=0;i<numCmp;i++)
    {
        if(i==0)
        {
            T1_CmpBoxs[i] = A_CmpBoxs[0] ;
            T2_CmpBoxs[i] = A_CmpBoxs[1] ;
            T3_CmpBoxs[i] = A_CmpBoxs[2] ;
        }
        else if(i==1)
        {
            T1_CmpBoxs[i] = B_CmpBoxs[0] ;  
            T2_CmpBoxs[i] = B_CmpBoxs[1] ;
            T3_CmpBoxs[i] = B_CmpBoxs[2] ;            
        }
        else if(i==2)
        {
            T1_CmpBoxs[i] = C_CmpBoxs[0] ;  
            T2_CmpBoxs[i] = C_CmpBoxs[1] ;
            T3_CmpBoxs[i] = C_CmpBoxs[2] ;            
        }
        else
        {
            T1_CmpBoxs[i] = D_CmpBoxs[0] ;  
            T2_CmpBoxs[i] = D_CmpBoxs[1] ;
            T3_CmpBoxs[i] = D_CmpBoxs[2] ;               
        }
    }

    for(i=0;i<numCmp;i++)
    {
        switch(T1_CmpBoxs[i])
        {
            case 1 : CmpId = Ply1 ; break;
            case 2 : CmpId = Ply2 ; break;
            case 3 : CmpId = Ply3 ; break;
            case 4 : CmpId = Ply4 ; break;
            case 5 : CmpId = Ply5 ; break;
            case 6 : CmpId = Ply6 ; break;
            case 7 : CmpId = Ply7 ; break;
            case 8 : CmpId = Ply8 ; break;
            case 9 : CmpId = Ply9 ; break;            
        }

        if(i==0)
            A_CmpId = CmpId ;
        else if(i==1)
            B_CmpId = CmpId ;
        else if(i==2)
            C_CmpId = CmpId ;
        else
            D_CmpId = CmpId ;
    }

    setTimeout(function(){

        for(i=0;i<numCmp;i++)
        {
            if(i==0)
                A_CmpId.textContent = PC ;
            else if(i==1) 
                B_CmpId.textContent = PC ;
            else if(i==2)
                C_CmpId.textContent = PC ;
            else
                D_CmpId.textContent = PC ;
        }

        checkFirst();
    }, CmpTimmer);
}

function checkFirst(){
    for(i=0;i<numCmp;i++)
        if(T1_CmpBoxs[i]==PlyPost)
            Stop = 1 ;

    if(Stop==0)
        setTimeout(function(){
            for(i=0;i<numCmp;i++)
            {
                if(i==0)
                    A_CmpId.textContent = T1_CmpBoxs[i] ;
                else if(i==1) 
                    B_CmpId.textContent = T1_CmpBoxs[i] ;
                else if(i==2)
                    C_CmpId.textContent = T1_CmpBoxs[i] ;
                else
                    D_CmpId.textContent = T1_CmpBoxs[i] ;                
            }

            for(i=0;i<numCmp;i++)
            {
                switch(T2_CmpBoxs[i])
                {
                    case 1 : CmpId = Ply1 ; break;
                    case 2 : CmpId = Ply2 ; break;
                    case 3 : CmpId = Ply3 ; break;
                    case 4 : CmpId = Ply4 ; break;
                    case 5 : CmpId = Ply5 ; break;
                    case 6 : CmpId = Ply6 ; break;
                    case 7 : CmpId = Ply7 ; break;
                    case 8 : CmpId = Ply8 ; break;
                    case 9 : CmpId = Ply9 ; break;            
                }
        
                if(i==0)
                    A_CmpId = CmpId ;
                else if(i==1)
                    B_CmpId = CmpId ;
                else if(i==2)
                    C_CmpId = CmpId ;
                else
                    D_CmpId = CmpId ;
            }

            for(i=0;i<numCmp;i++)
            {
                if(i==0)
                    A_CmpId.textContent = PC ;
                else if(i==1) 
                    B_CmpId.textContent = PC ;
                else if(i==2)
                    C_CmpId.textContent = PC ;
                else
                    D_CmpId.textContent = PC ;
            }
      
            checkSecond();           
        }, CmpTimmer);
    else
    {
        window.alert("You lose...");
        window.location.reload(true);
    }
}  

function checkSecond(){
    for(i=0;i<numCmp;i++)
        if(T2_CmpBoxs[i]==PlyPost)
            Stop = 1 ;
        
    if(Stop==0)
        setTimeout(function(){
            for(i=0;i<numCmp;i++)
            {
                if(i==0)
                    A_CmpId.textContent = T2_CmpBoxs[i] ;
                else if(i==1) 
                    B_CmpId.textContent = T2_CmpBoxs[i] ;
                else if(i==2)
                    C_CmpId.textContent = T2_CmpBoxs[i] ;
                else
                    D_CmpId.textContent = T2_CmpBoxs[i] ;                
            }

            for(i=0;i<numCmp;i++)
            {
                switch(T3_CmpBoxs[i])
                {
                    case 1 : CmpId = Ply1 ; break;
                    case 2 : CmpId = Ply2 ; break;
                    case 3 : CmpId = Ply3 ; break;
                    case 4 : CmpId = Ply4 ; break;
                    case 5 : CmpId = Ply5 ; break;
                    case 6 : CmpId = Ply6 ; break;
                    case 7 : CmpId = Ply7 ; break;
                    case 8 : CmpId = Ply8 ; break;
                    case 9 : CmpId = Ply9 ; break;            
                }
        
                if(i==0)
                    A_CmpId = CmpId ;
                else if(i==1)
                    B_CmpId = CmpId ;
                else if(i==2)
                    C_CmpId = CmpId ;
                else
                    D_CmpId = CmpId ;
            }

            for(i=0;i<numCmp;i++)
            {
                if(i==0)
                    A_CmpId.textContent = PC ;
                else if(i==1) 
                    B_CmpId.textContent = PC ;
                else if(i==2)
                    C_CmpId.textContent = PC ;
                else
                    D_CmpId.textContent = PC ;
            }

            checkThird(); 
        }, CmpTimmer);
    else
    {
        window.alert("You lose...");
        window.location.reload(true);
    }    
}

function checkThird(){
    for(i=0;i<numCmp;i++)
        if(T3_CmpBoxs[i]==PlyPost)
            Stop = 1 ;   
    
    if(Stop==0)
    {
        setTimeout(function(){
            for(i=0;i<numCmp;i++)
            {
                if(i==0)
                    A_CmpId.textContent = T3_CmpBoxs[i] ;
                else if(i==1) 
                    B_CmpId.textContent = T3_CmpBoxs[i] ;
                else if(i==2)
                    C_CmpId.textContent = T3_CmpBoxs[i] ;
                else
                    D_CmpId.textContent = T3_CmpBoxs[i] ;                
            }   

            if(Game<4)
            {
                Game++;
                resetGame();
                genCmp();
            }            
            else
            {
                window.alert("WoW, You Win!!!");      
                window.location.reload(true);
            } 
        }, CmpTimmer);
    }
    else
    {
        window.alert("You lose...");
        window.location.reload(true);
    }    
}