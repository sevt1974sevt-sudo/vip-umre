import { DayPlan } from "../types";

export const MEKKE_2_GUNLUK_VIP_ROTA: DayPlan[] = [
  {
    dayNumber: 1,
    title: "1. Gün: Nübüvvetin İlk Çilesi, Gizli Davet ve Sadakat Makamları",
    theme: "Mekke'nin Kalbinde Saklı Hatıralar & İlk İman Halkası",
    summary:
      "Standart 50 kişilik otobüslerin asla yanaşamadığı Ceravel ve Şi'b vadisi gibi dar sokaklara VIP Mercedes Vito ile doğrudan erişim sağlayarak; Peygamber Efendimiz'in (s.a.v.) fetihte yıkandığı kuyudan, Hz. Hatice Vâlidemiz'in medfun bulunduğu Cennetü'l-Muallâ'ya uzanan manevi bir keşif.",
    totalDistanceKm: 18,
    recommendedStartTime: "07:30 (Sabah namazı ve hafif kahvaltı sonrası)",
    haremRestTime: "12:00 - 16:30 (Öğle namazı, Kabe ibadeti, otel istirahati ve öğle sıcağından korunma)",
    stops: [
      {
        id: "bir-i-tuva",
        nameTr: "Bi'r-i Tuvâ (Tuvâ Kuyusu)",
        nameAr: "بِئْرُ طُوًى",
        meaningTr: "Tuvâ Kuyusu / Katlanmış/Dürülmüş Mukaddes Vadi Pınarı",
        timeSlot: "07:45 - 08:30",
        durationMinutes: 45,
        importance:
          "Hz. Peygamber (s.a.v.), Hicret'ten sonra Mekke'nin fethi (8/630) ve Veda Haccı günlerinde Mekke'ye girmeden önce geceyi burada geçirmiş, sabahleyin bu kuyunun suyuyla gusül abdesti alarak Harem-i Şerif'e girmiştir. Sahabelerden Abdullah b. Ömer (r.a.) de Efendimiz'in bu sünnetine bizzat ittiba ederek her Mekke girişinde burada geceler ve yıkanırdı.",
        historicalSiyarSource: "el-Ezrakî, Ahbâru Mekke (c. 2, s. 207); Sahîh-i Buhârî, Kitâbü'l-Hacc, Bâb: 38 (Hadis no: 1553)",
        siyarExcerpt:
          "عَنِ ابْنِ عُمَرَ رَضِيَ اللَّهُ عَنْهُمَا: «أَنَّ النَّبِيَّ ﷺ بَاتَ بِذِي طُوًى حَتَّى أَصْبَحَ ثُمَّ دَخَلَ مَكَّةَ، وَكَانَ ابْنُ عُمَرَ يَفْعَلُ ذَلِكَ»",
        vitoLogistics:
          "Ceravel (Cerul) bölgesindeki tarihi doku ve dar ara sokaklar nedeniyle 50 kişilik büyük otobüslerin buraya girmesi ve park etmesi kesinlikle imkansızdır. 6 kişilik VIP Mercedes Vito aracımız, kuyunun hemen önündeki özel cebe kadar misafirlerimizi bırakır. Yürüme mesafesi 15 metredir.",
        crowdAvoidanceStrategy:
          "Sabah namazı ertesinde (07:45) bölge yerel sükunet içindedir. Turist kalabalığı henüz başlamadığından huşu içinde inceleme ve özel rehber anlatımı yapılır.",
        comfortFeatures: [
          "Araç içi soğutulmuş Zemzem ikramı",
          "Kişiye özel kablosuz fısıltı rehber kulaklıkları",
          "Gölge alanda tarihi kitabe okuması",
        ],
        tags: ["Sünnet-i Seniyye", "Fethin Güzergahı", "Otobüs Giremeyen Mekan"],
      },
      {
        id: "mescid-i-raye",
        nameTr: "Mescidü'r-Râye (Sancak Mescidi / Mescidü'l-Cüddûr)",
        nameAr: "مَسْجِدُ الرَّايَةِ",
        meaningTr: "Fethin İslam Sancağının Dikildiği Mescid",
        timeSlot: "08:45 - 09:30",
        durationMinutes: 45,
        importance:
          "Mekke'nin fethinde (8. hicri yıl), İki Cihan Güneşi Efendimiz (s.a.v.) üst taraftan (Kedâ / el-Muallâ tarafından) şehre girerken, İslam ordusunun sancağını Hz. Zübeyr b. el-Avvâm'a (r.a.) buraya dikmesini emretmiş ve kendisi de burada kubbesini (çadırını) kurarak fetih namazı kılmıştır.",
        historicalSiyarSource: "İbn Hişâm, es-Sîretü'n-Nebeviyye (c. 4, s. 47); el-Fâkihî, Ahbâru Mekke fî Kadîmi'd-Dehr (c. 3, s. 68)",
        siyarExcerpt:
          "«ضَرَبَ رَسُولُ اللَّهِ ﷺ قُبَّتَهُ بِالْحَجُونِ عِنْدَ مَسْجِدِ الرَّايَةِ، وَأَمَرَ الزُّبَيْرَ أَنْ يَرْكُزَ رَايَتَهُ هُنَاكَ»",
        vitoLogistics:
          "Gazzâ ve Muallâ caddesi kavşağındaki yoğun trafik noktasına yakın olduğundan, VIP Vito aracımız şoförümüzle birlikte misafirlerimizi mescid kapısında indirip bekler; park arama stresi yaşanmaz.",
        crowdAvoidanceStrategy:
          "Standart umre acentalarının programında yer almaz; bu sayede 6 kişilik heyetimiz mescid içerisinde tefekkür namazı kılabilir.",
        comfortFeatures: [
          "2 rekat Şükür/Tahiyyetü'l-Mescid namazı imkanı",
          "Tarihi fethin askeri ve manevi stratejisinin harita üzerinden sunumu",
        ],
        tags: ["Mekke'nin Fethi", "Az Bilinen Mescidler", "Siyer Coğrafyası"],
      },
      {
        id: "sibu-ebi-talib",
        nameTr: "Şi'bu Ebî Tâlib / Şi'bu Benî Hâşim (Boykot Vadisi)",
        nameAr: "شِعْبُ أَبِي طَالِبٍ / شِعْبُ بَنِي هَاشِمٍ",
        meaningTr: "Ebû Tâlib Vadisi / Müşriklerin 3 Yıllık Boykot ve İman Çilesi Mahalli",
        timeSlot: "09:45 - 11:00",
        durationMinutes: 75,
        importance:
          "Peygamberliğin 7. yılından 10. yılına kadar Kureyş müşriklerinin Hz. Peygamber ve Müslümanlara karşı uyguladığı amansız sosyal ve ekonomik boykotun yaşandığı yerdir. Müslümanlar açlıktan ağaç kabukları yemiş, lakin tevhid davasından bir adım geri atmamışlardır. Hemen yamacında ilk davet ocağı Dârü'l-Erkam'ın hatırası yaşatılmaktadır.",
        historicalSiyarSource: "İbn Sa'd, et-Tabakātü'l-Kübrâ (c. 1, s. 208); İbnü'l-Esîr, el-Kâmil fi't-Târîh (c. 2, s. 87)",
        siyarExcerpt:
          "«حُصِرَ رَسُولُ اللَّهِ ﷺ وَأَهْلُ بَيْتِهِ فِي الشِّعْبِ ثَلاَثَ سِنِينَ حَتَّى جَهِدُوا، وَأَكَلُوا وَرَقَ الشَّجَرِ إِيمَانًا وَاحْتِسَابًا»",
        vitoLogistics:
          "Merve tepesinin doğu yamacındaki vadi ağzında, Harem genişletme bölgesine komşu özel VIP indirme noktasından istifade edilir. Otobüsler bu bölgeye kesinlikle yaklaştırılmaz.",
        crowdAvoidanceStrategy:
          "Günün bu saatinde Kabe çevresindeki kitleler otellerine çekildiğinden, vadi girişinde tefekkür ve siyer tahlili için sakin bir atmosfer bulunur.",
        comfortFeatures: [
          "Arapça boykot vesikası metninin tahlili ve tercümesi",
          "Medine hurması ve serin gül suyu ikramı",
        ],
        tags: ["Sabır ve Sebat", "İslam'ın Doğuşu", "Dârü'l-Erkam Ruhu"],
      },
      {
        id: "cennetul-mualla",
        nameTr: "Cennetü'l-Muallâ (Makberetü'l-Hacûn)",
        nameAr: "مَقْبَرَةُ الْمُعَلَّاة (جَنَّةُ الْمُعَلَّاة)",
        meaningTr: "Mekke'nin En Şerefli Kabristanı / Yüce Makam",
        timeSlot: "16:45 - 18:00",
        durationMinutes: 75,
        importance:
          "Efendimiz'in ilk ve en sadık eşi Hz. Hatîcetü'l-Kübrâ (r.anhâ) Vâlidemiz, Peygamberimizin dedesi Abdülmuttalib, amcası Ebû Tâlib, çocukları el-Kāsım ve Abdullah ile Sahabe-i Kiram'ın önde gelenlerinin medfun bulunduğu mübarek haziredir.",
        historicalSiyarSource: "el-Ezrakî, Ahbâru Mekke (c. 2, s. 209); İbn Hacer, el-İsâbe fî Temyîzi's-Sahâbe",
        siyarExcerpt:
          "عَنِ ابْنِ عَبَّاسٍ: «نِعْمَتِ الْمَقْبَرَةُ هَذِهِ، مَقْبَرَةُ أَهْلِ مَكَّةَ (يَعْنِي الْمُعَلَّاةَ)»",
        vitoLogistics:
          "Hacûn köprüsünün altındaki VIP kapıya doğrudan yanaşılır. Yürümekte zorlanan misafirler için tekerlekli sandalye veya refakatçi desteği şoförümüzce temin edilir.",
        crowdAvoidanceStrategy:
          "İkindi namazı sonrası güneşin yatay açıya geçtiği ve hava sıcaklığının düştüğü saat seçilmiştir. Kabristanın en huzurlu vaktidir.",
        comfortFeatures: [
          "Hz. Hatice Vâlidemiz'e ithafen özel hazırlanan dua risalesi",
          "Buzlu lavantalı ıslak havlu servisi",
        ],
        tags: ["Hz. Hatice (r.a.)", "Dua ve Vefa", "Tarihi Hazire"],
      },
      {
        id: "mescid-i-cinn",
        nameTr: "Mescidü'l-Cinn ve Mescidü'l-İcâbe",
        nameAr: "مَسْجِدُ الجِنِّ وَمَسْجِدُ الإِجَابَةِ",
        meaningTr: "Cinlerin Efendimiz'e Biat Ettiği ve Duaların Kabul Olunduğu Mescidler",
        timeSlot: "18:15 - 19:15",
        durationMinutes: 60,
        importance:
          "Cin suresi ve Ahkāf suresinde zikredilen, cinlerin Peygamber Efendimiz'den Kur'an-ı Kerim dinleyip iman ettikleri ve biat ettikleri mevkidir. İbn Mes'ud (r.a.) rivayetiyle meşhur olan 'Leyletü'l-Cinn' (Cin Gecesi) burada vuku bulmuştur.",
        historicalSiyarSource: "Müslim, Kitâbü's-Salât, Bâb: 33 (Hadis no: 450); İbn Hişâm, es-Sîre (c. 2, s. 63)",
        siyarExcerpt:
          "عَنْ عَبْدِ اللَّهِ بْنِ مَسْعُودٍ: «كُنْتُ مَعَ رَسُولِ اللَّهِ ﷺ لَيْلَةَ الْجِنِّ، فَتَلا عَلَيْهِمُ الْقُرْآنَ بِشِعْبِ الْحَجُونِ»",
        vitoLogistics:
          "Muallâ mezarlığına 350 metre mesafede olup, Vito aracımız grup üyelerini kapının önünden alıp doğrudan Mescid-i Cinn avlusuna ulaştırır.",
        crowdAvoidanceStrategy:
          "Akşam ezanı öncesi sükunet vakti; akşam namazı burada eda edilerek Harem'e geçilir.",
        comfortFeatures: [
          "Cin Suresi ilk 15 ayetinin Arapça tefsir notları",
          "Harem'e dönüşte özel klimalı transfer",
        ],
        tags: ["Cin Suresi", "Kur'an Mucizesi", "Akşam Namazı"],
      },
    ],
  },
  {
    dayNumber: 2,
    title: "2. Gün: Vahyin Menbaı, Hicret Sadakati ve Feth-i Mübîn Ahdi",
    theme: "Mekke Çeperinde Siyer Coğrafyası & Hac Ruhu",
    summary:
      "Cebel-i Sevr'in hicret sırrından Arafat'ın sessiz vadilerine, Hayf Mescidi'nin nebevi hatıralarından Hudeybiye'nin Rıdvan Biatı'na uzanan, standart programlarda bulunmayan derinlikli 6 kişilik özel rota.",
    totalDistanceKm: 42,
    recommendedStartTime: "06:15 (İşrak vakti serinliğinde hareket)",
    haremRestTime: "12:00 - 16:30 (Öğle istirahati, Kabe'de tefekkür ve nafile tavaf)",
    stops: [
      {
        id: "cebel-i-sevr",
        nameTr: "Cebel-i Sevr Eteği ve Hicret Sadakati Dairesi",
        nameAr: "جَبَلُ ثَوْرٍ (غَارُ ثَوْرٍ)",
        meaningTr: "Sevr Dağı / Hicret Mağarası ve Sadakat Zirvesi",
        timeSlot: "06:30 - 08:00",
        durationMinutes: 90,
        importance:
          "Hz. Peygamber (s.a.v.) ile Hz. Ebû Bekir es-Sıddîk'ın (r.a.) hicret esnasında müşriklerin takibinden kurtulmak için üç gece gizlendikleri mübarek mağaranın bulunduğu dağ. Tevbe Suresi 40. ayetinde 'İkincinin ikisi' (Sâniye'sneyn) olarak methedilen sadakat mekanıdır.",
        historicalSiyarSource: "Kur'an-ı Kerim, Tevbe Suresi 9/40; Buhârî, Menâkıbü'l-Ensâr, 45; et-Taberî, Târîhu'r-Rusül ve'l-Mülûk",
        siyarExcerpt:
          "﴿إِلَّا تَنصُرُوهُ فَقَدْ نَصَرَهُ اللَّهُ إِذْ أَخْرَجَهُ الَّذِينَ كَفَرُوا ثَانِيَ اثْنَيْنِ إِذْ هُمَا فِي الْغَارِ إِذْ يَقُولُ لِصَاحِبِهِ لَا تَحْزَنْ إِنَّ اللَّهَ مَعَنَا﴾",
        vitoLogistics:
          "Ziyaretimiz dağa tırmanış şeklinde DEĞİLDİR (yaşlı ve kıymetli misafirlerimizin fiziki konforunu korumak adına). Vito aracımızla Sevr Dağı'nın en nezih, gölgelikli seyir ve tefekkür eteğine kadar çıkılır. Taşınabilir lüks kamp koltukları ve gölgelik açılarak özel anlatım yapılır.",
        crowdAvoidanceStrategy:
          "Sabahın erken saati (06:30-08:00) seçilerek hem yakıcı güneşten kaçınılır hem de tur otobüslerinin gürültüsünden tamamen uzak bir tefekkür ortamı sağlanır.",
        comfortFeatures: [
          "Özel gölgelik ve ergonomik oturma düzeneği",
          "Taze tulum peyniri, hurma ve sıcak Arap kahvesi (Gahwa) ikramı",
          "Tevbe 40. ayeti tahlili ve hicret arkadaşlığı sohbeti",
        ],
        tags: ["Hicret", "Sadakat", "Tefekkür", "Özel Oturma Düzeneği"],
      },
      {
        id: "mescid-i-nemire-arafat",
        nameTr: "Mescid-i Nemire & Cebelü'r-Rahme Etekleri (Arafat)",
        nameAr: "مَسْجِدُ نَمِرَة وَجَبَلُ الرَّحْمَةِ (عَرَفَات)",
        meaningTr: "Nemire Mescidi / Veda Hutbesi ve Rahmet Dağı",
        timeSlot: "08:15 - 09:30",
        durationMinutes: 75,
        importance:
          "Hz. Peygamber'in Veda Haccı'nda (10/632) ashabına hitaben insan hakları evrensel beyannamesi niteliğindeki meşhur Veda Hutbesi'ni irad buyurduğu Urene Vadisi ve Nemire Mescidi. Hac mevsimi haricinde bu mekan derin bir sessizlik ve manevi arınma merkezidir.",
        historicalSiyarSource: "Müslim, Kitâbü'l-Hacc, Bâb: 19 (Câbir b. Abdillâh'ın uzun Veda Haccı rivayeti, Hadis no: 1218)",
        siyarExcerpt:
          "«نَزَلَ ﷺ بِنَمِرَةَ، فَضُرِبَتْ لَهُ قُبَّةٌ، حَتَّى زَالَتِ الشَّمْسُ فَرَكِبَ الْقَصْوَاءَ حَتَّى أَتَى بَطْنَ الْوَادِي فَخَطَبَ النَّاسَ خُطْبَةَ الْوَدَاعِ»",
        vitoLogistics:
          "Arafat ovasında araç trafiği olmadığından VIP Vito ile doğrudan Mescid-i Nemire'nin tarihi kubbeli eski kısmının yanına yanaşılır.",
        crowdAvoidanceStrategy:
          "Hac dönemi dışındaki günlerde Arafat son derece tenhadır; 6 kişilik grubumuzla açık semada Veda Hutbesi maddeleri tek tek okunur.",
        comfortFeatures: [
          "Veda Hutbesi'nin Arapça-Türkçe lüks tıpkıbasım metni hediye edilir",
          "Soğuk Zemzem termosu servisi",
        ],
        tags: ["Veda Hutbesi", "Hac Ruhu", "Huzur ve Sükunet"],
      },
      {
        id: "mescid-i-hayf-mina",
        nameTr: "Mescidü'l-Hayf (Mina) & Müzdelife el-Meş'arü'l-Harâm",
        nameAr: "مَسْجِدُ الخَيْفِ (مِنَى) وَالمَشْعَرُ الحَرَامُ (مُزْدَلِفَة)",
        meaningTr: "Yetmiş Peygamberin Namaz Kıldığı Mescid ve Mukaddes Şiar",
        timeSlot: "09:45 - 11:00",
        durationMinutes: 75,
        importance:
          "Efendimiz (s.a.v.): 'Mescid-i Hayf'ta yetmiş peygamber namaz kılmıştır; bunlardan biri de Mûsâ (a.s.)'dır' buyurmuştur. Mina vadisinde Efendimiz'in çadır kurup kurban kestiği ve taşlama günlerinde namaz kıldırdığı merkezdir.",
        historicalSiyarSource: "el-Heysemî, Mecme'u'z-Zevâid (c. 3, s. 250); Taberânî, el-Mu'cemü'l-Kebîr; el-Fâkihî, Ahbâru Mekke",
        siyarExcerpt:
          "عَنِ ابْنِ عَبَّاسٍ رَضِيَ اللَّهُ عَنْهُمَا: «صَلَّى فِي مَسْجِدِ الْخَيْفِ سَبْعُونَ نَبِيًّا، مِنْهُمْ مُوسَى عَلَيْهِ السَّلاَمُ»",
        vitoLogistics:
          "Mina ve Müzdelife tünellerinden hızlı VIP transit geçiş hakkı kullanılarak, büyük araçların girmesine izin verilmeyen iç servis yollarından ulaşım sağlanır.",
        crowdAvoidanceStrategy:
          "Mina vadisinin hac haricindeki sessizliği, Hz. İbrahim, Hz. İsmail ve Hz. Hacer'in teslimiyetini derinlemesine idrak etmek için eşsizdir.",
        comfortFeatures: [
          "Hz. İbrahim ve İsmail (a.s.) kurban imtihanı üzerine derinlikli siyer müzakeresi",
          "Klimalı araç içi ferahlama molası",
        ],
        tags: ["70 Peygamber", "Hz. İbrahim'in İmtihanı", "Özel Transit Güzergah"],
      },
      {
        id: "cebel-i-nur-hira",
        nameTr: "Cebel-i Nûr / Hira Kültür Vadisi (Mathaf Hira)",
        nameAr: "جَبَلُ النُّورِ (غَارُ حِرَاءٍ) وَحَيُّ حِرَاءَ الثَّقَافِيُّ",
        meaningTr: "Nur Dağı / İlk Vahyin 'İKRA' Nidasının İndiği Zirve",
        timeSlot: "16:45 - 18:15",
        durationMinutes: 90,
        importance:
          "Peygamber Efendimiz'e (s.a.v.) Cebrail (a.s.) vasıtasıyla Alak Suresi'nin ilk beş ayetinin indiği ve kainatın seyrinin değiştiği mekandır. Yaşlı misafirlerimiz için yorucu dağ tırmanışı yerine, dağın eteğinde kurulan modern 'Hira Kültür Bölgesi'nde (Hayyü Hira es-Sekāfî) vahiy müzesi ve dağ eteği tefekkürü bir arada sunulur.",
        historicalSiyarSource: "Buhârî, Bed'ü'l-Vahy, 3; İbn Hişâm, es-Sîretü'n-Nebeviyye (c. 1, s. 235)",
        siyarExcerpt:
          "«حَتَّى جَاءَهُ الْحَقُّ وَهُوَ فِي غَارِ حِرَاءٍ، فَجَاءَهُ الْمَلَكُ فَقَالَ: اقْرَأْ، فَقَالَ: مَا أَنَا بِقَارِئٍ...»",
        vitoLogistics:
          "Hira Kültür Bölgesi VIP otoparkına doğrudan giriş. İhtiyaç duyan misafirlerimiz için golf arabası tahsisi ve engelsiz yürüyüş platformları.",
        crowdAvoidanceStrategy:
          "İkindi sonrası serinlikte gün batımı manzarası eşliğinde ilk vahyin nüzul atmosferi tefekkür edilir.",
        comfortFeatures: [
          "Hira Müzesi VIP rehberli geçiş",
          "Alak suresi ilk 5 ayetinin edebi ve tasavvufi şerhi",
          "Taze sıkılmış meyve suları ve soğuk havlu",
        ],
        tags: ["İlk Vahiy", "İkra", "Hira Kültür Vadisi", "VIP Konfor"],
      },
      {
        id: "hudeybiye",
        nameTr: "Hudeybiye (Bi'r-i Hudeybiye & Mescidü'ş-Şecere)",
        nameAr: "بِئْرُ الحُدَيْبِيَةِ وَبَيْعَةُ الرِّضْوَانِ",
        meaningTr: "Hudeybiye Kuyusu / Rıdvan Biatı ve Feth-i Mübîn Barışı",
        timeSlot: "18:30 - 20:00",
        durationMinutes: 90,
        importance:
          "Hicretin 6. yılında 1400 sahabenin Efendimiz'e canları pahasına biat ettiği 'Bey'atü'r-Rıdvân'ın yapıldığı ve Kur'an'ın 'Feth-i Mübîn' (Apaçık bir fetih) olarak nitelediği tarihi barış anlaşmasının imzalandığı mekandır. Aynı zamanda Mekke Harem sınırının dışında yer aldığından dileyen misafirlerimiz için ikinci bir Umre niyet ve ihram mahallidir.",
        historicalSiyarSource: "Kur'an-ı Kerim, Fetih Suresi 48/18; Sahîh-i Müslim, Kitâbü'l-Cihâd ve's-Siyer (Hadis no: 1785)",
        siyarExcerpt:
          "﴿لَّقَدْ رَضِيَ اللَّهُ عَنِ الْمُؤْمِنِينَ إِذْ يُبَايِعُونَكَ تَحْتَ الشَّجَرَةِ فَعَلِمَ مَا فِي قُلُوبِهِمْ فَأَنزَلَ السَّكِينَةَ عَلَيْهِمْ وَأَثَابَهُمْ فَتْحًا قَرِيبًا﴾",
        vitoLogistics:
          "Mekke merkezine 22 km mesafedeki Eski Cidde yolu üzerinde yer alır. VIP Vito konforuyla otoyoldan sarsıntısız ulaşım sağlanır. Araçta ihram hazırlıkları için alan mevcuttur.",
        crowdAvoidanceStrategy:
          "Akşam ve yatsı vaktinde tenhadır; Ten'im (Âişe Mescidi) gibi izdihamlı değildir. Niyet ve 2 rekat ihram namazı huşu ile kılınır.",
        comfortFeatures: [
          "İkinci Umre'ye niyet edecek misafirlerimiz için ihram rehberliği ve telbiye duası",
          "Harem'e dönüşte özel VIP transfer ve Kabe'de tavaf refakati",
        ],
        tags: ["Rıdvan Biatı", "Fetih Suresi", "İkinci Umre İhramı", "Geniş Vadi"],
      },
    ],
  },
];

export const VIP_STANDARTS = [
  {
    title: "Maksimum 6 Kişilik Butik Grup",
    description: "Aile sıcaklığında bir ortam, samimi muhabbet ve her misafirimize birebir özel ihtimam.",
    icon: "Users",
  },
  {
    title: "Özel Araç ve Kapı Önü Konforu",
    description: "50 kişilik otobüslerin giremediği dar tarihi sokaklara ve mescid kapılarına doğrudan erişim.",
    icon: "Car",
  },
  {
    title: "Arapça ve Siyer Uzmanı Birebir Rehberlik",
    description: "Klasik Arapça kaynaklardan derinlemesine tarihi kitabe okumaları ve kaynaklı siyer anlatımı.",
    icon: "BookOpen",
  },
  {
    title: "Sıcak ve Kalabalık Yönetimi",
    description: "Öğle sıcağında Harem istirahati; sabah serinliği ve ikindi sonrası dinginliğinde ziyaretler.",
    icon: "SunMedium",
  },
  {
    title: "Huzurlu İkramlar & Fısıltı Kulaklık",
    description: "Buzlu Zemzem, Medine mebrum hurması, aromalı soğuk havlular ve fısıltı rehber kulaklıkları.",
    icon: "Coffee",
  },
  {
    title: "Esnek ve Dinlendirici Rota",
    description: "Yorulmadan, koşturmadan, tefekkür ve dua anlarına bol vakit ayıran dingin program akışı.",
    icon: "Clock",
  },
];

export const VIP_10_DAY_PACKAGE = {
  durationDays: 10,
  pricePerPersonTL: 60000,
  currency: "TL",
  groupSize: 6,
  totalGroupCostTL: 360000,
  citySplit: "6 Gün Mekke-i Mükerreme + 4 Gün Medine-i Münevvere",
  conceptTitle: "6 Kişilik Butik ve Huzurlu Umre Paketi",
  conceptSubtitle: "10 Günlük Manevi Yolculuk • Aile Sıcaklığında Birebir Rehberlik • Özel Tahsisli Araç • Şeffaf 60.000 TL Fiyat",
  
  priceHighlights: [
    {
      metric: "10 Gün",
      label: "Toplam Tur Süresi",
      subtext: "Aceleye getirilmemiş, tefekkür ve huşu dolu ritim",
    },
    {
      metric: "60.000 TL",
      label: "Kişi Başı Sabit Paket Fiyatı",
      subtext: "Büyük turların karmaşasından uzak, şeffaf butik maliyet",
    },
    {
      metric: "Maks. 6 Kişi",
      label: "Aile Sıcaklığında Özel Grup",
      subtext: "Yabancı kalabalık yok, birebir ilgi ve samimiyet",
    },
    {
      metric: "Özel Minibüs",
      label: "Tahsisli Klimalı Konforlu Araç",
      subtext: "Kapıya kadar yanaşma, otobüs beklemesi sıfır",
    },
  ],

  includedServices: [
    "10 gün boyunca 6 kişilik gruba özel tahsis edilmiş son model, klimalı Mercedes Vito VIP minibüs ve özel şoför",
    "Yetkin Arapça mütehassısı & Siyer araştırmacısı özel rehber eşliği (tüm seyahat boyunca kesintisiz)",
    "Havalimanı VIP karşılama, özel transferler ve bagaj handling hizmetleri (Cidde / Medine)",
    "Mekke-i Mükerreme ve Medine-i Münevvere'de Harem-i Şerif'e yürüme mesafesinde seçkin butik/5 yıldızlı konaklama koordinasyonu",
    "Gidiş-Dönüş veya Şehirlerarası Haramain Hızlı Tren (Business Class) transfer koordinasyonu opsiyonu",
    "Kişiye özel fısıltı rehber kulaklık sistemi (Whisper Guide - gürültüsüz, fısıltı netliğinde siyer dinletisi)",
    "Araç içi ikramlar: Buzlu kutsal Zemzem suyu, Medine Mebrum/Acve hurması, soğuk aromatik havlular",
    "Mekke ve Medine'deki tüm az bilinen sahabe kabirleri, tarihi mescidler ve kuyuları kapsayan derinlikli ziyaretler",
    "Taif veya Bedir manevi tarih ziyareti ekleme imkanı",
    "Kişiselleştirilmiş İhram Rehberi, dua risaleleri ve günlük manevi program dokümantasyonu",
  ],

  excludedServices: [
    "Şahsi alışverişler ve isteğe bağlı özel harcamalar",
    "Zorunlu resmi seyahat sağlık sigortası ve vize harçları (yetkili TÜRSAB A Grubu acenta üzerinden tahakkuk ettirilir)",
    "Uluslararası gidiş-dönüş uçak biletleri (misafirlerimizin mil veya havayolu tercihlerine göre koordine edilir)",
  ],

  costOptimizationTable: [
    {
      category: "Ulaşım ve Lojistik Verimliliği",
      massTourPractice: "50 kişilik otobüs kirası, mazot ve boş koltuk risk maliyetleri paket fiyatına eklenir. Otobüs her durakta 40 dk bekleme yapar.",
      vipBoutiqueAdvantage: "Sadece 6 kişilik grup için özel Mercedes Vito kiralanır. Boş koltuk maliyeti sıfırdır; doğrudan hedefe ulaşılır.",
      financialAndSpiritualValue: "Yüksek akaryakıt ve otobüs masrafı yerine, tasarruf edilen bütçe kaliteli ikram ve konfora aktarılır.",
    },
    {
      category: "Rehberlik ve Tercümanlık",
      massTourPractice: "1 rehber 50 kişiye megafonla hitap eder; sorular yanıtsız kalır, dar sokaklara grup giremez.",
      vipBoutiqueAdvantage: "Arapça kaynaklara hakim özel rehber 6 misafirle birebir ilgilenir, kitabe ve orijinal metin tahlili yapar.",
      financialAndSpiritualValue: "Dışarıdan tercüman tutma veya yüzeysel gezme israfı kalkar; manevi verim %300 artar.",
    },
    {
      category: "Aracı ve Komisyon Zinciri",
      massTourPractice: "Türkiye'deki toptancı, ara acenta, yerel Suudi alt-yüklenici gibi 3-4 kademeli komisyon zinciri bütçeyi şişirir.",
      vipBoutiqueAdvantage: "Doğrudan yerel lojistik ve butik planlama ile gereksiz acenta yönetim masrafları devreden çıkarılır.",
      financialAndSpiritualValue: "Kişi başı 60.000 TL gibi rakipsiz ve şeffaf bir VIP maliyetle 1. sınıf hizmet alınır.",
    },
    {
      category: "Zaman ve Enerji İsrafı",
      massTourPractice: "50 kişinin otel lobisinde toplanması, yemek sıraları ve otobüse binişi günde 3-4 saat kaybettirir.",
      vipBoutiqueAdvantage: "Aile ortamı hızında hareket; Harem ibadetine ayrılan süre maksimize edilir, yorgunluk minimize edilir.",
      financialAndSpiritualValue: "10 günlük umre seyahatinin her bir saati en yüksek manevi katsayıyla değerlendirilir.",
    },
  ],

  tenDayOverview: [
    {
      day: 1,
      city: "Mekke-i Mükerreme" as const,
      title: "Kavuşma ve İlk Umre Heyecanı",
      spiritualFocus: "Havalimanı VIP karşılama, otele yerleşme ve rehberimizin teennisiyle ilk Umre tavafı ve sa'yinin edası.",
      logisticsDetail: "Cidde Havalimanı - Mekke oteli arası kesintisiz VIP Vito transferi; bagajlar doğrudan odaya ulaştırılır.",
      includedMeal: "Hafif karşılama ikramı & Otel akşam yemeği",
    },
    {
      day: 2,
      city: "Mekke-i Mükerreme" as const,
      title: "Nübüvvetin İlk Çilesi ve Sadakat Makamları",
      spiritualFocus: "Bi'r-i Tuvâ (sünnet kuyusu), Mescidü'r-Râye, Şi'bu Ebî Tâlib boykot vadisi ve Cennetü'l-Muallâ ziyareti.",
      logisticsDetail: "Mercedes Vito ile dar sokaklara sıfır yürüyüşle erişim; öğle sıcağında klimalı otelde kaylûle ve istirahat.",
      includedMeal: "Açık büfe sabah kahvaltısı & İkindi ikramları",
    },
    {
      day: 3,
      city: "Mekke-i Mükerreme" as const,
      title: "Vahyin Menbaı ve Hicret Sadakati",
      spiritualFocus: "Cebel-i Sevr eteğinde hicret tefekkürü, Arafat Nemire Mescidi, Mina Hayf Mescidi ve Hira Kültür Vadisi.",
      logisticsDetail: "Dağ tırmanışı yapılmaz; serin sabah saatlerinde gölgelikli seyir duraklarında Arap kahvesi ve hurma ikramı.",
      includedMeal: "Sabah kahvaltısı & Akşam yemeği",
    },
    {
      day: 4,
      city: "Mekke-i Mükerreme" as const,
      title: "Rıdvan Biatı ve İkinci Umre İhramı",
      spiritualFocus: "Hudeybiye Barışı kuyusu ve Rıdvan Biatı mahalli; arzu eden misafirlerimiz için 2. Umre ihram ve niyeti.",
      logisticsDetail: "Mekke dışı transit yoldan konforlu intikal; ihram giyimi için araç içi geniş ve özel alan.",
      includedMeal: "Sabah kahvaltısı & Akşam yemeği",
    },
    {
      day: 5,
      city: "Mekke-i Mükerreme" as const,
      title: "Tefekkür, Kabe Tavafları & Taif Ziyareti Opsiyonu",
      spiritualFocus: "Harem-i Şerif'te nafile tavaf, Kur'an tilaveti veya günübirlik Taif manevi coğrafyası (Addâs bahçesi ve İbn Abbas).",
      logisticsDetail: "Serin dağ iklimine VIP araçla çıkış; misafirlerimizin temposuna göre tamamen esnek saatlendirme.",
      includedMeal: "Sabah kahvaltısı & Taif yerel lezzet tadımı",
    },
    {
      day: 6,
      city: "İntikal" as const,
      title: "Veda Tavafı ve Medine-i Münevvere'ye İntikal",
      spiritualFocus: "Beytullah'a veda tavafı ve dualar; ardından Peygamber Şehri Medine'ye selametle hicret yolculuğu.",
      logisticsDetail: "Haramain Hızlı Tren (Business Class) veya VIP Mercedes Vito ile konforlu şehirlerarası yolculuk.",
      includedMeal: "Sabah kahvaltısı & Yol ikramları",
    },
    {
      day: 7,
      city: "Medine-i Münevvere" as const,
      title: "Fahr-i Kâinat'a Selam & Ravza-i Mutahhara",
      spiritualFocus: "Mescid-i Nebevî'de Efendimiz (s.a.v.), Hz. Ebû Bekir ve Hz. Ömer'i selamlama, Ravza randevusu ve Cennetü'l-Bakî'.",
      logisticsDetail: "Mescid-i Nebevî'ye en yakın otel çıkışından yürüme mesafesinde huşulu eşlik; fısıltı rehberlik.",
      includedMeal: "Sabah kahvaltısı & Akşam yemeği",
    },
    {
      day: 8,
      city: "Medine-i Münevvere" as const,
      title: "Uhud Şühedası ve Kıbleteyn Hatırası",
      spiritualFocus: "Uhud Harp Sahası, Seyyidü'ş-Şühedâ Hz. Hamza (r.a.) kabri, Okçular Tepesi ve Mescid-i Kıbleteyn.",
      logisticsDetail: "Sabah serinliğinde Uhud'a varış; kalabalık otobüsler gelmeden şehitlik başında sükunetle Yâsîn tilaveti.",
      includedMeal: "Sabah kahvaltısı & Akşam yemeği",
    },
    {
      day: 9,
      city: "Medine-i Münevvere" as const,
      title: "İlk Mescid Kuba, Hendek ve Tarihi Kuyular",
      spiritualFocus: "Kuba Mescidi'nde umre sevabına nail namaz, Bi'r-i Rûme (Hz. Osman kuyusu), Bi'r-i Hâ ve Yedi Mescidler.",
      logisticsDetail: "Otobüslerin park edemediği tarihi Medine hurma bahçelerine ve kuyu başlarına VIP Vito ile direkt geçiş.",
      includedMeal: "Sabah kahvaltısı & Medine hurma bahçesinde ikram",
    },
    {
      day: 10,
      city: "Medine-i Münevvere" as const,
      title: "Veda Selamı ve Yurda Dönüş Uğurlaması",
      spiritualFocus: "Ravza-i Mutahhara'da son veda selamı, gözyaşlarıyla dua ve kabul niyazı.",
      logisticsDetail: "Medine Prens Muhammed b. Abdülaziz Havalimanı'na VIP Vito ile uğurlama ve check-in refakati.",
      includedMeal: "Sabah kahvaltısı & Veda hediyeleri",
    },
  ],

  promotionalText: {
    title: "10 Günlük Butik ve Huzurlu Umre Yolculuğu: 6 Kişilik Grubunuza Özel (60.000 TL)",
    executiveSummary:
      "Büyük kitle turlarının yorucu telaşından, 50 kişilik otobüslerin karmaşasından ve aracı acenta komisyonlarından tamamen arındırılmış; 10 gün boyunca yalnızca ailenize ve sevdiklerinize tahsis edilmiş, samimi ve manevi derinliği yüksek bir umre tecrübesi.",
    keyPoints: [
      "10 Günlük Huzurlu Ritim: Mekke'de 6 gün Beytullah aşkı, Medine'de 4 gün Ravza sükuneti ile aceleye getirilmemiş, tefekkür dolu ibadet vakti.",
      "Kişi Başı Net 60.000 TL Fiyat: Acenta hantallığından ve aracı karlarından arındırılmış, doğrudan yerinde kaliteli butik hizmetle sunulan şeffaf maliyet.",
      "Kapıya Kadar Özel Araç: Dar sokaklara giremeyen 50 kişilik otobüsler yerine, her ziyaret yerinin kapısına kadar yanaşan konforlu özel minibüs.",
      "Klasik Arapça ve Siyer Derinliği: el-Ezrakî ve İbn Hişâm kaynaklarıyla kitabe okumaları, fısıltı rehber kulaklık sistemi ve aile sıcaklığında birebir ilgi.",
    ],
    callToAction:
      "Her grubumuz maksimum 6 kıymetli misafirimizle sınırlıdır. Tarih planlaması ve aile meclisinize özel detaylar için danışmanımızla iletişime geçebilirsiniz.",
  },
};

export const SAMPLE_PROMPTS = [
  {
    title: "10 Günlük 60.000 TL Butik Paket Avantajı",
    prompt: "Kişi başı 60.000 TL'lik paket fiyatı ve 10 günlük süre baz alındığında; 6 kişilik aile grubumuzun kalabalık 50 kişilik standart turlara kıyasla elde edeceği huzur, birebir rehberlik ve maliyet avantajlarını detaylandırır mısınız?",
    badge: "10 Gün / 60.000 TL Butik Model",
  },
  {
    title: "10 Günlük Mekke-Medine Günlük Dağılımı",
    prompt: "10 günlük toplam süremizi Mekke (6 gün) ve Medine (4 gün) olarak planlamak istiyoruz. 6 kişilik grubumuza özel tahsisli araç eşliğindeki 10 günlük manevi program ve huşulu ibadet saatlendirmesini listeler misiniz?",
    badge: "10 Günlük Huzurlu Program",
  },
  {
    title: "Büyüklerimiz İçin Kolaylaştırılmış Plan",
    prompt: "6 kişilik grubumuzda yaşlı ve diz rahatsızlığı bulunan bir büyüğümüz yer alıyor. 60.000 TL'lik butik paket kapsamında merdiven ve yokuş tırmanışını sıfırlayan, özel aracımızın kapıya yanaştığı kolaylaştırılmış bir akış düzenler misiniz?",
    badge: "Büyüklerimize Özel İhtimam",
  },
  {
    title: "Taif Günübirlik Manevi Ziyareti",
    prompt: "10 günlük programımızın Mekke etabında günübirlik Taif ziyareti eklemek istiyoruz. Addâs Bahçesi (Hadîkatü Addâs), Mescid-i Kû'a ve İbn Abbas Mescidi'ni içeren 6 kişilik butik plan öneriniz ve iklim lojistiği nedir?",
    badge: "Taif Manevi Hatıratı",
  },
];

