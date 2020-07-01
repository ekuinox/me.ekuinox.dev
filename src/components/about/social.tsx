import React from 'react';
import styled from 'styled-components';
import { Icon } from '@iconify/react';
import TwitterIcon from '@iconify/icons-ant-design/twitter-outlined';
import GitHubIcon from '@iconify/icons-ant-design/github-outlined';
import EmailIcon from '@iconify/icons-ant-design/mail-outlined';
import SteamIcon from '@iconify/icons-cib/steam';

const Ul = styled.ul`
  display: table;
  border-collapse: separate;
  border-spacing: 2px 0;
  vertical-align: middle;
  margin: 0 auto;
`;

const Li = styled.li`
  display: table-cell;
  vertical-align: middle;
  text-align: center;
  padding: 0 3vw;
`;

const Anchor = styled.a`
  display: block;
  font-size: 30px;
`;

const Box = styled.div`
  padding: 1vh 0;
`;

export const Social = (): JSX.Element => (
  <Box>
    <Ul>
      {[
        { url: 'https://twitter.com/remokusu', icon: TwitterIcon },
        { url: 'https://github.com/ekuinox', icon: GitHubIcon },
        { url: 'https://steamcommunity.com/id/lm0x', icon: SteamIcon },
        { url: 'mailto:depkey@me.com', icon: EmailIcon },
      ].map(({ url, icon }) => (
        <Li key={url}>
          <Anchor href={url} target="_blank" rel="noreferrer noopener">
            <Icon icon={icon} />
          </Anchor>
        </Li>
      ))}
    </Ul>
  </Box>
);
