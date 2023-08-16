// MONGO
/*
  - MongoDB -> base de datos no relacional
  - MongoDB Atlas -> administra la base de datos en la nube
  - Mongoose -> biblioteca de Node.js que facilita la intereaccion con la bd Mongo DB permitiendonos el famoso CRUD (Create, Read, Uptade, Delete)

? De bases de datos y ORMS
  *- que es una base de datos??
    - sistema
      -> almacenar
      -> organizar
      -> recuperar
      INFORMACION de manera eficiente

  *- SQL vs No SQL
    ! SQL (structured Query Languag) -> SE VERA MEJOR EN EL BOOTCAMP

  *base de datos no relacionales -> MongoDB no es Sql

  

? Mongo DB
  *definicion:
    - base datos no relacional de codigo abierto, diseñada para manejar grandes volumnes de datos de manera eficiente y escable
    - orientada a documentos -> se almacenan en documentos JSON

  *Instalar MONGO
    1) https://www.mongodb.com/

  *mongo atlas -> crear cuenta

  *mongoose -> libreria de node

?Modelos y validaciones
  !modelos
    - en mondoDB no se utilizan modelo PEEROOO mongoose nos da esa posibilidad para trabajar con modelos
    - modelo = ESTRUCTURA

  !identificacion => ID

  !validaciones -> son reglas o restricciones
    - required: campo obligatorio
    - min: valor ingresado sea mayora al minimo
    - max: valor ingresado sea menor al maximo
    - enum: array de opciones
    - maxLength: validar el valor si es igual o menor al max de caracteres especificados
    - minLengtg: valida el valor si es igual o mayor al maximo de acaracters

  !opciones strings:
    - uppercase
    - lowercase
    - trim -> eliminar espacios en blanco que accidentalmente puso el usuario al comienzo y al final del texto

  !validaciones custom

? REGEX -> expresiones regulares -> /^[\w-.]+@([\w-]+.)+[\w-]{2,4}$/
  

*/

/* 
^ -> inicia
[a-zA-Z0-9._%+-] -> coincide con uno o mas caracateres alfanumericos, puntos,guiones bajos, porcentajes o signos de mas o menos -> parte local del correo
@ coindida con el arroba
[a-zA-Z0-9.-] -> coincide con uno o mas caracteres alfanumericos, puntos o guiones en la partde de dominio del correo
\. -> hace referencia al .
[a-zA-Z]{2,} -> coincide con al menos 2 caracteres alfabeticos 
$ -> final
*/

const regex = /^[\w-.]+@([\w-]+.)+[\w-]{2,4}$/

const email = "ejemplo@ejemplo.com"

let isMatch = regex.test(email)

console.log(isMatch);