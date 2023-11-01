
let changeColor=()=>{
    const options="ABCDEF0123456789";
    let result="#";
    for(let i=0;i<6;i++){
        let index=Math.floor(Math.random(options)*options.length);
        result+=options[index];
    }
    $("body").css("background-color",result);
    $(".btn").css("background-color",result);
    $(".hex").text(result);
    
};

let copyCode=()=>{
    let code=$(".hex").text();
    navigator.clipboard.writeText(code);
};

$(".click").on("click",changeColor);
$(".copy").on("click",copyCode);