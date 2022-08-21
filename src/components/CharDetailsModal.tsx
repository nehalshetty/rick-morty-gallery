import { Typography } from '@mui/material';
import { FunctionComponent } from 'react';
import styled from 'styled-components';

interface CharDetailsModalProps {
  a?: string;
}

const Main = styled.div`
  background: white;
  width: 500px;
  max-width: calc(100vw - 20px);
  margin: 0 10px;
  position: absolute;
  top: 50%;
  left: calc(50% - 10px);
  transform: translate(-50%, -50%);
  padding: 10px;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const ModalTitle = styled(Typography)`
  margin-bottom: 20px;
`;

const Section = styled.div`
  width: 50%;
  padding: 0 10px;
  box-sizing: border-box;
  text-align: center;
  min-width: 230px;
`;

const CharDetailsModal: FunctionComponent<CharDetailsModalProps> = () => {
  return (
    <Main>
      <Section>
        <ModalTitle variant="h4" style={{ margin: '10px 0' }}>
          Origin
        </ModalTitle>

        <Typography variant="subtitle1" color="text.secondary" component="h5">
          Name - Rick
        </Typography>

        <Typography variant="subtitle1" color="text.secondary" component="h5">
          Dimension - Rick
        </Typography>

        <Typography variant="subtitle1" color="text.secondary" component="h5">
          Residents - 45
        </Typography>
      </Section>

      <Section>
        <ModalTitle variant="h4" color="text.tertiary" style={{ margin: '10px 0' }}>
          Location
        </ModalTitle>

        <Typography variant="subtitle1" color="text.secondary" component="h5">
          Name - Rick
        </Typography>

        <Typography variant="subtitle1" color="text.secondary" component="h5">
          Dimension - Rick
        </Typography>

        <Typography variant="subtitle1" color="text.secondary" component="h5">
          Residents - 45
        </Typography>
      </Section>
    </Main>
  );
};

export default CharDetailsModal;
