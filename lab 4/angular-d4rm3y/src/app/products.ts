export interface Product {
  id: number,
  name: string,
  price: number,
  description: string,
  image: string,
  url: string,
  rating: number,
  images: string [],
}


export const products = [
  {
    id: 1,
    name: 'Гидрофильный бальзам All Clean Balm 120ml Heimish',
    price: 5758,
    description: 'All Clean Balm - это просто находка для любителей декоративной косметики, так как смыть толстые слои косметики всегда не легко. Бальзам мягко и быстро растворяет даже самые сильные водостойкие средства. Имеет легкую, нежную щербетную текстуру. Не нужно смешивать с водой при нанесении! Просто нанесите поверх макияжа, нежными массажными движениями смойте макияж и умойтесь теплой водой. Средство не сушит и не стягивает кожу, а наоборот, увлажняет и заботится о ней. Масло Ши, входящее в состав, глубоко увлажняет и повышает эластичность кожи. Масло Цитрусовых успокаивает и снимает стресс. Масло кокоса смягчает и улучшает состояние кожи, а комплекс из белых цветов улучшает кожный баланс и тон. Способ применения: Нанесите небольшое количество бальзама поверх макияжа сухими руками, массирующими движениями распределить бальзам по лицу, далее намочите руки и пройдитесь еще раз массажными движениями, образуется легкая эмульсия, смыть водой.',
    url: 'https://kaspi.kz/shop/p/heimish-all-clean-balm-bal-zam-120-ml-100341040/?c=750000000#!/item',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/he3/h7a/32773972426782/heimish-all-clean-balm-mnogofunkcionalnyj-dla-lica-120-ml-100341040-1-Container.jpg',
    rating: 5,
    images: ['https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h29/h9f/49837555187742/heimish-all-clean-balm-balzam-120-ml-100341040-2.jpg', 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hb2/h4d/49837555646494/heimish-all-clean-balm-balzam-120-ml-100341040-3.jpg', 'https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/hei/hei76067/l/21.jpg', 'https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/hei/hei76067/l/22.jpg', 'https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/hei/hei76067/l/15.jpg']


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
  }

];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/