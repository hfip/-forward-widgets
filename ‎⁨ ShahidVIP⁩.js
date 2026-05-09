// ==UserScript==
// @name Shahid VIP 🎬
// @version 1.2.0
// @description The Ultimate Shahid VIP Cinema Widget (Strict Matching Mode)
// @author Abdulluh.X (@Abdulluh_X)
// ==/UserScript==

const isEn = false;
const TMDB_LANG = "ar-SA"; // لغة العرض والبيانات بالكامل بالعربية

WidgetMetadata = {
  id: "forward.abdulluhx.shahid.vip.v1",
  title: "شاهد VIP 🎬",
  version: "1.2.0",
  requiredVersion: "0.0.1",
  description: "المحرك السينمائي الأقوى لمنصة شاهد: تصفح ميتاداتا المسلسلات والأفلام والممثلين عبر 26 قائمة مخصصة ومطابقة تماماً للموقع الرسمي.",
  author: "Abdulluh.X",
  telegram: "@Abdulluh_X",
  site: "https://github.com/InchStudio/ForwardWidgets",
  modules: [
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
// 🧠 خوارزميات جلب الميتاداتا المفلترة لمطابقة تصنيفات شاهد الحقيقية
// ═══════════════════════════════════════════════════════════════════

async function smartDiscover(type, params) { 
  params.language = TMDB_LANG;
  return await fetchData(`discover/${type}`, params, type); 
}

// 1. وصلت الحين: مسلسلات عربية وخليجية ومصرية حديثة جداً (2025-2026) مرتبة بالأحدث أولاً
async function justAdded(params) {
  let query = { sort_by: "first_air_date.desc", with_original_language: "ar", "first_air_date.lte": "2026-05-10", page: params.page };
  return await smartDiscover("tv", query);
}

// 2. مضاف حديثاً: ندمج الأعمال العربية الحصرية والأصلية الجديدة الرائجة حالياً (لتطابق مثل ميركاتو وسوار)
async function newlyAdded(params) {
  let query = { sort_by: "popularity.desc", with_original_language: "ar", "first_air_date.gte": "2024-01-01", page: params.page };
  return await smartDiscover("tv", query);
}

// 3. أعمال شاهد الأصلية: استهداف المعرفات الحقيقية لشركات إنتاج شاهد وMBC الرائدة (تم حل مشكلة لا توجد بيانات)
async function shahidOriginals(params) {
  let query = { with_companies: "154670|211244|177145", sort_by: "popularity.desc", page: params.page };
  let results = await smartDiscover("tv", query);
  if (!results || results.length === 0) {
    // خطة بديلة ذكية في حال لم ترجع الأرقام السابقة نتيجة: جلب أشهر إنتاجات MBC العربية
    results = await smartDiscover("tv", { with_networks: "1516|3214", sort_by: "popularity.desc", page: params.page });
  }
  return results;
}

// 4. أقوى 10 مسلسلات في السعودية اليوم (الدراما العربية الأعلى شعبية وتفاعلاً حالياً)
async function top10TvKSA(params) {
  let query = { sort_by: "popularity.desc", with_original_language: "ar", page: params.page };
  return await smartDiscover("tv", query);
}

// 5. المسلسلات الأكثر بحثًا على شاهد
async function mostSearchedShows(params) {
  let query = { sort_by: "vote_count.desc", with_original_language: "ar", page: params.page };
  return await smartDiscover("tv", query);
}

// 6. فيلمك لسهرة نهاية الأسبوع (كوميدي وعائلي عربي نال رواجاً مؤخراً كالهامور والست)
async function weekendMovie(params) {
  let query = { with_genres: "35|10751", with_original_language: "ar", sort_by: "popularity.desc", page: params.page };
  return await smartDiscover("movie", query);
}

// 7. مسلسلات سعودية مجانية
async function freeSaudiTv(params) {
  let query = { with_original_language: "ar", with_origin_country: "SA", sort_by: "popularity.desc", page: params.page };
  return await smartDiscover("tv", query);
}

// 8. الأكثر بحثاً لهذا الأسبوع (التريند العربي الأسبوعي على المنصة)
async function topSearchedWeek(params) {
  return await fetchData(`trending/tv/week?language=${TMDB_LANG}`, { page: params.page }, "tv");
}

// 9. مسلسلات تركية مجانية
async function freeTurkishTv(params) {
  let query = { with_original_language: "tr", sort_by: "popularity.desc", page: params.page };
  return await smartDiscover("tv", query);
}

// 10. قريباً وحصرياً (مسلسلات وأفلام قادمة ومُرتقبة لعام 2026)
async function comingSoon(params) {
  let query = { "first_air_date.gte": "2026-05-10", sort_by: "popularity.desc", with_original_language: "ar", page: params.page };
  let results = await smartDiscover("tv", query);
  if (!results || results.length === 0) {
    query = { "primary_release_date.gte": "2026-05-10", sort_by: "popularity.desc", with_original_language: "ar", page: params.page };
    results = await smartDiscover("movie", query);
  }
  return results;
}

// 11. خارج الملعب... اللعبة أخطر: الأعمال الدرامية العربية الرياضية والاجتماعية المشوقة (مثل الحريفة وفرسان قريح)
async function offThePitch(params) {
  let query = { with_original_language: "ar", with_genres: "18|35|10759", sort_by: "popularity.desc", page: params.page };
  return await smartDiscover("tv", query);
}

// 12. أفضل 10 أفلام في السعودية اليوم (الأفلام العربية الجديدة الأعلى رواجاً في صالات السينما والمنصات بالمملكة)
async function top10MoviesKSA(params) {
  let query = { with_original_language: "ar", sort_by: "popularity.desc", page: params.page };
  return await smartDiscover("movie", query);
}

// 13. أنت البطل هنا (أفلام الأكشن والإثارة والتشويق العربية)
async function youAreTheHero(params) {
  let query = { with_genres: "28|53", with_original_language: "ar", sort_by: "popularity.desc", page: params.page };
  return await smartDiscover("movie", query);
}

// 14. ذا فويس كيدز وعروض ترفيهية عائلية
async function theVoiceKids(params) {
  let query = { with_genres: "10764|10751", sort_by: "popularity.desc", page: params.page };
  return await smartDiscover("tv", query);
}

// 15. بث مباشر على مدار الساعة (مسلسلات قنوات MBC المميزة)
async function liveChannels(params) {
  let query = { with_networks: "1516", sort_by: "popularity.desc", page: params.page };
  return await smartDiscover("tv", query);
}

// 16. أكثر القنوات مشاهدة
async function mostWatchedChannels(params) {
  let query = { with_networks: "3214", sort_by: "popularity.desc", page: params.page };
  return await smartDiscover("tv", query);
}

// 17. يعرض الآن على الـ TV
async function airingNowTv(params) {
  return await fetchData(`tv/airing_today?language=${TMDB_LANG}`, { page: params.page }, "tv");
}

// 18. مختارات حياة الفهد (روائع الدراما الخليجية والكويتية الرائدة)
async function hayatAlFahad(params) {
  let query = { with_original_language: "ar", with_origin_country: "KW", sort_by: "popularity.desc", page: params.page };
  return await smartDiscover("tv", query);
}

// 19. مسلسلات خليجية مجاناً
async function freeKhalijiTv(params) {
  let query = { with_original_language: "ar", with_origin_country: "KW|SA|AE", sort_by: "popularity.desc", page: params.page };
  return await smartDiscover("tv", query);
}

// 20. مسلسلات مصرية مجانية
async function freeEgyptianTv(params) {
  let query = { with_original_language: "ar", with_origin_country: "EG", sort_by: "popularity.desc", page: params.page };
  return await smartDiscover("tv", query);
}

// 21. مسلسلات عربية (منوعات الشام وشمال أفريقيا والدراما المشتركة)
async function arabicSeries(params) {
  let query = { with_original_language: "ar", sort_by: "popularity.desc", page: params.page };
  return await smartDiscover("tv", query);
}

// 22. مسلسلات بوليوود مجانية
async function freeBollywood(params) {
  let query = { with_original_language: "hi|te|ta", sort_by: "popularity.desc", page: params.page };
  return await smartDiscover("tv", query);
}

// 23. أفلام عربية جديدة
async function arabicMovies(params) {
  let query = { with_original_language: "ar", sort_by: "popularity.desc", page: params.page };
  return await smartDiscover("movie", query);
}

// 24. أفلام أجنبية ما تتفوت
async function unmissableForeignMovies(params) {
  let query = { sort_by: "popularity.desc", "vote_average.gte": 7.0, page: params.page };
  return await smartDiscover("movie", query);
}

// 25. برامج وثائقية وحوارية (أفلام وبرامج وثائقية ممتازة)
async function alArabiyaPrograms(params) {
  let query = { with_genres: "99", sort_by: "popularity.desc", page: params.page };
  return await smartDiscover("movie", query);
}

// 26. برامج ثقافية وتاريخية (وثائقيات ذات طابع تاريخي)
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
