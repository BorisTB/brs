import { Container, Group } from '@mantine/core';
import Logo from '../../assets/brs-logo.svg';
import React from 'react';
import { HeaderContact } from './header-contact';

export interface HeaderProps {
  sidebarControl?: React.ReactNode;
}

export function Header({ sidebarControl }: HeaderProps) {
  return (
    <Container size="xl" h="100%" strategy="block">
      <Group h="100%" gap={0} justify="space-between" wrap="nowrap">
        <Group wrap="nowrap">
          {sidebarControl}
          <Logo height={26} />
        </Group>
        <Group px={20} justify="right" wrap="nowrap">
          <HeaderContact />
        </Group>
      </Group>
    </Container>
  );
}
