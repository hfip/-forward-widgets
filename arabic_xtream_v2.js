// ============================================================
//  🌙 ويدجت عربي شامل — Xtream API
//  مصدر البيانات: TMDB المدمج في Forward + Xtream API
//  مستوحى من أسلوب DexWorld Pro
//  بقلم: Abdulluh.X | @Abdulluh_X
// ============================================================

const TMDB_LANG = "ar-SA";

WidgetMetadata = {
  id: "abdulluh.arabic.xtream.v1",
  title: "🌙 عربي شامل — Xtream",
  version: "1.0.0",
  requiredVersion: "0.0.1",
  description: "قوائم عربية شاملة: مسلسلات، أفلام، رمضانيات، أنيمي — كل ما في سيرفرك منظم بشكل جميل",
  author: "Abdulluh.X",
  site: "https://t.me/Abdulluh_X",

  modules: [

    // ════════════════════════════════════════════════════════
    // ⚙️ إعداد الاتصال بالسيرفر
    // ════════════════════════════════════════════════════════
    // ملاحظة: يجب إضافة بيانات السيرفر عبر Xtream API Live
    // في إعدادات Forward → مصادر المحتوى

    // ════════════════════════════════════════════════════════
    // 🔴 المسلسلات العربية
    // ════════════════════════════════════════════════════════

    {
      id: "arabicSeriesPopular",
      title: "📺 مسلسلات عربية — رائجة",
      functionName: "arabicSeriesPopular",
      params: [
        { name: "sort_by", title: "الترتيب", type: "enumeration", enumOptions: [
          { title: "🔥 جديد ومشهور", value: "popular_new" },
          { title: "🌟 الأشهر على الإطلاق", value: "popularity.desc" },
          { title: "⭐ الأعلى تقييماً", value: "vote_average.desc" }
        ]},
        { name: "page", title: "الصفحة", type: "page" }
      ]
    },

    {
      id: "ramadanSeries",
      title: "🌙 مسلسلات رمضان 2026",
      functionName: "ramadanSeries",
      params: [
        { name: "country", title: "البلد", type: "enumeration", enumOptions: [
          { title: "🌍 الكل", value: "all" },
          { title: "🇸🇦 خليجي", value: "gulf" },
          { title: "🇪🇬 مصري", value: "egypt" },
          { title: "🇸🇾 سوري / شامي", value: "syria" },
          { title: "🇲🇦 مغربي", value: "morocco" },
          { title: "🇹🇳 تونسي / جزائري / ليبي", value: "maghreb" },
          { title: "🇮🇶 عراقي", value: "iraq" },
          { title: "🇾🇪 يمني", value: "yemen" },
          { title: "🇯🇴 أردني / فلسطيني", value: "jordan" }
        ]},
        { name: "page", title: "الصفحة", type: "page" }
      ]
    },

    {
      id: "arabicSeriesByType",
      title: "📂 مسلسلات عربية — حسب النوع",
      functionName: "arabicSeriesByType",
      params: [
        { name: "subtype", title: "التصنيف", type: "enumeration", enumOptions: [
          { title: "🏔️ بدوية", value: "bedouin" },
          { title: "🕌 إسلامية / دينية", value: "islamic" },
          { title: "😂 كوميدي", value: "comedy" },
          { title: "🕵️ جريمة وغموض", value: "crime" },
          { title: "💕 رومانسية", value: "romance" },
          { title: "🎭 دراما", value: "drama" },
          { title: "📜 تاريخية", value: "historical" },
          { title: "🎬 مدبلجة", value: "dubbed" },
          { title: "📺 قصيرة للويكند", value: "mini" }
        ]},
        { name: "page", title: "الصفحة", type: "page" }
      ]
    },

    {
      id: "khaleejiSeries",
      title: "🇸🇦 مسلسلات خليجية",
      functionName: "khaleejiSeries",
      params: [
        { name: "sort_by", title: "الترتيب", type: "enumeration", enumOptions: [
          { title: "🔥 جديد ومشهور", value: "popular_new" },
          { title: "🌟 الأشهر", value: "popularity.desc" }
        ]},
        { name: "page", title: "الصفحة", type: "page" }
      ]
    },

    {
      id: "egyptSeries",
      title: "🇪🇬 مسلسلات مصرية",
      functionName: "egyptSeries",
      params: [
        { name: "sort_by", title: "الترتيب", type: "enumeration", enumOptions: [
          { title: "🔥 جديد ومشهور", value: "popular_new" },
          { title: "🌟 الأشهر", value: "popularity.desc" }
        ]},
        { name: "page", title: "الصفحة", type: "page" }
      ]
    },

    {
      id: "syrianSeries",
      title: "🇸🇾 مسلسلات سورية / حارة شامية",
      functionName: "syrianSeries",
      params: [
        { name: "sort_by", title: "الترتيب", type: "enumeration", enumOptions: [
          { title: "🔥 جديد ومشهور", value: "popular_new" },
          { title: "🌟 الأشهر", value: "popularity.desc" }
        ]},
        { name: "page", title: "الصفحة", type: "page" }
      ]
    },

    // ════════════════════════════════════════════════════════
    // 🎬 الأفلام العربية
    // ════════════════════════════════════════════════════════

    {
      id: "arabicMovies",
      title: "🎬 أفلام عربية",
      functionName: "arabicMovies",
      params: [
        { name: "subtype", title: "النوع", type: "enumeration", enumOptions: [
          { title: "🌍 الكل", value: "all" },
          { title: "🇸🇦 خليجية", value: "gulf" },
          { title: "🇪🇬 مصرية", value: "egypt" },
          { title: "🇸🇾 شامية", value: "syria" },
          { title: "🎭 كوميدي", value: "comedy" },
          { title: "🎬 كلاسيك", value: "classic" },
          { title: "🌙 إسلامية", value: "islamic" }
        ]},
        { name: "sort_by", title: "الترتيب", type: "enumeration", enumOptions: [
          { title: "🔥 جديد ومشهور", value: "popular_new" },
          { title: "🌟 الأشهر", value: "popularity.desc" },
          { title: "⭐ الأعلى تقييماً", value: "vote_average.desc" }
        ]},
        { name: "page", title: "الصفحة", type: "page" }
      ]
    },

    {
      id: "arabicMoviesByYear",
      title: "📅 أفلام عربية — حسب السنة",
      functionName: "arabicMoviesByYear",
      params: [
        { name: "year", title: "السنة", type: "enumeration", enumOptions: [
          { title: "2026", value: "2026" },
          { title: "2025", value: "2025" },
          { title: "2024", value: "2024" },
          { title: "2023", value: "2023" },
          { title: "2022", value: "2022" },
          { title: "2021", value: "2021" },
          { title: "2020", value: "2020" },
          { title: "قديمة (قبل 2010)", value: "classic" }
        ]},
        { name: "page", title: "الصفحة", type: "page" }
      ]
    },

    // ════════════════════════════════════════════════════════
    // 🇹🇷 المسلسلات والأفلام التركية
    // ════════════════════════════════════════════════════════

    {
      id: "turkishContent",
      title: "🇹🇷 الدراما التركية",
      functionName: "turkishContent",
      params: [
        { name: "type", title: "النوع", type: "enumeration", enumOptions: [
          { title: "📺 مسلسلات", value: "tv" },
          { title: "🎬 أفلام", value: "movie" }
        ]},
        { name: "lang_type", title: "النسخة", type: "enumeration", enumOptions: [
          { title: "🔤 مترجمة", value: "dubbed_sub" },
          { title: "🎙️ مدبلجة", value: "dubbed" }
        ]},
        { name: "sort_by", title: "الترتيب", type: "enumeration", enumOptions: [
          { title: "🔥 جديد ومشهور", value: "popular_new" },
          { title: "🌟 الأشهر", value: "popularity.desc" }
        ]},
        { name: "page", title: "الصفحة", type: "page" }
      ]
    },

    // ════════════════════════════════════════════════════════
    // 🌍 المسلسلات والأفلام الأجنبية
    // ════════════════════════════════════════════════════════

    {
      id: "foreignSeries",
      title: "🌍 مسلسلات أجنبية",
      functionName: "foreignSeries",
      params: [
        { name: "subtype", title: "النوع", type: "enumeration", enumOptions: [
          { title: "🌍 الكل", value: "all" },
          { title: "🇷🇺 روسية", value: "ru" },
          { title: "🇮🇳 هندية", value: "hi" },
          { title: "🇰🇷 كورية", value: "ko" },
          { title: "🇪🇸 إسبانية", value: "es" },
          { title: "🇩🇪 ألمانية", value: "de" },
          { title: "🇫🇷 فرنسية", value: "fr" },
          { title: "🌏 آسيوية", value: "asian" }
        ]},
        { name: "lang_type", title: "النسخة", type: "enumeration", enumOptions: [
          { title: "🔤 مترجمة", value: "sub" },
          { title: "🎙️ مدبلجة", value: "dub" }
        ]},
        { name: "year", title: "السنة", type: "enumeration", enumOptions: [
          { title: "📅 الكل", value: "all" },
          { title: "2026", value: "2026" },
          { title: "2025", value: "2025" },
          { title: "2024", value: "2024" },
          { title: "2023", value: "2023" },
          { title: "2022", value: "2022" },
          { title: "2021", value: "2021" },
          { title: "2020", value: "2020" },
          { title: "قديمة", value: "old" }
        ]},
        { name: "page", title: "الصفحة", type: "page" }
      ]
    },

    {
      id: "foreignMovies",
      title: "🎬 أفلام أجنبية",
      functionName: "foreignMovies",
      params: [
        { name: "subtype", title: "التصنيف", type: "enumeration", enumOptions: [
          { title: "🌍 الكل", value: "all" },
          { title: "🇮🇳 هندية", value: "hi" },
          { title: "🇰🇷 كورية", value: "ko" },
          { title: "🇩🇪 ألمانية", value: "de" },
          { title: "🇫🇷 فرنسية", value: "fr" },
          { title: "🌏 آسيوية", value: "asian" }
        ]},
        { name: "year", title: "السنة", type: "enumeration", enumOptions: [
          { title: "📅 الكل", value: "all" },
          { title: "2026", value: "2026" },
          { title: "2025", value: "2025" },
          { title: "2024", value: "2024" },
          { title: "2023", value: "2023" },
          { title: "قديمة", value: "old" }
        ]},
        { name: "page", title: "الصفحة", type: "page" }
      ]
    },

    // ════════════════════════════════════════════════════════
    // 🗾 الأنيمي
    // ════════════════════════════════════════════════════════

    {
      id: "animeArabic",
      title: "✨ أنيمي عربي",
      functionName: "animeArabic",
      params: [
        { name: "lang_type", title: "النسخة", type: "enumeration", enumOptions: [
          { title: "🔤 مترجم", value: "sub" },
          { title: "🎙️ مدبلج", value: "dub" },
          { title: "🇨🇳 أنيمي صيني", value: "chinese" }
        ]},
        { name: "sort_by", title: "الترتيب", type: "enumeration", enumOptions: [
          { title: "🔥 رائج", value: "popularity.desc" },
          { title: "⭐ الأعلى تقييماً", value: "vote_average.desc" }
        ]},
        { name: "page", title: "الصفحة", type: "page" }
      ]
    },

    // ════════════════════════════════════════════════════════
    // 🎭 المنصات العالمية
    // ════════════════════════════════════════════════════════

    {
      id: "streamingPlatforms",
      title: "🍿 المنصات العالمية",
      functionName: "streamingPlatforms",
      params: [
        { name: "platform", title: "المنصة", type: "enumeration", enumOptions: [
          { title: "Netflix", value: "8" },
          { title: "Disney+", value: "337" },
          { title: "Amazon Prime", value: "9" },
          { title: "Max (HBO)", value: "1899" },
          { title: "Apple TV+", value: "350" },
          { title: "OSN+", value: "all" },
          { title: "Shahid", value: "all" }
        ]},
        { name: "type", title: "النوع", type: "enumeration", enumOptions: [
          { title: "📺 مسلسلات", value: "tv" },
          { title: "🎬 أفلام", value: "movie" }
        ]},
        { name: "page", title: "الصفحة", type: "page" }
      ]
    },

    // ════════════════════════════════════════════════════════
    // 👶 الأطفال
    // ════════════════════════════════════════════════════════

    {
      id: "kidsContent",
      title: "👶 محتوى الأطفال",
      functionName: "kidsContent",
      params: [
        { name: "subtype", title: "النوع", type: "enumeration", enumOptions: [
          { title: "🌍 الكل", value: "all" },
          { title: "🕌 إسلامي", value: "islamic" },
          { title: "🎨 كرتون عربي", value: "arabic_cartoon" },
          { title: "🇲🇦 أطفال مغربي", value: "moroccan" },
          { title: "🇹🇳 أطفال تونسي", value: "tunisian" },
          { title: "🔤 مترجم", value: "subbed" },
          { title: "🎙️ مدبلج", value: "dubbed" }
        ]},
        { name: "page", title: "الصفحة", type: "page" }
      ]
    },

    // ════════════════════════════════════════════════════════
    // 📺 الوثائقيات والبرامج
    // ════════════════════════════════════════════════════════

    {
      id: "documentaries",
      title: "🧠 وثائقيات وبرامج",
      functionName: "documentaries",
      params: [
        { name: "subtype", title: "النوع", type: "enumeration", enumOptions: [
          { title: "🌍 الكل", value: "all" },
          { title: "🌿 طبيعة وعلوم", value: "nature" },
          { title: "📰 أخبار وتحليل", value: "news" },
          { title: "🕌 ديني وإسلامي", value: "islamic" },
          { title: "🌐 الجزيرة الوثائقية", value: "aljazeera" },
          { title: "🎙️ بودكاست", value: "podcast" },
          { title: "🎭 مسرحيات", value: "theater" },
          { title: "⚽ رياضة", value: "sports" }
        ]},
        { name: "page", title: "الصفحة", type: "page" }
      ]
    },

    // ════════════════════════════════════════════════════════
    // 🔥 التريند والمميز
    // ════════════════════════════════════════════════════════

    {
      id: "trendingNow",
      title: "🔥 التريند الآن",
      functionName: "trendingNow",
      params: [
        { name: "type", title: "النوع", type: "enumeration", enumOptions: [
          { title: "🎬 أفلام", value: "movie" },
          { title: "📺 مسلسلات", value: "tv" }
        ]},
        { name: "page", title: "الصفحة", type: "page" }
      ]
    },

    {
      id: "masterpieceVault",
      title: "👑 تحف سينمائية",
      functionName: "masterpieceVault",
      params: [
        { name: "type", title: "النوع", type: "enumeration", enumOptions: [
          { title: "🎬 أفلام", value: "movie" },
          { title: "📺 مسلسلات", value: "tv" }
        ]},
        { name: "lang", title: "اللغة", type: "enumeration", enumOptions: [
          { title: "🌍 الكل", value: "all" },
          { title: "🇸🇦 عربي", value: "ar" },
          { title: "🇺🇸 إنجليزي", value: "en" },
          { title: "🇹🇷 تركي", value: "tr" },
          { title: "🇰🇷 كوري", value: "ko" }
        ]},
        { name: "page", title: "الصفحة", type: "page" }
      ]
    },

    {
      id: "globalSearch",
      title: "🔍 بحث شامل",
      functionName: "globalSearch",
      params: [
        { name: "query", title: "اكتب اسم الفيلم أو المسلسل", type: "input", value: "" },
        { name: "type", title: "النوع", type: "enumeration", enumOptions: [
          { title: "🌍 الكل", value: "multi" },
          { title: "🎬 أفلام", value: "movie" },
          { title: "📺 مسلسلات", value: "tv" }
        ]}
      ]
    }

  ]
};

// ════════════════════════════════════════════════════════════════
// 🧠 المساعدات الأساسية
// ════════════════════════════════════════════════════════════════

// بناء query ذكي مع دعم popular_new
function buildQuery(type, sortBy, page, extra = {}) {
  const today = new Date().toISOString().split("T")[0];
  let query = { page: page || 1, "vote_count.gte": 5, language: TMDB_LANG, ...extra };

  if (sortBy === "popular_new") {
    const cutoff = new Date();
    cutoff.setFullYear(cutoff.getFullYear() - 5);
    query.sort_by = "popularity.desc";
    const dateField = type === "movie" ? "primary_release_date" : "first_air_date";
    query[`${dateField}.gte`] = cutoff.toISOString().split("T")[0];
    query[`${dateField}.lte`] = today;
  } else {
    query.sort_by = sortBy || "popularity.desc";
    const dateField = type === "movie" ? "primary_release_date" : "first_air_date";
    query[`${dateField}.lte`] = today;
  }
  return query;
}

// جلب من TMDB المدمج في Forward
async function tmdbDiscover(type, query) {
  query.language = TMDB_LANG;
  try {
    const response = await Widget.tmdb.get(`discover/${type}`, { params: query });
    if (!response || !response.results) return [];
    return formatResults(response.results, type);
  } catch (e) { return []; }
}

async function tmdbFetch(endpoint, query) {
  query.language = TMDB_LANG;
  try {
    const response = await Widget.tmdb.get(endpoint, { params: query });
    if (!response || !response.results) return [];
    const type = endpoint.includes("movie") ? "movie" : "tv";
    return formatResults(response.results, type);
  } catch (e) { return []; }
}

// تنسيق النتائج
function formatResults(items, forceType) {
  return items.map(item => {
    const mediaType = item.media_type || forceType || (item.title ? "movie" : "tv");
    const isGem = item.vote_average >= 8.0 && item.vote_count >= 1000;
    const title = (isGem ? "👑 " : "") + (item.title || item.name || "بدون عنوان");
    return {
      id: item.id,
      type: "tmdb",
      title,
      description: item.overview || "لا يوجد وصف متاح.",
      releaseDate: item.release_date || item.first_air_date,
      backdropPath: item.backdrop_path,
      posterPath: item.poster_path,
      rating: item.vote_average ? item.vote_average.toFixed(1) : "N/A",
      mediaType,
      genreTitle: getGenreNames(item.genre_ids)
    };
  });
}

function getGenreNames(ids) {
  if (!ids || !ids.length) return "";
  const map = { 28:"أكشن",12:"مغامرات",16:"أنيمي",35:"كوميدي",80:"جريمة",99:"وثائقي",18:"دراما",10751:"عائلي",14:"فانتازيا",36:"تاريخي",27:"رعب",10402:"موسيقى",9648:"غموض",10749:"رومانسي",878:"خيال علمي",53:"إثارة",10752:"حرب",37:"غرب",10759:"أكشن/مغامرات",10762:"أطفال",10764:"واقع",10765:"خيال علمي/فانتازيا",10767:"حوارية",10768:"حرب وسياسة" };
  return ids.slice(0, 2).map(id => map[id]).filter(Boolean).join("، ");
}

// ════════════════════════════════════════════════════════════════
// 📺 دوال المسلسلات العربية
// ════════════════════════════════════════════════════════════════

async function arabicSeriesPopular(params) {
  return await tmdbDiscover("tv", buildQuery("tv", params.sort_by, params.page, { with_original_language: "ar" }));
}

async function ramadanSeries(params) {
  const countryKeywords = {
    gulf: "خليج", egypt: "مصر", syria: "سوريا", morocco: "المغرب",
    maghreb: "تونس", iraq: "عراق", yemen: "يمن", jordan: "الأردن"
  };
  let query = buildQuery("tv", "first_air_date.desc", params.page, {
    with_original_language: "ar",
    "first_air_date.gte": "2026-01-01",
    "first_air_date.lte": "2026-06-30",
    "vote_count.gte": 0
  });
  return await tmdbDiscover("tv", query);
}

async function arabicSeriesByType(params) {
  const genreMap = {
    comedy: "35", crime: "80", romance: "10749", drama: "18",
    historical: "36", mini: "18", islamic: "18", bedouin: "37", dubbed: "18"
  };
  const genre = genreMap[params.subtype] || "";
  let query = buildQuery("tv", "popularity.desc", params.page, { with_original_language: "ar" });
  if (genre) query.with_genres = genre;
  return await tmdbDiscover("tv", query);
}

async function khaleejiSeries(params) {
  // الخليج يشمل عدة دول — نجمع ar + keywords شائعة
  return await tmdbDiscover("tv", buildQuery("tv", params.sort_by, params.page, {
    with_original_language: "ar",
    with_keywords: "خليج|سعودية|كويت|إمارات"
  }));
}

async function egyptSeries(params) {
  return await tmdbDiscover("tv", buildQuery("tv", params.sort_by, params.page, {
    with_original_language: "ar",
    sort_by: params.sort_by === "popular_new" ? "popularity.desc" : params.sort_by
  }));
}

async function syrianSeries(params) {
  return await tmdbDiscover("tv", buildQuery("tv", params.sort_by, params.page, {
    with_original_language: "ar",
    with_genres: "18"
  }));
}

// ════════════════════════════════════════════════════════════════
// 🎬 دوال الأفلام العربية
// ════════════════════════════════════════════════════════════════

async function arabicMovies(params) {
  let query = buildQuery("movie", params.sort_by, params.page, { with_original_language: "ar" });
  if (params.subtype === "classic") {
    query["primary_release_date.lte"] = "2009-12-31";
    delete query["primary_release_date.gte"];
  } else if (params.subtype === "comedy") {
    query.with_genres = "35";
  } else if (params.subtype === "islamic") {
    query.with_genres = "36";
  }
  return await tmdbDiscover("movie", query);
}

async function arabicMoviesByYear(params) {
  let query = buildQuery("movie", "popularity.desc", params.page, { with_original_language: "ar" });
  if (params.year === "classic") {
    query["primary_release_date.lte"] = "2009-12-31";
    delete query["primary_release_date.gte"];
  } else {
    query["primary_release_date.gte"] = `${params.year}-01-01`;
    query["primary_release_date.lte"] = `${params.year}-12-31`;
  }
  return await tmdbDiscover("movie", query);
}

// ════════════════════════════════════════════════════════════════
// 🇹🇷 الدراما التركية
// ════════════════════════════════════════════════════════════════

async function turkishContent(params) {
  return await tmdbDiscover(params.type, buildQuery(params.type, params.sort_by, params.page, {
    with_original_language: "tr"
  }));
}

// ════════════════════════════════════════════════════════════════
// 🌍 المسلسلات والأفلام الأجنبية
// ════════════════════════════════════════════════════════════════

async function foreignSeries(params) {
  const langMap = { ru:"ru", hi:"hi", ko:"ko", es:"es", de:"de", fr:"fr", asian:"ko|ja|zh|th" };
  let lang = langMap[params.subtype] || null;
  let query = buildQuery("tv", "popularity.desc", params.page, {});
  if (lang) query.with_original_language = lang;
  if (params.year && params.year !== "all" && params.year !== "old") {
    query["first_air_date.gte"] = `${params.year}-01-01`;
    query["first_air_date.lte"] = `${params.year}-12-31`;
  } else if (params.year === "old") {
    query["first_air_date.lte"] = "2014-12-31";
    delete query["first_air_date.gte"];
  }
  return await tmdbDiscover("tv", query);
}

async function foreignMovies(params) {
  const langMap = { hi:"hi", ko:"ko", de:"de", fr:"fr", asian:"ko|ja|zh" };
  let lang = langMap[params.subtype] || null;
  let query = buildQuery("movie", "popularity.desc", params.page, {});
  if (lang) query.with_original_language = lang;
  if (params.year && params.year !== "all" && params.year !== "old") {
    query["primary_release_date.gte"] = `${params.year}-01-01`;
    query["primary_release_date.lte"] = `${params.year}-12-31`;
  } else if (params.year === "old") {
    query["primary_release_date.lte"] = "2014-12-31";
    delete query["primary_release_date.gte"];
  }
  return await tmdbDiscover("movie", query);
}

// ════════════════════════════════════════════════════════════════
// ✨ الأنيمي
// ════════════════════════════════════════════════════════════════

async function animeArabic(params) {
  const lang = params.lang_type === "chinese" ? "zh" : "ja";
  return await tmdbDiscover("tv", buildQuery("tv", params.sort_by, params.page, {
    with_genres: "16",
    with_original_language: lang
  }));
}

// ════════════════════════════════════════════════════════════════
// 🍿 المنصات العالمية
// ════════════════════════════════════════════════════════════════

async function streamingPlatforms(params) {
  if (params.platform === "all") {
    return await tmdbDiscover(params.type, buildQuery(params.type, "popularity.desc", params.page, {
      with_original_language: "ar"
    }));
  }
  return await tmdbDiscover(params.type, buildQuery(params.type, "popularity.desc", params.page, {
    with_watch_providers: params.platform,
    watch_region: "US"
  }));
}

// ════════════════════════════════════════════════════════════════
// 👶 الأطفال
// ════════════════════════════════════════════════════════════════

async function kidsContent(params) {
  let query = buildQuery("tv", "popularity.desc", params.page, { with_genres: "10762|16" });
  if (params.subtype === "arabic_cartoon" || params.subtype === "islamic" || params.subtype === "moroccan" || params.subtype === "tunisian") {
    query.with_original_language = "ar";
  }
  return await tmdbDiscover("tv", query);
}

// ════════════════════════════════════════════════════════════════
// 🧠 الوثائقيات
// ════════════════════════════════════════════════════════════════

async function documentaries(params) {
  let query = buildQuery("tv", "popularity.desc", params.page, { with_genres: "99" });
  if (params.subtype === "islamic" || params.subtype === "aljazeera" || params.subtype === "news") {
    query.with_original_language = "ar";
  } else if (params.subtype === "nature") {
    query.with_keywords = "10336,4470";
  } else if (params.subtype === "sports") {
    return await tmdbDiscover("movie", buildQuery("movie", "popularity.desc", params.page, { with_genres: "10767" }));
  }
  return await tmdbDiscover("tv", query);
}

// ════════════════════════════════════════════════════════════════
// 🔥 التريند والمميز
// ════════════════════════════════════════════════════════════════

async function trendingNow(params) {
  return await tmdbFetch(`trending/${params.type}/day`, { page: params.page });
}

async function masterpieceVault(params) {
  let query = buildQuery(params.type, "vote_average.desc", params.page, {
    "vote_average.gte": 8.0,
    "vote_count.gte": 3000
  });
  if (params.lang !== "all") query.with_original_language = params.lang;
  return await tmdbDiscover(params.type, query);
}

async function globalSearch(params) {
  if (!params.query || !params.query.trim()) return [];
  const type = params.type || "multi";
  try {
    const response = await Widget.tmdb.get(`search/${type}`, {
      params: { query: params.query, language: TMDB_LANG, page: 1 }
    });
    if (!response || !response.results) return [];
    const filtered = response.results.filter(r => r.media_type !== "person");
    return formatResults(filtered, type === "multi" ? null : type);
  } catch (e) { return []; }
}
