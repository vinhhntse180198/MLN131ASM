export const gamePage = {
  eyebrow: 'GAME ÔN TẬP',
  title: 'Hành trình Dân chủ',
  intro:
    'Kéo hoặc bấm vào thẻ bài đúng để trả lời câu hỏi. Trả lời càng nhanh, điểm càng cao; trả lời đúng liên tiếp sẽ có thêm điểm thưởng.',
}

export const gameCards = {
  athens: {
    id: 'athens',
    name: 'Demokratos',
    desc: 'Athena Hy Lạp cổ đại',
    img: '/game-cards/card-athens.jpg',
  },
  slave: {
    id: 'slave',
    name: 'Dân chủ chủ nô',
    desc: 'Chỉ chủ nô có quyền',
    img: '/game-cards/card-slave.jpg',
  },
  feudal: {
    id: 'feudal',
    name: 'Đêm trường Trung cổ',
    desc: 'Chuyên chế phong kiến',
    img: '/game-cards/card-feudal.jpg',
  },
  bourgeois: {
    id: 'bourgeois',
    name: 'Dân chủ tư sản',
    desc: 'Tam quyền phân lập',
    img: '/game-cards/card-bourgeois.jpg',
  },
  october: {
    id: 'october',
    name: 'CM Tháng Mười 1917',
    desc: 'Khai sinh dân chủ vô sản',
    img: '/game-cards/card-october.jpg',
  },
  marxLenin: {
    id: 'marxLenin',
    name: 'Mác - Lênin',
    desc: 'Hệ tư tưởng chủ đạo',
    img: '/game-cards/card-marx-lenin.jpg',
  },
  vietnam: {
    id: 'vietnam',
    name: 'Dân chủ Việt Nam',
    desc: 'Quyền hành đều ở nơi dân',
    img: '/game-cards/card-vietnam.jpg',
  },
  politics: {
    id: 'politics',
    name: 'Bản chất Chính trị',
    desc: 'GCCN lãnh đạo qua Đảng CS',
    img: '/game-cards/card-politics.jpg',
  },
  economy: {
    id: 'economy',
    name: 'Bản chất Kinh tế',
    desc: 'Công hữu về TLSX chủ yếu',
    img: '/game-cards/card-economy.jpg',
  },
  culture: {
    id: 'culture',
    name: 'Bản chất Văn hóa - Xã hội',
    desc: 'Phát triển con người toàn diện',
    img: '/game-cards/card-culture.jpg',
  },
  manifesto: {
    id: 'manifesto',
    name: 'Tuyên ngôn Đảng Cộng sản',
    desc: 'Mác - Ăngghen, 1848',
    img: '/game-cards/card-manifesto.jpg',
  },
  hochiminh: {
    id: 'hochiminh',
    name: 'Hồ Chí Minh',
    desc: 'Lãnh tụ - Tư tưởng Dân chủ VN',
    img: '/game-cards/card-hochiminh.jpg',
  },
  party: {
    id: 'party',
    name: 'Đảng Cộng sản',
    desc: 'Đội tiên phong của GCCN',
    img: '/game-cards/card-party.jpg',
  },
  peopleMaster: {
    id: 'peopleMaster',
    name: 'Nhân dân làm chủ',
    desc: 'Chủ thể của quyền lực',
    img: '/game-cards/card-people-master.jpg',
  },
  equality: {
    id: 'equality',
    name: 'Bình đẳng',
    desc: 'Nam - nữ, các dân tộc',
    img: '/game-cards/card-equality.jpg',
  },
  rights: {
    id: 'rights',
    name: 'Quyền Con người',
    desc: 'Giải phóng khỏi áp bức',
    img: '/game-cards/card-rights.jpg',
  },
}

export const gameQuestions = [
  {
    q: "Thuật ngữ 'Demokratos' xuất hiện ở đâu, khi nào?",
    answer: 'athens',
    options: ['athens', 'october', 'feudal', 'bourgeois'],
  },
  {
    q: "Nền dân chủ nào coi nô lệ là 'công cụ biết nói', không có quyền công dân?",
    answer: 'slave',
    options: ['slave', 'bourgeois', 'vietnam', 'october'],
  },
  {
    q: 'Thời kỳ nào KHÔNG tồn tại nền dân chủ với tư cách hình thái nhà nước?',
    answer: 'feudal',
    options: ['feudal', 'athens', 'october', 'economy'],
  },
  {
    q: 'Nền dân chủ nào tổ chức nhà nước theo nguyên tắc tam quyền phân lập?',
    answer: 'bourgeois',
    options: ['bourgeois', 'slave', 'vietnam', 'politics'],
  },
  {
    q: 'Sự kiện lịch sử nào khai sinh nền dân chủ xã hội chủ nghĩa?',
    answer: 'october',
    options: ['october', 'athens', 'bourgeois', 'feudal'],
  },
  {
    q: 'Hệ tư tưởng nào giữ vai trò chủ đạo trong nền dân chủ XHCN?',
    answer: 'marxLenin',
    options: ['marxLenin', 'bourgeois', 'feudal', 'athens'],
  },
  {
    q: 'Câu nói “quyền hành và lực lượng đều ở nơi dân” gắn với ai?',
    answer: 'hochiminh',
    options: ['hochiminh', 'marxLenin', 'party', 'vietnam'],
  },
  {
    q: 'Bản chất nào thể hiện: GCCN lãnh đạo toàn xã hội thông qua Đảng Cộng sản?',
    answer: 'politics',
    options: ['politics', 'economy', 'culture', 'bourgeois'],
  },
  {
    q: 'Nền dân chủ XHCN dựa trên chế độ sở hữu nào về tư liệu sản xuất chủ yếu?',
    answer: 'economy',
    options: ['economy', 'bourgeois', 'slave', 'politics'],
  },
  {
    q: 'Bản chất nào hướng tới phát triển con người toàn diện, kế thừa tinh hoa nhân loại?',
    answer: 'culture',
    options: ['culture', 'politics', 'economy', 'feudal'],
  },
  {
    q: 'Nền dân chủ đầu tiên trong lịch sử nhân loại là?',
    answer: 'slave',
    options: ['slave', 'bourgeois', 'october', 'feudal'],
  },
  {
    q: "Theo Lênin, nền dân chủ nào 'cao hơn gấp triệu lần' dân chủ tư sản?",
    answer: 'october',
    options: ['october', 'athens', 'vietnam', 'culture'],
  },
  {
    q: "Tác phẩm nào của Mác - Ăngghen viết: 'giai cấp vô sản tiến lên thành giai cấp thống trị, giành lấy dân chủ'?",
    answer: 'manifesto',
    options: ['manifesto', 'marxLenin', 'october', 'rights'],
  },
  {
    q: 'Lực lượng nào lãnh đạo cách mạng XHCN, đưa nhân dân lao động lên làm chủ?',
    answer: 'party',
    options: ['party', 'bourgeois', 'feudal', 'slave'],
  },
  {
    q: 'Trong nền dân chủ XHCN, ai là chủ thể thực sự của quyền lực chính trị?',
    answer: 'peopleMaster',
    options: ['peopleMaster', 'bourgeois', 'slave', 'feudal'],
  },
  {
    q: 'Bản chất văn hóa - xã hội của dân chủ XHCN bảo đảm bình đẳng giữa?',
    answer: 'equality',
    options: ['equality', 'politics', 'economy', 'manifesto'],
  },
  {
    q: 'Dân chủ - nhìn ở phương diện giá trị nhân văn - phản ánh điều gì?',
    answer: 'rights',
    options: ['rights', 'politics', 'economy', 'feudal'],
  },
  {
    q: 'Nhà nước nào được thiết lập ngay sau khi GCCN giành chính quyền?',
    answer: 'october',
    options: ['october', 'bourgeois', 'feudal', 'athens'],
  },
]

export const gameSettings = {
  timePerQuestion: 15,
  maxLives: 3,
  totalQuestions: 10,
}
