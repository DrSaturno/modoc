<?php
$categoria=$_GET["categoriaDelProducto"];//Categoria
$categoria=strtolower($categoria);

$Nombre=$_GET["nombre"];//Nombre
$Precio=$_GET["precio"];//Precio

$descripcion=$_GET["descripcionUP"];//Descripcion

$IdProducto=$_GET["idproductoguardar"];//Id Producto
$NumeroSeccion=$_GET["numeroidsecreado"];//Numero Seccion


$CantidadDeColores=$_GET["cantidadDeColores"];//Cantidad de Colores




//Leer cantidad de productos y sumar uno mas
$archivoCo=fopen("../../../productos/".$categoria."/cantidadProductos.txt", "r");
$cantidadDeProductos=fgets($archivoCo);//Cantidad de productos
fclose($archivoCo);

$file = '../../../productos/'.$categoria.'/cantidadProductos.txt';
$current = file_get_contents($file);
$current = ((int)$cantidadDeProductos)+1;
file_put_contents($file, $current);

$numeroDeProductoImg=((int)$cantidadDeProductos)+1;



//Dato por defecto en el archivo destacado del producto
//0 es igual a no destacado
$file = '../../../productos/'.$categoria.'/'.(((int)$cantidadDeProductos)+1).'/destacado.txt';
$current = file_get_contents($file);
$current = "0";
file_put_contents($file, $current);




$destacar=$_GET["destacado"];
if(((int)$destacar)==1){//Destacar Producto
    //Leer cantidad de Productos Destacados y sumar uno mas
    $archivoCo=fopen("../../../productos/canditadDeProductosDestacados.txt", "r");
    $cantidadDeProductosDestacado=fgets($archivoCo);//Cantidad de productos
    fclose($archivoCo);
    $file = '../../../productos/canditadDeProductosDestacados.txt';
    $current = file_get_contents($file);
    $current = ((int)$cantidadDeProductosDestacado)+1;
    file_put_contents($file, $current);
    
    //Escribir datos
    $file = '../../../productos/productosDestacados/destacado'.(((int)$cantidadDeProductosDestacado)+1).'.txt';
    $current = file_get_contents($file);
    $current = "0\n".$categoria."\n".(((int)$cantidadDeProductos)+1);
    file_put_contents($file, $current);
}






//Crear Carpeta otro producto mas
/*$carpeta = '../../../productos/'.$categoria.'/'.(((int)$cantidadDeProductos)+1).'';
if (!file_exists($carpeta)) {
    mkdir($carpeta, 0777, true);
}*/




//Nombre y Precio
//Almacenar los datos basicos
$file = '../../../productos/'.$categoria.'/'.(((int)$cantidadDeProductos)+1).'/datos.txt';
$current = file_get_contents($file);
$current = $Nombre."\n".$Precio;
file_put_contents($file, $current);

$file = '../../../productos/'.$categoria.'/'.(((int)$cantidadDeProductos)+1).'/descripcion.php';
$current = file_get_contents($file);
$current = $descripcion;
file_put_contents($file, $current);



//Almacenar cantidad de colores
$file = '../../../productos/'.$categoria.'/'.(((int)$cantidadDeProductos)+1).'/colores/cantidadDeColores.txt';
$current = file_get_contents($file);
$current = $CantidadDeColores."\n";
file_put_contents($file, $current);


//Almacena nombre de los colores 
//Crear o modificar lo que ya esta creado
for($i=0;$i<((int)$CantidadDeColores);$i++){
$file = '../../../productos/'.$categoria.'/'.(((int)$cantidadDeProductos)+1).'/colores/color'.($i+1).'.txt';
$current = file_get_contents($file);
$current = $_GET["color".($i+1).""];
$current = $current."\n".$_GET["cantidadDeTallesColor".($i+1).""];//Nombre del Color y La cantidad de Talles
$current = $current.$_GET["TLosTallesColor".($i+1).""];
file_put_contents($file, $current);
}



//Crear un archivo txt con el stock de todos los productos
for($i=0;$i<((int)$CantidadDeColores);$i++){
$file = '../../../productos/'.$categoria.'/'.(((int)$cantidadDeProductos)+1).'/colores/todosLosStock'.($i+1).'.txt';
$current = file_get_contents($file);
$current = $_GET["TLosStockColor".($i+1).""];
file_put_contents($file, $current);
}


//Leer cantidad de Colores
//Leer cantidad de talles por color
//Leer la catidad de talles y almacenar en stockTalle por color
for($i=0;$i<((int)$CantidadDeColores);$i++){
$archivoCo=fopen("../../../productos/".$categoria."/".(((int)$cantidadDeProductos)+1)."/colores/color".($i+1).".txt", "r");
$cantidadDeTalles=fgets($archivoCo);
$cantidadDeTalles=fgets($archivoCo);
fclose($archivoCo);

//Leeer archivo de Stocks
//Abrir coneccion
$archivoStocks=fopen("../../../productos/".$categoria."/".(((int)$cantidadDeProductos)+1)."/colores/todosLosStock".($i+1).".txt", "r");
    
    
for($j=0;$j<((int)$cantidadDeTalles);$j++){
$stock=fgets($archivoStocks);//Leer Stock
        
//Almacenar en los archivos individuales de stock
$file = '../../../productos/'.$categoria.'/'.(((int)$cantidadDeProductos)+1).'/colores/stockColor'.($i+1).'/stockTalle'.($j+1).'.txt';
$current = file_get_contents($file);
$current = $stock;
file_put_contents($file, $current);
}
fclose($archivoStocks);
}

    



//Cambiar tamaño de las imagenes y asi crear las mini imagenes

$numeroDeProductoImg=$numeroDeProductoImg;
$cantidadDeImagenes=$CantidadDeColores;

//Crear mini imagen
for($i=0;$i<((int)$cantidadDeImagenes);$i++){
$origen='../../../productos/'.$categoria.'/'.$numeroDeProductoImg.'/'.($i+1).'.jpg';
$destino='../../../productos/'.$categoria.'/'.$numeroDeProductoImg.'/mini/'.($i+1).'.jpg';

## CONFIGURACION ############################# 

    # ruta de la imagen a redimensionar 
    $imagen=$origen;
    # ruta de la imagen final, si se pone el mismo nombre que la imagen, esta se sobreescribe 
    $imagen_final=$destino;
    $ancho_nuevo=90; 
    $alto_nuevo=55; 

## FIN CONFIGURACION #############################


redim ($imagen,$imagen_final,$ancho_nuevo,$alto_nuevo);

}

//Crear imagen mediana
for($i=0;$i<((int)$cantidadDeImagenes);$i++){
$origen='../../../productos/'.$categoria.'/'.$numeroDeProductoImg.'/'.($i+1).'.jpg';
$destino='../../../productos/'.$categoria.'/'.$numeroDeProductoImg.'/mini/media'.($i+1).'.jpg';

    $imagen=$origen;
    $imagen_final=$destino;
    $ancho_nuevo=300;
    $alto_nuevo=300;


redim ($imagen,$imagen_final,$ancho_nuevo,$alto_nuevo);

}


function redim($ruta1,$ruta2,$ancho,$alto) 
    { 
    # se obtene la dimension y tipo de imagen 
    $datos=getimagesize ($ruta1); 
     
    $ancho_orig = $datos[0]; # Anchura de la imagen original 
    $alto_orig = $datos[1];    # Altura de la imagen original 
    $tipo = $datos[2]; 
     
    if ($tipo==1){ # GIF 
        if (function_exists("imagecreatefromgif")) 
            $img = imagecreatefromgif($ruta1); 
        else 
            return false; 
    } 
    else if ($tipo==2){ # JPG 
        if (function_exists("imagecreatefromjpeg")) 
            $img = imagecreatefromjpeg($ruta1); 
        else 
            return false; 
    } 
    else if ($tipo==3){ # PNG 
        if (function_exists("imagecreatefrompng")) 
            $img = imagecreatefrompng($ruta1); 
        else 
            return false; 
    } 
     
    # Se calculan las nuevas dimensiones de la imagen 
    if ($ancho_orig>$alto_orig) 
        { 
        $ancho_dest=$ancho; 
        $alto_dest=($ancho_dest/$ancho_orig)*$alto_orig; 
        } 
    else 
        { 
        $alto_dest=$alto; 
        $ancho_dest=($alto_dest/$alto_orig)*$ancho_orig; 
        } 

    // imagecreatetruecolor, solo estan en G.D. 2.0.1 con PHP 4.0.6+ 
    $img2=@imagecreatetruecolor($ancho_dest,$alto_dest) or $img2=imagecreate($ancho_dest,$alto_dest); 

    // Redimensionar 
    // imagecopyresampled, solo estan en G.D. 2.0.1 con PHP 4.0.6+ 
    @imagecopyresampled($img2,$img,0,0,0,0,$ancho_dest,$alto_dest,$ancho_orig,$alto_orig) or imagecopyresized($img2,$img,0,0,0,0,$ancho_dest,$alto_dest,$ancho_orig,$alto_orig); 

    // Crear fichero nuevo, según extensión. 
    if ($tipo==1) // GIF 
        if (function_exists("imagegif")) 
            imagegif($img2, $ruta2); 
        else 
            return false; 

    if ($tipo==2) // JPG 
        if (function_exists("imagejpeg")) 
            imagejpeg($img2, $ruta2); 
        else 
            return false; 

    if ($tipo==3)  // PNG 
        if (function_exists("imagepng")) 
            imagepng($img2, $ruta2); 
        else 
            return false; 
     
    return true; 
    } 



//Preparar nuevo producto carpeta//
function copia($dirOrigen, $dirDestino)
{
//Creo el directorio destino

mkdir($dirDestino, 0777, true);
//abro el directorio origen

if ($vcarga = opendir($dirOrigen))
{
while($file = readdir($vcarga)) //lo recorro enterito
{
if ($file != '.' && $file != '..') //quito el raiz y el padre
{
echo '<b>'.$file.'</b>'; //muestro el nombre del archivo
if (!is_dir($dirOrigen.$file)) //pregunto si no es directorio
{
if(copy($dirOrigen.$file, $dirDestino.$file)) //como no es directorio, copio de origen a destino
{
echo  'COPIADO!';
}else{
echo 'ERROR!';
}
}else{
echo '— directorio — <br>'; //era directorio llamo a la función de nuevo con la nueva ubicación
copia($dirOrigen.$file.'/', $dirDestino.$file.'/');
}
echo '<br>';
}
}
closedir($vcarga);
}
}



$origen='../../../productos/modeloProducto/';
$destino='../../../productos/'.$categoria.'/'.(((int)$cantidadDeProductos)+2).'/';

copia($origen, $destino);




header("Location:../../");
?>