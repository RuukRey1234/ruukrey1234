// 3✕モードの単語リスト
let questions = [
    { "japanese": "ごみ(L始まり）", "english": "litter", "partOfSpeech": "名詞" },
    { "japanese": "ごみ（G始まり）", "english": "garvage", "partOfSpeech": "名詞" },
    { "japanese": "ごみ（R始まり）", "english": "rubbish", "partOfSpeech": "名詞" },
    { "japanese": "ごみ（T始まり）", "english": "trash", "partOfSpeech": "名詞" },
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
    { "japanese": "食器棚", "english": "cupboard", "partOfSpeech": "名詞" },
    { "japanese": "引き出し", "english": "drawer", "partOfSpeech": "名詞" },
    { "japanese": "特定する、置く", "english": "locate", "partOfSpeech": "動詞" },
    { "japanese": "容量", "english": "capability", "partOfSpeech": "名詞" },
      { "japanese": "囲む、同封する", "english": "enclose", "partOfSpeech": "動詞" },
    { "japanese": "保守的な", "english": "conservative", "partOfSpeech": "形容詞" },
    { "japanese": "を稼ぐ", "english": "earn", "partOfSpeech": "動詞" },
    { "japanese": "田舎", "english": "countryside", "partOfSpeech": "名詞" },
    { "japanese": "田舎のような", "english": "rural", "partOfSpeech": "名詞" },
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
    { "japanese": "持続可能な", "english": "sustainable", "partOfSpeech": "形容詞" },
    { "japanese": "大きさ、大半", "english": "bulk", "partOfSpeech": "名詞" },
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
      { "japanese": "大学（C始まり）", "english": "college", "partOfSpeech": "名詞" },
      { "japanese": "大学（U始まり）", "english": "university", "partOfSpeech": "名詞" },
      { "japanese": "をより好む", "english": "prefer", "partOfSpeech": "動詞" },
      { "japanese": "社会の，社交の", "english": "social", "partOfSpeech": "形容詞" },
      { "japanese": "消費者", "english": "consumer", "partOfSpeech": "名詞" },
      { "japanese": "会計士", "english": "accountant", "partOfSpeech": "名詞" },
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
      { "japanese": "祝福", "english": "Blessing", "partOfSpeech": "名詞" },
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
      { "japanese": "生の", "english": "raw", "partOfSpeech": "名詞" },
      { "japanese": "法律", "english": "law", "partOfSpeech": "名詞" },
      { "japanese": "列", "english": "row", "partOfSpeech": "名詞" },
      { "japanese": "低い", "english": "low", "partOfSpeech": "名詞" },


];


let hardModeQuestions = [
    { "japanese": "生の", "english": "raw" },
    { "japanese": "法律", "english": "law" },
    { "japanese": "列", "english": "row" },
    { "japanese": "低い", "english": "low" },
        { "japanese": "抽象的な、理論的な", "english": "Abstract", "partOfSpeech": "形容詞" },
        { "japanese": "蓄積する、積み上げる", "english": "Accumulate", "partOfSpeech": "動詞" },
        { "japanese": "知人、面識", "english": "Acquaintance", "partOfSpeech": "名詞" },
        { "japanese": "十分な、広い", "english": "Ample", "partOfSpeech": "形容詞" },
        { "japanese": "適切な、ふさわしい", "english": "Appropriate", "partOfSpeech": "形容詞" },
        { "japanese": "任意の、恣意的な", "english": "Arbitrary", "partOfSpeech": "形容詞" },
        { "japanese": "評価する、査定する", "english": "Assess", "partOfSpeech": "動詞" },
        { "japanese": "防ぐ、回避する", "english": "Avert", "partOfSpeech": "動詞" },
        { "japanese": "強制する、無理にさせる", "english": "Compel", "partOfSpeech": "動詞" },
        { "japanese": "示す、意味する", "english": "Denote", "partOfSpeech": "動詞" },
        { "japanese": "減少する、縮小する", "english": "Diminish", "partOfSpeech": "動詞" },
        { "japanese": "強調する", "english": "Emphasise", "partOfSpeech": "動詞" },
        { "japanese": "包み込む、含む", "english": "Encompass", "partOfSpeech": "動詞" },
        { "japanese": "妨げる、抑制する", "english": "Inhibit", "partOfSpeech": "動詞" },
        { "japanese": "例、実例", "english": "Instance", "partOfSpeech": "名詞" },
        { "japanese": "正当化する、弁明する", "english": "Justify", "partOfSpeech": "動詞" },
        { "japanese": "気が進まない、乗り気でない", "english": "Reluctant", "partOfSpeech": "形容詞" },
        { "japanese": "抵抗する、反抗する", "english": "Resist", "partOfSpeech": "動詞" },
        { "japanese": "我慢する、許容する", "english": "Tolerate", "partOfSpeech": "動詞" },
            { "japanese": "階層", "english": "hierarchy", "partOfSpeech": "名詞" },
            { "japanese": "文房具", "english": "stationery", "partOfSpeech": "名詞" },
            { "japanese": "静止した状態", "english": "stationary", "partOfSpeech": "名詞" },
            { "japanese": "耳鼻咽喉科", "english": "Otorhinolaryngology", "partOfSpeech": "名詞" },
            { "japanese": "輪っかの形をしたサンゴ礁", "english": "atoll", "partOfSpeech": "名詞" },
            { "japanese": "心臓の、心臓血管の", "english": "cardiovascular", "partOfSpeech": "形容詞" },
            { "japanese": "長い単語恐怖症", "english": "hippopotomonstrosesquippedaliophobia", "partOfSpeech": "名詞" },
            { "japanese": "乾杯する（３文字）", "english": "make a toast" },
            { "japanese": "漆、漆器", "english": "japan" },
            { "japanese": "書く", "english": "pen" },
           


       
       
    ];


// 共通変数
let isHardMode = false; // モードフラグ（通常モード:false、鬼畜モード:true）
let score = 0;
let lives = 3;
let timeLeft = 999;
let currentQuestionIndex = 0;
let timer;
let selectedQuestions = []; // 現在のモードの問題リスト
let reviewList = []; // レビュー用の正解/不正解記録

// HTML要素の取得
const homeScreen = document.getElementById("home-screen");
const gameScreen = document.getElementById("game-screen");
const gameOverScreen = document.getElementById("game-over-screen");
const gameClearScreen = document.getElementById("game-clear-screen");
const easyModeButton = document.getElementById("easy-mode-button");
const hardModeButton = document.getElementById("hard-mode-button");
const startButton = document.getElementById("start-button");
const inputElement = document.getElementById("input");
const scoreElement = document.getElementById("score");
const livesElement = document.getElementById("lives");
const timerElement = document.getElementById("timer");
const questionPlaceholder = document.getElementById("question-placeholder");
const finalScoreElement = document.getElementById("final-score");
const finalScoreClearElement = document.getElementById("final-score-clear");
const reviewListGameOver = document.createElement("div");
const reviewListGameClear = document.createElement("div");
const returnHomeButton = document.getElementById("return-home-button");
const returnHomeButtonClear = document.getElementById("return-home-button-clear");

// モード選択ボタン
easyModeButton.addEventListener("click", () => {
    isHardMode = false; // 通常モードを選択
    switchToGameScreen();
});

hardModeButton.addEventListener("click", () => {
    isHardMode = true; // 鬼畜モードを選択
    switchToGameScreen();
});

// ゲーム画面に移行
function switchToGameScreen() {
    homeScreen.style.display = "none";
    gameScreen.style.display = "block";
    resetGameState();
}

// ゲーム開始ボタン
startButton.addEventListener("click", () => {
    startButton.style.display = "none";
    inputElement.style.display = "block";
    startGame();
});

// ゲーム開始
function startGame() {
    resetGameState();

    // モードに応じた問題リストを選択
    selectedQuestions = isHardMode ? [...hardModeQuestions] : [...questions];

    selectRandomQuestions(); // 問題をランダムに選択
    showNextQuestion();
    startTimer();
}

// ゲーム状態のリセット
function resetGameState() {
    score = 0;
    lives = isHardMode ? 1 : 3; // 鬼畜モードではライフが1
    timeLeft = 3000;
    currentQuestionIndex = 0;
    reviewList = []; // レビューリストをリセット
    scoreElement.textContent = `スコア: ${score}`;
    livesElement.textContent = `ライフ: ${lives}`;
    timerElement.textContent = `残り時間: ${timeLeft}秒`;
    inputElement.value = "";
    reviewListGameOver.innerHTML = "";
    reviewListGameClear.innerHTML = "";
}

// ランダムに問題を選ぶ
function selectRandomQuestions() {
    const shuffled = selectedQuestions.sort(() => Math.random() - 0.5); // ランダムにシャッフル
    selectedQuestions = shuffled.slice(0, 5); // 最初の5問を選択
}

// 次の問題を表示
function showNextQuestion() {
    if (currentQuestionIndex < selectedQuestions.length) {
        const question = selectedQuestions[currentQuestionIndex];
        questionPlaceholder.textContent = question.japanese;
    } else {
        clearInterval(timer);
        switchToGameClearScreen();
    }
}

// 入力時の判定
inputElement.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        const userInput = inputElement.value.trim().toLowerCase();
        const question = selectedQuestions[currentQuestionIndex];
        const correctAnswer = question.english.toLowerCase();

        if (userInput === correctAnswer) {
            document.body.style.backgroundColor = "red"; // 正解
            score += 10;
            scoreElement.textContent = `スコア: ${score}`;
            reviewList.push({ ...question, correct: true });
        } else {
            document.body.style.backgroundColor = "blue"; // 不正解
            lives--;
            livesElement.textContent = `ライフ: ${lives}`;
            reviewList.push({ ...question, correct: false });
        }

        setTimeout(() => {
            document.body.style.backgroundColor = "#f4f4f9"; // 背景リセット
        }, 300);

        inputElement.value = "";
        currentQuestionIndex++;

        if (lives <= 0) {
            clearInterval(timer);
            switchToGameOverScreen();
        } else {
            showNextQuestion();
        }
    }
});

// ゲームオーバー画面に移行
function switchToGameOverScreen() {
    gameScreen.style.display = "none";
    gameOverScreen.style.display = "block";
    finalScoreElement.textContent = `スコア: ${score}`;
    generateReviewList(reviewListGameOver);
    gameOverScreen.appendChild(reviewListGameOver);
}

// ゲームクリア画面に移行
function switchToGameClearScreen() {
    gameScreen.style.display = "none";
    gameClearScreen.style.display = "block";
    finalScoreClearElement.textContent = `スコア: ${score}`;
    generateReviewList(reviewListGameClear);
    gameClearScreen.appendChild(reviewListGameClear);
}

// レビューリストの生成
function generateReviewList(container) {
    container.innerHTML = "<h3>レビュー</h3>";
    reviewList.forEach(item => {
        const p = document.createElement("p");
        p.textContent = `${item.japanese} - ${item.english}`;
        p.style.color = item.correct ? "red" : "blue"; // 正解なら赤、不正解なら青
        container.appendChild(p);
    });
}

// ホームに戻るボタンの処理
returnHomeButton.addEventListener("click", resetToHomeScreen);
returnHomeButtonClear.addEventListener("click", resetToHomeScreen);

function resetToHomeScreen() {
    gameOverScreen.style.display = "none";
    gameClearScreen.style.display = "none";
    homeScreen.style.display = "block";
    resetGameState();
}

// タイマーの開始
function startTimer() {
    timer = setInterval(() => {
        timeLeft--;
        timerElement.textContent = `残り時間: ${timeLeft}秒`;

        if (timeLeft <= 0) {
            clearInterval(timer);
            switchToGameOverScreen();
        }
    }, 1000);
}

