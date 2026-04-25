// ==UserScript==
// @name Stars & Directors 🎬
// @version 1.2.0
// @description أفلام ومسلسلات أشهر نجوم هوليوود والمخرجين العالميين
// @author Abdulluh.X
// ==/UserScript==

const TMDB_LANG = “ar-SA”;

WidgetMetadata = {
id: “abdulluh.stars.directors.v1”,
title: “⭐ نجوم هوليوود والمخرجون”,
version: “1.2.0”,
requiredVersion: “0.0.1”,
description: “تصفح أعمال أشهر ممثلي ومخرجي هوليوود — 54 شخصية في مكان واحد”,
author: “Abdulluh.X”,
site: “https://t.me/Abdulluh_X”,

modules: [

```
{
  id: "actress_showcase",
  title: "👩 الممثلات — نجمة الموسم",
  functionName: "personSpotlight",
  params: [
    { name: "person_id", title: "الممثلة", type: "enumeration", enumOptions: [
      { title: "Jenna Ortega",       value: "974169"  },
      { title: "Jennifer Aniston",   value: "4491"    },
      { title: "Jennifer Lawrence",  value: "72129"   },
      { title: "Katherine Heigl",    value: "6947"    },
      { title: "Lily Collins",       value: "51329"   },
      { title: "Anne Hathaway",      value: "1813"    },
      { title: "Emma Stone",         value: "54693"   },
      { title: "Florence Pugh",      value: "1373737" },
      { title: "Reese Witherspoon",  value: "368"     },
      { title: "Sandra Bullock",     value: "117"     },
      { title: "Zendaya",            value: "505710"  },
      { title: "Mila Kunis",         value: "18973"   },
      { title: "Meryl Streep",       value: "5064"    },
      { title: "Margot Robbie",      value: "234352"  },
      { title: "Melissa McCarthy",   value: "109625"  },
      { title: "Nicole Kidman",      value: "2227"    },
      { title: "Millie Bobby Brown", value: "1394022" }
    ]},
    { name: "media_type", title: "النوع", type: "enumeration", enumOptions: [
      { title: "🎬📺 الكل",   value: "all"   },
      { title: "🎬 أفلام",    value: "movie" },
      { title: "📺 مسلسلات", value: "tv"    }
    ]},
    { name: "page", title: "الصفحة", type: "page" }
  ]
},

{
  id: "action_stars",
  title: "🦸 أبطال الأكشن",
  functionName: "personSpotlight",
  params: [
    { name: "person_id", title: "الممثل", type: "enumeration", enumOptions: [
      { title: "Sylvester Stallone",    value: "16483" },
      { title: "Jackie Chan",           value: "18897" },
      { title: "Arnold Schwarzenegger", value: "1100"  },
      { title: "Jason Statham",         value: "976"   },
      { title: "Dwayne Johnson",        value: "18918" },
      { title: "Mark Wahlberg",         value: "13240" },
      { title: "Liam Neeson",           value: "3896"  },
      { title: "Tom Cruise",            value: "500"   },
      { title: "Tom Hardy",             value: "2524"  }
    ]},
    { name: "media_type", title: "النوع", type: "enumeration", enumOptions: [
      { title: "🎬📺 الكل",   value: "all"   },
      { title: "🎬 أفلام",    value: "movie" },
      { title: "📺 مسلسلات", value: "tv"    }
    ]},
    { name: "page", title: "الصفحة", type: "page" }
  ]
},

{
  id: "hollywood_legends",
  title: "🏆 أساطير هوليوود",
  functionName: "personSpotlight",
  params: [
    { name: "person_id", title: "الممثل", type: "enumeration", enumOptions: [
      { title: "Leonardo DiCaprio", value: "6193"  },
      { title: "Tom Hanks",         value: "31"    },
      { title: "Robert De Niro",    value: "380"   },
      { title: "Denzel Washington", value: "5292"  },
      { title: "Anthony Hopkins",   value: "4173"  },
      { title: "Jack Nicholson",    value: "514"   },
      { title: "Daniel Day-Lewis",  value: "11856" },
      { title: "Clint Eastwood",    value: "190"   },
      { title: "Al Pacino",         value: "1158"  }
    ]},
    { name: "media_type", title: "النوع", type: "enumeration", enumOptions: [
      { title: "🎬📺 الكل",   value: "all"   },
      { title: "🎬 أفلام",    value: "movie" },
      { title: "📺 مسلسلات", value: "tv"    }
    ]},
    { name: "page", title: "الصفحة", type: "page" }
  ]
},

{
  id: "modern_stars",
  title: "🌟 نجوم الجيل الحالي",
  functionName: "personSpotlight",
  params: [
    { name: "person_id", title: "الممثل", type: "enumeration", enumOptions: [
      { title: "Brad Pitt",           value: "287"   },
      { title: "Will Smith",          value: "2888"  },
      { title: "Robert Downey Jr.",   value: "3223"  },
      { title: "Christian Bale",      value: "3894"  },
      { title: "Matthew McConaughey", value: "10182" },
      { title: "Ryan Gosling",        value: "30614" },
      { title: "George Clooney",      value: "1461"  },
      { title: "Ben Affleck",         value: "880"   },
      { title: "Russell Crowe",       value: "1117"  },
      { title: "Cillian Murphy",      value: "2037"  }
    ]},
    { name: "media_type", title: "النوع", type: "enumeration", enumOptions: [
      { title: "🎬📺 الكل",   value: "all"   },
      { title: "🎬 أفلام",    value: "movie" },
      { title: "📺 مسلسلات", value: "tv"    }
    ]},
    { name: "page", title: "الصفحة", type: "page" }
  ]
},

{
  id: "legendary_directors",
  title: "🎬 المخرجون الأساطير",
  functionName: "directorFilms",
  params: [
    { name: "person_id", title: "المخرج", type: "enumeration", enumOptions: [
      { title: "Christopher Nolan",  value: "525"   },
      { title: "Steven Spielberg",   value: "488"   },
      { title: "Martin Scorsese",    value: "1032"  },
      { title: "Quentin Tarantino",  value: "138"   },
      { title: "James Cameron",      value: "2710"  },
      { title: "Alfred Hitchcock",   value: "2636"  },
      { title: "Denis Villeneuve",   value: "90059" },
      { title: "David Fincher",      value: "7467"  },
      { title: "Zack Snyder",        value: "75734" },
      { title: "Brian De Palma",     value: "7906"  },
      { title: "Neil Gaiman",        value: "56766" }
    ]},
    { name: "page", title: "الصفحة", type: "page" }
  ]
},

{
  id: "person_search",
  title: "🔍 بحث عن ممثل / مخرج",
  functionName: "searchPerson",
  params: [
    { name: "query", title: "اسم الممثل أو المخرج", type: "input", description: "اكتب الاسم بالإنجليزية", value: "" },
    { name: "media_type", title: "النوع", type: "enumeration", enumOptions: [
      { title: "🎬📺 الكل",   value: "all"   },
      { title: "🎬 أفلام",    value: "movie" },
      { title: "📺 مسلسلات", value: "tv"    }
    ]}
  ]
}
```

]
};

// ════════════════════════════════════════════════════════════════
// مقتبس من اضافه احمد Dex
// with_people يشتغل مع movie و tv في discover
// ════════════════════════════════════════════════════════════════

function formatResults(items, forceType) {
return (items || []).map(item => {
const mediaType = item.media_type || forceType || (item.title ? “movie” : “tv”);
const isGem = item.vote_average >= 8.0 && item.vote_count >= 1000;
return {
id: item.id,
type: “tmdb”,
title: (isGem ? “👑 “ : “”) + (item.title || item.name || “بدون عنوان”),
description: item.overview || “لا يوجد وصف متاح.”,
releaseDate: item.release_date || item.first_air_date,
backdropPath: item.backdrop_path,
posterPath: item.poster_path,
rating: item.vote_average ? item.vote_average.toFixed(1) : “N/A”,
mediaType,
genreTitle: getGenreNames(item.genre_ids)
};
});
}

function getGenreNames(ids) {
if (!ids || !ids.length) return “”;
const map = {
28:“أكشن”, 12:“مغامرات”, 16:“أنيمي”, 35:“كوميدي”, 80:“جريمة”,
99:“وثائقي”, 18:“دراما”, 10751:“عائلي”, 14:“فانتازيا”, 36:“تاريخي”,
27:“رعب”, 10402:“موسيقى”, 9648:“غموض”, 10749:“رومانسي”, 878:“خيال علمي”,
53:“إثارة”, 10752:“حرب”, 37:“غرب أمريكي”, 10762:“أطفال”, 10765:“خيال علمي/فانتازيا”
};
return ids.slice(0, 2).map(id => map[id]).filter(Boolean).join(”، “);
}

// ── أعمال الممثل ─────────────────────────────────────────────
// with_people يشتغل مع كلا النوعين في discover
async function personSpotlight(params) {
if (!params.person_id) return [];
const mediaType = params.media_type || “movie”;
try {
if (mediaType === “all”) {
const [movies, series] = await Promise.all([
Widget.tmdb.get(“discover/movie”, {
params: {
language: TMDB_LANG,
with_people: params.person_id,
sort_by: “popularity.desc”,
page: params.page || 1
}
}),
Widget.tmdb.get(“discover/tv”, {
params: {
language: TMDB_LANG,
with_people: params.person_id,
sort_by: “popularity.desc”,
page: params.page || 1
}
})
]);
return [
…formatResults((movies && movies.results) || [], “movie”),
…formatResults((series && series.results) || [], “tv”)
].sort((a, b) => parseFloat(b.rating || 0) - parseFloat(a.rating || 0));
}

```
const response = await Widget.tmdb.get(`discover/${mediaType}`, {
  params: {
    language: TMDB_LANG,
    with_people: params.person_id,
    sort_by: "popularity.desc",
    page: params.page || 1
  }
});
if (!response || !response.results) return [];
return formatResults(response.results, mediaType);
```

} catch (e) { return []; }
}

// ── أفلام المخرج ─────────────────────────────────────────────
async function directorFilms(params) {
if (!params.person_id) return [];
try {
const response = await Widget.tmdb.get(“discover/movie”, {
params: {
language: TMDB_LANG,
with_people: params.person_id,
sort_by: “popularity.desc”,
page: params.page || 1
}
});
if (!response || !response.results) return [];
return formatResults(response.results, “movie”);
} catch (e) { return []; }
}

// ── بحث حر ───────────────────────────────────────────────────
async function searchPerson(params) {
if (!params.query || !params.query.trim()) return [];
const mediaType = params.media_type || “movie”;
try {
const searchResp = await Widget.tmdb.get(“search/person”, {
params: { language: TMDB_LANG, query: params.query.trim(), page: 1 }
});
if (!searchResp || !searchResp.results || !searchResp.results.length) return [];

```
const personId = String(searchResp.results[0].id);

if (mediaType === "all") {
  const [movies, series] = await Promise.all([
    Widget.tmdb.get("discover/movie", {
      params: { language: TMDB_LANG, with_people: personId, sort_by: "popularity.desc", page: 1 }
    }),
    Widget.tmdb.get("discover/tv", {
      params: { language: TMDB_LANG, with_people: personId, sort_by: "popularity.desc", page: 1 }
    })
  ]);
  return [
    ...formatResults((movies && movies.results) || [], "movie"),
    ...formatResults((series && series.results) || [], "tv")
  ].sort((a, b) => parseFloat(b.rating || 0) - parseFloat(a.rating || 0));
}

const resp = await Widget.tmdb.get(`discover/${mediaType}`, {
  params: { language: TMDB_LANG, with_people: personId, sort_by: "popularity.desc", page: 1 }
});
if (!resp || !resp.results) return [];
return formatResults(resp.results, mediaType);
```

} catch (e) { return []; }
}
