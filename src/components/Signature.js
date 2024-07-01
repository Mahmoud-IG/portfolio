import React from 'react';
import styled from '@emotion/styled';

const SignatureContainer = styled.div`
  font-family: 'Noto Nastaliq Urdu', serif;
  font-optical-sizing: auto;
  text-align: left;
  font-style: normal;
  padding: 8px 0 0 16px;
`;

const Signature = () => {
  return <SignatureContainer>محمود اغبارية</SignatureContainer>;
};

export default Signature;
