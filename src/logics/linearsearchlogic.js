export default function linearSearch(arr,target){
    let array=[...arr];
    let animations=[]
    let found=false;

    for (let i = 0; i < array.length; i++) {
        animations.push({
                type:"checking",
                index:i
            })
        if(array[i]==target)
        {
            animations.push({
                type:"found",
                index:i
            })
            found=true;
            break;
        }
        else
        {
            animations.push({
                type:"not-found",
                index:i
            })
        }
        
    }

    if(!found)
    {
        animations.push({
            type:"not-found"
        })
    }

    return animations
}
