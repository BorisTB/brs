import { IconBrandGithub, IconMail, TablerIcon } from '@tabler/icons-react';

export const BRAND_GITHUB_ID = 'BorisTB';
export const BRAND_GITHUB_URL = `https://github.com/${BRAND_GITHUB_ID}`;
export const BRAND_MAIL = 'ja@delam.software';

export interface BrandContactItem {
  id: string;
  title: string;
  url: string;
  Icon: TablerIcon;
  visibleFrom?: string;
}

export const CONTACT_ITEMS = [
  {
    id: 'github',
    title: BRAND_GITHUB_ID,
    url: BRAND_GITHUB_URL,
    Icon: IconBrandGithub,
    visibleFrom: 'sm'
  },
  {
    id: 'email',
    title: BRAND_MAIL,
    url: `mailto:${BRAND_MAIL}`,
    Icon: IconMail
  }
] satisfies BrandContactItem[];
