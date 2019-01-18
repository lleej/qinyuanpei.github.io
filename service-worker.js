/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["404.html","6eb86ef941eb970f2cdf8a557dd927e0"],["about/index.html","cbca21264268e2b70cca81d51ed3ec8d"],["archives/2014/12/index.html","8e47cf7e06bf1dd4419e3c836aa69b5a"],["archives/2014/index.html","fbcb88b6724306a66d7705f16c65cb93"],["archives/2015/01/index.html","4654480cb04651f18f720dfe55b84f12"],["archives/2015/02/index.html","7f08f32b1f3026537415e80a3bb8a16c"],["archives/2015/03/index.html","e7d0d3b1f1de2adb8b2b36bea7d28b91"],["archives/2015/04/index.html","ddf01844ea9cb3daefeebb5366e3c98c"],["archives/2015/05/index.html","7fe1828db5d687701f40d4ce83154606"],["archives/2015/06/index.html","b578b010995fc41ffb57d6b51bebb791"],["archives/2015/07/index.html","7a40595f265a9daae4aedb0dfeacda0a"],["archives/2015/08/index.html","900f96458dc7bdaa5168134ccb668c1d"],["archives/2015/09/index.html","a792d8ff45c9b07a0f463cfc291b7103"],["archives/2015/10/index.html","bc6679a51aaa49720948f429444675c1"],["archives/2015/11/index.html","da80716af75cea92822ec2a3a1d58033"],["archives/2015/12/index.html","636a2d60752c3edd551aa2d1ffc9b507"],["archives/2015/index.html","f23160ad7f96d6f1bce0e73b6f9329b9"],["archives/2015/pages/2/index.html","b4a8c9175ae95b6843cdb355260c359b"],["archives/2015/pages/3/index.html","1f5c860e9e9c6ca5e0cef7642a67369d"],["archives/2015/pages/4/index.html","78cc094c0e3071031d72835acae9fcff"],["archives/2015/pages/5/index.html","71b52069011db7e5b6bf772477371945"],["archives/2015/pages/6/index.html","afdb8c3e3c74ce0b46043d81aae9b3ea"],["archives/2016/01/index.html","3da08564d88def9d38fa170eed3e3acf"],["archives/2016/03/index.html","0e8b30e515c1d14dcde2dfc125055d27"],["archives/2016/05/index.html","0fc679b20cdfc6240e5389a8162f808b"],["archives/2016/06/index.html","aeb12444e602ac0c65bedc06f2a23efe"],["archives/2016/07/index.html","f2bf4389b6403f2e704bc18d48c13f0e"],["archives/2016/09/index.html","881574de548cecc1a622c24d714721af"],["archives/2016/10/index.html","d92fed4414b5ea40d1a184c74e86b239"],["archives/2016/11/index.html","e38e27fa75827341e993599ad9ddef44"],["archives/2016/index.html","ada8a193a164dc8bad5daf2cc94e3e66"],["archives/2016/pages/2/index.html","a0a3b5d0b8e923f4e4baab6937a6df8f"],["archives/2016/pages/3/index.html","8746bd66acd7986645695fa3ed4638e7"],["archives/2017/02/index.html","7444b50eb5293ff5fdea2178975d7485"],["archives/2017/03/index.html","949b5a341e31fb3b95265febe960b646"],["archives/2017/04/index.html","c601dc4c5db676ed8e4e265e99fdb679"],["archives/2017/05/index.html","d55adcf205e0c67fe6e735d58039c73f"],["archives/2017/07/index.html","ded9da253b73122d7fa1f5091b0ce37d"],["archives/2017/08/index.html","cfc40d23ce9b0b65d93ed3edf35be81f"],["archives/2017/09/index.html","5ef67e0354242e1aec614afaf3f1d85c"],["archives/2017/10/index.html","59dd178a33262a84bbe78722ded10bea"],["archives/2017/11/index.html","d857ac7441e6a8ba0d032e5fb8ec01df"],["archives/2017/12/index.html","13dd4b338baefe4388cf9edb78898108"],["archives/2017/index.html","2452d3b11fd35b12a36757179fe677ee"],["archives/2017/pages/2/index.html","1ae810f78965784d53e91f8f159bb7f2"],["archives/2018/01/index.html","3a03215708639b6a98207ab0e37d05ed"],["archives/2018/02/index.html","1c9859675a7ab64aa444e2cd36102411"],["archives/2018/03/index.html","5ec23c6bc9c9414e28aad1f8701fe699"],["archives/2018/04/index.html","94bd34a09ea295b5a0274d51eca031f1"],["archives/2018/05/index.html","01d56f496ea1cc3c4248ac1bb4a65594"],["archives/2018/06/index.html","3c23c649aee1373ecd088e4daad96e77"],["archives/2018/07/index.html","6e185f98870d38702ec8115b588a3826"],["archives/2018/08/index.html","15192f914cefa04dc10d431059d9e1eb"],["archives/2018/09/index.html","b8e3d089a148434d33ecc6defb026243"],["archives/2018/10/index.html","8cfe005589b933f8022397924957c3b2"],["archives/2018/index.html","f610f89db3ac3eac0b1f6fe8a6884c89"],["archives/2018/pages/2/index.html","2e843993647776e5b801f06776f9f04d"],["archives/2018/pages/3/index.html","02419fe0c2603b10d387af22238d8dad"],["archives/2018/pages/4/index.html","19b87689475a0074a0eb8157896cf8cf"],["archives/2019/01/index.html","4c692f5ff3ddea5338bc4459f5ca3312"],["archives/2019/index.html","d5bd9efb9bc814475c9f9cbf4c28b8ef"],["archives/index.html","9228302d67297243aea34e0268ba41a7"],["archives/pages/10/index.html","928574b774ebbf98f1fe310e2dc792bc"],["archives/pages/11/index.html","b49ff676fb7e0dce0e30b232f693dfa6"],["archives/pages/12/index.html","9984222ce28a02165f4acc5c1b6192b2"],["archives/pages/13/index.html","f81cfa7c0920211cdb08e352a561b979"],["archives/pages/14/index.html","7183f6032ff20e3708b3bd1d3a4fdd16"],["archives/pages/2/index.html","a255266cf5b86f2026ce2cfe9d05bdfb"],["archives/pages/3/index.html","767e1b0806e5363263ef27a7e3ae9791"],["archives/pages/4/index.html","fa77438f40463b3c953898ac0ea5521b"],["archives/pages/5/index.html","340013673de1562e2a79e150a00fba6a"],["archives/pages/6/index.html","86be585a411114e5cfbcdb06851b2fd9"],["archives/pages/7/index.html","a2676ce002da16cedf44d057da50798c"],["archives/pages/8/index.html","0364e634a0a79b8659fae2cf8f30dc1b"],["archives/pages/9/index.html","f4a12a98128fd518cb64b63c7d6f3327"],["assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["assets/images/Golden_Gate.png","77b27f25f3f8c397bf55605410a83ac7"],["assets/images/alipay.jpg","68b81d440a463432623c7181a1481bdc"],["assets/images/avatar.jpg","7a1be7eef7956fd73fa1c02e0079390c"],["assets/images/brand.jpg","734f817bbb181d0180d7b37749769cc0"],["assets/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["assets/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["assets/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["assets/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["assets/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["assets/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["assets/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["assets/images/cc.png","40e8d4f2367ed503ec760572d78852de"],["assets/images/icons/bird144.png","6235fdfde5e554abbeeb5ad1318d0693"],["assets/images/icons/bird192.png","24a3e5d18d2b28825dc07a96b514afb3"],["assets/images/icons/bird36.png","bdd6d78e9b01c087b701c6bbdb6ec20e"],["assets/images/icons/bird48.png","dd7c70059f32b3a455bde9a4fba965da"],["assets/images/icons/bird72.png","b5de33bdacffe8c407faba0570ad9fee"],["assets/images/icons/bird96.png","2f91ac01fbad575f5f751e256882b8c2"],["assets/images/img-err.png","c42d1e1d72831e9a88be8f61704de267"],["assets/images/img-loading.png","5da66a37e909242c5d51b4e2e897ca7b"],["assets/images/reward.png","816c50e5edebd643cc18864a6fb0d704"],["assets/images/wechat.png","505d41f7a3c6a583a6be2b9dc6ca5597"],["assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["assets/scripts/main.js","6841c187e1a5e4acc28336897fc08f9b"],["assets/scripts/main.min.js","8a8a593a329b2a5769159fdfa99fd138"],["assets/scripts/search.js","e20a0cab5d504c5012fb0c41cda9c1fe"],["assets/scripts/search.min.js","f901db6e7faecf102f487d3920540531"],["assets/styles/fonts/fontawesome/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["assets/styles/fonts/fontawesome/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["assets/styles/fonts/fontawesome/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["assets/styles/fonts/fontawesome/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["assets/styles/fonts/roboto/Roboto-Bold.eot","ecdd509cadbf1ea78b8d2e31ec52328c"],["assets/styles/fonts/roboto/Roboto-Bold.ttf","e31fcf1885e371e19f5786c2bdfeae1b"],["assets/styles/fonts/roboto/Roboto-Bold.woff","dc81817def276b4f21395f7ea5e88dcd"],["assets/styles/fonts/roboto/Roboto-Light.eot","a990f611f2305dc12965f186c2ef2690"],["assets/styles/fonts/roboto/Roboto-Light.ttf","46e48ce0628835f68a7369d0254e4283"],["assets/styles/fonts/roboto/Roboto-Light.woff","3b813c2ae0d04909a33a18d792912ee7"],["assets/styles/fonts/roboto/Roboto-Medium.eot","4d9f3f9e5195e7b074bb63ba4ce42208"],["assets/styles/fonts/roboto/Roboto-Medium.ttf","894a2ede85a483bf9bedefd4db45cdb9"],["assets/styles/fonts/roboto/Roboto-Medium.woff","fc78759e93a6cac50458610e3d9d63a0"],["assets/styles/fonts/roboto/Roboto-Regular.eot","30799efa5bf74129468ad4e257551dc3"],["assets/styles/fonts/roboto/Roboto-Regular.ttf","df7b648ce5356ea1ebce435b3459fd60"],["assets/styles/fonts/roboto/Roboto-Regular.woff","ba3dcd8903e3d0af5de7792777f8ae0d"],["assets/styles/fonts/roboto/Roboto-Thin.eot","dfe56a876d0282555d1e2458e278060f"],["assets/styles/fonts/roboto/Roboto-Thin.ttf","94998475f6aea65f558494802416c1cf"],["assets/styles/fonts/roboto/Roboto-Thin.woff","7500519de3d82e33d1587f8042e2afcb"],["assets/styles/style.css","657d260380f7135d36dab3a0cba1664f"],["books/index.html","07c0c795e7a1636040befde5823882c7"],["categories/Unity3D/index.html","0da54c2c89bd6f22cc1ea6d8fa5df4b2"],["categories/Unity3D/pages/2/index.html","ffbe9a10f5174bd788dbcaac1e273a7d"],["categories/index.html","aa04561e8f110f57b919e68d6e77a406"],["categories/人工智能/index.html","24378ad748b3e294668604943a47bfd1"],["categories/单机游戏/index.html","12e2691243f30caee7fb9f626ccdd1b0"],["categories/开发工具/index.html","e6267b8f6179605dd9abed5c20f7cd2f"],["categories/数据分析/index.html","b49948d5e2bc13bf6d443f2e8a82dc71"],["categories/数据存储/index.html","4e38dd2a613d1d23f37787ae166e5191"],["categories/游戏开发/index.html","f5a4e97def967f1539d536feb343059b"],["categories/游戏开发/pages/2/index.html","b4b1fcb95fdb124d33be7ec0e8ce8914"],["categories/游戏引擎/index.html","7f5f80f5d432d6fbe3032ae8a9bdde69"],["categories/独立博客/index.html","7bf75e1ebb43aa9a0d647c6dd0ed019e"],["categories/生活感悟/index.html","759db302ab6b896815bb052614ffaf00"],["categories/生活感悟/pages/2/index.html","26cb32d293b5d6be5bcb3c4590b0e0f3"],["categories/生活感悟/pages/3/index.html","4439a7ac118774dcb62a9480473be0d8"],["categories/编程语言/index.html","c003274cbe5f838fd817273e8637c222"],["categories/编程语言/pages/2/index.html","064978f8f2d781dc10cd9a62552d2d0d"],["categories/编程语言/pages/3/index.html","37c979bed1f801a4055f9139b28e03fa"],["categories/编程语言/pages/4/index.html","6915e27c7ee9ca572ce11e0b8bf03492"],["categories/读书笔记/index.html","4de8afdde011cb1bdcb3278ef4d2ad48"],["categories/读书笔记/pages/2/index.html","7c3fd303264a60e01ca4444589088870"],["index.html","2189545495f7eeab1666cefccee68997"],["movies/index.html","27c893c4c110c2348a054877a99ccb36"],["musics/index.html","3250fdc83bce3170994c40d6b240d0f3"],["pages/10/index.html","3c2ed0faeb3a3e7cbeb47227be6d723a"],["pages/11/index.html","162b3ed9e53f754623798916b96b3ea0"],["pages/12/index.html","ce39e5db7b030946d57b97a9ab04c462"],["pages/13/index.html","62292f3ba63292348fbed2838b8f4181"],["pages/14/index.html","2e109d895aa5f097a33feb7d7824bee0"],["pages/2/index.html","0141996a011d870a4e35c4d9fec680cc"],["pages/3/index.html","ff7cf395befd7e63d019839c875443c0"],["pages/4/index.html","c1c505ca3228f734ddb1cb3e700dba00"],["pages/5/index.html","33d6d4eee1e6fcbda769b17232cfe685"],["pages/6/index.html","e818053b6605e1c667cc39bd62f954a8"],["pages/7/index.html","fe05404a644f8589e0178fe696dcd325"],["pages/8/index.html","23389a3b1d5737ea4bf0fbc13e99f6ad"],["pages/9/index.html","48228227e2437989eeb906d9ad2b2f69"],["posts/1059499448/index.html","9a7828811e50e3d02c4945d12efdd4bb"],["posts/1082185388/index.html","489f41830d208e6ec28e1e26f83fbf11"],["posts/1099762326/index.html","3dda3789de394726487148471ed1e46e"],["posts/1113828794/index.html","934cb4016b5cc6f57f882b1e47a92945"],["posts/1118169753/index.html","933280244a78c1e62d2bf8e1124c3985"],["posts/1124152964/index.html","ebb5fc28b3c82500dd5530aa68d452ad"],["posts/1127467740/index.html","c4594cad9e228c85365914c33e3618ef"],["posts/1150071886/index.html","03b5a68d6ff4e5bb09c61aca67123335"],["posts/1150143610/index.html","971c1fe167e30100bde560c71a6dac79"],["posts/1152813120/index.html","fa36d9523a28a5905d70e6997fc466ce"],["posts/115524443/index.html","4a1ad34113b0b041208af08a2ab4cea0"],["posts/1156673678/index.html","1c4c791f2da8e3c83a80168ef896498a"],["posts/1166840790/index.html","075c72035fb13f23ca7bf2a9b4cf389e"],["posts/1176959868/index.html","e6a908e3010954215d9593e18fdf899e"],["posts/1190622881/index.html","c6e4c8672fc1293ae4e9adaa33974788"],["posts/123663202/index.html","472b12bfa2404beea71b56c9909ee97c"],["posts/124807650/index.html","94da672c03320339fb44a09d5cebdde7"],["posts/1254783039/index.html","03eb0dd977fd27a4555a87b4ae5df6df"],["posts/1320325685/index.html","315350001cc339c54ed853f6d0cf4385"],["posts/1329254441/index.html","252783dc021138a9affcf25e73250bfd"],["posts/1357715684/index.html","645ebefa76f6e1a5d1b089a144e458be"],["posts/1358971951/index.html","3feb75a8176b0d62158659f0f6367209"],["posts/1386017461/index.html","e17632c1656a90530a618b6b1d5c3565"],["posts/1394521917/index.html","050b1c0b607bcd2427050a5a44c92762"],["posts/1424645834/index.html","fd0964f3d81ce86330539a42b99236d8"],["posts/1444577573/index.html","2a244b8760be38117fc371c18c449467"],["posts/1467630055/index.html","50e9a504a4f0317293b2d8c67934951a"],["posts/1478979553/index.html","2e20675f1fb319801b6d21a22a29503a"],["posts/166983157/index.html","0a98f5b5cecabd201a55d9a9f5409a83"],["posts/1670305415/index.html","53d8c60b61a86dd73df967e64ccb0e2b"],["posts/1684318907/index.html","f08129cfb65c9ade6ba434fd7c87e3dc"],["posts/1700650235/index.html","be462b7a11dc34af16e56f51ceded3b8"],["posts/172426938/index.html","ea4859d3c1d85602039514a2d2fa926f"],["posts/1836680899/index.html","4f592a683d897776060bac0e488f4090"],["posts/183718218/index.html","90d965101500b6dab7e40de6961c1a58"],["posts/187480982/index.html","9de2cfb6938aa8a4fe9c45dc5036ed97"],["posts/1930050594/index.html","3c8d621a5797e66cbbba19b5bf62fd8a"],["posts/1933583281/index.html","64697784fb04ebb4c02966c1b5dfdc2c"],["posts/1940333895/index.html","2021072ac79e579a5e3d07356c3b4e15"],["posts/1983298072/index.html","be3fb05d49313c2c3326c42628094ac1"],["posts/1989654282/index.html","67d7be8677152ece9ea23440d3e09f1d"],["posts/2038378679/index.html","b3f19cd3a4d8fb7abd14feeca58495c0"],["posts/2041685704/index.html","6e23c5bfd3b9d787a5d34f2f4548fa2d"],["posts/21112647/index.html","506744b2620a3da4c4740c1ae0a06638"],["posts/2158696176/index.html","a93d4c539bff4f6013413f7e7f1e130d"],["posts/2171683728/index.html","5253d67e8a461136ee918cb807f429bf"],["posts/2186770732/index.html","4344b2687d88b932dbcd4472c5776900"],["posts/2275646954/index.html","b4d9f6dcb973a3b9b9c16727724e4bd8"],["posts/2314414875/index.html","301b8c1c09260c18a8cddb6b44be1c53"],["posts/2418566449/index.html","e62079971ea6f7eff52760dcee68457b"],["posts/2462008667/index.html","c1858b941c1fe0625738c2452f3801db"],["posts/2463121881/index.html","d220a613bf7a3a217f4a285b3b8edea1"],["posts/2527231326/index.html","25fb70fdc5e199d0c94abb3f59173039"],["posts/2583252123/index.html","6c2cb6a3bd9fa3a38079e4e3302a4a40"],["posts/2613006280/index.html","8b0ee43ee8c7399383171874b84ebf52"],["posts/2617501472/index.html","5c7294e2c934512c325f12ed3349df10"],["posts/2676125676/index.html","880d4a373bfa8b3d41c963d5cda58e54"],["posts/2734896333/index.html","3cfeed65136e7d98d8764e7cc3d8e887"],["posts/2752169106/index.html","5090da87e9397272be9ce74a62fd7738"],["posts/2799263488/index.html","2d2b6beac6fdbe1f6be981d5049868b9"],["posts/2805694118/index.html","4860d8252cf0b5e5be6370c6fb0443c3"],["posts/2809571715/index.html","f5c4abddeded7ae1db89f2f2b4452df5"],["posts/2822230423/index.html","926213850f16913410145654981aff76"],["posts/2829333122/index.html","65ea3cf51cd54ea1257e58e17397b99c"],["posts/2911923212/index.html","953cf28b106f69b399e0e58adba961b1"],["posts/2941880815/index.html","9c3afab2932513be272a44e7ad10502c"],["posts/2950334112/index.html","1c45d31eeae81078771c98f4c09bbe4c"],["posts/3019914405/index.html","964b693655cbf5e12d2e8dee6f29ffbf"],["posts/3032366281/index.html","710c46b2c6cc7cbfe3321488ba08c4db"],["posts/3040357134/index.html","e204fcef99a4ac83ebc94ed7f8749439"],["posts/305484621/index.html","6268490c665033e7391cab63ce8fe3ad"],["posts/3083474169/index.html","eab2ac9dff9a8f2f3c3fdcb8cbbed0d8"],["posts/3111375079/index.html","7b282b05a87528aadd3b2fc1f62f8f58"],["posts/3120185261/index.html","8cfa9cc5eb7fbaa40ee1494e3932f59a"],["posts/316230277/index.html","064a89e8ccf5c98ce5f2c564daf7b952"],["posts/3222622531/index.html","dbb0c37096f13310c756b33f1b8945c4"],["posts/3247186509/index.html","f456fbbbc2340de2c4c82772493c8f7a"],["posts/3269605707/index.html","e35bd066cd233ee1c91f32ef75f9550e"],["posts/3291578070/index.html","4e94f577d5536bed8813df7832d1a802"],["posts/331752533/index.html","57c19563ea82e630d1ca34eb6dda5543"],["posts/3321992673/index.html","ba39e9c3013483206ec809d0d15bd9d2"],["posts/335366821/index.html","3cc3a82cd9fd5f7633ae2b7ea0377dbe"],["posts/3356910090/index.html","120c309b5a2c9ae66a198d31b6293f74"],["posts/3417652955/index.html","34a36e6d3e8a74e9c61a15a2aa170317"],["posts/3444626340/index.html","4d1a0e2dd1eb0ab900d1ce7d376c40e2"],["posts/3449402269/index.html","4f181000b4e525e950fc980536cb44ea"],["posts/345410188/index.html","e2dec55d276204842ea38ff8a20dc441"],["posts/3461518355/index.html","70b5c0072e71ae438adb15f444aca9ba"],["posts/352037321/index.html","c21010303fc747bf7c56a1b18f53c410"],["posts/3521618732/index.html","7307ae1b0f2ee5e27ab2c1bc8e216743"],["posts/3568552646/index.html","d611169eb571fe56415e034f49abf6b8"],["posts/3603924376/index.html","fabd81d4d6991e50cbc73434b18fffe5"],["posts/3637847962/index.html","4f6cfe5b2140b0270990d8991b0290ba"],["posts/3642630198/index.html","2564b7ae6d7ff317af3b160da34a4da6"],["posts/3653662258/index.html","e9f75e6705835a6161f675213220d4b7"],["posts/3653716295/index.html","866bfc49235e3b44534441bc00a07ba8"],["posts/3657008967/index.html","5ccf9fd4d308771d3e18325c5ea0ca22"],["posts/3668933172/index.html","b0067c9065b8c2dd40cd9f1eeb97b137"],["posts/3695777215/index.html","2754f97c3ceea1e07ee85731c54d0aa9"],["posts/3736599391/index.html","4564bfe537e5130f2a109cfcbaef7e8c"],["posts/3782208845/index.html","c74a02ab058dd7df57ab37ceb4677a15"],["posts/3789971938/index.html","5292b7b7db1614abe28fb80e46d72e43"],["posts/380519286/index.html","30038b16215c9210abcf2c3510aa324e"],["posts/3873710624/index.html","fea1d6263a4303357fa9524edd2f5183"],["posts/3959327595/index.html","3178f477f8f38c19dc2a3f54a03d7764"],["posts/3995512051/index.html","0058cc57e2a94607234ee34a64bcd390"],["posts/4088452183/index.html","148a8e79a5a1fe9981c635841cd708c4"],["posts/4158690468/index.html","afe3b4a30d820eeb8109e683baa234e9"],["posts/4197961431/index.html","c6c32be39953fd1508b701d7304e3e3d"],["posts/4205536912/index.html","80752c197fafa16c845b3aeb6c7c8ed4"],["posts/426338252/index.html","ee187fdf678c2b66ceb8227cf52f5dbe"],["posts/450254281/index.html","dc720ddb06abe839071dca86100829ea"],["posts/4891372/index.html","88cacb465b42f6cd99e6ca634cba9d1d"],["posts/569337285/index.html","d3e0fde276494d634cad92b12a1f6d5b"],["posts/570137885/index.html","86f93b1c1801dfa824263db6aad13450"],["posts/570888918/index.html","96e6bc500e1109c8bcfb06010f70fc8c"],["posts/582264328/index.html","2ed26ce8b253e0d5d47748f494ba5cdf"],["posts/632291273/index.html","15d4bc587eab93393b0e5e7bf8b0168f"],["posts/70687890/index.html","e83cfd1ae59d0a089f00683833e4583e"],["posts/719322223/index.html","46081d604513309401312e891b01a1e5"],["posts/720539850/index.html","8f6ae2a149059918c91b2069893b9144"],["posts/786195243/index.html","dab0e511f2a72c0d7d42a579477e1cb7"],["posts/795474045/index.html","2d077052e8e9b9d6f0ac725ff0d5f138"],["posts/815861661/index.html","2d98ce3d525e88bb0e8a731fbd11dd17"],["posts/821259985/index.html","0af580f8854c3644cbbfcd9530a434ab"],["posts/828223375/index.html","6992a756a5453803404be48b3bb19808"],["posts/887585917/index.html","3b026509253a9c2134b135ac0e14b12b"],["posts/906436376/index.html","9eb971d3e2275c393df30b2a3e7f2bc7"],["posts/907824546/index.html","db896ca4046ab9b179df1596c74b0a42"],["posts/927393529/index.html","e8ad23b5a83ce751ec8efeb804a8a6ec"],["posts/94443781/index.html","24943a939dde9793ec67353ae20b1958"],["tags/2014/index.html","63fc08b90bd3873db7334288d09f49e8"],["tags/AI/index.html","10351a328eba8d1474c8b861acde9255"],["tags/AOP/index.html","4c3f45dc0bdb5b20cefe918b06cb3a39"],["tags/AR/index.html","e051a2db4039ac279ce8f644e1c37de8"],["tags/AssetBundle/index.html","9bbd8461580899f15af8f2d83b65dae5"],["tags/C/index.html","64916966c6973dbb0e9c8330b176a532"],["tags/CG/index.html","cdb16573e2654ec7537c5e666fd99f6c"],["tags/CI/index.html","277da693bff974c26822cedcf4e68ab7"],["tags/CSharp/index.html","c9f8d745ad36f3fde62b1c75e58ed5e0"],["tags/Docker/index.html","10ebb142b00b7fead827375e59c9e830"],["tags/EF/index.html","54b89ba6f5f62306fc3eb0f616fffc86"],["tags/ES6/index.html","6a7f1db835dcf1eb0b71ba7416b187b9"],["tags/EasyAR/index.html","666bcc4bbb217730a3bcf88353eb0fae"],["tags/Excel/index.html","9f995b6dad749b6f2710d0395e3f9eeb"],["tags/FP/index.html","59ce091311d37555853d4794b4826c67"],["tags/Form/index.html","385ade07c5a32117aa01e898c71f80dd"],["tags/Git/index.html","a01e27365a946d42c376200df9fb7ba8"],["tags/Github/index.html","da98869152dcd68997867daeff2e1c7e"],["tags/HTML5/index.html","a43ee434f5b547584d947531e4f56e89"],["tags/HTTP/index.html","94523861dd17966522cd8c3f2b8ad659"],["tags/Hexo/index.html","52c666a33d45b82a602f35a0319a6240"],["tags/HttpClient/index.html","0ff75909a3757cbe4ff35e63aa2b24ad"],["tags/IDE/index.html","e722f892c8f8c79c778847bdf6e0bd5c"],["tags/JS/index.html","9d6dcf49c37d472382f6ae07947a361a"],["tags/JSON/index.html","edcba1946c575438dc8e197d464f86df"],["tags/Jexus/index.html","d4a96cc0f7b1c351ae61923b703064f5"],["tags/Kindle/index.html","6ee662d31c9c8566c19f65160614ca56"],["tags/Lambda/index.html","0ef777d62134effdbfb711da626bc6af"],["tags/Linux/index.html","3673f5269a54a3fca5b69f18f1b0a4b8"],["tags/Logger/index.html","fbc153f2af2c15f609fa572ce01c228c"],["tags/Love2D/index.html","6ef4c79611dad318ce9b04b37ec0302d"],["tags/Lua/index.html","07befe397873df87fbf2312c05dd760b"],["tags/MMD/index.html","387a854e5ec05a852f316f0a53cccd83"],["tags/MSBuild/index.html","7e83693a5e731d4b0416d2ff844c04e5"],["tags/MVVM/index.html","127d4df21c4381fc02a047ea23469ff6"],["tags/MapReduce/index.html","a8b8fc2a46aed644590ca24e0b7bf60f"],["tags/Markdown/index.html","403c7d934d49041de0cf5dcaba5ae177"],["tags/Mecanim/index.html","efc3f3d7e627effbe0d4e6937c6984a0"],["tags/Mono/index.html","4fe67df4a9f4398e80c5135f8c44bc7a"],["tags/NET-Core/index.html","b0fac71a6331a69eb196633a37863aea"],["tags/NET/index.html","008023ee31cdcb5b3b79f760eb83f47b"],["tags/OBJ/index.html","7e2c7018b655ccf83cdd3cd09bb1ccf8"],["tags/PWA/index.html","dfdc50d6267a1896fd7f1b3eb4c37059"],["tags/Python/index.html","3ac88e679afbf10e21880871cca018cb"],["tags/RESTful/index.html","7490715180f6e49a835875ecd9bf996d"],["tags/RFC/index.html","13640c7f19b32db1e6aed9996527f4ef"],["tags/RPG/index.html","dd6f5f343e386b2e6bc02fe9f58bc4d9"],["tags/React/index.html","f8145ffba536249f95b6760df976bfb6"],["tags/Redis/index.html","1c05f5e77878cecc58663f40a5453526"],["tags/SDL/index.html","2842d585f0257aa0adece81aed0d2b3d"],["tags/SQLite/index.html","c81d5eaa91ee781e4aa67c1d3b1ee290"],["tags/SVN/index.html","ff57a0114221053812dad10fa57fdad1"],["tags/Script/index.html","87c3f0e50bbadd854b875c3a9a6e706b"],["tags/Shader/index.html","a0d64db7d88ea9e6421fc4b990083667"],["tags/Socket/index.html","b5ef66005538c16a0ce917ed3e94849e"],["tags/Sonar/index.html","59e63870146561ed670c5191c60fb35f"],["tags/SourceTree/index.html","b24ff012d1f3d9f67941d8e44125559c"],["tags/Sublime/index.html","77f04816edaf2d57a22407274b75e46b"],["tags/Trace/index.html","cb8818cce7bdb457ebe12604ab58309d"],["tags/Travis/index.html","ea7e0272460518390f445fdda46a45d9"],["tags/Unity/index.html","00bb0dabddfa7ffd2cc5b5b9ded2be83"],["tags/Unity3D/index.html","fc600c46057dd2f5ddd3c59a26a33dd3"],["tags/Unity3D/pages/2/index.html","a82ea28d6a63cf38cc780a660d5b0d00"],["tags/Unity3D/pages/3/index.html","5db6d54b1c10ac3f2264ad4496074786"],["tags/VSCode/index.html","202be1208355a47ed5ebf5f29d067858"],["tags/Visual-Studio/index.html","481ccab64646137a1b17e262e26e8149"],["tags/Vue/index.html","7ff37eb926f5431b6ae70efa5679aebb"],["tags/Web/index.html","2092886916f519806aba35b25720b0f2"],["tags/WebApi/index.html","77eafd90da1375b4bef4c0ac4b38cd1d"],["tags/WebSocket/index.html","d201233f69aaf254993674c305cdf1f3"],["tags/Wechat/index.html","79fac8c564073ef91c118279e6a3a987"],["tags/Windows/index.html","dbaf188b9fb34e24956d26075d4e3c5d"],["tags/disunity/index.html","29672acd7922c1266aeabf12b33b5b40"],["tags/index.html","b03ac69d2cec37c05a85a86aaab7c8c4"],["tags/matplotlib/index.html","7a99788363e7e8721a2eef41a7f6c5b8"],["tags/uGUI/index.html","27f7721fa7a925f1cf1954e36abb9c62"],["tags/一出好戏/index.html","fa5eac3178fa6b83897c3e83a10cf383"],["tags/七牛/index.html","068ab5a3be3fac42a4dc3706fa9345fd"],["tags/主从复制/index.html","785941b7b2d38b2659b066f7062b60db"],["tags/事件/index.html","493b3ce0dc5917a4381dc8ee3ca22505"],["tags/二维码/index.html","a73bb5699009e238102f0bcfcc1c32b6"],["tags/云音乐/index.html","72bb0d6abcece97c052f3e884d302c38"],["tags/互联网/index.html","3137ad786eb2f44548cc31a42b6a47db"],["tags/亲情/index.html","2489add5701681a9aaf31948597b30f7"],["tags/人文/index.html","b3922289be42595d804d2230a98a3885"],["tags/人生/index.html","fc08cb145ca8e51fe58f4c99ed8d8a7d"],["tags/仙剑奇侠传/index.html","021c934c7c950377a07150ed41a6bdb7"],["tags/价值/index.html","5dfc0180d8224e6662c35b3d68cccac9"],["tags/优化/index.html","3a02265ae69172fb1561bc5eae3d4b4e"],["tags/全智贤/index.html","6035867c29013867461455b2eec1d2d9"],["tags/公众号/index.html","c0bb78f5c858e029cb5dcea9a01e9053"],["tags/关卡系统/index.html","97043b4d697d76216fa64ede05eec67d"],["tags/函数式编程/index.html","1e6b90d0b019156219e7ab9ded13bc8e"],["tags/别离/index.html","a78c4c11f2950ac90ab5a4728eb55a10"],["tags/前任/index.html","fbca2d6148cf50eb69be4ab8944d8091"],["tags/前端/index.html","b5c87926f4fb8d1fa5e3dc6952a14ee7"],["tags/剑指Offer/index.html","1560171eacb5b1a15734d8f792d9cbe4"],["tags/加密/index.html","625699d78c8ba0de61353aecf19b6024"],["tags/动态加载/index.html","ae93a5aa0c495ced318271af84f6ffc6"],["tags/动画/index.html","1511201be15c6d7b8cc681b823dccf7a"],["tags/单机游戏/index.html","138149ddb88c34d90ea383a95abc4a93"],["tags/印度/index.html","db991f4a9f5c9d94547d74e282d351f8"],["tags/反编译/index.html","69ea0f453b2d3482184241b2a719b08f"],["tags/同步/index.html","14ff04125f5bcd608a2d38ea97eb24f3"],["tags/命令/index.html","c657b4f7876abecf9052dfe13ef7cc0d"],["tags/和平/index.html","71399f3582bd85a244c0fcb6a9ecb629"],["tags/响应式/index.html","564f90cded06f525c8793597beebcdd8"],["tags/哲学/index.html","df7cd8b84d95f0f7956fd4d8a13ed103"],["tags/回家/index.html","657ddfe38127144beade98d0b4baee13"],["tags/回忆/index.html","cde6bcef7346946974294cfe083586b1"],["tags/回首/index.html","d9357a44981ed02c145e9460740f8c64"],["tags/图床/index.html","66ff99303292a1aa727e86142cd9457e"],["tags/图形/index.html","735975de38acc669fa4be0567ce71aa6"],["tags/塔防/index.html","3f76045f590298282e4386d4df49896a"],["tags/增强现实/index.html","c404dc1ce8c9920da026783efcf6efbb"],["tags/夏目漱石/index.html","f5b995e7e0bf10f3f23264c650f7b838"],["tags/多线程/index.html","9ffd65efda1b277bf11eda59efdd90ce"],["tags/大护法/index.html","85d54b557356358ae2c7efce5ea45d6c"],["tags/委托/index.html","d51c4d812edba0155c5e8b91d0c35269"],["tags/孤独/index.html","cb0e10c9bbe961027327eefe79ebb04c"],["tags/展望/index.html","cd0a0f45377ec77b00e4517aa3c03134"],["tags/工作/index.html","d3c39097f7d187fe17307cac87dbf860"],["tags/平凡/index.html","ad7c73f450e499a286d4832020ebf6b8"],["tags/年华/index.html","99979ac0f13b87e9131e7047b7dd7079"],["tags/开源/index.html","2f64df907f747feafa7739a0458654b2"],["tags/异常/index.html","d21172d13977fa0780db4a394e2855fb"],["tags/异步/index.html","150d6881bd4489b8810fc0362c1b5801"],["tags/引擎/index.html","ec43c69ba797ed9a51de73db07fc8dbf"],["tags/影评/index.html","caeb632404a2831ae032c2b82bcc8137"],["tags/微信/index.html","6d6b88a675952a0a0014801f6e79efc3"],["tags/微博/index.html","6aedf34f0cacae8d761b0ccbf9e8579f"],["tags/心情/index.html","1ebf901cdfca372df5c1750f21da2fd1"],["tags/思维/index.html","115708af79420f99cc945551c95dc9e0"],["tags/总结/index.html","ab027c26c56f1053223f6a94dc99d7f7"],["tags/想法/index.html","38b13e490cff0630b1b8ad791d7f36b3"],["tags/感悟/index.html","cf0a7d162a2bfe41a02ad39f90418dbd"],["tags/成长/index.html","0d92b59623e56f3e6ee8ff8ebb0e7fa8"],["tags/我是猫/index.html","3c7b37d4757e651cd3b8f9a6600ee933"],["tags/扩展/index.html","b64a26781ad943b517f1f7036ba43cef"],["tags/扩展方法/index.html","849b77c1a9f4493f820b18b36178bd60"],["tags/技术/index.html","dd46017dde5fcd0c69434bfc9d3c438d"],["tags/插件/index.html","05b285618b444ad60fffba5b8afa6dfc"],["tags/数字/index.html","3386218453234db4fb17eccd6fe0d43d"],["tags/数学/index.html","63d9d0b3651878b5a404ded73c817203"],["tags/数据/index.html","1e4a8f7fb2a1ed2b6bc4f184c2df91dc"],["tags/数据库/index.html","7f198986b5b402b0a32e3228c42e6487"],["tags/文本分类/index.html","89c33c70890464fcb5f0b24cb55ed26c"],["tags/无问西东/index.html","af1961cad73459bcc36d2392fc6a1d69"],["tags/日剧/index.html","349707f8423cca27182e4f86639e2fb9"],["tags/日志/index.html","eab67f0679b665cdb6bc530fd318658a"],["tags/日本文学/index.html","a211bea2a35270bbafd1e62c7eb4a747"],["tags/时区/index.html","5d70cdc41909880eee2b22c81e314b38"],["tags/时间/index.html","ce48f35c051fede2d02cbd9c72fce0b9"],["tags/服务器/index.html","f4b21d9d181dad9c9c92461e4ba352ec"],["tags/朝圣/index.html","5c4049855a16d2fa7b1f07cf264c8f8e"],["tags/朴素贝叶斯/index.html","32ba211ab2df2ba57bd5adff4282fc76"],["tags/架构/index.html","c29373108053557cb5bb2300839411e0"],["tags/校验/index.html","3ecc3f8e33eb93e30983a0dfbc4d57d6"],["tags/格式/index.html","e6a41494fa18b081600c9b3523e60745"],["tags/格式化/index.html","47d649b95b2e48696403af2b1e384c8c"],["tags/梦想/index.html","c9cd8099fc976d40afccb73d5103d218"],["tags/概率/index.html","be7ce05994d24fa611062cb30219cd47"],["tags/模板/index.html","e329648d5d171004665b789b8f26a97a"],["tags/毕业/index.html","6b3ab859887bbf0194310f716ff3903d"],["tags/毕业季/index.html","a70271077adb7f5e2a1a0da9fa2ecf2f"],["tags/消息/index.html","2109846a03c520335ad6585c2a265d57"],["tags/游戏/index.html","2b8560a7d4d0066110a682c6354a0f57"],["tags/游戏/pages/2/index.html","8e38b87bdfabcc29cbdf1603460919ca"],["tags/游戏开发/index.html","17ce5b8a792d17b9acbd3c932adb99c2"],["tags/游戏引擎/index.html","b523b75d717890665d60593b0a95c33b"],["tags/爱情/index.html","4402ff4a0934ad6f71b30178e3545739"],["tags/版本控制/index.html","73127f58da49d1b214fe53ccdc0b6bff"],["tags/版权/index.html","b7507f63436cc34b5985862449a89e34"],["tags/特性/index.html","f7836d2d53b38a2628090e1433875108"],["tags/状态/index.html","59c75342442a8c1c1659b93209153c6d"],["tags/现实/index.html","61b706476e00b24c3486732f2a19f62b"],["tags/生活/index.html","18994a507c1182ae732ce8a6bed347bd"],["tags/电影/index.html","d95aee874d28813e04161a59c1babdde"],["tags/画家/index.html","549516174a8079def8dc90ca094375ab"],["tags/知识共享/index.html","a74d0bdd289c084001a0a77f5f5ea36d"],["tags/矫情/index.html","cc9f95234061dea25656b54c6187385e"],["tags/程序员/index.html","9fc91a301f8439cb1e70dbeb3ce1c81e"],["tags/穹之扉/index.html","fb6e8f82a436fa0934de6e61138030dd"],["tags/穿搭/index.html","bae170f321042f37a2c0eae5a3cba57b"],["tags/童话/index.html","cba4b3bdb09610a87ae2796cdf2a4f21"],["tags/笔记/index.html","e5e82ff103740b14d3a2c8ebdf124535"],["tags/算法/index.html","69f8670244b0db03b238a45adb892eeb"],["tags/米花之味/index.html","beced4285898a25ee00c729614119caf"],["tags/缓存/index.html","9e5df2a127c8a772f9e2a6074ca9cd71"],["tags/编程/index.html","5a0ba787522c90c8f3af17f218c0f077"],["tags/编译/index.html","22ef8d66636ee6355404f9fb631e4ed5"],["tags/编辑器/index.html","1a09e539ff3b186225c3c53f2d918006"],["tags/网易/index.html","8c6b305dba91ecf566b58ced0c57c977"],["tags/脚本/index.html","d642c01d3970c370ac058144c0ecf4a7"],["tags/脚本语言/index.html","29d399ebaa992cc748517410d9848176"],["tags/虚拟摇杆/index.html","b8f8ef109209ff69c5c1e1b2b694f363"],["tags/蛋炒饭/index.html","dda9422ca2ce4d5bde654f75920c2605"],["tags/装饰器/index.html","a1d60aa3a5cf404c27c5aea9a4b5794a"],["tags/西安/index.html","18c0f95f5bb6db6cb7c48a86a70b0aff"],["tags/计算机图形/index.html","06ebe66549526d01b49a5c9865305b58"],["tags/设计/index.html","dfd4f8218418d002530776be47fd68d0"],["tags/设计模式/index.html","2e162501a6f022e47da693638c67ae58"],["tags/词云/index.html","0aa8a99b134c1d79de397127bc0f1700"],["tags/诗人/index.html","180ea932768d63f85d6b86e5be7297e8"],["tags/语法/index.html","08ad2217fe6f2bc2137f3a94fae0f31f"],["tags/请记住我/index.html","ed680eca4455a4b8d1e2f53bf7ce0ce5"],["tags/读书/index.html","30e14e1d635e4b2157b188d94424acc0"],["tags/读写分离/index.html","40b76c9d393f90e60a9eee1f333c5f42"],["tags/调试/index.html","541d829fc75a5dda099ef62a1b9e6484"],["tags/贝塞尔曲线/index.html","6ad8e6529a50ce2f72b0c6be7ce77aa7"],["tags/贪吃蛇/index.html","f269f2df354e8e1e0bb43df7902b84e0"],["tags/资源提取/index.html","c445673933de2bebe737c2260e417656"],["tags/跨平台/index.html","b57eaaa4363b10566378718be41def26"],["tags/转盘/index.html","d198ea1431a4576066162bab35f98f3f"],["tags/通信/index.html","fb157357e93844674554988cfab0ba9e"],["tags/邪不压正/index.html","f66e530763417539b7b09013d3aae5c3"],["tags/部署/index.html","be537cf673bb95d4d5b0ad4935fcf6fe"],["tags/重试/index.html","f52667a327749292b107d303da1fd767"],["tags/阅读/index.html","6d15b1969f0c7f232f1b6077588f057f"],["tags/霍金/index.html","f1e403424d924d30998b4939040de8fd"],["tags/青春/index.html","475fd8a9b9c89a7048eade05173f6e8b"],["tags/面试/index.html","b8da65b11221d0d7825a8b6f1097808f"],["tags/韩寒/index.html","7ed46228166d01e003b2b606920a1c9e"],["tags/马尔克斯/index.html","a701e0584aae7040dc535d3118217e44"],["tags/黑客/index.html","fdbfa1ad2ed9dae19e58430607c1d9fa"],["wiki/index.html","8a52bc931482b5125b92b4f562baee3f"],["works/index.html","92b40884c582e147f9313eef72582a9c"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







