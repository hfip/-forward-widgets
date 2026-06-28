// =========================================================================
// Project: Forward Custom Modules Bundle
// Module Name: بوابة الأنمي الياباني الشاملة عبر TMDB 🧸🌸
// Developer: Telegram: @Abdulluh_X
// Telegram & Community: https://t.me/plex_arab
// All rights reserved © 2026
// =========================================================================

const TMDB_LANG = "ar-SA"; // واجهة عربية وملخصات متناسقة 100% للأعضاء

var WidgetMetadata = {
  id: "forward.abdulluhx.anime.tmdb.mega",
  title: "مكتبة الأنمي الياباني الشاملة 🧸",
  description: "أضخم بوابة مخصصة للأنميشن الياباني تضم 16 قسماً وتصنيفاً فرعياً دقيقاً مستقاة مباشرة من خوادم TMDB بحقوق المطور.",
  author: "Abdulluh.X",
  site: "https://t.me/plex_arab",
  version: "5.0.0",
  requiredVersion: "0.0.2",
  detailCacheDuration: 60,
  modules: [
    // === القسم الأول: القوائم العامة للأنمي ===
    { title: "🔥 تريند الأنميشن الياباني الحالي", description: "الأنميات الأكثر شهرة ورواجاً حالياً عالمياً", requiresWebView: false, functionName: "getAnime_Trending", cacheDuration: 3600, params: [{ name: "page", title: "رقم الصفحة", type: "page" }] },
    { title: "👑 روائع الأنمي الأعلى تقييماً", description: "أعمال الأنمي الياباني الأعلى تقييماً تاريخياً", requiresWebView: false, functionName: "getAnime_TopRated", cacheDuration: 3600, params: [{ name: "page", title: "رقم الصفحة", type: "page" }] },
    { title: "📅 أحدث إصدارات ومواسم الأنمي", description: "الأنميات المضافة حديثاً وأحدث الحلقات المتاحة", requiresWebView: false, functionName: "getAnime_Newest", cacheDuration: 3600, params: [{ name: "page", title: "رقم الصفحة", type: "page" }] },
    
    // === القسم الثاني: التصنيفات الـ 13 المخصصة بدقة ===
    { title: "⚔️ أنمي الأكشن والحركة (Action)", description: "مواسم وأفلام القتال والمغامرات الحماسية", requiresWebView: false, functionName: "getGenre_Action", cacheDuration: 3600, params: [{ name: "page", title: "رقم الصفحة", type: "page" }] },
    { title: "👨‍👩‍👧‍👦 أنمي عائلي ومناسب للجميع (Family)", description: "أجمل روائع الأنمي العائلية الدافئة", requiresWebView: false, functionName: "getGenre_Family", cacheDuration: 3600, params: [{ name: "page", title: "رقم الصفحة", type: "page" }] },
    { title: "🎨 روائع السينما والرسوم (Animation)", description: "أفلام ومسلسلات الأنميشن ذات الطابع الفني الرفيع", requiresWebView: false, functionName: "getGenre_Animation", cacheDuration: 3600, params: [{ name: "page", title: "رقم الصفحة", type: "page" }] },
    { title: "😂 أنمي كوميدي (Comedy)", description: "أعمال الأنمي الكوميدية الساخرة والخفيفة", requiresWebView: false, functionName: "getGenre_Comedy", cacheDuration: 3600, params: [{ name: "page", title: "رقم الصفحة", type: "page" }] },
    { title: "⚡ إثارة وتشويق وحبس أنفاس (Thriller)", description: "أنميات الإثارة والترقب النفسي العالي", requiresWebView: false, functionName: "getGenre_Thriller", cacheDuration: 3600, params: [{ name: "page", title: "رقم الصفحة", type: "page" }] },
    { title: "📜 أعمال وثائقية وسير ذاتية (Documentary)", description: "قصص ووثائقيات الأنمي المستوحاة من الواقع والتاريخ", requiresWebView: false, functionName: "getGenre_Documentary", cacheDuration: 3600, params: [{ name: "page", title: "رقم الصفحة", type: "page" }] },
    { title: "🎭 أعمال درامية وعميقة (Drama)", description: "القصص والملاحم الدرامية الإنسانية والمؤثرة", requiresWebView: false, functionName: "getGenre_Drama", cacheDuration: 3600, params: [{ name: "page", title: "رقم الصفحة", type: "page" }] },
    { title: "🤠 الغرب الكلاسيكي ورعاة البقر (Western)", description: "أعمال الأنمي بطابع الغرب الأمريكي الكلاسيكي", requiresWebView: false, functionName: "getGenre_Western", cacheDuration: 3600, params: [{ name: "page", title: "رقم الصفحة", type: "page" }] },
    { title: "🔍 الألغاز والتحقيق (Mystery / مايستري)", description: "أنميات ألغاز الجرائم والتحقيق الملتوية", requiresWebView: false, functionName: "getGenre_Mystery", cacheDuration: 3600, params: [{ name: "page", title: "رقم الصفحة", type: "page" }] },
    { title: "👶 أنميات الأطفال والصغار (Kids)", description: "أعمال ومسلسلات الأنمي المخصصة والمفلترة للأطفال", requiresWebView: false, functionName: "getGenre_Kids", cacheDuration: 3600, params: [{ name: "page", title: "رقم الصفحة", type: "page" }] },
    { title: "🚀 الخيال العلمي والفضاء (Sci-Fi / SF)", description: "ملاحم الساي فاي، الميكا، الروبوتات والفضاء", requiresWebView: false, functionName: "getGenre_SciFi", cacheDuration: 3600, params: [{ name: "page", title: "رقم الصفحة", type: "page" }] },
    { title: "🏹 مغامرات واستكشاف (Trail / Adventure)", description: "أنميات الرحلات الكبرى واستكشاف العوالم المجهولة", requiresWebView: false, functionName: "getGenre_Adventure", cacheDuration: 3600, params: [{ name: "page", title: "رقم الصفحة", type: "page" }] },
    { title: "🎥 تلفزيون الواقع والمسابقات (Reality)", description: "أعمال الأنمي المصنفة كبرامج واقعية وتنافسية", requiresWebView: false, functionName: "getGenre_Reality", cacheDuration: 3600, params: [{ name: "page", title: "رقم الصفحة", type: "page" }] }
  ]
};

// ==========================================================
// محرك السكربت الداخلي لجلب ومعالجة البيانات بالكامل من TMDB
// ==========================================================

async function fetchAnimeMasterData(sortType, genreId, params) {
  const page = params.page || 1;
  
  // ضبط معايير الفلترة: الأنميشن (16) + لغة الإنتاج يابانية (ja) لضمان جلب أنمي حقيقي
  let baseParams = {
    language: TMDB_LANG,
    page: page,
    with_genres: "16",
    with_original_language: "ja",
    sort_by: "popularity.desc"
  };

  // تعديل الترتيب بناءً على نوع الموديول
  if (sortType === "top_rated") baseParams.sort_by = "vote_average.desc";
  if (sortType === "newest") baseParams.sort_by = "first_air_date.desc";

  // حقن تصنيف الفرز الفرعي الذكي إذا تم استدعاؤه
  if (genreId) {
    baseParams.with_genres = `16,${genreId}`; // دمج الأنميشن مع التصنيف المطلوب (مثل الأكشن أو الرعب)
  }

  try {
    // جلب مسلسلات الأنمي التلفزيونية أولاً (وهي الأضخم في عالم الأنمي)
    const tvData = await Widget.tmdb.get("discover/tv", { params: baseParams });
    const tvResults = tvData.results || [];

    // معالجة البيانات وتحويلها لتنسيق العرض القياسي الفخم في تطبيق Forward
    return tvResults
      .filter(item => item.poster_path && item.id)
      .map(item => {
        const title = item.name || item.title;
        const rawDate = item.first_air_date || item.release_date || "";
        const year = rawDate ? ` (${rawDate.substring(0, 4)})` : "";
        
        return {
          id: item.id,
          type: "tmdb",
          mediaType: "tv",
          title: title + year,
          description: item.overview || "لا يوجد ملخص متاح باللغة العربية لهذا الأنمي حالياً.",
          releaseDate: rawDate,
          backdropPath: item.backdrop_path ? `https://image.tmdb.org/t/p/w780${item.backdrop_path}` : "",
          posterPath: item.poster_path ? `https://image.tmdb.org/t/p/w500${item.poster_path}` : "",
          rating: item.vote_average ? item.vote_average.toFixed(1) : "0.0",
          genreTitle: "أنمي ياباني"
        };
      });
  } catch (error) {
    console.error(`[TMDB Anime Fetch Error]: ${error.message}`);
    return [];
  }
}

// === دالات جلب وترجمات القوائم العامة الأساسية ===
async function getAnime_Trending(p) { return await fetchAnimeMasterData("trending", null, p); }
async function getAnime_TopRated(p) { return await fetchAnimeMasterData("top_rated", null, p); }
async function getAnime_Newest(p) { return await fetchAnimeMasterData("newest", null, p); }

// === دالات جلب التصنيفات الـ 13 المخصصة بناءً على مخرجات الـ Genres في TMDB ===
async function getGenre_Action(p) { return await fetchAnimeMasterData("trending", "10759", p); }      // أكشن ومغامرة (TV)
async function getGenre_Family(p) { return await fetchAnimeMasterData("trending", "10751", p); }      // عائلي
async function getGenre_Animation(p) { return await fetchAnimeMasterData("trending", "16", p); }       // أنميشن صرف
async function getGenre_Comedy(p) { return await fetchAnimeMasterData("trending", "35", p); }          // كوميدي
async function getGenre_Thriller(p) { return await fetchAnimeMasterData("trending", "9648", p); }      // غموض/إثارة
async function getGenre_Documentary(p) { return await fetchAnimeMasterData("trending", "99", p); }     // وثائقي
async function getGenre_Drama(p) { return await fetchAnimeMasterData("trending", "18", p); }          // دراما
async function getGenre_Western(p) { return await fetchAnimeMasterData("trending", "37", p); }        // ويسترن
async function getGenre_Mystery(p) { return await fetchAnimeMasterData("trending", "9648", p); }      // مايستري وغموض
async function getGenre_Kids(p) { return await fetchAnimeMasterData("trending", "10762", p); }         // أطفال (TV)
async function getGenre_SciFi(p) { return await fetchAnimeMasterData("trending", "10765", p); }        // خيال علمي وفانتازيا (TV)
async function getGenre_Adventure(p) { return await fetchAnimeMasterData("trending", "10759", p); }    // مغامرات
async function getGenre_Reality(p) { return await fetchAnimeMasterData("trending", "10764", p); }      // تلفزيون واقع (TV)