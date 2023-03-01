export interface Product {
  id: number,
  name: string,
  price: number,
  description: string,
  image: string,
  url: string,
  rating: number,
  images: string [],
  type: string,
  likes: number
}


export const products = [
  {
    id: 1,
    name: 'Гидрофильный бальзам',
    price: 5758,
    description: 'All Clean Balm - это просто находка для любителей декоративной косметики, так как смыть толстые слои косметики всегда не легко. Бальзам мягко и быстро растворяет даже самые сильные водостойкие средства. Имеет легкую, нежную щербетную текстуру. Не нужно смешивать с водой при нанесении! Просто нанесите поверх макияжа, нежными массажными движениями смойте макияж и умойтесь теплой водой. Средство не сушит и не стягивает кожу, а наоборот, увлажняет и заботится о ней. Масло Ши, входящее в состав, глубоко увлажняет и повышает эластичность кожи. Масло Цитрусовых успокаивает и снимает стресс. Масло кокоса смягчает и улучшает состояние кожи, а комплекс из белых цветов улучшает кожный баланс и тон. Способ применения: Нанесите небольшое количество бальзама поверх макияжа сухими руками, массирующими движениями распределить бальзам по лицу, далее намочите руки и пройдитесь еще раз массажными движениями, образуется легкая эмульсия, смыть водой.',
    url: 'https://kaspi.kz/shop/p/heimish-all-clean-balm-bal-zam-120-ml-100341040/?c=750000000#!/item',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/he3/h7a/32773972426782/heimish-all-clean-balm-mnogofunkcionalnyj-dla-lica-120-ml-100341040-1-Container.jpg',
    rating: 5,
    images: ['https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h29/h9f/49837555187742/heimish-all-clean-balm-balzam-120-ml-100341040-2.jpg', 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hb2/h4d/49837555646494/heimish-all-clean-balm-balzam-120-ml-100341040-3.jpg', 'https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/hei/hei76067/l/21.jpg', 'https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/hei/hei76067/l/22.jpg', 'https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/hei/hei76067/l/15.jpg']
    ,type: "washing_cleaning",
    likes: 0


  },
  {
    id: 2,
    name: 'Dr.Ceuracle Pro Balance Creamy Cleansing Foam пенка для лица 150 мл',
    price: 4336,
    description: 'Нежная очищающая пенка: превосходное очищение с интенсивным увлажнением. Снимает даже водойстойкий макияж и загрязнения кожи. За счёт гиалуроновой кислоты в составе увлажняет кожу и не оставляет ощущения стянутости. Sopholiance контролирует избыточную выработку себума. Комплекс из 5 пробиотиков балансирует состояние кожи и помогает восстановить микробиом кожи.',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hf3/h27/33085968613406/dr-ceuracle-pro-balance-creamy-cleansing-foam-150-ml-100904391-1-Container.jpg',
    url: 'https://kaspi.kz/shop/p/dr-ceuracle-pro-balance-creamy-cleansing-foam-penka-dlja-litsa-150-ml-100904391/?c=750000000#!/item',
    rating: 5,
    images: ['https://cdn.shopify.com/s/files/1/0013/5059/8744/products/20191020_111408000_iOS_800x.jpg?v=1646402613', 'https://static.insales-cdn.com/images/products/1/5621/423179765/penka-pro.jpg', 'https://koreanbeauty.kz/cache/sj_revo/4544334a4c9fa29ea64c3f396ff4dca9.jpeg', 'https://images.satu.kz/189126721_w640_h640_penka-dlya-umyvaniya.jpg', 'https://korealab.by/image/catalog/dr_ceuracle/cleansing/penka_s_probiotikami_dr.ceuracle_pro_balance_creamy_cleansing_foam1.jpg']
    ,type: "washing_cleaning",
    likes: 0
  },
  {
    id: 3,
    name: 'COSRX Salicylic Acid Daily Gentle Cleanser пенка 150 мл',
    price: 3374,
    description: 'Комбинация тщательно подобранных компонентов и салициловой кислоты в небольшой концентрации позволяет использовать средство для бережного ежедневного ухода за кожей. Пенка мягко удаляет с кожи пыль, кожный жир, способствует отшелушиванию омертвевших клеток и очищению пор от сальных пробок.',
    url: 'https://kaspi.kz/shop/p/cosrx-salicylic-acid-daily-gentle-cleanser-penka-150-ml-100291143/?c=750000000#!/item',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h88/h4d/32736053690398/cosrx-penka-salicylic-acid-daily-gentle-cleanser-150-ml-100291143-1-Container.jpg',
    rating: 5,
    images: ['https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h51/h28/32736057229342/cosrx-penka-salicylic-acid-daily-gentle-cleanser-150-ml-100291143-2-Container.jpg', 'https://bbcream.ru/images/detailed/101/Cosrx_Salicylic_Acid_Exfoliating_Cleancer_1.webp']
    ,type: "washing_cleaning"
    ,likes: 0
  },

  {
    id: 4,
    name: 'Dr. Jart Ctrl A Teatreement Cleansing Foam гель-пенка 120 мл',
    price: 5828,
    description: 'Лечебная гель-пенка для умывания с чайным деревом Ctrl A Teatreement Cleansing Foam мягко и деликатно очищает кожу, удаляет все загрязнения и излишки кожного сала.  Чайное дерево (41%) нормализует работу сальных желёз, снижает жирность кожи, обладает антибактериальными действием и помогает в лечении акне. Гель пенка подходит для проблемной и чувствительной кожи, очень мягко воздействует на поверхность эпидермиса, не вызывая зуда и раздражения, эффективно очищает, снимает воспаления и предотвращает повторное появление акне. Лечит прыщи и воспаления, обладает бактерицидным свойством, устраняет покраснения и ускоряет заживление воспалений. Регулирует работу сальных желёз, нормализует жирность кожи и матирует. Натуральные компоненты, которые содержатся в кокосовом масле, смягчают и увлажняют, успокаивают раздражённую кожу и снимают воспаления. Кислотно-щелочной уровень пенки рН-5.5 - соответствует оптимальному показателю рН нашей кожи. Таким образом, продукт нейтрализует агрессивное воздействие проточной воду, обеззараживает и сохраняет влагу в клетках эпидермиса.  Рекомендуется для проблемной и склонной к жирности кожи. Способ применения: Выдавите необходимое количество средства и смешайте с водой для образования пены, массажными движениями распределите по кожи и смойте.',
    url: 'https://kaspi.kz/shop/p/dr-jart-ctrl-a-teatreement-cleansing-foam-gel--penka-120-ml-100670034/?c=750000000#!/item',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hbf/h70/32920036638750/dr-jart-teatreement-cleansing-foam-mousse-nettoyante-100670034-1-Container.jpg', 
    rating: 5,
    images: ['https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/haf/h3f/49838468988958/dr-jart-teatreement-gel-penka-120-ml-100670034-2.jpg', 'https://hollyshop.ru/upload/resize_cache/iblock/0ac/500_0_040cd750bba9870f18aada2478b24840a/Dr.-Jart_-Ctrl-A-Teatreement-Cleansing-Foam.jpg', 'https://hollyshop.ru/upload/resize_cache/iblock/d17/500_0_040cd750bba9870f18aada2478b24840a/10964.970.jpg', 'https://glamskin.kz/wp-content/uploads/2020/01/Snimok-ekrana-2021-01-13-v-18.49.59.png', 'https://glamskin.kz/wp-content/uploads/2020/01/sait-10.jpg' ]
    ,type: "washing_cleaning"
    ,likes: 0
  },

  {
    id: 5,
    name: 'By Wishtrend Green Tea & Enzyme Powder Wash энзимная пудра 110 мл',
    price: 8199,
    description: 'Энзимная пудра с зелёным чаем By Wishtrend Green Tea Enzyme Powder Wash мягко отшелушивает ороговевший слой кожи, удаляет омертвевшие клетки и тонизирует.  Обладает успокаивающим действием, помогает в борьбе с раздражениями и акне. Энзимы проникают глубоко в кожу, эффективно очищают и выводят все загрязнения из пор. Продукт обладает высокой антиоксидантной активностью, тонизирует и освежает. Тщательно, но деликатно очищает кожу от всех видов загрязнений и удаляет излишки кожного сала. Не вызывает сухости, раздражений и чувства стянутости. Помогает сохранить кожу увлажнённой даже после умывания. Смягчает огрубевшую кожи и выравнивает кожный рельеф. Дарит приятный успокаивающий аромат зелёного чая.',
    url: 'https://kaspi.kz/shop/p/by-wishtrend-green-tea-enzyme-powder-wash-enzimnaja-pudra-110-ml-104744971/?c=750000000#!/item',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h8c/hd7/50536185888798/by-wishtrend-green-tea-enzyme-powder-wash-enzimnaa-pudra-110-ml-104744971-1.jpg',
    rating: 5,
    images: ['https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h57/h73/50536186347550/by-wishtrend-green-tea-enzyme-powder-wash-enzimnaa-pudra-110-ml-104744971-2.jpg', 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h20/h58/50536186806302/by-wishtrend-green-tea-enzyme-powder-wash-enzimnaa-pudra-110-ml-104744971-3.jpg', 'https://ir.ozone.ru/s3/multimedia-0/wc1000/6555924492.jpg', 'https://ir.ozone.ru/s3/multimedia-3/wc1000/6555924495.jpg', 'https://ir.ozone.ru/s3/multimedia-5/wc1000/6555924497.jpg']
    ,type: "washing_cleaning"
    ,likes: 0
  },

  {
    id: 6,
    name: 'Очищающий гель для нормальной и жирной кожи cerave 236мл',
    price: 5487,
    description: 'Очищающий гель для нормальной и жирной кожи лица и тела (236мл). Глубоко очищает и освежает кожу, удаляя излишки кожного сала, загрязнения и макияж. Не повреждает защитный кожный барьер, успокаивает раздраженную кожу. CeraVe®, Очищающий гель для кожи склонной к жирности интенсивно очищает, удаляя излишки кожного сала, загрязнения и макияж. Не повреждает защитный барьер кожи. Ниацинамид успокаивает раздраженную кожу. Особенности продукта: • Для нормальной и жирной кожи, для кожи склонной к жирности, • Содержит ниацинамид, • Без отдушки, • Некомедогенно - не закупоривает поры, • Не нарушает защитный барьер кожи • Для лица и тела.',
    url: 'https://kaspi.kz/shop/p/cerave-ochischajuschii-gel-236-ml-101592349/?c=750000000#!/item',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h41/h3a/34161202429982/cerave-ocisausij-gel-dla-zirnoj-kozi-236-ml-101592349-1-Container.jpg',
    rating: 5,
    images: ['https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h28/h2f/50275231105054/cerave-ocisausij-gel-236-ml-101592349-2.jpg', 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h5f/h04/50275231563806/cerave-ocisausij-gel-236-ml-101592349-3.jpg', 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hb8/hfa/50275232022558/cerave-ocisausij-gel-236-ml-101592349-4.jpg', 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h1a/h17/50275232481310/cerave-ocisausij-gel-236-ml-101592349-5.jpg', 'https://basket-01.wb.ru/vol131/part13131/13131310/images/big/1.jpg']
    ,type: "washing_cleaning"
    ,likes: 0
  },

  {
    id: 7,
    name: 'Heimish All Clean White Clay Foam пенка 150 мл',
    price: 2999,
    description: 'Пенка для глубокого очищения пор Heimish All Clean White Clay Foam устраняет все виды загрязнений и остатки макияжа, регулирует выработку кожного себума и устраняет его излишки. Придает коже опрятный вид, матирует и способствует сужению пор. Пенка содержит белую глину, которая ухаживает за кожей, успокаивает воспаления и предотвращает их появление, улучшает рельеф кожи и выравнивает тон. Средство мягко отшелушивает омертвевшие клетки и способствует регенерации и повышению эластичности кожи. Благодаря 3-м видам гиалуроновой кислоты и кокосовому маслу пенка не пересушивает кожу, а напротив - питает, увлажняет и оставляет ощущение комфорта. Состав: мускатный орех, вода, глицерин, каолин, пропиленгликоль, стеариновая кислота, гиалуроновая кислота, ароматизатор, бентонит, феноксиэтанол, динатрия эдта, кокамидопропилбетаин, можжевельник, лауриновая кислота, миристиновая кислота, пэг-32, пэг-75, гидролизованная гиалуроновая кислота, этилгексилглицерин, пэг-1500, гидроксид кальция, масло лаванды узколистной, бензоат натрия, гидролизованный шелк, Гиалуронат натрия, Масло эвкалипта, масло кокосового ореха, Масло кожуры грейпфрута, экстракт цветков Nelumbo Nucifera, кокоат калия, поликватерний-7, масло листьев чайного дерева, экстракт нарцисса, масло цедры апельсина, кокоилглицинат калия, масло листьев менты арвенсис, экстракт фрезии рефрактной, масло плодов бергамота, Масло Boswellia Carterii, экстракт ириса разноцветного, масло цветов бархатцев, масло коры амириса бальзамического, масло цветов пеларгонии могучей, масло плодов литсеа кубеба, экстракт листьев цветков жасмина, экстракт цветов leontopodium alpinum, экстракт луковиц лилии кандида.',
    url: 'https://kaspi.kz/shop/p/heimish-all-clean-white-clay-foam-penka-150-ml-100397052/?c=750000000#!/item',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h46/h13/49919555338270/heimish-all-clean-white-clay-foam-150-ml-100397052-1-Container.jpg',
    rating: 5,
    images: ['https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h93/hf4/49919555797022/heimish-all-clean-white-clay-foam-penka-150-ml-100397052-2.jpg', 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h49/hb8/49919556255774/heimish-all-clean-white-clay-foam-penka-150-ml-100397052-3.jpg', 'https://frangipani-dv.ru/wp-content/uploads/2021/08/i.jpg', 'https://images.satu.kz/196359314_w640_h640_heimish-all-clean.jpg', 'https://shop-cdn1.vigbo.tech/shops/98555/products/17423231/images/2-2d850ac874bedaa45fbe0e7afa54996f.jpeg']
    ,type: "washing_cleaning"
    ,likes: 0
  },


  {
    id: 8,
    name: 'Compliment Sensitive гидрофильное масло 150 мл',
    price: 1962,
    description: 'Нежное гидрофильное гель-масло для умывания для сухой и чувствительной кожи поддерживает рН-баланс, не вызывает раздражения, способствует очищению и сужению пор. Благодаря наличию в составе миндального масла предотвращает сухость и стянутость кожи после умывания, поскольку содержит достаточное количество насыщенных жиров для предотвращения потери влаги. Гидрофильное гель-масло делает кожу чистой, мягкой, гладкой и свежей. Оно не оставляет жирного блеска или липкую пленку, не забивает поры.',
    url: 'https://kaspi.kz/shop/p/compliment-sensitive-gidrofil-noe-maslo-150-ml-102782324/?c=750000000#!/item',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h00/h17/46980528504862/gidrofilnoe-gel-maslo-dla-umyvania-suhoj-i-cuvstvitelnoj-kozi-150-ml-102782324-1.jpg',
    rating: 5,
    images: ['https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h70/hd2/46980529029150/gidrofilnoe-gel-maslo-dla-umyvania-suhoj-i-cuvstvitelnoj-kozi-150-ml-102782324-2.jpg', 'https://ir.ozone.ru/s3/multimedia-n/wc1000/6559459967.jpg', 'https://ir.ozone.ru/s3/multimedia-s/wc1000/6032082652.jpg']
    ,type: "washing_cleaning"
    ,likes: 0
  },

  {
    id: 9,
    name: 'Heimish pH 5.5. All Clean Green пенка 30 мл',
    price: 1099,
    description: 'Пенка прекрасно очистит поры от пыли, грязи, остатков декоративной косметики и кожного себума. Green Foam имеет приятную гелевую текстуру, экономичен, достаточно небольшого количества для формирования обильной пенки. Средство слабокислотное, что позволяет восстановить естественный Рн баланс.',
    url: 'https://kaspi.kz/shop/p/heimish-ph-5-5-all-clean-green-penka-30-ml-100371466/?c=750000000#!/item',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h09/h39/32540314075166/heimish-ph-5-5-all-clean-green-foam-30-ml-100371466-1-Container.jpg',
    rating: 4.5,
    images: ['https://hollyshop.ru/upload/resize_cache/iblock/979/iz2e4vmqiju23es7td5ummrd62dr79b8/500_0_040cd750bba9870f18aada2478b24840a/Heimish-pH-5.5-All-Clean-Green-Foam.jpg', 'https://hollyshop.ru/upload/resize_cache/iblock/7c8/54ckzddruqxsf2j3gzavd2cmr1c7dy0l/500_0_040cd750bba9870f18aada2478b24840a/Heimish-pH-5.5-All-Clean-Green-Foam_.jpg', 'https://hollyshop.ru/upload/resize_cache/iblock/de5/o4nxg71zi0tygtcib7cw37k1fcrp8h1v/500_0_040cd750bba9870f18aada2478b24840a/Heimish-pH-5.5-All-Clean-Green-Foam_.jpg', 'https://hollyshop.ru/upload/resize_cache/iblock/39c/pyox4gswv0uq3kkpjdj1uyq36zzaayu4/500_0_040cd750bba9870f18aada2478b24840a/Heimish-pH-5.5-All-Clean-Green-Foam_.jpg' , 'https://hollyshop.ru/upload/resize_cache/iblock/df6/ras1wm1b5a0675et1y14jchu839chmfz/500_0_040cd750bba9870f18aada2478b24840a/6019187090.jpg']
    ,type: "washing_cleaning"
    ,likes: 0
  },

  {
    id: 10,
    name: 'Vichy Normaderm Phytosolution Intensive Purifying Gel гель 200 мл',
    price: 5899,
    description: 'Интенсивно очищающий гель для проблемной кожи, обогащенный минералами и пробиотикам и, на ежедневной основе уменьшающий жирность кожи без пересушивания и защищающий её от появления несовершенств. Эффективная комбинация активных ингредиентов:[САЛИЦИЛОВАЯ КИСЛОТА] ОБЛАДАЕТ АНТИБАКТЕРИАЛЬНЫМ ДЕЙСТВИЕМ [ПРОБИОТИК BIFIDUS] ВОССТАНАВЛИВАЕТ ЗАЩИТНЫЙ БАРЬЕР КОЖИ [ОЛИГОЭЛЕМЕНТЫ] БОРЮТСЯ С ВОСПАЛЕНИЯМИ И РЕГУЛИРУЮТ ВЫРАБОТКУ СЕБУМА [МИНЕРАЛИЗИРУЮЩАЯ ТЕРМАЛЬНАЯ ВОДА] УКРЕПЛЯЕТ И ЗАЩИЩАЕТ КОЖУ Кожа чистая и свежая, без чувства стянутости. Для проблемной кожи, склонной к жирности. Подходит для чувствительной кожи. Гипоаллергенно. Некомедогенно. Без мыла и сульфатов. НЕ ПЕРЕСУШИВАЕТ КОЖУ ПРИ ЧАСТЫХ УМЫВАНИЯХ ПРЕДОТВРАЩАЕТ ПОЯВЛЕНИЕ НОВЫХ НЕСОВЕРШЕНСТВ НЕ ВЫЗЫВАЕТ ПОВЫШЕННОЕ ВЫДЕЛЕНИЕ СЕБУМА ФИЗИОЛОГИЧЕСКИЙ pH 5.5 ОЧИЩАЮЩАЯ ОСНОВА РАСТИТЕЛЬНОГО ПРОИСХОЖДЕНИЯ',
    url: 'https://kaspi.kz/shop/p/vichy-normaderm-phytosolution-intensive-purifying-gel-gel-200-ml-21900207/?c=750000000#!/item',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hc7/hba/44987418411038/vichy-normaderm-phytosolution-intensive-purifying-gel-200-ml-21900207-1-Container.jpg',
    rating: 5,
    images: ['https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hc7/hba/44987418411038/vichy-normaderm-phytosolution-intensive-purifying-gel-200-ml-21900207-1-Container.jpg', 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h53/h2d/44987418968094/vichy-normaderm-phytosolution-intensive-purifying-gel-200-ml-21900207-2-Container.jpg', 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h74/ha4/44987419525150/vichy-normaderm-phytosolution-intensive-purifying-gel-200-ml-21900207-3-Container.jpg', 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hc7/h71/44987420082206/vichy-normaderm-phytosolution-intensive-purifying-gel-200-ml-21900207-4-Container.jpg']
    ,type: "washing_cleaning"
    ,likes: 0
  },
  

  {
    id: 11,
    name: 'EKEL тканевая Aloe Ultra Hydrating 25 мл',
    price: 159,
    description: 'Алоэ - является прекрасным увлажнителем, улучшает кровообращение, обладает противовоспалительным свойством, снимает раздражение, стимулирует процесс регенерации клеток кожи. Кроме того, маска с алоэ оказывает очищающее и освежающее действие. Сок алоэ обладает многими полезными свойствами, в том числе и лечебными. Он великолепно очищает и разглаживает кожу, помогает избавиться от прыщей и угревой сыпи',
    url: 'https://kaspi.kz/shop/p/ekel-tkanevaja-aloe-ultra-hydrating-25-ml-100012922/?c=750000000#!/item',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h1e/h4c/32307118178334/ekel-aloe-ultra-hydrating-mask-100012922-1-Container.jpg',
    rating: 4.5,
    images: ['https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hc7/hba/44987418411038/vichy-normaderm-phytosolution-intensive-purifying-gel-200-ml-21900207-1-Container.jpg', 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h53/h2d/44987418968094/vichy-normaderm-phytosolution-intensive-purifying-gel-200-ml-21900207-2-Container.jpg', 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h74/ha4/44987419525150/vichy-normaderm-phytosolution-intensive-purifying-gel-200-ml-21900207-3-Container.jpg', 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hc7/h71/44987420082206/vichy-normaderm-phytosolution-intensive-purifying-gel-200-ml-21900207-4-Container.jpg']
    ,type: "face_masks"
    ,likes: 0
  },

  {
    id: 12,
    name: 'Маска для лица DR. KANG тканевая Vitamin C 21 мл',
    price: 200,
    description: 'Осветляющая тканевая маска с витамином C Dr. Kang Vitamin C Lightening &#38; Brightening Essence Sheet Mask великолепно восстанавливает гидро-липидный баланс эпидермиса, укрепляет защитные функции, устраняет сухость и шелушения, смягчает кожный покров и обладает омолаживающим действием. Продукт эффективно воздействует на верхний слой эпидермиса смягчая и разглаживая кожный покров, повышает эластичность кожи, укрепляет тургор, отлично устраняет сухость и чувство стянутости. Обладает ярко выраженным успокаивающим действием, снимает зуд и раздражения, ускоряет заживление воспалений, а также снимает покраснения. Ультратонкая основа маски обильно пропитана питательной концентрированной эссенцией, которая способна проникнуть глубоко в клетки эпидермиса и эффективно воздействует даже на клеточном уровне. ',
    url: 'https://kaspi.kz/shop/p/dr-kang-tkanevaja-vitamin-c-21-ml-101249347/?c=750000000#!/item',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hd3/h70/33715231457310/dr-kang-vitamin-c-101249347-1-Container.jpg',
    rating: 5,
    images: ['https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hc7/hba/44987418411038/vichy-normaderm-phytosolution-intensive-purifying-gel-200-ml-21900207-1-Container.jpg', 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h53/h2d/44987418968094/vichy-normaderm-phytosolution-intensive-purifying-gel-200-ml-21900207-2-Container.jpg', 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h74/ha4/44987419525150/vichy-normaderm-phytosolution-intensive-purifying-gel-200-ml-21900207-3-Container.jpg', 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hc7/h71/44987420082206/vichy-normaderm-phytosolution-intensive-purifying-gel-200-ml-21900207-4-Container.jpg']
    ,type: "face_masks"
    ,likes: 0
  }, 

  {
    id: 13,
    name: 'Farmstay тканевая Collagen 23 мл',
    price: 229,
    description: 'Восстанавливающая тканевая маска с коллагеном эффективно воздействует на сухую, увядающую и тусклую кожу, питает и увлажняет ее, обеспечивает лифтинг- эффект, выравнивает тон и помогает сохранить оптимальный уровень влаги. Основные компоненты: гидролизованный коллаген придает коже упругость и эластичность, повышает тургор, разглаживает мелкие морщины, обеспечивает мгновенный лифтинг-эффект, стимулирует синтез собственного коллагена и эластина, запускает процессы регенерации и восстановления на клеточном уровне. Также в составе: гиалуроновая кислота, бетаин, аргинин и аллантоин.',
    url: 'https://kaspi.kz/shop/p/farmstay-tkanevaja-collagen-23-ml-101076161/?c=750000000#!/item',
    image: 'https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h55/h2e/46736152428574/farmstay-tkanevaa-kollagen-23-ml-101076161-1-Container.jpg',
    rating: 5,
    images: ['https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hc7/hba/44987418411038/vichy-normaderm-phytosolution-intensive-purifying-gel-200-ml-21900207-1-Container.jpg', 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h53/h2d/44987418968094/vichy-normaderm-phytosolution-intensive-purifying-gel-200-ml-21900207-2-Container.jpg', 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h74/ha4/44987419525150/vichy-normaderm-phytosolution-intensive-purifying-gel-200-ml-21900207-3-Container.jpg', 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hc7/h71/44987420082206/vichy-normaderm-phytosolution-intensive-purifying-gel-200-ml-21900207-4-Container.jpg']
    ,type: "face_masks"
    ,likes: 0
  },

  {
    id: 14,
    name: 'EKEL Ультраувлажняющая плацента 25 мл',
    price: 109,
    description: 'Восстанавливающая тканевая маска с коллагеном эффективно воздействует на сухую, увядающую и тусклую кожу, питает и увлажняет ее, обеспечивает лифтинг- эффект, выравнивает тон и помогает сохранить оптимальный уровень влаги. Основные компоненты: гидролизованный коллаген придает коже упругость и эластичность, повышает тургор, разглаживает мелкие морщины, обеспечивает мгновенный лифтинг-эффект, стимулирует синтез собственного коллагена и эластина, запускает процессы регенерации и восстановления на клеточном уровне. Также в составе: гиалуроновая кислота, бетаин, аргинин и аллантоин.',
    url: 'https://kaspi.kz/shop/p/ekel-ul-trauvlazhnjajuschaja-platsenta-25-ml-100552600/?c=750000000#!/item',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h25/hcd/33085297524766/ekel-ultrauvlaznausaa-placenta-25-ml-100552600-1.jpg',
    rating: 5,
    images: ['https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hc7/hba/44987418411038/vichy-normaderm-phytosolution-intensive-purifying-gel-200-ml-21900207-1-Container.jpg', 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h53/h2d/44987418968094/vichy-normaderm-phytosolution-intensive-purifying-gel-200-ml-21900207-2-Container.jpg', 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h74/ha4/44987419525150/vichy-normaderm-phytosolution-intensive-purifying-gel-200-ml-21900207-3-Container.jpg', 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hc7/h71/44987420082206/vichy-normaderm-phytosolution-intensive-purifying-gel-200-ml-21900207-4-Container.jpg']
    ,type: "face_masks"
    ,likes: 0
  },

  {
    id: 15,
    name: 'Farmstay тканевая Real Peach 23 мл',
    price: 209,
    description: 'Восстанавливающая тканевая маска с коллагеном эффективно воздействует на сухую, увядающую и тусклую кожу, питает и увлажняет ее, обеспечивает лифтинг- эффект, выравнивает тон и помогает сохранить оптимальный уровень влаги. Основные компоненты: гидролизованный коллаген придает коже упругость и эластичность, повышает тургор, разглаживает мелкие морщины, обеспечивает мгновенный лифтинг-эффект, стимулирует синтез собственного коллагена и эластина, запускает процессы регенерации и восстановления на клеточном уровне. Также в составе: гиалуроновая кислота, бетаин, аргинин и аллантоин.',
    url: 'https://kaspi.kz/shop/p/farmstay-tkanevaja-real-peach-23-ml-100552667/?c=750000000#!/item',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h95/h50/46736394584094/farmstay-persik-23-ml-100552667-1-Container.jpg',
    rating: 5,
    images: ['https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hc7/hba/44987418411038/vichy-normaderm-phytosolution-intensive-purifying-gel-200-ml-21900207-1-Container.jpg', 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h53/h2d/44987418968094/vichy-normaderm-phytosolution-intensive-purifying-gel-200-ml-21900207-2-Container.jpg', 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h74/ha4/44987419525150/vichy-normaderm-phytosolution-intensive-purifying-gel-200-ml-21900207-3-Container.jpg', 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hc7/h71/44987420082206/vichy-normaderm-phytosolution-intensive-purifying-gel-200-ml-21900207-4-Container.jpg']
    ,type: "face_masks"
    ,likes: 0
  },


  {
    id: 16,
    name: 'MEDI-PEEL гидрогелевые Hyaluron Cica Peptide 9 для глаз',
    price: 4377,
    description: 'Успокаивающие гидрогелевые патчи с пептидами Medi-Peel Hyaluron Cica Peptide 9 Ampoule Eye Patch в кратчайшие сроки снимает зуд и воспаления, активно увлажняют, устраняют сухость и помогают в борьбе с шелушениями. Комплекс пептидов оказывает омолаживающее действие, способствует разглаживанию морщин и сохранению молодости кожи. Патчи являются многофункциональными, подходят для использования в области вокруг глаз, в зоне межбровия и носогубных складок.',
    url: 'https://kaspi.kz/shop/p/medi-peel-gidrogelevye-hyaluron-cica-peptide-9-dlja-glaz-60-sht-100378895/?c=750000000#!/item',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h21/h45/32582827048990/medi-peel-hyaluron-cica-peptide-9-ampoule-eye-patch-60-st-100378895-1-Container.jpg',
    rating: 5,
    images: ['https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hc7/hba/44987418411038/vichy-normaderm-phytosolution-intensive-purifying-gel-200-ml-21900207-1-Container.jpg', 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h53/h2d/44987418968094/vichy-normaderm-phytosolution-intensive-purifying-gel-200-ml-21900207-2-Container.jpg', 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h74/ha4/44987419525150/vichy-normaderm-phytosolution-intensive-purifying-gel-200-ml-21900207-3-Container.jpg', 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hc7/h71/44987420082206/vichy-normaderm-phytosolution-intensive-purifying-gel-200-ml-21900207-4-Container.jpg']
    ,type: "patches"
    ,likes: 0
  },


  {
    id: 17,
    name: 'Bioaqua гидрогелевые с экстрактом золота для глаз 60',
    price: 2600,
    description: 'Успокаивающие гидрогелевые патчи с пептидами Medi-Peel Hyaluron Cica Peptide 9 Ampoule Eye Patch в кратчайшие сроки снимает зуд и воспаления, активно увлажняют, устраняют сухость и помогают в борьбе с шелушениями. Комплекс пептидов оказывает омолаживающее действие, способствует разглаживанию морщин и сохранению молодости кожи. Патчи являются многофункциональными, подходят для использования в области вокруг глаз, в зоне межбровия и носогубных складок.',
    url: 'https://kaspi.kz/shop/p/bioaqua-gidrogelevye-s-ekstraktom-zolota-dlja-glaz-60-sht-102211025/?c=750000000#!/item',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h89/h13/51069195911198/bioaqua-patci-s-ekstraktom-zolota-60-ml-102211025-1-Container.jpg',
    rating: 5,
    images: ['https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hc7/hba/44987418411038/vichy-normaderm-phytosolution-intensive-purifying-gel-200-ml-21900207-1-Container.jpg', 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h53/h2d/44987418968094/vichy-normaderm-phytosolution-intensive-purifying-gel-200-ml-21900207-2-Container.jpg', 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h74/ha4/44987419525150/vichy-normaderm-phytosolution-intensive-purifying-gel-200-ml-21900207-3-Container.jpg', 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hc7/h71/44987420082206/vichy-normaderm-phytosolution-intensive-purifying-gel-200-ml-21900207-4-Container.jpg']
    ,type: "patches"
    ,likes: 0
  },

  {
    id: 18,
    name: 'Патчи Jomtam гидрогелевые для глаз Fullerene Light Bulb Skin Eye Mask 60 шт',
    price: 3000,
    description: 'Гидрогелевые патчи Jomtam Fullerene Light Bulb Skin Eye Mask с фуллереном - незаменимое средство для ухода за нежной кожей вокруг глаз. Их легко использовать, а результат применения заметен сразу же. Предназначены для борьбы с темными кругами, последствиями недосыпа и стрессов. За счет своей мягкости и эластичности они хорошо держатся на коже. Патчи насыщены питательными ингредиентами, быстро проникающими в кожу. Их не обязательно использовать исключительно на нижнем веке, они отлично подходят для увлажнения кожи на скулах, на лбу, на подбородке или на губах. Патчи не только увлажняют кожу и сокращают темные круги, но и устраняют отечность, запускают процессы регенерации в эпидермисе, продлевая молодость и препятствуя появлению мимических и возрастных морщин в деликатной зоне вокруг глаз.',
    url: 'https://kaspi.kz/shop/p/jomtam-gidrogelevye-dlja-glaz-fullerene-light-bulb-skin-eye-mask-60-sht-101344940/?c=750000000#!/item',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h86/hd2/34365711515678/jomtam-fullerene-light-bulb-skin-eye-mask-patci-dla-glaz-s-fullerenami-60-st-101344940-1-Container.jpg',
    rating: 5,
    images: ['https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hc7/hba/44987418411038/vichy-normaderm-phytosolution-intensive-purifying-gel-200-ml-21900207-1-Container.jpg', 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h53/h2d/44987418968094/vichy-normaderm-phytosolution-intensive-purifying-gel-200-ml-21900207-2-Container.jpg', 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h74/ha4/44987419525150/vichy-normaderm-phytosolution-intensive-purifying-gel-200-ml-21900207-3-Container.jpg', 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hc7/h71/44987420082206/vichy-normaderm-phytosolution-intensive-purifying-gel-200-ml-21900207-4-Container.jpg']
    ,type: "patches"
    ,likes: 0
  },

  {
    id: 19,
    name: 'Патчи Images гидрогелевые Golden Seaweet Moisturizing для глаз 60 шт',
    price: 2700,
    description: 'Гидрогелевые патчи отлично увлажняют нежную кожу век, снимают отеки и разглаживают мимические морщинки, делая взгляд свежим и открытым. Благодаря легкому охлаждающему эффекту отлично помогают взбодриться и начать свой день активно. Патчи легко использовать: для этого нужно аккуратно положить их на очищенную от макияжа кожу под нижним веком, расположив более широкую часть у внешнего уголка глаза. После этого патчи оставляют на 15-20 минут, затем снимают. Бояться, что патчи отклеятся или скатаются, не нужно — они будут надежно держаться на коже. Наиболее эффективным уход за кожей станет, если слегка помассировать кожу, пройдясь по ней легкими вбивающими движениями, чтобы остатки средства впитались.',
    url: 'https://kaspi.kz/shop/p/images-gidrogelevye-golden-seaweet-moisturizing-dlja-glaz-60-sht-105322733/?c=750000000#!/item',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hac/h74/63052026642462/golden-seaweet-moisturizing-105322733-1.jpg',
    rating: 5,
    images: ['https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hc7/hba/44987418411038/vichy-normaderm-phytosolution-intensive-purifying-gel-200-ml-21900207-1-Container.jpg', 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h53/h2d/44987418968094/vichy-normaderm-phytosolution-intensive-purifying-gel-200-ml-21900207-2-Container.jpg', 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h74/ha4/44987419525150/vichy-normaderm-phytosolution-intensive-purifying-gel-200-ml-21900207-3-Container.jpg', 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hc7/h71/44987420082206/vichy-normaderm-phytosolution-intensive-purifying-gel-200-ml-21900207-4-Container.jpg']
    ,type: "patches"
    ,likes: 0
  },

  {
    id: 20,
    name: 'Патчи Purederm тканевые Collagen Eye Zone Mask для глаз 30 шт',
    price: 599,
    description: 'Гидрогелевые патчи отлично увлажняют нежную кожу век, снимают отеки и разглаживают мимические морщинки, делая взгляд свежим и открытым. Благодаря легкому охлаждающему эффекту отлично помогают взбодриться и начать свой день активно. Патчи легко использовать: для этого нужно аккуратно положить их на очищенную от макияжа кожу под нижним веком, расположив более широкую часть у внешнего уголка глаза. После этого патчи оставляют на 15-20 минут, затем снимают. Бояться, что патчи отклеятся или скатаются, не нужно — они будут надежно держаться на коже. Наиболее эффективным уход за кожей станет, если слегка помассировать кожу, пройдясь по ней легкими вбивающими движениями, чтобы остатки средства впитались.',
    url: 'https://kaspi.kz/shop/p/purederm-tkanevye-collagen-eye-zone-mask-dlja-glaz-30-sht-19600521/?c=750000000#!/item',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h29/hcb/50516512309278/purederm-collagen-eye-zone-mask-19600521-1-Container.jpg',
    rating: 5,
    images: ['https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hc7/hba/44987418411038/vichy-normaderm-phytosolution-intensive-purifying-gel-200-ml-21900207-1-Container.jpg', 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h53/h2d/44987418968094/vichy-normaderm-phytosolution-intensive-purifying-gel-200-ml-21900207-2-Container.jpg', 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h74/ha4/44987419525150/vichy-normaderm-phytosolution-intensive-purifying-gel-200-ml-21900207-3-Container.jpg', 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hc7/h71/44987420082206/vichy-normaderm-phytosolution-intensive-purifying-gel-200-ml-21900207-4-Container.jpg']
    ,type: "patches"
    ,likes: 0
  },

  {
    id: 21,
    name: 'Himalaya Herbals бальзам Клубничный блеск 10 мл',
    price: 880,
    description: 'Экстракт клубники, овсяное молочко и восстанавливающий комплекс быстро успокаивает поврежденную кожу губ, глубоко питает и увлажняет, устраняет сухость и шелушение, дарит губам невероятную мягкость и бархатистость.',
    url: 'https://kaspi.kz/shop/p/himalaya-herbals-bal-zam-klubnichnyi-blesk-10-ml-101343027/?c=750000000#!/item',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hbe/hf1/34313252306974/himalaya-herbals-klubnichnyi-blesk-10-gr-101343027-1.jpg',
    rating: 4.5,
    images: ['https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hc7/hba/44987418411038/vichy-normaderm-phytosolution-intensive-purifying-gel-200-ml-21900207-1-Container.jpg', 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h53/h2d/44987418968094/vichy-normaderm-phytosolution-intensive-purifying-gel-200-ml-21900207-2-Container.jpg', 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h74/ha4/44987419525150/vichy-normaderm-phytosolution-intensive-purifying-gel-200-ml-21900207-3-Container.jpg', 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hc7/h71/44987420082206/vichy-normaderm-phytosolution-intensive-purifying-gel-200-ml-21900207-4-Container.jpg']
    ,type: "lips"
    ,likes: 0
  },


  {
    id: 22,
    name: 'NIVEA бальзам Аква-уход 4.8 г',
    price: 1279,
    description: 'Увлажняющая формула бальзама с Алоэ Вера и Hydra IQ помогает поддерживать естественный баланс увлажнения Ваших губ и придает им мягкость.',
    url: 'https://kaspi.kz/shop/p/nivea-bal-zam-akva-uhod-4-8-g-101072778/?c=750000000',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hb3/hb3/63049491742750/nivea-akva-zabota-4-8-g-101072778-1.jpg',
    rating: 5,
    images: ['https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hc7/hba/44987418411038/vichy-normaderm-phytosolution-intensive-purifying-gel-200-ml-21900207-1-Container.jpg', 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h53/h2d/44987418968094/vichy-normaderm-phytosolution-intensive-purifying-gel-200-ml-21900207-2-Container.jpg', 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h74/ha4/44987419525150/vichy-normaderm-phytosolution-intensive-purifying-gel-200-ml-21900207-3-Container.jpg', 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hc7/h71/44987420082206/vichy-normaderm-phytosolution-intensive-purifying-gel-200-ml-21900207-4-Container.jpg']
    ,type: "lips"
    ,likes: 0
  },

  {
    id: 23,
    name: 'Pure Paw Paw Pure Paw Paw Cherry бальзам',
    price: 1060,
    description: 'Увлажняющая формула бальзама с Алоэ Вера и Hydra IQ помогает поддерживать естественный баланс увлажнения Ваших губ и придает им мягкость.',
    url: 'https://kaspi.kz/shop/p/nivea-bal-zam-akva-uhod-4-8-g-101072778/?c=750000000',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/he1/h19/61575147487262/vosstanavlivausij-balzam-c-aromatom-visni-pure-paw-paw-cherry-15-ml-105977184-1.jpg',
    rating: 5,
    images: ['https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hc7/hba/44987418411038/vichy-normaderm-phytosolution-intensive-purifying-gel-200-ml-21900207-1-Container.jpg', 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h53/h2d/44987418968094/vichy-normaderm-phytosolution-intensive-purifying-gel-200-ml-21900207-2-Container.jpg', 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h74/ha4/44987419525150/vichy-normaderm-phytosolution-intensive-purifying-gel-200-ml-21900207-3-Container.jpg', 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hc7/h71/44987420082206/vichy-normaderm-phytosolution-intensive-purifying-gel-200-ml-21900207-4-Container.jpg']
    ,type: "lips"
    ,likes: 0
  },

  {
    id: 24,
    name: 'Fito Косметик бальзам Малиновый сорбет 4.5 г',
    price: 480,
    description: 'Натуральная формула бальзама, обогащенная органическим маслом косточек малины, био-экстрактом клюквы, и anti-age комплексом великолепно питает, укрепляет, разглаживает мелкие морщинки, восстанавливает эластичность и упругость кожи, дарит губам молодость и красоту.',
    url: 'https://kaspi.kz/shop/p/fito-kosmetik-bal-zam-malinovyi-sorbet-4-5-g-102666290/?c=750000000',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h72/h8b/46717266067486/fito-kosmetik-bal-zam-dlya-gub-malinovyi-sorbet-4-5-g-102666290-1.jpg',
    rating: 5,
    images: ['https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hc7/hba/44987418411038/vichy-normaderm-phytosolution-intensive-purifying-gel-200-ml-21900207-1-Container.jpg', 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h53/h2d/44987418968094/vichy-normaderm-phytosolution-intensive-purifying-gel-200-ml-21900207-2-Container.jpg', 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h74/ha4/44987419525150/vichy-normaderm-phytosolution-intensive-purifying-gel-200-ml-21900207-3-Container.jpg', 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hc7/h71/44987420082206/vichy-normaderm-phytosolution-intensive-purifying-gel-200-ml-21900207-4-Container.jpg']
    ,type: "lips"
    ,likes: 0
  },

  {
    id: 25,
    name: 'Carmex бальзам Cherry 10 г',
    price: 2200,
    description: 'Увлажняет и восстанавливает сухие, потрескавшиеся губы. Бальзам CARMEX защищает от воздействия ветра, холодного воздуха и солнца, увлажняет и питает тонкую кожу губ.',
    url: 'https://kaspi.kz/shop/p/carmex-bal-zam-cherry-10-g-100217406/?c=750000000#!/item',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/he7/hf8/67439241986078/carmex-bal-zam-cherry-spf15-10-ml-100217406-1.jpg',
    rating: 5,
    images: ['https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hc7/hba/44987418411038/vichy-normaderm-phytosolution-intensive-purifying-gel-200-ml-21900207-1-Container.jpg', 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h53/h2d/44987418968094/vichy-normaderm-phytosolution-intensive-purifying-gel-200-ml-21900207-2-Container.jpg', 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h74/ha4/44987419525150/vichy-normaderm-phytosolution-intensive-purifying-gel-200-ml-21900207-3-Container.jpg', 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hc7/h71/44987420082206/vichy-normaderm-phytosolution-intensive-purifying-gel-200-ml-21900207-4-Container.jpg']
    ,type: "lips"
    ,likes: 0
  },


  

  

];
