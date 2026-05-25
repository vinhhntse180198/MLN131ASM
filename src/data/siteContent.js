/**
 * Cấu hình chung — Chương 4: Dân chủ XHCN và Nhà nước XHCN (MLN131)
 */
export const siteMeta = {
  logoIcon: '🏛️',
  brandShort: 'MLN131',
  brandFull: 'Chương 4: Dân chủ Xã hội chủ nghĩa',
  chapterBadge: 'CHƯƠNG 4',
}

export const footer = {
  title: 'MLN131',
  tagline: 'Bài giảng Chương 4 — Dân chủ xã hội chủ nghĩa và Nhà nước xã hội chủ nghĩa.',
  copyright: `© ${new Date().getFullYear()} MLN131`,
}

/** Ảnh hero trang chủ (hình 1) */
export const heroIllustrationUrl =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuDrTE9ejmV5Qj789j-AP7At0csCMtFkFnlzzfjuahSzxDYKdJ97sCvn7wUWOn8uQ_eFT-ECoxkwWbVqqc1JnY7sSJvYSAy2N9OqLINAXhehcSH5772YRm1f5B5pI151TqbucIfNjyB4zIWdYylM9OuNZNq5MR2hmlmqcwkr3i3unvgQAz_aHAVEFytDYfYyJTl5DdQGk8ALMos2TfdHpMOScc0Bj1xV2MEnDhrlK6hhzkc6hikH3uFYzUSrZW7q9CuXW_x7mlmbcW4'

/** Ảnh Parthenon — trang Khái niệm (hình 2) */
export const parthenonImageUrl =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuAG8dL2zupU9xOZQeNRDSQCD3JfDEZTapooJwExSeEE6JTRnzNrD2FDSNUL4lar8a5yIi0uny_F78T9IldaCx6ISGyuITP4oHScLaMcwpNInOorK3OfoyCGyRZ2XfSn1xr71-7bFDcAMMDDEKNdv1dYCmdgvw0HUJcQXLTUOVVcNrJemurrrN8leDnWCIzYA6FFHfNm9A5qR5gm4UQsYCF4cHImqY6Vmp8V6H1kadBlwtK4AfxQF7ycUbEkWBfnnSv1d7kQIFDmZQ'

export const paths = {
  home: '/',
  concepts: '/khai-niem',
  history: '/lich-su',
  socialist: '/xa-hoi-chu-nghia',
  game: '/game',
}

export const navLinks = [
  { to: paths.home, label: 'Trang chủ' },
  { to: paths.concepts, label: 'Khái niệm' },
  { to: paths.history, label: 'Lịch sử' },
  { to: paths.socialist, label: 'Xã hội chủ nghĩa' },
  { to: paths.game, label: 'Game' },
]
