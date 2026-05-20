import { parthenonImageUrl } from './siteContent.js'

export const pageIntro = {
  title: 'Quan niệm về Dân chủ',
}

export const etymology = {
  title: 'Nguồn gốc thuật ngữ',
  intro:
    'Thuật ngữ dân chủ ra đời vào khoảng thế kỷ VII — VI trước Công nguyên. Các nhà tư tưởng Hy Lạp cổ đại đã dùng từ “demoskratos” để nói đến dân chủ, trong đó “demos” là nhân dân và “kratos” là cai trị. Như vậy, dân chủ được hiểu là nhân dân cai trị hay quyền lực thuộc về nhân dân.',
  terms: [
    { term: 'Demos', meaning: 'Nhân dân' },
    { term: 'Kratos', meaning: 'Cai trị / quyền lực' },
  ],
  imageUrl: parthenonImageUrl,
  imageCaption: 'Nhà nước thành bang Athens — Nơi khởi nguồn của khái niệm Dân chủ.',
}

export const marxLenin = {
  title: 'Quan điểm của chủ nghĩa Mác — Lênin',
  intro: 'Dân chủ được hiểu trên các phương diện sau:',
  points: [
    'Dân chủ là sản phẩm và là thành quả của quá trình đấu tranh giai cấp cho những giá trị tiến bộ của nhân loại.',
    'Dân chủ là một hình thức tổ chức nhà nước của giai cấp cầm quyền.',
    'Dân chủ là một trong những nguyên tắc hoạt động của các tổ chức chính trị — xã hội.',
  ],
  sectionTitle: 'Ba nội dung cơ bản của dân chủ',
  cards: [
    {
      id: 'quyen-luc',
      icon: '⚖️',
      title: 'Phương diện Quyền lực',
      text: 'Dân chủ là quyền lực thuộc về nhân dân; nhân dân là chủ nhân của nhà nước. Nhà nước phải vì nhân dân và phục vụ nhân dân.',
    },
    {
      id: 'che-do',
      icon: '🏛️',
      title: 'Phương diện Chế độ',
      text: 'Dân chủ là một hình thức nhà nước hay hình thái nhà nước, là chính thể dân chủ hay chế độ dân chủ.',
    },
    {
      id: 'to-chuc',
      icon: '👥',
      title: 'Phương diện Tổ chức',
      text: 'Dân chủ là nguyên tắc dân chủ, kết hợp với nguyên tắc tập trung để hình thành nguyên tắc tập trung dân chủ trong tổ chức và quản lý xã hội.',
    },
  ],
}

export const hoChiMinh = {
  eyebrow: 'Tư tưởng Hồ Chí Minh về Dân chủ',
  quote:
    'Nước ta là nước dân chủ, địa vị cao nhất là dân, vì dân là chủ.',
  intro:
    'Dân chủ trước hết là một giá trị nhân loại chung. Dân chủ có nghĩa là “Dân là chủ” (xác định vị thế) và “Dân làm chủ” (xác định quyền và nghĩa vụ).',
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
