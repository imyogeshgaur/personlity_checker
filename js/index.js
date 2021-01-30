const dataBase = [
    {
        "data1":"is a perfect Blend of Brain and Strength",
        "data2":"are liked by Everyone and you have a good choice in fashion,",
        "data3":" are very unique and intresting Person",
        "data4":"will stay happy and prosperous always"
    },
    {
        "data1":"is a very Intelligent Person",
        "data2":"are talented and smartworker by nature,",
        "data3":" are always ready for help to anyone",
        "data4":"will achieve great sucess in life"
    },
    {
        "data1":"has a great Sense of Humour",
        "data2":"have a great ability to make people laugh in their tough time,",
        "data3":" are a kind hearted and family oriented Person",
        "data4":"keep smiling and make other people also happy"   
    },
    {
        "data1":"always try to make close friends and do not have much friends to talk",
        "data2":"are a true legend and work hard on your goals,",
        "data3":" are a perfectionist and do your work in time",
        "data4":"may fullfill your's and your parent's dream one day"
    },
    {
        "data1":"is a very Optimistic Person",
        "data2":"are consistent and deterministic in following Your Dreams,",
        "data3":" try to help another person and have a kind nature towards them",
        "data4":"may become a great leader one day and do something Great in life"
    },
    {
        "data1":"is a very good Listner and trustworthy person",
        "data2":"are ready to take any charge and also justify your position,",
        "data3":" are like a coconut hard from outside but kind  from inside",
        "data4":"will grow everyday and defeat the challenges of your life"
    },
    {
        "data1":"is a amazing and talkative person",
        "data2":"never show two faces to anyone and do not show off in public,",
        "data3":" speak in sucha way that will Enchant the listner completly",
        "data4":"necome great motivational speker and influencer one day"
    }
]

let randomiseNumber = Math.floor(Math.random()*7)
console.log(randomiseNumber);

const button = document.querySelector('#submit');
const showResult = document.querySelector('#showResult');
const userName = document.querySelector('#name');


button.addEventListener('click',()=>{
    showResult.classList.remove("resultArea")
    showResult.innerHTML = `${userName.value} ${dataBase[randomiseNumber].data1}.You ${dataBase[randomiseNumber].data2}you${dataBase[randomiseNumber].data3}.I wish you ${dataBase[randomiseNumber].data4} ❤️❤️`
   

    
})