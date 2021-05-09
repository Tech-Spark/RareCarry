import bcrypt from 'bcryptjs';
export default {
    users: [
        {
            firstName: 'Nasir',
            lastName:'Uddin',
            email: 'careerit29@gmail.com',
            password: bcrypt.hashSync('Nasa2924', 6),
            isAdmin: true,
            confirmed:false,
            resetLink: '',
        },
        {
            firstName: 'John',
            lastName:'Doe',
            email: 'johnit29@gmail.com',
            password: bcrypt.hashSync('Nasa2924', 6),
            isAdmin: false,
            confirmed:false,
            resetLink: '',
        }
    ],
    // products: [
    //     /*accessories category*/
    //     {   
    //         title: 'Polarized Sunglasses Men Women Driver Shades Male',
    //         name: 'Vintage Sun Glasses Men Spuare Mirror Summer UV400OculoS',
    //         image:[
    //                 '/images/Accessories/acces_p1/sunglass_0.jpg',
    //                 '/images/Accessories/acces_p1/sunglass_1.jpg',
    //                 '/images/Accessories/acces_p1/sunglass_2.jpg',
    //                 '/images/Accessories/acces_p1/sunglass_3.jpg',
    //                 '/images/Accessories/acces_p1/sunglass_4.jpg',    
    //                 ],
    //         color:['black', 'white', 'gray'],
    //         price: 12,
    //         brand: 'DJXFZLO ',
    //         description: {
    //             materiel: `Brand Name: 
    //                 DJXFZLOOrigin: CN(Origin)
    //                 Gender: MEN
    //                 Style: Square Department 
    //                 Name: AdultFrame 
    //                 Material: Polycarbonate
    //                 Certification: NONELenses Optical 
    //                 Attribute: MirrorLenses 
    //                 Optical Attribute: UV400Lenses Optical 
    //                 Attribute: PolarizedEyewear 
    //                 Type: SunglassesLens 
    //                 Height: 47MMLenses 
    //                 Material: PolaroidModel 
    //                 Number: P21Item 
    //                 Type: EyewearLens 
    //                 Width: 52MM
    //                 color: fashion
    //                 `,
    //             details: `A pair of sunglasses can protect your eyes from being hurt
    //             For car driving, vacation travel, outdoor activities, social gatherings, casual fashion.
    //             Delicate frame with a stylish decor, full of flavor, and sketched out the graceful curves.
    //             Comfortable design, can adapt to different nose, reduce the burden, long wear no pressure`,
    //         },
    //         category: {
    //             gender: 'men',
    //             belong: 'accessories',
    //             span: ''
    //         },
    //         countInStock: 5,
    //         rating: 4,
    //         numReviews: 2
    //     },
    //     {   
    //         title: 'Belts men cowskin fashion',
    //         name: 'Men high quality genuine leather belt luxury designer belts',
    //         image:[
    //                 '/images/Accessories/acces_p2/ltbelt_0.jpg',
    //                 '/images/Accessories/acces_p2/ltbelt_1.jpg',
    //                 '/images/Accessories/acces_p2/ltbelt_2.jpg',
    //                 '/images/Accessories/acces_p2/ltbelt_3.jpg',
    //                 '/images/Accessories/acces_p2/ltbelt_4.jpg',   
    //         ],
    //         color:['black', 'white', 'gray'],
    //         price: 13,
    //         brand: 'CCOOLERFIRE ',
    //         description: {
    //             materiel: `Brand Name: CCOOLERFIREDepartment Name: AdultBelts Material: CowskinOrigin: CN(Origin)Gender: MENBelt Width: 3.7cmStyle: FashionPattern Type: SolidBuckle Length: 6cmModel Number: HQ036Item Type: BeltsBuckle Width: 5.3cmColor: Black leather beltColor 1: Brown leather beltLength: 120cm,125cm,130cm,135cm
    //                 `,
    //             details: `This is a high quality cow genuine leather belt.The surface is coating for protection,and the body is natural super cow leather.The buckle is made of exclusive zinc alloy with plating process.It is a good choice for all matching and a nice gift for your friends and family!`,
    //         },
    //         category: {
    //             gender: 'men',
    //             belong: 'accessories',
    //             span: ''
    //         },
    //         countInStock: 6,
    //         rating: 4.5,
    //         numReviews: 1
    //     },
    //     {   
    //         title: 'Fashion Women Smart Watch 2021',
    //         name: 'Round Screen Smartwatch for Woman',
    //         image:[
    //                 '/images/Accessories/acces_p3/wwach_0.jpg',
    //                 '/images/Accessories/acces_p3/wwach_1.jpg',
    //                 '/images/Accessories/acces_p3/wwach_2.jpg',
    //                 '/images/Accessories/acces_p3/wwach_3.jpg',
    //                 '/images/Accessories/acces_p3/wwach_4.jpg',
                    
    //         ],
    //         color:[],
    //         price: 32,
    //         brand: 'Melanda ',
    //         description: {
    //             materiel: `Super Slim Fashion Women Smart Watch 2021 Full Touch Round Screen Smartwatch for Woman Heart Rate Monitor For Android and IOS
    //             Brand Name: MelandaMechanism: YesOrigin: CN(Origin)SIM Card Available: NoSystem: Android WearGPS: NoType: On WristCompatibility: All CompatibleROM: 128MBFunction: PassometerFunction: Fitness TrackerFunction: Sleep TrackerFunction: Message ReminderFunction: Call ReminderFunction: Push MessageFunction: 24 hour instructionFunction: ChronographFunction: Alarm ClockFunction: WeekFunction: Heart Rate TrackerRear Camera: None
    //                 `,
    //             details: `Descriptions:
    //             * Compatible system: Android 4.4 and above, IOS 8.2 or above
    //             * Screen:1.1inch round touch screen IPS 240*240 colorful
    //             * Battery:150 mAh
    //             * Charging time: about 1.5H
    //             * Working Time:1-3 days,standby 7 days or so
    //             * Waterproof rating:IP67 waterproof
    //             * APP and Message language support: Chinese, traditional Chinese, English, Korean, Japanese, German, Spanish, French, Italian, Portuguese, Arabic, Russian, Dutch,  polish, Turkish, Indonesian
    //             Features:
    //             * real-time dynamic heart rate, call reminder, information reminder push, exercise record (step counting, mileage, etc.), sleep monitoring, sedentary reminder, calorie calculation, stopwatch, bright screen with hands raised, ultra low power consumption, blood pressure , Blood oxygen, Multi motion modes, smart alarm, multi-dial switch,Game,Raise to wake,Dial Market,Custom dial,Time,reject a call on the
    //             smart watch,OTA
    //             * Reminder function: incoming call, SMS, QQ, WeChat reminder (display content and name). Facebook, Whatsapp, Twitter, Skype, and other software reminders, alarm clocks ,sedentary reminders.`,
    //         },
    //         category: {
    //             gender: 'women',
    //             belong: 'accessories',
    //             span: ''
    //         },
    //         countInStock: 5,
    //         rating: 2,
    //         numReviews: 1
    //     },
    //     {   
    //         title: 'For Kids With Sim Card Photo Waterproof IP67 Kids',
    //         name: 'Childrens Smart Watch SOS Phone Watch Smartwatch ',
    //         image:[
    //                 '/images/Accessories/acces_p4/chwach_0.jpg',
    //                 '/images/Accessories/acces_p4/chwach_1.jpg',
    //                 '/images/Accessories/acces_p4/chwach_2.jpg',
    //                 '/images/Accessories/acces_p4/chwach_3.jpg',
    //                 '/images/Accessories/acces_p4/chwach_4.jpg',
                    
    //         ],
    //         color:['black', 'white', 'gray'],
    //         price: 20,
    //         brand: 'Lempo',
    //         description: {
    //             materiel: `Cleverly designed so that children have more fun and parents can monitor their children without notice.
 
    //             SOS Call,Remote monitoring 
    //             Voice micro chat
    //             Low radiation
    //             Eye protection color screen
    //             LBS base station positioning, Beidou positioning (no GPS positioning)
    //             Package Included:
    //             1*Smart Watch
    //             1*USB Cable
    //             1*User Manual
    //                 `,
    //         details: `eatures:
    //             1.Functions: clear call / precise positioning / long battery life / ultra-thin body / cool wear
    //             2. 14.1mm ultra-thin process design, just as thin as the homework
    //             The color of the whole machine is gorgeous and rich in texture, always let other children envy.
    //             3.Two-way clear and stable call
    //             The sound is louder and can be heard in noisy environments.
    //             Unique antenna design, multiple calibrations to ensure a stable call
    //             4.Voice chat, making communication more convenient
    //             Simpler operation and clearer voice
    //             Easy group chat, support group chat with multiple mobile phones
    //             5.Precise positioning, real-time viewing
    //             Accurately record every corner of the child, fully meet the positioning needs of life and emergency situations
    //             6.Electronic fence, always guard the safety of children
    //             Set the child's activity range, when the child leaves the set area, the parent mobile phone will receive an alarm prompt.
    //             Preventing loss, preventing access to dangerous areas, preventing getting lost
    //             7.High-performance battery, longer standby time
    //             With high-polymerized custom
    //             battery, it features charging faster, higher performance, longer time
    //             than the same power, eliminating the trouble of charging every day.
    //             8.Fun game: Let the children get happiness from the game and grow up in happiness.
    //             Specification:
    //             Chip: PDA8955
    //             Battery capacity: 400mAh
    //             Charging time: 2H
    //             Display resolution: 128*128
    //             Display size: 1.44
    //             Color: Princess Powder, Knight Blue
    //             Radiation: lower than mobile phones, international standards, no impact on the human body
    //             Applicable age: 3-12 years old
    //             Positioning method: precise positioning + base station positioning
    //              `,
    //         },
    //         category: {
    //             gender: 'kids',
    //             belong: 'accessories',
    //             span: ''
    //         },
    //         countInStock: 1,
    //         rating: 3,
    //         numReviews: 2
    //     },
    //     {   
    //         title: 'Blue Oval Crystal Zircon Stones Luxury Women Rings Jewelry',
    //         name: 'Huitan New Design Noble Elegant Lady Finger Ring',
    //         image:[
    //                 '/images/Accessories/acces_p5/jwring_0.jpg',
    //                 '/images/Accessories/acces_p5/jwring_1.jpg',
    //                 '/images/Accessories/acces_p5/jwring_2.jpg',
    //                 '/images/Accessories/acces_p5/jwring_3.jpg',
    //                 '/images/Accessories/acces_p5/jwring_4.jpg',
                    
    //         ],
    //         color:['black', 'white', 'gray'],
    //         price: 9,
    //         brand: 'kozy',
    //         description: {
    //         materiel: `PRODUCT INFORMATION
    //             BRAND: HUITAN
    //             MODEL NUMBER: F352
    //             Material: Brass, Cubic Zirconia
    //             SIZE: #6 7 8 9 10;
    //             Weight: About 6.1g
    //             CONDITION: 100% Brand-new excellent craft
    //             PACKAGE CONTENT: 1pc ring, opp bag
    //             `,
    //         details: `Origin: CN(Origin)Metals Type: BrassGender: WomenMaterial: Cubic ZirconiaStyle: ClassicRings Type: Wedding BandsShape\pattern: GEOMETRICCompatibility: All CompatibleModel Number: F352Setting Type: Prong Setting`,
    //         },
    //         category: {
    //             gender: 'women',
    //             belong: 'accessories',
    //             span: ''
    //         },
    //         countInStock: 3,
    //         rating: 1,
    //         numReviews: 0
    //     },
    //     {   
    //         title: 'ashion Butterfly chain iced out cuban link chain ',
    //         name: 'butterfly necklace womens 2020',
    //         image:[
    //                 '/images/Accessories/acces_p6/neck_0.jpg',
    //                 '/images/Accessories/acces_p6/neck_1.jpg',
    //                 '/images/Accessories/acces_p6/neck_2.jpg',
    //                 '/images/Accessories/acces_p6/neck_3.jpg',
    //                 '/images/Accessories/acces_p6/neck_4.jpg',
                    
    //         ],
    //         color:['black', 'white', 'gray'],
    //         price: 45,
    //         brand: 'FNQUFUJMetals',
    //         description: {
    //             materiel: `Brand Name: FNQUFUJMetals Type: zinc AlloyGender: WomenNecklace Type: Chokers NecklacesOrigin: CN(Origin)Style: TRENDYChain Type: Link ChainItem Type: NecklacesMaterial: RhinestoneShape\pattern: AnimalCompatibility: All CompatibleOccasion: PartyFine or Fashion: FashionModel Number: chain on the neck
    //                 `,
    //             details: `Product description
    //             Package incluedes: 1 pcs cuban chain necklace
    //             Special production process:the Chain was been seal by oil to isolate oxygen
    //             so they never lose color quickly, you can use it for a long time `,
    //             },
    //         category: {
    //             gender: 'women',
    //             belong: 'accessories',
    //             span: ''
    //             },
    //         countInStock: 3,
    //         rating: 2.5,
    //         numReviews: 0
    //     },
    //     {   
    //         title: 'Cards Case Wallet for Credit ID Bank Card',
    //         name: 'Men Credit Card Holder Leather',
    //         image:[
    //                 '/images/Accessories/acces_p7/crdhold_0.jpg',
    //                 '/images/Accessories/acces_p7/crdhold_1.jpg',
    //                 '/images/Accessories/acces_p7/crdhold_2.jpg',
    //                 '/images/Accessories/acces_p7/crdhold_3.jpg',
    //                 '/images/Accessories/acces_p7/crdhold_4.jpg',   
    //         ],
    //         color:['black', 'white', 'gray'],
    //         price: 8,
    //         brand: 'DJX',
    //         description: {
    //             materiel: `Main Material: PUGender: MENOrigin: CN(Origin)Pattern Type: SolidItem Width: 7cmModel Number: credit card holderItem Length: 11.5cmClosure Type: HaspStyle: FashionShape: BoxItem Weight: 60gUse: Credit CardMaterial Composition: PU
    //                 `,
    //             details: `Men Credit Card Holder Leather Purse for Cards Case Wallet for Credit ID Bank Card Holder Women Cardholder pasjeshouder mannen`,
    //         },
    //         category: {
    //             gender: 'men',
    //             belong: 'accessories',
    //             span: ''
    //         },
    //         countInStock: 3,
    //         rating: 4.5,
    //         numReviews: 5
    //     },
    //     /* New arrival category*/
    //     {   
    //         title: 'Waterproof Outdoor Sport Hiking Camping Hunting 3D Rucksack Bags For Men',
    //         name: '50L Capacity Men Army Military Tactical Large Backpack',
    //         image:[
    //                 '/images/News/nw_p1/bag_0.jpg',
    //                 '/images/News/nw_p1/bag_1.jpg',
    //                 '/images/News/nw_p1/bag_2.jpg',
    //                 '/images/News/nw_p1/bag_3.jpg',
    //                 '/images/News/nw_p1/bag_4.jpg',   
    //         ],
    //         color:['black', 'white', 'gray'],
    //         price:39,
    //         brand: 'DEDOMON',
    //         description: {
    //             materiel: `Brand Name: DEDOMONOrigin: CN(Origin)Rain Cover: NoModel Number: D3204Gender: UnisexFunction: traveling, climbing, camping, hikingBackpacks Type: SoftbackMaterial: OtherFunction: traveling, climbing, camping, hikingMaterial: PolyesterCapacity: 36-55LFeatures: Water Resistant/Durable/Comfortable/Thickened
    //                 `,
    //             details: `50L Capacity Men Army Military Tactical Large Backpack Waterproof Outdoor Sport Hiking Camping Hunting 3D Rucksack Bags For Men`,
    //         },
    //         category: {
    //             gender: 'men',
    //             belong: 'new',
    //             span: ''
    //         },
    //         countInStock: 1,
    //         rating: 3.5,
    //         numReviews: 0
    //     },
    //     {   
    //         title: 'Smartwatch Women Watch Sport',
    //         name: '2021 Bluetooth Smart Watch Men',
    //         image:[
    //                 '/images/News/nw_p2/uniw_0.jpg',
    //                 '/images/News/nw_p2/uniw_1.jpg',
    //                 '/images/News/nw_p2/uniw_2.jpg',
    //                 '/images/News/nw_p2/uniw_3.jpg',
    //                 '/images/News/nw_p2/uniw_4.jpg',   
    //         ],
    //         color:['black', 'white', 'gray'],
    //         price:22,
    //         brand: 'Rovtop',
    //         description: {
    //             materiel: `2021 Bluetooth Smart Watch Men Blood Pressure Smartwatch Women Watch Sport Tracker WhatsApp For Android IOS Smart Clock
    //                 `,
    //             details: `Brand Name: RovtopMechanism: NoOrigin: CN(Origin)SIM Card Available: NoSystem: NoneGPS: NoType: On WristCompatibility: All CompatibleROM: 128MBFunction: PassometerFunction: Fitness TrackerFunction: Sleep TrackerFunction: Message ReminderFunction: Call ReminderFunction: Remote ControlFunction: Push MessageFunction: Alarm ClockFunction: Heart Rate TrackerRear Camera: NoneLanguage: englishRAM: 128MBWaterproof Grade: Not WaterproofMultiple Dials: NoCertification: NONEBattery Capacity: 120mAhNetwork Mode: NoneStyle: SPORTMovement Type: ElectronicScreen Shape: ROUNDAPP Download Available: NoCase Material: PlasticBand Material: Silica GelApplication Age Group: AdultBattery Detachable: NoBand Detachable: Yes`,
    //         },
    //         category: {
    //             gender: 'men',
    //             belong: 'new',
    //             span: ''
    //         },
    //         countInStock: 4,
    //         rating: 1.5,
    //         numReviews: 1
    //     },
    //     {   
    //         title: 'Design Mirror Fashion Square Ladies Sunglasses Men',
    //         name: 'New Fashion Guys Sun Glasses Polarized Sunglasses Men ',
    //         image:[
    //                 '/images/News/nw_p3/kingl_0.jpg',
    //                 '/images/News/nw_p3/kingl_1.jpg',
    //                 '/images/News/nw_p3/kingl_2.jpg',
    //                 '/images/News/nw_p3/kingl_3.jpg',
    //                 '/images/News/nw_p3/kingl_4.jpg',   
    //         ],
    //         color:['black', 'white', 'gray'],
    //         price:22,
    //         brand: 'cmaos',
    //         description: {
    //             materiel: `Brand Name: cmaosOrigin: CN(Origin)Gender: MENStyle: RectangleDepartment Name: AdultFrame Material: PolycarbonateCertification: CECertification: FDALenses Optical Attribute: PolarizedLenses Optical Attribute: MirrorLenses Optical Attribute: Anti-reflectiveLenses Optical Attribute: UV400Eyewear Type: SunglassesLens Height: 50 mmLenses Material: PolaroidModel Number: P731Item Type: EyewearLens Width: 55 mm
    //                 `,
    //             details: `2020 New Fashion Guy's Sun Glasses Polarized Sunglasses Men Classic Design Mirror Fashion Square Ladies Sunglasses Men`,
    //         },
    //         category: {
    //             gender: 'men',
    //             belong: 'new',
    //             span: ''
    //         },
    //         countInStock: 2,
    //         rating: 13.5,
    //         numReviews: 0
    //     },
    //     {   
    //         title: 'Wireless CCTV Camera 1080P HD Motion Detect ICSee Security Wifi Camera IP',
    //         name: 'MP IP Camera Wifi Outdoor IR Night Vision ONVIF ',
    //         image:[
    //                 '/images/News/nw_p4/schd_0.jpg',
    //                 '/images/News/nw_p4/schd_1.jpg',
    //                 '/images/News/nw_p4/schd_2.jpg',
    //                 '/images/News/nw_p4/schd_3.jpg',
    //                 '/images/News/nw_p4/schd_4.jpg',   
    //         ],
    //         color:['black', 'white', 'gray'],
    //         price:22,
    //         brand: 'BESDER',
    //         description: {
    //             materiel: `Brand Name: BESDERType: ip cameraSupported Operating Systems: windows 8Supported Operating Systems: Windows 7Supported Operating Systems: windows xpHigh Definition: 5.0 MegapixelsLens (mm): 3.6mmLens (mm): 6mmLens (mm): 2.8mmStyle: Bullet CameraCertification: CEConnectivity: IP/Network WirelessOrigin: CN(Origin)Installation: SideWall Bracket: SidePower Consumption(W): 6WColor: BlackMinimum Illumination(Lux): Color : 0.1Lux ;B/W:0.01LuxSensor: CMOSMegapixels: 5MPSpecial Features: Waterproof / WeatherproofStorage: 64GAlarm Action: Email PhotoAlarm Action: Local AlarmVideo Compression Format: H.264Power Supply: NormalTF Card: NoneIR Distance(m): 20 Meteris_customized: YesPower Supply(V): DC 12VModel Number: BES-6024PB-XM501AWViewing Angle : 75°Technology: InfraredDimensions (L x W x D)(mm): 185*60*60mmSupported Mobile Systems: Windows MobileSupported Mobile Systems: AndroidSupported Mobile Systems: iosNetwork Interface: Wi-Fi/802.11/bgAudio Output: NoneTF Card Storage Support: Yes ( Max 64G )Audio Recording: SupportPhone App: iCSee or XMEYE APPWireless protocols: 2.4Ghz 802.11b 150Mbps, 30-60mIR LED: 24pcs IR LED With 20M IR DistanceONVIF: Yes( Support Third Party NVR )Power Supply: DC12V1A IncludedColor: BlackTechnology: Support ONVIF ,P2P & WiFi&WiredOur Advantage: With Audio Camera, Record SoundTemperature Supporting: -30 degree to 60 degreeUsage: Outdoor/IndoorStyle: Bullet CameraDay Night Vision: IR cut filter with auto switchResolution: 2MP 5MPworking temperature: -15degree to 65 degree
    //                 `,
    //             details: `Camera Features: 
    //             Wifi camera: Support remote viewing on mobile devices. for iPhone Android supported.
    //             Lens : 2.8mm or 3.6mm, 6mm for choice.
    //             Color: black
    //             Support Audio Recording ; 
    //             Support Smart playback available everywhere everytime by app iCSee You should buy SD card ,then it can support playback
    //             Recording: with micro sd card solt (micro SD card max 64GB , SD Card for optional)
    //             Motion Detection: Support motion detection.
    //             mini & portable: Watch real-time video from anywhere, anytime!
    //             Built-in Wifi: Connect camera directely within 10m when no wifi.AP and WiFi 2 mode.
    //             Package Include: 
    //             - One Camera 
    //             - User Manual 
    //             - DC12V 1A Power adapter
    //             - Screw set
    //             - Waterproof Cover
    //             Power Adapter is Included  32G 64G SD card for Optional`,
    //         },
    //         category: {
    //             gender: '',
    //             belong: 'new',
    //             span: ''
    //         },
    //         countInStock: 3,
    //         rating: 1.5,
    //         numReviews: 0
    //     },
    //     {   
    //         title: 'In Ear Handsfree Earphones Ear Buds For Mobile Phone',
    //         name: 'New TWS Bluetooth Headphones Stereo True Wireless Headphone Earbuds',
    //         image:[
    //                 '/images/News/nw_p5/erbn_0.jpg',
    //                 '/images/News/nw_p5/erbn_1.jpg',
    //                 '/images/News/nw_p5/erbn_2.jpg',
    //                 '/images/News/nw_p5/erbn_3.jpg',
    //                 '/images/News/nw_p5/erbn_4.jpg',   
    //         ],
    //         color:['black', 'white', 'gray'],
    //         price:22,
    //         brand: 'CTMOGOVE',
    //         description: {
    //             materiel: `Brand Name: CTMOGOVEStyle: In-EarCertification: CEVocalism Principle: DynamicOrigin: CN(Origin)Control Button: NoActive Noise-Cancellation: NoCommunication: WirelessVolume Control: YesWireless Type: bluetoothIs wireless: YesSupport APP: YesFunction: For Mobile PhoneFunction: SportPlug Type: NONEPackage List: ChargerImpedance Range: over 100 ΩConnectors: NoneModel Number: J18
    //                 `,
    //             details: `Feature:
    //             * HD Audio: SBC
    //             * Bluetooth Version: Bluetooth 5.0
    //             * Bluetooth Distance: 10M
    //             * Earphone Charge Time: 1.5 Hours
    //             * Charging Box Charge Time: 1.5 Hours
    //             * Touch Control
    //             * Support Smart Noise Cancelling
    //             * Qualcomm apt-X HiFi Sound
                 
    //             Touch Control Methods:
    //             * Power ON/OFF: Long-Touch 5 Seconds
    //             * Answer/Hang-up Call: Left/Right Earbuds Touch 1 Time
    //             * Reject Call: Long-Touch 2 Seconds
    //             * Play/Pause Music: Left/Right Earbuds Touch 1 Time
    //             * Volume +: Right Earbuds Touch 2 Times
    //             * Volume -: Legt Earbuds Touch 2 Times
    //             * Previous Song: Right Earbuds Long-Touch 3 Times
    //             * Next Song: Left Earbuds Long-Touch 3 Times
    //             * Voice Assistant/Siri: Left/Right Earbuds Long-Touch 3 Seconds
    //             `,
    //         },
    //         category: {
    //             gender: '',
    //             belong: 'new',
    //             span: ''
    //         },
    //         countInStock: 4,
    //         rating: 3.5,
    //         numReviews: 0
    //     },
    //     /*cosmetics items category*/
    //     {   
    //         title: 'LOVE NATURE (500ml)',
    //         name: 'Love Nature conditioner for colored hair with pomegranate and oats',
    //         image:[
    //                 '/images/Cosmetics/cos_p1/shmp_0.jpeg',
    //                 '/images/Cosmetics/cos_p1/shmp_1.jpeg',
    //                 // '/images/Cosmetics/cos_p1/erbn_2.jpg',
    //                 // '/images/Cosmetics/cos_p1/erbn_3.jpg',
    //                 // '/images/Cosmetics/cos_p1/erbn_4.jpg',   
    //         ],
    //         color:[],
    //         price:5,
    //         brand: 'ORIFLAME',
    //         description: {
    //             materiel: `AQUA, Sodium Laureth Sulfate, Cocamidopropyl betaine, Glycerin, DISODIUM PHOSPHATE, salicylic acid, PERFUME, Imidazolidinyl Urea, Hydroxypropyltrimonium Honey SODIUM Lauroyl SARCOSINATE, PEG-150 PENTAERYTHRITYL TETRASTEARATE, DISODIUM EDTA, PEG-6 Caprylic / Capric Glycerides, Melaleuca alternifolia LEAF OIL , SODIUM HYDROXIDE, SORBIC ACID, ARCTIUM LAPPA ROOT EXTRACT, PHENOXYETHANOL, POTASSIUM SORBATE, SODIUM BENZOATE, CI 16035, CI 60730
    //                 `,
    //             details: `Burdock shampoo effectively removes dandruff, perfectly cleanses the hair and scalp, leaving a pleasant, fresh scent. It does not contain silicones. Biodegradable. 500 ml.
    //             `,
    //         },
    //         category: {
    //             gender: 'women',
    //             belong: 'cosmetics',
    //             span: ''
    //         },
    //         countInStock: 2,
    //         rating: 2,
    //         numReviews: 0
    //     },
    //     {   
    //         title: 'North For Men(100g)',
    //         name: 'North For Men Subzero soap',
    //         image:[
    //                 '/images/Cosmetics/cos_p2/spm_0.jpeg',
    //                 '/images/Cosmetics/cos_p2/spm_1.jpeg',
    //                 // '/images/Cosmetics/cos_p1/erbn_2.jpg',
    //                 // '/images/Cosmetics/cos_p1/erbn_3.jpg',
    //                 // '/images/Cosmetics/cos_p1/erbn_4.jpg',   
    //         ],
    //         color:[],
    //         price:2.50,
    //         brand: 'ORIFLAME',
    //         description: {
    //             materiel: `SODIUM PALMATE, SODIUM PALM KERNELATE, AQUA, GLYCERIN, PARFUM, MENTHOL, PALM ACID, SODIUM CHLORIDE, PALM KERNEL ACID, TETRASODIUM EDTA, TETRASODIUM ETIDRONATE, HELIANTHUS ANNUUS SEED OIL, ROCOTIUM EXTRA LAPA GLUCONATE, PHENOXYETHANOL, COPPER GLUCONATE, POTASSIUM SORBATE, SODIUM BENZOATE, CI 77499, CI 74160, CI 74260
    //                 `,
    //             details: `A soap with unique arctic ingredients and electrolytes for a pleasant feeling of coolness. It perfectly cleanses and refreshes the skin. With Arctic Pro Defense technology, enriched with burdock root and menthol. Dermatologically tested, clinically developed for men.
    //             `,
    //         },
    //         category: {
    //             gender: 'men',
    //             belong: 'cosmetics',
    //             span: ''
    //         },
    //         countInStock: 2,
    //         rating: 2,
    //         numReviews: 0
    //     },
    //     {   
    //         title: 'Discover New Zealand Journey(250ml)',
    //         name: 'shower gel for men',
    //         image:[
    //                 '/images/Cosmetics/cos_p3/swrg_0.jpeg',
    //                 // '/images/Cosmetics/cos_p2/spm_1.jpg',
    //                 // '/images/Cosmetics/cos_p1/erbn_2.jpg',
    //                 // '/images/Cosmetics/cos_p1/erbn_3.jpg',
    //                 // '/images/Cosmetics/cos_p1/erbn_4.jpg',   
    //         ],
    //         color:[],
    //         price:5.50,
    //         brand: 'ORIFLAME',
    //         description: {
    //             materiel: `AQUA, SODIUM LAURETH SULFATE, COCAMIDOPROPYL BETAINE, SODIUM CHLORIDE, LAURETH-3, PARFUM, PEG-7 GLYCERYL COCOATE, SODIUM BENZOATE, CITRIC ACID, DMDM ​​HYDANTOIN, BENZOPHENONE-4, HEXYLATE, SODIUM SODIUM, CINNAMAL90 , CI 17200
    //                 `,
    //             details: `Designed for men, inspired by the calm mountain lakes and beaches of New Zealand, a shower gel with a pleasant aquatic and citrus scent. Does not contain soap. Balanced pH.
    //             `,
    //         },
    //         category: {
    //             gender: '',
    //             belong: 'cosmetics',
    //             span: ''
    //         },
    //         countInStock: 2,
    //         rating: 2,
    //         numReviews: 0
    //     },
    //     {   
    //         title: 'LOVELY GARDEN(50ml)',
    //         name: 'My Little Garden Eau de Toilette',
    //         image:[
    //                 '/images/Cosmetics/cos_p4/pf_0.jpeg',
    //                 '/images/Cosmetics/cos_p4/pf_1.jpeg',
    //                 // '/images/Cosmetics/cos_p1/erbn_2.jpg',
    //                 // '/images/Cosmetics/cos_p1/erbn_3.jpg',
    //                 // '/images/Cosmetics/cos_p1/erbn_4.jpg',   
    //         ],
    //         color:[],
    //         price:12.50,
    //         brand: 'ORIFLAME',
    //         description: {
    //             materiel: `ALCOHOL DENAT., AQUA, PARFUM, LIMONENE, BUTYLPHENYL METHYLPROPIONAL, BUTYL METHOXYDIBENZOYLMETHANE, CITRONELLOL, HYDROXYCITRONELLAL, GERANIOL, CITRAL, LINALOOL, EUGENOL, PHOL140 CIOL140, CIOL140 CIETHAN 19
    //                 `,
    //             details: `Feel that the nervousness of the day disappears ... A modern, floral fragrance with a subtle and fresh, green aroma of basil flowers has the power to soothe your senses and soul and make you feel like in your own, wonderful garden.
    //             `,
    //         },
    //         category: {
    //             gender: 'women',
    //             belong: 'cosmetics',
    //             span: ''
    //         },
    //         countInStock: 3,
    //         rating: 4,
    //         numReviews: 0
    //     },
    //     {   
    //         title: 'GIORDANI MAN(75ml)',
    //         name: 'Giordani Gold Man eau de toilette',
    //         image:[
    //                 '/images/Cosmetics/cos_p5/pfm_0.jpeg',
    //                 // '/images/Cosmetics/cos_p4/pf_1.jpg',
    //                 // '/images/Cosmetics/cos_p1/erbn_2.jpg',
    //                 // '/images/Cosmetics/cos_p1/erbn_3.jpg',
    //                 // '/images/Cosmetics/cos_p1/erbn_4.jpg',   
    //         ],
    //         color:[],
    //         price:10.50,
    //         brand: 'ORIFLAME',
    //         description: {
    //             materiel: `ALCOHOL DENAT., AQUA, PARFUM, LIMONENE, LINALOOL, ALPHA-ISOMETHYL IONONE, EUGENOL, CITRAL, GERANIOL, FARNESOL
    //                 `,
    //             details: `The same unique vetiver aroma, now enclosed in a magnificent bottle. A cult fragrance, perfect for a charismatic man who can appreciate sophisticated little things. The composition illuminated with bergamot, with a pinch of pepper and a sublime, woody note of vetiver.
    //             Beauty Edit
    //             `,
    //         },
    //         category: {
    //             gender: 'men',
    //             belong: 'cosmetics',
    //             span: ''
    //         },
    //         countInStock: 2,
    //         rating: 3,
    //         numReviews: 2
    //     },
    //     {   
    //         title: 'HAND CARE(75ml)',
    //         name: 'Nourishing hand cream with coconut oil',
    //         image:[
    //                 '/images/Cosmetics/cos_p6/hdc_0.jpeg',
    //                 '/images/Cosmetics/cos_p6/hdc_1.jpeg',
    //                 '/images/Cosmetics/cos_p6/hdc_2.jpeg',
    //                 // '/images/Cosmetics/cos_p1/erbn_3.jpg',
    //                 // '/images/Cosmetics/cos_p1/erbn_4.jpg',   
    //         ],
    //         color:[],
    //         price:4.50,
    //         brand: 'ORIFLAME',
    //         description: {
    //             materiel: `AQUA, GLYCERIN, CAPRYLIC / CAPRIC TRIGLYCERIDE, CETYL ALCOHOL, GLYCERYL STEARATE SE, STEARYL ALCOHOL, COCOS NUCIFERA OIL, ETHYLHEXYL STEARATE, CETEARYL ETHYLHEXANOATE, PARFUM, METHYLPARABIN, PROSTYLHEXANOATE, PARFUM, METHYLPARABIN, PROBARIDETYL, ACE, ACE, AC. HEXYL CINNAMAL, ISOPROPYL MYRISTATE, SODIUM HYDROXIDE, COUMARIN, ARACHIDIC ACID, LAURIC ACID, MYRISTIC ACID, CITRONELLOL, POGOSTEMON CABLIN LEAF OIL
    //                 `,
    //             details: `Nourishing hand cream with coconut oil rich in essential fatty acids and vitamins. It helps to retain moisture in the skin, is easily absorbed, restores hands softness and gives them a fresh coconut scent. Perfect for a handbag!
    //             `,
    //         },
    //         category: {
    //             gender: '',
    //             belong: 'cosmetics',
    //             span: ''
    //         },
    //         countInStock: 4,
    //         rating: 2,
    //         numReviews: 1
    //     },
    //     /* Everyday items category*/
    //     {   
    //         title: 'Your Logo Shorts Men Breathabl',
    //         name: 'Underwear men boxer shorts men underwear',
    //         image:[
    //                 '/images/Everyday/evdy_p1/udwm_0.jpg',
    //                 '/images/Everyday/evdy_p1/udwm_1.jpg',
    //                 '/images/Everyday/evdy_p1/udwm_2.jpg', 
    //                 '/images/Everyday/evdy_p1/udwm_3.jpg', 
    //                 '/images/Everyday/evdy_p1/udwm_4.jpg', 
    //         ],
    //         color:[],
    //         price:2.50,
    //         brand: 'WAXX',
    //         description: {
    //             materiel: `Origin: CN(Origin)Obscene Picture: NoSexually Suggestive: NoBriefs & Boxers: Boxer ShortsModel Number: manboxer-1Gender: MENPattern Type: SolidMaterial: CottonMaterial: Modal
    //                 `,
    //             details: `Free Shipping or Discount Shipping Activity Custom Your Logo Shorts Men Breathable Underwear men boxer shorts men underwear
    //             `,
    //         },
    //         category: {
    //             gender: '',
    //             belong: 'everyday',
    //             span: ''
    //         },
    //         countInStock: 5,
    //         rating: 3,
    //         numReviews: 1
    //     },
    //     {   
    //         title: 'Brassiere Push Up Bralette With Pad Vest Top Bra',
    //         name: 'Bras For Women Underwear BH Sexy Lace',
    //         image:[
    //                 '/images/Everyday/evdy_p2/brw_0.jpg',
    //                 '/images/Everyday/evdy_p2/brw_1.jpg',
    //                 '/images/Everyday/evdy_p2/brw_2.jpg', 
    //                 '/images/Everyday/evdy_p2/brw_3.jpg', 
    //                 '/images/Everyday/evdy_p2/brw_4.jpg', 
    //         ],
    //         color:[],
    //         price:5.90,
    //         brand: 'GGFCD',
    //         description: {
    //             materiel: `Brand Name: QueenralObscene Picture: NoSexually Suggestive: NoBra Style: SeamlessBra Style: Push UpMaterial: AcrylicMaterial: NylonOrigin: CN(Origin)Support Type: Wire FreeGender: WOMENClosure Type: NONEDecoration: LaceStyle: everydayPattern Type: SolidStrap Type: Non-adjusted StrapsItem Type: BrasModel Number: 6.0Cup Shape: Three Quarters(3/4 Cup)Product name 1: Women's underwearProduct name 2: Seamless braProduct name 3: Push Up braletteProduct name 4: Plus Size braletteProduct name 5: Thai Latex 6.0Product name 6: Cooling Gathers Shock-proof Pad
    //                 `,
    //             details: `Queenral Plus Size Bra 3XL4XL Seamless Bras For Women Underwear BH Sexy Lace Brassiere Push Up Bralette With Pad Vest Top Bra
    //             `,
    //         },
    //         category: {
    //             gender: 'women',
    //             belong: 'everyday',
    //             span: ''
    //         },
    //         countInStock: 2,
    //         rating: 0,
    //         numReviews: 0
    //     },
    //     {   
    //         title: 'panties underwear female briefs seamless lace',
    //         name: 'panties girls fashion bragas Calcinha XXS-L 2001',
    //         image:[
    //                 '/images/Everyday/evdy_p3/pnty_0.jpg',
    //                 '/images/Everyday/evdy_p3/pnty_1.jpg',
    //                 '/images/Everyday/evdy_p3/pnty_2.jpg', 
    //                 '/images/Everyday/evdy_p3/pnty_3.jpg', 
    //                 '/images/Everyday/evdy_p3/pnty_4.jpg', 
    //         ],
    //         color:[],
    //         price:3.80,
    //         brand: 'Lbellagiovanna',
    //         description: {
    //             materiel: `Brand Name: L'bellagiovannaMaterial: NylonMaterial: SpandexMaterial: CottonObscene Picture: NoSexually Suggestive: NoPanties Type: BriefsModel Number: BG19092001p6Material Composition: nylon 85%, spendex 10%, cotton 5%Pattern Type: SolidDecoration: LaceRise Type: low-RiseGender: WOMENItem Type: Panties7 colors: black, white, red, blue, rose, beige, yellowsize: XXS-Lromantic lace sexy thongs: designer fashion panties6pcs /lot: mix colors
    //             Information on additional charges
    //                 `,
    //             details: `Please check following Product Info before order 
    //             Model Number: BG19092001p6
    //             Brand Name: L'bellagiovanna
    //             Panties Type: woman briefs
    //             Rise Tipe: low-rise
    //             Material Composition: nylon 85%, spendex 10%, cotton 5%
    //             Color Style: natural solid color
    //             Style: french lace, sexy, elegent
    //             `,
    //         },
    //         category: {
    //             gender: 'women',
    //             belong: 'everyday',
    //             span: ''
    //         },
    //         countInStock: 5,
    //         rating: 4,
    //         numReviews: 1
    //     },
    //     {   
    //         title: ' Seersucker Lingerie Fruit Embroidery Briefs',
    //         name: 'BIONEK Women Sexy Lace Underwear Ruffle Panties Japanese',
    //         image:[
    //                 '/images/Everyday/evdy_p4/pntypls_0.jpg',
    //                 '/images/Everyday/evdy_p4/pntypls_1.jpg',
    //                 '/images/Everyday/evdy_p4/pntypls_2.jpg', 
    //                 '/images/Everyday/evdy_p4/pntypls_3.jpg', 
    //                 '/images/Everyday/evdy_p4/pntypls_4.jpg', 
    //         ],
    //         color:[],
    //         price:4.50,
    //         brand: 'BIONEK',
    //         description: {
    //             materiel: `Brand Name: BIONEKMaterial: CottonObscene Picture: NoSexually Suggestive: NoPanties Type: BriefsOrigin: CN(Origin)Model Number: HA7136Pattern Type: SolidDecoration: NONERise Type: low-RiseGender: WOMENItem Type: Panties
    //                 `,
    //             details: `Please check following Product Info before order 
    //             Model Number: BG19092001p6
    //             Brand Name: L'bellagiovanna
    //             Panties Type: woman briefs
    //             Rise Tipe: low-rise
    //             Material Composition: nylon 85%, spendex 10%, cotton 5%
    //             Color Style: natural solid color
    //             Style: french lace, sexy, elegent
    //             `,
    //         },
    //         category: {
    //             gender: 'women',
    //             belong: 'everyday',
    //             span: ''
    //         },
    //         countInStock: 2,
    //         rating: 2,
    //         numReviews: 1
    //     },
    //     {   
    //         title: ' Family Matching Clothing Simple',
    //         name: 'Family Look T Shirt Baby Mom Matching Clothes',
    //         image:[
    //                 '/images/Everyday/evdy_p5/tsw_0.jpg',
    //                 '/images/Everyday/evdy_p5/tsw_1.jpg',
    //                 '/images/Everyday/evdy_p5/tsw_2.jpg', 
    //                 '/images/Everyday/evdy_p5/tsw_3.jpg', 
    //                 '/images/Everyday/evdy_p5/tsw_4.jpg', 
    //         ],
    //         color:[],
    //         price:8.50,
    //         brand: 'jiangkao',
    //         description: {
    //             materiel: `Brand Name: jiangkaoOrigin: CN(Origin)Item Type: T-ShirtsStyle: FashionSleeve Length(cm): ShortFit: Fits true to size, take your normal sizeMaterial: PolyesterPattern Type: SolidDepartment Name: Mother & Daughter
    //                 `,
    //             details: `Warm Tips for you~

    //             Dear Friend, The price is just for 1 piece.
    //             Pls allow 1-3 cm error due to manual measurement
    //             Q: How to place orders for whole family set( mom+kids?)
    //             For example, you want to order size 1T for kids, size L for women 
    //             Click on kids 1T--Add to Cart --Continue to Buy
    //                         --Add mom M to Cart 
    //                         -- Go to your Cart
    //                         -- Submit Order
    //                         -- Pay Together
    //                         (If you have any problems, pls contact me freely)
                
    //             Material: 95% milk silk  + 5% spandex
    //             Fabric Type:Broadcloth
    //             Sleeve Length(cm):Short
    //             Collar:O-Neck
    //             Please allow 1-3cm differs due to manual measurement. 
    //             `,
    //         },
    //         category: {
    //             gender: 'women',
    //             belong: 'everyday',
    //             span: ''
    //         },
    //         countInStock: 2,
    //         rating: 2,
    //         numReviews: 1
    //     },
    //     {   
    //         title: ' Men Sports T-Shirt',
    //         name: 'Brand SANHENG Men Summer Casual Outdoor T-Shirt ',
    //         image:[
    //                 '/images/Everyday/evdy_p6/tsm_0.jpg',
    //                 '/images/Everyday/evdy_p6/tsm_1.jpg',
    //                 '/images/Everyday/evdy_p6/tsm_2.jpg', 
    //                 '/images/Everyday/evdy_p6/tsm_3.jpg', 
    //                 '/images/Everyday/evdy_p6/tsm_4.jpg', 
    //         ],
    //         color:[],
    //         price:10.50,
    //         brand: 'CN',
    //         description: {
    //             materiel: `Origin: CN(Origin)Gender: UnisexSeason: summerSeason: AutumnMaterial: PolyesterFit: Fits smaller than usual. Please check this store's sizing info
    //                 `,
    //             details: `Warm Tips for you~

    //             Dear Friend, The price is just for 1 piece.
    //             Pls allow 1-3 cm error due to manual measurement
    //             Q: How to place orders for whole family set( mom+kids?)
    //             For example, you want to order size 1T for kids, size L for women 
    //             Click on kids 1T--Add to Cart --Continue to Buy
    //                         --Add mom M to Cart 
    //                         -- Go to your Cart
    //                         -- Submit Order
    //                         -- Pay Together
    //                         (If you have any problems, pls contact me freely)
                
    //             Material: 95% milk silk  + 5% spandex
    //             Fabric Type:Broadcloth
    //             Sleeve Length(cm):Short
    //             Collar:O-Neck
    //             Please allow 1-3cm differs due to manual measurement. 
    //             `,
    //         },
    //         category: {
    //             gender: 'men',
    //             belong: 'everyday',
    //             span: ''
    //         },
    //         countInStock: 4,
    //         rating: 3,
    //         numReviews: 2
    //     },
    //     /* Gadgets items category */
    //     {   
    //         title: ' Smart Clock Women GTS Smartwatch for Xiaomi',
    //         name: 'Smart Watch Men Full Touch Fitness Tracker Blood Pressure',
    //         image:[
    //                 '/images/Gadgets/gdts_p1/smw_0.jpg',
    //                 '/images/Gadgets/gdts_p1/smw_1.jpg',
    //                 '/images/Gadgets/gdts_p1/smw_2.jpg', 
    //                 '/images/Gadgets/gdts_p1/smw_3.jpg', 
    //                 '/images/Gadgets/gdts_p1/smw_4.jpg', 
    //         ],
    //         color:[],
    //         price:42.50,
    //         brand: 'Xiaomi',
    //         description: {
    //             materiel: `Brand Name: ColMiMechanism: NoOrigin: CN(Origin)SIM Card Available: NoSystem: NoneGPS: NoType: On WristCompatibility: All CompatibleROM: 128MBFunction: PassometerFunction: Sleep TrackerFunction: Push MessageFunction: Heart Rate TrackerFunction: Alarm ClockFunction: Remote ControlFunction: MonthFunction: Fitness TrackerFunction: Message ReminderFunction: WeekFunction: Interactive MusicFunction: Call ReminderRear Camera: NoneLanguage: englishLanguage: RussianLanguage: SpanishLanguage: PortugueseLanguage: ItalianLanguage: FrenchLanguage: GermanLanguage: KoreanLanguage: JapaneseLanguage: UkrainianLanguage: ArabicLanguage: IndonesianRAM: 128MBWaterproof Grade: Professional WaterproofMultiple Dials: YesCertification: CECertification: RoHSBattery Capacity: 120-180mAh
    //                 `,
    //             details: `COLMI P8 is our latest generation and most cost-effective smart watch. In this new version, COLMI P8 smart watch has all-new 1.4" colour display and full capacitive touch, supporting taps and swipes, so it is easy to read and operate.
    //                 Soft silicone strap makes COLMI P8 lightweight and comfortable wear on your wrist and is available in 5 beautiful colours with matching swappable straps.
    //                 COLMI P8 upgrade
    //                 COLMI P8 watch faces added to 250+. (Most other smart watches have only 4 watch faces.)
    //                 Updated on December 11, 2020
    //                 Stay healthy
    //                 > Sports: All-Day Activity Tracking, IPX7 waterproof, 7 Exercise Modes, Stopwatch, Sports Data Report.
    //                 > Health: 24/7 Heart Rate, Blood Pressure, Blood Oxygen, Sleep Tracking & Stages, Reminders to Move, Track your menstrual cycle.
    //                 > Life: Smartphone Notifications, Alarm clock, Weather, Shutter, Control music, 250+ watch faces. (support custom watch faces.)
    //                 With a battery life up to 7 days, keep the inspiration coming day and night.
    //                 language
    //                 Push information: Support all languages
    //                 Smart watch languages: English, Russian, Spanish, Portuguese, Japanese, Korean, German, French, Arabic, Ukrainian, Italian, Indonesian, Thai, Chinese, Traditional Chinese            
    //                     `,
    //         },
    //         category: {
    //             gender: 'men',
    //             belong: 'gadgets',
    //             span: ''
    //         },
    //         countInStock: 2,
    //         rating: 4,
    //         numReviews: 0
    //     },
    //     {   
    //         title: ' Sport Watch Men Woman Waterproof Smartwatch Women',
    //         name: 'Fashion Smart Watch Ladies Heart Rate Blood Pressure Multifunctional',
    //         image:[
    //                 '/images/Gadgets/gdts_p2/smww_0.jpg',
    //                 '/images/Gadgets/gdts_p2/smww_1.jpg',
    //                 '/images/Gadgets/gdts_p2/smww_2.jpg', 
    //                 '/images/Gadgets/gdts_p2/smww_3.jpg', 
    //                 '/images/Gadgets/gdts_p2/smww_4.jpg', 
    //         ],
    //         color:[],
    //         price:39.50,
    //         brand: 'LIGE',
    //         description: {
    //             materiel: `Brand Name: LIGEMechanism: YesOrigin: CN(Origin)SIM Card Available: NoSystem: Android WearGPS: NoType: On WristCompatibility: All CompatibleROM: 128MBFunction: PassometerFunction: Fitness TrackerFunction: Sleep TrackerFunction: Message ReminderFunction: Call ReminderFunction: Remote ControlFunction: Push MessageFunction: Big Three NeedlesFunction: 24 hour instructionFunction: Alarm ClockFunction: Small SecondFunction: World TimeFunction: WeekFunction: MonthFunction: Heart Rate TrackerFunction: Interactive MusicFunction: NoctilucentRear Camera: NoneLanguage: englishRAM: 128MBWaterproof Grade: Professional WaterproofMultiple Dials: YesCertification: CEBattery Capacity: 300-450mAhNetwork Mode: NoneCPU Model: BW0130Style: FashionMovement Type: ElectronicScreen Shape: ROUNDResolution: 240*240APP Download Available: YesCase Material: ALLOYCPU Manufacturer: MediatekDisplay Size: 1.3inchBand Material: Silica GelApplication Age Group: AdultBattery Detachable: NoBand Detachable: Yes
    //                 `,
    //             details: `COLMI P8 is our latest generation and most cost-effective smart watch. In this new version, COLMI P8 smart watch has all-new 1.4" colour display and full capacitive touch, supporting taps and swipes, so it is easy to read and operate.
    //                 Soft silicone strap makes COLMI P8 lightweight and comfortable wear on your wrist and is available in 5 beautiful colours with matching swappable straps.
    //                 COLMI P8 upgrade
    //                 COLMI P8 watch faces added to 250+. (Most other smart watches have only 4 watch faces.)
    //                 Updated on December 11, 2020
    //                 Stay healthy
    //                 > Sports: All-Day Activity Tracking, IPX7 waterproof, 7 Exercise Modes, Stopwatch, Sports Data Report.
    //                 > Health: 24/7 Heart Rate, Blood Pressure, Blood Oxygen, Sleep Tracking & Stages, Reminders to Move, Track your menstrual cycle.
    //                 > Life: Smartphone Notifications, Alarm clock, Weather, Shutter, Control music, 250+ watch faces. (support custom watch faces.)
    //                 With a battery life up to 7 days, keep the inspiration coming day and night.
    //                 language
    //                 Push information: Support all languages
    //                 Smart watch languages: English, Russian, Spanish, Portuguese, Japanese, Korean, German, French, Arabic, Ukrainian, Italian, Indonesian, Thai, Chinese, Traditional Chinese            
    //                     `,
    //         },
    //         category: {
    //             gender: 'women',
    //             belong: 'gadgets',
    //             span: ''
    //         },
    //         countInStock: 1,
    //         rating: 3,
    //         numReviews: 1
    //     },
    //     {   
    //         title: ' High Quality Toe Nail Clipper Tool TSLM2',
    //         name: 'Stainless Steel Nail Clipper',
    //         image:[
    //                 '/images/Gadgets/gdts_p3/ncl_0.jpg',
    //                 '/images/Gadgets/gdts_p3/ncl_1.jpg',
    //                 '/images/Gadgets/gdts_p3/ncl_2.jpg', 
    //                 '/images/Gadgets/gdts_p3/ncl_3.jpg', 
    //                 '/images/Gadgets/gdts_p3/ncl_4.jpg', 
    //         ],
    //         color:[],
    //         price:9.50,
    //         brand: 'LeE',
    //         description: {
    //             materiel: `Specifications
    //                 Type: Nail Clippe
    //                 Material: Stainless Steel
    //                 Color: black
    //                 Package Included:
    //                 1 *Nail Clippers Kit
    //                 `,
    //             details: `Descriptions
    //                 Feature:
    //                 Professional Nail Clippers Set: Nail clipper set contains nail clippers, toe nail clipper & oblique nail clippers. Finger and toe independent special tools to avoid the spread of bacteria and the risk of infection
    //                 Function: Ultra sharp blades and precise clipping .Sturdy top leverage and super sharp blades allow a clean cut with minimal . The Most Unique Function of the Angled Clippers is to Cut The Toenails. Family, travel, gift, perfect tool for men and women.
    //                 Ergonomic: Nail clippers with enhanced long handle design making manicure easier,anti-slip design on the lever can help you better hold nail clippers. No more need to worry slipping out and hurting nails. Easy grip lever and non-slip matte finish designed for best accuracy and control.
    //                 Sturdy construction: Designed with electroplated Ni-Zinc alloy sturdy zinc alloy stainless steel precision blades and Anti-Slip lever. Precisely aligned stainless steel blades, closed rotation axises. Ensure long lasting. 
    //                 Specification:
    //                 Material: Stainless Steel
    //                 Color: As the picture show
    //                 Large size: 8.2cm
    //                 Small size: 6cm
    //                 Oblique size: 6.3cm
    //                 Qty: 3Pcs/Set            
    //                 `,
    //             },
    //         category: {
    //             gender: '',
    //             belong: 'gadgets',
    //             span: ''
    //         },
    //         countInStock: 5,
    //         rating: 2,
    //         numReviews: 0
    //     },
    //     {   
    //         title: ' CCTV Camera Surveillance IR Night Vision P2P',
    //         name: 'SDETER 1080P 720P IP Camera Security Camera',
    //         image:[
    //                 '/images/Gadgets/gdts_p4/scm_0.jpg',
    //                 '/images/Gadgets/gdts_p4/scm_1.jpg',
    //                 '/images/Gadgets/gdts_p4/scm_2.jpg', 
    //                 '/images/Gadgets/gdts_p4/scm_3.jpg', 
    //                 '/images/Gadgets/gdts_p4/scm_4.jpg', 
    //         ],
    //         color:[],
    //         price:56,
    //         brand: 'sdeter',
    //         description: {
    //             materiel: `Brand Name: SDETERType: ip cameraSupported Operating Systems: NoHigh Definition: 1080P(Full-HD)Lens (mm): 3.6mmStyle: Dome CameraCertification: CECertification: FCCConnectivity: IP/Network WirelessOrigin: CN(Origin)Installation: SideWall Bracket: CeilingPower Consumption(W): 6WColor: WhiteMinimum Illumination(Lux): 0.01LUXSensor: CMOSMegapixels: 2MPSensor Brand: SONYSpecial Features: Vandal-proofStorage: 128GAlarm Action: telefon AlarmAlarm Action: Local AlarmVideo Compression Format: H.264Power Supply: NormalTF Card: NoneIR Distance(m): 10-15Mis_customized: YesPower Supply(V): 110-240VModel Number: ip camera security Q8UViewing Angle : 85°Technology: InfraredDimensions (L x W x D)(mm): 22*8*18CMSupported Mobile Systems: AndroidSupported Mobile Systems: iosNetwork Interface: Wi-Fi/802.11/b/gAudio Output: AudioTechnology: Pan/tilt/ZOOM, IR InfraredP2P: P2P Plug and PlayType: IP Camera securityFeature: wireless wifi cameraAudio: Support two way talk audioNight vision: Support infrared night visionAlarm: Support motion detection alarmBaby Monitor: Pet Cameracamera wifi 1080p: wifi camera surveillancesecurity camera wifi: 1080P wifi cameraNetwork: 2.4G router, not for 5G or dual routerPower charger: DV 5V 2A
    //                 `,
    //             details: `Easy to Setup and Pan/Tilt/Zoom
    //                 Boasting 355°Pan 110°Tilt, and 4X Zoom, the 1080P HD home security camera delivers the whole picture of your home, even better, in stunning clarity and vividness.Download the V380 or V380 Pro APP, set up your security system in minutes.
    //                 Full HD Resolution and Clear Day&Night Videos
    //                 The IP security camera equipped high power LED lights, up to 32ft distance in dark, keep an eye on any room, even in low light        
    //                  `,
    //         },
    //         category: {
    //             gender: '',
    //             belong: 'gadgets',
    //             span: ''
    //         },
    //         countInStock: 1,
    //         rating: 4,
    //         numReviews: 0
    //     },

    //     {   
    //         title: ' Aluminum Bike Phone Holder For 3.5" to 7.5" Phone Bicycle Stand ',
    //         name: 'Motorcycle Mount Support Handlebar Clips P30',
    //         image:[
    //                 '/images/Gadgets/gdts_p5/mhb_0.jpg',
    //                 '/images/Gadgets/gdts_p5/mhb_1.jpg',
    //                 '/images/Gadgets/gdts_p5/mhb_2.jpg', 
    //                 '/images/Gadgets/gdts_p5/mhb_3.jpg', 
    //                 '/images/Gadgets/gdts_p5/mhb_4.jpg', 
    //         ],
    //         color:[],
    //         price:19,
    //         brand: 'GUB',
    //         description: {
    //             materiel: `Brand: GUB
    //                 Model: P10 / P20 / P20 Base
    //                 Date of listing: 2019-05 (2019-08 re-upgraded)
    //                 Name: 2019 New Bike Phone Holder
    //                 Material: aluminum alloy
    //                 Color: Black&Red / Black&Titanium / Red / Titanium
    //                 Weight: 71g(G81), 74g(P10),  90g(P20) .(excluding accessories)
    //                 Paw width: 55-100mm (adjustable)
    //                 Support handlebar diameter: 22.2-31.8mm
    //                 Support mobile phone: 3.5-7.15 inch smartphones3
    //                 Support thickness: 10mm
    //                         `,
    //             details: `1) 100% brand new product. New upgrade, selected quality
    //                 2) P20 can be rotated to let you freely adjust the angle of the phone
    //                 3) The bracket heightening design (37.5mm) extends the performance of the product.
    //                 4) Distribute 2 washers, applicable from 21mm to 31.8mm
    //                 Support for Bike / Motorcycle / Electric Vehicle, etc.
    //                 5) Thick silicone pad to enhance cushioning and reduce vibration generated by Riding
    //                 6) No button design, easy to operate
    //                 7) Comes with a silicone strap and double fixing.       
    //                     `,
    //         },
    //         category: {
    //             gender: '',
    //             belong: 'gadgets',
    //             span: ''
    //         },
    //         countInStock: 4,
    //         rating: 1,
    //         numReviews: 0
    //     },
    //     {   
    //         title: ' Sports Waterproof Earbud In Ear',
    //         name: 'Wireless Earphones TWS Bluetooth 5.0 Mini Earbuds Stereo',
    //         image:[
    //                 '/images/Gadgets/gdts_p6/erbd_0.jpg',
    //                 '/images/Gadgets/gdts_p6/erbd_1.jpg',
    //                 '/images/Gadgets/gdts_p6/erbd_2.jpg', 
    //                 '/images/Gadgets/gdts_p6/erbd_3.jpg', 
    //                 '/images/Gadgets/gdts_p6/erbd_4.jpg', 
    //         ],
    //         color:[],
    //         price:22.60,
    //         brand: 'Tiyiviri',
    //         description: {
    //             materiel: `Brand Name: TiYiViRiVocalism Principle: DynamicControl Button: YesActive Noise-Cancellation: YesCommunication: Wireless+WiredVolume Control: YesStyle: In-EarSensitivity: 98dBWireless Type: bluetoothIs wireless: YesLine Length: 0.15mSupport APP: NoFunction: Common HeadphoneFunction: For Mobile PhoneFunction: HiFi HeadphoneFunction: SportNumber Of Drivers: 2Plug Type: Line TypePackage List: User ManualConnectors: USBModel Number: wireless earbudsHeadphone Pads Material: SILICONEBluetooth Version: 5.0Codecs: sbcSupport Memory Card: NoResistance: 32ΩWaterproof: YesWith Microphone: YesFeatures: waterproofCharging Method: Charging caseMagnet Type: OtherFeature 1: wireless earbuds bluetooth earphones bluetooth earbuds earbudsFeature 2: bluetooth earphone earphones true wireless earbudsFeature 3: noise cancelling earbuds wireless earbuds for iphoneFeature 4: earbuds with microphone bluetooth earbuds wirelessFeature 5: earbuds wireless headphones earbuds wirelessFeature 6: sound stereo earphone heavy bass earbuds noise cancellingFeature 7: sports bluetooth earphones inear bluetooth earbudsFeature 8: wireless earphones wireless earbuds for androidFeature 9: earphones with microphone with mic with microphones
    //                         `,
    //             details: `TWS Bluetooth 5.0
    //                 Adopt the most advanced Bluetooth 5.0 technology.Provides in-call stereo sound.Also own fast and stable transmission without tangling.
    //                 Hifi Stereo Sound Quality
    //                 Bluetooth earbud offers a truly authentic sound and powerful bass performance with 8mm large size speaker driver - the drive area is 2 times than the normal drive area.
    //                 Digital Power Display of Charging Case
    //                 The digital of the charging case shows the remaining battery，you can know when the charging case need to be charged according to the digital,you are no longer afraid of the charging case does not have enough power to supply the wireless earbuds.       
    //                     `,
    //         },
    //         category: {
    //             gender: '',
    //             belong: 'gadgets',
    //             span: ''
    //         },
    //         countInStock: 2,
    //         rating: 4,
    //         numReviews: 1
    //     },

    //     /* toyes items category*/
    //     {   
    //         title: ' toy car boy toy child',
    //         name: 'Electric dancing deformation rotating universal police car',
    //         image:[
    //                 '/images/Toyes/toy_p1/tcar_0.jpg',
    //                 '/images/Toyes/toy_p1/tcar_1.jpg',
    //                 '/images/Toyes/toy_p1/tcar_2.jpg', 
    //                 '/images/Toyes/toy_p1/tcar_3.jpg', 
    //                 '/images/Toyes/toy_p1/tcar_4.jpg', 
    //         ],
    //         color:[],
    //         price:18.60,
    //         brand: 'Muwanzhi',
    //         description: {
    //             materiel: `Brand Name: MuwanzhiMaterial: PlasticPlastic Type: ABSOrigin: CN(Origin)Age Range: > 3 years oldBarcode: NoShip/Naval Vessel: OtherFeatures: DiecastCertification: 3C3C: TypeType Number: /Model Number: /Warning: NOType: Car
    //                         `,
    //             details: `Electric dancing deformation rotating universal police car toy car boy toy child kid girl car Christmas birthday gift       
    //                     `,
    //         },
    //         category: {
    //             gender: 'kids',
    //             belong: 'toyes',
    //             span: ''
    //         },
    //         countInStock: 6,
    //         rating: 3,
    //         numReviews: 3
    //     },
    //     {   
    //         title: 'Potensic Mini Drone With Camera WiFi FPV Altitude Hold Headless Mode 2.4G RC ',
    //         name: 'Quadcopter Remote Control Toys For Children Kids',
    //         image:[
    //                 '/images/Toyes/toy_p2/drc_0.jpg',
    //                 '/images/Toyes/toy_p2/drc_1.jpg',
    //                 '/images/Toyes/toy_p2/drc_2.jpg', 
    //                 '/images/Toyes/toy_p2/drc_3.jpg', 
    //                 '/images/Toyes/toy_p2/drc_4.jpg', 
    //         ],
    //         color:[],
    //         price:28.60,
    //         brand: 'Potensic',
    //         description: {
    //             materiel: `Brand Name: PotensicOrigin: CN(Origin)Remote Distance: 10-15mVideo Capture Resolution: OtherAerial Photography: NoController Mode: MODE2Control Channels: 4 ChannelsRemote Control: YesPackage Includes: Original BoxPackage Includes: BatteriesPackage Includes: Operating InstructionsPackage Includes: ChargerPackage Includes: Remote ControllerPackage Includes: CameraPackage Includes: USB CableAge Range: 8-11 YearsAge Range: 12-15 YearsAge Range: > 8 years oldAge Range: > 14 years oldAge Range: > 6 years oldMaterial: PlasticController Battery: 3x 1.5V AA batteryIndoor/Outdoor Use: Indoor-OutdoorDimensions: 4 Types for optionWarning: NOWarranty: 1 YearMotor: Brush MotorCharging Voltage: 3.7VModel Number: A20/A20W/A30WPlugs Type: USBCharging Time: 40 minutesPower Source: electricCamera Mount Type: OtherType: HELICOPTEROperator Skill Level: BeginnerOperator Skill Level: IntermediateState of Assembly: Ready-to-GoBarcode: NoCertification: CECE: CertificateCertificate Number: HK1911122855EFlight Time: 5-6 minsFeatures: App-ControlledFeatures: Wi-FiFeatures: OtherA20 Green / Red: No CameraA20W / A30W: With CameraFeature 1: with 2 detachable batteriesFeature 2: 2.4G 6 Axis - Altitude HoldFeature 3: Real Time FPV
    //                         `,
    //             details: `Dear All:

    //                 1, Ship from France/Spain/Czech Republic/Italy warehouse will be FREE of Customs Tax and Received the Goods Faster.
                    
    //                 2, Dropshipping and wholesale are all welcome ! The more you buy, the more discounts you get ! Feel free to contact us for more discount !
                    
    //                 3, Potensic is Top5 Brand in Amazon, is the leading drones and quadcopter provider on Amazon, it has served millions of happy customers worldwide in the past few years.      
    //                         `,
    //         },
    //         category: {
    //             gender: 'kids',
    //             belong: 'toyes',
    //             span: ''
    //         },
    //         countInStock: 4,
    //         rating: 1,
    //         numReviews: 0
    //     },
    //     {   
    //         title: 'ENOZE 9303E RC Car 40km/h 1:18 2.4Ghz 4WD Electric Remote Control ',
    //         name: 'Racing Vehicles RTR Model Toys for Children',
    //         image:[
    //                 '/images/Toyes/toy_p3/rcar_0.jpg',
    //                 '/images/Toyes/toy_p3/rcar_1.jpg',
    //                 '/images/Toyes/toy_p3/rcar_2.jpg', 
    //                 '/images/Toyes/toy_p3/rcar_3.jpg', 
    //                 '/images/Toyes/toy_p3/rcar_4.jpg', 
    //         ],
    //         color:[],
    //         price:68.60,
    //         brand: 'Potensic',
    //         description: {
    //             materiel: `Brand Name: LBLAMaterial: PlasticOrigin: CN(Origin)Dimensions: 29*19*12cmThrottle servo: as shownTorque: as shownModel Number: ENOZE 9303EDesign: CarsCharging Voltage: 5vRemote Distance: 80 metersWarning: do not swallow the small partsController Mode: MODE2Warranty: noWheelbase: as shownControl Channels: 4 ChannelsPackage Includes: Original BoxPackage Includes: BatteriesPackage Includes: Operating InstructionsPackage Includes: Remote ControllerPackage Includes: USB CableRemote Control: YesAge Range: 8-11 YearsAge Range: > 8 years oldSteering servo: as shown
    //                         `,
    //             details: `??Features:
    //                 ?1.Basic function:forward,backward,turn left/right,brake,proportional steering control,fine-tune direction correction, anti-seize and low voltage protection
    //                 ?2.High toughness explosion-proof pvc body shell
    //                 ?3.Full proportional controlled 2.4g remote controller
    //                 ?4.Front rear four wheel independent shock suspension system
    //                 ?5.Damped independent shocks
    //                 ?6.Differential system
    //                 ?7.Full proportional servo
    //                 ?8.With transmission components,chassis strength has been upgraded
    //                 ?
    //                 ?Package Included:
    //                 ?1X RC Car
    //                 ?1X Battery
    //                 ?1X Transmitter
    //                 ?1X USB Charging Cable
    //                 ?1X Manual                      
    //                             `,
    //         },
    //         category: {
    //             gender: 'kids',
    //             belong: 'toyes',
    //             span: ''
    //         },
    //         countInStock: 2,
    //         rating: 3,
    //         numReviews: 0
    //     },
    //     {   
    //         title: ' Deformation Car Kids Toys Gifts For Boys',
    //         name: 'RC Car Transformation Robots Sports Vehicle Model Robots',
    //         image:[
    //                 '/images/Toyes/toy_p4/lgp_0.jpg',
    //                 '/images/Toyes/toy_p4/lgp_1.jpg',
    //                 '/images/Toyes/toy_p4/lgp_2.jpg', 
    //                 '/images/Toyes/toy_p4/lgp_3.jpg', 
    //                 '/images/Toyes/toy_p4/lgp_4.jpg', 
    //         ],
    //         color:[],
    //         price:11.60,
    //         brand: 'Hapybasi',
    //         description: {
    //             materiel: `Brand Name: HapybasMaterial: PlasticOrigin: CN(Origin)Dimensions: 23*9.5*5.5CMModel Number: WDS-RCT025Design: CarsFeatures: Remote ControlCharging Voltage: NoneRemote Distance: 10mWarning: NoneController Mode: MODE1Controller Mode: MODE2Warranty: 6 monthType: CarControl Channels: 4 ChannelsPackage Includes: Remote ControllerPackage Includes: Original BoxRemote Control: YesAge Range: > 8 years oldAge Range: > 6 years oldAge Range: > 14 years oldAge Range: > 3 years oldScale: 1:18State of Assembly: Ready-to-GoFlight Time: 20-30minuesFeatures: Shock Resistant, Model, Flashing
    //                         `,
    //             details: `RC Car Transformation Robots Sports Vehicle Model Robots Toys Cool Deformation Car Kids Toys Gifts For Boys      
    //                     `,
    //         },
    //         category: {
    //             gender: 'kids',
    //             belong: 'toyes',
    //             span: ''
    //         },
    //         countInStock: 2,
    //         rating: 3,
    //         numReviews: 1
    //     },
    //     {   
    //         title: ' Toys Gifts For Girls Collection',
    //         name: 'UCanaan 1/3 BJD Doll 60CM 18 Ball Jointed Dolls',
    //         image:[
    //                 '/images/Toyes/toy_p5/dolg_0.jpg',
    //                 '/images/Toyes/toy_p5/dolg_1.jpg',
    //                 '/images/Toyes/toy_p5/dolg_2.jpg', 
    //                 // '/images/Toyes/toy_p5/dolg_3.jpg', 
    //                 // '/images/Toyes/toy_p5/dolg_4.jpg', 
    //         ],
    //         color:[],
    //         price:82,
    //         brand: 'ucanaan',
    //         description: {
    //             materiel: `Brand Name: ucanaanOrigin: CN(Origin)Model Number: 001BV24001-13-24Features: cartoonFeatures: ModelFeatures: EducationalFeatures: Dıy ToyTheme: Movie & TVType: Ethnic DollsType: Interactive DollsType: Fashion DollWarning: NoneItem Type: DollsDimensions: 60cm / 23.6 inchesMfg Series Number: FashionForm: 1/3Age Range: > 3 years oldMaterial: PlasticPlastic Type: ABSBJD/SD Attribute: dollCondition: In-Stock ItemsGender: GirlsBattery: NoneFashion Item: 1/3 BJD Doll 60CM BJD DollHeight: 60cm / 23.6 inchesShipping Weight: About 1.5kg SD Dolls
    //                         `,
    //             details: `100% Handmade BJD Dolls; Package Include: 1 BJD Doll + 1 Dress/ Clothes Set + 1 Wig + 1 Pair of Shoes + Makeup Face
    //                 Height: 1/3 Doll; 60cm/23.6inch; 18 Ball Jointed Doll; Can Make Many Pose: Can Sit and Stand
    //                 Eyes: Changeable Eyes with Eyelash; 
    //                 Head Can Be Opened and Changed Eyes.
    //                 Hair Can be Removable
    //                 Perfect for Birthday Gifts, Christmas Gifts, Girls Gift and Dolls Collection
    //                 Note: The Joints and Head Can NOT be Picked; The Body Part is Hard Silicone Material     
    //                         `,
    //         },
    //         category: {
    //             gender: 'kids',
    //             belong: 'toyes',
    //             span: ''
    //         },
    //         countInStock: 1,
    //         rating: 5,
    //         numReviews: 1
    //     },
    //     {   
    //         title: ' Bricks Set Educational Toys For Children Kids Gifts',
    //         name: 'Technical Bumblebeed Robot Model Building Blocks Creator Idea ',
    //         image:[
    //                 '/images/Toyes/toy_p6/robb_0.jpg',
    //                 '/images/Toyes/toy_p6/robb_1.jpg',
    //                 '/images/Toyes/toy_p6/robb_2.jpg', 
    //                 '/images/Toyes/toy_p6/robb_3.jpg', 
    //                 '/images/Toyes/toy_p6/robb_4.jpg', 
    //         ],
    //         color:[],
    //         price:77.60,
    //         brand: 'CN',
    //         description: {
    //             materiel: `Origin: CN(Origin)Gender: UnisexAge Range: > 6 years oldBlock Size: Small building block（Compatible with Lego）Certification: CECE: CertificateCertificate Number: W2008303Model Number: The Bumblebeed Robot ModelType: BLOCKSWarning: DO not eat!Material: PlasticPlastic Type: ABSPlastic Block Shape: Self-Locking BricksProduct name: The Bumblebeed Robot ModelNumber of Bricks: 3500pcs Building Block BricksSeries: Creator Idea SeriesKeyword: AssemblageFeature1: Technical Bumblebeed Robot Building Block BricksFeature2: 3500pcs Bumblebeed Robot BricksFeature3: Bumblebeed Robot Model BricksFeature4: Bumblebeed Robot Idea Series Block BricksWarning: Ship without original box
    //                         `,
    //             details: `3500pcs Technical Bumblebeed Robot Model Building Blocks Creator Idea Series Bricks Set Educational Toys For Children Kids Gifts      
    //                     `,
    //         },
    //         category: {
    //             gender: 'kids',
    //             belong: 'toyes',
    //             span: ''
    //         },
    //         countInStock: 1,
    //         rating: 3,
    //         numReviews: 1
    //     },
    //     /* sale itmes category*/
    //     {   
    //         title: ' Stand Collar Shirt Male Clothes ',
    //         name: 'Mens Shirts Spring Autumn Striped Slim Fit',
    //         image:[
    //                 '/images/Sale/sl_p1/cos3_1.jpg',
    //                 '/images/Sale/sl_p1/cos3_2.jpg', 
    //                 '/images/Sale/sl_p1/cos3_3.jpg', 
    //                 '/images/Sale/sl_p1/cos3_4.jpg', 
    //         ],
    //         color:[],
    //         price:5.60,
    //         brand: 'h&m',
    //         description: {
    //             materiel: `Brand Name: HelisopusOrigin: CN(Origin)Material: CottonMaterial: PolyesterMaterial: LinenApplicable Scene: DailyShirts Type: Casual ShirtsSleeve Length(cm): FullStyle: CasualApplicable Season: Spring and AutumnCollar: STANDClosure Type: PulloverSleeve Style: RegularModel Number: PDE-0352Fabric Type: BroadclothPattern Type: stripedColor: Red,black,blueSize: Plus Size S-5XL
    //                         `,
    //             details: `Style: Casual
    //                 Sleeve length: Long sleeve
    //                 Pattern: Stripes
    //                 Material: Cotton, Polyester
    //                 Color: Black, Red, Blue
    //                 Size: S-5XL
    //                 Package Included:1×Shirt                
    //                 NOTE:
    //                 Please compare the detail sizes with yours before you buy!
    //                 Colors may be slightly different depending on computer and monitor settings.
    //                 Please allow 1-3cm differs due to manual measurement, thanks .                      
    //                     `,
    //         },
    //         category: {
    //             gender: 'man',
    //             belong: 'sale',
    //             span: ''
    //         },
    //         countInStock: 1,
    //         rating: 2,
    //         numReviews: 0
    //     },
    //     {   
    //         title: ' FaceDay Cream for Dry Itchy Sensitive Skin ',
    //         name: 'Australia Goat Manuka Honey Moisturizing SkinCare BodyCream ',
    //         image:[
    //                 '/images/Sale/sl_p2/cos1_2.jpg',
    //                 '/images/Sale/sl_p2/cos1_3.jpg', 
    //                 '/images/Sale/sl_p2/cos1_4.jpg', 
    //         ],
    //         color:[],
    //         price:2.60,
    //         brand: 'vissel',
    //         description: {
    //             materiel: `Use: BodyItem Type: CreamCountry/Region of Manufacture: AustraliaFeature: MoisturizingGender: UnisexIngredient: Manuka Honey, goats milkBrand Name: YourLoveModel Number: Goat Moisturising CreamNET WT: 100gcategory: Goat Moisturising CreamOrigin: Australiafunction1: beautiful natural skinfunction2: relief from eczema psoriasis or dermatitisfunction3: dry itchy skin acne prone skinfunction4: sensitive skinfunction5: nourish and rejuvenate dry skinfeature1: makes your skin feeling softerfeature2: nourish, smooth and revitalise skin
    //                         `,
    //             details: `Our Moisturising Cream contains goats milk and Manuka Honey, known to be the best of all the honey's for its natural therapeutic benefits. Apply liberally and as often as needed to nourish, smooth and revitalise your skin.
    //             Warnings
    //             For external use only. Avoid contact with eyes. Discontinue use if irritation or rash occurs and seek medical advice. Store in cool dry place.
    //             Common Uses
    //             Suitable for dry, itchy or sensitive skin
    //             Ingredients
    //             Water (Aqua), Butyrospermum Parkii (Shea Butter), Glycerin, Glyceryl Stearate, Prunus Amygdalus Dulcis (Sweet Almond) Oil, Cetearyl Alcohol, Theobroma Cacao Seed (Cocoa) Butter, Caprae Lac (Goat Milk), Potassium cetyl phosphate, Xanthan Gum, Triticum Vulgare germ (Wheat Germ) Oil, Panthenol, Tocopheryl acetate( Vitamin E), Benzyl Alcohol, Ginkgo Biloba Leaf Extract, Chamomilla Recutita Extract, Argania spinosa kernel (Argan) Oil, Parfum (Fragrance), Citric Acid, Potassium Sorbate.                    
    //                     `,
    //         },
    //         category: {
    //             gender: '',
    //             belong: 'sale',
    //             span: ''
    //         },
    //         countInStock: 1,
    //         rating: 2,
    //         numReviews: 0
    //     },

    // ]
}