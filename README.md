# Grupo-1 Parcial-2 EcommerceGamer
INTEGRANTES: LUCAS EXEQUIEL MORENO, CARLA PIRIZ, FRANCO GOZALVEZZ


GENERACIÓN

TRABAJAR CON LA CONSOLA DE CMD

1- Crear la base de datos: miutnseq
2- crear una carpeta que contenga para contener un proyecto

3- Crear un proyecto de node
npm init -y

4 - Instalar las siguientes dependenciaS

npm i express
npm i dotenv
npm i sequelize mysql2

Dependencias a instalar de Desarrollo:OJO SI SE INSTAla como DESARROLLO  los comandos posgteriores hay que correrlos con npx
npm i sequelize-cli --D  ASÍ NOS DA ERROR POR NO INSTALARLO GLOBAL

5-listar dependencias
npm list -g 

6-Crear en la raíz del proyecto los siguientes archivos:
.gitignore ( para ignorar los archivos de Git). 
.env (Para declarar las variables de entorno)
.sequelizerc 
Crear la carpeta public


7.Abrir el archivo.gitignore y en su interior agregar:
/node_modules/

8- Abrir el archivo.env y en su interior agregar:

DB_USERNAME= root
DB_PASSWORD=
DB_HOST= localhost
DB_DATABASE=el nombre de tu base de datos
DB_PORT=3306
DB_DIALECT=mysql




9 -Abrir el archivo -sequelizerc y en su interior agregar:

const path = require('path')
module.exports = {
config: path.resolve('./src/database/config', 'config.js'),
'models-path': path.resolve('./src/database/models'),
'seeders-path': path.resolve('./src/database/seeders'),
'migrations-path': path.resolve('./src/database/migrations'),
}


10 - Crear la carpeta src
desde la terminal realizar el cd/src par aposicionarse en el interior de esa carpeta
Dentro de src crear:
Archivo : app.js
Carpetas: database , views, routes, controller

11 - Cambiar al interior de la carpeta database
cd database
En su interior ejecutar: npx sequelize-cli init
Se crean unas caréta en su interior

12 - Navegar a la carpeta config y en su interior está el archivo config.json
Renombrar dicho archivo por config.js ( ESTO OBLIGA A CAMBIAR EL CONTENIDO DE OTRO ARCHIVO)

13 - Eliminar su interior y reeplazarlo por este contenido (CONFIG.JS):

require('dotenv').config()
module.exports = {
  
  "development": {
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  dialect: process.env.DB_DIALECT
  }

}

14- Ubicar la carpeta Model, en su interior está el archivo index.js. 
REEMPLAZAR LA LINEA QUE INVOCA AL VIEJO ARCHIVO CONFIG.JSON, por CONFIG.JS

15 _ PLanificar cuidadosamente el modelo en un NOTEPAD



16 - CORRER TODAS LAS generaciones de modelos, primero se crean los modelos que no TIENEN CLAVE FORANEA

--PROYECTO ACTUAL ecommerceRopa

//MODELOS QUE NO TIENEN CLAVES FORANEAS
npx sequelize model:generate --name Domicilio --attributes calle:string,numero:string,codigo_postal:string,localidad:string,provincia:string
npx sequelize model:generate --name Puntodeventa --attributes domicilio:string,cuit:string,ingresos_brutos:string
npx sequelize model:generate --name Marca --attributes nombre:string
npx sequelize model:generate --name Categoria --attributes nombre:string

//
npx sequelize model:generate --name Usuario --attributes name:string,dni:string,email:string,contraseña:string,usuario:string,domicilioId:integer

npx sequelize model:generate --name Factura --attributes fecha:string,tipo:string,total:string,usuarioId:integer,puntodeventaId:integer

npx sequelize model:generate --name Detallefactura --attributes cantidad:integer,subtotal:string,total:string,facturaId:integer

npx sequelize model:generate --name Producto --attributes stock:string,desc:string,precio:string,nombre:string,prodimg:string,categoriaId:integer,marcaid:integer,detallefacturaId:integer


17- Se abren las migraciones que tienen clave foránea y se especidican las REFERENCES.

//MODIFICAMOS LAS CLAVES FORANEAS EN EL CODIGO

ARCHIVO USUARIO

domicilioId: {
      type: Sequelize.INTEGER,
      references: {
        model: 'domicilios',
        key: 'id'
      }
    },
ARCHIVO FACTURA

usuarioId: {
      type: Sequelize.INTEGER,
      references: {
        model: 'usuarios',
        key: 'id'
      }
    },

puntodeventaId: {
      type: Sequelize.INTEGER,
      references: {
        model: 'puntodeventa',
        key: 'id'
      }
    },


ARCHIVO DETALLEFACTURA

facturaId: {
      type: Sequelize.INTEGER,
      references: {
        model: 'facturas',
        key: 'id'
      }
    },

ARCHIVO PRODUCTO

categoriaId: {
      type: Sequelize.INTEGER,
      references: {
        model: 'categoria',
        key: 'id'
      }
    },

marcaId: {
      type: Sequelize.INTEGER,
      references: {
        model: 'marcas',
        key: 'id'
      }
    },

detallefacturacantidadId: {
      type: Sequelize.INTEGER,
      references: {
        model: 'detallefacturas',
        key: 'id'
      }
    },




18 - SE ESTABLECEN EN CADA ARCHIVO DE MODELO LAS RELACIONES



static associate(models) {
      // define association here
	
      //aqui dentro
    }

ARCHIVO FACTURA
	
factura.belongsTo(usuario, { as: 'usuarioid', constraints: false })

ARCHIVO USUARIO

usuario.belongsTo(domicilio)

ARCHIVO 

 


19 - SE REALIZA LA MIGRACIÓN

npx sequelize-cli db:migrate







---------------SENTENCIAS GENERATE MODELO CLASE PRODUCTOS ----------- -------------------

npx sequelize model:generate --name Color --attributes name:string

npx sequelize model:generate --name Size --attributes name:string

npx sequelize model:generate --name Brand --attributes name:string

npx sequelize model:generate --name Visibility --attributes name:string

npx sequelize model:generate --name Category --attributes name:string

npx sequelize model:generate --name Product --attributes name:string,description:string,price:decimal,stock:integer,stock_min:integer,stock_max:integer,brandId:integer,categorieId:integer,sizeId:integer,visibilityId:integer,colorId:integer

npx sequelize model:generate --name Image --attributes name:string,productId:integer


---------------SENTENCIAS GENERATE MODELO CLASE 8/11 -------------------


sequelize model:generate --name Rol --attributes name:string

sequelize model:generate --name User --attributes firstName:string,lastName:string,username:string,email:string,password:string,avatar:string,rolesId:integer

sequelize model:generate --name Address --attributes street:string,number:integer,city:string,state:string,floor:integer,apartment:string,cp:string,phoneNumber:integer,usersId:integer

sequelize model:generate --name Status --attributes name:string

sequelize model:generate --name Payment --attributes name:string

sequelize model:generate --name Order --attributes number:integer,date:date,total:decimal,paymentsId:integer,usersId:integer,usersAddressesId:integer,statussesId:integer

sequelize model:generate --name Shipping --attributes street:string,number:integer,price:string,city:string,state:string,floor:integer,apartment:string,cp:string,phoneNumber:integer,ordersId:integer,ordersPaymentsId:integer

sequelize model:generate --name OrderDetail --attributes quantity:decimal,subtotal:decimal,ordersId:integer,productsId:integer

------------------------- CONFIG:JS --------------------------

require('dotenv').config()
module.exports = {
  
  "development": {
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  dialect: process.env.DB_DIALECT
  }

}
