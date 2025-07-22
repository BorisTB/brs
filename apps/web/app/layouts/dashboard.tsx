import { useDisclosure } from '@mantine/hooks';
import { AppShell, Burger, Group } from '@mantine/core';
import { Outlet } from 'react-router';

export default function DashboardLayout() {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      padding="md"
      header={{ height: { base: 48, md: 60, lg: 76 } }}
      navbar={{
        width: { base: 100, md: 200, lg: 300 },
        breakpoint: 'sm',
        collapsed: { mobile: !opened }
      }}>
      <AppShell.Header>
        <Group h="100%" px="md">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          Header
        </Group>
      </AppShell.Header>
      <AppShell.Navbar p="md">Navbar</AppShell.Navbar>
      <AppShell.Main>
        <Outlet />
      </AppShell.Main>
    </AppShell>
  );
}
