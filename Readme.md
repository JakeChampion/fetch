ventana.obtener polyfill
La fetch()función es un mecanismo basado en Promise para realizar solicitudes web mediante programación en el navegador. Este proyecto es un polyfill que implementa un subconjunto de la especificación Fetch estándar , suficiente para hacer fetchun reemplazo viable para la mayoría de los usos de XMLHttpRequest en aplicaciones web tradicionales.

Tabla de contenido
Leé esto primero
Instalación
Uso
Importador
HTML
JSON
Metadatos de respuesta
Publicar formulario
Publicar JSON
Subir archivo
Advertencias
Manejo de estados de error HTTP
Envío de cookies
Recibir galletas
Modos de redirección
Obtención de la URL de respuesta
Solicitudes de cancelación
Compatibilidad con navegador
Leé esto primero
Si cree que encontró un error con el fetchcomportamiento de su navegador, no abra un problema en este repositorio a menos que esté probando en una versión anterior de un navegador que no es compatible de window.fetchforma nativa. Asegúrese de leer este archivo Léame completo , especialmente la sección Advertencias , ya que probablemente haya una solución alternativa conocida para un problema que haya encontrado. Este proyecto es un polyfill y, dado que todos los navegadores modernos ahora implementan la fetchfunción de forma nativa, ningún código de este proyecto tiene ningún efecto allí. Consulte Compatibilidad con navegadores para obtener información detallada.

Si tiene problemas para realizar una solicitud a otro dominio (un subdominio o número de puerto diferente también constituye otro dominio), familiarícese con todas las complejidades y limitaciones de las solicitudes CORS . Debido a que CORS requiere la participación del servidor mediante la implementación de encabezados de respuesta HTTP específicos, a menudo no es trivial configurarlo o depurarlo. CORS es manejado exclusivamente por los mecanismos internos del navegador en los que este polyfill no puede influir.

Este proyecto no funciona en entornos Node.js. Está diseñado solo para navegadores web. Debe asegurarse de que su aplicación no intente empaquetar y ejecutar esto en el servidor.

Si tiene una idea para una nueva característica de fetch, envíe sus solicitudes de características al repositorio de especificaciones . Solo agregamos funciones y API que forman parte de la especificación Fetch .

Instalación
npm install whatwg-fetch --save
Como alternativa al uso de npm , puede obtenerlo fetch.umd.jsen la sección Versiones. La distribución UMD es compatible con los cargadores de módulos AMD y CommonJS, además de cargarse directamente en una página a través de una etiqueta.<script>

También necesitará un polyfill de Promise para navegadores más antiguos . Recomendamos taylorhakes/promise-polyfill por su tamaño pequeño y compatibilidad con Promises/A+.

Uso
