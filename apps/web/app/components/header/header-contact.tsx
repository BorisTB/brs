import { Button, Group } from '@mantine/core';
import { BrandContactItem, CONTACT_ITEMS } from '../../../brand/contact';

export interface HeaderContactProps {}

interface ContactItemProps extends BrandContactItem {}

function ContactItem({ title, url, Icon, visibleFrom }: ContactItemProps) {
  return (
    <Button
      size="sm"
      variant="transparent"
      leftSection={<Icon size={20} />}
      component="a"
      href={url}
      target="_blank"
      visibleFrom={visibleFrom}>
      {title}
    </Button>
  );
}

export function HeaderContact({}: HeaderContactProps) {
  return (
    <Group>
      {CONTACT_ITEMS.map((item) => (
        <ContactItem key={item.id} {...item} />
      ))}
    </Group>
  );
}
