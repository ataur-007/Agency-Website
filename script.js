const firstBtn = document.getElementById('mobileApp');
firstBtn.addEventListener('click', function(){
    const content = document.getElementById('mobileServices');
    content.style.display = 'block';
    const content1 = document.getElementById('webDevelopment');
    content1.style.display = 'none';
    const content3 = document.getElementById('gameDevelopment');
    content3.style.display = 'none';
})

//this is for second btn
const firstBtn1 = document.getElementById('webDev');
firstBtn1.addEventListener('click', function(){
    const content = document.getElementById('webDevelopment');
    content.style.display = 'block';
    const content1 = document.getElementById('mobileServices');
    content1.style.display = 'none';
    const content3 = document.getElementById('gameDevelopment');
    content3.style.display = 'none';
    
})
//this is for Third btn
const firstBtn3 = document.getElementById('gameDev');
firstBtn3.addEventListener('click', function(){
    const content = document.getElementById('webDevelopment');
    content.style.display = 'none';
    const content1 = document.getElementById('mobileServices');
    content1.style.display = 'none';
    const content3 = document.getElementById('gameDevelopment');
    content3.style.display = 'block';
    
})