const socketController = socket => {

    console.log('Cliente conectado', socket.id);

    socket.on('disconnect', () => {
        console.log('Cliente desconectado');
    });

    //pyload mensaje enviado desde el cliente 
    socket.on('enviar-mensaje', (payload, callback) => {

        const id = 123456;
        callback(id);

        //El broadcast lo que hace es enviar el mensaje a todos excepto al clienet que escribio el mensaje
        socket.broadcast.emit('enviar-mensaje', payload);

    });
}

module.exports = {
    socketController
}