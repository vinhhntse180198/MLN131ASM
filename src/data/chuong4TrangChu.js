import { paths } from './siteContent.js'

export const hero = {
  title: 'Dân chủ Xã hội chủ nghĩa và Nhà nước Xã hội chủ nghĩa',
  description:
    'Khám phá lịch sử, bản chất và giá trị của quyền lực thuộc về nhân dân — Phần I.1: Dân chủ và sự ra đời, phát triển của dân chủ.',
  ctaPrimary: { to: paths.concepts, label: 'Bắt đầu khám phá' },
  ctaSecondary: { to: paths.history, label: 'Xem tóm tắt' },
}

export const quote = {
  text: 'Dân chủ là cái quý giá nhất của nhân dân. Thực hành dân chủ là cái chìa khóa vạn năng có thể giải quyết mọi khó khăn.',
  author: 'Hồ Chí Minh',
}

export const courseStructure = {
  title: 'Cấu trúc Chương học',
  lead: 'Nội dung Chương 4 được tổ chức theo ba mảng chính, bám sát giáo trình phần I.1.',
  cards: [
    {
      id: 'khai-niem',
      icon: '📕',
      iconBg: '#fce8ec',
      title: 'Khái niệm & Bản chất',
      text: 'Nguồn gốc thuật ngữ demoskratos, quan điểm Mác — Lênin và ba phương diện cơ bản của dân chủ.',
      link: { to: paths.concepts, label: 'Tìm hiểu thêm →' },
      wide: false,
    },
    {
      id: 'ho-chi-minh',
      icon: '🔖',
      iconBg: '#fef9e7',
      title: 'Tư tưởng Hồ Chí Minh',
      text: '“Dân là chủ”, “Dân làm chủ” — giá trị nhân loại và vị thế của nhân dân trong nhà nước ta.',
      link: { to: paths.concepts, label: 'Khám phá →' },
      wide: false,
    },
    {
      id: 'lich-su',
      icon: '🕐',
      iconBg: '#e8f4fc',
      title: 'Tiến trình Lịch sử & Nhà nước',
      text: 'Từ dân chủ nguyên thủy, chủ nô, phong kiến, tư sản đến dân chủ xã hội chủ nghĩa — vô sản.',
      link: { to: paths.history, label: 'Xem tiến trình →' },
      wide: true,
    },
  ],
}
