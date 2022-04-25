import styled from 'styled-components';

export const Section = styled.section`
  width: 100%;
  margin-bottom: 1rem;
`;

type ArticleProps = {
  done: boolean;
}

export const Article = styled.article(({ done}: ArticleProps) => (
  `
  padding: .5rem;
  display: flex;
  aling-items: center;
  flex-direction: row;
  border-radius: 4px;
  background: #f2f2f2;

  input{
    width: 25px;
    height: 25px;
    margin-right: .3rem;
    cursor: pointer;
  }

  label {
    margin-top: .2rem;
    text-decoration: ${done ? 'line-through' : 'initial'};
    color: #1a1a1as;
  }
  `
));