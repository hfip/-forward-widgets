/**
 * مستعرض قوائم Trakt الذكي Pro
 * المطور والمنسق: Abdulluh.X
 * القناة/الموقع: https://t.me/Abdulluh_X
 */

const TRAKT_TOKEN = "06bfaefd68f0d43e3aec4fb6700df544370801f0ef57e0baab2758a1b049f231";
const TRAKT_CLIENT_ID = "755dec82497d227a547d9dd3a94b73cab106dbf67d12b17b66c5ee19b6f4f11c";
const TMDB_KEY = "68e8196a9ae7712f60e224ddcac06677";
const TMDB_LANG = "ar-SA";
const TMDB_IMG = "https://image.tmdb.org/t/p/w500";
const TMDB_BG = "https://image.tmdb.org/t/p/original";

var WidgetMetadata = {
    id: "abdulluh_x_trakt_dynamic_matrix",
    title: "🔍 اضف رابط  Trakt الذكي",
    description: "أدخل رابط أي قائمة من موقع Trakt ليتم عرضها مباشرة",
    author: "Abdulluh.X",
    version: "2.4.0", 
    requiredVersion: "0.0.1",
    site: "https://t.me/Abdulluh_X",

    globalParams: [],
    modules: [
        {
            title: "📜 عرض قائمة Trakt مخصصة",
            functionName: "tkDynamicList",
            type: "video",
            params: [
                { 
                    name: "list_url", 
                    title: "رابط قائمة Trakt", 
                    type: "input", 
                    description: "الصق رابط القائمة هنا (مثال: https://trakt.tv/users/halawi15/lists/my-anime)", 
                    placeholders: [{ title: "رابط القائمة", value: "" }] 
                },
                {
                    name: "sort_by",
                    title: "⚙️ ترتيب العناصر حسب",
                    type: "enumeration",
                    value: "default",
                    enumOptions: [
                        { title: "📥 الترتيب الافتراضي (حسب موقع Trakt)", value: "default" },
                        { title: "📅 الأحدث إصداراً", value: "newest" },
                        { title: "⏳ الأقدم إصداراً", value: "oldest" },
                        { title: "⭐ الأعلى تقييماً", value: "rating" },
                        { title: "🔤 أبجدياً (حسب الحرف العربي/الإنجليزي)", value: "alphabetical" }
                    ]
                }
            ]
        }
    ]
};

function hasValue(v) { return v && String(v).indexOf("__") !== 0; }
function hasTraktClient() { return hasValue(TRAKT_CLIENT_ID); }
function hasTmdb() { return hasValue(TMDB_KEY); }

function setupNotice(msg) {
  return [{
    id: "trakt_setup_notice",
    type: "detail",
    title: "⚙️ تنبيه",
    description: msg || "تأكد من إعدادات Trakt و TMDB بشكل صحيح.",
    posterPath: null,
    childItems: []
  }];
}

function traktHeaders() {
  const h = { "Content-Type": "application/json", "trakt-api-version": "2", "trakt-api-key": hasValue(TRAKT_CLIENT_ID) ? TRAKT_CLIENT_ID : "" };
  if (hasValue(TRAKT_TOKEN)) h.Authorization = "Bearer " + TRAKT_TOKEN;
  return h;
}

async function traktGet(endpoint, query) {
  if (!hasTraktClient()) return [];
  try {
    const ep = String(endpoint || '').replace(/^\/+/, '');
    const res = await Widget.http.get("https://api.trakt.tv/" + ep, {
      params: { extended: "full", limit: 100, ...(query || {}) },
      headers: traktHeaders()
    });
    let data = res && res.data !== undefined ? res.data : res;
    if (typeof data === "string") data = JSON.parse(data);
    return Array.isArray(data) ? data : [];
  } catch (e) { return []; }
}

async function enrichTmdb(tmdbId, mediaType) {
  if (!tmdbId || !hasTmdb()) return null;
  try {
    const res = await Widget.http.get(`https://api.themoviedb.org/3/${mediaType}/${tmdbId}`, { params: { api_key: TMDB_KEY, language: TMDB_LANG } });
    let d = res && res.data !== undefined ? res.data : res;
    if (typeof d === "string") d = JSON.parse(d);
    return d && d.id ? d : null;
  } catch (e) { return null; }
}

function detectMedia(row) {
  const obj = row.movie || row.show || row.episode || row;
  const isTv = !!row.show || !!row.episode || obj.type === "show" || obj.media_type === "tv";
  return { obj, isTv, mediaType: isTv ? "tv" : "movie" };
}

async function buildItems(rows, sortBy) {
  if (!hasTraktClient()) return setupNotice("تطبيق Trakt غير مهيأ.");
  const tasks = (rows || []).map(async (row) => {
    const media = detectMedia(row);
    const obj = row.movie || row.show || media.obj;
    const tmdbId = obj.ids && obj.ids.tmdb;
    if (!tmdbId) return null;
    const meta = await enrichTmdb(tmdbId, media.mediaType);
    const title = meta ? (meta.title || meta.name) : (obj.title || obj.name || "Trakt Item");
    const poster = meta && meta.poster_path ? meta.poster_path : null;
    const backdrop = meta && meta.backdrop_path ? meta.backdrop_path : null;
    return {
      id: String(tmdbId),
      tmdbId,
      ids: { tmdb: tmdbId },
      type: "tmdb",
      title,
      description: (meta && meta.overview) || obj.overview || "",
      posterPath: poster,
      backdropPath: backdrop,
      rating: meta && meta.vote_average ? Number(meta.vote_average).toFixed(1) : "",
      releaseDate: (meta && (meta.release_date || meta.first_air_date)) || (obj.year ? String(obj.year) : ""),
      mediaType: media.mediaType
    };
  });
  
  let finalResults = (await Promise.all(tasks)).filter(Boolean);

  // الفرز المباشر على المصفوفة الجاهزة بناءً على أمر الفرز المختار
  if (sortBy && sortBy !== "default") {
    finalResults.sort(function(a, b) {
        if (sortBy === "newest" || sortBy === "oldest") {
            var dateA = new Date(a.releaseDate || 0);
            var dateB = new Date(b.releaseDate || 0);
            return sortBy === "newest" ? dateB - dateA : dateA - dateB;
        }
        if (sortBy === "rating") {
            return (parseFloat(b.rating) || 0) - (parseFloat(a.rating) || 0);
        }
        if (sortBy === "alphabetical") {
            var titleA = a.title || "";
            var titleB = b.title || "";
            return titleA.localeCompare(titleB, "ar");
        }
        return 0;
    });
  }

  return finalResults;
}

function parseTraktListUrl(url) {
  const raw = String(url || '').trim();
  const m = raw.match(/(?:app\.)?trakt\.tv\/users\/([^\/]+)\/lists\/([^\/?#]+)/i);
  if (!m) return null;
  return { user: decodeURIComponent(m[1]), list: decodeURIComponent(m[2]) };
}

async function tkListByRef(owner, listId, sortBy) {
  if (!hasTraktClient()) return setupNotice("تطبيق Trakt غير مهيأ.");
  if (!owner || !listId) return setupNotice("قائمة Trakt غير صحيحة.");
  const rows = await traktGet(`users/${owner}/lists/${listId}/items`, {});
  return await buildItems(rows, sortBy);
}

async function tkDynamicList(params) {
  if (!hasTraktClient()) return setupNotice("تطبيق Trakt غير مهيأ.");
  
  var sortBy = params.sort_by || "default";
  const parsed = parseTraktListUrl(params.list_url || "");
  if (!parsed) {
    return setupNotice("يرجى لصق رابط قائمة Trakt صحيح في إعدادات القسم، مثل: https://trakt.tv/users/halawi15/lists/my-anime");
  }
  
  return await tkListByRef(parsed.user, parsed.list, sortBy);
}