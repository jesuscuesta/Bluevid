# Bluevid

Aplicación parte de la plataforma para el [hackathon de la Comunidad de Madrid](https://vencealvirus.org/).

## Comandos

### Levantar la aplicación

Para la levantar la aplicación tenemos el comando por defecto de ionic, y el específico por estar utilizando angular por debajo.

```js
// Nos levantará la aplicación en el puesto 4200. Teniendo que abrir el navegador en http://localhost:4200
npm run start

//Nos abrirá automáticamente una pestaña del navegador con la aplicación en el puerto 8100
npm run start:ionic

```

### Generar documentación técnica

Para generar la documentación técnica del proyecto utilizaremos compodoc. Esta librería nos generará una carpeta `docs` con una web dentro. Además podremos ejecutar otro comando, que nos levantará un servidor para ver la web con dicha documentación.

```js
npm run doc

// Nos habilitará un puerto y una url para ver la documentación: http://127.0.0.1:8080
npm run doc:live

```

### Test unitarios
Podemos ejecutar test unitarios para validarlos, o ejectuar el comando para que nos valide la covertura de test del código.

```js
// Nos levantaría un navegador para ir depurando los test unitarios
npm run test

// Nos ejecutaría los test unitarios y nos analizaría si pasamos la covertura de test indicada en el kama
npm run test:cov

```

## Plugins

### Bluetooth

Hemos instalado uno de los plugins oficiales para bluetooth de ionic [Bluetooth serial](https://ionicframework.com/docs/native/bluetooth-serial).

Para su correcto uso, es necesario leer la documentación del [github de plugin](https://github.com/don/BluetoothSerial). De las funciones que más nos interesan son la de [descubrir otros dispositivos con bluetooth cercanos](https://github.com/don/BluetoothSerial#discoverunpaired).

