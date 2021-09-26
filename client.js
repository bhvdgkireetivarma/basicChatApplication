
//install socket.io,nodemon,socket.io-client

const socket = io("http://localhost:8000");
const name=prompt('enter your name');
console.log('baby');
//send request to server so it will notify all other clients
socket.emit('new-user-joined',name);

socket.on('user-joined',name=>{

    var node=document.createElement('div');
    node.innerHTML=`${name} joined`;
    node.className='joined';
  
    document.getElementById('cont').appendChild(node);
})

socket.on('receive',obj=>{
    console.log('received');
    var temp1=document.createElement('div');
    temp1.innerHTML=`${obj.name} : ${obj.message}`;
    temp1.className='hismessage';
    document.getElementById('cont').appendChild(temp1);
})

function onbutton(){
var k=document.getElementById('text').value;
console.log(k);
var temp=document.createElement('div');
temp.innerHTML=`you : ${k}`;
temp.className='mymessage';
document.getElementById('cont').appendChild(temp);
socket.emit('send',k);
}
