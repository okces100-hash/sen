import { CMSPost, CustomContent, SEOMetadata, Inquiry, ProductSpec, EquipmentSpec } from './types';

export const INITIAL_CUSTOM_CONTENT: CustomContent = {
  companyNameKR: '센서나인(주)',
  companyNameEN: 'SensorNine Co., Ltd.',
  logoUrl: 'https://okces100-hash.github.io/my-media/sensor_company_logo_i2.png', // sensor_image_video_logo - [위치: 헤더(Header) & 푸터(Footer) 영역의 회사 브랜드 로고 이미지 파일 경로]
  aboutImageUrl: 'https://okces100-hash.github.io/my-media/sensor_company_v4.mp4', // sensor_image_video_about - [위치: 웹사이트 메인 화면 내 '회사 소개(About Us)' 섹션의 대표 우측 레이아웃 사옥/장비 소개 배경 이미지]
  aboutFacilityBadgeKR: '신사옥 전경',
  aboutFacilityBadgeEN: 'CORPORATE FACILITY',
  aboutFacilityTitleKR: '센서나인(주) 본사 및 기술연구소',
  aboutFacilityTitleEN: 'Sensor Nine Co., Ltd. headquarters & R&D Center',
  aboutFacilityDescKR: '정밀 온도센서 설계부터 양산까지 완벽한 클린룸 시설과 첨단 계측 및 분석 장비를 갖춘 최적의 인텔리전트 엔지니어링 허브입니다.',
  aboutFacilityDescEN: 'A state-of-the-art intelligent engineering hub equipped with full dust-free cleanroom facilities and advanced diagnostic instrumentation, supporting seamless sensor research through high-capacity manufacturing.',
  aboutFacilityPoint1KR: '연구소 인가: 기업부설 기술연구소 기술인정법인',
  aboutFacilityPoint1EN: 'Certified Corporate R&D Laboratory',
  aboutFacilityPoint2KR: '생산 능력: NTC 써미스터센서 연간 약 500만 개 이상',
  aboutFacilityPoint2EN: 'Production Volume: Over 5M sensors annually',
  aboutFacilityPoint3KR: '품질 인증: ISO 9001 / ISO 14001 인증 사업장',
  aboutFacilityPoint3EN: 'Quality Auditing: ISO 9001 / ISO 14001 Registered',
  heroTitleKR: '세상의 모든 온도를 가장 정밀하게 읽다',
  heroTitleEN: 'Reading Every Temperature With Ultimate Precision',
  heroSubKR: '센서나인(주)은 독보적인 고신뢰성 NTC 써미스터 기술력을 바탕으로 초고정밀 온도센서 및 안전감지센서를 제조하여 글로벌 산업 표준을 선도합니다.',
  heroSubEN: 'SensorNine Co., Ltd. leads global industrial standards by manufacturing ultra-high precision temperature and safety detection sensors based on unique NTC thermistor technology.',
  aboutGreetingKR: '정밀한 감지, 완벽한 제어. 온도의 가치를 연결하는 센서나인',
  aboutGreetingEN: 'Precision Sensing, Perfect Control. Sensor9, Connecting the Value of Temperature.',
  aboutIntroKR: `센서나인(주)은 고정밀 NTC 온도센서와 콘트롤러, 그리고 고신뢰성 점화트랜스를 중심으로 스마트 가전, 친환경 모빌리티, 스마트 팩토리, 그리고 미래 첨단 AI 로봇을 위한 핵심 제어 솔루션을 연구·개발하고 공급하는 제조 혁신 기업입니다.

우리는 보일러 및 에어컨용 지능형 HVAC 센서부터 고난도 특수 환경을 위한 이중관 소켓 및 브라켓 체결용 센서까지, 폭넓은 산업 스펙트럼에 최적화된 맞춤형 센서 기술력을 보유하고 있습니다. 특히 고도화된 정밀성과 내구성이 요구되는 전기차(EV) 등 미래 모빌리티의 배터리 관리 시스템(BMS), AI 로봇의 구동부 및 열 제어 모듈에 최적화된 스마트 센싱 솔루션을 제공하며 차세대 기술 트렌드를 선도하고 있습니다.

이에 더해, 안정적인 고전압 출력을 보장하는 점화트랜스(Ignition Transformer) 제조 역량을 바탕으로 가전 및 산업용 연소 시스템은 물론, 스마트 팩토리의 자동화 장비 및 특수 목적용 로봇 제어 시스템까지 사업 영역을 성공적으로 확장해 나가고 있습니다.

이를 기반으로 가전, 첨단 산업 장비, 차세대 모빌리티 및 로봇 시스템의 정밀 콘트롤러 솔루션을 구축하여, 고객사 제품의 스마트화와 에너지 효율성, 그리고 안전성을 극대화하는 데 기여하고 있습니다.

제품의 전체 성능과 품질을 좌우하는 '핵심 부품'을 만드는 만큼, 센서나인은 타협 없는 기술력과 철저한 품질 관리를 기업의 최우선 가치로 삼습니다.

인간의 삶을 풍요롭게 하는 스마트 가전부터 미래 산업을 이끄는 AI 인프라와 첨단 모빌리티까지, 최고의 품질과 신뢰를 바탕으로 함께 상생 발전하는 가장 든든한 비즈니스 파트너가 되겠습니다.

센서나인(주) 대표이사 이호균`,
  aboutIntroEN: `Sensor9 Co., Ltd. is a manufacturing innovation enterprise that researches, develops, and supplies high-precision NTC temperature sensors, controllers, and high-reliability ignition transformers, providing core control solutions for smart home appliances, eco-friendly mobility, smart factories, and advanced AI robotics of the future.

From intelligent HVAC sensors for boilers and air conditioners to specialized double-pipe socket and bracket-mounted sensors for harsh environments, we possess customized sensor technology optimized across a wide industrial spectrum. In particular, we lead next-generation technology trends by providing smart sensing solutions optimized for battery management systems (BMS) in electric vehicles (EVs) and future mobility, as well as drive units and thermal control modules in AI robots that demand sophisticated precision and durability.

Furthermore, leveraging our manufacturing expertise in ignition transformers that guarantee stable high-voltage output, we have successfully expanded our business footprint. Our reach extends from home appliance and industrial combustion systems to automation equipment for smart factories and control systems for special-purpose robots.

Based on these capabilities, we build precision controller solutions for home appliances, advanced industrial equipment, next-generation mobility, and robotic systems, contributing to maximizing the smartification, energy efficiency, and safety of our clients' products.

As a creator of 'core components' that determine the overall performance and quality of products, Sensor9 places uncompromising technical prowess and rigorous quality control as our highest corporate values.

From smart home appliances that enrich human lives to AI infrastructure and advanced mobility leading future industries, we commit to being your most reliable business partner, driving mutual growth through top-tier quality and trust.

Ho-Kyun Lee, CEO of Sensor9 Co., Ltd.`,
  kpi1Value: 'EV & AI',
  kpi1SectTitleKR: '미래 모빌리티 & AI 로봇',
  kpi1SectTitleEN: 'Future Mobility & AI Robotics',
  kpi1TitleKR: '차세대 첨단 산업을 움직이는 초정밀 열 제어',
  kpi1TitleEN: 'Ultra-Precision Thermal Control Driving Next-Generation Advanced Industries',
  kpi1DescKR: '전기차 배터리 관리 시스템(BMS)부터 AI 로봇의 구동부까지, 미세한 열 변화를 완벽히 감지하여 시스템의 안전과 효율을 극대화합니다.',
  kpi1DescEN: 'From Electric Vehicle Battery Management Systems (BMS) to the drive units of AI robots, we flawlessly detect micro-thermal changes to maximize system safety and efficiency.',
  kpi2Value: 'SAFE & SMART',
  kpi2SectTitleKR: '연소 제어 & 스마트 팩토리',
  kpi2SectTitleEN: 'Combustion Control & Smart Factory',
  kpi2TitleKR: '가혹한 산업 현장을 지키는 고신뢰성 안전 솔루션',
  kpi2TitleEN: 'High-Reliability Safety Solutions Guarding Harsh Industrial Environments',
  kpi2DescKR: '고전압 안정성을 보장하는 점화트랜스와 광학식 UV 화염감지 기술을 통해 가전 및 스마트 팩토리 연소 시스템의 안전을 빈틈없이 제어합니다.',
  kpi2DescEN: 'Through ignition transformers that guarantee high-voltage stability and optical UV flame detection technology, we seamlessly control the safety of combustion systems in both home appliances and smart factories.',
  kpi3Value: 'ECO-FRIENDLY',
  kpi3SectTitleKR: '지능형 HVAC & 스마트 홈',
  kpi3SectTitleEN: 'Intelligent HVAC & Smart Home',
  kpi3TitleKR: '일상의 스마트화와 에너지를 아끼는 기술',
  kpi3TitleEN: 'Smartifying Daily Life with Energy-Saving Technologies',
  kpi3DescKR: '친환경 보일러 및 에어컨용 지능형 HVAC 센서 기술력으로 건물과 가정의 에너지를 절감하고 쾌적한 환경을 선사합니다.',
  kpi3DescEN: 'With our intelligent HVAC sensor technology for eco-friendly boilers and air conditioners, we reduce energy consumption in buildings and homes while delivering a comfortable environment.',

  // Custom Slide 1
  slide1BadgeKR: 'STEADY / 최고인정 고신뢰성',
  slide1BadgeEN: 'DURABLE / ACCURATE',
  slide1TitleKR: '오차 범위 ±0.05°C 극도로 정밀하고 미세 온도 흐트러짐 없는 완벽 제어',
  slide1TitleEN: 'Extremely Precise, Stable Feedback with Accuracy Level to ±0.05°C',
  slide1SeriesKR: '이중관 소켓형 온도 센서 SN-DBT Series',
  slide1SeriesEN: 'Double-Well Threaded Thermistor (SN-DBT Series)',
  slide1DescKR: '고정밀 NTC 칩과 센서나인만의 이중 보호벽(격벽) 기술을 하나로 묶었습니다. 화학 물질이 흐르거나 압력이 극도로 높은 배관 속에서도, 유체의 흐름을 방해하지 않고 흐트러짐 없는 완벽한 온도를 감지하고 제어합니다.',
  slide1DescEN: 'Combining our high-precision NTC chips with SENSOR9’s proprietary double-shield technology, this sensor ensures seamless, flawless temperature detection and control without disrupting fluid flow—even inside high-pressure pipelines or corrosive chemical environments.',
  slide1ProductFilterValue: '온도센서',

  // Custom Slide 2
  slide2BadgeKR: 'EASY FIT / 밀착형 스프링',
  slide2BadgeEN: 'SNAP-ON / EASY INSTALL',
  slide2TitleKR: '배관 용접이나 홀 가공 없이 원터치 완전 구면 밀착을 실현하는',
  slide2TitleEN: 'Zero Welding and Leak Risk with Direct Clamp-on Pipe Integration',
  slide2SeriesKR: '지능형 배관 밀착형 온도센서 SN-PIPE Series',
  slide2SeriesEN: 'Clamping/Strap-on Pipe Sensor (SN-PIPE Series)',
  slide2DescKR: '금속 배관 외부 표면에 균일하게 래핑 밀착되는 고탄성 장력 스프링 시스 구조를 적용하여, 배관 내벽 가공 없이 0.1초의 급격한 열원 대류까지 오차 없이 실시간으로 추출해 냅니다.',
  slide2DescEN: 'Designed with responsive structural thermistor clamps wrapping completely around standard plumbing. Extracts fast temperature flow metrics with zero fluid restriction.',
  slide2ProductFilterValue: '배관용온도센서',

  // Custom Slide 3
  slide3BadgeKR: 'ULTRA HIGH / 화염 가열로',
  slide3BadgeEN: 'ULTRA HIGH TEMP',
  slide3TitleKR: '최대 1200°C 화염의 초고온 가열로 및 고압 용사 로재 내벽에 대응하는',
  slide3TitleEN: 'Extremely Resilient K-TYPE Sensors Certified up to +1200°C',
  slide3SeriesKR: '초고속 반응 K-TYPE 및 고온 전주 센서 SN-KTYPE Series',
  slide3SeriesEN: 'Heavy Industrial K-Type Probe (SN-KTYPE Series)',
  slide3DescKR: '진보한 세라믹 인슐레이터 격막과 하스텔로이 보호 공법을 입혀 산화 부식을 철저히 극소화하였으며, 금속 제련 연구 및 가마 연소 환경 최상단에서 수명을 온전히 유지합니다.',
  slide3DescEN: 'High-level magnesium oxide mineral insulation encased within heat-resistant Superalloy protective sheathing. Built for steel mills, glass foundries, and incinerators.',
  slide3ProductFilterValue: 'K-TYPE센서',

  // Custom Slide 4
  slide4BadgeKR: 'DOUBLE DETECT / 누수 및 기포 방어',
  slide4BadgeEN: 'SAFETY LEVEL WATCH',
  slide4TitleKR: '액밀 고강도 프리즘과 다중 정전 전극으로 침전 오동작 방지하는 수위 감지',
  slide4TitleEN: 'Smart Non-contact Level Tracking Prevents False Failures',
  slide4SeriesKR: '수위 감지 및 특수 산업 보안 센서 SN-SAFETY Series',
  slide4SeriesEN: 'Intelligent Water Level Casing (SN-SAFETY Series)',
  slide4DescKR: '진보한 광전 센싱 소자와 전극 감도를 내장하여, 오일-물 믹서기 등 복잡한 잔여 세정액 조건에서도 침전물 오작동 없이 정확한 레벨 및 유출 소화 조각을 감지 방어합니다.',
  slide4DescEN: 'Applies patented impedance vector analysis algorithms filters out build-up scales or persistent fluid bubbles, ensuring zero alarm faults in oil-water mixers, bio chambers, and tank walls.',
  slide4ProductFilterValue: '수위감지센서',

  // Custom Core Portfolio (Hompage)
  homePortfolioBadgeKR: 'CORE PORTFOLIO',
  homePortfolioBadgeEN: 'CORE PORTFOLIO',
  homePortfolioTitleKR: '제품 라인업',
  homePortfolioTitleEN: 'Product Lineup',
  homePortfolioBtnKR: '전체 사양 및 단가 확인하기',
  homePortfolioBtnEN: 'Discover entire specs table',

  // Homepage Featured Products IDs
  featuredProduct1Id: '',
  featuredProduct2Id: '',
  featuredProduct3Id: '',

  // R&D Custom Content
  carouselVideoUrl: 'https://okces100-hash.github.io/my-media/sensor_main_v1.mp4', // sensor_image_video_carousel - [위치: 홈(메인) 화면 슬라이드 쇼 바로 아래, '센서나인 주식회사 기술연구원...' 소개 글자가 적힌 영역의 대형 배경 비디오 파일 경로]
  rdHeroVideoUrl: 'https://okces100-hash.github.io/my-media/sensor_R&D_v2.mp4', // sensor_image_video_hero - [위치: '연구개발(R&D)' 페이지의 메인 최상단 배경 비디오 (기계 로봇팔 장치 동작 영상)]
  rdHeroSloganKR: '세상을 감지하는 정밀함, 센서나인의 원천기술',
  rdHeroSloganEN: 'Sensing the World with Precision, SensorNine\'s Original R&D Tech',
  rdHeroSubSloganKR: '가전 및 다양한 제어 시스템의 핵심이 되는 정밀 센서 기술력으로, 타협 없는 철저한 품질 관리와 지속적인 기술 혁신을 통해 최적의 맞춤형 솔루션을 제공합니다.',
  rdHeroSubSloganEN: 'With our precision sensor technology at the heart of home appliances and various control systems, we provide optimal customized solutions through uncompromising quality control and continuous technical innovation.',
  
  rdTech1TitleKR: '고정밀 NTC 열적외선 감지 기술',
  rdTech1TitleEN: 'High-Precision NTC Thermal Sensing',
  rdTech1DescKR: 'NTC 박막 써미스터 반도체 칩 기술을 활용하여, 비접촉식 및 가혹한 환경에서도 열대류 오차를 0.01°C 극소 범위 내에서 실시간 제어 및 추출하는 핵심 기술입니다.',
  rdTech1DescEN: 'Utilizing patented NTC thin-film semiconductor chips to extract real-time ambient thermal fluctuations within a 0.01°C error boundary even in hazardous high-pressure situations.',
  rdTech1VideoUrl: 'https://okces100-hash.github.io/my-media/sensor_R&D_v3.mp4', // sensor_image_video_tech1 - [위치: '연구개발(R&D)' 페이지의 핵심 원천 기술 카드 1번 - 카메라 렌즈 조리개 장비 동작 비디오]

  rdTech2TitleKR: '수소 및 가스 화염 노이즈 필터링 알고리즘',
  rdTech2TitleEN: 'Hydrogen & Gas Flame Noise Filtering Algorithm',
  rdTech2DescKR: '연소 기기 구동 시 배관 진동이나 불꽃 주변의 유류 화합물 노이즈를 하드웨어 및 소프트웨어 필터로 전처리합니다. 오작동을 유발하는 가짜 신호를 걸러내어, 화염감지기 및 수소화염감지 컨트롤러가 오보 없이 균일하고 안정적인 실시간 시그널 출력을 보장하도록 만듭니다.',
  rdTech2DescEN: 'Pre-filters piping vibrations and oil compound noise near the flame using hardware and software filters during combustion equipment operation. By filtering out false signals that cause malfunctions, it ensures uniform and stable real-time signal output without false alarms for flame detectors and hydrogen flame detection controllers.',
  rdTech2VideoUrl: 'https://okces100-hash.github.io/my-media/sensor_R&D_v5.mp4', // sensor_image_video_tech2 - [위치: '연구개발(R&D)' 페이지의 핵심 원천 기술 카드 2번 - 모니터 화면 데이터 분석 시그널 비디오]

  rdTech3TitleKR: '초소형 고내열 센서 패키징',
  rdTech3TitleEN: 'Ultra-compact High-heat Resistant Sensor Packaging',
  rdTech3DescKR: '이중 장력 차폐 케이싱 기술을 통해 공간이 극도로 협소한 가전 부속품 내부나 진동이 심한 배관 등 까다로운 구조물 내부에 센서를 유격 없이 완전 밀착하여 장착합니다. 수분 침투를 완벽히 막아내는 강력한 방수 성능으로, 가혹한 진동 충격과 고열 환경 속에서도 수분으로 인한 오작동 없이 센서를 원천 보호합니다.',
  rdTech3DescEN: 'Utilizing dual-tension shielding casing technology, sensors are mounted in complete contact with no clearance inside extremely narrow appliance parts or demanding structures such as highly vibrating pipes. With powerful waterproofing performance that completely blocks moisture penetration, it fundamentally protects sensors from malfunctions caused by moisture, even under harsh vibration impacts and high-temperature environments.',
  rdTech3VideoUrl: 'https://okces100-hash.github.io/my-media/sensor_R&D_v6.mp4', // sensor_image_video_tech3 - [위치: '연구개발(R&D)' 페이지의 핵심 원천 기술 카드 3번 - 반도체 회로 기판 분석 비디오]
  
  // sensor_image_video_certs - [위치: 메인 홈 화면 맨 하단 '품질 및 특허 인증(Certifications)' 갤러리 섹션의 인증서 이미지 7개 설정]
  certificatesJson: '[\n  {\n    "id": "cert-iso",\n    "titleKR": "ISO 인증서",\n    "titleEN": "ISO Certificate",\n    "imageUrl": "https://okces100-hash.github.io/my-media/sensor_certification_i28.jpg"\n  },\n  {\n    "id": "cert-utility-model",\n    "titleKR": "실용신안등록증(온도감지센서)",\n    "titleEN": "Utility Model Registration (Temperature Sensor)",\n    "imageUrl": "https://okces100-hash.github.io/my-media/sensor_certification_i27.jpg"\n  },\n  {\n    "id": "cert-venture",\n    "titleKR": "벤처기업확인서",\n    "titleEN": "Venture Business Confirmation",\n    "imageUrl": "https://okces100-hash.github.io/my-media/sensor_certification_i26.jpg"\n  },\n  {\n    "id": "cert-rnd-center",\n    "titleKR": "기업부설연구서 인정서",\n    "titleEN": "Corporate R&D Center Recognition",\n    "imageUrl": "https://okces100-hash.github.io/my-media/sensor_certification_i25.jpg"\n  },\n  {\n    "id": "cert-innobiz",\n    "titleKR": "이노비즈인증서",\n    "titleEN": "Inno-Biz Certificate",\n    "imageUrl": "https://okces100-hash.github.io/my-media/sensor_certification_i24.jpg"\n  },\n  {\n    "id": "cert-kimm-ir",\n    "titleKR": "KIMM 인증서 - 적외선센서",\n    "titleEN": "KIMM Certificate - Infrared Sensor",\n    "imageUrl": "https://okces100-hash.github.io/my-media/sensor_certification_i23.jpg"\n  },\n  {\n    "id": "cert-kimm-temp",\n    "titleKR": "KIMM 인증서 - 온도센서",\n    "titleEN": "KIMM Certificate - Temperature Sensor",\n    "imageUrl": "https://okces100-hash.github.io/my-media/sensor_certification_i3.jpg"\n  }\n]',
};

export const INITIAL_SEO_METADATA: SEOMetadata = {
  metaTitleKR: '센서나인(주) | 고정밀 NTC 온도 및 안전 감지센서 글로벌 리더',
  metaTitleEN: 'SensorNine Co., Ltd. | Global Leader in High-Precision NTC Sensors',
  metaDescriptionKR: '센서나인(주)은 특허받은 NTC 온도 센서, 바이패스 감지센서 및 초정밀 산업용 비접촉 서모파일 감지기 등 최고 0.01°C 정밀도의 고신뢰성 센서 제품군을 연구하고 양산합니다.',
  metaDescriptionEN: 'SensorNine Co., Ltd. researches and mass-produces high-reliability sensor lines with up to 0.01°C accuracy, including patented NTC temperature sensors, bypass sensors, and infrared thermopile detectors.',
  keywordsKR: 'NTC 온도센서, 감지센서 제조, 고정밀 온도계, 산업용 센서, 의료용 NTC, 센서나인',
  keywordsEN: 'NTC Thermistor, Temperature Sensor, SensorNine, Custom Probe, High Precision Calibration, Industrial Detectors'
};

export const INITIAL_CMS_POSTS: CMSPost[] = [
  {
    id: 'cms-3',
    titleKR: 'New Energy Fair Osong 2026(NEO 2026) 참가 및 초청장 안내',
    titleEN: 'Invitation & Notice of Participation: New Energy Fair Osong 2026 (NEO 2026)',
    contentKR: `안녕하세요, 센서나인(주)입니다.

센서나인(주)이 오는 7월, 중부권 최대 규모의 차세대 에너지 전문 박람회인 ‘2026 뉴에너지 페어 오송 (NEO 2026)’에 참가합니다.

이번 전시회에서 센서나인은 당사의 독보적인 고정밀 NTC·PT·K-Type 온도센서 라인업과 함께, 미래 친환경 에너지 시장을 선도할 ‘수소연소 제어 및 센싱 핵심 솔루션’을 전격 선보일 예정입니다.

당사의 차세대 기술력과 혁신 제품을 직접 확인하실 수 있는 자리를 마련하였사오니, 고객사 및 파트너사 관계자분들의 많은 관심과 방문을 부탁드립니다.

전시회명: 2026 뉴에너지 페어 오송 (NEO 2026)
일시: 2026년 7월 8일(수) ~ 7월 10일(금), 3일간
관람시간: 10:00 ~ 17:00 (입장 마감 16:30)
장소: 청주오스코 (OSCO)

첨부된 초청장을 현장에서 제시하시면 무료 입장이 가능합니다.
안내 포스터의 QR코드를 통해 사전등록 시 더욱 신속하게 입장하실 수 있습니다.

새로운 에너지 트렌드 속에서 센서나인이 제시하는 안전과 효율의 가치를 부스에서 직접 경험해 보시기 바랍니다. 감사합니다.`,
    contentEN: `Dear Customers and Partners,

This is SensorNine Co., Ltd.

We are pleased to announce that SensorNine Co., Ltd. will participate in the upcoming "2026 New Energy Fair Osong (NEO 2026)" this coming July, which is the largest next-generation energy professional exhibition in the central region of Korea.

At this exhibition, SensorNine will present its unique lineup of high-precision NTC, Pt, and K-Type temperature sensors, alongside our "Core Hydrogen Combustion Control and Sensing Solutions" designed to lead the future of the eco-friendly green energy market.

We have prepared a space where you can directly experience our next-generation technology and innovative products. We look forward to the interest and visits of our valued clients and partners.

Exhibition: 2026 New Energy Fair Osong (NEO 2026)
Date: July 8 (Wed) – July 10 (Fri), 2026 (3 days)
Viewing Hours: 10:00 – 17:00 (Last Admission at 16:30)
Venue: Cheongju OSCO (OSCO)

You can enter for free by presenting the attached invitation at the venue.
You can also enter more quickly by pre-registering through the QR code on the guidance poster.

We hope you will experience the value of safety and efficiency presented by SensorNine amidst the new energy trends directly at our booth. Thank you.`,
    categoryKR: '공지사항',
    categoryEN: 'Notice',
    date: '2026년 06월 30일',
    author: '관리자',
    imageUrl: 'https://okces100-hash.github.io/my-media/sensor_news_i74.jpg',
  },
  {
    id: 'cms-1',
    titleKR: '센서나인(주) 공식 홈페이지 리뉴얼 오픈 안내',
    titleEN: 'Notice of SensorNine Co., Ltd. Official Website Renewal',
    contentKR: '센서나인(주)를 아껴주시는 고객 여러분께 진심으로 감사드립니다. 당사는 고객 여러분과의 소통을 강화하고, 저희의 주요 정밀 센서 및 제어 부품 라인업을 보다 직관적이고 상세하게 확인하실 수 있도록 전반적인 레이아웃과 제품 소개 페이지를 대폭 개선하였습니다. 또한, PC와 모바일 환경 어디서나 편리하게 제품 문의 및 고객 지원 서비스를 이용하실 수 있도록 접근성을 높였습니다. 많은 관심 부탁드립니다.',
    contentEN: 'We would like to express our sincere gratitude to all our customers for your continued support for Sensor9 Co., Ltd. To enhance communication with you, we have significantly upgraded our overall layout and product pages, allowing you to browse our precision sensors and control components more intuitively and in detail. We have also improved accessibility, ensuring you can easily send product inquiries and access customer support on both desktop and mobile devices. Thank you for your continued interest and support.',
    categoryKR: '공지사항',
    categoryEN: 'Notice',
    date: '2026년 06월 04일',
    author: '관리자',
    imageUrl: 'https://okces100-hash.github.io/my-media/sensor_news_i33.jpg',
  },
  {
    id: 'cms-2',
    titleKR: 'World Hydrogen Expo 2025 (H2 MEET) 참가 및 수소 안전 솔루션 소개',
    titleEN: 'Participation in World Hydrogen Expo 2025 (H2 MEET) & Hydrogen Safety Solutions',
    contentKR: `안녕하세요, 센서나인(주)입니다.

저희 센서나인(주)은 지난 2025년 12월 4일부터 12월 7일까지 개최된 '2025 세계 수소 엑스포(World Hydrogen Expo 2025 / H2 MEET)'에 참가하여 당사의 축적된 센서 기술력과 최신 수소 안전 솔루션을 성공적으로 선보였습니다.

급성장하는 수소 인프라와 친환경 에너지 생태계 환경에 발맞추어, 센서나인(주)은 수소의 특성을 고려한 전용 안전 제품군을 대거 출품하여 국내외 바이어 및 파트너사분들께 큰 호응을 얻었습니다.

[주요 출품 제품 라인업]

수소 전용 안전 및 제어 시스템: 역화방지센서, 수소화염감지기 및 수소화염감지 컨트롤러

고신뢰성 점화 시스템: 안정적인 초기 구동을 지원하는 수소 점화트랜스 및 일반 점화트랜스

화재 및 불꽃 안전 센서: 고성능 화염감지기 및 화염감지센서

정밀 온도감지센서: 배관용 온도센서, 외기 온도센서 및 고정밀 NTC 써미스터 기술

전시 기간 동안 저희 센서나인(주)의 부스를 방문해 주시고 많은 관심을 보여주신 고객 및 파트너사 여러분께 깊은 감사의 말씀을 드립니다. 앞으로도 세계적인 수준의 정밀 센서 및 수소 안전 솔루션으로 보답하는 센서나인이 되겠습니다.

전시회명: World Hydrogen Expo 2025 (H2 MEET)

전시 기간: 2025년 12월 4일(목) ~ 12월 7일(일)

전시 장소: 킨텍스(KINTEX)`,
    contentEN: `Dear Customers and Partners,

We are proud to announce that SENSOR9 Co., Ltd. successfully participated in the World Hydrogen Expo 2025 (H2 MEET), held from December 4th to December 7th, 2025, showcasing our advanced sensor technology and hydrogen safety solutions.

In alignment with the rapidly growing hydrogen infrastructure and eco-friendly energy ecosystem, SENSOR9 presented a dedicated lineup of safety products optimized for hydrogen environments, receiving great acclaim from domestic and international buyers and partners.

[Key Product Exhibits]

Hydrogen-Specific Safety & Control Systems: Flashback Arrestor Sensors, Hydrogen Flame Detectors, and Hydrogen Flame Detection Controllers.

High-Reliability Ignition Systems: Hydrogen Ignition Transformers and Standard Ignition Transformers for stable initial operation.

Fire & Flame Safety Sensors: High-Performance Flame Detectors and Flame Sensors.

Precision Temperature Sensors: Pipe Temperature Sensors, Outdoor Temperature Sensors, and High-Precision NTC Thermistors.

We extend our deepest gratitude to all the customers and partners who visited the SENSOR9 booth and showed great interest during the exhibition. We will continue to move forward as a trusted leader in world-class precision sensors and hydrogen safety solutions.

Event: World Hydrogen Expo 2025 (H2 MEET)

Date: December 4 (Thu) – December 7 (Sun), 2025

Venue: KINTEX

Thank you.`,
    categoryKR: '공지사항',
    categoryEN: 'Notice',
    date: '2025년 12월 07일',
    author: '관리자',
    imageUrl: 'https://okces100-hash.github.io/my-media/sensor_news_i29.jpg',
    images: [
      'https://okces100-hash.github.io/my-media/sensor_news_i29.jpg',
      'https://okces100-hash.github.io/my-media/sensor_news_i30.jpg',
      'https://okces100-hash.github.io/my-media/sensor_news_i31.jpg',
      'https://okces100-hash.github.io/my-media/sensor_news_i32.jpg'
    ]
  }
];

export const PRODUCTS_LIST: ProductSpec[] = [
  // =========================================================================
  // [제품 소개 이미지 및 브로슈어 수정 안내]
  // 1. 이미지: 각 제품 객체 아래에 `imageUrl: '이미지경로'`를 입력하여 이미지를 설정할 수 있습니다.
  //    예시: imageUrl: 'https://okces100-hash.github.io/my-media/products/my-product-1.jpg' 기입 시 해당 이미지가 출력됩니다.
  //          기본적으로 비워두거나 생략하면 각 카테고리에 맞는 고화질 벡터 아이콘이 자동으로 표시됩니다.
  // 2. 브로슈어: 구글 드라이브 공유 주소나 카탈로그 파일 링크를 `brochureUrl: '공유링크'` 로 넣어주시면
  //    제품군 카드와 상세 사양 표에 자동으로 "브로슈어 보기" 버튼이 렌더링됩니다.
  //    예시: brochureUrl: 'https://drive.google.com/file/d/.../view?usp=sharing'
  // =========================================================================

  // 1. 온도센서 (기본형 및 체결형)
  {
    id: 'prod-geo-14',
    model: 'SN-GEO-14',
    category: '온도센서 (기본형 및 체결형)',
    nameKR: '지열센서',
    nameEN: 'Geothermal Sensor',
    range: '-50°C to +120°C',
    accuracy: '±0.15°C',
    ratingKR: 'SUS316L 밀폐형 이중 센싱 프로브, IP68 완전방수',
    ratingEN: 'Hermetic dual-sensing SUS316L, IP68 Waterproof',
    appKR: '지중 열화 관리, 지열 냉난방 시스템 매립형 신뢰성 센싱',
    appEN: 'Geothermal heating & cooling systems ground burial sensing',
    imageAlt: '지열센서',
    imageUrl: 'https://okces100-hash.github.io/my-media/sensor_products_i34.png', // ◀ [제품 이미지 경로 수정]: 여기에 이미지 주소(예: 'https://okces100-hash.github.io/my-media/products/sn-geo-14.png')를 입력하세요.
    brochureUrl: 'https://drive.google.com/file/d/1IUClw9PS_witTOGCktCJcbENJCmgWIaN/view?usp=drive_link', // ◀ [구글 드라이브 브로슈어 주소 기입의 예시]
  },
  {
    id: 'prod-ac-13',
    model: 'SN-AC-13',
    category: '온도센서 (기본형 및 체결형)',
    nameKR: '에어컨용 온도센서',
    nameEN: 'AC Temperature Sensor',
    range: '-30°C to +100°C',
    accuracy: '±0.1°C',
    ratingKR: '황동 도금 콤팩트 캡, 방수 실링 에폭시 사출',
    ratingEN: 'Brass-plated compact cap, molded resin waterproof seal',
    appKR: '상업용 시스템에어컨 증발기 및 배관 흡입 온도 모니터링',
    appEN: 'Commercial system air conditioner evaporator temperature tracking',
    imageAlt: '에어컨용 온도센서',
    imageUrl: 'https://okces100-hash.github.io/my-media/sensor_products_i35.png', // ◀ [제품 이미지 경로 수정]: 여기에 이미지 주소를 입력하세요.
    brochureUrl: 'https://drive.google.com/file/d/1IUClw9PS_witTOGCktCJcbENJCmgWIaN/view?usp=drive_link', // ◀ [구글 드라이브 브로슈어 주소 기입]: 여기에 해당 제품 브로슈어 주소를 입력하세요.
  },
  {
    id: 'prod-brk-12',
    model: 'SN-BRK-12',
    category: '온도센서 (기본형 및 체결형)',
    nameKR: '브라켓 체결용 온도센서',
    nameEN: 'Bracket Mounting Temp Sensor',
    range: '-40°C to +150°C',
    accuracy: '±0.15°C',
    ratingKR: '측면 고정용 플랜지식 금속 브라켓 장착 구조',
    ratingEN: 'Flange mounting side-bracket metal housing',
    appKR: '공조기 하우징 내벽 고정, 모터 프레임 외부 열전달 모니터링',
    appEN: 'HVAC chamber interior casing, motor surface thermal supervision',
    imageAlt: '브라켓 체결용 온도센서',
    imageUrl: 'https://okces100-hash.github.io/my-media/sensor_products_i36.png', // ◀ [제품 이미지 경로 수정]: 여기에 이미지 주소를 입력하세요.
    brochureUrl: 'https://drive.google.com/file/d/1IUClw9PS_witTOGCktCJcbENJCmgWIaN/view?usp=drive_link', // ◀ [구글 드라이브 브로슈어 주소 기입]: 여기에 해당 제품 브로슈어 주소를 입력하세요.
  },
  {
    id: 'prod-dbt-11',
    model: 'SN-DBT-11',
    category: '온도센서 (기본형 및 체결형)',
    nameKR: '이중관 소켓 체결용 온도센서 - PT 1/2 TAP 적용',
    nameEN: 'Double Well Sensor - PT 1/2 TAP',
    range: '-50°C to +200°C',
    accuracy: '±0.05°C',
    ratingKR: 'PT 1/2 인치 규격 나사산 적용 이중관 일체 세트',
    ratingEN: 'PT 1/2" thread tapered double-shielded design',
    appKR: '산업용 열 교환 매니폴드, 대류수 순환 압력 라인 피팅',
    appEN: 'Industrial heat exchanger manifolds, flow convection lines',
    imageAlt: '이중관 소켓 체결용 온도센서',
    imageUrl: 'https://okces100-hash.github.io/my-media/sensor_products_i37.png', // ◀ [제품 이미지 경로 수정]: 여기에 이미지 주소를 입력하세요.
    brochureUrl: 'https://drive.google.com/file/d/1WxbRKLp3fpRNTdCvi41b-CXrdxp4lRC2/view?usp=drive_link', // ◀ [구글 드라이브 브로슈어 주소 기입]: 여기에 해당 제품 브로슈어 주소를 입력하세요.
  },
  {
    id: 'prod-clp-10',
    model: 'SN-CLP-10',
    category: '온도센서 (기본형 및 체결형)',
    nameKR: '클립형 온도센서',
    nameEN: 'Clip-on Temperature Sensor',
    range: '-20°C to +120°C',
    accuracy: '±0.2°C',
    ratingKR: '고탄성 스텐 서클릿 원형 파이프 스냅온 퀵 클립',
    ratingEN: 'High-elasticity stainless spring steel pipe snap-on clip',
    appKR: '가정용 보일러 냉온수 동관 배관 밀착 스냅 설치',
    appEN: 'Home boiler domestic water copper pipes snap attachment',
    imageAlt: '클립형 온도센서',
    imageUrl: 'https://okces100-hash.github.io/my-media/sensor_products_i38.png', // ◀ [제품 이미지 경로 수정]: 여기에 이미지 주소를 입력하세요.
    brochureUrl: 'https://drive.google.com/file/d/1IeOvG4f24-w27iHLMGS0Gh7lH8c6k4M8/view?usp=drive_link', // ◀ [구글 드라이브 브로슈어 주소 기입]: 여기에 해당 제품 브로슈어 주소를 입력하세요.
  },
  {
    id: 'prod-gen-9',
    model: 'SN-GEN-09',
    category: '온도센서 (기본형 및 체결형)',
    nameKR: '일반 온도센서',
    nameEN: 'General Temperature Sensor',
    range: '-40°C to +125°C',
    accuracy: '±0.1°C',
    ratingKR: 'SUS 원통 씰 튜브 (L: 50mm, Ø: 5mm)',
    ratingEN: 'SUS straight cylinder probe casing (L: 50mm, Ø: 5mm)',
    appKR: '소형 항온수조 챔버 가동 지표, HVAC 내부 대류 제어',
    appEN: 'Chamber water bath monitoring, internal air flow HVAC measurement',
    imageAlt: '일반 온도센서',
    imageUrl: 'https://okces100-hash.github.io/my-media/sensor_products_i39.png', // ◀ [제품 이미지 경로 수정]: 여기에 이미지 주소를 입력하세요.
    brochureUrl: 'https://drive.google.com/file/d/1IUClw9PS_witTOGCktCJcbENJCmgWIaN/view?usp=drive_link', // ◀ [구글 드라이브 브로슈어 주소 기입]: 여기에 해당 제품 브로슈어 주소를 입력하세요.
  },
  {
    id: 'prod-gen-8',
    model: 'SN-GEN-08',
    category: '온도센서 (기본형 및 체결형)',
    nameKR: '일반 온도센서',
    nameEN: 'General Temperature Sensor',
    range: '-40°C to +125°C',
    accuracy: '±0.15°C',
    ratingKR: 'SUS 원통 씰 튜브 (L: 40mm, Ø: 4mm)',
    ratingEN: 'SUS straight cylinder probe casing (L: 40mm, Ø: 4mm)',
    appKR: '일반 가전 기기 제어반 온도 검출, 덕트 공정 수집',
    appEN: 'General home appliances electronics casing, duct sensing systems',
    imageAlt: '일반 온도센서',
    imageUrl: 'https://okces100-hash.github.io/my-media/sensor_products_i40.png', // ◀ [제품 이미지 경로 수정]: 여기에 이미지 주소를 입력하세요.
    brochureUrl: 'https://drive.google.com/file/d/1IUClw9PS_witTOGCktCJcbENJCmgWIaN/view?usp=drive_link', // ◀ [구글 드라이브 브로슈어 주소 기입]: 여기에 해당 제품 브로슈어 주소를 입력하세요.
  },
  {
    id: 'prod-gen-5',
    model: 'SN-GEN-05',
    category: '온도센서 (기본형 및 체결형)',
    nameKR: '일반 온도센서',
    nameEN: 'General Temperature Sensor',
    range: '-40°C to +105°C',
    accuracy: '±0.2°C',
    ratingKR: '수축 튜브 방적 케이스 마감 (L: 30mm, Ø: 3.5mm)',
    ratingEN: 'Shrink-sleeve polymer protection casing (L: 30mm, Ø: 3.5mm)',
    appKR: '의료기기 단순 소모품, 냉장고 김치 장독 제어 센싱',
    appEN: 'Simple medical storage cabinets, cooling appliances temperature control',
    imageAlt: '일반 온도센서',
    imageUrl: 'https://okces100-hash.github.io/my-media/sensor_products_i41.png', // ◀ [제품 이미지 경로 수정]: 여기에 이미지 주소를 입력하세요.
    brochureUrl: 'https://drive.google.com/file/d/1IUClw9PS_witTOGCktCJcbENJCmgWIaN/view?usp=drive_link', // ◀ [구글 드라이브 브로슈어 주소 기입]: 여기에 해당 제품 브로슈어 주소를 입력하세요.
  },
  {
    id: 'prod-scr-4',
    model: 'SN-SCR-04',
    category: '온도센서 (기본형 및 체결형)',
    nameKR: '나사 체결용 온도센서 - PF 1/8 TAP 적용',
    nameEN: 'Thread Screw Sensor - PF 1/8 TAP',
    range: '-30°C to +150°C',
    accuracy: '±0.1°C',
    ratingKR: 'PF 1/8 고정 기밀 평행 수나사 적용',
    ratingEN: 'PF 1/8" thread fitting hexagonal head bolt structure',
    appKR: '가스 압축 컴프레셔 측벽 하우징, 엔진 크랭크케이스',
    appEN: 'Air compressor sidewall housing, engine crankcase thermal monitoring',
    imageAlt: '나사 체결용 온도센서 PF 1/8',
    imageUrl: 'https://okces100-hash.github.io/my-media/sensor_products_i42.png', // ◀ [제품 이미지 경로 수정]: 여기에 이미지 주소를 입력하세요.
    brochureUrl: 'https://drive.google.com/file/d/1IUClw9PS_witTOGCktCJcbENJCmgWIaN/view?usp=drive_link', // ◀ [구글 드라이브 브로슈어 주소 기입]: 여기에 해당 제품 브로슈어 주소를 입력하세요.
  },
  {
    id: 'prod-scr-2',
    model: 'SN-SCR-02',
    category: '온도센서 (기본형 및 체결형)',
    nameKR: '나사 체결용 온도센서 - PT 1/4 TAP 적용',
    nameEN: 'Thread Screw Sensor - PT 1/4 TAP',
    range: '-40°C to +180°C',
    accuracy: '±0.1°C',
    ratingKR: 'PT 1/4 테이퍼 압력 나사 가공 (L: 25mm)',
    ratingEN: 'PT 1/4" tapered male-thread fitting (L: 25mm)',
    appKR: '오토 클레이브 내화 기기 결합, 순환 열수 주입 배관 입구',
    appEN: 'Autoclave pressure chambers, hot water distribution pipe inlets',
    imageAlt: '나사 체결용 온도센서 PT 1/4',
    imageUrl: 'https://okces100-hash.github.io/my-media/sensor_products_i43.png', // ◀ [제품 이미지 경로 수정]: 여기에 이미지 주소를 입력하세요.
    brochureUrl: 'https://drive.google.com/file/d/1IUClw9PS_witTOGCktCJcbENJCmgWIaN/view?usp=drive_link', // ◀ [구글 드라이브 브로슈어 주소 기입]: 여기에 해당 제품 브로슈어 주소를 입력하세요.
  },
  {
    id: 'prod-scr-1',
    model: 'SN-SCR-01',
    category: '온도센서 (기본형 및 체결형)',
    nameKR: '나사 체결용 온도센서 - PT 1/4 TAP 적용',
    nameEN: 'Thread Screw Sensor - PT 1/4 TAP',
    range: '-40°C to +180°C',
    accuracy: '±0.15°C',
    ratingKR: 'PT 1/4/ 테이퍼 나사 슬림 헤드 (L: 15mm)',
    ratingEN: 'PT 1/4" tapered male-thread slim-head fitting (L: 15mm)',
    appKR: '공조 히터 방열 핀 표면 나사 직접 체결 제어',
    appEN: 'HVAC heater radiation fins direct-screw temperature assembly',
    imageAlt: '나사 체결용 온도센서 PT 1/4',
    imageUrl: 'https://okces100-hash.github.io/my-media/sensor_products_i44.png', // ◀ [제품 이미지 경로 수정]: 여기에 이미지 주소를 입력하세요.
    brochureUrl: 'https://drive.google.com/file/d/1IUClw9PS_witTOGCktCJcbENJCmgWIaN/view?usp=drive_link', // ◀ [구글 드라이브 브로슈어 주소 기입]: 여기에 해당 제품 브로슈어 주소를 입력하세요.
  },

  // 2. 배관용 온도센서
  {
    id: 'prod-pipe-3',
    model: 'SN-PIPE-03',
    category: '배관용 온도센서',
    nameKR: '배관용 온도센서 - 대형',
    nameEN: 'Pipe Temperature Sensor - Large',
    range: '-40°C to +250°C',
    accuracy: '±0.1°C',
    ratingKR: '웰 헤드 중량 플랜지 차폐 구조 및 서모웰 분리 세트',
    ratingEN: 'Heavy industrial thermo-well flange assembly, lock screw',
    appKR: '발전 설비 주 스팀 수송 전용관, 석유 화학 플랜트 고온 순출액 관',
    appEN: 'Power plant steam pipeline monitoring, petrochemical plant high-flow lines',
    imageAlt: '대형 배관용 온도센서',
    imageUrl: 'https://okces100-hash.github.io/my-media/sensor_products_i45.png', // ◀ [제품 이미지 경로 수정]: 여기에 이미지 주소를 입력하세요.
    brochureUrl: 'https://drive.google.com/file/d/1VerXoLkBTItbC9K1PnoQZdCVIb8zVJUH/view?usp=drive_link', // ◀ [구글 드라이브 브로슈어 주소 기입]: 여기에 해당 제품 브로슈어 주소를 입력하세요.
  },
  {
    id: 'prod-pipe-1',
    model: 'SN-PIPE-01',
    category: '배관용 온도센서',
    nameKR: '배관용 온도센서 - 소형',
    nameEN: 'Pipe Temperature Sensor - Small',
    range: '-40°C to +180°C',
    accuracy: '±0.15°C',
    ratingKR: 'SUS316L 소형 나사산 체결식 밀폐 슬리브',
    ratingEN: 'SUS316L compact screw-threaded hermetic protective sleeve',
    appKR: '가정용 보일러 분배기 상하수관, 냉각 제어 루프 배관',
    appEN: 'Residential boiler circulation manifolds, water cooler circulation pipe loops',
    imageAlt: '소형 배관용 온도센서',
    imageUrl: 'https://okces100-hash.github.io/my-media/sensor_products_i46.png', // ◀ [제품 이미지 경로 수정]: 여기에 이미지 주소를 입력하세요.
    brochureUrl: 'https://drive.google.com/file/d/1ueFkurVzlDAyuyx4WihqEPpHXt44KvHG/view?usp=drive_link', // ◀ [구글 드라이브 브로슈어 주소 기입]: 여기에 해당 제품 브로슈어 주소를 입력하세요.
  },

  // 3. 외기 및 실내용 온도센서
  {
    id: 'prod-out-1',
    model: 'SN-OUT-01',
    category: '외기 및 실내용 온도센서',
    nameKR: '외기용 온도센서',
    nameEN: 'Outdoor Temperature Sensor',
    range: '-50°C to +80°C',
    accuracy: '±0.15°C',
    ratingKR: 'UV 내후성 코플라스틱 하우징 루버 플레이트',
    ratingEN: 'Weatherproof UV-shielded outdoor plastic louver wall housing',
    appKR: '빌딩 스마트 공조 외풍 제어용, 스마트 농가 시설 원정 온도 검사',
    appEN: 'Commercial building outside air damper loops, smart farm greenhouse monitoring',
    imageAlt: '외기용 온도센서',
    imageUrl: 'https://okces100-hash.github.io/my-media/sensor_products_i47.png', // ◀ [제품 이미지 경로 수정]: 여기에 이미지 주소를 입력하세요.
    brochureUrl: 'https://drive.google.com/file/d/1TX8Q8PRp7Guggy2YJBbC9KrJKnHK9TBq/view?usp=drive_link', // ◀ [구글 드라이브 브로슈어 주소 기입]: 여기에 해당 제품 브로슈어 주소를 입력하세요.
  },
  {
    id: 'prod-in-w2',
    model: 'SN-IN-W02',
    category: '외기 및 실내용 온도센서',
    nameKR: '실내용 온도센서 (와이어 TYPE)',
    nameEN: 'Indoor Room Sensor - Wire Type',
    range: '-20°C to +70°C',
    accuracy: '±0.1°C',
    ratingKR: '지방 극세 케이블 몰딩 전선 일체형 슬림 프로브',
    ratingEN: 'Micro insulation FEP ribbon wire integrated probe',
    appKR: '정밀 전산 서버실 랙 장비 내부 공기 흡입구 틈새 마운트',
    appEN: 'Server rack cooling intake vent mounting, dynamic climate cabinet control',
    imageAlt: '실내용 와이어 센서',
    imageUrl: 'https://okces100-hash.github.io/my-media/sensor_products_i48.png', // ◀ [제품 이미지 경로 수정]: 여기에 이미지 주소를 입력하세요.
    brochureUrl: '', // ◀ [구글 드라이브 브로슈어 주소 기입]: 여기에 해당 제품 브로슈어 주소를 입력하세요.
  },
  {
    id: 'prod-in-l1',
    model: 'SN-IN-L01',
    category: '외기 및 실내용 온도센서',
    nameKR: '실내용 온도센서 (리드 TYPE)',
    nameEN: 'Indoor Room Sensor - Lead Type',
    range: '-10°C to +60°C',
    accuracy: '±0.2°C',
    ratingKR: '벽 장착형 화이트 인클로저 케이스 패널',
    ratingEN: 'Classic white wall-mounted terminal housing',
    appKR: '상업 오피스 빌딩 중앙 집중식 난방 방 온도 제약 장비',
    appEN: 'Commercial workspace interior thermostat, climate-control ceiling vents',
    imageAlt: '실내용 리드 센서',
    imageUrl: 'https://okces100-hash.github.io/my-media/sensor_products_i49.png', // ◀ [제품 이미지 경로 수정]: 여기에 이미지 주소를 입력하세요.
    brochureUrl: '', // ◀ [구글 드라이브 브로슈어 주소 기입]: 여기에 해당 제품 브로슈어 주소를 입력하세요.
  },

  // 4. 고온 및 산업용 센서 (K-TYPE / PT100Ω / 바이메탈)
  {
    id: 'prod-pt100-6',
    model: 'SN-PT100-06',
    category: '고온 및 산업용 센서 (K-TYPE / PT100Ω / 바이메탈)',
    nameKR: 'PT100Ω 3선식 온도센서 (PT 1/2 TAP 적용)',
    nameEN: 'PT100 3-Wire Sensor - PT 1/2 TAP',
    range: '-200°C to +450°C',
    accuracy: 'Class A (±0.15°C)',
    ratingKR: '3선식 구리 보상 리드선 적용, PT 1/2 나사 커플러',
    ratingEN: '3-wire RTD system copper compensator, PT 1/2 Tap',
    appKR: '연구소 저온 냉동 보관 설비, 산업 스팀 라인 극오차 교정',
    appEN: 'Extremely low biochem cryo-chambers, steam calibration accuracy units',
    imageAlt: 'PT100 3선식 PT 1/2',
    imageUrl: 'https://okces100-hash.github.io/my-media/sensor_products_i50.png', // ◀ [제품 이미지 경로 수정]: 여기에 이미지 주소를 입력하세요.
    brochureUrl: 'https://drive.google.com/file/d/1wFNcNHhY78vtiEpLxj8RcV0i926rcONs/view?usp=drive_link', // ◀ [구글 드라이브 브로슈어 주소 기입]: 여기에 해당 제품 브로슈어 주소를 입력하세요.
  },
  {
    id: 'prod-pt100-5',
    model: 'SN-PT100-05',
    category: '고온 및 산업용 센서 (K-TYPE / PT100Ω / 바이메탈)',
    nameKR: 'PT100Ω 3선식 온도센서 (PT 1/4 TAP 적용)',
    nameEN: 'PT100 3-Wire Sensor - PT 1/4 TAP',
    range: '-200°C to +350°C',
    accuracy: 'Class B (±0.3°C)',
    ratingKR: 'SUS 헤드 스프링 로디드 프로브, PT 1/4 나사',
    ratingEN: 'SUS head spring-loaded fitting probe, PT 1/4 thread',
    appKR: '공조기 히팅 열교환 덕트, 플랜트 오일 순환 매니폴드 주 탱크',
    appEN: 'Auxiliary duct coil heat loop detectors, industrial hydraulic systems',
    imageAlt: 'PT100 3선식 PT 1/4',
    imageUrl: 'https://okces100-hash.github.io/my-media/sensor_products_i51.png', // ◀ [제품 이미지 경로 수정]: 여기에 이미지 주소를 입력하세요.
    brochureUrl: 'https://drive.google.com/file/d/1wFNcNHhY78vtiEpLxj8RcV0i926rcONs/view?usp=drive_link', // ◀ [구글 드라이브 브로슈어 주소 기입]: 여기에 해당 제품 브로슈어 주소를 입력하세요.
  },
  {
    id: 'prod-ktype-4',
    model: 'SN-KTYPE-04',
    category: '고온 및 산업용 센서 (K-TYPE / PT100Ω / 바이메탈)',
    nameKR: 'K-TYPE 온도센서 (PT 1/2 TAP 적용)',
    nameEN: 'K-Type Thermocouple - PT 1/2 TAP',
    range: '-100°C to +800°C',
    accuracy: '±1.5°C or 0.75%',
    ratingKR: '고온 내열 글래스 울 외장 보호 피복 및 PT 1/2 헤드',
    ratingEN: 'High-temp glass-wool braided insulator, PT 1/2 connector',
    appKR: '전기로 고열 노외 통제, 도자 소결 전력실 상시 진단',
    appEN: 'High-temp smelting electrical kilns, power stations heavy chambers',
    imageAlt: 'K-TYPE 센서 PT 1/2',
    imageUrl: 'https://okces100-hash.github.io/my-media/sensor_products_i52.png', // ◀ [제품 이미지 경로 수정]: 여기에 이미지 주소를 입력하세요.
    brochureUrl: 'https://drive.google.com/file/d/1XQtoftA8hFaOC5dK9-VwdR7IdwBHkZd8/view?usp=drive_link', // ◀ [구글 드라이브 브로슈어 주소 기입]: 여기에 해당 제품 브로슈어 주소를 입력하세요.
  },
  {
    id: 'prod-ktype-2',
    model: 'SN-KTYPE-02',
    category: '고온 및 산업용 센서 (K-TYPE / PT100Ω / 바이메탈)',
    nameKR: 'K-TYPE 온도센서 (PT 1/4 TAP 적용)',
    nameEN: 'K-Type Thermocouple - PT 1/4 TAP',
    range: '-50°C to +600°C',
    accuracy: '±2.2°C or 0.75%',
    ratingKR: '이중 유리 보호 실드 리드 케이블, PT 1/4 밀폐 탭',
    ratingEN: 'Dual heat glass shield lead wire, PT 1/4 Tap',
    appKR: '플라스틱 압출기 가열 배럴 외부, 사출 금형 슬링 온도 지표',
    appEN: 'Plastic extrusion hot barrels, high-speed injection molds monitoring',
    imageAlt: 'K-TYPE 센서 PT 1/4',
    imageUrl: 'https://okces100-hash.github.io/my-media/sensor_products_i53.png', // ◀ [제품 이미지 경로 수정]: 여기에 이미지 주소를 입력하세요.
    brochureUrl: 'https://drive.google.com/file/d/1XQtoftA8hFaOC5dK9-VwdR7IdwBHkZd8/view?usp=drive_link', // ◀ [구글 드라이브 브로슈어 주소 기입]: 여기에 해당 제품 브로슈어 주소를 입력하세요.
  },
  {
    id: 'prod-ktype-1',
    model: 'SN-KTYPE-01',
    category: '고온 및 산업용 센서 (K-TYPE / PT100Ω / 바이메탈)',
    nameKR: 'K-TYPE 온도센서 (브라켓 체결용)',
    nameEN: 'K-Type Thermocouple with Bracket',
    range: '-40°C to +400°C',
    accuracy: '±2.2°C',
    ratingKR: 'L형 측벽 직립 체결 금속 플레이트 어레인지 브라켓',
    ratingEN: 'L-Shape mounting plate bracket with custom secure screw eyelet',
    appKR: '산업용 대용량 건조기 덕트 매립, 고중량 프레스 성형 금형',
    appEN: 'Large-scale industrial dryers venting ducts, heavy press casting',
    imageAlt: 'K-TYPE 브라켓형',
    imageUrl: 'https://okces100-hash.github.io/my-media/sensor_products_i54.png', // ◀ [제품 이미지 경로 수정]: 여기에 이미지 주소를 입력하세요.
    brochureUrl: 'https://drive.google.com/file/d/1XQtoftA8hFaOC5dK9-VwdR7IdwBHkZd8/view?usp=drive_link', // ◀ [구글 드라이브 브로슈어 주소 기입]: 여기에 해당 제품 브로슈어 주소를 입력하세요.
  },
  {
    id: 'prod-bim-m4',
    model: 'SN-BIM-M04',
    category: '고온 및 산업용 센서 (K-TYPE / PT100Ω / 바이메탈)',
    nameKR: '수동 바이메탈',
    nameEN: 'Manual Reset Bimetal Switch',
    range: '+60°C to +150°C (Cutout Preset)',
    accuracy: '±3.5°C trip',
    ratingKR: '화재 방지 전착용 수동 해제 조작 안전 기계식 버튼',
    ratingEN: 'Manual-push safety reset micro button, brass faceplate',
    appKR: '온풍 난방기 화재 예방 배기 과열 셧다운 차단기',
    appEN: 'Industrial air heater exhaust fire safety override cutoff switch',
    imageAlt: '수동 바이메탈',
    imageUrl: 'https://okces100-hash.github.io/my-media/sensor_products_i55.png', // ◀ [제품 이미지 경로 수정]: 여기에 이미지 주소를 입력하세요.
    brochureUrl: '', // ◀ [구글 드라이브 브로슈어 주소 기입]: 여기에 해당 제품 브로슈어 주소를 입력하세요.
  },
  {
    id: 'prod-bim-a3',
    model: 'SN-BIM-A03',
    category: '고온 및 산업용 센서 (K-TYPE / PT100Ω / 바이메탈)',
    nameKR: '자동 바이메탈',
    nameEN: 'Auto Reset Bimetal Switch',
    range: '+45°C to +130°C (Cycle Reset)',
    accuracy: '±3.0°C trip',
    ratingKR: '자동 복원 이중 원반 접점 (동급 수명 10만회 보장)',
    ratingEN: 'Auto-reset bimetallic disc (100,000 cycles rating)',
    appKR: '고속 열선 히터 전력 안정, 냉난방 모터 배압 차전 필터',
    appEN: 'High-speed radiant wire power control, HVAC blower motor protection',
    imageAlt: '자동 바이메탈',
    imageUrl: 'https://okces100-hash.github.io/my-media/sensor_products_i56.png', // ◀ [제품 이미지 경로 수정]: 여기에 이미지 주소를 입력하세요.
    brochureUrl: '', // ◀ [구글 드라이브 브로슈어 주소 기입]: 여기에 해당 제품 브로슈어 주소를 입력하세요.
  },
  {
    id: 'prod-bim-h2',
    model: 'SN-BIM-H02',
    category: '고온 및 산업용 센서 (K-TYPE / PT100Ω / 바이메탈)',
    nameKR: '자동 바이메탈 - 고온용 (세라믹 케이스)',
    nameEN: 'High-Temp Auto Bimetal - Ceramic',
    range: '100°C to 250°C',
    accuracy: '±4.0°C trip',
    ratingKR: '내열 세라믹 인클로저 프레임 사출 구조',
    ratingEN: 'Highly heat-stable ceramic enclosure body design',
    appKR: '가정용 전기 오븐 안쪽 조절실, 대형 상업 식기세척 건조기 브레이커',
    appEN: 'High-power compact electric stoves, commercial hot drying breakers',
    imageAlt: '세라믹 바이메탈',
    imageUrl: 'https://okces100-hash.github.io/my-media/sensor_products_i57.png', // ◀ [제품 이미지 경로 수정]: 여기에 이미지 주소를 입력하세요.
    brochureUrl: '', // ◀ [구글 드라이브 브로슈어 주소 기입]: 여기에 해당 제품 브로슈어 주소를 입력하세요.
  },

  // 5. 수위감지센서
  {
    id: 'prod-lev-9',
    model: 'SN-LEVEL-09',
    category: '수위감지센서',
    nameKR: '수위 감지 센서 (PT 1/4 TAP 적용)',
    nameEN: 'Water Level Sensor - PT 1/4 TAP',
    range: '0 to 2000mm 연속 검출',
    accuracy: '±1mm',
    ratingKR: '테플론 코팅 외장 방습, PT 1/4 고정 프레임',
    ratingEN: 'Teflon coated insulation sleeve, PT 1/4 thread',
    appKR: '반도체 세정조 식각 슬러리 레벨 보존 정밀 수위 측정',
    appEN: 'Semiconductor clean tanks acid-slurry level tracking',
    imageAlt: '수위감지센서 PT 1/4',
    imageUrl: 'https://okces100-hash.github.io/my-media/sensor_products_i60.png', // ◀ [제품 이미지 경로 수정]: 여기에 이미지 주소를 입력하세요.
    brochureUrl: '', // ◀ [구글 드라이브 브로슈어 주소 기입]: 여기에 해당 제품 브로슈어 주소를 입력하세요.
  },
  {
    id: 'prod-lev-8',
    model: 'SN-LEVEL-08',
    category: '수위감지센서',
    nameKR: '수위 감지 센서 (PT 1/4 TAP 적용)',
    nameEN: 'Water Level Sensor - PT 1/4 TAP',
    range: '0 to 1500mm',
    accuracy: '±1mm',
    ratingKR: 'SUS304 금속 리드 로드, PT 1/4 평행 가스 체결',
    ratingEN: 'SUS304 mechanical float rod sensor, PT 1/4 thread',
    appKR: '중형 빌딩 오배수 정화 수배조 수위 레벨 스캐닝',
    appEN: 'Wastewater drainage collecting sinks, greywater sumps',
    imageAlt: '수위감지센서 PT 1/4',
    imageUrl: 'https://okces100-hash.github.io/my-media/sensor_products_i61.png', // ◀ [제품 이미지 경로 수정]: 여기에 이미지 주소를 입력하세요.
    brochureUrl: '', // ◀ [구글 드라이브 브로슈어 주소 기입]: 여기에 해당 제품 브로슈어 주소를 입력하세요.
  },
  {
    id: 'prod-lev-5',
    model: 'SN-LEVEL-05',
    category: '수위감지센서',
    nameKR: '수위 감지 센서 - 클립 체결용',
    nameEN: 'Water Level Sensor - Clip-on',
    range: '0 to 1000mm',
    accuracy: '±2mm',
    ratingKR: '스프링 클립 가건식 스냅 접착 판넬 고정형',
    ratingEN: 'Spring-loaded click sheet-clip temporary mounting',
    appKR: '정수 장비 가습 세척 내부 임시 정밀 수배수 스탠드',
    appEN: 'Water purification humidifying chambers temporary mount',
    imageAlt: '클립형 수위센서',
    imageUrl: 'https://okces100-hash.github.io/my-media/sensor_products_i62.png', // ◀ [제품 이미지 경로 수정]: 여기에 이미지 주소를 입력하세요.
    brochureUrl: '', // ◀ [구글 드라이브 브로슈어 주소 기입]: 여기에 해당 제품 브로슈어 주소를 입력하세요.
  },
  {
    id: 'prod-lev-4',
    model: 'SN-LEVEL-04',
    category: '수위감지센서',
    nameKR: '수위 감지 센서 - 클립 체결용',
    nameEN: 'Water Level Sensor - Clip-on',
    range: '0 to 800mm',
    accuracy: '±2mm',
    ratingKR: '소형 원형 원버 플라스틱 클립 프레임 구조',
    ratingEN: 'Mini circular plastic snap-clip framework',
    appKR: '일반 정수 탱크 세척 조내 실시간 넘침 수용 가동 검사',
    appEN: 'Water purifiers storage tanks smart anti-flooding overflow alarm',
    imageAlt: '클립형 수위센서',
    imageUrl: 'https://okces100-hash.github.io/my-media/sensor_products_i63.png', // ◀ [제품 이미지 경로 수정]: 여기에 이미지 주소를 입력하세요.
    brochureUrl: '', // ◀ [구글 드라이브 브로슈어 주소 기입]: 여기에 해당 제품 브로슈어 주소를 입력하세요.
  },
  {
    id: 'prod-lev-h2',
    model: 'SN-LEVEL-H02',
    category: '수위감지센서',
    nameKR: '수위 감지 센서 - 고온용 (PT 1/4 TAP 적용)',
    nameEN: 'High-Temp Water Level Sensor - PT 1/4',
    range: '최고 +150°C 내열 대기',
    accuracy: '±1mm',
    ratingKR: '불소 고무 실링 처리 및 SUS316L 플로트 본체',
    ratingEN: 'Fluorine-rubber seal shield & pure SUS316L mechanical float',
    appKR: '고온 압력 가열 스팀 보일러 내부 탕수 레벨 제어',
    appEN: 'Pressurized high-temp steam boilers internal hot-water level control',
    imageAlt: '고온용 수위감지센서',
    imageUrl: 'https://okces100-hash.github.io/my-media/sensor_products_i64.png', // ◀ [제품 이미지 경로 수정]: 여기에 이미지 주소를 입력하세요.
    brochureUrl: '', // ◀ [구글 드라이브 브로슈어 주소 기입]: 여기에 해당 제품 브로슈어 주소를 입력하세요.
  },
  {
    id: 'prod-lev-1',
    model: 'SN-LEVEL-01',
    category: '수위감지센서',
    nameKR: '수위 감지 센서 (PT 1/2 TAP 적용)',
    nameEN: 'Water Level Sensor - PT 1/2 TAP',
    range: '0 to 3000mm 대형 수로',
    accuracy: '±1mm',
    ratingKR: 'PT 1/2 인용 중형 나사산 사출 하이패스 하우징',
    ratingEN: 'PT 1/2 thread medium industrial level sensor',
    appKR: '공장 공업 용수 유류 분리 저장실, 농업 펌프장 순찰',
    appEN: 'Industrial oil separator reservoirs, farming pumping canals',
    imageAlt: '수위감지센서 PT 1/2',
    imageUrl: 'https://okces100-hash.github.io/my-media/sensor_products_i65.png', // ◀ [제품 이미지 경로 수정]: 여기에 이미지 주소를 입력하세요.
    brochureUrl: '', // ◀ [구글 드라이브 브로슈어 주소 기입]: 여기에 해당 제품 브로슈어 주소를 입력하세요.
  },

  // 6. 역화감지센서
  {
    id: 'prod-flsh-1',
    model: 'SN-FLSH-01',
    category: '역화감지센서',
    nameKR: '수소 역화감지센서 (수소 안전 및 제어용)',
    nameEN: 'Hydrogen Flashback Arrestor Sensor',
    range: '-40℃ ~ +125℃',
    accuracy: '고압 및 고속 감지 반응',
    ratingKR: 'SUS316L 하우징 / IP67 / 수소 가스 배관 전용 설계',
    ratingEN: 'SUS316L Housing / IP67 / Hydrogen gas pipe specialized design',
    appKR: '수소 충전소 디스펜서, 가스 연소 설비 역화 감지 및 차단 밸브 연동',
    appEN: 'Hydrogen charging dispensers, gas combustion flashback detection & valve control',
    imageAlt: '수소 역화감지센서',
    imageUrl: 'https://okces100-hash.github.io/my-media/sensor_products_i59_2.png', // ◀ [제품 이미지 경로 수정]: 여기에 이미지 주소를 입력하세요.
    brochureUrl: '', // ◀ [구글 드라이브 브로슈어 주소 기입]: 여기에 해당 제품 브로슈어 주소를 입력하세요.
  },

  // 7. 불꽃/화염 감지센서
  {
    id: 'prod-flm-case',
    model: 'SN-FLM-CASE',
    category: '불꽃/화염 감지센서',
    nameKR: '불꽃감지센서_반도체방식_L형',
    nameEN: 'Flame Sensor (L Type)',
    range: '700nm ~ 1,000nm',
    accuracy: '적외선 방식 (Infrared)',
    ratingKR: '내열 엔지니어링 플라스틱 하우징 / IP65',
    ratingEN: 'Heat-Resistant Plastic Housing / IP65',
    appKR: '보일러 연소 제어 화염 감시, 가스 연소 설비 안전 연동',
    appEN: 'Boiler combustion control flame monitoring, gas appliance safety interlock',
    imageAlt: '불꽃감지센서_반도체방식_L형',
    imageUrl: 'https://okces100-hash.github.io/my-media/sensor_products_i58.png', // ◀ [제품 이미지 경로 수정]: 여기에 이미지 주소를 입력하세요.
    brochureUrl: 'https://drive.google.com/file/d/1oyfrkCbONIA3730-S-a4mQky7QuZI6jP/view?usp=drive_link', // ◀ [구글 드라이브 브로슈어 주소 기입]: 여기에 해당 제품 브로슈어 주소를 입력하세요.
  },
  {
    id: 'prod-flm-wire',
    model: 'SN-FLM-WIRE',
    category: '불꽃/화염 감지센서',
    nameKR: '불꽃감지센서_반도체방식_I형',
    nameEN: 'Flame Sensor (I Type)',
    range: '700nm ~ 1,000nm',
    accuracy: '적외선 방식 (Infrared)',
    ratingKR: '실리콘 고온 절연 리드 와이어 / IP65 맞춤식 설계',
    ratingEN: 'Silicone High-Temp Lead Wire / IP65 Customized design',
    appKR: '공간이 협소한 가스 온수기, 버너 노즐부 점화 직접 감지',
    appEN: 'Compact gas water heaters, direct burner nozzle ignition detection',
    imageAlt: '불꽃감지센서 와이어형',
    imageUrl: 'https://okces100-hash.github.io/my-media/sensor_products_i59.png', // ◀ [제품 이미지 경로 수정]: 여기에 이미지 주소를 입력하세요.
    brochureUrl: 'https://drive.google.com/file/d/1bsVy_SdbAzIRYDesQJMObaoF-c1NKuUp/view?usp=drive_link', // ◀ [구글 드라이브 브로슈어 주소 기입]: 여기에 해당 제품 브로슈어 주소를 입력하세요.
  },
  {
    id: 'prod-flm-det',
    model: 'SN-FLM-DET',
    category: '화염감지센서',
    nameKR: '화염감지센서',
    nameEN: 'Flame Detector',
    range: '700nm ~ 1,000nm',
    accuracy: '적외선 방식 (Infrared)',
    ratingKR: '알루미늄 견고한 아노다이징 케이스 / IP67 고정밀 감인',
    ratingEN: 'Anodized Aluminum Solid Case / IP67 High-Precision Sensing',
    appKR: '산업용 대형 연소로, 유리/금속 열처리 화염 모니터링, 방폭 영역 예방',
    appEN: 'Industrial large furnaces, glass/metal heat-treatment flame monitoring',
    imageAlt: '화염감지센서',
    imageUrl: 'https://okces100-hash.github.io/my-media/sensor_products_i59_1.png', // ◀ [제품 이미지 경로 수정]: 여기에 이미지 주소를 입력하세요.
    brochureUrl: 'https://drive.google.com/file/d/1odLsR5zvdeLqv6lp6rlOgDRiLfmRVEMg/view?usp=drive_link', // ◀ [구글 드라이브 브로슈어 주소 기입]: 여기에 해당 제품 브로슈어 주소를 입력하세요.
  },

  // 8. 점화트랜스
  {
    id: 'prod-ign-large',
    model: 'SN-IGN-03',
    category: '점화트랜스',
    nameKR: '점화트랜스 대형',
    nameEN: 'Ignition Transformer - Large',
    range: '입력 220V / 출력 15kV',
    accuracy: '고주파수 출력 안정성',
    ratingKR: '고전압 몰딩 가공, 가스/오일 보일러 점화용 내후성 프레임',
    ratingEN: 'High-voltage potted casting, heavy duty gas/oil boiler ignition frame',
    appKR: '산업용 대형 연소기, 상업용 고용량 온수기 고전압 점화',
    appEN: 'Industrial large burners, commercial high-capacity water heater ignition',
    imageAlt: '점화트랜스 대형',
    imageUrl: 'https://okces100-hash.github.io/my-media/sensor_products_i71.png',
    brochureUrl: 'https://drive.google.com/file/d/1qaaEE_xVH3cbz4XBO7FqBnWu7gu6ylOQ/view?usp=drive_link', // ◀ [구글 드라이브 브로슈어 주소 기입]: 여기에 해당 제품 브로슈어 주소를 입력하세요.
    videoUrl: 'https://drive.google.com/file/d/1TQbG7mTMapNrQr8xMy0ENT0xp7pmyUr2/view?usp=drive_link', // ◀ [구글 드라이브 동작 영상 주소 기입]: 여기에 해당 제품 동작 영상 주소를 입력하세요.
  },
  {
    id: 'prod-ign-medium',
    model: 'SN-IGN-02',
    category: '점화트랜스',
    nameKR: '점화트랜스 중형',
    nameEN: 'Ignition Transformer - Medium',
    range: '입력 220V / 출력 12kV',
    accuracy: '고주파수 출력 안정성',
    ratingKR: '안정적인 방전 및 절연 에폭시 밀폐 구조',
    ratingEN: 'Stable discharge and insulated epoxy-sealed encapsulation',
    appKR: '중형 가정용/상업용 가스 보일러, 버너 버스팅 점화 제어',
    appEN: 'Medium residential/commercial gas boilers, burner bursting controls',
    imageAlt: '점화트랜스 중형',
    imageUrl: 'https://okces100-hash.github.io/my-media/sensor_products_i72.png',
    brochureUrl: 'https://drive.google.com/file/d/1qaaEE_xVH3cbz4XBO7FqBnWu7gu6ylOQ/view?usp=drive_link', // ◀ [구글 드라이브 브로슈어 주소 기입]: 여기에 해당 제품 브로슈어 주소를 입력하세요.
    videoUrl: 'https://drive.google.com/file/d/1TQbG7mTMapNrQr8xMy0ENT0xp7pmyUr2/view?usp=drive_link', // ◀ [구글 드라이브 동작 영상 주소 기입]: 여기에 해당 제품 동작 영상 주소를 입력하세요.
  },
  {
    id: 'prod-ign-small',
    model: 'SN-IGN-01',
    category: '점화트랜스',
    nameKR: '점화트랜스 소형',
    nameEN: 'Ignition Transformer - Small',
    range: '입력 220V / 출력 8kV',
    accuracy: '고주파수 출력 안정성',
    ratingKR: '컴팩트 초형량 설계, 고효율 점화 방전 기술 적용',
    ratingEN: 'Compact lightweight design, high efficiency ignition discharge tech',
    appKR: '소형 친환경 가정용 가스 프리믹스 보일러 점화 플러그 방전',
    appEN: 'Small eco-friendly residential pre-mix gas boiler sparkling discharge',
    imageAlt: '점화트랜스 소형',
    imageUrl: 'https://okces100-hash.github.io/my-media/sensor_products_i73.png',
    brochureUrl: 'https://drive.google.com/file/d/1olzZLKzoHcZwuMUVw20Xk1EqEkixZ-ys/view?usp=drive_link', // ◀ [구글 드라이브 브로슈어 주소 기입]: 여기에 해당 제품 브로슈어 주소를 입력하세요.
    videoUrl: 'https://drive.google.com/file/d/1TQbG7mTMapNrQr8xMy0ENT0xp7pmyUr2/view?usp=drive_link', // ◀ [구글 드라이브 동작 영상 주소 기입]: 여기에 해당 제품 동작 영상 주소를 입력하세요.
  },

  // 6. 기타 부속품 (케이스 및 소켓)
  {
    id: 'prod-case-5',
    model: 'SN-CASE-05',
    category: '기타 부속품 (케이스 및 소켓)',
    nameKR: '이중관 온도센서 케이스',
    nameEN: 'Double-Tube Protector Case',
    range: '보호 케이스 파트 (센서 무체)',
    accuracy: '외경 Ø: 8.0mm, 내경 Ø: 6.2mm',
    ratingKR: '이중 차폐 탈착형 정밀 삽입 전용 스틸 케이스',
    ratingEN: 'Detachable double-shielded protective outer sleeve case',
    appKR: '온도 센서 손상 방지 가이드, 정체 유체 배관 직접 매몰 체결',
    appEN: 'Prevents physical sensor fluid erosion, direct well pipeline burial',
    imageAlt: '이중관 온도센서 케이스',
    imageUrl: 'https://okces100-hash.github.io/my-media/sensor_products_i66.png', // ◀ [제품 이미지 경로 수정]: 여기에 이미지 주소를 입력하세요.
    brochureUrl: '', // ◀ [구글 드라이브 브로슈어 주소 기입]: 여기에 해당 제품 브로슈어 주소를 입력하세요.
  },
  {
    id: 'prod-case-4',
    model: 'SN-CASE-04',
    category: '기타 부속품 (케이스 및 소켓)',
    nameKR: '온도센서 케이스',
    nameEN: 'Temperature Sensor Case',
    range: '보호 케이스 파트',
    accuracy: '외경 Ø: 6.0mm / 두께 0.5t',
    ratingKR: 'SUS 원형 둥근 마감 가동형 원형 슬리브 케이스',
    ratingEN: 'Standard straight round-tip SUS tubing sheath',
    appKR: '다공성 대류 씰 내부 센서 조립 시 외형 포팅 웰',
    appEN: 'General multi-point thermocouple casing assembly, potting well',
    imageAlt: '온도센서 케이스',
    imageUrl: 'https://okces100-hash.github.io/my-media/sensor_products_i67.png', // ◀ [제품 이미지 경로 수정]: 여기에 이미지 주소를 입력하세요.
    brochureUrl: 'https://drive.google.com/file/d/1WxbRKLp3fpRNTdCvi41b-CXrdxp4lRC2/view?usp=drive_link', // ◀ [구글 드라이브 브로슈어 주소 기입]: 여기에 해당 제품 브로슈어 주소를 입력하세요.
  },
  {
    id: 'prod-case-b3',
    model: 'SN-CASE-B03',
    category: '기타 부속품 (케이스 및 소켓)',
    nameKR: '온도센서 케이스 (황동 재질)',
    nameEN: 'Brass Sensor Case',
    range: '열전도성 황동 가공',
    accuracy: '고속 열반응 레이아웃',
    ratingKR: '쾌삭 황동 재질 정밀 선반 원형 절삭 가공 하우징',
    ratingEN: 'C3604 brass custom lathe-turned fast-response outer case',
    appKR: '전도 열전달 극대화 기기 고온 마운트, 배관 표면 밀착 소켓',
    appEN: 'Maximizing surface thermal conduction speed, radiator side socket',
    imageAlt: '온도센서 황동 케이스',
    imageUrl: 'https://okces100-hash.github.io/my-media/sensor_products_i68.png', // ◀ [제품 이미지 경로 수정]: 여기에 이미지 주소를 입력하세요.
    brochureUrl: '', // ◀ [구글 드라이브 브로슈어 주소 기입]: 여기에 해당 제품 브로슈어 주소를 입력하세요.
  },
  {
    id: 'prod-case-s2',
    model: 'SN-CASE-S02',
    category: '기타 부속품 (케이스 및 소켓)',
    nameKR: '온도센서 케이스 (SUS 재질)',
    nameEN: 'Stainless Steel Sensor Case',
    range: 'SUS316L 초강도',
    accuracy: '내압 최고 300 bar 테스트',
    ratingKR: '화학 내화 SUS316L 모세 가공 관 (Ø: 5.0mm)',
    ratingEN: 'Petrochemical grade SUS316L capillary outer tube',
    appKR: '강산성 세정 탱크 보호 덕트, 염분 바다 해수 측정관',
    appEN: 'Strong acids process shield conduit, marine saltwater storage guide',
    imageAlt: 'SUS 온도센서 케이스',
    imageUrl: 'https://okces100-hash.github.io/my-media/sensor_products_i69.png', // ◀ [제품 이미지 경로 수정]: 여기에 이미지 주소를 입력하세요.
    brochureUrl: '', // ◀ [구글 드라이브 브로슈어 주소 기입]: 여기에 해당 제품 브로슈어 주소를 입력하세요.
  },
  {
    id: 'prod-sock-1',
    model: 'SN-SOCK-01',
    category: '기타 부속품 (케이스 및 소켓)',
    nameKR: '온도센서 소켓',
    nameEN: 'Sensor Mounting Socket Tap',
    range: '나사산 웰 소켓 어댑터',
    accuracy: 'PT 1/2 내경 - PT 1/4 암나사 대응',
    ratingKR: '육각 육면체 가공 황동/SUS 커플러 어댑터',
    ratingEN: 'Hexagonal solid coupler reducer adapter block',
    appKR: '기존 배관 배관 나사산 규격 변환, 소형 센서 탈착 탭 보존',
    appEN: 'Reducing pipeline tapping diameter sizes, rapid sensor swaps',
    imageAlt: '온도센서 소켓',
    imageUrl: 'https://okces100-hash.github.io/my-media/sensor_products_i70.png', // ◀ [제품 이미지 경로 수정]: 여기에 이미지 주소를 입력하세요.
    brochureUrl: '', // ◀ [구글 드라이브 브로슈어 주소 기입]: 여기에 해당 제품 브로슈어 주소를 입력하세요.
  }
];

export const CERTIFICATES_LIST = [
  { id: 'cert-1', nameKR: 'ISO 9001:2015 국제 품질 경영 시스템 인증', nameEN: 'ISO 9001:2015 Quality Management System Certificate', number: 'QA-2023-F981', issuer: 'KSA' },
  { id: 'cert-2', nameKR: 'CE 전기안전 적합성 표준 선언서', nameEN: 'CE Declaration of Conformity Standards', number: 'CE-2024-NTC9', issuer: 'TUV Rheinland' },
  { id: 'cert-3', nameKR: 'RoHS 친환경 유해물질 불검출 성적서', nameEN: 'RoHS Hazardous Material Free Certification', number: 'ROHS-2025-S9', issuer: 'SGS Lab' },
  { id: 'cert-4', nameKR: '고온 특허: NTC 서미스터 소자 접합 안정화 장치 특허', nameEN: 'Patent: NTC thermistor element binding stability system', number: 'PAT-No-1025821', issuer: 'korean Patent Office' }
];

export const TIMELINE_ITEMS = [
  {
    year: '2006',
    titleKR: '센서나인 설립',
    titleEN: 'Establishment of SensorNine',
    descKR: '초정밀 센서 제어 전문 기업 센서나인 설립',
    descEN: 'Established SensorNine specializing in high-precision control sensors'
  },
  {
    year: '2007',
    titleKR: 'ISO 9001 인증 및 벤처기업 인정',
    titleEN: 'ISO 9001 Certification & Certified Venture Business',
    descKR: '품질경영시스템 인증 ( KS Q ISO 9001:2009 / ISO 9001:2008, 인증기관 : 한국가스안전공사 ) 및 벤처기업 인정 ( 인정기관 : 기술보증기금 )',
    descEN: 'Acquired ISO 9001:2008 / KS Q ISO 9001:2009 Quality Management certification and recognized as a technology venture business by KIBO'
  },
  {
    year: '2008',
    titleKR: '기업부설연구소 인정 및 반도체 라인 승인',
    titleEN: 'Corporate R&D Lab Certified & Semiconductor Vendor Registration',
    descKR: '인천광역시 중소기업 기술지도위원 위촉/표창, 기업부설연구소 인정 ( 한국산업기술진흥협회 ), 매그나칩 반도체(주) 반도체라인 센서 및 자동 밸브 승인 및 업체 등록',
    descEN: 'Approved as a corporate R&D lab by KOITA, and registered as an official vendor for Magnachip Semiconductor lines (sensors & automatic valves)'
  },
  {
    year: '2010',
    titleKR: '보일러용 적외선 센서 R-마크 취득',
    titleEN: 'Boiler Infrared Sensor R-Mark Certification',
    descKR: '보일러용 적외선 센서 R-마크 ( 신뢰성 인증서 ) 취득 ( 인증기관 : 한국기계연구원 )',
    descEN: 'Obtained R-Mark reliability certification for boiler infrared sensors from the Korea Institute of Machinery and Materials (KIMM)'
  },
  {
    year: '2011',
    titleKR: '보일러용 온도센서 R-마크 취득 및 법인 설립',
    titleEN: 'Boiler Temp Sensor R-Mark & Corporate Incorporation',
    descKR: '보일러용 온도센서 R-마크 ( 신뢰성 인증서 ) 취득 ( 인증기관 : 한국기계연구원 ), 센서나인(주) 법인 설립',
    descEN: 'Acquired R-Mark reliability certification for boiler temperature sensors from KIMM and officially incorporated as SENSOR NINE Co., Ltd.'
  },
  {
    year: '2013',
    titleKR: '사업장 확장 이전 (부천)',
    titleEN: 'Headquarters expansion & Relocation to Bucheon',
    descKR: '사업장 확장 이전 ( 경기도 부천 소재 )',
    descEN: 'Relocated and expanded administrative and production facility to Bucheon, Gyeonggi-do'
  },
  {
    year: '2014',
    titleKR: '적외선 센서 CE인증 및 자동유량 국책과제 완료',
    titleEN: 'CE Certification & National R&D Project Success',
    descKR: '적외선 센서 CE인증 취득, 국책과제 구매조건부 신제품 개발사업 선정 및 개발 완료 ( 자동유량 조절 밸브 )',
    descEN: 'Acquired CE Mark certification for infrared sensors, and successfully finished national R&D development for automatic flow control valves'
  },
  {
    year: '2015',
    titleKR: '사업장 확장 이전 (인천 서구)',
    titleEN: 'Facility Expansion & Relocation to Incheon',
    descKR: '사업장 확장 이전 (인천광역시 서구 백범로 782)',
    descEN: 'Expanded and relocated headquarters to 782 Baegbeom-ro, Seo-gu, Incheon to enhance mass production'
  },
  {
    year: '2018',
    titleKR: 'CE 인증 획득 (적외선 센서, 점화트랜스)',
    titleEN: 'CE Certification (Infrared Sensor, Ignition Transformer)',
    descKR: '적외선 센서 및 점화트랜스 품목 CE 인증 획득',
    descEN: 'Acquired CE Mark certification for infrared sensors and ignition transformers'
  },
  {
    year: '2021',
    titleKR: '소재·부품·장비 전문기업 인증',
    titleEN: 'Material, Parts & Equipment Specialist Certification',
    descKR: '산업통상자원부 지정 소재·부품·장비 전문기업 인증 획득',
    descEN: 'Designated as a specialized business for materials, parts, and equipment'
  },
  {
    year: '2022',
    titleKR: '기술혁신형 중소기업(INNO-BIZ) 인증',
    titleEN: 'INNO-BIZ Technology Innovation Certification',
    descKR: '중소벤처기업부 인증 기술혁신형 중소기업(INNO-BIZ) 인증 획득',
    descEN: 'Acquired INNO-BIZ certification for technology innovation'
  }
];

export const INITIAL_INQUIRIES: Inquiry[] = [
  {
    id: 'inq-1',
    name: '홍길동',
    email: 'hong@korea-semicon.co.kr',
    phone: '010-1234-5678',
    subject: 'SN-NTC-B01 초소형 글래스 센서 대량 납품 및 커스텀 프로브 가능 여부',
    message: '안녕하세요, 반도체 웨이퍼 세정기 노즐부에 매끄럽게 삽입할 SUS316L 커스텀 프로브 가공을 원합니다. 연간 백만 개 단위 조달 일정 조율 가능한지 해외영업 담당자님의 답신 부탁드립니다.',
    date: '2026-05-20',
    status: 'pending'
  }
];

export const EQUIPMENT_LIST: EquipmentSpec[] = [
  // =========================================================================
  // [장비 보유 현황 이미지 수정 안내]
  // 각 장비 객체 아래에 `imageUrl: '이미지경로'`를 입력하여 이미지를 설정할 수 있습니다.
  // 예시: imageUrl: 'https://okces100-hash.github.io/my-media/equipment/my-eq-1.jpg' 기입 시 해당 이미지가 출력됩니다.
  // 기본적으로 비워두거나 생략하면 "보유 장비 실물 사진 준비중" 안내 카드가 표시됩니다.
  // =========================================================================
  {
    id: 'eq-1',
    nameKR: '스코프코더 SL1400',
    nameEN: 'Scopecorder SL1400',
    model: 'Yokogawa-SL1400',
    specKR: '16채널 고속 동시 계측 스캐너 보드 탑재',
    specEN: '16ch high-speed simultaneous wave acquisition system',
    descKR: '온도 측정 분석 시 시간에 따른 파면 수축 데이터 및 센서 저항 과도 상태의 주파수 반응 특성을 추적 분석하는 초고속 멀티 데이터 저장용 특수 계측 장비입니다.',
    descEN: 'Metrology instrument scanning transient resistance state dynamic responses and recording high-speed temperature drift graphics over microsecond fractions.',
    count: 1,
    categoryKR: '계측/분석',
    categoryEN: 'Measurement Scanner',
    imageUrl: 'https://okces100-hash.github.io/my-media/sensor_products_i4.jpg', // ◀ [장비 이미지 경로 수정]: 여기에 이미지 주소(예: 'https://okces100-hash.github.io/my-media/equipment/eq-1.png')를 입력하세요.
  },
  {
    id: 'eq-2',
    nameKR: '전자저울식 비중계',
    nameEN: 'Electronic Densimeter',
    model: 'Alfa-Mirage-SD-200L',
    specKR: '0.001g/cm³ 단위 비중 정밀 해상도 보장',
    specEN: '0.001g/cm³ specific gravity measurement capability',
    descKR: 'NTC 세라믹 원재료 혼합 제조 시, 소결 결과물의 미세 밀도 차이를 수중 비수조 및 소모 질량 정밀 측정을 통해 완벽 판단하여 소자 고순도를 추적하는 검사 설비입니다.',
    descEN: 'Inspects active density variances of high-purity sintered NTC ceramic blocks through precision water-immersion logic and precise micro-weight analyzers.',
    count: 1,
    categoryKR: '검사 설비',
    categoryEN: 'Density Verification',
    imageUrl: 'https://okces100-hash.github.io/my-media/sensor_products_i5.jpg', // ◀ [장비 이미지 경로 수정]: 여기에 이미지 주소를 입력하세요.
  },
  {
    id: 'eq-3',
    nameKR: '수압테스트 펌프',
    nameEN: 'Hydraulic Test Pump',
    model: 'Kyowa-T50-Pro',
    specKR: '작동 압력 최고 150 bar 미세 압력 가동',
    specEN: 'Maximum testing pressure 150 bar customizable calibration',
    descKR: '이중 피팅 파이프 삽입형 프로브 제품군을 출하하기 전 높은 수위 수용 배관에서 가압 하우징 조립체가 누액되지 않고 완벽하게 차폐되는지 실증하는 고압 가습 수압 테스터입니다.',
    descEN: 'Applies rigorous hydrostatic liquid pressure load to pipeline probes prior to final delivery, ensuring robust weld joints without any structural leaks.',
    count: 2,
    categoryKR: '안전성 테스트',
    categoryEN: 'Pressure Leak Testing',
    imageUrl: 'https://okces100-hash.github.io/my-media/sensor_products_i13.jpg', // ◀ [장비 이미지 경로 수정]: 여기에 이미지 주소를 입력하세요.
  },
  {
    id: 'eq-4',
    nameKR: '디지털인디케이터',
    nameEN: 'Digital Multi-Indicator',
    model: 'SN-DI-30X',
    specKR: '5 Digit 고해상도 LED 스캔 출력 / 4-20mA 보정',
    specEN: '5 Digit LED Indicator board / 4-20mA smart transmitters',
    descKR: '온도 저항 센서 신호를 디지털 전류 및 아날로그 값으로 정확하게 수율 시각화하여 교정 작업 기준값 및 상태를 상시 디스플레이하는 정밀 수동 조율식 실시간 수율 지시계 레이어입니다.',
    descEN: 'Extracts physical probe readings into high-visibility digits to assist testing engineers in managing real-time temperature fluctuations under primary references.',
    count: 4,
    categoryKR: '계측 장비',
    categoryEN: 'Real-time Signal Indicator',
    imageUrl: 'https://okces100-hash.github.io/my-media/sensor_products_i14.jpg', // ◀ [장비 이미지 경로 수정]: 여기에 이미지 주소를 입력하세요.
  },
  {
    id: 'eq-5',
    nameKR: '자동주입장치',
    nameEN: 'Automated Injection System',
    model: 'SN-AI-AUTO-V3',
    specKR: '에폭시 미세 토출 오차 ±0.01g 조밀 설계',
    specEN: 'Epoxy resin injection accuracy within ±0.01g deviation factor',
    descKR: 'SUS 프로브 마우어 내부 하우징에 균일한 양의 방수 에폭시 충진액을 1회 토출로 일정하게 완전 투핑 자동 주입함으로써, 원통 내부의 절연 신뢰성과 공정 속도를 극대화 해주는 장치입니다.',
    descEN: 'Injects precision-metered volumes of highly conductive insulation epoxy into circular stainless sleeves, providing absolute electrical safety and high assembly yields.',
    count: 1,
    categoryKR: '생산 조립',
    categoryEN: 'Automated Liquid Dispensing',
    imageUrl: 'https://okces100-hash.github.io/my-media/sensor_products_i6.png', // ◀ [장비 이미지 경로 수정]: 여기에 이미지 주소를 입력하세요.
  },
  {
    id: 'eq-6',
    nameKR: '밀폐형 건조기',
    nameEN: 'Sealed Vacuum Drying Oven',
    model: 'SN-CD-80-DRY',
    specKR: '챔버 기밀 내풍 범위 최고 +300°C 보충',
    specEN: 'Chamber temperature control up to +300°C sealed drying',
    descKR: '저항 소자 및 고분자 에폭시 바인더의 완벽한 안정 열경화를 이중 진공 환경에서 완벽 디하이드레이션 기밀 건조하여 신뢰성을 극대화하는 생산 용 단일 대형 가마입니다.',
    descEN: 'Industrial thermal-curing oven that removes trace trapped humidity under vacuum atmosphere, optimizing stability factors for long-reach thermistor packages.',
    count: 2,
    categoryKR: '환경 건조',
    categoryEN: 'Vacuum Baking',
    imageUrl: 'https://okces100-hash.github.io/my-media/sensor_products_i7.jpg', // ◀ [장비 이미지 경로 수정]: 여기에 이미지 주소를 입력하세요.
  },
  {
    id: 'eq-7',
    nameKR: '오픈형 건조기',
    nameEN: 'Open-Air Convection Dryer',
    model: 'SN-OD-150-AIR',
    specKR: '강제 수평 열풍 순환식 / 온도 분포 ±1.5°C',
    specEN: 'Forced horizontal air convection / Uniformity within ±1.5°C',
    descKR: '금속 각인 및 표면 보존 열처리 가공 시 3방향 고속 수평 풍파를 순환 인발 공급하여, 제품 프로브 외피 원자재의 열 뒤틀림 없이 항온을 지속 안정 조율하는 대류 로터 드라이기입니다.',
    descEN: 'Applies continuous horizontal dry heated wind to restore and normalize metal probe tubes after engraving or machining to avoid dimensional bends.',
    count: 2,
    categoryKR: '환경 건조',
    categoryEN: 'Convection Drying',
    imageUrl: 'https://okces100-hash.github.io/my-media/sensor_products_i17.png', // ◀ [장비 이미지 경로 수정]: 여기에 이미지 주소를 입력하세요.
  },
  {
    id: 'eq-8',
    nameKR: '항온수조',
    nameEN: 'Constant Temperature Bath',
    model: 'SN-CW-100-BATH',
    specKR: '수온 안정도 ±0.005°C / ITS-90 소급 기준 수용',
    specEN: 'Fluid stability ±0.005°C complying with national ITS-90 standard',
    descKR: 'NTC 온도 프로브 가동 전 제품의 기준 온도점(예: 0°C, 25°C, 100°C)을 초정밀 항온 유체조 내에서 일치 비교 캘리브레이션 조율 시험을 거치는 원천 캘리브레이션 챔버 수조 시설입니다.',
    descEN: 'Primary calibration oil baths featuring low spatial thermal gradients, critical for obtaining absolute resistance coefficients against primary national metrics.',
    count: 3,
    categoryKR: '교정 설비',
    categoryEN: 'Liquids Calibration Bath',
    imageUrl: 'https://okces100-hash.github.io/my-media/sensor_products_i8.jpg', // ◀ [장비 이미지 경로 수정]: 여기에 이미지 주소를 입력하세요.
  },
  {
    id: 'eq-9',
    nameKR: '초음파융착기',
    nameEN: 'Ultrasonic Plastic Welder',
    model: 'Dukane-SN-3000',
    specKR: '출력 주파수 20kHz / 융착 정밀 압축 조절 오차 10μm',
    specEN: '20kHz ultrasonic yield / fine vertical stroke resolution 10μm',
    descKR: '플라스틱 소자 센서 덮개 및 사출 커플러 케이스를 볼트 조인 없이 기밀 접합하기 위해, 강력한 고출력 미세 초음파 진동 마찰열을 주입 융착 밀봉시키는 조립 핵심 설비입니다.',
    descEN: 'Joins plastic sensor modules and sensor cap joints securely without adhesives through high-speed ultrasonic friction melting, guaranteeing permanent seal integrity.',
    count: 2,
    categoryKR: '생산 조립',
    categoryEN: 'Ultrasonic Plastic Welding',
    imageUrl: 'https://okces100-hash.github.io/my-media/sensor_products_i9.jpg', // ◀ [장비 이미지 경로 수정]: 여기에 이미지 주소를 입력하세요.
  },
  {
    id: 'eq-10',
    nameKR: '진공 믹서 탈포기',
    nameEN: 'Vacuum Mixer & Defoamer',
    model: 'SN-VD-50-SYSTEM',
    specKR: '진공 흡풍 펌프 구동력 -0.098 MPa',
    specEN: 'Vacuum performance up to -0.098 MPa air-extraction rating',
    descKR: '조립 및 주입 공정에 사용되는 액상 원재료(에폭시 또는 실리콘 방수재)의 균일한 혼합(Mixing)과 미세 기포 제거(Defoaming)를 한 번에 해결합니다. 감압 진공 환경에서 원재료 내에 혼입된 미세 기포를 완전히 팽창·융합하여 탈포 배출함과 동시에, 최적의 교반 기술로 재료를 완벽하게 믹싱하여 제품의 절연 성능을 극대화하고 영구 누전을 원천 방지합니다.',
    descEN: 'Seamlessly combines uniform mixing and micro-bubble removal (defoaming) for liquid raw materials (epoxy or silicone waterproofing agents) used in assembly and injection processes. In a reduced-pressure vacuum environment, it fully expands, coalesces, and discharges micro-bubbles trapped in the material while simultaneously achieving perfect agitation. This maximizes the product"s insulation performance and fundamentally prevents permanent electrical leakage.',
    count: 2,
    categoryKR: '생산 조립',
    categoryEN: 'Vacuum Air Extraction',
    imageUrl: 'https://okces100-hash.github.io/my-media/sensor_products_i21.png', // ◀ [장비 이미지 경로 수정]: 여기에 이미지 주소를 입력하세요.
  },
  {
    id: 'eq-11',
    nameKR: '초음파세척기',
    nameEN: 'Ultrasonic Cleaner',
    model: 'SN-UC-120-CLEAN',
    specKR: '다중 초음파 주파수 28kHz/40kHz 듀얼 튜닝',
    specEN: 'Dual-frequency multi modes 28kHz / 40kHz selection',
    descKR: '금속 프로브 표면 가공 중 발생하는 미세 미세 절삭 그리스, 금속 오염 가루 및 이물질을 액츄에이터 공동 현상(Cavitation) 충격파를 유도하여 완전 박질 박리 잔류 불량을 제로화 합니다.',
    descEN: 'Removes trace industrial cutting oils, tooling chips, and micro dust from stainless sleeves utilizing robust dual-frequency micro ultrasonic cavitation blast waves.',
    count: 3,
    categoryKR: '생산 조립',
    categoryEN: 'Micro-Ultrasonic Cleaning',
    imageUrl: 'https://okces100-hash.github.io/my-media/sensor_products_i22.png', // ◀ [장비 이미지 경로 수정]: 여기에 이미지 주소를 입력하세요.
  },
  {
    id: 'eq-12',
    nameKR: '자동절단기',
    nameEN: 'Automatic Tube Cutting Machine',
    model: 'SN-ACM-V2-PRO',
    specKR: '절단 분당 수율 120회 / 가공 정밀도 ±0.2mm',
    specEN: 'Throughput 120 cut/min / length tolerance ±0.2mm',
    descKR: '센서 피복 절연 보호 튜브 및 금속 모세관 케이블 피팅 원형 재료를 미리 설정한 컴퓨터 전산 길이에 맞춰 밀리초 만에 초고속 절단 가공 처리하는 기계입니다.',
    descEN: 'High-speed automated processing unit slicing polymer heat-shrink sleeves and wire jackets precisely based on customized software length presets.',
    count: 1,
    categoryKR: '정밀 가공',
    categoryEN: 'Automated Tube Slicing',
    imageUrl: 'https://okces100-hash.github.io/my-media/sensor_products_i11.jpg', // ◀ [장비 이미지 경로 수정]: 여기에 이미지 주소를 입력하세요.
  },
  {
    id: 'eq-13',
    nameKR: '내전압시험기',
    nameEN: 'Withstand Voltage Tester',
    model: 'Towa-SN-VT-5KV',
    specKR: '출력 내전압 시험 범위 AC/DC 0 to 5,000V',
    specEN: 'Testing voltage output range AC/DC 0 to 5,000 Volts',
    descKR: '생산 조립 완성이 끝난 이중 차폐 센서 조립체가 극한의 산업 전기 충격이나 누전 절연 피로에서 누전 누설 전류가 검출되지 않고 인덕턴스 무결을 유지하는지 5kV 정밀 전압을 인가 판독하는 시험 장비입니다.',
    descEN: 'Subjects finalized high-voltage sensor probes to high-pot electro-volt stress levels up to 5kV to certify total insulation leakage protection parameters.',
    count: 2,
    categoryKR: '안전성 테스트',
    categoryEN: 'High-Pot Insulation Tester',
    imageUrl: '', // ◀ [장비 이미지 경로 수정]: 여기에 이미지 주소를 입력하세요.
  },
  {
    id: 'eq-14',
    nameKR: '클립압착기',
    nameEN: 'Pneumatic Clip Crimper',
    model: 'SN-CC-01-PNEU',
    specKR: '압착 공압 수준 0.5 to 0.8 MPa 유지',
    specEN: 'Pneumatic air pressure load 0.5 to 0.8 MPa calibration',
    descKR: '센서 도선 외피 도체에 단자 커넥터 하네스 핀을 공압 압력의 정확한 한도로 일치 압착 접촉(Crimping) 가공하여, 센서의 단선 및 접속 저항 비대해짐 오작을 영구 차단하는 가열식 프레스 공구입니다.',
    descEN: 'Pneumatically compresses terminal pins and wire harnesses securely to rule out loose wiring connection risks, utilizing consistent high-load pneumatic force.',
    count: 2,
    categoryKR: '정밀 가공',
    categoryEN: 'Pneumatic Connector Crimping',
    imageUrl: '', // ◀ [장비 이미지 경로 수정]: 여기에 이미지 주소를 입력하세요.
  },
  {
    id: 'eq-15',
    nameKR: '글라스 튜브 컷팅기',
    nameEN: 'Glass Tube Capillary Cutter',
    model: 'SN-GC-90-LASER',
    specKR: '석영 및 붕규산 유리 모세관 절단 해상도 ±10μm',
    specEN: 'Quartz and borosilicate glass tube precision capillary cut ±10μm',
    descKR: '초소형 NTC 글래스 센서 소자 조립 시 보호 원재료가 되는 특수 초미세 원형 유리 모세관을 칩핑(Chipping) 미끄럼 크랙 없이 레이저식 접촉 칼날로 일관 마찰 고속 절단해 주는 장치입니다.',
    descEN: 'High-precision micro sliding wheel setup that cleanly shears fragile diagnostic capillary glass protective packages without introducing hair cracks or micro-shatters.',
    count: 1,
    categoryKR: '정밀 가공',
    categoryEN: 'Capillary Glass Cutting',
    imageUrl: '', // ◀ [장비 이미지 경로 수정]: 여기에 이미지 주소를 입력하세요.
  },
  {
    id: 'eq-16',
    nameKR: '항온항습기',
    nameEN: 'Temp & Humidity Dynamic Chamber',
    model: 'SN-TH-250-CHAMBER',
    specKR: '실증 가동 온도 -40°C to +150°C / 상대 습도 20% to 98% RH',
    specEN: 'Operational span -40°C to +150°C / Humidity span 20% to 98% RH',
    descKR: '산업 공조 실생활 가동 환경 하에 침입한 다습하고 더운 상태를 실시간 결속 모사하여, NTC 저항 변화율 및 외피 노화 경향, 방수 실링 내피 팽창을 종합 장기 노출 실증하는 대형 챔버 설비 세트입니다.',
    descEN: 'Simulates demanding environmental climates to track aging, chemical durability, and isolation resistance coefficients of sensors under extreme wet heat stress.',
    count: 2,
    categoryKR: '환경 테스트',
    categoryEN: 'Climatic Stress Chamber',
    imageUrl: '', // ◀ [장비 이미지 경로 수정]: 여기에 이미지 주소를 입력하세요.
  }
];

