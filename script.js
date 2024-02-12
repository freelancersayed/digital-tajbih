const SubhanAllahOutput = document.getElementById('SubhanAllahOutput');
const SubhanAllahInput = document.getElementById('SubhanAllahInput');
const SubhanAllahDeclaine = document.getElementById('SubhanAllahDeclaine');

const AlhamdulillahOutput = document.getElementById('AlhamdulillahOutput');
const AlhamdulillahInput = document.getElementById('AlhamdulillahInput');
const AlhamdulillahDeclaine = document.getElementById('AlhamdulillahDeclaine');

const AllahuakberOutput = document.getElementById('AllahuakberOutput');
const AllahuakberInput = document.getElementById('AllahuakberInput');
const AllahuakberDeclaine = document.getElementById('AllahuakberDeclaine');


let SubhanAllahInitialValue = 0;
let AlhamdulillahInitialValue = 0;
let AllahuakberInitialValue = 0;

SubhanAllahInput.addEventListener('click', function(){
    if(SubhanAllahInitialValue === 33){
        return alert('no input')
    }

    SubhanAllahInitialValue += 1
    SubhanAllahOutput.innerText = SubhanAllahInitialValue
      
})

SubhanAllahDeclaine.addEventListener('click', function(){
    if(SubhanAllahInitialValue === 0){
        return alert('no nagativ number')
    }

   SubhanAllahInitialValue -= 1
        SubhanAllahOutput.innerText = SubhanAllahInitialValue
      
})
// ==================================================================

 AlhamdulillahInput.addEventListener('click', function(){
    if(AlhamdulillahInitialValue === 33){
        return alert('no input')
    }

    AlhamdulillahInitialValue += 1
    AlhamdulillahOutput.innerText = AlhamdulillahInitialValue
      
})

AlhamdulillahDeclaine.addEventListener('click', function(){
    if(AlhamdulillahInitialValue === 0){
        return alert('no nagativ number')
    }

    AlhamdulillahInitialValue -= 1
       AlhamdulillahOutput.innerText = AlhamdulillahInitialValue
      
})

// ======================================================================

AllahuakberInput.addEventListener('click', function(){
    if(AllahuakberInitialValue === 33){
        return alert('no input')
    }

    AllahuakberInitialValue += 1
    AllahuakberOutput.innerText = AllahuakberInitialValue
      
})

AllahuakberDeclaine.addEventListener('click', function(){
    if(AllahuakberInitialValue === 0){
        return alert('no nagativ number')
    }

    AllahuakberInitialValue-= 1
    AllahuakberOutput.innerText = AllahuakberInitialValue
      
})
