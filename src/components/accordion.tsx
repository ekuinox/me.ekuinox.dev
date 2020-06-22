import styled from 'styled-components';

export const Accordion = styled.div<{ visible: boolean; openDuration?: string; closeDuration?: string}>`
	max-height: ${ ({ visible }) => visible ? '100%' : '0' };
	overflow: hidden;
	transition: max-height ${ ({ visible, closeDuration, openDuration }) => visible ? closeDuration ?? '10ms' : openDuration ?? '10ms' };
`;