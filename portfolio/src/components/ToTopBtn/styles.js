import styled from 'styled-components';

import { TiStarburst } from 'react-icons/ti';
import { IoIosArrowUp } from 'react-icons/io';

export const Star = styled(TiStarburst)`
  color: var(--green);
  font-size: 6rem;
  position: absolute;
  bottom: -3rem;
  right: 1rem;
`;

export const Arrow = styled(IoIosArrowUp)`
  color: #fff;
  font-size: 3rem;
  position: absolute;
  bottom: -1.5rem;
  right: 2.5rem;
`;
