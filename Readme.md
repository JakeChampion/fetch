window.fetch polyfill
La fetch()función es un mecanismo basado en promesas para realizar solicitudes web mediante programación en el navegador. Este proyecto es un polyfill que implementa un subconjunto de la especificación Fetch estándar , suficiente para hacer fetchun reemplazo viable para la mayoría de los usos de XMLHttpRequest en aplicaciones web tradicionales.

Tabla de contenido
Leé esto primero
Instalación
Uso
Importador
HTML
JSON
Metadatos de respuesta
Formulario de publicación
Publicar JSON
Subir archivo
Advertencias
Manejo de estados de error HTTP
Envío de cookies
Recibir cookies
Modos de redireccionamiento
Obtención de la URL de respuesta
Abortar solicitudes
Soporte del navegador
Leé esto primero
Si cree que encontró un error con el fetchcomportamiento de su navegador, no abra un problema en este repositorio a menos que esté probando en una versión anterior de un navegador que no es compatible de window.fetchforma nativa. Asegúrese de leer todo este archivo Léame, especialmente la sección Advertencias , ya que probablemente haya una solución alternativa conocida para un problema que haya encontrado. Este proyecto es un polyfill , y dado que todos los navegadores modernos ahora implementan la fetchfunción de forma nativa, ningún código de este proyecto tiene ningún efecto allí. Consulte Soporte del navegador para obtener información detallada.

Si tiene problemas para realizar una solicitud a otro dominio (un subdominio o número de puerto diferente también constituye otro dominio), familiarícese con todas las complejidades y limitaciones de las solicitudes CORS . Debido a que CORS requiere la participación del servidor mediante la implementación de encabezados de respuesta HTTP específicos, a menudo no es trivial configurarlo o depurarlo. CORS es manejado exclusivamente por los mecanismos internos del navegador en los que este polyfill no puede influir.

Este proyecto no funciona en entornos Node.js . Está destinado únicamente a navegadores web. Debe asegurarse de que su aplicación no intente empaquetar y ejecutar esto en el servidor.

Si tiene una idea para una nueva característica de fetch, envíe sus solicitudes de características al repositorio de la especificación . Solo agregamos funciones y API que forman parte de la especificación Fetch .

Instalación
npm install whatwg-fetch --save
Como alternativa al uso de la NGP, se puede obtener fetch.umd.jsde la prensa sección. La distribución UMD es compatible con los cargadores de módulos AMD y CommonJS, y también se carga directamente en una página mediante una <script>etiqueta.

También necesitará un polyfill Promise para navegadores más antiguos . Recomendamos taylorhakes / promise-polyfill por su pequeño tamaño y compatibilidad con Promises / A +.

Uso
Para obtener una referencia de API más completa que admite este polyfill, consulte https://github.github.io/fetch/ .

Importador
La importación automáticamente polyfill window.fetchy las API relacionadas:

importar  'whatwg-fetch'

ventana . buscar ( ... )
Si por alguna razón necesita acceder a la implementación de polyfill, está disponible a través de exportaciones:

importar  { fetch  as  fetchPolyfill }  de  'whatwg-fetch'

ventana . fetch ( ... )    // usa la versión nativa del navegador 
fetchPolyfill ( ... )   // usa la implementación de polyfill
Este enfoque se puede utilizar para, por ejemplo, utilizar la funcionalidad de aborto en navegadores que implementan una versión nativa pero desactualizada de fetch que no admite el aborto.

Para usar con el paquete web, agregue este paquete en la entryopción de configuración antes del punto de entrada de su aplicación:

entrada: [ 'whatwg-fetch' , ... ]
HTML
fetch ( '/users.html' ) 
  . luego ( función ( respuesta )  { 
    devolver  respuesta . texto ( ) 
  } ) . luego ( función ( cuerpo )  { 
    documento . cuerpo . innerHTML  =  cuerpo 
  } )
JSON
fetch ( '/users.json' ) 
  . luego ( función ( respuesta )  { 
    respuesta de retorno  . json ( ) } ) . luego ( function ( json ) { console . log ( 'parsed json' , json ) } ) . catch ( function ( ex ) { console . log ( 'error de análisis' ,
   
     
   
     ex ) 
  } )
Metadatos de respuesta
fetch ( '/users.json' ) . luego ( función ( respuesta )  { 
  consola . log ( respuesta . encabezados . get ( 'Tipo de contenido' ) ) 
  consola . log ( respuesta . encabezados . get ( 'Fecha' ) ) 
  consola . log ( respuesta . estado ) 
  consola . log ( respuesta .statusText ) 
} )
Formulario de publicación
var  formulario  =  documento . querySelector ( 'formulario' )

fetch ( '/ users' ,  { 
  método : 'POST' , 
  body : new  FormData ( formulario ) 
} )
Publicar JSON
fetch ( '/ users' ,  { 
  método : 'POST' , 
  encabezados : { 
    'Content-Type' : 'application / json' 
  } , 
  body : JSON . stringify ( { 
    name : 'Hubot' , 
    login : 'hubot' , 
  } ) 
} )
Subir archivo
var  input  =  document . querySelector ( 'input [type = "file"]' )

var  datos  =  nuevo  FormData ( ) 
de datos . append ( 'archivo' ,  input . files [ 0 ] ) 
datos . append ( 'usuario' ,  'hubot' )

fetch ( '/ avatares' ,  { 
  método : 'POST' , 
  cuerpo : datos 
} )
Advertencias
La Promesa devuelta fetch() no se rechazará en el estado de error HTTP incluso si la respuesta es HTTP 404 o 500. En cambio, se resolverá normalmente y solo se rechazará en caso de falla de la red o si algo impidió que se completara la solicitud.

Para obtener la máxima compatibilidad del navegador cuando se trata de enviar y recibir cookies, siempre proporcione la credentials: 'same-origin'opción en lugar de confiar en la predeterminada. Consulte Envío de cookies .

No todas las opciones estándar de Fetch son compatibles con este polyfill. Por ejemplo, las directivas redirecty cachese ignoran.

keepaliveno es compatible porque implicaría hacer un XHR sincrónico, que es algo que este proyecto no está dispuesto a hacer. Consulte el número 700 para obtener más información.

Manejo de estados de error HTTP
Para que la fetchpromesa se rechace en estados de error HTTP, es decir, en cualquier estado que no sea 2xx, defina un controlador de respuesta personalizado:

function  checkStatus ( respuesta )  { 
  if  ( response . status > = 200  &&  response . status  <  300 )  { 
    return  response 
  }  else  { 
    var  error  =  new  Error ( response . statusText ) 
    error . respuesta  =  error de lanzamiento de respuesta 
    } } 
  


function  parseJSON ( respuesta )  { 
  respuesta de retorno  . json ( ) }


fetch ( '/ usuarios' ) 
  . luego ( checkStatus ) 
  . luego ( parseJSON ) 
  . luego ( función ( datos )  { 
    consola . log ( 'solicitud exitosa con respuesta JSON' ,  datos ) 
  } ) . catch ( function ( error )  { 
    console . log ( 'solicitud fallida' ,  error ) 
  } )
Envío de cookies
Para solicitudes CORS , use credentials: 'include'para permitir el envío de credenciales a otros dominios:

fetch ( 'https://example.com:1234/users' ,  { 
  credentials : 'include' 
} )
El valor predeterminado para credentialses "mismo origen".

Sin credentialsembargo, el valor predeterminado para no siempre fue el mismo. Las siguientes versiones de navegadores implementaron una versión anterior de la especificación de recuperación donde el valor predeterminado era "omitir":

Firefox 39-60
Cromo 42-67
Safari 10.1-11.1.2
Si apunta a estos navegadores, es aconsejable especificar siempre credentials: 'same-origin'explícitamente con todas las solicitudes de recuperación en lugar de confiar en el predeterminado:

fetch ( '/ users' ,  { 
  credentials : 'same-origin' 
} )
Nota: debido a las limitaciones de XMLHttpRequest , credentials: 'omit'no se respeta el uso para los mismos dominios en los navegadores donde este polyfill está activo. Las cookies siempre se enviarán a los mismos dominios en navegadores más antiguos.

Recibir cookies
Al igual que con XMLHttpRequest, el Set-Cookieencabezado de respuesta devuelto por el servidor es un nombre de encabezado prohibido y, por lo tanto, no se puede leer mediante programación response.headers.get(). En cambio, es responsabilidad del navegador manejar las nuevas cookies que se configuran (si corresponde a la URL actual). A menos que sean solo HTTP, las nuevas cookies estarán disponibles a través de document.cookie.

Modos de redireccionamiento
La especificación Fetch define estos valores para la redirect opción : "seguir" (el predeterminado), "error" y "manual".

Debido a las limitaciones de XMLHttpRequest, solo el modo "seguir" está disponible en los navegadores donde este polyfill está activo.

Obtención de la URL de respuesta
Debido a las limitaciones de XMLHttpRequest, es posible que el response.urlvalor no sea confiable después de las redirecciones HTTP en navegadores más antiguos.

La solución es configurar el servidor para que establezca el encabezado HTTP de respuesta X-Request-URLen la URL actual después de cualquier redireccionamiento que pueda haber ocurrido. Debería ser seguro configurarlo incondicionalmente.

# 
Respuesta de ejemplo del controlador Ruby on Rails . encabezados [ 'X-Request-URL' ]  =  solicitud . url
Esta solución alternativa del servidor es necesaria si necesita confiabilidad response.urlen Firefox <32, Chrome <37, Safari o IE.

Abortar solicitudes
Este polyfill admite la API de recuperación abortable . Sin embargo, abortar una búsqueda requiere el uso de dos API DOM adicionales: AbortController y AbortSignal . Normalmente, los navegadores que no admiten la recuperación tampoco admitirán AbortController o AbortSignal. En consecuencia, deberá incluir un polyfill adicional para que estas API cancelen las recuperaciones:

import  'yet-another-abortcontroller-polyfill' 
import  { fetch }  from  'whatwg-fetch'

// usar la implementación del navegador nativo si admite abortar 
const  abortableFetch  =  ( 'signal'  in  new  Request ( '' ) ) ? ventana . buscar : buscar

const  controller  =  new  AbortController ( )

abortableFetch ( '/ avatares' ,  { 
  señal : controlador . señal 
} ) . catch ( function ( ex )  { 
  if  ( ex . name  ===  'AbortError' )  { 
    console . log ( 'request aborted' ) 
  } 
} )

// algún tiempo después ... 
controlador . abortar ( )
Soporte del navegador
Cromo
Firefox
Safari 6.1+
Internet Explorer 10+
Nota: los navegadores modernos como Chrome, Firefox, Microsoft Edge y Safari contienen implementaciones nativas de window.fetch, por lo tanto, el código de este polyfill no tiene ningún efecto en esos navegadores. Si cree que ha encontrado un error con la forma en que window.fetchse implementa en cualquiera de estos navegadores, debe presentar un problema con ese proveedor de navegador en lugar de este proyecto.

Lanzamientos 37
v3.5.0
Último
on 6 Nov 2020
