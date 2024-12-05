import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

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
      texto1_1: "如果你曾遭受或正在\n遭受任何歧视或仇恨",
      texto1_2: "",
      texto2_1: "",
      texto2_2: "",
      texto3_1: "",
      texto3_2: "",
    },
  },
  roes: {
    translation: {
      texto_principal: "Oficiul pentru Nediscriminare (Oficina per la No Discriminació, OND) este serviciul municipal din cadrul Primăriei Barcelona care se ocupă cu apărarea și protejarea drepturilor omului în acest oraș. OND intervine în cazurile de discriminare pe bază de vârstă, identitate de gen, orientare sexuală, origine, religie, limbă, cetățenie, sănătate, handicap sau situație socio-economică, printre altele.",
      texto1_1: "Dacă ai fost sau ești victima unei discriminări sau a unei infracțiuni motivate de ură, la OND:",
      texto1_2: "Îți punem la dispoziție consiliere juridică, asistență psiho-socială și acțiuni educative. Îți oferim mediere, intervenție și consiliere ca instrumente de gestionare a conflictelor. Consolidăm capacitatea de sancționare în cazurile de discriminare.",
      texto2_1: "Dacă acționezi în sfera apărării drepturilor omului, la OND:",
      texto2_2: "Îți oferim spații și resurse pentru a desfășura activități. Colaborăm cu persoane și entități care au legătură cu domeniul drepturilor omului și le oferim sprijin. Utilizăm litigiul strategic ca instrument de garantare a drepturilor pentru toți și pentru toate.",
      texto3_1: "Dacă vrei să acționezi împotriva discriminării, la OND:",
      texto3_2: "Te informăm cu privire la drepturile omului și ale cetățeanului. Organizăm programe de formare și acțiuni de sensibilizare prin intermediul centrului nostru de resurse pentru drepturile omului.",
    },
  },
  romi: {
    translation: {
      texto_principal: "I Oficina pa-la é Na Discriminácia (OND) si o servipen keripen k-o kupatni katar e Barcelona so butĭ pa-la ćiro alav, thaj arakeltut katar e manuśenqe kaj beśes and-o foro. I OND akanal e situacía andar discriminácia k-o Ʒanes berśa, ververipen manuśenqe katar o sexo, katar sen, tumari nacia, tumari ćhib, tumare sastipen, dukhalos, si naj tumen laćhi situacia lovenqi, o biro vaj.",
      texto1_1: "A ko tu samardo o kaj tu pendhe ko kerde tu discriminacìa o baro Ʒungalipen, and-e OND:",
      texto1_2: "Ka gias mas tuja sas sis ka va tumenqe crìss arakatumen, te dikhas amaro gŏdipen soro thaj axcia Ʒanel. Saj te manglipen tablete, thaj kerav aviav sar te keren bugeko, te kerav alav laćho. ",
      texto2_1: "Ko keres and-o thanipen katar arakes manusenqo alav, and-o OND:",
      texto2_2: "Del tut tan i bucho thaj saj bugipen. Vervipen thaj amen da e manuse thaj asociacia, ka araken alav manenqo. Kerăv alav Ʒungalo sar jhek buchipo thaj o baro alav katar savorenqe.",
      texto3_1: "Ko maque thaj keren and-e te piren discriminaticìa, and-i OND:",
      texto3_2: "Kam vakeras tumenqe so si alav manuśenqo i o alav kator o e tanetko foro. Kerav formatcia, katar a amaro thanipen bućho sar te keren manuśenqo alav. ",
    },
  },
  ta: {
    translation: {
      texto_principal: "Ang Oficina para la No Discriminación (Opisina Laban sa Diskriminasyon o OND) ay ang serbisyong pangmunisipyo ng Ayuntamiento de Barcelona (Munisipyo ng Barcelona) na nag-aasikaso sa pagtatanggol, pagprotekta at pagtiyak sa mga karapatang pantao sa lungsod. Kumikilos ang OND sa mga sitwasyon ng pagdiskrimina dahil sa edad, pagkakakilanlang sekswal, oryentasyong sekswal, pinagmulan, relihiyon, wika, nasyonalidad, kalusugan, pagiging may kapansanan o kalagayang pampinansyal, at iba pa.",
      texto1_1: "Kung nakaranas o nakakaranas ka ng pagdiskrimina o krimeng udyok ng pagkapuot, sa OND:",
      texto1_2: "Tutulungan ka namin hinggil sa payong legal, sikolohikal na tulong at pagbibigay-impormasyon. Paglalaanan ka namin ng serbisyo ng tagapamagitan at pakikipag-areglo bilang tulong para sa pagharap sa hindi pagkakasunod. May awtoridad kaming magpataw ng parusa at multa sa mga kaso ng diskriminasyon.",
      texto2_1: "Kung isa ka sa mga nakikibahagi sa larangan ng pagtatanggol ng mga karapatang pantao, sa OND:",
      texto2_2: "Bibigyan ka namin ng lugar at mga kinakailangan para magsagawa ng mga aktibidad. Nakikipagtulungan kami at sinusoportahan namin ang mga tao at organisasyong nakikibahagi sa mga usapin ng mga karapatang pantao. Ginagamit namin ang estratehikong paglilitis bilang instrumento sa paggarantiya sa mga karapatan para sa lahat.",
      texto3_1: "Kung gusto mong kumilos laban sa diskriminasyon, sa OND:", 
      texto3_2: "Bibigyan ka namin ng impormasyon tungkol sa mga karapatang pantao at sa mga karapatan ng mga mamamayan. Nag-oorganisa kami ng mga pagpapakalat ng kamalayan sa pamamagitan ng aming pangunahing mapagkukunan ng impormasyon tungkol sa mga karapatang pantao.",
    },
  },
  ru: {
    translation: {
      texto_principal: "Офис по недискриминации (ОНД) – муниципальная служба мэрии Барселоны, которая осуществляет деятельность, направленную на защиту, охрану и гарантию прав человека в нашем городе. ОНД действует в ситуациях дискриминации в связи с возрастом, гендерной идентичностью, сексуальной ориентацией, происхождением, религией, языком, национальностью, состоянием здоровья, инвалидностью, социально-экономическим положением и прочими причинами.",
      texto1_1: "Если вы подверглись или подвергаетесь дискриминации или стали жертвой преступления на почве ненависти, зна те, что ОНД:",
      texto1_2: "Предоставляет юридические консультации, психосоциальную помощь и принимает просветительские меры. Предлагает такие меры по управлению конфликтами, как посредничество, урегулирование и примирительная процедура. Обеспечивает применение санкций в случаях дискриминации.",
      texto2_1: "Если вы осуществляете деятельность в сфере защиты прав человека, ОНД:",
      texto2_2: "Предлагает вам помещения и ресурсы для проведения мероприятий. Осуществляет сотрудничество и оказывает поддержку лицам и организациям, связанным с защитой прав человека. Использует стратегические судебные иски в качестве средства гарантии прав для всех.",
      texto3_1: "Если вы хотите бороться с дискриминацией, знайте, что ОНД:",
      texto3_2: "Предоставляет информацию о правах человека и правах граждан. Проводит обучение и мероприятия, направленные на повышение информированности с помощью нашего центра ресурсов по правам человека.",
    },
  },
  be: {
    translation: {
      texto_principal: "অ-বৈষম্যের জন্য অফিস (ওএনডি) হল বার্সেলোনা শহর কাউন্সিলের পৌরসভার পরিষেবা যা, শহরের মানবাধিকারের প্রতিরক্ষা, সুরক্ষা এবং নিশ্চয়তার জন্য কাজ করে। ওএনডি অন্যান্য কারণগুলোর মধ্যে বয়স, লিঙ্গ পরিচয়, যৌন অভিযোজন, জাতি, ধর্ম, ভাষা, জাতীয়তা, স্বাস্থ্য, অক্ষমতা বা আর্থ- সামাজিক অবস্থার উপর ভিত্তি করে বৈষম্যের পরিস্থিতিতে কাজ করে।",
      texto1_1: "আপনি যদি কোনও বৈষম্য বা ঘৃণার সম্মুখীন হয়ে থাকেন বা সম্মুখীন হোন , ওএনডি এর মধ্যে:",
      texto1_2: "আমরা আপনার আইনি উপদেশ, মনোসামাজিক দৃষ্টি আকর্ষণ এবং শিক্ষাগত কাজে সহযোগিতা করি।. আমরা দ্বন্দ-বিবাদ ব্যবস্থাপনার অংশ হিসাবে মধ্যস্থতা, বিভিন্ন পক্ষের মধ্যে মধ্যস্থতা এবং মীমাংসা প্রদান করি। আমরা বৈষম্যের ক্ষেত্রে বৈধ ক্ষমতার বিকাশ ঘটাই।",
      texto2_1: "যদি আপনি মানবাধিকারের প্রতিরক্ষার ক্ষেত্রে কাজ করেন, তবে ওএনডি এর মধ্যে:",
      texto2_2: "আমরা কার্যক্রমগুলি পরিচালনার জন্য আপনাকে স্থান এবং সম্পদের সুবিধা দিই।. আমরা মানবাধিকার সম্পর্কিত মানুষ ও সংস্থাদের সহযোগিতা করি এবং সহায়তা করি।. আমরা প্রত্যেকের জন্য অধিকার নিশ্চিত করণের জন্য একটি কৌশল হিসাবে কৌশলগত মামলা ব্যবহার করি।",
      texto3_1: "আপনি যদি বৈষম্য বিরুদ্ধে কাজ করতে চান, তবে ওএনডি এর মধ্যে:",
      texto3_2: "আমরা আপনাকে মানবাধিকার ও নাগরিক অধিকার সম্পর্কে অবহিত করি। মানবাধিকারের উপর আমাদের রিসোর্স সেন্টারের মাধ্যমে আমরা প্রশিক্ষণ ও সচেতনতামূলক কর্মকান্ডের আয়োজন করি।",
    },
  },
  eu: {
    translation: {
      texto_principal: "Diskriminazio Ezaren Bulegoa (OND) hirian giza eskubideak defendatu, babestu eta bermatzearen alde lan egiten duen Bartzelonako Udalaren Zerbitzua da. OND diskriminazio-arrazoi hauen aurrean aritzen da: adina, genero-identitatea, sexu-orientazioa, jatorria, erlijioa, hizkuntza, nazionalitatea, osasuna, desgaitasuna edo egoera sozioekonomikoa, besteak beste.",
      texto1_1: "Diskriminazioren bat edo gorroto-delituren bat jasan izan baduzu, edo jasaten ari bazara, ONDn:",
      texto1_2: "Laguntza ematen dizugu lege-aholkularitza, arreta psikosoziala eta heziketa-jarduera eskainiz. Bitartekaritza, bitartekotza eta adiskidetzea eskaintzen dizugu gatazkak kudeatzeko tresna modura. Zigortze-gaitasuna garatzen dugu diskriminazio kasuetan.",
      texto2_1: "Giza eskubideak defendatzen aritzen bazara, ONDn:",
      texto2_2: "Jarduerak burutzeko espazioak eta baliabideak eskaintzen dizkizugu. Giza eskubideen inguruko pertsona eta erakundeekin egiten dugu lan eta laguntza ematen diegu. Auzi-estrategia erabiltzen dugu eskubideak guztientzat bermatzeko tresna gisa.",
      texto3_1: "Diskriminazioaren aurka egin nahi baduzu, ONDn:",
      texto3_2: "Informazioa ematen dugu giza eskubideez eta herritarren eskubideez. Sentsibilizazio-prestakuntzak eta -ekintzak antolatzen ditugu giza eskubideei buruzko gure baliabide-gunearen bitartez.",
    },
  },
  aranes: {
    translation: {
      texto_principal: "Er Ofici entara Non Discriminacion (OND) ei eth servici municipau der Ajuntament de Barcelona que trabalhe entara defensa, emparament e garantia des drets umans ena ciutat. Er OND actue en situacions de discriminacion per arrason d’edat, identitat de genre, orientacion sexuau, origina, religion, lengua, nacionalitat, salut, andicap e/o situacion socioeconomica, entre d’autes causes.",
      texto1_1: "S’as patit o patisses bèra discriminacion o delicte d’òdi, en OND:",
      texto1_2: "T’acompanham damb assessorament juridic, atencion psicosociau e accion educativa. T’aufrim mediacion, intermediacion e conciliacion coma estruments entara gestion de conflictes Desvolopam era capacitat sancionadora en casi de discriminacion.",
      texto2_1: "S’agisses en encastre dera defensa des drets umans, en OND:",
      texto2_2: "T’aufrim espacis e recorsi entà realizar activitats Collaboram e sostiem a persones e entitats restacades damb drets umans. Emplegam eth litigi estrategic coma estrument de garantia de drets entà toti",
      texto3_1: "Se vòs actuar contra era discriminacion, en OND:",
      texto3_2: "T’informam sus drets umans e drets des ciutadans. Organizam formacions e accions de sensibilizacion a trauès deth nòste Centre de Recorsi en drets umans",
    },
  },
  wo: {
    translation: {
      texto_principal: "Kër guy Xeex Béddi (KXB) ab sarwiisu gox la bu nekk ci meeri Goxu Barsalon la buy liggéey ngir saytu, àar te garanti àqi doomu aadam ci gox bi. KXB dafay jefe cig tontu ci anami béddi ci li aju ci at, xàmmeekaayu goor wala jiggeen, jubluwaayu awra, diine, làkk, réew mi nga bokk, werguyaram, laago ak/wala anam péncoo wala koom-koom, ci biir yeneeni mbir.",
      texto1_1: "Sudee da nga daj coona wala nga dajoon coona ci bépp béddi wala ñaawtéefu mbañeel, KXB:",
      texto1_2: "Di nañ la guŋgee ak ay digley yoon, pàccu xél ak jëfu jàngale. Di nañ la jox ab waxtaan, waxtaan ci ay digante ak juboole niki ay jumtukaay ngir saytug ñàxtu. Noo ngi defar ab man-manu yaraate ci ay anami béddi.",
      texto2_1: "Sudee da ngay jëfe ci biir ëttu àqi doomi aadama, KXB:",
      texto2_2: "Di nañu la jagleel ay barab wala costéef ngir nga mën a amal say jëf. Danuy liggéey tekk ci di joxe ndimbal ay nit ak ay mbootaay yuy liggéey ci mbirum àqi doomi aadama. Danuy jëfandikoo ab até bu teggu ci yoon niki ab jumtukaay ngir fexe ba jox ñépp seen àq",
      texto3_1: "Sudee da nga bëgg a xeex béddi, KXB:",
      texto3_2: "Di nañ la jox ay xibaar ci àqi doomi aadama ak situwayee. Dina ñu nos ay njàngalem yeete ak ay jéegoo ci biir sunu Santaru Costéefi Àq",
    },
  },
  ur: {
    translation: {
      texto_principal: "",
      texto1_1: "",
      texto1_2: "",
      texto2_1: "",
      texto2_2: "",
      texto3_1: "",
      texto3_2: "",
    },
  },
  ar: {
    translation: {
      texto_principal: "",
      texto1_1: "",
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
