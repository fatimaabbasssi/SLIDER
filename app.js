var images = [
    "https://static.vecteezy.com/system/resources/thumbnails/040/534/789/small_2x/ai-generated-nourishing-plant-growing-rain-generate-ai-photo.jpg",
    "https://images.stockcake.com/public/d/8/1/d81a7cf3-a601-449f-9d9d-9e238382e461_large/rainy-city-view-stockcake.jpg",
    "https://c02.purpledshub.com/uploads/sites/77/2024/07/1ef413a4-a658-6c70-983c-d58c1202af28.jpeg",
    "https://i.pinimg.com/originals/90/2b/31/902b313189ddb640a67eda4751e8abf2.jpg",
    "https://thetruthinternational.com/wp-content/uploads/2024/03/weather-2.jpg",
  ];

currentId = 0

function next(){
    var slideimg = document.getElementById("slider-img")
    if(currentId === images.length -1){
        currentId = 0
    }
    else{
        currentId++
    }
slideimg.src = images[currentId]
}

function prev(){
    var slideimg = document.getElementById("slider-img")
    if(currentId === 0){
        currentId = images.length -1
    }
    else{
        currentId--
    }
slideimg.src = images[currentId]
}

  function img1(){
    document.getElementById("slider-img").src='https://static.vecteezy.com/system/resources/thumbnails/040/534/789/small_2x/ai-generated-nourishing-plant-growing-rain-generate-ai-photo.jpg'
  }

  function img2(){
    document.getElementById("slider-img").src='https://images.stockcake.com/public/d/8/1/d81a7cf3-a601-449f-9d9d-9e238382e461_large/rainy-city-view-stockcake.jpg'
  }

  function img3(){
    document.getElementById("slider-img").src='https://c02.purpledshub.com/uploads/sites/77/2024/07/1ef413a4-a658-6c70-983c-d58c1202af28.jpeg'
  }

  function img4(){
    document.getElementById("slider-img").src='https://i.pinimg.com/originals/90/2b/31/902b313189ddb640a67eda4751e8abf2.jpg'
  }

  function img5(){
    document.getElementById("slider-img").src='https://thetruthinternational.com/wp-content/uploads/2024/03/weather-2.jpg'
  }