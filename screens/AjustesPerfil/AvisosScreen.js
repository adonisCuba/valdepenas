import { NativeBaseProvider, ScrollView, Text } from "native-base";
import React, { useEffect } from "react";
import { useState } from "react";
import { useWindowDimensions } from "react-native";
import RenderHTML from "react-native-render-html";
import { spacing } from "../../utils/styleGuide";
export const AvisosScreen = ({ navigation }) => {
  const [politica, setPolitica] = useState("");
  const { width } = useWindowDimensions();
  useEffect(() => {
    setPolitica(
      '<p class="text-align-center"><strong>TÉRMINOS Y CONDICIONES LEGALES</strong></p><p><strong>1.- AVISO LEGAL</strong></p><p>Esta App es propiedad del Excmo. Ayuntamiento de Valdepeñas. La información y los contenidos que en ella se proporcionan están relacionados con su actividad pública o de interés general y son facilitados concretamente por los el área de medio ambiente.   </p><p>A continuación, se facilita información del titular del sitio App:</p><ul><li>Titular: Excmo. Ayuntamiento de Valdepeñas</li><li>Dirección: Plaza de España, 1.  13300 Valdepeñas (Ciudad Real) España</li><li>CIF: P1308700B</li><li>Teléfono: 902 31 00 11</li><li>Fax: 926 31 26 34</li></ul><p><strong>2.- PROPIEDAD INTELECTUAL E INDUSTRIAL</strong></p><p>Todos los contenidos de la presente App se encuentran protegidos por la normativa de propiedad intelectual e industrial, así como inscritos en los registros correspondientes. Los derechos de propiedad intelectual pertenecen al Excmo. Ayuntamiento de Valdepeñas, por tanto la App y todos sus contenidos, textos, imágenes, gráficos, audio y cualesquiera otros materiales son propiedad del Excmo. Ayuntamiento de Valdepeñas. La reproducción total o parcial, uso, explotación, distribución, comercialización o transformación no autorizada de los contenidos de esta App requiere la previa autorización por parte del Excmo. Ayuntamiento de Valdepeñas. Cualquier uso no autorizado previamente por el mismo, será considerado un incumplimiento grave de los derechos de propiedad intelectual.<br />Igualmente, las marcas o signos distintivos del Excmo. Ayuntamiento de Valdepeñas contenidos en la App están protegidos por la legislación de propiedad industrial. Los diseños, logotipos, texto y/o gráficos ajenos al Excmo. Ayuntamiento de Valdepeñas que pudieran aparecer en la misma pertenecen a sus respectivos propietarios, siendo ellos responsables de cualquier posible controversia que pudiera suscitarse respecto a los mismos. El usuario reconoce y acepta los derechos de propiedad industrial e intelectual sobre los contenidos y elementos insertados en esta sede electrónica.</p><p><strong>3.- CONDICIONES DE USO</strong></p>\n\n<p>El acceso a esta App del Excmo. Ayuntamiento de Valdepeñas, así como el uso que pueda hacerse de la información que se contiene en la misma, son de la exclusiva responsabilidad del usuario. El usuario se obliga a acceder a la App y a usar sus contenidos de forma diligente, correcta y lícita y, en particular, se compromete a hacer uso de las informaciones y/o servicios ofrecidos de conformidad con la normativa vigente en cada momento. El Excmo. Ayuntamiento de Valdepeñas no se hará responsable en ningún caso del uso que los usuarios y/o terceros pudieran hacer de su sitio App o de sus contenidos, ni de los daños y perjuicios que pudieran derivarse del mismo, incluidos daños informáticos o virus.<br />\nEl Excmo. Ayuntamiento de Valdepeñas excluye toda responsabilidad por cualquier daño o perjuicio en el software o hardware del usuario que pudiera derivarse del acceso a la App, así como de su uso, transmisión, difusión, almacenamiento de información o aplicaciones contenidas en la misma. El Excmo. Ayuntamiento de Valdepeñas podrá efectuar, en cualquier momento y sin necesidad de previo aviso, las modificaciones y actualizaciones necesarias sobre la información contenida en la presente App. El funcionamiento de está constantemente revisado al objeto de que funcione correctamente los 365 días del año. No obstante, no se descarta la posibilidad de que existan ciertos errores de programación o acontezcan causas de fuerza mayor, catástrofes naturales o circunstancias semejantes que hagan imposible, en un momento dado, el acceso a la misma. <br />\nEl Excmo. Ayuntamiento de Valdepeñas desarrollará los esfuerzos precisos para evitar errores y, en su caso, repararlos o actualizarlos lo antes posible, excluyendo toda responsabilidad por los daños y perjuicios causados por las interrupciones o fallos temporales en el acceso a la misma.<br />\nEl Excmo. Ayuntamiento de Valdepeñas se hará responsable de la integridad, veracidad y actualización de la información y de los servicios que ofrece a través de su Sede Electrónica, conforme a la legislación vigente en la materia.<br />\nPor otro lado, atenderá el principio de publicidad activa al que se refiere la normativa de transparencia, acceso a la información pública y buen gobierno, con el fin de garantizar la transparencia de su actividad. Se llevará a cabo de forma periódica y actualizada, se aplicarán los límites al derecho de acceso a la información pública, la información será publicada de forma clara, estructurada y entendible para los interesados, y facilitando la accesibilidad, la interoperabilidad, la calidad y la reutilización de la información, así como su identificación y localización. El acceso será fácil y gratuito.</p><strong>ENLACES O LINKS</strong><br />\nLos enlaces contenidos en la App del Excmo. Ayuntamiento de Valdepeñas pueden dirigir a páginas web de terceros sobre las que el Excmo. Ayuntamiento de Valdepeñas no ejerce ningún control, por lo que no asume ninguna responsabilidad por el contenido, informaciones o servicios que pudieran aparecer en dichos sitios y en consecuencia no será en ningún caso responsable de los daños y perjuicios que pudieran derivarse.</p><p><strong>MARCOS Y FRAMES</strong><br />\nEl Excmo. Ayuntamiento de Valdepeñas prohíbe expresamente la realización de “framings” o la utilización por parte de terceros de cualesquiera otros mecanismos que alteren el diseño, configuración original o contenidos de la App.</p><p><strong>LEY APLICABLE</strong><br />\nSerá de aplicación la ley española en cualquier cuestión relacionada con los servicios de este sitio App.</p>'
    );
  }, []);
  return (
    <NativeBaseProvider>
      <ScrollView style={{ padding: spacing.spacingS }}>
        <RenderHTML source={{ html: politica }} contentWidth={width} />
      </ScrollView>
    </NativeBaseProvider>
  );
};