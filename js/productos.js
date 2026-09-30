//lISTA DE PRODUCTOS
const productos = [
    {
        id: 1,
        nombre: "Collar Minimal Chic",
        precio: 20000,
        imagenes: ["img/productos/collares/Collar_Minimal_Chic_1.jpg",
            "img/productos/collares/Collar_Minimal_Chic_2.jpg"],
        descripcionCorta: "Collar de cuentas blancas y multicolores, con perla de río rosa y detalles en plata 925.",
        descripcion:
          `Una mitad está compuesta por delicadas cuentas blancas
            uniformes que aportan luminosidad y sencillez.

            La otra mitad destaca por una vibrante y alegre variedad
            de cuentas multicolores y facetadas que aportan un toque
            dinámico y divertido.

            En el centro los une una diminuta perla de río rosa,
            acompañada de dos esferas mini labradas de plata 925.

            Terminaciones y cierres plata 925.

            Largo: 38 cm aprox. `
    },
    {
    id: 2,

    nombre: "Collar Sweet Universe",

    precio: 20000,

    imagenes: ["img/productos/collares/Collar_Sweet_Universe_1.jpg",
              "img/productos/collares/Collar_Sweet_Universe_2.jpg"],
    descripcionCorta: "Collar corto y asimétrico con cuentas blancas traslúcidas y tonos celestes, rosados y violetas. Detalle central en celeste profundo y terminaciones en plata 925.",

    descripcion: `
        Delicado collar corto con un diseño asimétrico y encantador,
        donde una mitad destaca por cuentas blancas traslúcidas y la
        otra combina una colorida variedad de tonos celestes, rosados
        y violetas.

        Como detalle principal, cuenta con un tierno dije central en
        forma de corazón de color celeste profundo brillante ubicado
        hacia un lado, cubo en el centro, con cuños de plata 925.

        Combinable con otros accesorios.

        Un accesorio alegre, fresco y lleno de color, ideal para darle
        un toque divertido y original a tus outfits diarios.

        Terminaciones y cierres en plata 925.

        Largo aprox. 40 cm.
    `
},
 {
    id: 3,

    nombre: "Collar Oasis Terroso",

    precio: 16000,

    imagenes: ["img/productos/collares/Collar_Oasis_Terroso_1.jpg",
              "img/productos/collares/Collar_Oasis_Terroso_2.jpg"],


    descripcionCorta: "Collar corto de cuentas negras y traslúcidas, con detalles terracota y piezas jaspeadas. Destaca su cuenta central en tono verde suave y terminaciones en plata 925. Un diseño sofisticado, natural y versátil.",

    descripcion: `
        Elegante collar corto elaborado con una base de pequeñas cuentas negras, intercaladas con cuentas traslúcidas, detalles terracota y llamativas piezas rectangulares jaspeadas a lo largo de la tira.  

​Como pieza central, destaca una cuenta principal en tono verde suave rodeada de acentos cálidos que realzan su diseño artesanal y único.  

​Un accesorio sofisticado y versátil, perfecto para aportar un toque natural y con carácter a cualquier estilo.  

Cierres y terminaciones plata 925.

Largo 40 cm aprox
    `
},
{
id: 4,

    nombre: "Collar Atardecer Tropical",

    precio: 20000,

    imagenes: ["img/productos/collares/Collar_atardecer_Tropical_1.jpg",
              "img/productos/collares/Collar_atardecer_Tropical_2.jpg"],


    descripcionCorta: "Collar corto y colorido en tonos blancos y naranjas, con delicados detalles marinos, dijes de conchas y estrellas. Un accesorio fresco y original, con terminaciones en plata 925.",

    descripcion: `
        Divertido y colorido collar corto elaborado con una combinación de cuentas en tonos blancos y naranjas

​Presenta detalles marinos y temáticos únicos a lo largo de la pieza, incluyendo dijes en forma de concha y pequeñas estrellas, junto a una llamativa cuenta central ovalada con diseño abstracto.  

​Un accesorio fresco, vibrante y lleno de personalidad, ideal para darle un toque veraniego y original a tus outfits diarios. 

Terminaciones y cierres plata 925.

Largo 42cm aprox.
    `
},


{
id: 5,

    nombre: "Collar Amazonia Night",

    precio: 16000,

    imagenes: ["img/productos/collares/Collar_Amazonia_Night_1.jpg",
              "img/productos/collares/Collar_Amazonia_Night_2.jpg"],


    descripcionCorta: "Collar corto y colorido en tonos blancos y naranjas, con delicados detalles marinos, dijes de conchas y estrellas. Un accesorio fresco y original, con terminaciones en plata 925.",

    descripcion: `
        Divertido y colorido collar corto elaborado con una combinación de cuentas en tonos blancos y naranjas

​Presenta detalles marinos y temáticos únicos a lo largo de la pieza, incluyendo dijes en forma de concha y pequeñas estrellas, junto a una llamativa cuenta central ovalada con diseño abstracto.  

​Un accesorio fresco, vibrante y lleno de personalidad, ideal para darle un toque veraniego y original a tus outfits diarios. 

Terminaciones y cierres plata 925.

Largo 42cm aprox.
    `
},


{
id: 6,

    nombre: "Collar Oceano/Bosque",

    precio: 16000,

    imagenes: ["img/productos/collares/Collar_Oceano_Bosque_1.jpg",
              "img/productos/collares/Collar_Oceano_Bosque_2.jpg"],


    descripcionCorta: "Collar corto bicolor que combina cuentas celestes facetadas con cuentas verde esmeralda. Destaca su dije central en forma de corazón en celeste profundo. Un diseño fresco y original, con terminaciones y cierre en acero quirúrgico.",

    descripcion: `
        Un collar corto con un diseño llamativo de doble tono que divide la pieza en dos mitades distintas. Un lado presenta delicadas cuentas facetadas en un suave tono celeste, mientras que el otro lado está compuesto por cuentas redondas en un profundo color verde esmeralda.

En el centro, uniendo ambos lados, se encuentra un dije de corazón de color celeste profundo brillante.

Una pieza única que equilibra la frescura del celeste con la elegancia del verde, perfecta para añadir un toque personal y distintivo a tu look.

Terminaciones y cierre acero quirúrgico exelente calidad.

Largo 32cm aprox.
    `
},


{
id: 7,

    nombre: "Collar Amor Dual",

    precio: 16000,

    imagenes: ["img/productos/collares/Collar_Amor_Dual_1.jpg",
              "img/productos/collares/Collar_Amor_Dual_2.jpg",
              "img/productos/collares/Collar_Amor_Dual_3.jpg"],


    descripcionCorta: "Collar corto que combina delicadas cuentas de cristal rosa con una elegante combinación de blanco y negro. Destacan dos pequeños corazones de cuarzo blanco como detalle central. Un diseño delicado y original.",


    descripcion: `
        Encantador collar de cuentas cortas con un diseño dividido. Una mitad está compuesta por delicadas cuentas de cristal facetadas en un suave tono rosa claro. La otra mitad presenta una alternancia elegante de cuentas de cristal blancas y negras.

En el punto central, uniendo ambos lados, se encuentran dos pequeños dijes en forma de corazón en cuarzo blanco. 

Una pieza única que equilibra la dulzura del rosa con la fuerza del contraste blanco y negro, ideal para añadir un toque personal y distintivo a cualquier atuendo.

Largo 42cm aprox
    `
},


]