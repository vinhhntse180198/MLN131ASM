import { parthenonImageUrl } from './siteContent.js'

export const pageIntro = {
  title: 'Quan niệm về Dân chủ',
}

export const etymology = {
  title: 'Nguồn gốc thuật ngữ',
  paragraphs: [
    'Thuật ngữ dân chủ ra đời vào khoảng thế kỷ thứ V trước Công nguyên. Các nhà tư tưởng Hy Lạp cổ đại đã dùng từ “Demokratos” để nói về dân chủ. Từ này được cấu thành bởi hai từ: Demos là nhân dân, bao gồm người bình dân và công dân tự do; Kratos là cai trị hay quyền lực. Như vậy, về mặt chữ nghĩa, dân chủ có nghĩa là quyền lực thuộc về nhân dân hay quyền lực của nhân dân.',
    'Khái niệm dân chủ ra đời phản ánh một bước tiến lớn trong nhận thức của nhân loại về quyền của con người, bước đầu khẳng định chủ thể của quyền lực là nhân dân chứ không phải một cá nhân như nhà vua hay một nhóm người như tầng lớp quý tộc.',
  ],
  terms: [
    { term: 'Demos', meaning: 'Nhân dân, người bình dân, công dân tự do' },
    { term: 'Kratos', meaning: 'Cai trị / quyền lực' },
  ],
  imageUrl: parthenonImageUrl,
  imageCaption: 'Nhà nước thành bang Athens — Nơi khởi nguồn của khái niệm Dân chủ.',
}

export const marxLenin = {
  title: 'Quan điểm của chủ nghĩa Mác — Lênin',
  intro:
    'Dựa trên cơ sở của chủ nghĩa Mác - Lênin và thực tiễn cách mạng thế giới, đặc biệt là thực tiễn xây dựng chủ nghĩa xã hội, có thể hiểu dân chủ ở các nội dung cơ bản sau:',
  points: [
    'Thứ nhất, về phương diện quyền con người, quyền công dân: Dân chủ là một giá trị nhân văn, phản ánh quyền cơ bản của con người; phản ánh ước mơ, khát vọng ngàn đời của nhân dân lao động mong muốn thoát khỏi sự áp bức, bóc lột, bất công và có cuộc sống tự do, bình đẳng, hạnh phúc.',
    'Thứ hai, về phương diện chính trị: Dân chủ là một hình thức tổ chức thiết chế chính trị, một hình thái nhà nước, gắn với giai cấp thống trị cai trị xã hội. Do đó, dân chủ luôn mang tính giai cấp.',
    'Thứ ba, về phương diện tổ chức và quản lý xã hội: Dân chủ là một nguyên tắc tổ chức, đi đôi với kỷ luật và kỷ cương; đó là nguyên tắc dân chủ tập trung.',
  ],
  sectionTitle: 'Ba nội dung cơ bản của dân chủ',
  cards: [
    {
      id: 'quyen-luc',
      icon: '⚖️',
      title: 'Phương diện Quyền lực',
      text: 'Dân chủ là một giá trị nhân văn, phản ánh quyền cơ bản của con người và khát vọng lâu dài của nhân dân về tự do, bình đẳng, hạnh phúc.',
    },
    {
      id: 'che-do',
      icon: '🏛️',
      title: 'Phương diện Chế độ',
      text: 'Dân chủ là một hình thức tổ chức thiết chế chính trị, một hình thái nhà nước, luôn gắn với giai cấp cầm quyền và vì vậy luôn mang tính giai cấp.',
    },
    {
      id: 'to-chuc',
      icon: '👥',
      title: 'Phương diện Tổ chức',
      text: 'Dân chủ là nguyên tắc tổ chức và quản lý xã hội, gắn với kỷ luật, kỷ cương và được thể hiện tập trung qua nguyên tắc dân chủ tập trung.',
    },
  ],
}

export const hoChiMinh = {
  eyebrow: 'Tư tưởng Hồ Chí Minh về Dân chủ',
  quote:
    'Nước ta là nước dân chủ, địa vị cao nhất là dân, vì dân là chủ.',
  intro:
    'Ở Việt Nam, Chủ tịch Hồ Chí Minh đã khái quát bản chất của dân chủ một cách cô đọng, dễ hiểu. Dân chủ trước hết là một giá trị nhân loại chung; đồng thời thể hiện ở hai phương diện “Dân là chủ” và “Dân làm chủ”.',
  detail:
    '“Bao nhiêu lợi ích đều vì dân. Bao nhiêu quyền hạn đều của dân... Nói tóm lại, quyền hành và lực lượng đều ở nơi dân”.',
  pillars: [
    {
      title: 'DÂN LÀ CHỦ',
      text: 'Xác định vị thế của nhân dân — địa vị cao nhất là dân, vì dân là chủ.',
    },
    {
      title: 'DÂN LÀM CHỦ',
      text: 'Xác định quyền và nghĩa vụ — nhân dân tham gia làm chủ đất nước, làm chủ xã hội.',
    },
  ],
  motto: 'Dân là chủ, Dân làm chủ',
  imageUrl: '/images/hcm-dan-la-chu.png',
  imageAlt: 'Chủ tịch Hồ Chí Minh — Dân là chủ, Dân làm chủ',
  bannerImageUrl: '/images/hcm-lay-dan-lam-goc.png',
  bannerAlt:
    'Hồ Chí Minh và tư tưởng “Lấy dân làm gốc” — kế thừa truyền thống trọng dân, phát triển quan điểm Mác — Lênin',
}
