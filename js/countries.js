/* ==========================================
   世界197か国タイピングクイズ
   countries.js
   Version 1.0.0
========================================== */

"use strict";

const countries = [

    // ==========================
    // アジア
    // ==========================

    {
        id: 1,
        name: "アフガニスタン",
        officialName: "アフガニスタン・イスラム首長国",
        region: "アジア",
        subregion: "南アジア",
        kana: "あ",
        iso2: "AF",
        iso3: "AFG"
    },

    {
        id: 2,
        name: "アラブ首長国連邦",
        officialName: "アラブ首長国",
        region: "アジア",
        subregion: "西アジア",
        kana: "あ",
        iso2: "AE",
        iso3: "ARE"
    },

    {
        id: 3,
        name: "イエメン",
        officialName: "イエメン共和国",
        region: "アジア",
        subregion: "西アジア",
        kana: "い",
        iso2: "YE",
        iso3: "YEM"
    },

    {
        id: 4,
        name: "イスラエル",
        officialName: "イスラエル国",
        region: "アジア",
        subregion: "西アジア",
        kana: "い",
        iso2: "IL",
        iso3: "ISR"
    },

    {
        id: 5,
        name: "イラク",
        officialName: "イラク共和国",
        region: "アジア",
        subregion: "西アジア",
        kana: "い",
        iso2: "IQ",
        iso3: "IRQ"
    },

    {
        id: 6,
        name: "イラン",
        officialName: "イラン・イスラム共和国",
        region: "アジア",
        subregion: "南アジア",
        kana: "い",
        iso2: "IR",
        iso3: "IRN"
    },

    {
        id: 7,
        name: "インド",
        officialName: "インド共和国",
        region: "アジア",
        subregion: "南アジア",
        kana: "い",
        iso2: "IN",
        iso3: "IND"
    },

    {
        id: 8,
        name: "インドネシア",
        officialName: "インドネシア共和国",
        region: "アジア",
        subregion: "東南アジア",
        kana: "い",
        iso2: "ID",
        iso3: "IDN"
    },

    {
        id: 9,
        name: "ウズベキスタン",
        officialName: "ウズベキスタン共和国",
        region: "アジア",
        subregion: "中央アジア",
        kana: "う",
        iso2: "UZ",
        iso3: "UZB"
    },

    {
        id: 10,
        name: "オマーン",
        officialName: "オマーン国",
        region: "アジア",
        subregion: "西アジア",
        kana: "お",
        iso2: "OM",
        iso3: "OMN"
    },

    {
        id: 11,
        name: "カザフスタン",
        officialName: "カザフスタン共和国",
        region: "アジア",
        subregion: "中央アジア",
        kana: "か",
        iso2: "KZ",
        iso3: "KAZ"
    },

    {
        id: 12,
        name: "カタール",
        officialName: "カタール国",
        region: "アジア",
        subregion: "西アジア",
        kana: "か",
        iso2: "QA",
        iso3: "QAT"
    },

    {
        id: 13,
        name: "カンボジア",
        officialName: "カンボジア王国",
        region: "アジア",
        subregion: "東南アジア",
        kana: "か",
        iso2: "KH",
        iso3: "KHM"
    },

    {
        id: 14,
        name: "キプロス",
        officialName: "キプロス共和国",
        region: "アジア",
        subregion: "西アジア",
        kana: "き",
        iso2: "CY",
        iso3: "CYP"
    },

    {
        id: 15,
        name: "キルギス",
        officialName: "キルギス共和国",
        region: "アジア",
        subregion: "中央アジア",
        kana: "き",
        iso2: "KG",
        iso3: "KGZ"
    },

    {
        id: 16,
        name: "クウェート",
        officialName: "クウェート国",
        region: "アジア",
        subregion: "西アジア",
        kana: "く",
        iso2: "KW",
        iso3: "KWT"
    },

    {
        id: 17,
        name: "ジョージア",
        officialName: "ジョージア",
        region: "アジア",
        subregion: "西アジア",
        kana: "し",
        iso2: "GE",
        iso3: "GEO"
    },

    {
        id: 18,
        name: "サウジアラビア",
        officialName: "サウジアラビア王国",
        region: "アジア",
        subregion: "西アジア",
        kana: "さ",
        iso2: "SA",
        iso3: "SAU"
    },

    {
        id: 19,
        name: "シンガポール",
        officialName: "シンガポール共和国",
        region: "アジア",
        subregion: "東南アジア",
        kana: "し",
        iso2: "SG",
        iso3: "SGP"
    },

    {
        id: 20,
        name: "スリランカ",
        officialName: "スリランカ民主社会主義共和国",
        region: "アジア",
        subregion: "南アジア",
        kana: "す",
        iso2: "LK",
        iso3: "LKA"
    },

    {
        id: 21,
        name: "タイ",
        officialName: "タイ王国",
        region: "アジア",
        subregion: "東南アジア",
        kana: "た",
        iso2: "TH",
        iso3: "THA"
    },

    {
        id: 22,
        name: "韓国",
        officialName: "大韓民国",
        region: "アジア",
        subregion: "東アジア",
        kana: "た",
        iso2: "KR",
        iso3: "KOR"
    },

    {
        id: 23,
        name: "北朝鮮",
        officialName: "朝鮮民主主義人民共和国",
        region: "アジア",
        subregion: "東アジア",
        kana: "ち",
        iso2: "KP",
        iso3: "PRK"
    },

    {
        id: 24,
        name: "中国",
        officialName: "中華人民共和国",
        region: "アジア",
        subregion: "東アジア",
        kana: "ち",
        iso2: "CN",
        iso3: "CHN"
    },

    {
        id: 25,
        name: "日本",
        officialName: "日本国",
        region: "アジア",
        subregion: "東アジア",
        kana: "に",
        iso2: "JP",
        iso3: "JPN"
    },

    {
        id: 26,
        name: "ネパール",
        officialName: "ネパール連邦民主共和国",
        region: "アジア",
        subregion: "南アジア",
        kana: "ね",
        iso2: "NP",
        iso3: "NPL"
    },

    {
        id: 27,
        name: "パキスタン",
        officialName: "パキスタン・イスラム共和国",
        region: "アジア",
        subregion: "南アジア",
        kana: "は",
        iso2: "PK",
        iso3: "PAK"
    },

    {
        id: 28,
        name: "バングラデシュ",
        officialName: "バングラデシュ人民共和国",
        region: "アジア",
        subregion: "南アジア",
        kana: "は",
        iso2: "BD",
        iso3: "BGD"
    },

    {
        id: 29,
        name: "東ティモール",
        officialName: "東ティモール民主共和国",
        region: "アジア",
        subregion: "東南アジア",
        kana: "ひ",
        iso2: "TL",
        iso3: "TLS"
    },

    {
        id: 30,
        name: "フィリピン",
        officialName: "フィリピン共和国",
        region: "アジア",
        subregion: "東南アジア",
        kana: "ふ",
        iso2: "PH",
        iso3: "PHL"
    },

    {
        id: 31,
        name: "ブータン",
        officialName: "ブータン王国",
        region: "アジア",
        subregion: "南アジア",
        kana: "ふ",
        iso2: "BT",
        iso3: "BTN"
    },

    {
        id: 32,
        name: "ブルネイ",
        officialName: "ブルネイ・ダルサラーム国",
        region: "アジア",
        subregion: "東南アジア",
        kana: "ふ",
        iso2: "BN",
        iso3: "BRN"
    },

    {
        id: 33,
        name: "ベトナム",
        officialName: "ベトナム社会主義共和国",
        region: "アジア",
        subregion: "東南アジア",
        kana: "へ",
        iso2: "VN",
        iso3: "VNM"
    },

    {
        id: 34,
        name: "マレーシア",
        officialName: "マレーシア",
        region: "アジア",
        subregion: "東南アジア",
        kana: "ま",
        iso2: "MY",
        iso3: "MYS"
    },

    {
        id: 35,
        name: "ミャンマー",
        officialName: "ミャンマー連邦共和国",
        region: "アジア",
        subregion: "東南アジア",
        kana: "み",
        iso2: "MM",
        iso3: "MMR"
    },

    {
        id: 36,
        name: "モルディブ",
        officialName: "モルディブ共和国",
        region: "アジア",
        subregion: "南アジア",
        kana: "も",
        iso2: "MV",
        iso3: "MDV"
    },

    {
        id: 37,
        name: "モンゴル",
        officialName: "モンゴル国",
        region: "アジア",
        subregion: "東アジア",
        kana: "も",
        iso2: "MN",
        iso3: "MNG"
    },

    {
        id: 38,
        name: "ラオス",
        officialName: "ラオス人民民主共和国",
        region: "アジア",
        subregion: "東南アジア",
        kana: "ら",
        iso2: "LA",
        iso3: "LAO"
    },

    {
        id: 39,
        name: "レバノン",
        officialName: "レバノン共和国",
        region: "アジア",
        subregion: "西アジア",
        kana: "れ",
        iso2: "LB",
        iso3: "LBN"
    },

    {
        id: 40,
        name: "アルメニア",
        officialName: "アルメニア共和国",
        region: "アジア",
        subregion: "西アジア",
        kana: "あ",
        iso2: "AM",
        iso3: "ARM"
    },

    {
        id: 41,
        name: "アゼルバイジャン",
        officialName: "アゼルバイジャン共和国",
        region: "アジア",
        subregion: "西アジア",
        kana: "あ",
        iso2: "AZ",
        iso3: "AZE"
    },

    {
        id: 42,
        name: "バーレーン",
        officialName: "バーレーン王国",
        region: "アジア",
        subregion: "西アジア",
        kana: "は",
        iso2: "BH",
        iso3: "BHR"
    },

    {
        id: 43,
        name: "パレスチナ",
        officialName: "パレスチナ国",
        region: "アジア",
        subregion: "西アジア",
        kana: "は",
        iso2: "PS",
        iso3: "PSE"
    },

    {
        id: 44,
        name: "シリア",
        officialName: "シリア・アラブ共和国",
        region: "アジア",
        subregion: "西アジア",
        kana: "し",
        iso2: "SY",
        iso3: "SYR"
    },

    {
        id: 45,
        name: "タジキスタン",
        officialName: "タジキスタン共和国",
        region: "アジア",
        subregion: "中央アジア",
        kana: "た",
        iso2: "TJ",
        iso3: "TJK"
    },

    {
        id: 46,
        name: "トルクメニスタン",
        officialName: "トルクメニスタン",
        region: "アジア",
        subregion: "中央アジア",
        kana: "と",
        iso2: "TM",
        iso3: "TKM"
    },

    {
        id: 47,
        name: "トルコ",
        officialName: "トルコ共和国",
        region: "アジア",
        subregion: "西アジア",
        kana: "と",
        iso2: "TR",
        iso3: "TUR"
    },

    {
        id: 48,
        name: "ヨルダン",
        officialName: "ヨルダン・ハシミテ王国",
        region: "アジア",
        subregion: "西アジア",
        kana: "よ",
        iso2: "JO",
        iso3: "JOR"
    },

    // ==========================
    // ヨーロッパ
    // ==========================

    {
        id: 49,
        name: "アイスランド",
        officialName: "アイスランド共和国",
        region: "ヨーロッパ",
        subregion: "北ヨーロッパ",
        kana: "あ",
        iso2: "IS",
        iso3: "ISL"
    },

    {
        id: 50,
        name: "アイルランド",
        officialName: "アイルランド",
        region: "ヨーロッパ",
        subregion: "北ヨーロッパ",
        kana: "あ",
        iso2: "IE",
        iso3: "IRL"
    },

    {
        id: 51,
        name: "アンドラ",
        officialName: "アンドラ公国",
        region: "ヨーロッパ",
        subregion: "南ヨーロッパ",
        kana: "あ",
        iso2: "AD",
        iso3: "AND"
    },

    {
        id: 52,
        name: "イギリス",
        officialName: "グレートブリテン及び北アイルランド連合王国",
        region: "ヨーロッパ",
        subregion: "北ヨーロッパ",
        kana: "い",
        iso2: "GB",
        iso3: "GBR"
    },

    {
        id: 53,
        name: "イタリア",
        officialName: "イタリア共和国",
        region: "ヨーロッパ",
        subregion: "南ヨーロッパ",
        kana: "い",
        iso2: "IT",
        iso3: "ITA"
    },

    {
        id: 54,
        name: "ウクライナ",
        officialName: "ウクライナ",
        region: "ヨーロッパ",
        subregion: "東ヨーロッパ",
        kana: "う",
        iso2: "UA",
        iso3: "UKR"
    },

    {
        id: 55,
        name: "エストニア",
        officialName: "エストニア共和国",
        region: "ヨーロッパ",
        subregion: "北ヨーロッパ",
        kana: "え",
        iso2: "EE",
        iso3: "EST"
    },

    {
        id: 56,
        name: "オーストリア",
        officialName: "オーストリア共和国",
        region: "ヨーロッパ",
        subregion: "中央ヨーロッパ",
        kana: "お",
        iso2: "AT",
        iso3: "AUT"
    },

    {
        id: 57,
        name: "オランダ",
        officialName: "オランダ王国",
        region: "ヨーロッパ",
        subregion: "西ヨーロッパ",
        kana: "お",
        iso2: "NL",
        iso3: "NLD"
    },

    {
        id: 58,
        name: "ギリシャ",
        officialName: "ギリシャ共和国",
        region: "ヨーロッパ",
        subregion: "南ヨーロッパ",
        kana: "き",
        iso2: "GR",
        iso3: "GRC"
    },

    {
        id: 59,
        name: "クロアチア",
        officialName: "クロアチア共和国",
        region: "ヨーロッパ",
        subregion: "南ヨーロッパ",
        kana: "く",
        iso2: "HR",
        iso3: "HRV"
    },

    {
        id: 60,
        name: "コソボ",
        officialName: "コソボ共和国",
        region: "ヨーロッパ",
        subregion: "南ヨーロッパ",
        kana: "こ",
        iso2: "XK",
        iso3: "XKX"
    },

    {
        id: 61,
        name: "サンマリノ",
        officialName: "サンマリノ共和国",
        region: "ヨーロッパ",
        subregion: "南ヨーロッパ",
        kana: "さ",
        iso2: "SM",
        iso3: "SMR"
    },

    {
        id: 62,
        name: "スイス",
        officialName: "スイス連邦",
        region: "ヨーロッパ",
        subregion: "中央ヨーロッパ",
        kana: "す",
        iso2: "CH",
        iso3: "CHE"
    },

    {
        id: 63,
        name: "スウェーデン",
        officialName: "スウェーデン王国",
        region: "ヨーロッパ",
        subregion: "北ヨーロッパ",
        kana: "す",
        iso2: "SE",
        iso3: "SWE"
    },

    {
        id: 64,
        name: "スペイン",
        officialName: "スペイン王国",
        region: "ヨーロッパ",
        subregion: "南ヨーロッパ",
        kana: "す",
        iso2: "ES",
        iso3: "ESP"
    },

    {
        id: 65,
        name: "スロバキア",
        officialName: "スロバキア共和国",
        region: "ヨーロッパ",
        subregion: "中央ヨーロッパ",
        kana: "す",
        iso2: "SK",
        iso3: "SVK"
    },

    {
        id: 66,
        name: "スロベニア",
        officialName: "スロベニア共和国",
        region: "ヨーロッパ",
        subregion: "南ヨーロッパ",
        kana: "す",
        iso2: "SI",
        iso3: "SVN"
    },

    {
        id: 67,
        name: "セルビア",
        officialName: "セルビア共和国",
        region: "ヨーロッパ",
        subregion: "南ヨーロッパ",
        kana: "せ",
        iso2: "RS",
        iso3: "SRB"
    },

    {
        id: 68,
        name: "チェコ",
        officialName: "チェコ共和国",
        region: "ヨーロッパ",
        subregion: "中央ヨーロッパ",
        kana: "ち",
        iso2: "CZ",
        iso3: "CZE"
    },

    {
        id: 69,
        name: "デンマーク",
        officialName: "デンマーク王国",
        region: "ヨーロッパ",
        subregion: "北ヨーロッパ",
        kana: "て",
        iso2: "DK",
        iso3: "DNK"
    },

    {
        id: 70,
        name: "ドイツ",
        officialName: "ドイツ連邦共和国",
        region: "ヨーロッパ",
        subregion: "中央ヨーロッパ",
        kana: "と",
        iso2: "DE",
        iso3: "DEU"
    },

    {
        id: 71,
        name: "ノルウェー",
        officialName: "ノルウェー王国",
        region: "ヨーロッパ",
        subregion: "北ヨーロッパ",
        kana: "の",
        iso2: "NO",
        iso3: "NOR"
    },

    {
        id: 72,
        name: "ハンガリー",
        officialName: "ハンガリー",
        region: "ヨーロッパ",
        subregion: "中央ヨーロッパ",
        kana: "は",
        iso2: "HU",
        iso3: "HUN"
    },

    {
        id: 73,
        name: "フィンランド",
        officialName: "フィンランド共和国",
        region: "ヨーロッパ",
        subregion: "北ヨーロッパ",
        kana: "ふ",
        iso2: "FI",
        iso3: "FIN"
    },

    {
        id: 74,
        name: "フランス",
        officialName: "フランス共和国",
        region: "ヨーロッパ",
        subregion: "西ヨーロッパ",
        kana: "ふ",
        iso2: "FR",
        iso3: "FRA"
    },

    {
        id: 75,
        name: "ブルガリア",
        officialName: "ブルガリア共和国",
        region: "ヨーロッパ",
        subregion: "東ヨーロッパ",
        kana: "ふ",
        iso2: "BG",
        iso3: "BGR"
    },

    {
        id: 76,
        name: "ベラルーシ",
        officialName: "ベラルーシ共和国",
        region: "ヨーロッパ",
        subregion: "東ヨーロッパ",
        kana: "へ",
        iso2: "BY",
        iso3: "BLR"
    },

    {
        id: 77,
        name: "ベルギー",
        officialName: "ベルギー王国",
        region: "ヨーロッパ",
        subregion: "西ヨーロッパ",
        kana: "へ",
        iso2: "BE",
        iso3: "BEL"
    },

    {
        id: 78,
        name: "ボスニア・ヘルツェゴビナ",
        officialName: "ボスニア・ヘルツェゴビナ",
        region: "ヨーロッパ",
        subregion: "南ヨーロッパ",
        kana: "ほ",
        iso2: "BA",
        iso3: "BIH"
    },

    {
        id: 79,
        name: "ポーランド",
        officialName: "ポーランド共和国",
        region: "ヨーロッパ",
        subregion: "中央ヨーロッパ",
        kana: "ほ",
        iso2: "PL",
        iso3: "POL"
    },

    {
        id: 80,
        name: "ポルトガル",
        officialName: "ポルトガル共和国",
        region: "ヨーロッパ",
        subregion: "南ヨーロッパ",
        kana: "ほ",
        iso2: "PT",
        iso3: "PRT"
    },

    {
        id: 81,
        name: "北マケドニア",
        officialName: "北マケドニア共和国",
        region: "ヨーロッパ",
        subregion: "南ヨーロッパ",
        kana: "き",
        iso2: "MK",
        iso3: "MKD"
    },

    {
        id: 82,
        name: "マルタ",
        officialName: "マルタ共和国",
        region: "ヨーロッパ",
        subregion: "南ヨーロッパ",
        kana: "ま",
        iso2: "MT",
        iso3: "MLT"
    },

    {
        id: 83,
        name: "モナコ",
        officialName: "モナコ公国",
        region: "ヨーロッパ",
        subregion: "西ヨーロッパ",
        kana: "も",
        iso2: "MC",
        iso3: "MCO"
    },

    {
        id: 84,
        name: "モルドバ",
        officialName: "モルドバ共和国",
        region: "ヨーロッパ",
        subregion: "東ヨーロッパ",
        kana: "も",
        iso2: "MD",
        iso3: "MDA"
    },

    {
        id: 85,
        name: "モンテネグロ",
        officialName: "モンテネグロ",
        region: "ヨーロッパ",
        subregion: "南ヨーロッパ",
        kana: "も",
        iso2: "ME",
        iso3: "MNE"
    },

    {
        id: 86,
        name: "ラトビア",
        officialName: "ラトビア共和国",
        region: "ヨーロッパ",
        subregion: "北ヨーロッパ",
        kana: "ら",
        iso2: "LV",
        iso3: "LVA"
    },

    {
        id: 87,
        name: "リトアニア",
        officialName: "リトアニア共和国",
        region: "ヨーロッパ",
        subregion: "北ヨーロッパ",
        kana: "り",
        iso2: "LT",
        iso3: "LTU"
    },

    {
        id: 88,
        name: "リヒテンシュタイン",
        officialName: "リヒテンシュタイン公国",
        region: "ヨーロッパ",
        subregion: "中央ヨーロッパ",
        kana: "り",
        iso2: "LI",
        iso3: "LIE"
    },

    {
        id: 89,
        name: "ルーマニア",
        officialName: "ルーマニア",
        region: "ヨーロッパ",
        subregion: "東ヨーロッパ",
        kana: "る",
        iso2: "RO",
        iso3: "ROU"
    },

    {
        id: 90,
        name: "ルクセンブルク",
        officialName: "ルクセンブルク大公国",
        region: "ヨーロッパ",
        subregion: "西ヨーロッパ",
        kana: "る",
        iso2: "LU",
        iso3: "LUX"
    },

    {
        id: 91,
        name: "ロシア",
        officialName: "ロシア連邦",
        region: "ヨーロッパ",
        subregion: "東ヨーロッパ",
        kana: "ろ",
        iso2: "RU",
        iso3: "RUS"
    },

    {
        id: 92,
        name: "バチカン",
        officialName: "バチカン市国",
        region: "ヨーロッパ",
        subregion: "南ヨーロッパ",
        kana: "は",
        iso2: "VA",
        iso3: "VAT"
    },

    // ==========================
    // アフリカ
    // ==========================

    {
        id: 93,
        name: "アルジェリア",
        officialName: "アルジェリア民主人民共和国",
        region: "アフリカ",
        subregion: "北アフリカ",
        kana: "あ",
        iso2: "DZ",
        iso3: "DZA"
    },

    {
        id: 94,
        name: "アンゴラ",
        officialName: "アンゴラ共和国",
        region: "アフリカ",
        subregion: "中部アフリカ",
        kana: "あ",
        iso2: "AO",
        iso3: "AGO"
    },

    {
        id: 95,
        name: "ウガンダ",
        officialName: "ウガンダ共和国",
        region: "アフリカ",
        subregion: "東アフリカ",
        kana: "う",
        iso2: "UG",
        iso3: "UGA"
    },

    {
        id: 96,
        name: "エジプト",
        officialName: "エジプト・アラブ共和国",
        region: "アフリカ",
        subregion: "北アフリカ",
        kana: "え",
        iso2: "EG",
        iso3: "EGY"
    },

    {
        id: 97,
        name: "エスワティニ",
        officialName: "エスワティニ王国",
        region: "アフリカ",
        subregion: "南部アフリカ",
        kana: "え",
        iso2: "SZ",
        iso3: "SWZ"
    },

    {
        id: 98,
        name: "エチオピア",
        officialName: "エチオピア連邦民主共和国",
        region: "アフリカ",
        subregion: "東アフリカ",
        kana: "え",
        iso2: "ET",
        iso3: "ETH"
    },

    {
        id: 99,
        name: "エリトリア",
        officialName: "エリトリア国",
        region: "アフリカ",
        subregion: "東アフリカ",
        kana: "え",
        iso2: "ER",
        iso3: "ERI"
    },

    {
        id: 100,
        name: "ガーナ",
        officialName: "ガーナ共和国",
        region: "アフリカ",
        subregion: "西アフリカ",
        kana: "か",
        iso2: "GH",
        iso3: "GHA"
    },

    {
        id: 101,
        name: "カーボベルデ",
        officialName: "カーボベルデ共和国",
        region: "アフリカ",
        subregion: "西アフリカ",
        kana: "か",
        iso2: "CV",
        iso3: "CPV"
    },

    {
        id: 102,
        name: "ガボン",
        officialName: "ガボン共和国",
        region: "アフリカ",
        subregion: "中部アフリカ",
        kana: "か",
        iso2: "GA",
        iso3: "GAB"
    },

    {
        id: 103,
        name: "カメルーン",
        officialName: "カメルーン共和国",
        region: "アフリカ",
        subregion: "中部アフリカ",
        kana: "か",
        iso2: "CM",
        iso3: "CMR"
    },

    {
        id: 104,
        name: "ガンビア",
        officialName: "ガンビア共和国",
        region: "アフリカ",
        subregion: "西アフリカ",
        kana: "か",
        iso2: "GM",
        iso3: "GMB"
    },

    {
        id: 105,
        name: "ギニア",
        officialName: "ギニア共和国",
        region: "アフリカ",
        subregion: "西アフリカ",
        kana: "き",
        iso2: "GN",
        iso3: "GIN"
    },

    {
        id: 106,
        name: "ギニアビサウ",
        officialName: "ギニアビサウ共和国",
        region: "アフリカ",
        subregion: "西アフリカ",
        kana: "き",
        iso2: "GW",
        iso3: "GNB"
    },

    {
        id: 107,
        name: "ケニア",
        officialName: "ケニア共和国",
        region: "アフリカ",
        subregion: "東アフリカ",
        kana: "け",
        iso2: "KE",
        iso3: "KEN"
    },

    {
        id: 108,
        name: "コートジボワール",
        officialName: "コートジボワール共和国",
        region: "アフリカ",
        subregion: "西アフリカ",
        kana: "こ",
        iso2: "CI",
        iso3: "CIV"
    },

    {
        id: 109,
        name: "コモロ",
        officialName: "コモロ連合",
        region: "アフリカ",
        subregion: "東アフリカ",
        kana: "こ",
        iso2: "KM",
        iso3: "COM"
    },

    {
        id: 110,
        name: "コンゴ共和国",
        officialName: "コンゴ共和国",
        region: "アフリカ",
        subregion: "中部アフリカ",
        kana: "こ",
        iso2: "CG",
        iso3: "COG"
    },

    {
        id: 111,
        name: "コンゴ民主共和国",
        officialName: "コンゴ民主共和国",
        region: "アフリカ",
        subregion: "中部アフリカ",
        kana: "こ",
        iso2: "CD",
        iso3: "COD"
    },

       {
        id: 112,
        name: "サントメ・プリンシペ",
        officialName: "サントメ・プリンシペ民主共和国",
        region: "アフリカ",
        subregion: "中部アフリカ",
        kana: "さ",
        iso2: "ST",
        iso3: "STP"
    },

    {
        id: 113,
        name: "ザンビア",
        officialName: "ザンビア共和国",
        region: "アフリカ",
        subregion: "東アフリカ",
        kana: "さ",
        iso2: "ZM",
        iso3: "ZMB"
    },

    {
        id: 114,
        name: "シエラレオネ",
        officialName: "シエラレオネ共和国",
        region: "アフリカ",
        subregion: "西アフリカ",
        kana: "し",
        iso2: "SL",
        iso3: "SLE"
    },

    {
        id: 115,
        name: "ジブチ",
        officialName: "ジブチ共和国",
        region: "アフリカ",
        subregion: "東アフリカ",
        kana: "し",
        iso2: "DJ",
        iso3: "DJI"
    },

    {
        id: 116,
        name: "ジンバブエ",
        officialName: "ジンバブエ共和国",
        region: "アフリカ",
        subregion: "東アフリカ",
        kana: "し",
        iso2: "ZW",
        iso3: "ZWE"
    },

    {
        id: 117,
        name: "スーダン",
        officialName: "スーダン共和国",
        region: "アフリカ",
        subregion: "北アフリカ",
        kana: "す",
        iso2: "SD",
        iso3: "SDN"
    },

    {
        id: 118,
        name: "南スーダン",
        officialName: "南スーダン共和国",
        region: "アフリカ",
        subregion: "東アフリカ",
        kana: "み",
        iso2: "SS",
        iso3: "SSD"
    },

    {
        id: 119,
        name: "セーシェル",
        officialName: "セーシェル共和国",
        region: "アフリカ",
        subregion: "東アフリカ",
        kana: "せ",
        iso2: "SC",
        iso3: "SYC"
    },

    {
        id: 120,
        name: "セネガル",
        officialName: "セネガル共和国",
        region: "アフリカ",
        subregion: "西アフリカ",
        kana: "せ",
        iso2: "SN",
        iso3: "SEN"
    },

    {
        id: 121,
        name: "ソマリア",
        officialName: "ソマリア連邦共和国",
        region: "アフリカ",
        subregion: "東アフリカ",
        kana: "そ",
        iso2: "SO",
        iso3: "SOM"
    },

    {
        id: 122,
        name: "タンザニア",
        officialName: "タンザニア連合共和国",
        region: "アフリカ",
        subregion: "東アフリカ",
        kana: "た",
        iso2: "TZ",
        iso3: "TZA"
    },

    {
        id: 123,
        name: "チャド",
        officialName: "チャド共和国",
        region: "アフリカ",
        subregion: "中部アフリカ",
        kana: "ち",
        iso2: "TD",
        iso3: "TCD"
    },

    {
        id: 124,
        name: "中央アフリカ",
        officialName: "中央アフリカ共和国",
        region: "アフリカ",
        subregion: "中部アフリカ",
        kana: "ち",
        iso2: "CF",
        iso3: "CAF"
    },

    {
        id: 125,
        name: "チュニジア",
        officialName: "チュニジア共和国",
        region: "アフリカ",
        subregion: "北アフリカ",
        kana: "ち",
        iso2: "TN",
        iso3: "TUN"
    },

    {
        id: 126,
        name: "トーゴ",
        officialName: "トーゴ共和国",
        region: "アフリカ",
        subregion: "西アフリカ",
        kana: "と",
        iso2: "TG",
        iso3: "TGO"
    },

    {
        id: 127,
        name: "ナイジェリア",
        officialName: "ナイジェリア連邦共和国",
        region: "アフリカ",
        subregion: "西アフリカ",
        kana: "な",
        iso2: "NG",
        iso3: "NGA"
    },

    {
        id: 128,
        name: "ナミビア",
        officialName: "ナミビア共和国",
        region: "アフリカ",
        subregion: "南部アフリカ",
        kana: "な",
        iso2: "NA",
        iso3: "NAM"
    },

    {
        id: 129,
        name: "ニジェール",
        officialName: "ニジェール共和国",
        region: "アフリカ",
        subregion: "西アフリカ",
        kana: "に",
        iso2: "NE",
        iso3: "NER"
    },

    {
        id: 130,
        name: "ブルキナファソ",
        officialName: "ブルキナファソ",
        region: "アフリカ",
        subregion: "西アフリカ",
        kana: "ふ",
        iso2: "BF",
        iso3: "BFA"
    },

    {
        id: 131,
        name: "ブルンジ",
        officialName: "ブルンジ共和国",
        region: "アフリカ",
        subregion: "東アフリカ",
        kana: "ふ",
        iso2: "BI",
        iso3: "BDI"
    },

    {
        id: 132,
        name: "ベナン",
        officialName: "ベナン共和国",
        region: "アフリカ",
        subregion: "西アフリカ",
        kana: "へ",
        iso2: "BJ",
        iso3: "BEN"
    },

    {
        id: 133,
        name: "ボツワナ",
        officialName: "ボツワナ共和国",
        region: "アフリカ",
        subregion: "南部アフリカ",
        kana: "ほ",
        iso2: "BW",
        iso3: "BWA"
    },

    {
        id: 134,
        name: "マダガスカル",
        officialName: "マダガスカル共和国",
        region: "アフリカ",
        subregion: "東アフリカ",
        kana: "ま",
        iso2: "MG",
        iso3: "MDG"
    },

    {
        id: 135,
        name: "マラウイ",
        officialName: "マラウイ共和国",
        region: "アフリカ",
        subregion: "東アフリカ",
        kana: "ま",
        iso2: "MW",
        iso3: "MWI"
    },

    {
        id: 136,
        name: "マリ",
        officialName: "マリ共和国",
        region: "アフリカ",
        subregion: "西アフリカ",
        kana: "ま",
        iso2: "ML",
        iso3: "MLI"
    },

    {
        id: 137,
        name: "南アフリカ",
        officialName: "南アフリカ共和国",
        region: "アフリカ",
        subregion: "南部アフリカ",
        kana: "み",
        iso2: "ZA",
        iso3: "ZAF"
    },

    {
        id: 138,
        name: "モーリシャス",
        officialName: "モーリシャス共和国",
        region: "アフリカ",
        subregion: "東アフリカ",
        kana: "も",
        iso2: "MU",
        iso3: "MUS"
    },

    {
        id: 139,
        name: "モーリタニア",
        officialName: "モーリタニア・イスラム共和国",
        region: "アフリカ",
        subregion: "西アフリカ",
        kana: "も",
        iso2: "MR",
        iso3: "MRT"
    },

    {
        id: 140,
        name: "モザンビーク",
        officialName: "モザンビーク共和国",
        region: "アフリカ",
        subregion: "東アフリカ",
        kana: "も",
        iso2: "MZ",
        iso3: "MOZ"
    },

    {
        id: 141,
        name: "モロッコ",
        officialName: "モロッコ王国",
        region: "アフリカ",
        subregion: "北アフリカ",
        kana: "も",
        iso2: "MA",
        iso3: "MAR"
    },

    {
        id: 142,
        name: "リビア",
        officialName: "リビア国",
        region: "アフリカ",
        subregion: "北アフリカ",
        kana: "り",
        iso2: "LY",
        iso3: "LBY"
    },

    {
        id: 143,
        name: "リベリア",
        officialName: "リベリア共和国",
        region: "アフリカ",
        subregion: "西アフリカ",
        kana: "り",
        iso2: "LR",
        iso3: "LBR"
    },

    {
        id: 144,
        name: "ルワンダ",
        officialName: "ルワンダ共和国",
        region: "アフリカ",
        subregion: "東アフリカ",
        kana: "る",
        iso2: "RW",
        iso3: "RWA"
    },

    {
        id: 145,
        name: "レソト",
        officialName: "レソト王国",
        region: "アフリカ",
        subregion: "南部アフリカ",
        kana: "れ",
        iso2: "LS",
        iso3: "LSO"
    },

    {
        id: 146,
        name: "赤道ギニア",
        officialName: "赤道ギニア共和国",
        region: "アフリカ",
        subregion: "中部アフリカ",
        kana: "せ",
        iso2: "GQ",
        iso3: "GNQ"
    },

    // ==========================
    // 北アメリカ
    // ==========================

    {
        id: 147,
        name: "アメリカ",
        officialName: "アメリカ合衆国",
        region: "北アメリカ",
        subregion: "北アメリカ",
        kana: "あ",
        iso2: "US",
        iso3: "USA"
    },

    {
        id: 148,
        name: "アンティグア・バーブーダ",
        officialName: "アンティグア・バーブーダ",
        region: "北アメリカ",
        subregion: "カリブ",
        kana: "あ",
        iso2: "AG",
        iso3: "ATG"
    },

    {
        id: 149,
        name: "エルサルバドル",
        officialName: "エルサルバドル共和国",
        region: "北アメリカ",
        subregion: "中央アメリカ",
        kana: "え",
        iso2: "SV",
        iso3: "SLV"
    },

    {
        id: 150,
        name: "カナダ",
        officialName: "カナダ",
        region: "北アメリカ",
        subregion: "北アメリカ",
        kana: "か",
        iso2: "CA",
        iso3: "CAN"
    },

    {
        id: 151,
        name: "キューバ",
        officialName: "キューバ共和国",
        region: "北アメリカ",
        subregion: "カリブ",
        kana: "き",
        iso2: "CU",
        iso3: "CUB"
    },

    {
        id: 152,
        name: "グアテマラ",
        officialName: "グアテマラ共和国",
        region: "北アメリカ",
        subregion: "中央アメリカ",
        kana: "く",
        iso2: "GT",
        iso3: "GTM"
    },

    {
        id: 153,
        name: "グレナダ",
        officialName: "グレナダ",
        region: "北アメリカ",
        subregion: "カリブ",
        kana: "く",
        iso2: "GD",
        iso3: "GRD"
    },

    {
        id: 154,
        name: "コスタリカ",
        officialName: "コスタリカ共和国",
        region: "北アメリカ",
        subregion: "中央アメリカ",
        kana: "こ",
        iso2: "CR",
        iso3: "CRI"
    },

    {
        id: 155,
        name: "ジャマイカ",
        officialName: "ジャマイカ",
        region: "北アメリカ",
        subregion: "カリブ",
        kana: "し",
        iso2: "JM",
        iso3: "JAM"
    },

    {
        id: 156,
        name: "セントクリストファー・ネービス",
        officialName: "セントクリストファー・ネービス",
        region: "北アメリカ",
        subregion: "カリブ",
        kana: "せ",
        iso2: "KN",
        iso3: "KNA"
    },

    {
        id: 157,
        name: "セントビンセント・グレナディーン",
        officialName: "セントビンセント及びグレナディーン諸島",
        region: "北アメリカ",
        subregion: "カリブ",
        kana: "せ",
        iso2: "VC",
        iso3: "VCT"
    },

    {
        id: 158,
        name: "セントルシア",
        officialName: "セントルシア",
        region: "北アメリカ",
        subregion: "カリブ",
        kana: "せ",
        iso2: "LC",
        iso3: "LCA"
    },

    {
        id: 159,
        name: "ドミニカ共和国",
        officialName: "ドミニカ共和国",
        region: "北アメリカ",
        subregion: "カリブ",
        kana: "と",
        iso2: "DO",
        iso3: "DOM"
    },

    {
        id: 160,
        name: "ドミニカ国",
        officialName: "ドミニカ国",
        region: "北アメリカ",
        subregion: "カリブ",
        kana: "と",
        iso2: "DM",
        iso3: "DMA"
    },

    {
        id: 161,
        name: "トリニダード・トバゴ",
        officialName: "トリニダード・トバゴ共和国",
        region: "北アメリカ",
        subregion: "カリブ",
        kana: "と",
        iso2: "TT",
        iso3: "TTO"
    },

    {
        id: 162,
        name: "ニカラグア",
        officialName: "ニカラグア共和国",
        region: "北アメリカ",
        subregion: "中央アメリカ",
        kana: "に",
        iso2: "NI",
        iso3: "NIC"
    },

    {
        id: 163,
        name: "ハイチ",
        officialName: "ハイチ共和国",
        region: "北アメリカ",
        subregion: "カリブ",
        kana: "は",
        iso2: "HT",
        iso3: "HTI"
    },

    {
        id: 164,
        name: "バハマ",
        officialName: "バハマ国",
        region: "北アメリカ",
        subregion: "カリブ",
        kana: "は",
        iso2: "BS",
        iso3: "BHS"
    },

    {
        id: 165,
        name: "パナマ",
        officialName: "パナマ共和国",
        region: "北アメリカ",
        subregion: "中央アメリカ",
        kana: "は",
        iso2: "PA",
        iso3: "PAN"
    },

    {
        id: 166,
        name: "バルバドス",
        officialName: "バルバドス",
        region: "北アメリカ",
        subregion: "カリブ",
        kana: "は",
        iso2: "BB",
        iso3: "BRB"
    },

    {
        id: 167,
        name: "ベリーズ",
        officialName: "ベリーズ",
        region: "北アメリカ",
        subregion: "中央アメリカ",
        kana: "へ",
        iso2: "BZ",
        iso3: "BLZ"
    },

    {
        id: 168,
        name: "ホンジュラス",
        officialName: "ホンジュラス共和国",
        region: "北アメリカ",
        subregion: "中央アメリカ",
        kana: "ほ",
        iso2: "HN",
        iso3: "HND"
    },

    {
        id: 169,
        name: "メキシコ",
        officialName: "メキシコ合衆国",
        region: "北アメリカ",
        subregion: "北アメリカ",
        kana: "め",
        iso2: "MX",
        iso3: "MEX"
    },

    // ==========================
    // 南アメリカ
    // ==========================

    {
        id: 170,
        name: "アルゼンチン",
        officialName: "アルゼンチン共和国",
        region: "南アメリカ",
        subregion: "南アメリカ",
        kana: "あ",
        iso2: "AR",
        iso3: "ARG"
    },

    {
        id: 171,
        name: "ウルグアイ",
        officialName: "ウルグアイ東方共和国",
        region: "南アメリカ",
        subregion: "南アメリカ",
        kana: "う",
        iso2: "UY",
        iso3: "URY"
    },

    {
        id: 172,
        name: "エクアドル",
        officialName: "エクアドル共和国",
        region: "南アメリカ",
        subregion: "南アメリカ",
        kana: "え",
        iso2: "EC",
        iso3: "ECU"
    },

    {
        id: 173,
        name: "ガイアナ",
        officialName: "ガイアナ協同共和国",
        region: "南アメリカ",
        subregion: "南アメリカ",
        kana: "か",
        iso2: "GY",
        iso3: "GUY"
    },

    {
        id: 174,
        name: "コロンビア",
        officialName: "コロンビア共和国",
        region: "南アメリカ",
        subregion: "南アメリカ",
        kana: "こ",
        iso2: "CO",
        iso3: "COL"
    },

    {
        id: 175,
        name: "スリナム",
        officialName: "スリナム共和国",
        region: "南アメリカ",
        subregion: "南アメリカ",
        kana: "す",
        iso2: "SR",
        iso3: "SUR"
    },

    {
        id: 176,
        name: "チリ",
        officialName: "チリ共和国",
        region: "南アメリカ",
        subregion: "南アメリカ",
        kana: "ち",
        iso2: "CL",
        iso3: "CHL"
    },

    {
        id: 177,
        name: "パラグアイ",
        officialName: "パラグアイ共和国",
        region: "南アメリカ",
        subregion: "南アメリカ",
        kana: "は",
        iso2: "PY",
        iso3: "PRY"
    },

    {
        id: 178,
        name: "ブラジル",
        officialName: "ブラジル連邦共和国",
        region: "南アメリカ",
        subregion: "南アメリカ",
        kana: "ふ",
        iso2: "BR",
        iso3: "BRA"
    },

    {
        id: 179,
        name: "ベネズエラ",
        officialName: "ベネズエラ・ボリバル共和国",
        region: "南アメリカ",
        subregion: "南アメリカ",
        kana: "へ",
        iso2: "VE",
        iso3: "VEN"
    },

    {
        id: 180,
        name: "ペルー",
        officialName: "ペルー共和国",
        region: "南アメリカ",
        subregion: "南アメリカ",
        kana: "へ",
        iso2: "PE",
        iso3: "PER"
    },

    {
        id: 181,
        name: "ボリビア",
        officialName: "ボリビア多民族国",
        region: "南アメリカ",
        subregion: "南アメリカ",
        kana: "ほ",
        iso2: "BO",
        iso3: "BOL"
    },

    // ==========================
    // オセアニア
    // ==========================

    {
        id: 182,
        name: "オーストラリア",
        officialName: "オーストラリア連邦",
        region: "オセアニア",
        subregion: "オーストラリア・ニュージーランド",
        kana: "お",
        iso2: "AU",
        iso3: "AUS"
    },

    {
        id: 183,
        name: "キリバス",
        officialName: "キリバス共和国",
        region: "オセアニア",
        subregion: "ミクロネシア",
        kana: "き",
        iso2: "KI",
        iso3: "KIR"
    },

    {
        id: 184,
        name: "クック諸島",
        officialName: "クック諸島",
        region: "オセアニア",
        subregion: "ポリネシア",
        kana: "く",
        iso2: "CK",
        iso3: "COK"
    },

    {
        id: 185,
        name: "サモア",
        officialName: "サモア独立国",
        region: "オセアニア",
        subregion: "ポリネシア",
        kana: "さ",
        iso2: "WS",
        iso3: "WSM"
    },

    {
        id: 186,
        name: "ソロモン諸島",
        officialName: "ソロモン諸島",
        region: "オセアニア",
        subregion: "メラネシア",
        kana: "そ",
        iso2: "SB",
        iso3: "SLB"
    },

    {
        id: 187,
        name: "ツバル",
        officialName: "ツバル",
        region: "オセアニア",
        subregion: "ポリネシア",
        kana: "つ",
        iso2: "TV",
        iso3: "TUV"
    },

    {
        id: 188,
        name: "トンガ",
        officialName: "トンガ王国",
        region: "オセアニア",
        subregion: "ポリネシア",
        kana: "と",
        iso2: "TO",
        iso3: "TON"
    },

    {
        id: 189,
        name: "ナウル",
        officialName: "ナウル共和国",
        region: "オセアニア",
        subregion: "ミクロネシア",
        kana: "な",
        iso2: "NR",
        iso3: "NRU"
    },

    {
        id: 190,
        name: "ニュージーランド",
        officialName: "ニュージーランド",
        region: "オセアニア",
        subregion: "オーストラリア・ニュージーランド",
        kana: "に",
        iso2: "NZ",
        iso3: "NZL"
    },

    {
        id: 191,
        name: "バヌアツ",
        officialName: "バヌアツ共和国",
        region: "オセアニア",
        subregion: "メラネシア",
        kana: "は",
        iso2: "VU",
        iso3: "VUT"
    },

    {
        id: 192,
        name: "パプアニューギニア",
        officialName: "パプアニューギニア独立国",
        region: "オセアニア",
        subregion: "メラネシア",
        kana: "は",
        iso2: "PG",
        iso3: "PNG"
    },

    {
        id: 193,
        name: "パラオ",
        officialName: "パラオ共和国",
        region: "オセアニア",
        subregion: "ミクロネシア",
        kana: "は",
        iso2: "PW",
        iso3: "PLW"
    },

    {
        id: 194,
        name: "フィジー",
        officialName: "フィジー共和国",
        region: "オセアニア",
        subregion: "メラネシア",
        kana: "ふ",
        iso2: "FJ",
        iso3: "FJI"
    },

    {
        id: 195,
        name: "マーシャル諸島",
        officialName: "マーシャル諸島共和国",
        region: "オセアニア",
        subregion: "ミクロネシア",
        kana: "ま",
        iso2: "MH",
        iso3: "MHL"
    },

    {
        id: 196,
        name: "ミクロネシア",
        officialName: "ミクロネシア連邦",
        region: "オセアニア",
        subregion: "ミクロネシア",
        kana: "み",
        iso2: "FM",
        iso3: "FSM"
    },

    {
        id: 197,
        name: "ニウエ",
        officialName: "ニウエ",
        region: "オセアニア",
        subregion: "ポリネシア",
        kana: "に",
        iso2: "NU",
        iso3: "NIU"
    }

];
   
