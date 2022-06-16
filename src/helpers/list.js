const songs = [
    { name: 'A la cena del cordero'},
    { name: 'A la víctima pascual'},
    { name: 'A nadie demos ocasión de tropiezo'},
    { name: 'A ti levanto mis ojos'},
    { name: 'A ti, Señor, en mi clamor imploro'},
    { name: 'A ti, Señor, levanto mi alma'},
    { name: 'A ti, Señor, se debe la alabanza en Sión'},
    { name: 'Abbá Padre'},
    { name: 'Abraham'},
    { name: 'Aclamad al Señor'},
    { name: 'Adónde te escondiste amado'},
    { name: 'Al despertar'},
    { name: 'Alabad al Señor en el cielo'},
    { name: 'Alegría, ha nacido el salvador'},
    { name: 'Aleluya interleccional'},
    { name: 'Aleluya pascual'},
    { name: 'Aleluya, alabad al Señor'},
    { name: 'Aleluya, bendecid al Señor'},
    { name: 'Aleluya, ya llegó el reino'},
    { name: 'Alzaos puertas'},
    { name: 'Amén, amén, amén'},
    { name: 'Amo al Señor'},
    { name: 'Antífona – versículo antes del Evangelio'},
    { name: 'Aquedah'},
    { name: 'Así habla el amén'},
    { name: 'Ave María I'},
    { name: 'Ave María II (1984)'},
    { name: 'Babilonia criminal'},
    { name: 'Balaam'},
    { name: 'Bendeciré al Señor en todo tiempo'},
    { name: 'Bendice, alma mía, a Yahveh'},
    { name: 'Bendición del agua'},
    { name: 'Bendición penitencial'},
    { name: 'Bendita eres tú, María'},
    { name: 'Bendito eres, Señor'},
    { name: 'Bendito sea Dios'},
    { name: 'Benedictus'},
    { name: 'Cantad a Dios'},
    { name: 'Cantad al Señor'},
    { name: 'Cántico de los tres jóvenes'},
    { name: 'Canto de Moisés'},
    { name: 'Caritas Christi urget nos'},
    { name: 'Como condenados a muerte'},
    { name: 'Como destila la miel'},
    { name: 'Como el impulso que siente la ira'},
    { name: 'Cómo es maravilloso'},
    { name: 'Como la cierva'},
    { name: 'Como lirio entre los cardos'},
    { name: 'Consolad a mi pueblo'},
    { name: 'Cordero de Dios'},
    { name: 'Credo'},
    { name: 'Cristo es la luz'},
    { name: 'Cuando dormía'},
    { name: 'Cuando el Señor'},
    { name: 'Cuando Israel salió de Egipto'},
    { name: 'Dayenú'},
    { name: 'De Profundis'},
    { name: 'Débora'},
    { name: 'Decidle a los de corazón cansado'},
    { name: 'Delante de los ángeles'},
    { name: 'Día de reposo'},
    { name: 'Dice el Señor a mi Señor'},
    { name: 'Dichoso el hombre'},
    { name: 'El combate escatológico'},
    { name: 'El Espíritu del Señor está sobre mí'},
    { name: 'El jacal de los pastores'},
    { name: 'El lagarero'},
    { name: 'El mismo Dios'},
    { name: 'El necio piensa que Dios no existe'},
    { name: 'El pueblo que caminaba en las tinieblas'},
    { name: 'El sembrador'},
    { name: 'El Señor anuncia una noticia'},
    { name: 'El Señor es mi pastor'},
    { name: 'El Señor me ha dado'},
    { name: 'Elí, Elí, lamá sabactaní'},
    { name: 'En medio de aquel gentío'},
    { name: 'En una noche oscura'},
    { name: 'Eres digno de tomar el libro'},
    { name: 'Eres hermoso'},
    { name: 'Escóndeme en lo oculto de tu tienda'},
    { name: 'Escuchad islas lejanas'},
    { name: 'Están rotas mis ataduras'},
    { name: 'Éste es el día en que actuó el Señor'},
    { name: 'Este es el mandamiento mío'},
    { name: 'Evenu shalom alejem'},
    { name: 'Extiendo mis manos'},
    { name: 'Exultad, justos, en el Señor'},
    { name: 'Felicidad para el hombre'},
    { name: 'Gloria a Dios en lo alto del cielo'},
    { name: 'Gracias a Yahveh'},
    { name: 'Gritad jubilosos'},
    { name: 'Hacia ti morada santa'},
    { name: 'Hasta cuándo'},
    { name: 'He aquí mi siervo'},
    { name: 'He aquí que nuestro espejo es el Señor'},
    { name: 'He aquí que vengo presto'},
    { name: 'He esperado en el Señor'},
    { name: 'Hermosa eres, amiga mía'},
    { name: 'Hijas de Jerusalén'},
    { name: 'Himno a Cristo luz'},
    { name: 'Himno a la caridad'},
    { name: 'Himno a la cruz gloriosa'},
    { name: 'Himno a la kenosis'},
    { name: 'Himno de Adviento'},
    { name: 'Himno de la Ascensión'},
    { name: 'Himno de Pascua'},
    { name: 'Huye, amado mío'},
    { name: 'Id y anunciad a mis hermanos'},
    { name: 'Improperios'},
    { name: 'Jacob'},
    { name: 'Jerusalén reconstruida'},
    { name: 'Jesús recorría todas las ciudades'},
    { name: 'La cordera de Dios'},
    { name: 'La paloma voló'},
    { name: 'La marcha es dura'},
    { name: 'La Salve'},
    { name: 'La siega de las naciones'},
    { name: 'La voz de mi amado'},
    { name: 'Las armas de la luz'},
    { name: 'Letanías de los santos'},
    { name: 'Letanías penitenciales I'},
    { name: 'Letanías penitenciales II'},
    { name: 'Levanto mis ojos a los montes'},
    { name: 'Llegue hasta tu presencia mi clamor'},
    { name: 'Llévame al cielo'},
    { name: 'Magníficat'},
    { name: 'María, casa de bendición'},
    { name: 'María de Jasna Göra'},
    { name: 'María, madre de la Iglesia'},
    { name: 'María, madre del camino ardiente'},
    { name: 'María, pequeña María'},
    { name: 'Me enseñarás el camino de la vida'},
    { name: 'Me has seducido, Señor'},
    { name: 'Mirad qué estupendo'},
    { name: 'Me robaste el corazón'},
    { name: 'Misericordia mía, misericordia'},
    { name: 'Mucho me han perseguido'},
    { name: 'Ninguno puede servir a dos señores'},
    { name: 'No está aquí, resucitó'},
    { name: 'No hay en él parecer'},
    { name: 'No resistáis al mal'},
    { name: 'No sufras por los malvados'},
    { name: 'Noli me tangere'},
    { name: 'Oh cielos, lloved de lo alto'},
    { name: 'Oh Dios, por tu nombre sálvame'},
    { name: 'Oh Dios, tú eres mi Dios'},
    { name: 'Oh Jesús, amor mío'},
    { name: 'Oh muerte, ¿dónde está tu victoria?'},
    { name: 'Oh Señor, mi corazón ya no es ambicioso'},
    { name: 'Oh Señor, nuestro Dios'},
    { name: 'Os tomaré de entre las naciones'},
    { name: 'Paloma incorrupta'},
    { name: 'Padre nuestro'},
    { name: 'Pentecostés'},
    { name: 'Plegaria Eucarística II – Modelo I'},
    { name: 'Plegaria Eucarística II – Modelo II (1987)'},
    { name: 'Plegaria Eucarística IV – (1988)'},
    { name: 'Por el amor de mis amigos'},
    { name: 'Por qué esta noche es diferente'},
    { name: 'Por qué las gentes conjuran'},
    { name: 'Porque mi yugo es suave'},
    { name: 'Prefacio para Adviento y Navidad'},
    { name: 'Prefacio para el tiempo Pascual'},
    { name: 'Pregón Pascual'},
    { name: 'Qué amables son tus moradas'},
    { name: 'Qué estupendo, qué alegría'},
    { name: 'Quién es ésta que sube del desierto'},
    { name: 'Quién nos separará'},
    { name: 'Quiero andar'},
    { name: 'Quiero cantar'},
    { name: 'Resucitó'},
    { name: 'Resurrexit'},
    { name: 'Salve, reina de los cielos'},
    { name: 'Salmodia para el Salmo responsorial'},
    { name: 'Salmodia para las Oraciones universales'},
    { name: 'Santo 1982'},
    { name: 'Santo 1988'},
    { name: 'Santo Hebreo'},
    { name: 'Santo Palestina 74'},
    { name: 'Santo Palomeras 65'},
    { name: 'Santo Roma 77'},
    { name: 'Se encontraron dos ángeles'},
    { name: 'Secuencia del Corpus Christi'},
    { name: 'Señor, ayúdame a no dudar de ti'},
    { name: 'Señor, no me corrijas en tu cólera'},
    { name: 'Señor, tú me escrutas y conoces'},
    { name: 'Sermón de la montaña'},
    { name: 'Shemá Israel'},
    { name: 'Shlom-lej Mariam'},
    { name: 'Si el Señor no construye la casa'},
    { name: 'Si habéis resucitado con Cristo'},
    { name: 'Si hoy escucháis su voz'},
    { name: 'Si me he refugiado en el Señor'},
    { name: 'Siéntate solitario y silencioso'},
    { name: 'Sión, madre de todos los pueblos'},
    { name: 'Sola a Solo'},
    { name: 'Stabat mater dolorosa'},
    { name: 'Suba el Esposo al leño de su tálamo'},
    { name: 'Sube Dios entre aclamaciones'},
    { name: 'Te Deum'},
    { name: 'Te estoy llamando, Señor'},
    { name: 'Te he manifestado mi pecado'},
    { name: 'Tú eres mi esperanza, Señor'},
    { name: 'Tú has cubierto de vergüenza la muerte'},
    { name: 'Tú que eres fiel'},
    { name: 'Un retoño brota del tronco de Jesé'},
    { name: 'Una gran señal'},
    { name: 'Urí, urí, urí, urá'},
    { name: 'Vamos ya, pastores'},
    { name: 'Ven del Líbano'},
    { name: 'Ven, Espíritu Santo'},
    { name: 'Ven, Hijo del Hombre'},
    { name: 'Veni Creator'},
    { name: 'Viene el Señor'},
    { name: 'Virgen de la maravilla'},
    { name: 'Vivid alegres'},
    { name: 'Vosotros sois la luz del mundo'},
    { name: 'Ya viene mi Dios'},
    { name: 'Yahveh, tú eres mi Dios'},
    { name: 'Yo te amo, Señor'},
    { name: 'Yo vengo a reunir'},
    { name: 'Zaqueo'},
]

const celebrations = [
    { name: 'Palabra'},
    { name: 'Convivencia'},
    { name: 'Eucaristia'},
    { name: 'Laudes'},
]

module.exports = {
    songs,
    celebrations,
}