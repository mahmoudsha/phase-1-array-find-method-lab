const superbowlWin = (arr) =>{
let win = arr.find((ele)=> ele.result === 'W')
if( win === undefined){
    return win
}
return win.year
}