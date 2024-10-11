//step 1
const n=20;
const array=[];
let progresschecker=false;


inputtaking();


let audioCtx=null;

function playnote(freq)
{
    if(audioCtx===null)
    {
        audioCtx=new(AudioContext || webkitAudioContext || window.webkitAudioContext)();
    }

    if (!isFinite(freq)) {
        console.error("Invalid frequency value:", freq);
        return;
    }

    const dur=0.1;
    const osc=audioCtx.createOscillator();

    if (!isFinite(freq)) {
        console.error("Invalid frequency value:", freq);
        return;
    }

    osc.frequency.value=freq;
    osc.start();
    osc.stop(audioCtx.currentTime+dur);

    const node=audioCtx.createGain();

    node.gain.value=0.1;

    node.gain.linearRampToValueAtTime(0,audioCtx.currentTime+dur);
    osc.connect(node);

    node.connect(audioCtx.destination);

}
//step 2

function inputtaking() {
    if (progresschecker) return;

   // const n = arraylength(); // Fetch array length dynamically
    for (let i = 0; i < n; i++) {
        array[i] = Math.random();
    }
    ShowBar();
}


function animate(moves)
{
    if(moves.length==0)
    {
        ShowBar();
        progresschecker = false;
        return;
    }
    const move=moves.shift();
    const [i,j]=move.indices;
    if(move.type=="swap")
    {
        [array[i],array[j]]=[array[j],array[i]];
    }
    else if(move.type=="fix")
    {
        array[j]=i;
    }

   playnote(200+array[i]*500);
    playnote(200+array[j]*500);

    ShowBar(move); //function is called for visualising particular move with different color ; 
    //it is call for each pair of indices ;

    //setTimeout is a JavaScript function that allows you to execute a function after a specified delay.
    setTimeout(function(){animate(moves);},5000/updateSpeed());


}


//step 3

function ShowBar(move)
{
    container.innerHTML="";
    for(let i=0;i<array.length;i++)
    {
       
        const bar=document.createElement("div");//new bar is created as a div 
         bar.style.height=array[i]*100+"%";
         bar.classList.add("bar");
         if(move && move.indices.includes(i))
         {
             

               if(move.type=="swap" || move.type=="fix")
                  bar.style.backgroundColor="#6c274c";
               else
                  bar.style.backgroundColor="#4361ee";//neon blue
                
         }

        
         container.appendChild(bar);


    }

}
//function for speed controlling 
function updateSpeed() {
    const speedSlider = document.getElementById('speedSlider');
    speed = speedSlider.value;
    return speed;
}

//funtion for comntroling array length 
function arraylength() {
    const lenSlider = document.getElementById('length');
    arrlen = lenSlider.value;
    return arrlen;
}