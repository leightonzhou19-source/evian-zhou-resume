/* Language choices apply to the board and to content inserted into the modal. */
(() => {
  const entries = [
    ['RESUME','简历','RESUME'],
    ['WHERE IDEAS MEET NEW BEGINNINGS.','让想法遇见新的开始。','WHERE IDEAS MEET NEW BEGINNINGS.'],
    ['WHY NOT MODE','探索模式','WHY NOT MODE'],
    ['CURIOSITY ACTIVE','保持好奇','CURIOSITY ACTIVE'],
    ['* BOARD LEGEND','* 洞洞板目录','* BOARD LEGEND'],
    ['Clear File','透明档案','Clear File'],['Experience','成长履历','Experience'],
    ['Key Tag','钥匙牌','Key Tag'],['About','关于我','About'],
    ['Black Badge','黑色徽章','Black Badge'],['Skills','技能','Skills'],
    ['ID Card','证件卡','ID Card'],['Works','作品','Works'],
    ['Air Mail Card','航空信封','Air Mail Card'],['Contact','联系','Contact'],
    ['* OBJECT INTERFACE','* 交互提示','* OBJECT INTERFACE'],
    ['↗ Hover for details','↗ 悬停查看细节','↗ Hover for details'],
    ['◉ Click to unfold','◉ 点击展开','◉ Click to unfold'],
    ['IDEAS / OBJECTS','想法 / 物件','IDEAS / OBJECTS'],
    ['STORIES &','故事与','STORIES &'],
    ['IMAGE SYSTEMS.','视觉系统。','IMAGE SYSTEMS.'],
    ['CONNECT & EXPLORE','连接与探索','CONNECT & EXPLORE'],
    ['Replace with your story.','从这里开始你的故事。','Replace with your story.'],
    ['EXPERIENCE','成长履历','EXPERIENCE'],['成长履历','成长履历','Career Journey'],
    ['7 years in local life.','7 年本地生活经验。','7 years in local life.'],
    ['1 year in AI creative','1 年 AI 创意','1 year in AI creative'],
    ['operations.','运营经验。','operations.'],
    ['AI BUILDER','AI 创作者','AI BUILDER'],
    ['字节跳动','字节跳动','ByteDance'],['美团','美团','Meituan'],
    ['阿里巴巴本地生活','阿里巴巴本地生活','Alibaba'],
    ['2026.07 — NOW','2026.07 — 至今','2026.07 — NOW'],
    ['ABOUT ME','关于我','ABOUT ME'],['个人简介','个人简介','About Me'],
    ['04 SKILLS','04 技能','04 SKILLS'],['技能标签','技能标签','Skills'],
    ['剪映','剪映','CapCut'],
    ['日语 N2','日语 N2','Japanese N2'],['从0到1','从 0 到 1','0 to 1'],
    ['EXPLORE MORE ↗','查看更多 ↗','EXPLORE MORE ↗'],
    ['03 PERSONAL WORKS','03 个人作品','03 PERSONAL WORKS'],
    ['个人作品','个人作品','Personal Works'],['作品','作品','WORKS'],['FILE','档案','FILE'],
    ['PROJECT FILE','项目档案','PROJECT FILE'],
    ['Personal works','个人作品','Personal works'],['创意项目','创意项目','Creative projects'],
    ['VIEW WORKS','查看作品','VIEW WORKS'],
    ['CONTACT','联系方式','CONTACT'],['联系方式','联系方式','Contact'],
    ['POST','邮票','POST'],['↗   微信 esperanza19','↗   微信 esperanza19','↗   WeChat esperanza19'],
    ['↗   手机 13585963216','↗   手机 13585963216','↗   Phone 13585963216'],
    ['↺ REPLAY','↺ 重播','↺ REPLAY'],
    ['HELLO, I AM','你好，我是','HELLO, I AM'],['周艺芸','周艺芸','EVIAN'],
    ['EVIAN ZHOU.','EVIAN ZHOU.','ZHOU.'],
    ['7 年本地生活头部大厂运营，1 年 AI 修图 B 轮初创公司的创意运营。很高兴认识你。','7 年本地生活头部大厂运营，1 年 AI 修图 B 轮初创公司的创意运营。很高兴认识你。','7 years in operations at leading local services platforms, followed by 1 year in creative operations at a Series B AI photo editing startup. Nice to meet you.'],
    ['YEARS','年','YEARS'],['YEAR','年','YEAR'],
    ['本地生活头部大厂·增长策略/GTM','本地生活头部大厂·增长策略/GTM','Leading local services platforms · Growth Strategy / GTM'],
    ['AI 修图 B 轮初创 · 创意运营','AI 修图 B 轮初创 · 创意运营','Series B AI photo editing startup · Creative Operations'],
    ['很高兴认识你。','很高兴认识你。','Nice to meet you.'],['Nice to meet you.','很高兴认识你。','Nice to meet you.'],
    ['02 EXPERIENCE / 成长履历','02 成长履历','02 EXPERIENCE / CAREER JOURNEY'],
    ['01 ABOUT ME / 个人简介','01 个人简介','01 ABOUT ME'],
    ['03 PERSONAL WORKS / 个人作品','03 个人作品','03 PERSONAL WORKS'],
    ['04 SKILLS / 技能标签','04 技能标签','04 SKILLS'],
    ['05 CONTACT / 联系方式','05 联系方式','05 CONTACT'],
    ['02 EXPERIENCE / AI BUILDER / 创作实践','02 成长履历 / AI 创作实践','02 EXPERIENCE / AI BUILDER'],
    ['06 AI BUILDER / 创作实践','06 AI 创作实践','06 AI BUILDER'],
    ['SKILLS / 技能标签','技能标签','SKILLS'],['向右滑动浏览全部技能','向右滑动浏览全部技能','Swipe right to see all skills'],
    ['PERSONAL WORKS.','个人作品。','PERSONAL WORKS.'],
    ['点击书脊查看个人作品','点击书脊查看个人作品','Click a spine to view a work'],
    ['小红书账号','小红书账号','Xiaohongshu Account'],
    ['努力的花子 / 5048108930','努力的花子 / 5048108930','Nu Li De Hua Zi / 5048108930'],
    ['访问“努力的花子”小红书主页 ↗','访问“努力的花子”小红书主页 ↗','Visit my Xiaohongshu profile ↗'],
    ['AR作品','AR作品','AR Work'],
    ['AR / PROJECT 03','AR / 项目 03','AR / PROJECT 03'],
    ['查看 AR作品','查看 AR作品','View AR work'],
    ['AR作品视频','AR作品视频','AR work video'],
    ['EVIAN ZHOU / CAREER','周艺芸 / 成长履历','EVIAN ZHOU / CAREER'],
    ['EXPERIENCE.','成长履历。','EXPERIENCE.'],
    ['06 CHAPTERS','06 段履历','06 CHAPTERS'],
    ['2015 — NOW','2015 — 至今','2015 — NOW'],
    ['AI / NOW','AI / 至今','AI / NOW'],
    ['2026.07 — 至今','2026.07 — 至今','2026.07 — NOW'],
    ['AIGC 漫剧、游戏与小工具的个人创作实践。','AIGC 漫剧、游戏与小工具的个人创作实践。','Independent AIGC drama, game and mini tool projects.'],
    ['查看 AI 创作项目 ↗','查看 AI 创作项目 ↗','Explore AI projects ↗'],
    ['产品运营专家','产品运营专家','Product Operations Specialist'],
    ['日用超市行业产品解决方案、GTM 规划与能力迭代。','日用超市行业产品解决方案、GTM 规划与能力迭代。','Product solutions, GTM planning and capability development for grocery and convenience retail.'],
    ['查看完整经历 ↗','查看完整经历 ↗','View full experience ↗'],
    ['行业运营专家','行业运营专家','Industry Operations Specialist'],
    ['零售行业 O2O 解决方案、头部客户引入与品牌增长。','零售行业 O2O 解决方案、头部客户引入与品牌增长。','Retail O2O solutions, key account acquisition and brand growth.'],
    ['负责美妆、潮玩、日百行业，引入头部零售商和新锐品牌，实现年度 GTV 增长 1500 万。','负责美妆、潮玩、日百行业，引入头部零售商和新锐品牌，实现年度 GTV 增长 1500 万。','Led beauty, collectibles and daily goods; brought in leading retailers and emerging brands, adding RMB 15 million in annual GTV.'],
    ['运营专家','运营专家','Operations Specialist'],
    ['运营专家 · 饿了么跑腿事业部','运营专家 · 饿了么跑腿事业部','Operations Specialist · Ele.me Errand Service'],
    ['上海卫莎网络 · AI 制图产品','上海卫莎网络 · AI 制图产品','Versa · AI Imaging App'],
    ['用户增长、新服务能力建设与场景运营。','用户增长、新服务能力建设与场景运营。','User growth, new service development and scenario operations.'],
    ['从 0 到 1 搭建跑腿 2B 定价体系并拓展 2C 场景，日单量从 1 万单突破至 10 万单。','从 0 到 1 搭建跑腿 2B 定价体系并拓展 2C 场景，日单量从 1 万单突破至 10 万单。','Built the errand service B2B pricing system from scratch and expanded B2C use cases, growing daily orders from 10,000 to over 100,000.'],
    ['会计','会计','Accountant'],
    ['零售门店收入、费用、发票与资产管理。','零售门店收入、费用、发票与资产管理。','Retail store revenue, expense, invoice and asset management.'],
    ['运营经理','运营经理','Operations Manager'],
    ['AI 制图产品的社区运营、创意内容与 IP 合作。','AI 制图产品的社区运营、创意内容与 IP 合作。','Community operations, creative content and IP partnerships for an AI imaging app.'],
    ['EDUCATION / 教育背景','教育背景','EDUCATION'],
    ['上海立信会计学院','上海立信会计学院','Shanghai Lixin University of Accounting and Finance'],
    ['会计学学士','会计学学士','Bachelor of Accounting'],
    ['← 返回成长履历','← 返回成长履历','← Back to Experience'],
    ['HIGHLIGHTS / 行业履历与成果','亮点 / 行业履历与成果','HIGHLIGHTS / INDUSTRY & RESULTS'],
    ['HIGHLIGHTS / 主要成就','亮点 / 主要成就','HIGHLIGHTS / KEY ACHIEVEMENTS'],
    ['WORK / 工作内容','工作内容','WORK / RESPONSIBILITIES'],
    ['创作实践','创作实践','Creative Projects'],
    ['AI BUILDER.','AI 创作者。','AI BUILDER.'],
    ['围绕一个IP的衍生创作，2部AI漫剧，2款游戏。','围绕一个IP的衍生创作，2部AI漫剧，2款游戏。','Derivative creations around one IP: 2 AI animated dramas and 2 games.'],
    ['AIGC 漫剧 01','AIGC 漫剧 01','AIGC Drama 01'],['AIGC 漫剧 02','AIGC 漫剧 02','AIGC Drama 02'],
    ['在 B 站观看 ↗','在 B 站观看 ↗','Watch on Bilibili ↗'],
    ['从零开始的异世界生活像素RPG游戏','从零开始的异世界生活像素RPG游戏','Re:Zero Pixel RPG Game'],
    ['发布48小时','发布48小时','48 hours after release'],['7058 浏览','7058 浏览','7,058 views'],
    ['912 点赞','912 点赞','912 likes'],['60 分享','60 分享','60 shares'],
    ['查看小红书笔记 ↗','查看小红书笔记 ↗','View on Xiaohongshu ↗'],
    ['小工具小游戏：6154快跑','小工具小游戏：6154快跑','Mini Game & Tool: 6154 Run'],
    ['9150 曝光','9150 曝光','9,150 impressions'],['593 点赞','593 点赞','593 likes'],
    ['413 分享','413 分享','413 shares'],['1175 人使用','1175 人使用','1,175 users'],
    ["LET'S TALK.",'欢迎联系。',"LET'S TALK."],
    ['很高兴认识你，欢迎联系与交流。','很高兴认识你，欢迎联系与交流。','Nice to meet you. Feel free to get in touch.'],
    ['WECHAT / 微信','微信','WECHAT'],['PHONE / 手机','手机','PHONE'],
    ['站点说明与目录','站点说明与目录','Site information and directory'],
    ['交互式个人简历洞洞板','交互式个人简历洞洞板','Interactive résumé pegboard'],
    ['打开成长履历','打开成长履历','Open experience'],['打开关于我','打开关于我','Open about me'],
    ['打开技能标签','打开技能标签','Open skills'],['打开个人作品','打开个人作品','Open personal works'],
    ['打开联系方式','打开联系方式','Open contact'],['重播入场动画','重播入场动画','Replay entrance animation'],
    ['快捷操作','快捷操作','Quick actions'],['关于','关于','About'],['联系','联系','Contact'],
    ['关闭弹窗','关闭弹窗','Close dialog'],['语言切换','语言切换','Language selection'],
    ['周艺芸在活动现场的照片','周艺芸在活动现场的照片','Photo of Evian Zhou at an event'],
    ['横向浏览技能','横向浏览技能','Browse skills horizontally'],
    ['小红书账号主页截图','小红书账号主页截图','Xiaohongshu profile screenshot'],
    ['小红书账号作品截图','小红书账号作品截图','Xiaohongshu posts screenshot'],
    ['在 B 站观看 AIGC 漫剧 01','在 B 站观看 AIGC 漫剧 01','Watch AIGC Drama 01 on Bilibili'],
    ['AIGC 漫剧 01 封面','AIGC 漫剧 01 封面','AIGC Drama 01 cover'],
    ['在 B 站观看 AIGC 漫剧 02','在 B 站观看 AIGC 漫剧 02','Watch AIGC Drama 02 on Bilibili'],
    ['AIGC 漫剧 02 封面','AIGC 漫剧 02 封面','AIGC Drama 02 cover'],
    ['在小红书查看从零开始的异世界生活像素RPG游戏','在小红书查看从零开始的异世界生活像素RPG游戏','View Re:Zero Pixel RPG Game on Xiaohongshu'],
    ['从零开始的异世界生活像素RPG游戏场景预览','从零开始的异世界生活像素RPG游戏场景预览','Re:Zero Pixel RPG game preview'],
    ['在小红书查看 小工具小游戏：6154快跑','在小红书查看 小工具小游戏：6154快跑','View 6154 Run on Xiaohongshu'],
    ['小工具小游戏：6154快跑封面','小工具小游戏：6154快跑封面','6154 Run cover'],
    ['教育背景','教育背景','Education'],['行业履历与成果','行业履历与成果','Industry Background and Results'],
    ['主要成就','主要成就','Key Achievements'],
    ['从产品视角设计日用超市行业解决方案。','从产品视角设计日用超市行业解决方案。','Designed grocery industry solutions from a product perspective.'],
    ['产品解决方案','产品解决方案','Product Solutions'],
    ['结合业务规划完成 H2 行业方案，明确超市、便利店、酒水的关键能力与策略打法，协同上下游推动行业能力建设。','结合业务规划完成 H2 行业方案，明确超市、便利店、酒水的关键能力与策略打法，协同上下游推动行业能力建设。','Built H2 solutions for supermarkets, convenience stores and beverage retail, defining key capabilities and strategies with cross-functional teams.'],
    ['产品 GTM 规划','产品 GTM 规划','Product GTM Planning'],
    ['围绕消费者到店和客单提升，将次卡、惠享卡等能力与细分行业的商品、场景、流量分发机制结合，设计 GTM 方案。','围绕消费者到店和客单提升，将次卡、惠享卡等能力与细分行业的商品、场景、流量分发机制结合，设计 GTM 方案。','Combined membership passes and benefit cards with products, consumption scenarios and traffic distribution to drive store visits and order value.'],
    ['产品能力迭代','产品能力迭代','Product Iteration'],
    ['通过消费者和商家调研，明确产品定位及后续迭代方向。','通过消费者和商家调研，明确产品定位及后续迭代方向。','Used consumer and merchant research to define product positioning and future iterations.'],
    ['负责零售行业客户 O2O 解决方案，并参与到餐业务探索。','负责零售行业客户 O2O 解决方案，并参与到餐业务探索。','Led O2O solutions for retail clients and explored new dining business models.'],
    ['行业履历','行业履历','Industry Experience'],
    ['洞察化妆品、日百潮玩等行业机会，协同销售从 0 到 1 引入头部客户，打造明星爆品，并沉淀核心商品画像与关键能力。','洞察化妆品、日百潮玩等行业机会，协同销售从 0 到 1 引入头部客户，打造明星爆品，并沉淀核心商品画像与关键能力。','Identified opportunities in beauty, daily goods and collectibles; acquired key accounts from zero with sales and developed breakout products and reusable product profiles.'],
    ['零售成果','零售成果','Retail Results'],
    ['负责美妆、日百、3C、运动户外等行业的交易规模与广告收入增长，年度完成率超时间进度；为名创优品、屈臣氏、橘朵等定制增长方案。','负责美妆、日百、3C、运动户外等行业的交易规模与广告收入增长，年度完成率超时间进度；为名创优品、屈臣氏、橘朵等定制增长方案。','Grew transaction volume and ad revenue across beauty, daily goods, electronics and sports; created growth plans for MINISO, Watsons and Judydoll.'],
    ['年度 GTV 增长','年度 GTV 增长','Annual GTV Growth'],
    ['到餐成果','到餐成果','Dining Results'],
    ['帮助呷哺呷哺、绿茶等头部客户增长会员，并通过团购配送为塔斯汀、南京大牌档等品牌带来平台新增量。','帮助呷哺呷哺、绿茶等头部客户增长会员，并通过团购配送为塔斯汀、南京大牌档等品牌带来平台新增量。','Helped leading restaurant chains grow membership and brought incremental platform sales to brands through group-buying delivery.'],
    ['个人荣誉','个人荣誉','Recognition'],
    ['2024 年底获“事业部个人之星”；绩效评定为“符合预期 + 高潜”。','2024 年底获“事业部个人之星”；绩效评定为“符合预期 + 高潜”。','Received the division’s Individual Star award in 2024 and a high-potential performance rating.'],
    ['头客谈判与案例打造','头客谈判与案例打造','Key Account Negotiation'],
    ['研究并分层各行业商户，整合平台资源与品牌目标设计合作方案，基于商户 ROI 和业务目标搭建健康增长模型。','研究并分层各行业商户，整合平台资源与品牌目标设计合作方案，基于商户 ROI 和业务目标搭建健康增长模型。','Segmented merchants and designed partnerships around platform resources, brand goals, merchant ROI and sustainable growth.'],
    ['渠道爆品建设','渠道爆品建设','Channel Hero Products'],
    ['结合行业特性设计组品策略与渠道玩法，帮助多个连锁品牌快速冷启并稳定实现日均千单。','结合行业特性设计组品策略与渠道玩法，帮助多个连锁品牌快速冷启并稳定实现日均千单。','Designed assortment and channel strategies that helped several chains launch quickly and sustain over 1,000 daily orders.'],
    ['品牌交易与会员增长','品牌交易与会员增长','Brand Sales and Membership'],
    ['围绕到店客流、爆品和客单提升设计增长方案；利用人群画像、异业场景与平台会员能力挖掘新客。','围绕到店客流、爆品和客单提升设计增长方案；利用人群画像、异业场景与平台会员能力挖掘新客。','Built plans to grow store visits, hero products and order value; acquired customers through audience insights, partnerships and platform membership.'],
    ['跨界营销','跨界营销','Cross-Industry Marketing'],
    ['落地品牌 × 商场或校园、品牌 × 零售商 × 平台的合作模型，兼顾交易增长与合作方 ROI，跑通 MVP。','落地品牌 × 商场或校园、品牌 × 零售商 × 平台的合作模型，兼顾交易增长与合作方 ROI，跑通 MVP。','Launched brand–mall, brand–campus and three-party partnership pilots with attention to sales and partner ROI.'],
    ['产品能力建设','产品能力建设','Product Capability Development'],
    ['协同产品团队识别头部客户的共性需求，完善门店与货架、关键营销能力及搜索主路径。','协同产品团队识别头部客户的共性需求，完善门店与货架、关键营销能力及搜索主路径。','Worked with product teams to turn key account needs into store, merchandising, marketing and search improvements.'],
    ['到餐业务探索','到餐业务探索','Dining Business Exploration'],
    ['探索团购配送模式，完成商家分层、供给选品、营销玩法与会员增长策略，沉淀头部客户案例。','探索团购配送模式，完成商家分层、供给选品、营销玩法与会员增长策略，沉淀头部客户案例。','Explored group-buying delivery, merchant segmentation, assortments, marketing and membership strategies.'],
    ['面向千万用户体量的小商家和 C 端高价值客户，负责全链路运营。','面向千万用户体量的小商家和 C 端高价值客户，负责全链路运营。','Owned end-to-end operations for small merchants and high-value consumers at scale.'],
    ['跑腿业务增长','跑腿业务增长','Errand Service Growth'],
    ['增长与新服务','增长与新服务','Growth and New Services'],
    ['从 0 到 1 搭建用户增长模型与新服务能力，拓展低频业务中的高频交易场景，结合内外部资源推动新场景增长。','从 0 到 1 搭建用户增长模型与新服务能力，拓展低频业务中的高频交易场景，结合内外部资源推动新场景增长。','Built growth models and new service capabilities from zero, creating higher-frequency use cases within a low-frequency business.'],
    ['经营结果','经营结果','Business Results'],
    ['在业务同比增长 45% 的同时，将补贴支出同比降低 75%。连续两年年度绩效评定为 3.5+、3.75，并完成晋升。','在业务同比增长 45% 的同时，将补贴支出同比降低 75%。连续两年年度绩效评定为 3.5+、3.75，并完成晋升。','Grew business 45% year over year while reducing subsidy spend 75%; earned strong annual ratings and a promotion.'],
    ['快递上门项目','快递上门项目','Doorstep Parcel Service'],
    ['作为项目负责人推出跑腿快递上门服务，垂类场景从 0 增长到日五位数单量，月复购频次升至业务第二。','作为项目负责人推出跑腿快递上门服务，垂类场景从 0 增长到日五位数单量，月复购频次升至业务第二。','Led the launch of doorstep parcel pickup, growing the vertical to five-digit daily orders and the business’s second-highest monthly repurchase frequency.'],
    ['流量运营','流量运营','Traffic Operations'],
    ['负责频道 DAU 提升，拓展支付宝、菜鸟、微信等内外部流量入口，并推动异业合作。','负责频道 DAU 提升，拓展支付宝、菜鸟、微信等内外部流量入口，并推动异业合作。','Grew channel DAU through Alipay, Cainiao, WeChat and cross-industry traffic partnerships.'],
    ['用户增长与研究','用户增长与研究','User Growth and Research'],
    ['围绕生命周期和客群特征设计精细化增长实验，覆盖新客灌入到老客召回；通过问卷、走访和圆桌会议还原用户旅程。','围绕生命周期和客群特征设计精细化增长实验，覆盖新客灌入到老客召回；通过问卷、走访和圆桌会议还原用户旅程。','Designed lifecycle experiments from acquisition to reactivation, using surveys, visits and roundtables to understand user journeys.'],
    ['整合营销','整合营销','Integrated Marketing'],
    ['规划全年营销日历与节日冲单策略，整合资源推动活动落地，并沉淀常态化增长方法。','规划全年营销日历与节日冲单策略，整合资源推动活动落地，并沉淀常态化增长方法。','Planned annual campaigns and holiday pushes, coordinating resources and repeatable growth practices.'],
    ['场景运营','场景运营','Scenario Operations'],
    ['洞察客户需求，探索 2C 与 2B 业务场景，围绕重点场景从 0 到 1 设计增长方案。','洞察客户需求，探索 2C 与 2B 业务场景，围绕重点场景从 0 到 1 设计增长方案。','Explored B2C and B2B use cases and designed growth plans for priority scenarios from zero.'],
    ['补贴提效','补贴提效','Subsidy Efficiency'],
    ['制定月度和年度营销预算，结合常态与节日方案持续提升补贴效率。','制定月度和年度营销预算，结合常态与节日方案持续提升补贴效率。','Managed monthly and annual marketing budgets and improved subsidy efficiency.'],
    ['产品运营','产品运营','Product Operations'],
    ['推动基础能力、营销功能与人群标签建设，分析关键转化路径并优化产品体验。','推动基础能力、营销功能与人群标签建设，分析关键转化路径并优化产品体验。','Improved core features, marketing tools, audience tags and conversion flows with product teams.'],
    ['新服务探索','新服务探索','New Service Exploration'],
    ['从 0 到 1 推动增值服务上线，搭建并验证新业务模式的商业逻辑。','从 0 到 1 推动增值服务上线，搭建并验证新业务模式的商业逻辑。','Launched value-added services from zero and validated a new business model.'],
    ['负责零售门店财务工作，积累门店经营流程与财务指标基础。','负责零售门店财务工作，积累门店经营流程与财务指标基础。','Managed retail store finance and developed a foundation in store operations and financial metrics.'],
    ['门店财务','门店财务','Store Finance'],
    ['负责门店收入与费用审核，以及发票和资产管理；在工作中积累零售门店经营流程与财务指标基础。','负责门店收入与费用审核，以及发票和资产管理；在工作中积累零售门店经营流程与财务指标基础。','Reviewed store revenue and expenses and managed invoices and assets, building a solid grasp of retail operations and financial metrics.'],
    ['负责 AI 制图产品的社区、内容和创意合作。','负责 AI 制图产品的社区、内容和创意合作。','Led community, content and creative partnerships for an AI imaging app.'],
    ['个人成长','个人成长','Career Growth'],
    ['绩效评定 A；一年内晋升经理并带领 3 人团队。','绩效评定 A；一年内晋升经理并带领 3 人团队。','Earned an A performance rating; promoted to manager within a year and led a team of three.'],
    ['创意与合作','创意与合作','Creative Partnerships'],
    ['通过创意及内容创作助力公司获得 B 站融资；发起《蜘蛛侠：英雄远征》、荷兰梵高博物馆等 IP 跨界合作，并将产品引入上海高校，获得人民日报等媒体报道。','通过创意及内容创作助力公司获得 B 站融资；发起《蜘蛛侠：英雄远征》、荷兰梵高博物馆等 IP 跨界合作，并将产品引入上海高校，获得人民日报等媒体报道。','Supported the company’s Bilibili financing through creative content; launched IP partnerships including Spider-Man: Far From Home and the Van Gogh Museum, plus campus promotions.'],
    ['产品成绩','产品成绩','Product Recognition'],
    ['任职期间，产品入选 2018—2019 年 Apple 年度精选软件。','任职期间，产品入选 2018—2019 年 Apple 年度精选软件。','The app was featured in Apple’s annual selections during 2018–2019.'],
    ['社区创作','社区创作','Community Creation'],
    ['发现用户需求，通过活动和话题引导 UGC 创作，引入、维护并激活 KOL。','发现用户需求，通过活动和话题引导 UGC 创作，引入、维护并激活 KOL。','Used activities and topics to encourage UGC and recruited, engaged and retained creators.'],
    ['内容策略','内容策略','Content Strategy'],
    ['结合产品特点与用户偏好更新节日营销和社区运营策略，通过特色话题与活动培养社区创作文化。','结合产品特点与用户偏好更新节日营销和社区运营策略，通过特色话题与活动培养社区创作文化。','Refined holiday marketing and community strategy around product strengths and user preferences.'],
    ['数据与留存','数据与留存','Data and Retention'],
    ['分析社区数据，输出运营策略，建设积分商城和权益中心，提升新老用户留存。','分析社区数据，输出运营策略，建设积分商城和权益中心，提升新老用户留存。','Used community data to shape operations and loyalty features that improved retention.'],
    ['产品协作','产品协作','Product Collaboration'],
    ['结合用户反馈和运营数据，跨部门推动产品功能迭代与体验优化。','结合用户反馈和运营数据，跨部门推动产品功能迭代与体验优化。','Worked across teams to improve features and experience using user feedback and operations data.']
  ];
  const translations = new Map(entries.map(([original, zh, en]) => [original, {zh, en}]));
  const originals = new WeakMap();
  const attributeOriginals = new WeakMap();
  const attributes = ['aria-label', 'title', 'alt'];
  let language = 'zh';
  try { language = localStorage.getItem('evian-language') === 'en' ? 'en' : 'zh'; } catch (_) {}
  function translated(value) {
    const match = value.match(/^(\s*)([\s\S]*?)(\s*)$/);
    const key = match[2];
    const item = translations.get(key);
    return item ? match[1] + item[language] + match[3] : value;
  }
  function translate(root) {
    if (root.nodeType === Node.TEXT_NODE) {
      if (!originals.has(root)) originals.set(root, root.nodeValue);
      const next = translated(originals.get(root));
      if (root.nodeValue !== next) root.nodeValue = next;
      return;
    }
    if (root.nodeType !== Node.ELEMENT_NODE && root.nodeType !== Node.DOCUMENT_NODE) return;
    if (root.nodeType === Node.ELEMENT_NODE) {
      let saved = attributeOriginals.get(root);
      if (!saved) { saved = {}; attributeOriginals.set(root, saved); }
      for (const attr of attributes) {
        if (!root.hasAttribute(attr)) continue;
        if (!(attr in saved)) saved[attr] = root.getAttribute(attr);
        const next = translated(saved[attr]);
        if (root.getAttribute(attr) !== next) root.setAttribute(attr, next);
      }
    }
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT | NodeFilter.SHOW_ELEMENT);
    while (walker.nextNode()) {
      const node = walker.currentNode;
      if (node.nodeType === Node.TEXT_NODE) translate(node);
      else if (node.nodeType === Node.ELEMENT_NODE) {
        let saved = attributeOriginals.get(node);
        if (!saved) { saved = {}; attributeOriginals.set(node, saved); }
        for (const attr of attributes) {
          if (!node.hasAttribute(attr)) continue;
          if (!(attr in saved)) saved[attr] = node.getAttribute(attr);
          const next = translated(saved[attr]);
          if (node.getAttribute(attr) !== next) node.setAttribute(attr, next);
        }
      }
    }
  }
  function updateLanguage() {
    document.documentElement.lang = language === 'en' ? 'en' : 'zh-CN';
    document.title = language === 'en' ? 'Evian Zhou · Resume' : '周艺芸 Evian Zhou · 个人简历';
    document.querySelector('meta[name="description"]').content = language === 'en'
      ? 'Interactive résumé of Evian Zhou, with local services operations and AI creative work.'
      : '周艺芸 Evian Zhou 的交互式个人简历。7 年本地生活运营与 1 年 AI 修图创意运营经历。';
    document.querySelectorAll('[data-language]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.language === language)));
    translate(document.body);
  }
  document.querySelectorAll('[data-language]').forEach(button => button.addEventListener('click', () => {
    language = button.dataset.language;
    try { localStorage.setItem('evian-language', language); } catch (_) {}
    updateLanguage();
  }));
  new MutationObserver(records => {
    for (const record of records) {
      for (const node of record.addedNodes) translate(node);
    }
  }).observe(document.getElementById('modalContent'), {childList: true, subtree: true});
  updateLanguage();
})();
