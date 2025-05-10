console.log(1323);

let add = document.querySelector('.zam')

add.addEventListener('click', function(){
  let form = document.querySelector('.form-container')
  console.log(form);
  form.style.display = 'flex'
  let close = document.querySelector('.add_close')
  close.addEventListener('click', function(){
    let form = document.querySelector('.form-container')
    form.style.display = 'none'
  })
})


let buy = document.querySelectorAll('.pr button')

buy.forEach((btn)=>{
  btn.addEventListener('click', function(){
    let form = document.querySelector('.form-box')
    console.log(form);
    form.style.display = 'flex'
    let close = document.querySelector('.new_close')
    close.addEventListener('click', function(){
      let form = document.querySelector('.form-box')
      

      console.log(form);
      form.style.display = 'none'
    })
    let approve = document.querySelector('.approve')
    approve.addEventListener('click', function(){
      let text = document.querySelector('.confirmation')
      text.style.display = 'block'
    })
  })
})




