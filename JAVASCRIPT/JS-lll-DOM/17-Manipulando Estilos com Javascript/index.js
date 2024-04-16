function uselight(){
  document.body.style.backgroundColor=' #f1f5f9'
  document.body.style.color =' #212529'
}

function usedark (){
  document.body.style.backgroundColor = '#212529'
  document.body.style.color='#f1f5f9'
}
  
function switchTheme(){
  document.body.classList.toggle('is-light')
  document.body.classList.toggle('is-dark')
}


document.getElementById('lightBtn').addEventListener('click', uselight)
document.getElementById('darkBtn').addEventListener('click', usedark)
document.getElementById('switchBtn').addEventListener('click',switchTheme)