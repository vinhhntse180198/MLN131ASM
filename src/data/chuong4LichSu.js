export const historyPage = {
  eyebrow: 'TIẾN TRÌNH LỊCH SỬ',
  title: 'Sự ra đời và phát triển của Dân chủ',
  intro:
    'Lịch sử nhân loại đã trải qua các hình thái dân chủ gắn liền với các chế độ xã hội khác nhau — từ dân chủ nguyên thủy đến dân chủ xã hội chủ nghĩa (Phần I.1.b).',
  sidebarTitle: 'Tiến Trình Lịch Sử',
  sidebarSubtitle: 'Từ sơ khai đến hiện đại',
  overviewBtn: 'Xem toàn cảnh',
}

/**
 * Mỗi giai đoạn: thay `imageUrl` bằng link ảnh của bạn khi có.
 */
export const timelineStages = [
  {
    id: 'nguyen-thuy',
    sidebarLabel: 'Nguyên Thủy',
    formLabel: 'HÌNH THÁI 1',
    stageLabel: 'Giai đoạn 1',
    title: 'Dân chủ nguyên thủy',
    subtitle: 'Cộng sản nguyên thủy',
    icon: '🔥',
    iconTone: 'gold',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAaMXeDhGS8MER8uzSDBJwB7_eKRGilfEqSiztBxbqM_a68EpVWzb49Xr7dlTfvrZQmf-nJwtTw0X_TFQ_lnIz5w3gJbZdJWO3cXSiZJiBdHQT9TKidUPxJ9H2XOcWJnyOwUtmCbEztaf6ocl9IQvxJudr_ZoBbKac1sUlmKD47ZMwkiNAb5bJHgPgb3LT6Q4znu0W9Kob6xUV-NLZ0nwoUi3jjV9GLSg8-aUi1r4raKnTpWJygn1Lu0FOScM6L3VQxi3IcU2Qxqy8',
    imageCaption: 'PRIMITIVE DEMOCRACY — A COLLECTIVE DECISION',
    paragraphs: [
      'Xuất hiện từ sớm trong xã hội tự quản của cộng đồng thị tộc, bộ lạc. Được Ph. Ăngghen gọi là “dân chủ nguyên thủy” hay “dân chủ quân sự”.',
      'Đặc trưng: Nhân dân bầu ra thủ lĩnh quân sự thông qua “Đại hội nhân dân”, mọi người có quyền phát biểu và biểu quyết bằng cách giơ tay hoặc hoan hô. Tuy nhiên, trình độ sản xuất thời kỳ này còn rất kém phát triển.',
    ],
  },
  {
    id: 'chu-no',
    sidebarLabel: 'Chủ Nô',
    formLabel: 'HÌNH THÁI 2',
    stageLabel: 'Giai đoạn 2',
    title: 'Dân chủ chủ nô',
    subtitle: 'Chiếm hữu nô lệ',
    icon: '🏛️',
    iconTone: 'gold',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBrRoOjT7tfjdkhRHHYkhyI8skKvN-yJ_BgwGowQRr7PbI0Zs1jdTBmwXUoHES2mz3wdhNvMGSupWcpGWksTHGS_u7B-dxZJhaAVtzXjz5sRZplyg4Rx_je9klhWcuRlDWpDWJTnzmXPHJh6bM-VFgLgFnlRnvd0UN_mmX43sbjAoc5xBZpzpnJrhjZoHzRGHDrlAui7pMuRkNBf5bK8tqzfIZ07adi77JS5ZO4-LBFbgW4JXsUBRHsKtxK5hCtejCYNXgATZL8yQA',
    imageCaption: 'ANCIENT ATHENIAN DEMOCRACY: THE AGORA',
    paragraphs: [
      'Sự ra đời của chế độ tư hữu và giai cấp đã dẫn đến sự tan rã của dân chủ nguyên thủy, thay thế bằng nền dân chủ chủ nô — nền dân chủ đầu tiên trong lịch sử có sự tổ chức thành nhà nước.',
      'Bản chất: Thực hiện dân chủ cho thiểu số (giai cấp chủ nô, tăng lữ, thương gia…), còn đại đa số cư dân là nô lệ thì không được tham gia vào công việc nhà nước.',
    ],
  },
  {
    id: 'phong-kien',
    sidebarLabel: 'Phong Kiến',
    formLabel: 'HÌNH THÁI 3',
    stageLabel: 'Bước lùi lịch sử',
    title: 'Chế độ phong kiến',
    subtitle: 'Thời kỳ “đen tối” của dân chủ',
    icon: '🏰',
    iconTone: 'muted',
    imageUrl: '/images/lich-su-hinh-thai-3.png',
    imageCaption: 'CHURCH & STATE — FEUDAL POWER',
    quote: 'Đêm trường Trung Cổ',
    italic: true,
    paragraphs: [
      'Nền dân chủ chủ nô bị xóa bỏ và thay thế bằng chế độ độc tài chuyên chế phong kiến.',
      'Trong thời kỳ này, ý thức về dân chủ và đấu tranh dân chủ không có bước tiến đáng kể nào do sự thống trị tuyệt đối của vua chúa và giáo hội.',
    ],
  },
  {
    id: 'tu-san',
    sidebarLabel: 'Tư Sản',
    formLabel: 'HÌNH THÁI 4',
    stageLabel: 'Giai đoạn 3',
    title: 'Dân chủ tư sản',
    subtitle: 'Chủ nghĩa tư bản',
    icon: '📜',
    iconTone: 'gold',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCzG0g9dVlebraNnShvVskmLgd8DEqMUcM3Q5hB3ltnDu-Pyytb6wxoUsdZMzrkfivV8m3bYhhLDfYwxuuLDVdTBp2eiIhDouWJ1w0W6QIc4D2nUbGs4ahB6iVHQcuHKxW2ud1sPCT4rIprWcPQnGS593p0MYF7S0XqVxF7y3LHKP7s2pl4zVk4eYEYK_ekxk2Zy9kngatBXUYCRrs67f9ZD8pK0xs3P1mziZZcjhRLwtpHpPpBLlrNQQkcJ4ex-OZ_ArQxOYrRsxE',
    imageCaption: 'LIBERTÉ, ÉGALITÉ, FRATERNITÉ',
    paragraphs: [
      'Ra đời vào cuối thế kỷ XIV — đầu thế kỷ XV. Là một bước tiến lớn của nhân loại với những giá trị về quyền tự do, bình đẳng, dân chủ.',
      'Hạn chế: Được xây dựng trên nền tảng kinh tế là chế độ tư hữu về tư liệu sản xuất, nên thực tế vẫn là nền dân chủ của thiểu số những người nắm giữ tư liệu sản xuất đối với đại đa số nhân dân lao động.',
    ],
  },
  {
    id: 'dan-chu-xhcn',
    sidebarLabel: 'Xã Hội Chủ Nghĩa',
    formLabel: 'HÌNH THÁI 5',
    stageLabel: 'Đỉnh cao phát triển',
    title: 'Dân chủ xã hội chủ nghĩa',
    subtitle: 'Vô sản',
    icon: '📢',
    iconTone: 'maroon',
    imageUrl: '/images/lich-su-hinh-thai-5.png',
    imageCaption: 'THE PEOPLE IN HISTORY — PARIS',
    highlight: true,
    paragraphs: [
      'Được phôi thai từ thực tiễn đấu tranh giai cấp ở Pháp và Công xã Paris (1871), chính thức xác lập sau Cách mạng Tháng Mười Nga (1917).',
      'Đặc trưng: Là nền dân chủ cao hơn về chất so với dân chủ tư sản; thực hiện quyền lực của đại đa số nhân dân; xây dựng nhà nước của nhân dân, do nhân dân và vì nhân dân.',
      'Mục tiêu: Giải phóng con người, lôi cuốn nhân dân tham gia tự giác vào công việc quản lý nhà nước và xã hội.',
    ],
  },
]

export const slideSummary = {
  title: 'Tóm tắt trình chiếu',
  items: [
    'Khái niệm: Dân chủ là quyền lực của dân (Demoskratos); là hình thức nhà nước; là nguyên tắc tổ chức xã hội.',
    'Hồ Chí Minh: “Dân là chủ” và “Dân làm chủ”.',
    'Tiến trình: Nguyên thủy → Chủ nô → Phong kiến (triệt tiêu) → Tư sản → XHCN (đại đa số).',
  ],
}
