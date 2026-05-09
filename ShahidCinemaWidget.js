// ==UserScript==
// @name Shahid VIP 🎬
// @version 1.1.0
// @description The Ultimate Shahid VIP Cinema Widget (Multi-Language & Region Filter)
// @author Abdulluh.X (@Abdulluh_X)
// ==/UserScript==

const isEn = false;
const TMDB_LANG = "ar-SA"; // استخدام العربية الافتراضية لعرض البيانات بالكامل بالعربي

WidgetMetadata = {
  id: "forward.abdulluhx.shahid.vip.v1",
  title: "شاهد VIP 🎬",
  version: "1.1.0",
  requiredVersion: "0.0.1",
  description: "المحرك السينمائي الأقوى لمنصة شاهد: تصفح ميتاداتا المسلسلات والأفلام والممثلين عبر 26 قائمة مخصصة.",
  author: "Abdulluh.X",
  telegram: "@Abdulluh_X",
  site: "https://github.com/InchStudio/ForwardWidgets",
  modules: [
    // ════════════════════════════════════════════════════════════════
    // القوائم الـ 26 الكاملة والمنظمة للتصفح والفرز
    // ════════════════════════════════════════════════════════════════
    { id: "justAdded", title: "🍿 وصلت الحين", functionName: "justAdded", params: [{ name: "page", title: "الصفحة", type: "page" }] },
    { id: "newlyAdded", title: "✨ مضاف حديثًا", functionName: "newlyAdded", params: [{ name: "page", title: "الصفحة", type: "page" }] },
    { id: "shahidOriginals", title: "💎 أعمال MBC شاهد الأصلية", functionName: "shahidOriginals", params: [{ name: "page", title: "الصفحة", type: "page" }] },
    { id: "top10TvKSA", title: "🇸🇦 أقوى 10 مسلسلات في السعودية اليوم", functionName: "top10TvKSA", params: [{ name: "page", title: "الصفحة", type: "page" }] },
    { id: "mostSearchedShows", title: "🔍 المسلسلات الأكثر بحثًا على شاهد", functionName: "mostSearchedShows", params: [{ name: "page", title: "الصفحة", type: "page" }] },
    { id: "weekendMovie", title: "🎬 فيلمك لسهرة نهاية الأسبوع", functionName: "weekendMovie", params: [{ name: "page", title: "الصفحة", type: "page" }] },
    { id: "freeSaudiTv", title: "🇸🇦 مسلسلات سعودية مجانية", functionName: "freeSaudiTv", params: [{ name: "page", title: "الصفحة", type: "page" }] },
    { id: "topSearchedWeek", title: "🔥 الأكثر بحثاً لهذا الأسبوع", functionName: "topSearchedWeek", params: [{ name: "page", title: "الصفحة", type: "page" }] },
    { id: "freeTurkishTv", title: "🇹🇷 مسلسلات تركية مجانية", functionName: "freeTurkishTv", params: [{ name: "page", title: "الصفحة", type: "page" }] },
    { id: "comingSoon", title: "📅 قريباً وحصرياً", functionName: "comingSoon", params: [{ name: "page", title: "الصفحة", type: "page" }] },
    { id: "offThePitch", title: "⚽ خارج الملعب… اللعبة أخطر", functionName: "offThePitch", params: [{ name: "page", title: "الصفحة", type: "page" }] },
    { id: "top10MoviesKSA", title: "🇸🇦 أفضل 10 أفلام في السعودية اليوم", functionName: "top10MoviesKSA", params: [{ name: "page", title: "الصفحة", type: "page" }] },
    { id: "youAreTheHero", title: "🦸 أنت البطل هنا (أكشن وإثارة)", functionName: "youAreTheHero", params: [{ name: "page", title: "الصفحة", type: "page" }] },
    { id: "theVoiceKids", title: "🎤 The Voice Kids وعروض ترفيهية", functionName: "theVoiceKids", params: [{ name: "page", title: "الصفحة", type: "page" }] },
    { id: "liveChannels", title: "📺 قنوات بث مباشر (منوعات)", functionName: "liveChannels", params: [{ name: "page", title: "الصفحة", type: "page" }] },
    { id: "mostWatchedChannels", title: "📈 أكثر القنوات مشاهدة (MBC)", functionName: "mostWatchedChannels", params: [{ name: "page", title: "الصفحة", type: "page" }] },
    { id: "airingNowTv", title: "📡 يعرض الآن على الـ TV", functionName: "airingNowTv", params: [{ name: "page", title: "الصفحة", type: "page" }] },
    { id: "hayatAlFahad", title: "👑 مختارات من أعمال حياة الفهد", functionName: "hayatAlFahad", params: [{ name: "page", title: "الصفحة", type: "page" }] },
    { id: "freeKhalijiTv", title: "🇰🇼 مسلسلات خليجية مجاناً", functionName: "freeKhalijiTv", params: [{ name: "page", title: "الصفحة", type: "page" }] },
    { id: "freeEgyptianTv", title: "🇪🇬 مسلسلات مصرية مجانية", functionName: "freeEgyptianTv", params: [{ name: "page", title: "الصفحة", type: "page" }] },
    { id: "arabicSeries", title: "🌍 مسلسلات عربية مشتركة", functionName: "arabicSeries", params: [{ name: "page", title: "الصفحة", type: "page" }] },
    { id: "freeBollywood", title: "🇮🇳 مسلسلات بوليوود مدبلجة", functionName: "freeBollywood", params: [{ name: "page", title: "الصفحة", type: "page" }] },
    { id: "arabicMovies", title: "🎥 أفلام عربية جديدة", functionName: "arabicMovies", params: [{ name: "page", title: "الصفحة", type: "page" }] },
    { id: "unmissableForeignMovies", title: "🍿 أفلام أجنبية ما تتفوت", functionName: "unmissableForeignMovies", params: [{ name: "page", title: "الصفحة", type: "page" }] },
    { id: "alArabiyaPrograms", title: "🇸🇦 برامج وثائقية وحوارية", functionName: "alArabiyaPrograms", params: [{ name: "page", title: "الصفحة", type: "page" }] },
    { id: "culturalPrograms", title: "🏛️ برامج ثقافية وتاريخية", functionName: "culturalPrograms", params: [{ name: "page", title: "الصفحة", type: "page" }] }
  ]
};

// ═══════════════════════════════════════════════════════════════════
// 🧠 المحرك الذكي للربط مع قاعدة بيانات TMDB باستخدام معايير شاهد والمحتوى العربي
// ═══════════════════════════════════════════════════════════════════

async function smartDiscover(type, params) { 
  params.language = TMDB_LANG;
  return await fetchData(`discover/${type}`, params, type); 
}

// 1. وصلت الحين (مسلسلات عربية حديثة جداً إصدار 2026)
async function justAdded(params) {
  let query = { sort_by: "first_air_date.desc", with_original_language: "ar", "first_air_date.lte": "2026-12-31", page: params.page };
  return await smartDiscover("tv", query);
}

// 2. مضاف حديثًا (أفلام ومسلسلات عربية جديدة)
async function newlyAdded(params) {
  let query = { sort_by: "popularity.desc", with_original_language: "ar", "primary_release_date.gte": "2025-01-01", page: params.page };
  return await smartDiscover("movie", query);
}

// 3. أعمال شاهد الأصلية (استهداف شبكة MBC واستوديو شاهد مدمج)
async function shahidOriginals(params) {
  let query = { with_networks: "1516|3214", sort_by: "popularity.desc", page: params.page };
  return await smartDiscover("tv", query);
}

// 4. أقوى 10 مسلسلات في السعودية اليوم (الأعلى شهرة في المنطقة العربية حالياً)
async function top10TvKSA(params) {
  let query = { sort_by: "popularity.desc", with_original_language: "ar", "vote_count.gte": 5, page: params.page };
  return await smartDiscover("tv", query);
}

// 5. المسلسلات الأكثر بحثًا على شاهد (أعلى تقييم وتفاعل)
async function mostSearchedShows(params) {
  let query = { sort_by: "vote_average.desc", with_original_language: "ar", "vote_count.gte": 10, page: params.page };
  return await smartDiscover("tv", query);
}

// 6. فيلمك لسهرة نهاية الأسبوع (كوميدي وعائلي عربي وأجنبي ممتاز)
async function weekendMovie(params) {
  let query = { with_genres: "35|10751", sort_by: "popularity.desc", page: params.page };
  return await smartDiscover("movie", query);
}

// 7. مسلسلات سعودية مجانية (إنتاجات المملكة العربية السعودية والخليج)
async function freeSaudiTv(params) {
  let query = { with_original_language: "ar", with_origin_country: "SA", sort_by: "popularity.desc", page: params.page };
  return await smartDiscover("tv", query);
}

// 8. الأكثر بحثاً لهذا الأسبوع (التريند العربي الحالي)
async function topSearchedWeek(params) {
  return await fetchData(`trending/all/week?language=${TMDB_LANG}`, { page: params.page }, "mixed");
}

// 9. مسلسلات تركية مجانية (الدراما التركية الشهيرة على شاهد)
async function freeTurkishTv(params) {
  let query = { with_original_language: "tr", sort_by: "popularity.desc", page: params.page };
  return await smartDiscover("tv", query);
}

// 10. قريباً (أعمال قادمة تم الإعلان عنها للعام الحالي)
async function comingSoon(params) {
  const today = new Date().toISOString().split('T')[0];
  let query = { "primary_release_date.gte": today, sort_by: "primary_release_date.asc", with_original_language: "ar", page: params.page };
  return await smartDiscover("movie", query);
}

// 11. خارج الملعب (إثارة وغموض وجريمة)
async function offThePitch(params) {
  let query = { with_genres: "53|80|9648", sort_by: "popularity.desc", page: params.page };
  return await smartDiscover("movie", query);
}

// 12. أفضل 10 أفلام في السعودية اليوم (أفلام عربية وعالمية رائجة بالمملكة)
async function top10MoviesKSA(params) {
  let query = { sort_by: "popularity.desc", page: params.page };
  return await smartDiscover("movie", query);
}

// 13. أنت البطل هنا (أفلام ومسلسلات حركة ومغامرات)
async function youAreTheHero(params) {
  let query = { with_genres: "28|12", sort_by: "popularity.desc", page: params.page };
  return await smartDiscover("movie", query);
}

// 14. ذا فويس كيدز وعروض عائلية (ترفيه وموسيقى وعائلي)
async function theVoiceKids(params) {
  let query = { with_genres: "10402|10751", sort_by: "popularity.desc", page: params.page };
  return await smartDiscover("tv", query);
}

// 15. بث مباشر على مدار الساعة (قنوات شبكة MBC ومحتواها التلفزيوني الرائد)
async function liveChannels(params) {
  let query = { with_networks: "1516", sort_by: "popularity.desc", page: params.page };
  return await smartDiscover("tv", query);
}

// 16. أكثر القنوات مشاهدة (إنتاجات قنوات MBC الترفيهية والدرامية)
async function mostWatchedChannels(params) {
  let query = { with_networks: "3214", sort_by: "popularity.desc", page: params.page };
  return await smartDiscover("tv", query);
}

// 17. يعرض الآن على الـ TV (مسلسلات تعرض بشكل متزامن حالياً)
async function airingNowTv(params) {
  return await fetchData(`tv/airing_today?language=${TMDB_LANG}`, { page: params.page }, "tv");
}

// 18. مختارات حياة الفهد (الدراما الكويتية الكلاسيكية والحديثة)
async function hayatAlFahad(params) {
  // تصفية ذكية للمسلسلات الكوميدية والدرامية من دولة الكويت
  let query = { with_original_language: "ar", with_origin_country: "KW", sort_by: "popularity.desc", page: params.page };
  return await smartDiscover("tv", query);
}

// 19. مسلسلات خليجية مجاناً (مسلسلات كويتية وسعودية وإماراتية متميزة)
async function freeKhalijiTv(params) {
  let query = { with_original_language: "ar", with_origin_country: "KW|SA|AE", sort_by: "popularity.desc", page: params.page };
  return await smartDiscover("tv", query);
}

// 20. مسلسلات مصرية مجانية (الدراما والكوميديا المصرية الرائجة)
async function freeEgyptianTv(params) {
  let query = { with_original_language: "ar", with_origin_country: "EG", sort_by: "popularity.desc", page: params.page };
  return await smartDiscover("tv", query);
}

// 21. مسلسلات عربية (منوعات من سوريا، لبنان، والأردن والإنتاجات المشتركة)
async function arabicSeries(params) {
  let query = { with_original_language: "ar", sort_by: "popularity.desc", page: params.page };
  return await smartDiscover("tv", query);
}

// 22. مسلسلات بوليوود مجانية (الدراما الهندية الرائعة المدبلجة والمترجمة للعربية)
async function freeBollywood(params) {
  let query = { with_original_language: "hi|te|ta", sort_by: "popularity.desc", page: params.page };
  return await smartDiscover("tv", query);
}

// 23. أفلام عربية (أقوى إنتاجات السينما المصرية والخليجية)
async function arabicMovies(params) {
  let query = { with_original_language: "ar", sort_by: "popularity.desc", page: params.page };
  return await smartDiscover("movie", query);
}

// 24. أفلام أجنبية ما تتفوت (أفلام هوليوود الأكثر شهرة وتقييماً حالياً)
async function unmissableForeignMovies(params) {
  let query = { sort_by: "popularity.desc", "vote_average.gte": 7.0, page: params.page };
  return await smartDiscover("movie", query);
}

// 25. برامج وثائقية وحوارية (أفلام وثائقية وسير ذاتية)
async function alArabiyaPrograms(params) {
  let query = { with_genres: "99", sort_by: "popularity.desc", page: params.page };
  return await smartDiscover("movie", query);
}

// 26. برامج ثقافية وتاريخية (وثائقيات تاريخية وعلمية)
async function culturalPrograms(params) {
  let query = { with_genres: "99", with_keywords: "36|2041", sort_by: "popularity.desc", page: params.page };
  return await smartDiscover("movie", query);
}

// ════════════════════════════════════════════════════════════════
// جلب البيانات ومعالجتها عبر منفذ TMDB المعتمد رسمياً في Forward
// ════════════════════════════════════════════════════════════════
async function fetchData(api, params, forceMediaType) {
  params.language = TMDB_LANG;
  try {
    const response = await Widget.tmdb.get(api, { params: params });
    if (!response || !response.results) return [];
    
    return response.results.map((item) => {
      let mediaType = item.media_type || forceMediaType;
      if (!mediaType || mediaType === "mixed") {
        mediaType = item.title ? "movie" : "tv";
      }
      
      let titlePrefix = ""; 
      const isPopular = item.vote_average >= 7.5 && item.vote_count >= 100;
      if (isPopular) titlePrefix += "🔥 ";
      const finalTitle = titlePrefix + (item.title ?? item.name);

      return {
        id: item.id,
        type: "tmdb",
        title: finalTitle,
        description: item.overview || "لا يوجد وصف متاح لهذا العمل حالياً.",
        releaseDate: item.release_date ?? item.first_air_date,
        backdropPath: item.backdrop_path,
        posterPath: item.poster_path,
        rating: item.vote_average ? item.vote_average.toFixed(1) : "N/A",
        mediaType: mediaType,
        genreTitle: getGenreNames(item.genre_ids)
      };
    });
  } catch (error) { 
    return []; 
  }
}

function getGenreNames(ids) {
  if (!ids || !ids.length) return "";
  const map = { 
    28: "أكشن", 12: "مغامرة", 16: "أنميشن", 35: "كوميدي", 80: "جريمة", 99: "وثائقي", 
    18: "دراما", 10751: "عائلي", 14: "فانتازيا", 36: "تاريخي", 27: "رعب", 
    10402: "موسيقى", 9648: "غموض", 10749: "رومانسية", 878: "خيال علمي", 
    10770: "فيلم تلفزيوني", 53: "إثارة", 10752: "حرب", 37: "غرب أمريكي", 
    10759: "أكشن ومغامرات", 10762: "أطفال", 10765: "خيال علمي وفانتازيا" 
  };
  return ids.slice(0, 2).map(id => map[id]).filter(Boolean).join(" | ");
}
