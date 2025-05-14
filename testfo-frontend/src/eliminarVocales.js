// Función para eliminar vocales de un string
function eliminarVocales(texto) {
  return texto.replace(/[aeiouáéíóúäëïöüàèìòùAEIOUÁÉÍÓÚÄËÏÖÜÀÈÌÒÙ]/g, '');
}

// Exportamos la función para poder utilizarla en otros archivos
export default eliminarVocales;
