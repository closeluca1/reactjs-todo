import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  color: #1a1a1a;
  background: #fafafa;
`;

export const Area = styled.div`
  width: 90%;
  max-width: 1080px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Header = styled.header`
  width: 100%;
  padding: 1rem 0 1rem 0;
`;

export const HR = styled.hr`
  width: 90%;
`;

export const H1 = styled.h1`
  font-size: clamp(1.1rem, 10vw, 3rem);
  text-align: center;
  color: #1a1a1a;
`;

export const Main = styled.main`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center; 
  flex-direction: column;
`;
