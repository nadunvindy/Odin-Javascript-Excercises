const fibonacci = function(num) {
    if (Number(num)<0){return "OOPS"};
        let fibsequence=[];
        for(let i=0;i<Number(num)+1;i++){
            if(i==0){
                fibsequence.push(0)
            }
            else if(i==1){
                fibsequence.push(1)
            }
            else{
                fibsequence.push(fibsequence[i-1]+fibsequence[i-2]);
            }  
        }
        return fibsequence[Number(num)];
        
    
    
};

// Do not edit below this line
module.exports = fibonacci;
