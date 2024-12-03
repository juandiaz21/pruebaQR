import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Traducciones de ejemplo
const resources = {
  en: {
    translation: {
      texto_principal: "The Office for Non-Discrimination (OND) is a Barcelona City Council municipal service that works to defend, safeguard and guarantee human rights in the city.\n\nThe OND acts in response to situations of discrimination on the grounds of age, gender identity, sexual orientation, religion, language, nationality, health, disability and/or social or economic situation, among other things.",
      texto1_1: "If you have suffered or suffer any discrimination or hate crime, the OND:",
      texto1_2: "We support you with legal advice, psycho-social care and educational action. We offer you mediation, intermediation and reconciliation as tools for dispute management We are developing a disciplinary capacity in cases of discrimination",
      texto2_1: "If you act in the field of the defense of human rights, the OND:",
      texto2_2: "We offer you places and resources for carrying out your activities. We work with and give support to people and organisations relating to human rights. We use strategic litigation as a tool for ensuring rights for everyone",
      texto3_1: "If you want to act against discrimination, the OND:",
      texto3_2: "We provide you with information on human and citizen rights. We organise awareness-raising training and initiatives through our Human Rights Resources Centre"
    },
  },
  es: {
    translation: {
      texto_principal: "La Oficina por la No Discriminación (OND) es el servicio municipal del Ayuntamiento de Barcelona que trabaja por la defensa, protección y garantía de los derechos humanos en la ciudad.\n\nLa OND actúa en situaciones de discriminación por razón de edad, identidad de género, orientación sexual, origen, religión, lengua, nacionalidad, salud, discapacidad o situación socioeconómica, entre otros motivos.",
      texto1_1: "Si has sufrido o sufres alguna discriminación o delito de odio, en la OND:",
      texto1_2: "Te acompañamos con asesoramiento jurídico, atención psicosocial y acción educativa.\nTe ofrecemos mediación, intermediación y conciliación como herramientas para la gestión de conflictos. Desarrollamos la capacidad sancionadora en casos de discriminación.",
      texto2_1: "Si actúas en el ámbito de la defensa de los derechos humanos, en la OND:",
      texto2_2: "Te ofrecemos espacios y recursos para realizar actividades. \nColaboramos y apoyamos a personas y entidades relacionadas con los derechos humanos. Utilizamos el litigio estratégico como herramienta de garantía de derechos para todos y todas.",
      texto3_1: "Si quieres actuar contra la discriminación, en la OND:",
      texto3_2: "Te informamos sobre derechos humanos y derechos de ciudadanía. \nOrganizamos formaciones y acciones de sensibilización a través de nuestro centro de recursos sobre derechos humanos."
    },
  },
  ca: {
    translation: {
      texto_principal: "L’Oficina per la No Discriminació (OND) és el servei municipal de l’Ajuntament de Barcelona que treballa per la defensa, protecció i garantia dels drets humans a la ciutat.\n\nL’OND actua en situacions de discriminació per raó d’edat, identitat de gènere, orientació sexual, origen, religió, llengua, nacionalitat, salut, discapacitat i/o situació socioeconòmica, entre d’altres..",
      texto1_1: "Si has patit o pateixes alguna discriminació o delicte d’odi, a l’OND:",
      texto1_2: "T’acompayem amb assessorament jurídic, atenció psicosocial i acció educativa. T’oferim mediació, intermediació i conciliació com a eines per a la gestió de conflictes. Desenvolupem la capacitat sancionadora en casos de discriminació",
      texto2_1: "Si actues en l’àmbit de la defensa dels drets humans, a l’OND:",
      texto2_2: "T’oferim espais i recursos per realitzar activitats. Col·laborem i donem suport a persones i entitats relacionades amb drets humans. Fem servir el litigi estratègic com a eina de garantia de drets per a tothom",
      texto3_1: "Si vols actuar contra la discriminació, a l'OND:",
      texto3_2: "T’informem sobre drets humans i drets de ciutadania. Organitzem formacions i accions de sensibilització a través del nostre Centre de Recursos en drets humans",
    },
  },
  ga: {
    translation: {
      texto_principal: "A Oficina para a Non-Discriminación (OND) é o servizo municipal do Concello de Barcelona que traballa pola defensa, protección e garantía dos dereitos humanos na cidade. A OND actúa en situacións de discriminación por razón de idade, identidade de xénero, orientación sexual, orixe, relixión, lingua, nacionalidade, saúde, discapacidade ou situación socioeconómica, entre outros motivos.",
      texto1_1: "Se sufriches ou sofres algunha discriminación ou delito de odio, na OND:",
      texto1_2: "Acompañámoste con asesoramento xurídico, atención psicosocial e acción educativa. Ofrecémosche mediación, intermediación e conciliación como ferramentas para a xestión de conflitos. Desenvolvemos a capacidade sancionadora en casos de discriminación.",
      texto2_1: "Se actúas no ámbito da defensa dos dereitos humanos, na OND:",
      texto2_2: "Ofrecémosche espazos e recursos para realizar actividades. Colaboramos e apoiamos a persoas e entidades relacionadas cos dereitos humanos. Utilizamos o litixio estratéxico como ferramenta de garantía de dereitos para todos e todas.",
      texto3_1: "Se queres actuar contra a discriminación, na OND:",
      texto3_2: "Informámoste sobre dereitos humanos e dereitos de cidadanía. Organizamos formacións e accións de sensibilización a través do noso centro de recursos sobre dereitos humanos.",
    },
  },
  fr: {
    translation: {
      texto_principal: "L’Office pour la Non-Discrimination (OND) est le service municipal de la mairie de Barcelone qui travaille pour la défense, la protection et la garantie des droits de l’homme dans la ville. L’OND agit dans les situations de discrimination en raison de l’âge, l’identité de genre, l’orientation sexuelle, l’origine, la religion, la langue, la nationalité, la santé, le handicap et/ou la situation socio- économique, entre autres.",
      texto1_1: "Si vous avez souffert ou souffrez une discrimination ou un délit de haine, l’OND:",
      texto1_2: "Vous apporte conseils juridiques, attention psychosociale et action éducative. \nVous offre médiation, intermédiation et conciliation avec des outils pour la gestion des conflits Développe la capacité de sanction en cas de discrimination",
      texto2_1: "Si vous êtes acteur de la défense des droits de l’homme, l’OND:",
      texto2_2: "Vous offre des espaces et des ressources pour réaliser des activités. Collabore et offre un support aux personnes et organismes en lien avec les droits de l’homme. Utilise le litige stratégique comme outil de garantie des droits pour tous",
      texto3_1: "Si vous souhaitez agir contre la discrimination, l’OND :",
      texto3_2: "Vous renseigne sur les droits de l’homme et des citoyens. Organise des formations et actions de sensibilisation par l’intermédiaire de son Centre de ressources en droits de l’homme.",
    },
  },
  hi: {
    translation: {
      texto_principal: "द ऑफ़िस फ़ॉर नॉन-डिस्क्रिमिनेशन (OOO) बार्सिलोना सिटी काउंसिल म्युनिसिपल सर्विस है, जो शहर में मानव अधिकारों की विशेषज्ञता प्राप्त करने, उन्हें सुरक्षित रखने और उनकी गारंटी देने के लिए कार्य करती है. OND, अन्य चीज़ों के अलावा आयु, लिंग पहचान, यौन अभिविन्यास, धर्म, भाषा, राष्ट्रीयता, स्वास्थ्य, अक्षमता और/या सामाजिक या आर्थिक स्थिति के आधार पर पक्षपात की स्थितियों पर प्रतिक्रिया देने के लिए कार्रवाई करता है.",
      texto1_1: "यदि आपके साथ किसी भी प्रकार का भेदभाव या घृणास्पद अपराध हुआ है, तो O में हम:",
      texto1_2: "हम कानूनी सलाह, साइको-सोशल केयर और शैक्षणिक कार्रवाई के संबंध में आपका साथ देंगे हम विवाद के प्रबंधन के लिए आपको मध्यस्थता, इंटरमीडिएशन और समाधान प्रस्तुत करेंगे हम भेदभाव के मामलों में अनुशासन की कार्रवाई की क्षमता विकसित कर रहे ह",
      texto2_1: "यदि आप मानव अधिकारों के बचाव के क्षेत्र में कार्य कर रहे हैं, तो O में हम:",
      texto2_2: "हम आपकी गतिविधियाँ संचालित करने के लिए आपको स्थान और  संसाधन प्रदान करेंगे हम मानव अधिकारों से संबंधित लोगों और संगठनों के साथ कार्य करते हैं और उन्हें सहायता प्रदान करते हैं हम हर व्यक्ति के लिए अधिकार सुनिश्चित करने के साधन के रूप में रणनीतिक मुकदमों का उपयोग करते ह",
      texto3_1: "यदि आप भेदभाव के विरदध ु्कार्रवाई करना चाहते हैं, तो में हम:",
      texto3_2: "आपको मानव और नागरिक अधिकारों के संबंध में जानकारी देंग \nअपने मानव अधिकार संसाधन केंद्र के माध्यम से जागरूकता बढ़ाने संबंधी ्रशिक्षण और पहल आयोजित करेंग",
    },
  },
  it: {
    translation: {
      texto_principal: "L’Ufficio per la non discriminazione, OND secondo la sigla in spagnolo, è il servizio municipale del Comune di Barcellona che lavora per la difesa, la tutela e la garanzia dei diritti umani nella città. L’OND agisce nelle situazioni di discriminazione, tra cui quelle basate su età, identità di genere, orientamento sessuale, origine o provenienza, religione, lingua, nazionalità, salute, disabilità o sullo stato socioeconomico.",
      texto1_1: "Se hai subito o subisci discriminazioni o crimini d’odio di qualsiasi natura, all’interno dell’OND:",
      texto1_2: "Ti accompagniamo con consulenza giuridica, assistenza psicosociale ed azione educativa. Mettiamo al tuo servizio mediazione, intermediazione e conciliazione come strumenti per la gestione dei conflitti. Implementiamo le competenze sanzionatorie nei casi di discriminazione.",
      texto2_1: "Se agisci nell’ambito della difesa dei diritti umani, all’interno dell’OND:",
      texto2_2: "Ti offriamo spazi e risorse per svolgere attività. Collaboriamo ed offriamo sostegno a persone ed enti legati ai diritti umani. Adoperiamo contenziosi strategici come strumento per garantire i diritti di tutti.",
      texto3_1: "Se vuoi agire contro la discriminazione, all’interno dell’OND:",
      texto3_2: "Ti informiamo in merito ai diritti umani e ai diritti di cittadinanza. Organizziamo azioni formative e di sensibilizzazione attraverso il nostro centro di risorse dei diritti umani.",
    },
  },
  xi: {
    translation: {
      texto_principal: "拒绝歧视办事处 (OND) 是巴塞罗那市议会的市政服务机构， 致力于维护、保护和确保市民的人权。OND 在基于年龄、性别认同、性取向、血统、宗教、语言、 国籍、健康、残疾或社会经济地位等原因而出现歧视的情况 下，提供给予协助。",
      texto1_1: "如果你曾遭受或正在\n 遭受任何歧视或仇恨",
      texto1_2: "",
      texto2_1: "",
      texto2_2: "",
      texto3_1: "",
      texto3_2: "",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'ca', 
  fallbackLng: 'ca', 
  interpolation: {
    escapeValue: false, 
  },
});

export default i18n;
