import { NativeBaseProvider, ScrollView, Text } from "native-base";
import React, { useEffect } from "react";
import { useState } from "react";
import { useWindowDimensions } from "react-native";
import RenderHTML from "react-native-render-html";
import { spacing } from "../../utils/styleGuide";
export const PoliticaScreen = ({ navigation }) => {
  const [politica, setPolitica] = useState("");
  const { width } = useWindowDimensions();
  useEffect(() => {
    setPolitica(
      '<p class="text-align-center"><strong>PROTECCIÓN DE DATOS</strong></p><p><strong>Nombre:</strong> SERVICIOS MEDIOAMBIENTALES</p><p><strong>Finalidad: </strong>Tramitaciones administrativas</p><p><strong>Descripción finalidad del tratamiento:</strong> Gestión de actividades medioambientales.</p>\n\n<p><strong>Categoría de Interesados:</strong> Denunciantes, denunciados, solicitantes, representantes legales.</p>\n\n<p><strong>Descripción tipo de datos: </strong>Datos identificativos y de contacto Datos económicos de ingresos Datos acreditativos de situación de desempleo.</p>\n\n<p><strong>En el caso de cesiones, indique destinatario de los datos y finalidad:</strong> Confederación Hidrográfica del Guadiana Fuerzas y Cuerpos de Seguridad del Estado SEPRONA Denunciantes Consejería de Medio Ambiente Administración Pública competente.</p>\n\n<p><strong>Transferencias internacionales:</strong> No hay transferencias internacionales.</p>\n\n<p><strong>Origen de Datos:</strong> Solicitantes, denunciantes, Administración Pública.</p>\n\n<p><strong>Plazo de conservación: </strong>Más de 20 años.</p>\n\n<p><strong>Normativa aplicable /Instrucción interna para conservación: </strong>Se conservarán durante el tiempo necesario para cumplir con la finalidad para la que se recabaron y para determinar las posibles responsabilidades que se pudieran derivar de dicha finalidad y del tratamiento de los datos. Será de aplicación lo dispuesto en la normativa de archivos y documentación y normativa específica.</p>\n\n<p><strong>Unidad de Gestión propietaria del tratamiento:</strong> Medio Ambiente <a href="https://sedeelectronica.valdepenas.es/CartasdeServicio/MedioAmbiente">https://sedeelectronica.valdepenas.es/CartasdeServicio/MedioAmbiente</a> Rustica</p>\n\n<p><strong>Causa legitimadora del tratamiento</strong> RGPD: 6.1.c) Tratamiento necesario para el cumplimiento de una obligación legal aplicable al responsable del tratamiento: Ley 7/1985, de 2 de abril, Reguladora de las Bases del Régimen Local. Ley 40/2015, de 1 de octubre, de Régimen Jurídico del Sector Público. Ley 4/2007, de 08-03-2007, de Evaluación Ambiental en Castilla-La Mancha Ley 4/2016, de 15 de diciembre, de Transparencia y Buen Gobierno de Castilla-La Mancha. Ley 30/1992, de 26 de noviembre, de Régimen Jurídico de las Administraciones Públicas y del Procedimiento Administrativo Común (B.O.E. 285, de 27 de noviembre de 1992) se hace pública notificación de la iniciación de los expedientes sancionadores instruidos por el Ayuntamiento de Valdepeñas o autoridad competente a las personas o entidades denunciadas, cuando habiéndose intentado la notificación en el último domicilio conocido ésta no se ha podido practicar. Reglamento General de Recaudación de la Seguridad Social, aprobado por Real Decreto 1415/2004, de 11 de junio (B.O.E. del día 25).</p>\n\n<p><strong>Medidas de Seguridad: </strong>Las medidas de seguridad implantadas se corresponden con las previstas en el Anexo II (Medidas de seguridad) del Real Decreto 3/2010, de 8 de enero, por el que se regula el Esquema Nacional de Seguridad en el ámbito de la Administración Electrónica.</p>\n\n<p>(*) Para más información, puede consultar el siguiente enlace al registro de actividadades de la página web del Ayuntamiento de Valdepeñas: <a href="https://www.valdepenas.es/VLDSedeWeb/Modulos/VLDPublicaionLibre.nsf">https://www.valdepenas.es/VLDSedeWeb/Modulos/VLDPublicaionLibre.nsf</a></p>\n'
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
