let countRoom = document.getElementsByClassName('count-room')[0]
let countGuest = document.getElementsByClassName('count-guest')[0]

let numAdd = document.getElementsByClassName('count+')
let numSub = document.getElementsByClassName('count-')
let count = 0

if(count <= 0){
    countRoom.innerHTML = 0
}

numAdd[0].addEventListener('click', ()=>{
    ++count
        countRoom.innerHTML = count
    
        // if(count <= 0){
        //     countRoom.innerHTML = 0
        // }
    })
    
numAdd[1].addEventListener('click', ()=>{
        ++count
        countGuest.innerHTML = count
        // if(count <= 0){
            //     countRoom.innerHTML = 0
        // }
        
    })
    

numSub[0].addEventListener('click', ()=>{
        --count
        countRoom.innerHTML = count

        // if(count <= 0){
        //     countRoom.innerHTML = 0
        // }
    
    })
    
numSub[1].addEventListener('click', ()=>{
        --count
        countGuest.innerHTML = count
        
        // if(count <= 0){
        //     countGuest.innerHTML = 0
        // }
    
    })
    
let main = document.getElementById("main")

let submit = document.getElementById('submit')

let signIn = document.getElementById('get-sign')

let passwCheck = document.getElementById('check')

let calendar = document.getElementsByClassName('fa-calendar-days')

let checkIn = document.getElementById('check-in')

let checkOut = document.getElementById('check-out')

let select = document.getElementsByClassName('date-selection')

let doneDate = document.getElementsByClassName('check-date')

let date = document.getElementsByClassName('date')

let btn = document.getElementById('button')

let exit = document.getElementById('exit')

let input = document.getElementsByClassName('input')

let invalid = document.getElementsByClassName("invalid")

let bgBlur = document.getElementById("blurred")


document.addEventListener('DOMContentLoaded', function windowTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

//For class 0

signIn.addEventListener('click',function(){
    select[0].style.top = '50%'
    bgBlur.style.display = "block"
    main.style.height = "100vh"
    main.style.overflow = "hidden"
})

passwCheck.addEventListener('click',()=>{
    input[2].type = passwCheck.checked ? "text" : "password";    
})

// submit.addEventListener('click',function(){
//     // select[0].style.top = '-50%'
//     // bgBlur.style.display = "none"
        
//     input.foreach((i)=>{
        
//         if(input[i].value === "")
//         {
//             invalid[i].innerHTML = "Please fill this requirment.";
//         }
    
//         else(input[i].value === "")
//         {
//             invalid[i].innerHTML = "";
//         }
        
//         })
// })

//For class 1

calendar[0].addEventListener('click',function(){
    bgBlur.style.display = "block"
    select[1].style.top = '50%'
    // main.style.height = "100vh"
    // main.style.overflow = "hidden"
})

doneDate[0].addEventListener('click',function(){
    checkIn.innerHTML = date[0].value
    bgBlur.style.display = "none"
    select[1].style.top = '-50%'
    // main.style.height = "100%"
    // main.style.overflow = "auto"  
})

//For class 2

calendar[1].addEventListener('click',function(){
    bgBlur.style.display = "block"
    select[2].style.top = '50%'
    // main.style.height = "100vh"
    // main.style.overflow = "hidden"
})

doneDate[1].addEventListener('click',function(){
    checkOut.innerHTML = date[1].value
    bgBlur.style.display = "none"
    select[2].style.top = '-50%'
    // main.style.height = "100%"
    // main.style.overflow = "auto" 
})

// For class 3


btn.addEventListener('click',()=>{
    bgBlur.style.display = "block"
    select[3].style.top = '50%'
    // main.style.height = "100vh"
    // main.style.overflow = "hidden"
})


exit.addEventListener('click',()=>{
    select[3].style.top = '-50%'        
    bgBlur.style.display = "none"
    // main.style.height = "100%"
    // main.style.overflow = "auto" 
})


let aboutImg = document.getElementById("about-us-image")
let countImg = 0

setInterval(() => {
    

    ++countImg
    if (countImg == 3){
        countImg = 0
    }

    console.log(countImg)

    if(countImg == 0)
    {
        aboutImg.src = "https://img.freepik.com/premium-photo/minsk-belarus-august-2017-columns-guestroom-hall-reception-modern-luxury-hotel_97694-6572.jpg"
    }

    else if(countImg == 1)
    {
        aboutImg.src = "https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWxzfGVufDB8fDB8fHww&w=1000&q=80"
    }

    else if(countImg == 2)
    {
        aboutImg.src = "https://image-tc.galaxy.tf/wijpeg-ckep53jmxkfl190q5odxrzqts/hotel-motto-vienna-deluxe-2_standard.jpg?crop=112%2C0%2C1777%2C1333"
    }

}, 4000);