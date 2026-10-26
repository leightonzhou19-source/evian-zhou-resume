const shell = document.getElementById('siteShell');
const layer = document.getElementById('modalLayer');
const content = document.getElementById('modalContent');
const modalWindow = layer.querySelector('.modal-window');
let priorFocus = null;

const titleBar = (number, title, chinese) => `<div class="modal-head"><span>${number} ${title} / ${chinese}</span><span>EVIAN ZHOU © 2026</span></div>`;

const views = {
  about: `<div class="about-modal"><div class="modal-body">${titleBar('01','ABOUT ME','个人简介')}<div class="about-main"><div class="about-intro"><p class="modal-kicker">HELLO, I AM</p><h2 id="modalTitle">周艺芸<span class="english-name">EVIAN ZHOU.</span></h2><p class="modal-copy">7 年本地生活头部大厂运营，1 年 AI 修图 B 轮初创公司的创意运营。很高兴认识你。</p></div><img class="about-photo" src="./assets/evian-photo.png" alt="周艺芸在活动现场的照片"></div></div><div class="about-yellow"><div class="experience-list"><div class="experience-item"><strong>07</strong><span>YEARS<br>本地生活头部大厂·增长策略/GTM</span></div><div class="experience-item"><strong>01</strong><span>YEAR<br>AI 修图 B 轮初创 · 创意运营</span></div><p><span lang="zh-CN">很高兴认识你。</span><span lang="en">Nice to meet you.</span></p></div></div></div>`,
  skills: `<div class="skills-modal">${titleBar('04','SKILLS','技能标签')}<h2 id="modalTitle" style="font-size:42px;text-align:center;margin:24px 0 0;letter-spacing:-.05em">SKILLS / 技能标签</h2><div class="skills-track" aria-label="横向浏览技能"><div class="skill-card"><div class="skill-oval" style="--angle:-5deg"><span>codex</span></div></div><div class="skill-card"><div class="skill-oval" style="--angle:4deg"><span>SQL</span></div></div><div class="skill-card"><div class="skill-oval" style="--angle:-2deg"><span>日语<br>N2</span></div></div><div class="skill-card"><div class="skill-oval" style="--angle:5deg"><span>flova</span></div></div><div class="skill-card"><div class="skill-oval" style="--angle:-3deg"><span>剪映</span></div></div><div class="skill-card"><div class="skill-oval" style="--angle:-4deg"><span>从 0<br>到 1</span></div></div></div><p class="placeholder-note" style="text-align:center;margin:18px 0 0">向右滑动浏览全部技能</p></div>`,
  works: `<div class="works-modal">${titleBar('03','PERSONAL WORKS','个人作品')}<h2 id="modalTitle" style="font-size:44px;margin:22px 0 0;letter-spacing:-.06em">PERSONAL WORKS.</h2><p class="placeholder-note">点击书脊查看个人作品</p><div class="work-stack"><button type="button" class="work-slab rednote-slab is-active"><span class="slab-title">小红书账号</span><span class="slab-category">努力的花子 / 5048108930</span><span class="slab-art rednote-art"><img src="./assets/rednote-profile.jpg?v=20261025" alt="小红书账号主页截图" loading="lazy"><img src="./assets/rednote-posts.jpg" alt="小红书账号作品截图" loading="lazy"></span></button><button type="button" class="work-slab video-slab" aria-label="查看 AR作品"><span class="slab-title">AR作品</span><span class="slab-category">AR / PROJECT 03</span><span class="slab-art work-video-art"><video class="work-video-preview" src="./assets/selected-work-03.mp4?v=20261025" muted loop playsinline preload="metadata" aria-hidden="true"></video><span class="work-video-play" aria-hidden="true">▶</span></span></button></div><div class="work-video-player"><video src="./assets/selected-work-03.mp4?v=20261025" controls playsinline preload="metadata" aria-label="AR作品视频"></video></div><a class="rednote-work-link" href="https://www.xiaohongshu.com/user/profile/63dc85970000000026010849?xsec_token=ABDcop2MAhMzvJ_ZIEYyWceZ10rV72NqaMNQMYICxqdvk%3D&amp;xsec_source=pc_search" target="_blank" rel="noopener noreferrer">访问“努力的花子”小红书主页 ↗</a></div>`,
  profile: `<div class="experience-modal">${titleBar('02','EXPERIENCE','成长履历')}<div class="experience-intro"><div><p class="modal-kicker">EVIAN ZHOU / CAREER</p><h2 id="modalTitle">EXPERIENCE.</h2></div><span>06 CHAPTERS<br>2015 — NOW</span></div><div class="experience-grid"><button type="button" class="experience-card experience-feature experience-entry" data-experience="builder"><span class="experience-no">AI / NOW</span><span class="experience-date">2026.07 — 至今</span><h3>AI Builder</h3><p>AIGC 漫剧、游戏与小工具的个人创作实践。</p><span class="experience-feature-link">查看 AI 创作项目 ↗</span></button><button type="button" class="experience-card experience-entry" data-experience="bytedance"><span class="experience-no">01</span><span class="experience-date">2026.04 — 2026.07</span><h3>字节跳动</h3><strong>产品运营专家</strong><p>日用超市行业产品解决方案、GTM 规划与能力迭代。</p><span class="experience-open">查看完整经历 ↗</span></button><button type="button" class="experience-card experience-entry" data-experience="meituan"><span class="experience-no">02</span><span class="experience-date">2023.12 — 2026.01</span><h3>美团</h3><strong>行业运营专家</strong><p>零售行业 O2O 解决方案、头部客户引入与品牌增长。</p><p class="experience-achievement">负责美妆、潮玩、日百行业，引入头部零售商和新锐品牌，实现年度 GTV 增长 1500 万。</p><span class="experience-open">查看完整经历 ↗</span></button><button type="button" class="experience-card experience-entry" data-experience="alibaba"><span class="experience-no">03</span><span class="experience-date">2019.12 — 2023.08</span><h3>阿里巴巴本地生活</h3><strong>运营专家</strong><p>用户增长、新服务能力建设与场景运营。</p><p class="experience-achievement">从 0 到 1 搭建跑腿 2B 定价体系并拓展 2C 场景，日单量从 1 万单突破至 10 万单。</p><span class="experience-open">查看完整经历 ↗</span></button><button type="button" class="experience-card experience-entry" data-experience="versa"><span class="experience-no">04</span><span class="experience-date">2018.09 — 2019.12</span><h3>Versa</h3><strong>运营经理</strong><p>AI 制图产品的社区运营、创意内容与 IP 合作。</p><span class="experience-open">查看完整经历 ↗</span></button><button type="button" class="experience-card experience-entry" data-experience="dolce"><span class="experience-no">05</span><span class="experience-date">2015.07 — 2018.09</span><h3>Dolce &amp; Gabbana</h3><strong>会计</strong><p>零售门店收入、费用、发票与资产管理。</p><span class="experience-open">查看完整经历 ↗</span></button></div><section class="experience-education" aria-label="教育背景"><span class="experience-education-label">EDUCATION / 教育背景</span><div class="experience-education-body"><h3>上海立信会计学院</h3><div class="experience-education-meta"><strong>会计学学士</strong><span>2011.09 — 2015.06</span></div></div></section></div>`,
  builder: `<div class="builder-modal builder-empty">${titleBar('06','AI BUILDER','创作实践')}<div class="builder-head"><span class="modal-kicker">06 / AI BUILDER</span><h2 id="modalTitle">AI BUILDER.</h2></div><div class="builder-empty-space" aria-hidden="true"></div></div>`,
  builderProjects: `<div class="builder-modal">${titleBar('02','EXPERIENCE / AI BUILDER','创作实践')}<button type="button" class="builder-back" data-experience-back>← 返回成长履历</button><div class="builder-head"><span class="modal-kicker">2026.07 — NOW</span><h2 id="modalTitle">AI BUILDER.</h2><p>围绕一个IP的衍生创作，2部AI漫剧，2款游戏。</p></div><div class="builder-grid"><article class="builder-item"><span>01 / AIGC DRAMA</span><a class="builder-cover-link" href="https://www.bilibili.com/video/BV1HVaf6nEEn/" target="_blank" rel="noopener noreferrer" aria-label="在 B 站观看 AIGC 漫剧 01"><img class="builder-cover" src="./assets/aigc-drama-01.jpg" alt="AIGC 漫剧 01 封面" loading="lazy"></a><h3>AIGC 漫剧 01</h3><a class="builder-watch" href="https://www.bilibili.com/video/BV1HVaf6nEEn/" target="_blank" rel="noopener noreferrer">在 B 站观看 ↗</a></article><article class="builder-item"><span>02 / AIGC DRAMA</span><a class="builder-cover-link" href="https://www.bilibili.com/video/BV1aie86fE4C/" target="_blank" rel="noopener noreferrer" aria-label="在 B 站观看 AIGC 漫剧 02"><img class="builder-cover" src="./assets/aigc-drama-02.png" alt="AIGC 漫剧 02 封面" loading="lazy"></a><h3>AIGC 漫剧 02</h3><a class="builder-watch" href="https://www.bilibili.com/video/BV1aie86fE4C/" target="_blank" rel="noopener noreferrer">在 B 站观看 ↗</a></article><article class="builder-item"><span>03 / GAME</span><a class="builder-cover-link builder-game-link" href="https://www.xiaohongshu.com/explore/6ad36f31000000001b020ac4?xsec_token=ABh5T46_YXj2D8flfE8MHatWehDGZQBOEwcCjK8ky3KTU=&amp;xsec_source=pc_search&amp;source=web_explore_feed" target="_blank" rel="noopener noreferrer" aria-label="在小红书查看从零开始的异世界生活像素RPG游戏"><img class="builder-cover" src="./assets/ai-builder-game.png?v=20261020-game" alt="从零开始的异世界生活像素RPG游戏场景预览" loading="lazy"></a><h3>从零开始的异世界生活像素RPG游戏</h3><p class="builder-stats"><span>发布48小时</span><span>7058 浏览</span><span>912 点赞</span><span>60 分享</span></p><a class="builder-watch" href="https://www.xiaohongshu.com/explore/6ad36f31000000001b020ac4?xsec_token=ABh5T46_YXj2D8flfE8MHatWehDGZQBOEwcCjK8ky3KTU=&amp;xsec_source=pc_search&amp;source=web_explore_feed" target="_blank" rel="noopener noreferrer">查看小红书笔记 ↗</a></article><article class="builder-item"><span>04 / TOOL</span><a class="builder-cover-link builder-tool-link" href="https://www.xiaohongshu.com/explore/6ab20f86000000003003edda?xsec_token=AB-b_3XzaXdAoPisQV9yOCv0_IoOKbd0VOTFIn77-tRWU=&amp;xsec_source=pc_search" target="_blank" rel="noopener noreferrer" aria-label="在小红书查看 小工具小游戏：6154快跑"><img class="builder-cover" src="./assets/6154-run-tool.png" alt="小工具小游戏：6154快跑封面" loading="lazy"></a><h3>小工具小游戏：6154快跑</h3><p class="builder-stats"><span>9150 曝光</span><span>593 点赞</span><span>413 分享</span><span>1175 人使用</span></p><a class="builder-watch" href="https://www.xiaohongshu.com/explore/6ab20f86000000003003edda?xsec_token=AB-b_3XzaXdAoPisQV9yOCv0_IoOKbd0VOTFIn77-tRWU=&amp;xsec_source=pc_search" target="_blank" rel="noopener noreferrer">查看小红书笔记 ↗</a></article></div></div>`,
  contact: `<div class="contact-modal">${titleBar('05','CONTACT','联系方式')}<h2 id="modalTitle" style="font-size:48px;letter-spacing:-.06em;margin:27px 0 0">LET'S TALK.</h2><p class="modal-copy">很高兴认识你，欢迎联系与交流。</p><div class="contact-lines"><div><span>WECHAT / 微信</span><span>esperanza19</span></div><div><span>PHONE / 手机</span><a href="tel:13585963216">13585963216</a></div><div><span>GITHUB</span><a href="https://github.com/leightonzhou19-source" target="_blank" rel="noopener noreferrer">leightonzhou19-source ↗</a></div><div><span>BONJOUR</span><a href="https://bonjour.bio/mp84ct" target="_blank" rel="noopener noreferrer">bonjour.bio/mp84ct ↗</a></div></div></div>`
};

const experienceDetails = {
  bytedance: {
    number: '01', company: '字节跳动', companyEn: 'BYTEDANCE',
    role: '产品运营专家', date: '2026.04 — 2026.07',
    summary: '从产品视角设计日用超市行业解决方案。',
    highlights: [],
    duties: [
      ['产品解决方案', '结合业务规划完成 H2 行业方案，明确超市、便利店、酒水的关键能力与策略打法，协同上下游推动行业能力建设。'],
      ['产品 GTM 规划', '围绕消费者到店和客单提升，将次卡、惠享卡等能力与细分行业的商品、场景、流量分发机制结合，设计 GTM 方案。'],
      ['产品能力迭代', '通过消费者和商家调研，明确产品定位及后续迭代方向。']
    ]
  },
  meituan: {
    number: '02', company: '美团', companyEn: 'MEITUAN',
    role: '行业运营专家', date: '2023.12 — 2026.01',
    summary: '负责零售行业客户 O2O 解决方案，并参与到餐业务探索。',
    highlightLabel: '行业履历与成果',
    highlights: [
      ['行业履历', '洞察化妆品、日百潮玩等行业机会，协同销售从 0 到 1 引入头部客户，打造明星爆品，并沉淀核心商品画像与关键能力。'],
      ['零售成果', '负责美妆、日百、3C、运动户外等行业的交易规模与广告收入增长，年度完成率超时间进度；为名创优品、屈臣氏、橘朵等定制增长方案。'],
      ['年度 GTV 增长', '负责美妆、潮玩、日百行业，引入头部零售商和新锐品牌，实现年度 GTV 增长 1500 万。'],
      ['到餐成果', '帮助呷哺呷哺、绿茶等头部客户增长会员，并通过团购配送为塔斯汀、南京大牌档等品牌带来平台新增量。'],
      ['个人荣誉', '2024 年底获“事业部个人之星”；绩效评定为“符合预期 + 高潜”。']
    ],
    duties: [
      ['头客谈判与案例打造', '研究并分层各行业商户，整合平台资源与品牌目标设计合作方案，基于商户 ROI 和业务目标搭建健康增长模型。'],
      ['渠道爆品建设', '结合行业特性设计组品策略与渠道玩法，帮助多个连锁品牌快速冷启并稳定实现日均千单。'],
      ['品牌交易与会员增长', '围绕到店客流、爆品和客单提升设计增长方案；利用人群画像、异业场景与平台会员能力挖掘新客。'],
      ['跨界营销', '落地品牌 × 商场或校园、品牌 × 零售商 × 平台的合作模型，兼顾交易增长与合作方 ROI，跑通 MVP。'],
      ['产品能力建设', '协同产品团队识别头部客户的共性需求，完善门店与货架、关键营销能力及搜索主路径。'],
      ['到餐业务探索', '探索团购配送模式，完成商家分层、供给选品、营销玩法与会员增长策略，沉淀头部客户案例。']
    ]
  },
  alibaba: {
    number: '03', company: '阿里巴巴本地生活', companyEn: 'ALIBABA',
    role: '运营专家 · 饿了么跑腿事业部', date: '2019.12 — 2023.08',
    summary: '面向千万用户体量的小商家和 C 端高价值客户，负责全链路运营。',
    highlightLabel: '主要成就',
    highlights: [
      ['跑腿业务增长', '从 0 到 1 搭建跑腿 2B 定价体系并拓展 2C 场景，日单量从 1 万单突破至 10 万单。'],
      ['增长与新服务', '从 0 到 1 搭建用户增长模型与新服务能力，拓展低频业务中的高频交易场景，结合内外部资源推动新场景增长。'],
      ['经营结果', '在业务同比增长 45% 的同时，将补贴支出同比降低 75%。连续两年年度绩效评定为 3.5+、3.75，并完成晋升。'],
      ['快递上门项目', '作为项目负责人推出跑腿快递上门服务，垂类场景从 0 增长到日五位数单量，月复购频次升至业务第二。']
    ],
    duties: [
      ['流量运营', '负责频道 DAU 提升，拓展支付宝、菜鸟、微信等内外部流量入口，并推动异业合作。'],
      ['用户增长与研究', '围绕生命周期和客群特征设计精细化增长实验，覆盖新客灌入到老客召回；通过问卷、走访和圆桌会议还原用户旅程。'],
      ['整合营销', '规划全年营销日历与节日冲单策略，整合资源推动活动落地，并沉淀常态化增长方法。'],
      ['场景运营', '洞察客户需求，探索 2C 与 2B 业务场景，围绕重点场景从 0 到 1 设计增长方案。'],
      ['补贴提效', '制定月度和年度营销预算，结合常态与节日方案持续提升补贴效率。'],
      ['产品运营', '推动基础能力、营销功能与人群标签建设，分析关键转化路径并优化产品体验。'],
      ['新服务探索', '从 0 到 1 推动增值服务上线，搭建并验证新业务模式的商业逻辑。']
    ]
  },
  dolce: {
    number: '05', company: 'Dolce & Gabbana', companyEn: 'DOLCE & GABBANA',
    role: '会计', date: '2015.07 — 2018.09',
    summary: '负责零售门店财务工作，积累门店经营流程与财务指标基础。',
    highlights: [],
    duties: [
      ['门店财务', '负责门店收入与费用审核，以及发票和资产管理；在工作中积累零售门店经营流程与财务指标基础。']
    ]
  },
  versa: {
    number: '04', company: 'Versa', companyEn: '上海卫莎网络 · AI 制图产品',
    role: '运营经理', date: '2018.09 — 2019.12',
    summary: '负责 AI 制图产品的社区、内容和创意合作。',
    highlightLabel: '主要成就',
    highlights: [
      ['个人成长', '绩效评定 A；一年内晋升经理并带领 3 人团队。'],
      ['创意与合作', '通过创意及内容创作助力公司获得 B 站融资；发起《蜘蛛侠：英雄远征》、荷兰梵高博物馆等 IP 跨界合作，并将产品引入上海高校，获得人民日报等媒体报道。'],
      ['产品成绩', '任职期间，产品入选 2018—2019 年 Apple 年度精选软件。']
    ],
    duties: [
      ['社区创作', '发现用户需求，通过活动和话题引导 UGC 创作，引入、维护并激活 KOL。'],
      ['内容策略', '结合产品特点与用户偏好更新节日营销和社区运营策略，通过特色话题与活动培养社区创作文化。'],
      ['数据与留存', '分析社区数据，输出运营策略，建设积分商城和权益中心，提升新老用户留存。'],
      ['产品协作', '结合用户反馈和运营数据，跨部门推动产品功能迭代与体验优化。']
    ]
  }
};

let activeExperience = null;

function renderExperienceDetail(detail) {
  const highlightSection = detail.highlights.length ? `<section class="experience-highlights" aria-label="${detail.highlightLabel}"><div class="experience-detail-label">HIGHLIGHTS / ${detail.highlightLabel}</div><div class="experience-highlight-grid">${detail.highlights.map(([title, body]) => `<article><h3>${title}</h3><p>${body}</p></article>`).join('')}</div></section>` : '';
  return `<div class="experience-detail">${titleBar('02','EXPERIENCE','成长履历')}<button type="button" class="experience-back" data-experience-back>← 返回成长履历</button><header class="experience-detail-intro"><span>${detail.number} / ${detail.companyEn}</span><h2 id="modalTitle">${detail.company}</h2><p class="experience-detail-role">${detail.role} <span>·</span> ${detail.date}</p><p class="experience-detail-summary">${detail.summary}</p></header>${highlightSection}<section class="experience-duties"><div class="experience-detail-label">WORK / 工作内容</div><div class="experience-duty-grid">${detail.duties.map(([title, body], index) => `<article><span>${String(index + 1).padStart(2, '0')}</span><div><h3>${title}</h3><p>${body}</p></div></article>`).join('')}</div></section></div>`;
}

function openExperienceDetail(which) {
  if (which === 'builder') {
    activeExperience = which;
    content.innerHTML = views.builderProjects;
    modalWindow.scrollTop = 0;
    content.querySelector('.builder-back').focus();
    return;
  }
  const detail = experienceDetails[which];
  if (!detail) return;
  activeExperience = which;
  content.innerHTML = renderExperienceDetail(detail);
  modalWindow.scrollTop = 0;
  content.querySelector('.experience-back').focus();
}

function returnToExperience() {
  content.innerHTML = views.profile;
  modalWindow.scrollTop = 0;
  content.querySelector(`[data-experience="${activeExperience}"]`)?.focus();
  activeExperience = null;
}

function openModal(which) {
  if (!views[which]) return;
  if (layer.hidden) priorFocus = document.activeElement;
  content.innerHTML = views[which];
  layer.hidden = false;
  document.body.style.overflow = 'hidden';
  modalWindow.scrollTop = 0;
  layer.querySelector('.close-modal').focus();
}
function closeModal() {
  if (layer.hidden) return;
  layer.hidden = true;
  content.innerHTML = '';
  document.body.style.overflow = '';
  priorFocus?.focus?.();
}

document.addEventListener('click', event => {
  const experience = event.target.closest('[data-experience]');
  if (experience) { openExperienceDetail(experience.dataset.experience); return; }
  if (event.target.closest('[data-experience-back]')) { returnToExperience(); return; }
  const opener = event.target.closest('[data-open]');
  if (opener) openModal(opener.dataset.open);
  if (event.target.closest('[data-close]')) closeModal();
  const slab = event.target.closest('.work-slab');
  if (slab) {
    content.querySelectorAll('.work-slab').forEach(item => item.classList.toggle('is-active', item === slab));
    const preview = content.querySelector('.work-video-preview');
    if (preview) {
      if (slab.classList.contains('video-slab')) preview.play().catch(() => {});
      else preview.pause();
    }
    if (!slab.classList.contains('video-slab')) content.querySelector('.work-video-player video')?.pause();
  }
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape') closeModal();
  if (event.key === 'Tab' && !layer.hidden) {
    const focusable = [...layer.querySelectorAll('button,[href],[tabindex]:not([tabindex="-1"])')].filter(el => !el.disabled);
    if (!focusable.length) return;
    const first = focusable[0], last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
    else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
  }
});
const ENTRANCE_SETTLE_MS = 4700;
let entranceTimer;
function scheduleEntranceEnd() {
  clearTimeout(entranceTimer);
  entranceTimer = setTimeout(() => {
    shell.classList.remove('replay', 'playing');
    shell.classList.add('intro-done');
  }, ENTRANCE_SETTLE_MS);
}
scheduleEntranceEnd();

document.getElementById('replay').addEventListener('click', () => {
  shell.classList.remove('intro-done');
  shell.querySelectorAll('.object.is-swinging').forEach(object => object.classList.remove('is-swinging'));
  shell.classList.add('replay');
  shell.classList.remove('playing');
  void shell.offsetWidth;
  shell.classList.add('playing');
  scheduleEntranceEnd();
});

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
document.querySelectorAll('.pegboard .object').forEach(object => {
  object.addEventListener('pointerenter', event => {
    if (event.pointerType !== 'mouse' || reducedMotion.matches || !shell.classList.contains('intro-done')) return;
    object.classList.remove('is-swinging');
    void object.offsetWidth;
    object.classList.add('is-swinging');
  });
  object.addEventListener('animationend', event => {
    if (event.animationName === 'hanger-swing') object.classList.remove('is-swinging');
  });
});
