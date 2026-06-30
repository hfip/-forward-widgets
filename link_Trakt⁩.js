// ==========================================
// Module Name: Trakt Dynamic List 🎬
// Developer: DexWorld · @Abdulluh_X · @a6ahd (Modified)
// ==========================================

const TRAKT_TOKEN = "06bfaefd68f0d43e3aec4fb6700df544370801f0ef57e0baab2758a1b049f231";
const TRAKT_CLIENT_ID = "755dec82497d227a547d9dd3a94b73cab106dbf67d12b17b66c5ee19b6f4f11c";
const TMDB_KEY = "68e8196a9ae7712f60e224ddcac06677";
const TMDB_LANG = "ar-SA";
const TMDB_IMG = "https://image.tmdb.org/t/p/w500";
const TMDB_BG = "https://image.tmdb.org/t/p/original";

var WidgetMetadata = {
  id: "forward.dexworld.trakt.dynamic",
  title: "مستعرض قوائم Trakt 🔄",
  version: "2.0.0",
  requiredVersion: "0.0.1",
  description: "أدخل رابط أي قائمة من موقع Trakt ليتم عرضها مباشرة",
  author: "DexWorld",
  site: "https://t.me/plex_arab",
  modules: [
    { 
      id: "tkDynamicList", 
      title: "📜 عرض قائمة Trakt مخصصة", 
      functionName: "tkDynamicList", 
      cacheDuration: 1800, 
      params: [
        { 
          name: "list_url", 
          title: "رابط قائمة Trakt", 
          type: "input", 
          description: "الصق رابط القائمة هنا (مثال: https://trakt.tv/users/halawi15/lists/my-anime)", 
          placeholders: [{ title: "رابط القائمة", value: "" }] 
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

async function buildItems(rows) {
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
  return (await Promise.all(tasks)).filter(Boolean);
}

function parseTraktListUrl(url) {
  const raw = String(url || '').trim();
  // يدعم الروابط بـ app.trakt.tv أو trakt.tv مباشرة
  const m = raw.match(/(?:app\.)?trakt\.tv\/users\/([^\/]+)\/lists\/([^\/?#]+)/i);
  if (!m) return null;
  return { user: decodeURIComponent(m[1]), list: decodeURIComponent(m[2]) };
}

async function tkListByRef(owner, listId) {
  if (!hasTraktClient()) return setupNotice("تطبيق Trakt غير مهيأ.");
  if (!owner || !listId) return setupNotice("قائمة Trakt غير صحيحة.");
  const rows = await traktGet(`users/${owner}/lists/${listId}/items`, {});
  return await buildItems(rows);
}

// الدالة الديناميكية التي تقرأ الرابط المدخل من الإعدادات وتجلب بياناته مباشرة
async function tkDynamicList(params) {
  if (!hasTraktClient()) return setupNotice("تطبيق Trakt غير مهيأ.");
  
  const parsed = parseTraktListUrl(params.list_url || "");
  if (!parsed) {
    return setupNotice("يرجى لصق رابط قائمة Trakt صحيح في إعدادات القسم، مثل: https://trakt.tv/users/halawi15/lists/my-anime");
  }
  
  return await tkListByRef(parsed.user, parsed.list);
}