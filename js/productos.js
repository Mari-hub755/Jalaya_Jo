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


{
id: 8,

    nombre: "Collar Dualidad Pink",

    precio: 20000,

    imagenes: ["img/productos/collares/Collar_Dualidad_Pink_1.jpg",
              "img/productos/collares/Collar_Dualidad_Pink_2.jpg"],


    descripcionCorta: "Collar de cuentas cortas que combina cristales facetados en blanco, negro, fucsia y rosa, unidos por un delicado trío de perlas de agua dulce. Un diseño sofisticado, original y lleno de color, ideal para combinar y destacar cualquier look.",


    descripcion: `
        Collar de cuentas cortas con un diseño único que divide la pieza en dos mitades distintas. Un lado presenta una elegante alternancia de cuentas de cristal facetadas en blanco y negro. El otro lado está compuesto por brillantes cristales facetados en tonos fucsia y rosa claro.

En el centro, uniendo ambos mundos, hay un trío de perlas de agua dulce. Un accesorio que equilibra la sofisticación clásica con un toque de color vibrante y divertido, perfecto para destacar cualquier atuendo.

Un collar sofisticado, dual y combinable con mas accesorios, para auténticos y originales.
    `
},


{
id: 9,

    nombre: "Collar Perlas Aurora",

    precio: 18000,

    imagenes: ["img/productos/collares/Collar_Perlas_Aurora_1.jpg",
            "img/productos/collares/Collar_Perlas_Aurora_2.jpg"],


    descripcionCorta: "Collar de cuentas tornasoladas en tonos morados y violetas, con tres delicadas perlas barrocas de agua dulce y detalles en plata 925. Un diseño elegante y original, perfecto para darle un toque especial a cualquier look.",


    descripcion: `
        Exquisito collar con una cadena de cuentas tornasoladas en tonos morados y violetas metalizados. En el centro, destacan tres perlas barrocas de agua dulce de forma irregular, separadas por pequeñas cuentas en plata 925.

Un diseño único y elegante que combina la fantasía del color con la belleza natural de las perlas. Perfecto para añadir un toque de sofisticación a cualquier look, y combinarlo con mas accesorios.

Largo 42 cm aprox.
    `
},

{
id: 10,

    nombre: "Collar Mar Rosa",

    precio: 18000,

    imagenes: ["img/productos/collares/Collar_Mar_Rosa_1.jpg",
            "img/productos/collares/Collar_Mar_Rosa_2.jpg"],


    descripcionCorta: "Delicado collar de cristales blancos con un encantador dije de concha de mar en rosa. Fresco, luminoso y versátil, ideal para usar solo o combinar con otros accesorios.",


    descripcion: `
        Delicado collar de cristal blancos con un tierno dije central en forma de concha de mar color rosa.  

​Un diseño fresco y veraniego, ideal para darle un toque sutil y luminoso a cualquier look.

Para usarlo solo, o combinarlo. Fresco sencillo y único!

Largo 32cm aprox.
    `
},


{
id: 11,

    nombre: "Collar Marina Pink",

    precio: 18000,

    imagenes: ["img/productos/collares/Collar_Marina_Pink_1.jpg",
            "img/productos/collares/Collar_Marina_Pink_2.jpg"],


    descripcionCorta: "Delicado collar de cuentas en tonos rosados con un encantador dije de tortuga blanca en cerámica y terminaciones en plata 925. Un diseño fresco, tierno y versátil, ideal para usar solo o combinar con otros accesorios.",


    descripcion: `
        Delicado collar de cuentas en tonos rosados que cuenta con un encantador dije central en forma de tortuga de color blanco en ceramica. Con cierres y terminaciones en plata 925.

Un accesorio tierno, fresco y perfecto para darle un toque sutil y veraniego a cualquier estilo.  

Ideal para usarlo solo o combinarlo con otros modelos.

Largo 46cm aprox.
    `
},


{
id: 12,

    nombre: "Collar Nebula Violeta",

    precio: 26000,

    imagenes: ["img/productos/collares/Collar_Nebula_Violeta_1.jpg",
            "img/productos/collares/Collar_Nebula_Violeta_2.jpg"],


    descripcionCorta: "Delicado collar de cristales facetados en tonos claros, con efecto tornasol y detalles en azul y morado. Su pieza central de Murano violeta y terminaciones en Plata 925 le aportan un toque artesanal, elegante y único.",

    descripcion: `
        Un diseño único y sutil que combina la delicadeza del cristal con un toque artesanal distintivo.

​ Confeccionado con cuentas de cristal facetado en tonos claros con efecto tornasol, intercaladas con pequeños detalles en tonos azules y morados. En el centro destaca una cuenta de murano violeta con trazos decorativos.

​Cuenta con broche y componentes de Plata 925 que aseguran una excelente calidad y durabilidad.

​Fino y versátil, ideal para darle un brillo especial y romántico a cualquier look, tanto dia como noche.

Largo aprox 42cmx.
    `
},

{
id: 13,

    nombre: "Collar Eclipse Nude",

    precio: 22000,

    imagenes: ["img/productos/collares/Collar_Eclipse_Nude_1.jpg",
            "img/productos/collares/Collar_Eclipse_Nude_2.jpg"],


    descripcionCorta: "Collar de cristales facetados en tono champagne con delicados detalles en negro y un original dije central color durazno. Elegante, luminoso y versátil, con terminaciones en Plata 925, ideal para cualquier ocasión.",

    descripcion: `
        ​Un diseño cálido y sofisticado que combina la sutileza de los tonos neutros con un toque de contraste único.

​ Elaborado con delicadas cuentas de cristal facetado en tono champagne/nude, intercaladas con pequeños detalles de cristal negro y un hermoso dije central esférico en tono durazno con detalles en relieve.

Cuenta con argollas, broche y componentes de Plata 925 que garantizan calidad y durabilidad.

​Versátil, elegante y perfecto para aportar luminosidad y un toque chic a tus looks, dia o noche.

Largo aprox 45cm
    `
},


{
id: 14,

    nombre: "Collar Amanecer Rosado",

    precio: 26000,

    imagenes: ["img/productos/collares/Collar_Amanecer_Rosado_1.jpg",
            "img/productos/collares/Collar_Amanecer_Rosado_2.jpg"],


    descripcionCorta: "Delicado collar de cristales facetados en tonos rosados y champagne, con una hermosa perla rosada de río natural en el centro. Femenino, romántico y versátil, con terminaciones en Plata 925.",

    descripcion: `
        Una pieza delicada y sofisticada que transmite una suavidad única, ideal para realzar tu elegancia natural.

Elaborado con una hermosa combinación de cuentas de cristal facetado en suaves tonos rosados y champagne que capturan la luz con sutileza. En el centro, destaca una delicada Perla rosada de río natural.

​ Cuenta con argollas, broche y componentes de Plata 925 que aseguran una excelente calidad, brillo y durabilidad.

​Femenino, romántico y versátil, perfecto para usar solo o combinado con otras joyas y crear un look moderno y distinguido.

Largo aprox 40 cm
    `
},


{
id: 15,

    nombre: "Collar Star Blue",

    precio: 22000,

    imagenes: ["img/productos/collares/Collar_Star_Blue_1.jpg",
             "img/productos/collares/Collar_Star_Blue_2.jpg",
             "img/productos/collares/Collar_Star_Blue_3.jpg"],


    descripcionCorta: "Delicado collar de cristales facetados en tono aguamarina, con terminaciones y cierre en Plata 925. Fresco, luminoso y versátil, ideal para usar solo o combinar con otros accesorios.",

    descripcion: `
        Elaborado con delicadas cuentas de cristal facetado en un suave tono aguamarina/celeste claro que refleja la luz con elegancia. Con terminaciones y cierres en plata 925.

Versátil y fresco, ideal tanto para usar solo como para combinar con otros accesorios y armar tu propio set.

​Sumá un toque de brillo sutil y personalidad a tus outfits diarios con este accesorio tan especial. ✨

Largo aprox 40cm.
    `
},



{
id: 16,

    nombre: "Collar Estelar Blue",

    precio: 24000,

    imagenes: ["img/productos/collares/Collar_Estelar_Blue_1.jpg",
             "img/productos/collares/Collar_Estelar_Blue_2.jpg",
             ],


    descripcionCorta: "Delicado collar de cristales en tonos celestes tornasolados, con terminaciones y broche en Plata 925. Luminoso, versátil y elegante, ideal para usar solo o combinar con otros accesorios.",

    descripcion: `
        Hermosas cuentas de cristal en tonos celestes tornasolados que capturan la luz sutilmente con cada movimiento.

Pensado para durar y cuidar tu piel, posee terminaciones, argollas y broche de Plata 925, garantizando un acabado brillante y resistente.

Ideal para usar solo o combinarlo con otros collares en tendencia

​Llevá un pedacito de cielo con vos y sumá un accesorio versátil que se adapta tanto a tus looks diarios como a ocasiones especiales.

Largo aprox. 42cm.
    `
},



{
id: 17,

    nombre: "Collar Astral Blue",

    precio: 22000,

    imagenes: ["img/productos/collares/Collar_Astral_Blue_1.jpg",
             "img/productos/collares/Collar_Astral_Blue_2.jpg",
             "img/productos/collares/Collar_Astral_Blue_3.jpg"],


    descripcionCorta: "Delicado choker de cristales facetados en azul claro, con detalles transparentes y plateados y un encantador dije de estrella en cerámica. Luminoso, moderno y perfecto para usar solo o combinar en capas.",

    descripcion: `
        Este delicado collar tipo choker está diseñado para capturar la luz y las miradas.

Combina cuentas de cristal facetado en un vibrante tono azul claro con cuentas transparentes y plateadas, creando un efecto de brillo sutil y elegante.

El dije central es una encantadora estrella de cerámica. Perfecto para usar solo como pieza central o para combinarlo en capas con otros collares más largos y crear un estilo boho-chic

Largo aprox. 38 cm
    `
},

]