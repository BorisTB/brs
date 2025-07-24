import {
  Box,
  Button,
  Container,
  Flex,
  Grid,
  Group,
  rgba,
  Stack,
  Text,
  ThemeIcon,
  Title
} from '@mantine/core';
import {
  IconBrandGithub,
  IconBrandNodejs,
  IconBrandReact,
  IconBrandTypescript,
  IconCode,
  IconMail
} from '@tabler/icons-react';

import classes from './hero.module.css';
import { BRAND_GITHUB_URL, BRAND_MAIL } from '../../../brand/contact';

export interface HeroProps {}

export const Hero = (props: HeroProps) => {
  const features = [
    { icon: <IconBrandTypescript />, label: 'Typescript' },
    { icon: <IconBrandReact />, label: 'React' },
    { icon: <IconBrandNodejs />, label: 'Node.js' }
  ];

  return (
    <Box>
      <Container size="xl" py={100}>
        <Grid gutter={40} align="center">
          <Grid.Col span={{ base: 12, md: 7 }}>
            <Stack gap="xl">
              <Group gap={'xs'}>
                <ThemeIcon size="lg" radius="md" variant="transparent">
                  <IconCode
                    style={{ width: 20, height: 20 }}
                    color="var(--mantine-primary-color-filled)"
                  />
                </ThemeIcon>
                <Text
                  fw={500}
                  size="sm"
                  style={{ letterSpacing: 1 }}
                  tt="uppercase">
                  Full-Stack Web App Engineer
                </Text>
              </Group>

              <Title className={classes?.title} order={1} size="h1">
                I build the future, upgrade the past
              </Title>

              <Text size="xl" c="dimmed" maw={600}>
                Helped to build and modernize many large-scale projects used by
                thousands of people, including internal portals, real-time
                monitoring tools, robust identity management systems and more...
              </Text>

              <Flex
                mt="xl"
                direction={{ base: 'column', xs: 'row' }}
                gap={{ base: 'sm', sm: 'lg' }}>
                <Button
                  size="lg"
                  leftSection={<IconMail />}
                  component="a"
                  href={`mailto:${BRAND_MAIL}`}
                  target="_blank">
                  Contact Me
                </Button>
                <Button
                  size="lg"
                  variant="default"
                  leftSection={<IconBrandGithub />}
                  component="a"
                  href={BRAND_GITHUB_URL}
                  target="_blank">
                  Judge Me
                </Button>
              </Flex>

              <Group mt={30} gap="xl">
                {features.map((feature, index) => (
                  <Group key={index} gap="xs">
                    <ThemeIcon
                      size="md"
                      variant="light"
                      color="blue"
                      style={{
                        background: rgba(
                          'var(--mantine-primary-color-filled)',
                          0.07
                        )
                      }}>
                      {feature.icon}
                    </ThemeIcon>
                    <Text size="sm" c="dimmed">
                      {feature.label}
                    </Text>
                  </Group>
                ))}
              </Group>
            </Stack>
          </Grid.Col>
        </Grid>
      </Container>
    </Box>
  );
};
