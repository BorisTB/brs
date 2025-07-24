import { useDisclosure } from '@mantine/hooks';
import { AppShell, Burger } from '@mantine/core';
import { Outlet } from 'react-router';
import { Header } from '../components/header';
import { MOBILE_BREAKPOINT } from '../app.constants';

export default function DashboardLayout() {
  const [opened, { toggle }] = useDisclosure();

  const burger = (
    <Burger
      opened={opened}
      onClick={toggle}
      hiddenFrom={MOBILE_BREAKPOINT}
      size="sm"
    />
  );

  return (
    <AppShell
      withBorder={false}
      padding="md"
      header={{ height: { base: 48, md: 60, lg: 76 } }}
      navbar={{
        width: { base: 100, md: 200, lg: 300 },
        breakpoint: MOBILE_BREAKPOINT,
        collapsed: { mobile: true, desktop: true }
      }}>
      <AppShell.Header>
        <Header />
      </AppShell.Header>
      <AppShell.Navbar hidden p="md">
        Navbar
      </AppShell.Navbar>
      <AppShell.Main>
        <Outlet />
      </AppShell.Main>
    </AppShell>
  );
}
