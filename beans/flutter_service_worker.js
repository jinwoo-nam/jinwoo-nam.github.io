'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "aba8a33fc6a90bb124298e8f7218bd90",
"favicon.ico": "d8f5cf2830b85693d3f69d645f32e0b2",
"index.html": "724c2a0fcd60e7804c9a1908c3fafe53",
"/": "724c2a0fcd60e7804c9a1908c3fafe53",
"main.dart.js": "b87f86cdc95eda570b8ef101249121cc",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "6743eb7a0d8981213bb27b4b90a528a6",
"assets/AssetManifest.json": "fa0399c3f291a32993fab1a58e37aed8",
"assets/NOTICES": "bcd69e56c19857712ffda757394df1c6",
"assets/img/Instapay_logo_w.png": "6eae811042ab888962bc5e7554274e7f",
"assets/img/ogmeta_taste.jpg": "f709edbd873e5d68225d5a0d66480ad1",
"assets/img/ogmeta_gbb.jpg": "06b4a6ca0bb8d18a557e30f9a6a9dbc5",
"assets/img/shop/newsletter-bg.jpg": "5bd35c51afe2bc61cd6907c079f28e95",
"assets/img/shop/qr/decafGSH_DR1EA.png": "23446fc07fc4f6c6b92cb203b413d6cd",
"assets/img/shop/qr/dripbagKA_2EA.png": "cf8e5c1a075717ee4693cf2745152591",
"assets/img/shop/qr/beanGA200_2EA.png": "56aa60a2099c59e9adf6041f3520f36b",
"assets/img/shop/qr/dripbagGA_5EA.png": "c384f5e36af4c75a5c994962e7c18015",
"assets/img/shop/qr/decafED4_DR2EA.png": "d164988826699fcccc3202d346b1a3f9",
"assets/img/shop/qr/stickTP_30_5EA.png": "823fa3674fd33a7ca0c93cdca131e798",
"assets/img/shop/qr/beanGBJK_2EA.png": "6262be23de6ff11357518d8b99a6e3da",
"assets/img/shop/qr/beanCSN200_DR1EA.png": "b73ff988d480425cc10a7fed3ae7e0f9",
"assets/img/shop/qr/decafCMS_DR2EA.png": "3759021ebf2198fb569c879a1bc1b491",
"assets/img/shop/qr/dripbagEY_2EA.png": "f88a0c9dde67f475d5df529cc2770fc3",
"assets/img/shop/qr/decafBSN_DR1EA.png": "bbc8d4bf6430a29e46a81a27dd6fdd3c",
"assets/img/shop/qr/dripbagGA_3EA.png": "d311130a5d6fc30039c94846ffecf38e",
"assets/img/shop/qr/beanKAA200_2EA.png": "d7633a8f251649f8bca695c4fb587c79",
"assets/img/shop/qr/beanGBJK_10EA.png": "76d82f0e62cfd98bcd0862a0a80cf002",
"assets/img/shop/qr/beanEY2200_DR2EA.png": "dbc615990b8ce2f4ea6278162483754d",
"assets/img/shop/qr/decafED4_2EA.png": "2b0b6683d1982fcca46e030979d897e2",
"assets/img/shop/qr/stickTP_30_3EA.png": "41486c4b99fbecd1bf65bca90cef7d7c",
"assets/img/shop/qr/beanEY2_2EA.png": "2bae51c8dc5a0a60f0af529a60bd817b",
"assets/img/shop/qr/decafGSH200_DR2EA.png": "d34b83c595c55579be8af72349df5b43",
"assets/img/shop/qr/stickTP_30_1EA.png": "6d33904d9ccf60b0a1971c50c340622e",
"assets/img/shop/qr/beanBSE200_DR2EA.png": "586bef958e6a811c41cbbcd574f9b02a",
"assets/img/shop/qr/beanEY2200_1EA.png": "4ff9ecb843b5aea917de67a9a5fbd9c0",
"assets/img/shop/qr/beanBSE_DR2EA.png": "43ea1408639c9df5e7121e5cbf23703b",
"assets/img/shop/qr/dripbagKA_10EA.png": "d26f135f12c9871135e8192436092f5c",
"assets/img/shop/qr/beanGA200_DR1EA.png": "e518540a42ede183766160e61fb580d8",
"assets/img/shop/qr/decafBSN200_DR1EA.png": "f2fbbaeb20057275f335093c5b42b0d6",
"assets/img/shop/qr/decafCMS200_DR2EA.png": "bb72dea16ee2ab928795957cb96211bb",
"assets/img/shop/qr/beanKAA_DR2EA.png": "f53283192a88b3a4f175fee6bb60e0f8",
"assets/img/shop/qr/dripbagCS_2EA.png": "dd659d0432dd21e525b05d8c789bfde2",
"assets/img/shop/qr/dripbagGA_1EA.png": "829adf08acb6529d4e5478ec36b6def4",
"assets/img/shop/qr/beanCSN200_1EA.png": "68af2f6df996ac5f860482619ef47867",
"assets/img/shop/qr/decafED4_DR1EA.png": "fb0a4918a0d76bbc03a0f54e887f7c93",
"assets/img/shop/qr/dripbagKA_1EA.png": "34e631b22ca477a0504ce3df1dbb6942",
"assets/img/shop/qr/decafGSH_DR2EA.png": "3850e06b38f12fa94062ba82ee1cdaf7",
"assets/img/shop/qr/dripbagEY_3EA.png": "7415951faaa405904bc291e6d29f22b1",
"assets/img/shop/qr/dripbagCS_5EA.png": "cab05b1def6919070d6b34ec44e2d312",
"assets/img/shop/qr/beanGA200_1EA.png": "bfa23913feb05df163645056332a40b7",
"assets/img/shop/qr/dripbagKA_3EA.png": "4f662172f02ae7a373548156e39eac34",
"assets/img/shop/qr/decafCMS_DR1EA.png": "33b3c1683e16b2d58e8d4b24ce51a536",
"assets/img/shop/qr/decafBSN_DR2EA.png": "0f600ba75bbd93cd56da944eab503ff1",
"assets/img/shop/qr/dripbagEY_1EA.png": "39f3203d49e41f0b742fa4f66dd83e24",
"assets/img/shop/qr/beanCSN200_DR2EA.png": "5aacf7aaed7edd875e4df740d1765720",
"assets/img/shop/qr/dripbagSL_10EA.png": "e8e7a79c1d9699195cd9893a62a61bb0",
"assets/img/shop/qr/dripbagGA_10EA.png": "9e7dc9c11bca189b12c4810cd4a77d5b",
"assets/img/shop/qr/beanEY2200_DR1EA.png": "f28115020a84fe57192d08e28588e3bf",
"assets/img/shop/qr/decafED4_1EA.png": "a53c1c7772c19ea1c1dbe1bde5aa6246",
"assets/img/shop/qr/dripbagCS_3EA.png": "febb2c90b513eea4c55dc72f21568ff7",
"assets/img/shop/qr/beanKAA200_1EA.png": "b9b6a52c6a5050ba95d311636da03ff9",
"assets/img/shop/qr/dripbagEY_5EA.png": "dddaa25fb508e19ae3e25d8c8ee9d833",
"assets/img/shop/qr/decafCMS200_DR1EA.png": "a157ea4de77dd9cfd8d3fb1a47cb6b5d",
"assets/img/shop/qr/beanKAA_DR1EA.png": "52f39b6f60797cdbd18398895d47cf7c",
"assets/img/shop/qr/dripbagKA_5EA.png": "38af9a1ddb25a2640c83160a1997eb36",
"assets/img/shop/qr/beanCSN200_2EA.png": "d0adc49903cc6618253a4d397991579d",
"assets/img/shop/qr/dripbagGA_2EA.png": "4cfca51a3a5b933b0ff8c6f2e6308d38",
"assets/img/shop/qr/dripbagCS_1EA.png": "51cd53f20833d991ce899cd0e80a636c",
"assets/img/shop/qr/beanBSE200_DR1EA.png": "3e73464fdd9d60b8b51bcd67ffbe2aac",
"assets/img/shop/qr/stickTP_30_2EA.png": "6c1973cb8a13be8393a772917a87dc78",
"assets/img/shop/qr/decafGSH200_DR1EA.png": "c684dbfa3674ea30c2ae7a8a32b35371",
"assets/img/shop/qr/beanEY2_1EA.png": "079dba1fdead12686233da1af930a568",
"assets/img/shop/qr/decafBSN200_DR2EA.png": "40b18b2e49976aa6bf4cfe7013d27d92",
"assets/img/shop/qr/beanGA200_DR2EA.png": "790e7651e1c35f3116ba3c1e76170d85",
"assets/img/shop/qr/beanBSE_DR1EA.png": "4e00274fd299ae525b59a2ee7247308d",
"assets/img/shop/qr/beanEY2200_2EA.png": "bf6abf1641dfc342728d80f372775d4c",
"assets/img/shop/qr/beanGBJK_5EA.png": "4128260eeaee7f8ea88e0bb515660609",
"assets/img/shop/qr/decafCMS200_1EA.png": "b0d89e0f3dd6146703741181e94c961f",
"assets/img/shop/qr/decafED4200_2EA.png": "bcfc73eb6636f0590bda943295615087",
"assets/img/shop/qr/dripbagSL_2EA.png": "467e07409febdadcadcbc3fa1f766571",
"assets/img/shop/qr/decafCMS_1EA.png": "919cd08727315f29d9d11321627baf11",
"assets/img/shop/qr/stickYI_100_1EA.png": "0ab2f832b795327530afde1a57e0f0c5",
"assets/img/shop/qr/stickTP_100_5EA.png": "c1fe4e2aa8ff3be6f6a56641c8b24296",
"assets/img/shop/qr/stickYI_100_10EA.png": "eb4463fa360733410d379dd33b48561d",
"assets/img/shop/qr/decafGSH200_2EA.png": "3778d6b103a85fcfbbcea8e80da77b1f",
"assets/img/shop/qr/dripbagCS_10EA.png": "d98c46ad976c091e548bbf8c7250a923",
"assets/img/shop/qr/beanBSE_1EA.png": "1a63a875cb75349543adaf55a342a941",
"assets/img/shop/qr/beanBSE200_2EA.png": "c27a9f3ed208e157ffb85527b74dca7e",
"assets/img/shop/qr/stickYI_100_3EA.png": "3ede39948f88ca174b38672e3cd1780a",
"assets/img/shop/qr/stickYI_30_2EA.png": "3d97bf7c6a0b0eb696989629119406c9",
"assets/img/shop/qr/beanEY2_DR2EA.png": "186eef0bed0535818e4f74624594a11e",
"assets/img/shop/qr/decafGSH_1EA.png": "8d140319462c66435ec287eb896c2874",
"assets/img/shop/qr/decafBSN_2EA.png": "9496a95b9a44b5e7c75dba4d4c892665",
"assets/img/shop/qr/dripbagCT_2EA.png": "abdf86de88604cb082841ffd1b113f33",
"assets/img/shop/qr/beanKAA200_DR1EA.png": "471a8936d9f2fee7659c694ca05b00b0",
"assets/img/shop/qr/beanKAA_1EA.png": "989fca1f974040dc216fd73ea34d9240",
"assets/img/shop/qr/beanCSN_1EA.png": "eef91dbd7d9fa240f4933fcfa7597a87",
"assets/img/shop/qr/beanGA_1EA.png": "a49b1db0dc90bb21c763a35956c39b82",
"assets/img/shop/qr/decafED4200_DR2EA.png": "d11b423df20696c58e59390b791991a0",
"assets/img/shop/qr/stickTP_100_3EA.png": "4ede98406a7df16a3241b0f86430949c",
"assets/img/shop/qr/dripbagEY_10EA.png": "ad8ec678f46d81ff31e9811e1debae86",
"assets/img/shop/qr/decafBSN200_2EA.png": "1ee9185173b7e263b7e2769fd851d3cb",
"assets/img/shop/qr/beanCSN_DR2EA.png": "3bd64ddef4f84b8ca78b24faa3822bc9",
"assets/img/shop/qr/beanGA_DR1EA.png": "bdda7f45a3747472e97fcfaee16e2376",
"assets/img/shop/qr/stickTP_100_1EA.png": "6464eb0300106a59022d57439c601caf",
"assets/img/shop/qr/stickYI_100_5EA.png": "75f6307a381af517e67db304bc91f2ab",
"assets/img/shop/qr/stickYI_30_3EA.png": "a65c8cfcbcb39baac47b1be31a66113c",
"assets/img/shop/qr/decafCMS_2EA.png": "a55f2925294bbd17fc1eb4a18451b6dc",
"assets/img/shop/qr/decafGSH200_1EA.png": "6df5bd8540239b0b8c1c30ed34791dfb",
"assets/img/shop/qr/stickYI_100_2EA.png": "1b3ec835058260d64c4dc5e6a9e6f417",
"assets/img/shop/qr/decafCMS200_2EA.png": "7e66c9670392118618e8459fe532f323",
"assets/img/shop/qr/dripbagSL_1EA.png": "d4762ef1384a3459f79ff8de99acf883",
"assets/img/shop/qr/decafED4200_1EA.png": "d2c654b88d22d85bef992fb79b440810",
"assets/img/shop/qr/dripbagCT_5EA.png": "dac69b906c1ded50217d076b9900b535",
"assets/img/shop/qr/beanEY2_DR1EA.png": "4956ae685141e302d362ce58c538e251",
"assets/img/shop/qr/dripbagSL_3EA.png": "0a06851d1fd81458c436c6b5a68df859",
"assets/img/shop/qr/decafBSN_1EA.png": "277ec48904cb6c698473c6dd72b04b88",
"assets/img/shop/qr/decafGSH_2EA.png": "5b6010af446906842203eefd2ce033e0",
"assets/img/shop/qr/beanBSE200_1EA.png": "3f82e9cea618b66d91185ccda2f1e472",
"assets/img/shop/qr/beanBSE_2EA.png": "4c556442275e3b90e5d4494b1442fb20",
"assets/img/shop/qr/stickYI_30_1EA.png": "401a9fc66984a8688d475b688c217e57",
"assets/img/shop/qr/stickTP_30_10EA.png": "f73a9b2894f782a7b6e8495c037ce3d8",
"assets/img/shop/qr/decafED4200_DR1EA.png": "f8100639b598f20332804b4e72e3bab1",
"assets/img/shop/qr/stickYI_30_10EA.png": "364ebe8e26341408ca1f3efda6e31290",
"assets/img/shop/qr/stickYI_30_5EA.png": "b02e96a6b758d357bb564dbd2770ff40",
"assets/img/shop/qr/beanKAA200_DR2EA.png": "4c0602bbcab1275868c9b8a1e773a5b0",
"assets/img/shop/qr/dripbagCT_1EA.png": "49936f3bd0e13b8c9603c98071527b4b",
"assets/img/shop/qr/beanGA_2EA.png": "90d09ea4d28959804f9f9a9959006de5",
"assets/img/shop/qr/dripbagCT_10EA.png": "ef1e81d7804999d0000da44bb6c31815",
"assets/img/shop/qr/beanCSN_2EA.png": "822ac71712e834a615e747f072f498b8",
"assets/img/shop/qr/beanKAA_2EA.png": "bc44ee650eb93e3bb537621ad2dd659b",
"assets/img/shop/qr/stickTP_100_10EA.png": "353319b0ac1821c26f6a584c40d4976f",
"assets/img/shop/qr/dripbagCT_3EA.png": "23ec9f63a7d41c9abff91f4c50f0eab2",
"assets/img/shop/qr/dripbagSL_5EA.png": "85b6d0acd14a076da59b73da73c83d15",
"assets/img/shop/qr/decafBSN200_1EA.png": "9caaa612c9f94e991efffdebfa90a75a",
"assets/img/shop/qr/stickTP_100_2EA.png": "e3f2aa92cd55bd6628b30e6c6b9b9496",
"assets/img/shop/qr/beanGA_DR2EA.png": "8f7aba39a603e0dc023343271f6d1857",
"assets/img/shop/qr/beanCSN_DR1EA.png": "28a2a531fb2ad1bd13a94e7eef7fb508",
"assets/img/shop/product/thumb_beanKOC.jpg": "43b42874fe550b347c88779799d3a567",
"assets/img/shop/product/thumb_beanOCS.jpg": "b51e186133adda92a76c70937f498215",
"assets/img/shop/product/thumb_beanCMT.jpg": "780a61cfe23ec00aefec36a1be764d92",
"assets/img/shop/product/thumb_stickYI_100.jpg": "90de3eb3e178d3d018b8e3f59483c9a1",
"assets/img/shop/product/thumb_beanBSE.jpg": "7e18b9c6d27dcbd70b48ae02aafc1f3f",
"assets/img/shop/product/thumb_beanEY4.jpg": "8a042ea1b0d81eada9e9739258d13942",
"assets/img/shop/product/thumb_beanGBBS.jpg": "d84a32774d108989544867a9ddad7275",
"assets/img/shop/product/thumb_decafBSN.jpg": "ea708bfafbe6ee9f1a814b4f5aede635",
"assets/img/shop/product/thumb_beanBSF.jpg": "44baf3cb44403566af2e3ae5dfa53712",
"assets/img/shop/product/fedora_close.jpg": "6fa4c7661e2a0078ff971dc9ec8f685f",
"assets/img/shop/product/thumb_beanEY2.jpg": "79e59b2c9503fdeb6a3ed53692227a3c",
"assets/img/shop/product/thumb_stickTP_30.jpg": "e96025da404c6d8bc5f1c4f79c73ba93",
"assets/img/shop/product/thumb_beanSDB.jpg": "d84a32774d108989544867a9ddad7275",
"assets/img/shop/product/thumb_dripbagSL.jpg": "7227f63fd9df207e8472beab7d2fbe34",
"assets/img/shop/product/thumb_beanIMM.jpg": "726d6ba26ab8ebb414ae6453f0972401",
"assets/img/shop/product/stick_100.png": "bbb19a34e791a35bd7f35a9caa106a8a",
"assets/img/shop/product/thumb_beanRIB.jpg": "2e744fb699940eefea6e2fc90ff44666",
"assets/img/shop/product/thumb_costarica.jpg": "2b44772252d78808857e134ff1e41f39",
"assets/img/shop/product/thumb_beanEK1.jpg": "6b34e2ce46b9f0ae7baea39c03c708fb",
"assets/img/shop/product/thumb_beanMHB.jpg": "297afba289a271465aad67bdb8c59380",
"assets/img/shop/product/thumb_beanISM.jpg": "b3f813630cf20f2db025670379fec1a7",
"assets/img/shop/product/thumb_beanWAL.jpg": "d463eec1f470f7b95973157ed2ac781b",
"assets/img/shop/product/thumb_beanGKS.jpg": "6d2f1e2ff2f47891cb03cede2cd0c0bb",
"assets/img/shop/product/01.jpg": "939575c732a370370b84d85009b926c8",
"assets/img/shop/product/03.jpg": "939575c732a370370b84d85009b926c8",
"assets/img/shop/product/thumb_beanES4.jpg": "00cedd4314fbff38730d23e97920fae1",
"assets/img/shop/product/thumb_beanEK2.jpg": "d317dea8212c64b5682bfb30a120b48d",
"assets/img/shop/product/thumb_decafGSH.jpg": "ac3f8dcf9ede0f7d5a73f8a8fbe985da",
"assets/img/shop/product/thumb_decafED4.jpg": "d32bfb29448fc7a555fe00ac846e15b3",
"assets/img/shop/product/thumb_beanPEA.jpg": "aef0332a77478bc21749fb9dcee1eac8",
"assets/img/shop/product/thumb_dripbagCS.jpg": "9f866f267dcf462e00642e99def4fad2",
"assets/img/shop/product/02.jpg": "939575c732a370370b84d85009b926c8",
"assets/img/shop/product/12.jpg": "939575c732a370370b84d85009b926c8",
"assets/img/shop/product/06.jpg": "939575c732a370370b84d85009b926c8",
"assets/img/shop/product/thumb_beanEGU.jpg": "ab3247b2de54ea96a08e3befc6eb9eb4",
"assets/img/shop/product/thumb_beanCHK.jpg": "32499ef4f7a54b3ea5aa57bb82d8336c",
"assets/img/shop/product/thumb_beanGA.jpg": "7d01548182309a9ae3ef0d4de364b849",
"assets/img/shop/product/07.jpg": "939575c732a370370b84d85009b926c8",
"assets/img/shop/product/thumb_beanES2.jpg": "28c670460462cb2867ff4676b4e030c2",
"assets/img/shop/product/thumb_beanESS.jpg": "5e5cbc7cbb4c8dab0a8efa14a62e2b71",
"assets/img/shop/product/05.jpg": "939575c732a370370b84d85009b926c8",
"assets/img/shop/product/thumb_dripbagCT.jpg": "d465dda6649ed05494986c0348528ddf",
"assets/img/shop/product/11.jpg": "939575c732a370370b84d85009b926c8",
"assets/img/shop/product/thumb_beanTPB.jpg": "39dcd4f983d7ddc46a072a47b5c22cb1",
"assets/img/shop/product/thumb_beanCSC.jpg": "418523af68403b79bc7524c6b3b2eea8",
"assets/img/shop/product/thumb_beanGBJK.jpg": "a4337e14d7dcdf1707782f1c47ab7b8b",
"assets/img/shop/product/thumb_stickYI_30.jpg": "e96025da404c6d8bc5f1c4f79c73ba93",
"assets/img/shop/product/10.jpg": "939575c732a370370b84d85009b926c8",
"assets/img/shop/product/04.jpg": "939575c732a370370b84d85009b926c8",
"assets/img/shop/product/09.jpg": "939575c732a370370b84d85009b926c8",
"assets/img/shop/product/thumb_beanNUT.jpg": "ee5fa699f8c80f3ef1c2ed1d788d4bdb",
"assets/img/shop/product/thumb_beanCSN.jpg": "14bd44155a86b98b30d6cdda52db8856",
"assets/img/shop/product/thumb_bagCS.jpg": "9f866f267dcf462e00642e99def4fad2",
"assets/img/shop/product/08.jpg": "939575c732a370370b84d85009b926c8",
"assets/img/shop/product/thumb_stickTP_100.jpg": "90de3eb3e178d3d018b8e3f59483c9a1",
"assets/img/shop/product/coffeemockup_singleorigin-02.png": "edd569594c3fdb58379b230d59409076",
"assets/img/shop/product/thumb_beanBBV.jpg": "91e4c34d6bb24ecf57c5574fc7405f0d",
"assets/img/shop/product/thumb_beanCSH.jpg": "2d3be2eaa65b1f6bb3e8737a5b5a89bb",
"assets/img/shop/product/thumb_beanEKK.jpg": "5d4cdaebe2f4631cfdd260883412edfb",
"assets/img/shop/product/coffeemockup_singleorigin-01.png": "b6e40aec8d445ea7eb684c9a8c93bf13",
"assets/img/shop/product/thumb_beanTKA.jpg": "dbd04958a3d9cca921df679c51c3b960",
"assets/img/shop/product/thumb_beanKAA.jpg": "159463c665a84bafca28d8b4d1dded54",
"assets/img/shop/product/thumb_beanVR.jpg": "448003c6d11db738b835dc361215adc9",
"assets/img/shop/product/thumb_beanEYI.jpg": "80c36e439b7839ad89f0b81885c2a928",
"assets/img/shop/product/thumb_beanEWW.jpg": "2fe9b7afc3fabfcfe3f4d3b4073319d9",
"assets/img/shop/product/thumb_beanBSN.jpg": "a3a82e76cea7aec77778049f41e738c6",
"assets/img/shop/product/thumb_GBJK.jpg": "a4337e14d7dcdf1707782f1c47ab7b8b",
"assets/img/shop/product/thumb_dripbagEY.jpg": "bd6a4df0a4fe67d1a943fa0512fc4f3d",
"assets/img/shop/product/thumb_dripbagKA.jpg": "4bb936770b92ec27ec2e13cc930d4313",
"assets/img/shop/product/thumb_decafCMS.jpg": "240abf265f7f3a832b29264dbae2ba34",
"assets/img/shop/product/thumb_dripbagGA.jpg": "f2b94fd0343f9ac97493755a8ded3737",
"assets/img/shop/product/thumb_beanPLU.jpg": "35a7cf11860280370cdb82da45af1c1f",
"assets/img/shop/about.jpg": "fdcda8e713f6a31d20967251c46e3a77",
"assets/img/shop/banner/cat_beans3.jpg": "d0091caea86940a47c3401f91c940552",
"assets/img/shop/banner/cat_dripbag_fedora.jpg": "7b2a663cb605a155614e5fc5a42db8fa",
"assets/img/shop/banner/01.jpg": "c5ccc2b3363d1a97fcb282bc006ebe0e",
"assets/img/shop/banner/03.jpg": "da8a3334eddbffe251ffbc4804fa365b",
"assets/img/shop/banner/cat_beans1.png": "5745e8e9059e975268c0f2c81b10cab2",
"assets/img/shop/banner/02.jpg": "c5ccc2b3363d1a97fcb282bc006ebe0e",
"assets/img/shop/banner/cat_stick_banner.jpg": "9b330bcbfd8ccae4603021114818898e",
"assets/img/shop/banner/04.jpg": "e68cf03e632489ab757c2da62552240f",
"assets/img/shop/banner/cat_stick_nt.png": "51885ea98a8833282d92f8b8cb7c80c0",
"assets/img/shop/banner/04%2520-%2520%25E1%2584%2587%25E1%2585%25A9%25E1%2586%25A8%25E1%2584%2589%25E1%2585%25A1%25E1%2584%2587%25E1%2585%25A9%25E1%2586%25AB.jpg": "4fd65641de79bd8f532b84ec252ba072",
"assets/img/beanandmug_logo.jpg": "77968d0908c9263c54e20c6f8ffed564",
"assets/img/GB_widelogo_brown.png": "236568810d3a85f3ff8e92f685ab4662",
"assets/img/GB_logo_w.png": "83b4d5e369c80c66beb09ba8114c818b",
"assets/img/coffeedrip.jpg": "11ae8081d1d3263aec227977088ffaec",
"assets/img/coffeemug.jpg": "f9728a4fd602279fc664db1b9a045545",
"assets/img/cupscups01.jpg": "b913334603c58e54c63801fc6440d108",
"assets/img/Instapay_logo_bl.png": "7a77d4c4cd86fec8831479f14ca614fa",
"assets/img/GB_logo_br.png": "eb27f350076f39d61e0392f2ce603614",
"assets/img/cat_coffee.png": "43bab7fb54fe3b23fcbbfa0752f114cd",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "dd3c4233029270506ecc994d67785a37",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "613e4cc1af0eb5148b8ce409ad35446d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "d1722d5cf2c7855862f68edb85e31f88",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
