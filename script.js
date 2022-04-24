'use strict';

console.log('async coding challenge 2')

const wait = function(seconds){
  return new Promise(function(resolve){
    setTimeout(resolve, seconds * 1000)
  })
}

const imgContainer = document.querySelector('.image')

const createImage = function(imgPath) {
  return new Promise(function (resolve, reject){
    const img = document.createElement('img')
    img.src = imgPath

    img.addEventListener('load', function(){
      
      imgContainer.append(img)
      resolve(img)
    })

    img.addEventListener('error', function(){
      reject(new Error('Image not found'))
    })
  })
  
}

createImage('img/img-1.jpg')
.then(img => {
  console.log('Image 1 loaded')
  return(wait(2))
})
.then(() => imgContainer.style.display = 'none')
.catch(err => console.error(err))

