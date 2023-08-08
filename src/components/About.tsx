import styled from 'styled-components';

const MarkdownContainer = styled.div`
  padding: 2rem;
  height: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  p {
    font-size: 2.8rem;
    font-weight: bold;
    color: #094067;
    margin: 2rem 0;
  }

  ul {
    font-size: 1.4rem;
    color: #5f6c7b;
  }

  /* レスポンシブ対応 */
  @media screen and (max-width: 768px) {
    p {
      font-size: 2.6rem;
      font-weight: bold;
      color: #094067;
    }

    ul {
      padding: 6rem 0;
      font-size: 1.2rem;
      color: #5f6c7b;
    }
  }
`;

export default MarkdownContainer;
