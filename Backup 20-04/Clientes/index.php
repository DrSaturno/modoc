<!DOCTYPE html>
<html>
    <head>
        <title>
            MODOC - Clientes
        </title>
        <meta http-equiv="Content-Type" content="text/html" charset="UTF-8" />
        <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0" />
        <link rel="icon" href="/imagenes/ico.jpg" />
        <link rel="stylesheet" href="/fonts/fonts.css" />
        <link rel="stylesheet" href="/css/contacto4.css" />
        <link rel="stylesheet" href="/css/swiper.min.css" />
        <script src="/js/jQuery%20JavaScript%20Library%20v1.11.1.js"></script>
        <script src="/js/swiper.min.js"></script>
        <link rel="stylesheet" href="/css/Bootstrap/bootstrap.min.css" />
        <script src="/css/Bootstrap/bootstrap.min.js"></script>
        <meta property="og:url" content="" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="" />
        <meta property="og:description" content="" />
        <meta property="og:image" content="" />
        <meta property="fb:app_id" content="1763012644007349" />
        <style>
            .centroClientes {
                width: 1100px;
                margin: auto;
                height: auto;
                overflow: hidden;
                margin-top: 200px;
                padding-bottom: 100px;
            }    
            .centroClientes div {
                width: 20%;
                height: 0;
                padding-top: 5%;
                padding-bottom: 5%;
                float: left;
                display: -webkit-box;
                display: -ms-flexbox;
                display: -webkit-flex;
                display: flex;
                -webkit-box-pack: center;
                -ms-flex-pack: center;
                -webkit-justify-content: center;
                justify-content: center;
                -webkit-box-align: center;
                -ms-flex-align: center;
                -webkit-align-items: center;
                align-items: center;
            }
            .centroClientes div img {
                width: 60%;
                margin-left: 5%;
            }
            .centroClientes h1 {
                font-size: 20pt;
            }
            @media(max-width: 1100px) {
                .centroClientes {
                    width: 95%;
                }
            }
            @media(max-width: 850px) {
                .centroClientes div {
                    width: 33%;
                    padding-top: 10%;
                    padding-bottom: 10%;
                }
            }
            @media(max-width: 500px) {
                .centroClientes h1 {
                    font-size: 15pt;
                }
                .centroClientes {
                    margin-top: 100px;
                }
                .centroClientes div {
                    width: 50%;
                    padding-top: 15%;
                    padding-bottom: 15%;
                }
                .centroClientes p {
                    font-size: 8pt;
                }
            }
        </style>
        <?php include('../includes/scripts.php'); ?>
    </head>
    <body>
        <?php include('../includes/header.php'); ?>
        <div class="centroClientes">    
            <h1>
                Nuestros Clientes
            </h1>
            <p>
                MADEKA S.A.
                <br />
                COMPAÑIA BERNAL S.A.
                <br />
                JIDOKA SRL
                <br />
                VIANDE SOCIEDAD DE RESPONSABILIDAD LIMITADA
                <br />
                SANTA GIULIA S.A.
                <br />
                FRIGORIFICO FORRES-BELTRAN SA
                <br />
                PROCESADORA GANADERA ENTRERIANA S.A.
                <br />
                TANDEM GLOBAL LOGISTICS S.A.
                <br />
                ASAP COMERCIO EXTERIOR S.A.
                <br />
                FRIGORIFICO LAMAR S A
                <br />
                FRIGOLAR S.A
                <br />
                INDUSTRIAS FRIGORIFICAS RECREO SAIC
                <br />
                ECOCARNES S.A.
                <br />
                COMPAÑÍA INVERSORA PLATENSE S.A.
                <br />
                CARNE HEREFORD S.A.
                <br />
                FLEISCHLAFAYETTE S.A.
                <br />
                MARTOLIO NEUMATICOS S.R.L.
                <br />
                CONALLISON SA
                <br />
                FABBRI ARGENTINA  S R L
                <br />
                ALIARG S.A.
                <br />
                KALPAKIAN HNOS S.A.
                <br />
                CALELLO HERMANOS S.A.
                <br />
                RUYI S.A.
                <br />
                INNOVACION DE SERVICIOS LABORALES S.A. (ISL)
                <br />
                POLICIA DE LA CIUDAD
                <br />
                Gobierno de la Ciudad de Buenos Aires (DGAI)
                <br />
                <br />
                <br />
            </p>
        </div>
        <?php include('../includes/customers.php'); ?>
        <?php include('../includes/partners.php'); ?>
        <?php include('../includes/map.php'); ?>
        <?php include('../includes/footer.php'); ?>
    </body>
</html>
