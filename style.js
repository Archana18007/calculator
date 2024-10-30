function Solve(number) {
  res.value+=number 
}

function Clear() {
    res.value=""
    
}
function Result() {
    res.value=eval(res.value)
}
function Back() {
    res.value=res.value.slice(0,-1)
}