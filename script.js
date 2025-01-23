let questions = [
    { "japanese": "とにかく", "english": "anyway", "partOfSpeech": "副詞" },
    { "japanese": "美しい", "english": "beautiful", "partOfSpeech": "形容詞" },
    { "japanese": "走る", "english": "run", "partOfSpeech": "動詞" },
    { "japanese": "犬", "english": "dog", "partOfSpeech": "名詞" },
    { "japanese": "信頼，信仰", "english": "faith", "partOfSpeech": "名詞" },
    { "japanese": "忠実に", "english": "faithfully", "partOfSpeech": "副詞" },
    { "japanese": "主として", "english": "primarily", "partOfSpeech": "副詞" },
    { "japanese": "ごみ", "english": "rubbish", "partOfSpeech": "名詞" },
    { "japanese": "を貼り付ける，を取り付ける", "english": "attach", "partOfSpeech": "動詞" },
    { "japanese": "子会社", "english": "subsidiary", "partOfSpeech": "名詞" },
    { "japanese": "洞察（力），知覚", "english": "perception", "partOfSpeech": "名詞" },
    { "japanese": "不思議に思う", "english": "wonder", "partOfSpeech": "動詞" },
    { "japanese": "目標、目的", "english": "objective", "partOfSpeech": "名詞" },
    { "japanese": "を設立する", "english": "establish", "partOfSpeech": "動詞" },
    { "japanese": "投票", "english": "poll", "partOfSpeech": "名詞" },
    { "japanese": "関連のある", "english": "relevant", "partOfSpeech": "形容詞" },
    { "japanese": "に食べ物を与える，を養う", "english": "feed", "partOfSpeech": "動詞" },
    { "japanese": "投票する/投票", "english": "vote", "partOfSpeech": "動詞/名詞" },
    { "japanese": "保持", "english": "retention", "partOfSpeech": "名詞" },
    { "japanese": "外部の", "english": "external", "partOfSpeech": "形容詞" },
    { "japanese": "織物", "english": "fabric", "partOfSpeech": "名詞" },
    { "japanese": "を発生させる", "english": "generate", "partOfSpeech": "動詞" },
    { "japanese": "お土産", "english": "souvenir", "partOfSpeech": "名詞" },
    { "japanese": "欠点", "english": "downside", "partOfSpeech": "名詞" },
    { "japanese": "大臣", "english": "minister", "partOfSpeech": "名詞" },
    { "japanese": "借金，負債", "english": "debt", "partOfSpeech": "名詞" },
    { "japanese": "雇用者", "english": "employer", "partOfSpeech": "名詞" },
    { "japanese": "を維持する，だと主張する", "english": "maintain", "partOfSpeech": "動詞" },
    { "japanese": "所得", "english": "income", "partOfSpeech": "名詞" },
    { "japanese": "木材", "english": "timber", "partOfSpeech": "名詞" },
    { "japanese": "形/を形作る", "english": "shape", "partOfSpeech": "名詞/動詞" },
    { "japanese": "化学の/化学製品", "english": "chemical", "partOfSpeech": "形容詞/名詞" },
    { "japanese": "冒険的事業", "english": "venture", "partOfSpeech": "名詞" },
    { "japanese": "疑問", "english": "query", "partOfSpeech": "名詞" },
    { "japanese": "食器棚", "english": "cupboard", "partOfSpeech": "名詞" },
    { "japanese": "引き出し", "english": "drawer", "partOfSpeech": "名詞" },
    { "japanese": "該当する", "english": "applicable", "partOfSpeech": "形容詞" },
    { "japanese": "特定する", "english": "locate", "partOfSpeech": "動詞" },
    { "japanese": "容量", "english": "capability", "partOfSpeech": "名詞" },
    { "japanese": "式", "english": "formula", "partOfSpeech": "名詞" },
    { "japanese": "囲む、同封する", "english": "enclose", "partOfSpeech": "動詞" },
    { "japanese": "機関", "english": "administration", "partOfSpeech": "名詞" },
    { "japanese": "魅力/を魅了する", "english": "charm", "partOfSpeech": "名詞/動詞" },
    { "japanese": "保守的な", "english": "conservative", "partOfSpeech": "形容詞" },
    { "japanese": "を稼ぐ", "english": "earn", "partOfSpeech": "動詞" },
    { "japanese": "田舎", "english": "countryside", "partOfSpeech": "名詞" },
    { "japanese": "取引", "english": "transaction", "partOfSpeech": "名詞" },
    { "japanese": "排他的な", "english": "exclusive", "partOfSpeech": "形容詞" },
    { "japanese": "製造元", "english": "maker", "partOfSpeech": "名詞" },
    { "japanese": "経済", "english": "economy", "partOfSpeech": "名詞" },
    { "japanese": "効果的に", "english": "effectively", "partOfSpeech": "副詞" },
    { "japanese": "実施する", "english": "implement", "partOfSpeech": "動詞" },
    { "japanese": "期待", "english": "expectation", "partOfSpeech": "名詞" },
    { "japanese": "独立した，自立した", "english": "independent", "partOfSpeech": "形容詞" },
    { "japanese": "取得", "english": "acquisition", "partOfSpeech": "名詞" },
    { "japanese": "海の", "english": "marine", "partOfSpeech": "形容詞" },
    { "japanese": "手数料", "english": "commission", "partOfSpeech": "名詞" },
    { "japanese": "持続可能な", "english": "sustainable", "partOfSpeech": "形容詞" },
    { "japanese": "大きさ", "english": "bulk", "partOfSpeech": "名詞" },
    { "japanese": "包括的な", "english": "comprehensive", "partOfSpeech": "形容詞" },
    { "japanese": "引き起こした", "english": "caused", "partOfSpeech": "動詞" },
      { "japanese": "を放送する", "english": "broadcast", "partOfSpeech": "動詞" },
      { "japanese": "相談する", "english": "consult", "partOfSpeech": "動詞" },
      { "japanese": "木材", "english": "wood", "partOfSpeech": "名詞" },
      { "japanese": "問い合わせる", "english": "inquire", "partOfSpeech": "動詞" },
      { "japanese": "前進する/前進，事前", "english": "advance", "partOfSpeech": "動詞/名詞" },
      { "japanese": "発表，告知", "english": "announcement", "partOfSpeech": "名詞" },
      { "japanese": "励ました", "english": "encouraged", "partOfSpeech": "動詞" },
      { "japanese": "期限切れの", "english": "expired", "partOfSpeech": "形容詞" },
      { "japanese": "懸案する", "english": "concern", "partOfSpeech": "動詞" },
      { "japanese": "関係", "english": "relation", "partOfSpeech": "名詞" },
      { "japanese": "はっきりしない", "english": "unclear", "partOfSpeech": "形容詞" },
      { "japanese": "便利に", "english": "conveniently", "partOfSpeech": "副詞" },
      { "japanese": "お金を預ける", "english": "deposit", "partOfSpeech": "動詞" },
      { "japanese": "説明", "english": "explanation", "partOfSpeech": "名詞" },
      { "japanese": "送り出す", "english": "launch", "partOfSpeech": "動詞" },
      { "japanese": "宿題", "english": "assignment", "partOfSpeech": "名詞" },
      { "japanese": "四半期", "english": "quarter", "partOfSpeech": "名詞" },
      { "japanese": "開発された", "english": "developed", "partOfSpeech": "形容詞" },
      { "japanese": "建築", "english": "architecture", "partOfSpeech": "名詞" },
      { "japanese": "手配", "english": "arrangement", "partOfSpeech": "名詞" },
      { "japanese": "一つの，一人の，独身の", "english": "single", "partOfSpeech": "形容詞" },
      { "japanese": "意見", "english": "opinion", "partOfSpeech": "名詞" },
      { "japanese": "部門，部類", "english": "category", "partOfSpeech": "名詞" },
      { "japanese": "を調節する，順応する", "english": "adjust", "partOfSpeech": "動詞" },
      { "japanese": "の後を追う", "english": "follow", "partOfSpeech": "動詞" },
      { "japanese": "に沿って", "english": "along", "partOfSpeech": "前置詞" },
      { "japanese": "著者，作家", "english": "author", "partOfSpeech": "名詞" },
      { "japanese": "今まで", "english": "ever", "partOfSpeech": "副詞" },
      { "japanese": "を手に入れる", "english": "obtain", "partOfSpeech": "動詞" },
      { "japanese": "手順", "english": "procedure", "partOfSpeech": "名詞" },
      { "japanese": "気づいた", "english": "noticed", "partOfSpeech": "動詞" },
      { "japanese": "大学", "english": "college", "partOfSpeech": "名詞" },
      { "japanese": "をより好む", "english": "prefer", "partOfSpeech": "動詞" },
      { "japanese": "社会の，社交の", "english": "social", "partOfSpeech": "形容詞" },
      { "japanese": "消費者", "english": "consumer", "partOfSpeech": "名詞" },
      { "japanese": "会計士", "english": "accountant", "partOfSpeech": "名詞" },
      { "japanese": "現場で", "english": "on site", "partOfSpeech": "副詞" },
      { "japanese": "導かれた", "english": "conducted", "partOfSpeech": "形容詞" },
      { "japanese": "承認する", "english": "approve", "partOfSpeech": "動詞" },
      { "japanese": "を拡大する", "english": "expand", "partOfSpeech": "動詞" },
      { "japanese": "（大規模な）会議", "english": "convention", "partOfSpeech": "名詞" },
      { "japanese": "住宅", "english": "housing", "partOfSpeech": "名詞" },
      { "japanese": "解決法", "english": "solution", "partOfSpeech": "名詞" },
      { "japanese": "貸す", "english": "lease", "partOfSpeech": "動詞" },
      { "japanese": "ためらう", "english": "hesitate", "partOfSpeech": "動詞" },
      { "japanese": "目立った", "english": "outstanding", "partOfSpeech": "形容詞" },
      { "japanese": "規則的に，定期的に", "english": "regularly", "partOfSpeech": "副詞" },
      { "japanese": "国家の，国民の", "english": "national", "partOfSpeech": "形容詞" },
      { "japanese": "祝福", "english": "congratulation", "partOfSpeech": "名詞" },
      { "japanese": "置き換えた", "english": "replaced", "partOfSpeech": "動詞" },
      { "japanese": "有名な", "english": "renowned", "partOfSpeech": "形容詞" },
      { "japanese": "参加", "english": "participation", "partOfSpeech": "名詞" },
      { "japanese": "中身，目次/満足して", "english": "content", "partOfSpeech": "名詞/形容詞" },
      { "japanese": "感謝", "english": "appreciation", "partOfSpeech": "名詞" },
      { "japanese": "皮膚，皮膜", "english": "skin", "partOfSpeech": "名詞" },
      { "japanese": "参加者", "english": "participant", "partOfSpeech": "名詞" },
      { "japanese": "を妨げる", "english": "prevent", "partOfSpeech": "動詞" },
      { "japanese": "成功", "english": "success", "partOfSpeech": "名詞" },
      { "japanese": "を除いて", "english": "except", "partOfSpeech": "前置詞" },
      { "japanese": "由緒のある", "english": "historic", "partOfSpeech": "形容詞" },
      { "japanese": "提案した", "english": "proposed", "partOfSpeech": "動詞" },
      { "japanese": "収容する", "english": "accommodate", "partOfSpeech": "動詞" },
      { "japanese": "以前は", "english": "previously", "partOfSpeech": "副詞" },
      { "japanese": "労働", "english": "labor", "partOfSpeech": "名詞" },
      { "japanese": "給付金/を与える", "english": "grant", "partOfSpeech": "名詞/動詞" },
      { "japanese": "混ぜる", "english": "blend", "partOfSpeech": "動詞" },
      { "japanese": "乗組員，一団", "english": "crew", "partOfSpeech": "名詞" },
      { "japanese": "頭，先頭", "english": "head", "partOfSpeech": "名詞" },
      { "japanese": "無農薬の", "english": "organic", "partOfSpeech": "形容詞" },
      { "japanese": "適した", "english": "suitable", "partOfSpeech": "形容詞" },
      { "japanese": "比較できる", "english": "comparable", "partOfSpeech": "形容詞" },
      { "japanese": "でない限り", "english": "unless", "partOfSpeech": "接続詞" },
      { "japanese": "率，割合", "english": "rate", "partOfSpeech": "名詞" },
      { "japanese": "場所", "english": "location", "partOfSpeech": "名詞" },
      { "japanese": "同意，一致", "english": "agreement", "partOfSpeech": "名詞" },
      { "japanese": "暗示した", "english": "implied", "partOfSpeech": "形容詞" },
      { "japanese": "十分に，完全に", "english": "fully", "partOfSpeech": "副詞" },
      { "japanese": "特に", "english": "especially", "partOfSpeech": "副詞" },
      { "japanese": "あいさつ", "english": "greeting", "partOfSpeech": "名詞" },
      { "japanese": "通常の", "english": "usual", "partOfSpeech": "形容詞" },
      { "japanese": "(もまた)～でない", "english": "either", "partOfSpeech": "接続詞" },
      { "japanese": "細胞", "english": "cell", "partOfSpeech": "名詞" },
      { "japanese": "再構築する", "english": "restructure", "partOfSpeech": "動詞" },
      { "japanese": "挫折させる", "english": "frustrate", "partOfSpeech": "動詞" },
      { "japanese": "骨格", "english": "framework", "partOfSpeech": "名詞" },
      { "japanese": "抗議する/抗議", "english": "protest", "partOfSpeech": "動詞/名詞" },
      { "japanese": "公平", "english": "equity", "partOfSpeech": "名詞" },
      { "japanese": "交渉する", "english": "negotiate", "partOfSpeech": "動詞" },
      { "japanese": "原理・原則，主義", "english": "principle", "partOfSpeech": "名詞" },
      { "japanese": "憲法", "english": "constitution", "partOfSpeech": "名詞" },
      { "japanese": "結婚", "english": "marriage", "partOfSpeech": "名詞" },
      { "japanese": "計算する", "english": "reckon", "partOfSpeech": "動詞" },
      { "japanese": "計画", "english": "scheme", "partOfSpeech": "名詞" },
      { "japanese": "刑務所", "english": "prison", "partOfSpeech": "名詞" },
      { "japanese": "群れ", "english": "troop", "partOfSpeech": "名詞" },
      { "japanese": "勤勉", "english": "diligence", "partOfSpeech": "名詞" },
      { "japanese": "教会", "english": "church", "partOfSpeech": "名詞" },
      { "japanese": "供給", "english": "provision", "partOfSpeech": "名詞" },
      { "japanese": "給与", "english": "payroll", "partOfSpeech": "名詞" },
      { "japanese": "宮殿", "english": "palace", "partOfSpeech": "名詞" },
      { "japanese": "犠牲者", "english": "casualty", "partOfSpeech": "名詞" },
      { "japanese": "騎兵", "english": "cavalry", "partOfSpeech": "名詞" },
      { "japanese": "軌道", "english": "orbit", "partOfSpeech": "名詞" },
      { "japanese": "規定者", "english": "regulator", "partOfSpeech": "名詞" },
      { "japanese": "祈り", "english": "prayer", "partOfSpeech": "名詞" },
      { "japanese": "期間，学期，用語，条件，間柄", "english": "term", "partOfSpeech": "名詞" },
      { "japanese": "管理者", "english": "administrator", "partOfSpeech": "名詞" },
      { "japanese": "幹", "english": "stem", "partOfSpeech": "名詞" },
      { "japanese": "滑り止め", "english": "skid", "partOfSpeech": "名詞" },
      { "japanese": "割り当てる", "english": "allot", "partOfSpeech": "動詞" },
      { "japanese": "覚え書き", "english": "memorandum", "partOfSpeech": "名詞" },
      { "japanese": "獲物", "english": "prey", "partOfSpeech": "名詞" },
      { "japanese": "改訂する", "english": "revise", "partOfSpeech": "動詞" },
      { "japanese": "会長", "english": "chairman", "partOfSpeech": "名詞" },
      { "japanese": "会社，事業", "english": "enterprise", "partOfSpeech": "名詞" },
      { "japanese": "果肉", "english": "pulp", "partOfSpeech": "名詞" },
      { "japanese": "家主", "english": "landlord", "partOfSpeech": "名詞" },
      { "japanese": "加速する", "english": "accelerate", "partOfSpeech": "動詞" },
      { "japanese": "炎", "english": "flame", "partOfSpeech": "名詞" },
      { "japanese": "援助/…を助ける", "english": "aid", "partOfSpeech": "名詞/動詞" },
      { "japanese": "衛星", "english": "satellite", "partOfSpeech": "名詞" },
      { "japanese": "引用", "english": "quotation", "partOfSpeech": "名詞" },
      { "japanese": "一目見る", "english": "glance", "partOfSpeech": "動詞" },
      { "japanese": "一編み", "english": "stitch", "partOfSpeech": "名詞" },
      { "japanese": "医薬品の", "english": "pharmaceutical", "partOfSpeech": "形容詞" },
      { "japanese": "違反", "english": "breach", "partOfSpeech": "名詞" },
      { "japanese": "委託、献身", "english": "commitment", "partOfSpeech": "名詞" },
      { "japanese": "委託", "english": "consignment", "partOfSpeech": "名詞" },
      { "japanese": "安定", "english": "stability", "partOfSpeech": "名詞" },
      { "japanese": "ポンプ", "english": "pump", "partOfSpeech": "名詞" },
      { "japanese": "ぴんと上げる", "english": "perk", "partOfSpeech": "動詞" },
      { "japanese": "に従って", "english": "pursuant", "partOfSpeech": "形容詞" },
      { "japanese": "トンネル", "english": "tunnel", "partOfSpeech": "名詞" },
      { "japanese": "こぐ", "english": "row", "partOfSpeech": "動詞" },
      { "japanese": "くっつく，固執する/棒きれ", "english": "stick", "partOfSpeech": "動詞/名詞" },
      { "japanese": "捧げる", "english": "dedicate", "partOfSpeech": "動詞" },
      { "japanese": "寄付，貢献", "english": "contribution", "partOfSpeech": "名詞" },
      { "japanese": "添付", "english": "attachment", "partOfSpeech": "名詞" },
      { "japanese": "を決める", "english": "determine", "partOfSpeech": "動詞" },
      { "japanese": "量", "english": "quantity", "partOfSpeech": "名詞" },
      { "japanese": "排出口", "english": "vent", "partOfSpeech": "名詞" },
      { "japanese": "天井", "english": "ceiling", "partOfSpeech": "名詞" },
      { "japanese": "起源", "english": "origin", "partOfSpeech": "名詞" },
      { "japanese": "延長時間，残業", "english": "overtime", "partOfSpeech": "名詞" },
      { "japanese": "停電", "english": "outage", "partOfSpeech": "名詞" },
      { "japanese": "払い戻し/払戻す", "english": "rebate", "partOfSpeech": "名詞/動詞" },
      { "japanese": "創作", "english": "fiction", "partOfSpeech": "名詞" },
      { "japanese": "栄養", "english": "nutrition", "partOfSpeech": "名詞" },
      { "japanese": "不足", "english": "shortage", "partOfSpeech": "名詞" },
      { "japanese": "方法", "english": "method", "partOfSpeech": "名詞" },
      { "japanese": "照会", "english": "referral", "partOfSpeech": "名詞" },
      { "japanese": "質問表", "english": "questionnaire", "partOfSpeech": "名詞" },
      { "japanese": "失望", "english": "disappointment", "partOfSpeech": "名詞" },
      { "japanese": "値する", "english": "deserve", "partOfSpeech": "動詞" },
      { "japanese": "証拠", "english": "proof", "partOfSpeech": "名詞" },
      { "japanese": "聴衆，観客，視聴者", "english": "audience", "partOfSpeech": "名詞" },
      { "japanese": "親しみやすさ", "english": "friendliness", "partOfSpeech": "名詞" },
      { "japanese": "化学", "english": "chemistry", "partOfSpeech": "名詞" },
      { "japanese": "味/な味がする", "english": "taste", "partOfSpeech": "名詞/動詞" },
      { "japanese": "資金調達", "english": "fund-raising", "partOfSpeech": "名詞" },
      { "japanese": "計算", "english": "calculation", "partOfSpeech": "名詞" },
      { "japanese": "処方箋", "english": "prescription", "partOfSpeech": "名詞" },
      { "japanese": "を果たす，をかなえる", "english": "fulfill", "partOfSpeech": "動詞" },
      { "japanese": "協力する", "english": "collaborate", "partOfSpeech": "動詞" },
      { "japanese": "薬局", "english": "pharmacy", "partOfSpeech": "名詞" },
      { "japanese": "谷", "english": "valley", "partOfSpeech": "名詞" },
      { "japanese": "資格を与える", "english": "qualify", "partOfSpeech": "動詞" },
      { "japanese": "裁判，試み", "english": "trial", "partOfSpeech": "名詞" },
      { "japanese": "検査官", "english": "inspector", "partOfSpeech": "名詞" },
      { "japanese": "認識する", "english": "recognize", "partOfSpeech": "動詞" },
      { "japanese": "に付き添う", "english": "accompany", "partOfSpeech": "動詞" },
      { "japanese": "を反映する，熟考する", "english": "reflect", "partOfSpeech": "動詞" },
      { "japanese": "成就，達成", "english": "accomplishment", "partOfSpeech": "名詞" },
      { "japanese": "保存", "english": "preservation", "partOfSpeech": "名詞" },
      { "japanese": "滑る", "english": "slip", "partOfSpeech": "動詞" },
      { "japanese": "破壊", "english": "disruption", "partOfSpeech": "名詞" },
      { "japanese": "監督する", "english": "supervise", "partOfSpeech": "動詞" },
      { "japanese": "農業", "english": "agriculture", "partOfSpeech": "名詞" },
      { "japanese": "学会、協会", "english": "academy", "partOfSpeech": "名詞" },
      { "japanese": "自慢する", "english": "boast", "partOfSpeech": "動詞" },
      { "japanese": "監督", "english": "supervision", "partOfSpeech": "名詞" },
      { "japanese": "見習い", "english": "apprenticeship", "partOfSpeech": "名詞" },
      { "japanese": "を表す，を代表する", "english": "represent", "partOfSpeech": "動詞" },
      { "japanese": "礼儀", "english": "courtesy", "partOfSpeech": "名詞" },
      { "japanese": "拡張", "english": "expansion", "partOfSpeech": "名詞" },
      { "japanese": "問題処理", "english": "troubleshooting", "partOfSpeech": "名詞" },
      { "japanese": "立証", "english": "verification", "partOfSpeech": "名詞" },
      { "japanese": "呼び戻す", "english": "recall", "partOfSpeech": "動詞" },
      { "japanese": "可能にする", "english": "enable", "partOfSpeech": "動詞" },
      { "japanese": "鉱石", "english": "ore", "partOfSpeech": "名詞" },
      { "japanese": "簡易キッチン", "english": "kitchenette", "partOfSpeech": "名詞" },
      { "japanese": "寄付する，貢献する", "english": "contribute", "partOfSpeech": "動詞" },
];

let score = 0;
let lives = 3;
let timeLeft = 90;
let currentQuestionIndex = 0;
let timer;
let selectedQuestions = [];

// HTML要素取得
const homeScreen = document.getElementById("home-screen");
const gameScreen = document.getElementById("game-screen");
const gameOverScreen = document.getElementById("game-over-screen");
const gameClearScreen = document.getElementById("game-clear-screen");

const gamePlayButton = document.getElementById("game-play-button");
const startButton = document.getElementById("start-button");
const returnHomeButton = document.getElementById("return-home-button");
const returnHomeButtonClear = document.getElementById("return-home-button-clear");
const inputElement = document.getElementById("input");
const wordElement = document.getElementById("word");
const partOfSpeechElement = document.getElementById("part-of-speech");
const hintButton = document.getElementById("hint-button");
const hintElement = document.getElementById("hint");
const scoreElement = document.getElementById("score");
const livesElement = document.getElementById("lives");
const timerElement = document.getElementById("timer");
const questionPlaceholder = document.getElementById("question-placeholder");
const correctAnswerElement = document.getElementById("correct-answer");

// ホーム画面からゲーム画面へ
gamePlayButton.addEventListener("click", () => {
    homeScreen.style.display = "none";
    gameScreen.style.display = "block";
});

startButton.addEventListener("click", startGame);

returnHomeButton.addEventListener("click", () => {
    gameOverScreen.style.display = "none";
    homeScreen.style.display = "block";
    resetGame();
});

returnHomeButtonClear.addEventListener("click", () => {
    gameClearScreen.style.display = "none";
    homeScreen.style.display = "block";
    resetGame();
});

function startGame() {
    score = 0;
    lives = 3;
    timeLeft = 90;
    currentQuestionIndex = 0;
    selectedQuestions = getRandomQuestions();
    updateUI();
    showQuestion();
    startTimer();
    inputElement.disabled = false;
    inputElement.focus();
    startButton.style.display = "none";
    questionPlaceholder.style.display = "none";
    hintButton.style.display = "block";
    hintElement.style.display = "none";
    correctAnswerElement.style.display = "none";
}

function resetGame() {
    clearTimer();
    score = 0;
    lives = 3;
    timeLeft = 90;
    currentQuestionIndex = 0;
    inputElement.value = '';
    inputElement.disabled = true;
    startButton.style.display = "block";
    questionPlaceholder.style.display = "block";
    hintButton.style.display = "none";
    hintElement.style.display = "none";
    correctAnswerElement.style.display = "none";
    updateUI();
}

function getRandomQuestions() {
    const shuffled = [...questions].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, 5); // ランダムに5問選ぶ
}

function showQuestion() {
    if (currentQuestionIndex >= selectedQuestions.length) {
        showGameClearScreen();
        return;
    }

    const question = selectedQuestions[currentQuestionIndex];
    wordElement.textContent = question.japanese;
    partOfSpeechElement.textContent = question.partOfSpeech;
    inputElement.value = '';
    hintElement.style.display = "none";
}

function updateUI() {
    scoreElement.textContent = `スコア: ${score}`;
    livesElement.textContent = `ライフ: ${lives}`;
    timerElement.textContent = `残り時間: ${timeLeft}秒`;
}

function startTimer() {
    clearTimer();
    timer = setInterval(() => {
        timeLeft--;
        timerElement.textContent = `残り時間: ${timeLeft}秒`;
        if (timeLeft <= 0) {
            clearTimer();
            handleTimeUp();
        }
    }, 1000);
}

function clearTimer() {
    if (timer) clearInterval(timer);
}

function handleTimeUp() {
    lives--;
    if (lives <= 0) {
        showGameOverScreen();
    } else {
        currentQuestionIndex++;
        showQuestion();
        startTimer();
    }
    updateUI();
}

inputElement.addEventListener("keydown", (event) => {
    if (event.key === "Enter" && inputElement.value.trim() !== '') {
        clearTimer();
        checkAnswer(inputElement.value.trim());
    }
});

function checkAnswer(answer) {
    const question = selectedQuestions[currentQuestionIndex];
    if (answer.toLowerCase() === question.english.toLowerCase()) {
        score += 10;
        currentQuestionIndex++;
        if (currentQuestionIndex < selectedQuestions.length) {
            showQuestion();
            startTimer();
        } else {
            showGameClearScreen();
        }
    } else {
        lives--;
        if (lives <= 0) {
            showGameOverScreen();
        } else {
            correctAnswerElement.textContent = `正解は: ${question.english}`;
            correctAnswerElement.style.display = "block";
            currentQuestionIndex++;
            showQuestion();
            startTimer();
        }
    }
    updateUI();
}

hintButton.addEventListener("click", () => {
    const question = selectedQuestions[currentQuestionIndex];
    hintElement.textContent = `ヒント: ${question.english[0].toUpperCase()}`;
    hintElement.style.display = "block";
});

function showGameOverScreen() {
    gameScreen.style.display = "none";
    gameOverScreen.style.display = "block";
    document.getElementById("final-score").textContent = `あなたのスコア: ${score}`;
}

function showGameClearScreen() {
    gameScreen.style.display = "none";
    gameClearScreen.style.display = "block";
    document.getElementById("final-score-clear").textContent = `あなたのスコア: ${score}`;
}
