//Referencia de html

const lblOnline = document.querySelector('#lblOnline');
const lblOffline = document.querySelector('#lblOffline');
const txtMensaje = document.querySelector('#txtMensaje');
const btnEnviar = document.querySelector('#btnEnviar');

const socket = io();

socket.on('connect', ()=>{

    console.log('Connected');

    lblOffline.style.display = 'none';
    lblOnline.style.display = '';

});

socket.on('disconnect', ()=>{

    console.log('Disconnected');

    lblOffline.style.display = '';
    lblOnline.style.display = 'none';

});

socket.on('enviar-mensaje', (payload) => {
    console.log(payload);
});


btnEnviar.addEventListener('click',async()=>{
    const mensaje = txtMensaje.value;

    const payload={
        mensaje,
        id:'abc',
        fecha: new Date().getTime()
    }

    socket.emit('enviar-mensaje', payload, (id)=>{
        console.log('Desde el server', id)
    });
});
