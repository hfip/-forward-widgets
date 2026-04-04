// ============================================================
//  ويدجت عربي شامل — Forward App
//  المصادر: TMDB + FaselHD + Akwam + Shahid + MyCima + Anime4up
//  بقلم: Abdulluh.X | @Abdulluh_X
// ============================================================

var WidgetMetadata = {
  id: "arabic_all_in_one",
  title: "🌙 عربي شامل",
  description: "جميع المصادر العربية في مكان واحد — TMDB، FaselHD، أكوام، شاهد، ماي سيما، أنمي",
  author: "Abdulluh.X",
  site: "https://t.me/Abdulluh_X",
  version: "1.0.0",
  requiredVersion: "0.0.1",
  detailCacheDuration: 300,

  modules: [

    // ═══════════════════════════════════════════════════════
    //  TMDB — مصدر البيانات الرسمي
    // ═══════════════════════════════════════════════════════

    {
      title: "🎬 أفلام رائجة — TMDB",
      description: "أشهر الأفلام حالياً من TMDB بالعربية",
      requiresWebView: false,
      functionName: "tmdbPopularMovies",
      sectionMode: false,
      cacheDuration: 3600,
      params: [
        {
          name: "tmdb_key",
          title: "TMDB API Key",
          type: "input",
          description: "أدخل مفتاح TMDB API الخاص بك",
          value: ""
        },
        {
          name: "page",
          title: "الصفحة",
          type: "page",
          value: "1"
        }
      ]
    },

    {
      title: "📺 مسلسلات رائجة — TMDB",
      description: "أشهر المسلسلات حالياً من TMDB بالعربية",
      requiresWebView: false,
      functionName: "tmdbPopularSeries",
      sectionMode: false,
      cacheDuration: 3600,
      params: [
        {
          name: "tmdb_key",
          title: "TMDB API Key",
          type: "input",
          description: "أدخل مفتاح TMDB API الخاص بك",
          value: ""
        },
        {
          name: "page",
          title: "الصفحة",
          type: "page",
          value: "1"
        }
      ]
    },

    {
      title: "⭐ الأعلى تقييماً — TMDB",
      description: "أفضل الأفلام تقييماً على TMDB",
      requiresWebView: false,
      functionName: "tmdbTopRated",
      sectionMode: false,
      cacheDuration: 7200,
      params: [
        {
          name: "tmdb_key",
          title: "TMDB API Key",
          type: "input",
          value: ""
        },
        {
          name: "content_type",
          title: "النوع",
          type: "enumeration",
          value: "movie",
          enumOptions: [
            { title: "أفلام", value: "movie" },
            { title: "مسلسلات", value: "tv" }
          ]
        },
        {
          name: "page",
          title: "الصفحة",
          type: "page",
          value: "1"
        }
      ]
    },

    {
      title: "🔍 بحث — TMDB",
      description: "ابحث عن أي فيلم أو مسلسل عبر TMDB",
      requiresWebView: false,
      functionName: "tmdbSearch",
      sectionMode: false,
      cacheDuration: 300,
      params: [
        {
          name: "tmdb_key",
          title: "TMDB API Key",
          type: "input",
          value: ""
        },
        {
          name: "query",
          title: "كلمة البحث",
          type: "input",
          description: "اكتب اسم الفيلم أو المسلسل",
          value: ""
        }
      ]
    },

    {
      title: "🎭 تصفية بالنوع — TMDB",
      description: "استعرض حسب التصنيف من TMDB",
      requiresWebView: false,
      functionName: "tmdbByGenre",
      sectionMode: false,
      cacheDuration: 7200,
      params: [
        {
          name: "tmdb_key",
          title: "TMDB API Key",
          type: "input",
          value: ""
        },
        {
          name: "content_type",
          title: "النوع",
          type: "enumeration",
          value: "movie",
          enumOptions: [
            { title: "أفلام", value: "movie" },
            { title: "مسلسلات", value: "tv" }
          ]
        },
        {
          name: "genre_id",
          title: "التصنيف",
          type: "enumeration",
          value: "28",
          enumOptions: [
            { title: "أكشن", value: "28" },
            { title: "مغامرات", value: "12" },
            { title: "كوميدي", value: "35" },
            { title: "جريمة", value: "80" },
            { title: "وثائقي", value: "99" },
            { title: "دراما", value: "18" },
            { title: "فانتازيا", value: "14" },
            { title: "رعب", value: "27" },
            { title: "رومانسي", value: "10749" },
            { title: "خيال علمي", value: "878" },
            { title: "إثارة", value: "53" },
            { title: "تاريخي", value: "36" }
          ]
        },
        {
          name: "page",
          title: "الصفحة",
          type: "page",
          value: "1"
        }
      ]
    },

    // ═══════════════════════════════════════════════════════
    //  FaselHD
    // ═══════════════════════════════════════════════════════

    {
      title: "🟡 FaselHD — أفلام",
      description: "أحدث الأفلام من FaselHD",
      requiresWebView: false,
      functionName: "faselMovies",
      sectionMode: false,
      cacheDuration: 1800,
      params: [
        { name: "page", title: "الصفحة", type: "page", value: "1" }
      ]
    },

    {
      title: "🟡 FaselHD — مسلسلات",
      description: "أحدث المسلسلات من FaselHD",
      requiresWebView: false,
      functionName: "faselSeries",
      sectionMode: false,
      cacheDuration: 1800,
      params: [
        { name: "page", title: "الصفحة", type: "page", value: "1" }
      ]
    },

    {
      title: "🟡 FaselHD — بحث",
      description: "ابحث في FaselHD",
      requiresWebView: false,
      functionName: "faselSearch",
      sectionMode: false,
      cacheDuration: 300,
      params: [
        {
          name: "query",
          title: "كلمة البحث",
          type: "input",
          value: ""
        }
      ]
    },

    // ═══════════════════════════════════════════════════════
    //  Akwam — أكوام
    // ═══════════════════════════════════════════════════════

    {
      title: "🔵 أكوام — أفلام",
      description: "أحدث الأفلام من أكوام",
      requiresWebView: false,
      functionName: "akwamMovies",
      sectionMode: false,
      cacheDuration: 1800,
      params: [
        { name: "page", title: "الصفحة", type: "page", value: "1" }
      ]
    },

    {
      title: "🔵 أكوام — مسلسلات",
      description: "أحدث المسلسلات من أكوام",
      requiresWebView: false,
      functionName: "akwamSeries",
      sectionMode: false,
      cacheDuration: 1800,
      params: [
        { name: "page", title: "الصفحة", type: "page", value: "1" }
      ]
    },

    {
      title: "🔵 أكوام — بحث",
      description: "ابحث في أكوام",
      requiresWebView: false,
      functionName: "akwamSearch",
      sectionMode: false,
      cacheDuration: 300,
      params: [
        {
          name: "query",
          title: "كلمة البحث",
          type: "input",
          value: ""
        }
      ]
    },

    // ═══════════════════════════════════════════════════════
    //  Shahid — شاهد
    // ═══════════════════════════════════════════════════════

    {
      title: "🟢 شاهد — أفلام",
      description: "أفلام منصة شاهد",
      requiresWebView: false,
      functionName: "shahidMovies",
      sectionMode: false,
      cacheDuration: 3600,
      params: [
        { name: "page", title: "الصفحة", type: "page", value: "1" }
      ]
    },

    {
      title: "🟢 شاهد — مسلسلات",
      description: "مسلسلات منصة شاهد",
      requiresWebView: false,
      functionName: "shahidSeries",
      sectionMode: false,
      cacheDuration: 3600,
      params: [
        { name: "page", title: "الصفحة", type: "page", value: "1" }
      ]
    },

    // ═══════════════════════════════════════════════════════
    //  MyCima — ماي سيما
    // ═══════════════════════════════════════════════════════

    {
      title: "🟠 ماي سيما — أفلام",
      description: "أحدث الأفلام من ماي سيما",
      requiresWebView: false,
      functionName: "mycimaMovies",
      sectionMode: false,
      cacheDuration: 1800,
      params: [
        { name: "page", title: "الصفحة", type: "page", value: "1" }
      ]
    },

    {
      title: "🟠 ماي سيما — مسلسلات",
      description: "أحدث المسلسلات من ماي سيما",
      requiresWebView: false,
      functionName: "mycimaSeries",
      sectionMode: false,
      cacheDuration: 1800,
      params: [
        { name: "page", title: "الصفحة", type: "page", value: "1" }
      ]
    },

    {
      title: "🟠 ماي سيما — بحث",
      description: "ابحث في ماي سيما",
      requiresWebView: false,
      functionName: "mycimaSearch",
      sectionMode: false,
      cacheDuration: 300,
      params: [
        {
          name: "query",
          title: "كلمة البحث",
          type: "input",
          value: ""
        }
      ]
    },

    // ═══════════════════════════════════════════════════════
    //  Anime4up / Animeiat — أنيمي
    // ═══════════════════════════════════════════════════════

    {
      title: "✨ أنيمي — Anime4up",
      description: "أحدث الأنيمي من Anime4up",
      requiresWebView: false,
      functionName: "anime4upLatest",
      sectionMode: false,
      cacheDuration: 1800,
      params: [
        { name: "page", title: "الصفحة", type: "page", value: "1" }
      ]
    },

    {
      title: "✨ أنيمي — Animeiat",
      description: "أحدث الأنيمي من Animeiat",
      requiresWebView: false,
      functionName: "animeiatLatest",
      sectionMode: false,
      cacheDuration: 1800,
      params: [
        { name: "page", title: "الصفحة", type: "page", value: "1" }
      ]
    },

    {
      title: "✨ أنيمي — بحث",
      description: "ابحث في Anime4up",
      requiresWebView: false,
      functionName: "animeSearch",
      sectionMode: false,
      cacheDuration: 300,
      params: [
        {
          name: "query",
          title: "كلمة البحث",
          type: "input",
          value: ""
        }
      ]
    }

  ] // end modules
};

// ================================================================
//  مساعدات مشتركة
// ================================================================

const HEADERS_MOBILE = {
  "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1",
  "Accept-Language": "ar,en;q=0.9",
  "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8"
};

// تحليل بطاقات HTML العامة
function parseCards(html, baseUrl) {
  const results = [];
  // يستهدف أي div يحتوي على رابط + صورة + عنوان
  const blocks = html.match(/<(?:article|div)[^>]+class="[^"]*(?:post|card|item|entry)[^"]*"[^>]*>[\s\S]*?<\/(?:article|div)>/g) || [];

  for (const block of blocks) {
    const linkMatch = block.match(/href="(https?:\/\/[^"]+)"/);
    const link = linkMatch ? linkMatch[1] : null;
    if (!link) continue;

    const titleMatch = block.match(/(?:title|alt)="([^"]{3,80})"/);
    const title = titleMatch ? titleMatch[1].replace(/\s+/g, " ").trim() : null;
    if (!title) continue;

    const imgMatch = block.match(/(?:data-src|data-lazy-src|src)="(https?:\/\/[^"]+\.(?:jpg|jpeg|png|webp)(?:\?[^"]*)?)"/i);
    const poster = imgMatch ? imgMatch[1] : null;

    const qualityMatch = block.match(/(?:quality|badge)[^>]*>([^<]{1,20})</i);
    const quality = qualityMatch ? qualityMatch[1].trim() : "";

    const yearMatch = block.match(/\b(20[0-2]\d)\b/);
    const year = yearMatch ? yearMatch[1] : "";

    results.push({
      title,
      link,
      poster,
      label: [quality, year].filter(Boolean).join(" | ") || undefined
    });
  }
  return results;
}

// تحليل تفاصيل الصفحة وإرجاع رابط الفيديو
async function scrapeDetail(url) {
  const res = await Widget.http.get(url, { headers: HEADERS_MOBILE });
  const html = res.data;

  let videoUrl = null;

  // 1. m3u8 مباشر
  const m3u8 = html.match(/["'](https?:\/\/[^"']+\.m3u8[^"']*)/);
  if (m3u8) videoUrl = m3u8[1];

  // 2. file: "..."
  if (!videoUrl) {
    const fileMatch = html.match(/file\s*:\s*["'](https?:\/\/[^"']+)/i);
    if (fileMatch) videoUrl = fileMatch[1];
  }

  // 3. iframe src
  if (!videoUrl) {
    const iframe = html.match(/<iframe[^>]+src="(https?:\/\/[^"]+)"/i);
    if (iframe) videoUrl = iframe[1];
  }

  // 4. source src
  if (!videoUrl) {
    const source = html.match(/<source[^>]+src="(https?:\/\/[^"]+)"/i);
    if (source) videoUrl = source[1];
  }

  // وصف
  const descMatch = html.match(/<(?:p|div)[^>]+class="[^"]*(?:story|desc|plot|overview)[^"]*"[^>]*>([\s\S]{20,500}?)<\/(?:p|div)>/i);
  const description = descMatch ? descMatch[1].replace(/<[^>]+>/g, "").trim() : undefined;

  // تقييم
  const ratingMatch = html.match(/(\d+\.?\d*)\s*\/\s*10/);
  const rating = ratingMatch ? parseFloat(ratingMatch[1]) : undefined;

  return { videoUrl, description, rating };
}

// ================================================================
//  TMDB — دوال
// ================================================================

const TMDB_BASE = "https://api.themoviedb.org/3";
const TMDB_IMG  = "https://image.tmdb.org/t/p/w500";

function tmdbHeaders(key) {
  return {
    "Authorization": `Bearer ${key}`,
    "Content-Type": "application/json"
  };
}

function parseTmdbResults(items) {
  return items.map(item => ({
    title: item.title || item.name || "بدون عنوان",
    link: item.id ? `https://www.themoviedb.org/${item.title ? "movie" : "tv"}/${item.id}` : "",
    poster: item.poster_path ? `${TMDB_IMG}${item.poster_path}` : null,
    label: item.vote_average ? `⭐ ${item.vote_average.toFixed(1)}` : undefined
  }));
}

async function tmdbPopularMovies(params) {
  if (!params.tmdb_key) return [{ title: "⚠️ أدخل TMDB API Key في الإعدادات", link: "", poster: null }];
  const url = `${TMDB_BASE}/movie/popular?language=ar-SA&page=${params.page || 1}&region=SA`;
  const res = await Widget.http.get(url, { headers: tmdbHeaders(params.tmdb_key) });
  const data = JSON.parse(res.data);
  return parseTmdbResults(data.results || []);
}

async function tmdbPopularSeries(params) {
  if (!params.tmdb_key) return [{ title: "⚠️ أدخل TMDB API Key في الإعدادات", link: "", poster: null }];
  const url = `${TMDB_BASE}/tv/popular?language=ar-SA&page=${params.page || 1}`;
  const res = await Widget.http.get(url, { headers: tmdbHeaders(params.tmdb_key) });
  const data = JSON.parse(res.data);
  return parseTmdbResults(data.results || []);
}

async function tmdbTopRated(params) {
  if (!params.tmdb_key) return [{ title: "⚠️ أدخل TMDB API Key في الإعدادات", link: "", poster: null }];
  const type = params.content_type || "movie";
  const url = `${TMDB_BASE}/${type}/top_rated?language=ar-SA&page=${params.page || 1}`;
  const res = await Widget.http.get(url, { headers: tmdbHeaders(params.tmdb_key) });
  const data = JSON.parse(res.data);
  return parseTmdbResults(data.results || []);
}

async function tmdbSearch(params) {
  if (!params.tmdb_key) return [{ title: "⚠️ أدخل TMDB API Key في الإعدادات", link: "", poster: null }];
  if (!params.query) return [];
  const url = `${TMDB_BASE}/search/multi?language=ar-SA&query=${encodeURIComponent(params.query)}&page=1`;
  const res = await Widget.http.get(url, { headers: tmdbHeaders(params.tmdb_key) });
  const data = JSON.parse(res.data);
  return parseTmdbResults((data.results || []).filter(r => r.media_type !== "person"));
}

async function tmdbByGenre(params) {
  if (!params.tmdb_key) return [{ title: "⚠️ أدخل TMDB API Key في الإعدادات", link: "", poster: null }];
  const type = params.content_type || "movie";
  const url = `${TMDB_BASE}/discover/${type}?language=ar-SA&with_genres=${params.genre_id}&sort_by=popularity.desc&page=${params.page || 1}`;
  const res = await Widget.http.get(url, { headers: tmdbHeaders(params.tmdb_key) });
  const data = JSON.parse(res.data);
  return parseTmdbResults(data.results || []);
}

// تفاصيل TMDB
async function loadDetail(link) {
  // لو رابط TMDB نرجع بيانات مختصرة بدون فيديو
  if (link && link.includes("themoviedb.org")) {
    return { videoUrl: null, description: "افتح الرابط في المتصفح لمشاهدة التفاصيل" };
  }
  return await scrapeDetail(link);
}

// ================================================================
//  FaselHD — دوال
// ================================================================

const FASEL_URL = "https://www.faselhd.club";

async function faselFetch(path, page) {
  const p = parseInt(page) || 1;
  const url = p > 1 ? `${FASEL_URL}/${path}/page/${p}` : `${FASEL_URL}/${path}`;
  const res = await Widget.http.get(url, {
    headers: { ...HEADERS_MOBILE, "Referer": FASEL_URL }
  });
  return parseCards(res.data, FASEL_URL);
}

async function faselMovies(params)  { return await faselFetch("category/افلام", params.page); }
async function faselSeries(params)  { return await faselFetch("series", params.page); }
async function faselSearch(params) {
  if (!params.query) return [];
  const url = `${FASEL_URL}/?s=${encodeURIComponent(params.query)}`;
  const res = await Widget.http.get(url, { headers: { ...HEADERS_MOBILE, "Referer": FASEL_URL } });
  return parseCards(res.data, FASEL_URL);
}

// ================================================================
//  Akwam — أكوام
// ================================================================

const AKWAM_URL = "https://akwam.to";

async function akwamFetch(path, page) {
  const p = parseInt(page) || 1;
  const url = p > 1 ? `${AKWAM_URL}/${path}?page=${p}` : `${AKWAM_URL}/${path}`;
  const res = await Widget.http.get(url, {
    headers: { ...HEADERS_MOBILE, "Referer": AKWAM_URL }
  });
  return parseCards(res.data, AKWAM_URL);
}

async function akwamMovies(params)  { return await akwamFetch("movies", params.page); }
async function akwamSeries(params)  { return await akwamFetch("series", params.page); }
async function akwamSearch(params) {
  if (!params.query) return [];
  const url = `${AKWAM_URL}/search?q=${encodeURIComponent(params.query)}`;
  const res = await Widget.http.get(url, { headers: { ...HEADERS_MOBILE, "Referer": AKWAM_URL } });
  return parseCards(res.data, AKWAM_URL);
}

// ================================================================
//  Shahid — شاهد (API رسمي)
// ================================================================

const SHAHID_API = "https://shahid.mbc.net/api/v2_1/node/search";

function parseShahidResults(items) {
  return (items || []).map(item => ({
    title: item.title_ar || item.title || "بدون عنوان",
    link: item.url || item.friendlyUrl ? `https://shahid.mbc.net${item.friendlyUrl || ""}` : "",
    poster: item.image || item.imageThumbnail || null,
    label: item.year ? String(item.year) : undefined
  }));
}

async function shahidFetch(type, page) {
  const url = `${SHAHID_API}?type=${type}&limit=20&page=${parseInt(page) || 1}&lang=ar`;
  const res = await Widget.http.get(url, {
    headers: {
      "User-Agent": HEADERS_MOBILE["User-Agent"],
      "Accept": "application/json",
      "Origin": "https://shahid.mbc.net"
    }
  });
  const data = JSON.parse(res.data);
  return parseShahidResults(data.data || data.items || data.results || []);
}

async function shahidMovies(params)  { return await shahidFetch("movie", params.page); }
async function shahidSeries(params)  { return await shahidFetch("series", params.page); }

// ================================================================
//  MyCima — ماي سيما
// ================================================================

const MYCIMA_URL = "https://wecima.show";

async function mycimeFetch(path, page) {
  const p = parseInt(page) || 1;
  const url = p > 1 ? `${MYCIMA_URL}/${path}/page/${p}/` : `${MYCIMA_URL}/${path}/`;
  const res = await Widget.http.get(url, {
    headers: { ...HEADERS_MOBILE, "Referer": MYCIMA_URL }
  });
  return parseCards(res.data, MYCIMA_URL);
}

async function mycimaMovies(params)  { return await mycimeFetch("movies", params.page); }
async function mycimaSeries(params)  { return await mycimeFetch("series", params.page); }
async function mycimaSearch(params) {
  if (!params.query) return [];
  const url = `${MYCIMA_URL}/search/${encodeURIComponent(params.query)}/`;
  const res = await Widget.http.get(url, { headers: { ...HEADERS_MOBILE, "Referer": MYCIMA_URL } });
  return parseCards(res.data, MYCIMA_URL);
}

// ================================================================
//  Anime4up — أنيمي
// ================================================================

const ANIME4UP_URL = "https://anime4up.cam";

async function anime4upFetch(path, page) {
  const p = parseInt(page) || 1;
  const url = p > 1 ? `${ANIME4UP_URL}/${path}/page/${p}/` : `${ANIME4UP_URL}/${path}/`;
  const res = await Widget.http.get(url, {
    headers: { ...HEADERS_MOBILE, "Referer": ANIME4UP_URL }
  });
  return parseCards(res.data, ANIME4UP_URL);
}

async function anime4upLatest(params) { return await anime4upFetch("anime-list-animes", params.page); }

// ================================================================
//  Animeiat — أنيمي
// ================================================================

const ANIMEIAT_URL = "https://animeiat.co";

async function animeiatFetch(path, page) {
  const p = parseInt(page) || 1;
  const url = p > 1 ? `${ANIMEIAT_URL}/${path}?page=${p}` : `${ANIMEIAT_URL}/${path}`;
  const res = await Widget.http.get(url, {
    headers: { ...HEADERS_MOBILE, "Referer": ANIMEIAT_URL }
  });
  return parseCards(res.data, ANIMEIAT_URL);
}

async function animeiatLatest(params) { return await animeiatFetch("anime", params.page); }

async function animeSearch(params) {
  if (!params.query) return [];
  const url = `${ANIME4UP_URL}/?s=${encodeURIComponent(params.query)}`;
  const res = await Widget.http.get(url, { headers: { ...HEADERS_MOBILE, "Referer": ANIME4UP_URL } });
  return parseCards(res.data, ANIME4UP_URL);
}
