// ==UserScript==
// @name         PokéCatch VN – Dịch bổ sung
// @version      1.4
// @updateURL    https://raw.githubusercontent.com/hoksilato/pokecatch-vn-scripts/main/pokecatch-dich.meta.js
// @downloadURL  https://raw.githubusercontent.com/hoksilato/pokecatch-vn-scripts/main/pokecatch-dich.user.js
// @match        https://pokecatchvn.xyz/*
// @run-at       document-end
// @grant        none
// ==/UserScript==
(() => {
  // Match complete UI strings. Never substitute English words inside names.
  const labels = new Map([
    ['Sòng Bạc (Casino)', 'Sòng bạc'],
    ['Đấu Raid', 'Đấu trùm'],
    ['Lưu game', 'Lưu trò chơi'],
    ['Nhập Giftcode Nhận Quà', 'Nhập mã nhận quà'],
    ['🎁 Nhập Giftcode Nhận Quà', '🎁 Nhập mã nhận quà'],
    ['Thu phục 10 loài hệ Water.', 'Thu phục 10 loài hệ Nước.'],
    ['Thu phục 10 loài hệ Rock hoặc Ground.', 'Thu phục 10 loài hệ Đá hoặc Đất.'],
    ['Thu phục toàn bộ Pokémon hệ Water tại Kanto.', 'Thu phục toàn bộ Pokémon hệ Nước tại Kanto.'],
    ['Bắt toàn bộ Kanto Pokémon, Pokémon Huyền Thoại và Huyền Ảo included.', 'Bắt toàn bộ Pokémon vùng Kanto, kể cả Pokémon Huyền Thoại và Huyền Ảo.'],
    ['Giới hạn Lv.', 'Giới hạn cấp'],
    ['Cấp khuyến nghị Lv.', 'Cấp khuyến nghị'],
    ['🏆 BXH Top Dex & Shiny', '🏆 Xếp hạng Pokédex và Pokémon khác màu'],
    ['Hiện thẻ Pokédex mỗi khi bắt được loài mới (Shiny luôn hiện)', 'Hiện thẻ Pokédex mỗi khi bắt được loài mới (luôn hiện với Pokémon khác màu)'],
    ['Hiệu ứng lấp lánh Shiny', 'Hiệu ứng cho Pokémon khác màu'],
    ['Hiệu ứng sao lấp lánh quanh Pokémon Shiny', 'Hiệu ứng sao lấp lánh quanh Pokémon khác màu'],
    ['Bạn bè của bạn sẽ luôn được ưu tiên xếp đầu danh sách đồng minh Raid.', 'Bạn bè luôn được ưu tiên xếp đầu danh sách đồng minh khi đấu trùm.'],
    ['⚖️ Luật cấp độ: Chuẩn Lv. 100 (Đồng bộ 2 bên)', '⚖️ Luật cấp độ: Cả hai bên cùng ở cấp 100'],
    ['⚖️ Luật cấp độ: Chuẩn Lv. 50 (Đồng bộ 2 bên)', '⚖️ Luật cấp độ: Cả hai bên cùng ở cấp 50'],
    ['🔥 Luật cấp độ: Cấp Thực Tế (Giữ nguyên Level)', '🔥 Luật cấp độ: Giữ nguyên cấp hiện tại'],
    ['🤖 Chế độ: Đấu Trường Auto PvP 6v6 (Tự đánh & Tự đổi khắc hệ)', '🤖 Chế độ: Đấu trường 6 đấu 6 (tự đánh và tự đổi Pokémon khắc hệ)'],
    ['🏟️ Chế độ: Đấu Auto Tại Sân Chính (Màn hình Hành Trình)', '🏟️ Chế độ: Đấu tự động tại sân chính (màn hình hành trình)'],
    ['⚔️ Đấu Auto Ngẫu Nhiên', '⚔️ Đấu tự động với đối thủ ngẫu nhiên'],
    ['⚔️ Quyết Đấu Auto', '⚔️ Quyết đấu tự động'],
    ['Chuyển đổi / Nhập & Xuất dữ liệu Save', 'Chuyển đổi, nhập và xuất bản lưu'],
    ['🔄 Chuyển đổi / Nhập & Xuất dữ liệu Save', '🔄 Chuyển đổi, nhập và xuất bản lưu'],
    ['Thoát phiên trên trình duyệt này (Save trên Server vẫn giữ nguyên)', 'Đăng xuất trên trình duyệt này (bản lưu trên máy chủ vẫn được giữ lại)'],
    ['Lấy dữ liệu từ bản gốc sang bản Việt Hóa Mega hoặc sao lưu file Save (.json)', 'Nhập dữ liệu từ bản gốc vào bản Việt Hóa Mega hoặc sao lưu dưới dạng tệp .json'],
    ['Chuyển dữ liệu từ bản gốc sang bản Việt Hóa Mega hoặc sao lưu file Save (.json)', 'Chuyển dữ liệu từ bản gốc sang bản Việt Hóa Mega hoặc sao lưu dưới dạng tệp .json'],
    ['Top 50 người chơi · tự cập nhật mỗi 20 giây', '50 người chơi dẫn đầu · tự cập nhật mỗi 20 giây'],
    ['Bảng Xếp Hạng · Top Đại Gia Pokédollars', 'Bảng xếp hạng · Người chơi có nhiều Pokédollars nhất'],
    ['Tăng EXP cho một Pokémon. +600 EXP.', 'Cho một Pokémon 600 điểm kinh nghiệm.'],
    ['Tăng lượng lớn EXP cho một Pokémon. +9.000 EXP.', 'Cho một Pokémon 9.000 điểm kinh nghiệm.'],
    ['Tăng lượng cực lớn EXP cho một Pokémon. +150.000 EXP.', 'Cho một Pokémon 150.000 điểm kinh nghiệm.'],
    ['Tăng lượng EXP khổng lồ cho một Pokémon. +600.000 EXP.', 'Cho một Pokémon 600.000 điểm kinh nghiệm.'],
    ['Celadon Sòng Bạc', 'Sòng bạc Celadon'],
    ['Xu Casino', 'Xu sòng bạc'],
  ]);
  const types = new Map(Object.entries({
    Fire: 'Lửa', Water: 'Nước', Electric: 'Điện', Grass: 'Cỏ', Ice: 'Băng',
    Fighting: 'Giác đấu', Poison: 'Độc', Ground: 'Đất', Flying: 'Bay',
    Psychic: 'Siêu linh', Bug: 'Bọ', Rock: 'Đá', Ghost: 'Ma', Dragon: 'Rồng',
    Dark: 'Bóng tối', Steel: 'Thép', Fairy: 'Tiên', Normal: 'Thường',
  }));
  const skip = 'script,style,textarea,input,[contenteditable]:not([contenteditable="false"]),option:not([value])';

  function lookup(element, text) {
    if (element.closest('.type[data-type]')) return types.get(text);
    if (text === 'NEW' && element.closest('.ot-new, nav button')) return 'MỚI';
    if (text === 'Changelogs' && element.closest('button,[role="button"]')) return 'Lịch sử cập nhật';
    if (text === 'Shiny' && element.closest('#screen-dex, #screen-team, #screen-pension') && element.closest('button')?.textContent.trim() === 'Shiny') return 'Khác màu';
    if (!element.closest('main,nav,button,select,[role="switch"],[role="dialog"],#poke-side-giftcode-btn')) return;
    const match = /^Thu phục toàn bộ Pokémon hệ (Electric|Ice|Fire)$/.exec(text);
    if (match) return 'Thu phục toàn bộ Pokémon hệ ' + types.get(match[1]);
    const shiny = /^(Sở hữu (?:10|50) Pokémon) Shiny\.$/.exec(text);
    if (shiny) return shiny[1] + ' khác màu.';
    const raid = /^Chiến thắng (25|50) trận Raid Shiny\.$/.exec(text);
    if (raid) return 'Thắng ' + raid[1] + ' trận đấu trùm Pokémon khác màu.';
    return labels.get(text);
  }

  function translate(node) {
    const element = node.parentElement;
    const key = node.data.trim().replace(/\s+/g, ' ');
    if (!element || !key || element.closest(skip)) return;
    const replacement = lookup(element, key);
    if (replacement) node.data = node.data.replace(node.data.trim(), replacement);
  }

  function inspect(node) {
    if (node.nodeType === Node.TEXT_NODE) return translate(node);
    if (node.nodeType !== Node.ELEMENT_NODE || node.matches(skip)) return;
    const walker = document.createTreeWalker(node, NodeFilter.SHOW_TEXT);
    while (walker.nextNode()) translate(walker.currentNode);
  }

  const socialSelector = 'button[aria-controls="nav-grp-social"] > .l';
  const desktop = matchMedia('(hover: hover) and (pointer: fine)');
  const measure = document.createElement('canvas').getContext('2d');
  let socialLabel;
  function fitSocialLabel() {
    if (!socialLabel || !measure) return;
    const full = 'Cộng đồng & Trao đổi';
    const css = getComputedStyle(socialLabel);
    measure.font = css.font || [css.fontWeight, css.fontSize, css.fontFamily].join(' ');
    const width = measure.measureText(full).width + (parseFloat(css.letterSpacing) || 0) * full.length;
    const available = socialLabel.getBoundingClientRect().width;
    const next = desktop.matches ? (available && width > available ? 'C.đồng & Trao đổi' : full) : 'Cộng đồng & Giao dịch';
    if (socialLabel.textContent !== next) socialLabel.textContent = next;
  }
  const resize = new ResizeObserver(fitSocialLabel);
  function bindSocialLabel() {
    const current = document.querySelector(socialSelector);
    if (current === socialLabel) return;
    resize.disconnect();
    socialLabel = current;
    if (current) resize.observe(current.parentElement);
    fitSocialLabel();
  }
  bindSocialLabel();
  desktop.addEventListener('change', fitSocialLabel);
  document.fonts.addEventListener('loadingdone', fitSocialLabel);

  inspect(document.body);
  new MutationObserver(records => {
    if (!socialLabel?.isConnected) bindSocialLabel();
    for (const record of records) {
      if (socialLabel && socialLabel.contains(record.target)) fitSocialLabel();
      if (record.type === 'characterData') translate(record.target);
      else for (const added of record.addedNodes) inspect(added);
    }
  }).observe(document.body, { childList: true, subtree: true, characterData: true });
})();
