import { Container, Stack, Text } from '@mantine/core';
import styles from './coming-soon.module.css';
import { MainCenter } from '../../ui';

export const ComingSoon = () => {
  return (
    <MainCenter>
      <Container size="md" className={styles.container}>
        <Stack gap="xl" align="center">
          <Stack ta="center" align="center" justify="center" gap={'xl'}>
            <Text
              fz={'4rem'}
              fw={600}
              lh={'4rem'}
              className={styles.title}
              ta={'center'}>
              Coming Soon..
            </Text>
            <Text c={'dimmed'} maw={'380'}>
              We're working hard to bring you more awesome block. Stay tuned for
              updates!
            </Text>
          </Stack>
        </Stack>
      </Container>
    </MainCenter>
  );
};
