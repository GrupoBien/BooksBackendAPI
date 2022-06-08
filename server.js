import http from 'http';

import api from './api/api.js';

const port = process.env.PORT || 3000;
const server = http.createServer(api);

server.on('listening', onListening);
server.on('error', onError);

server.listen(port);

function onError() {
  switch (error.code) {
    case 'EACCES':
      console.error('El sistema no tiene permisos suficientes 🔴');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error('El puerto con esa dirección ya están siendo usados 😢');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

function onListening() {
  console.log(`Servidor escuchando ✅ en ${port}`);
}
