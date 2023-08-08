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

  p + ul li {
    font-size: 1.4rem;
    color: #094067;
    padding: 1rem 0;

    li {
      font-size: 1rem;
      color: #5f6c7b;
      padding: 0;
    }

    ul {
      padding: 1rem 0;
      padding-left: 1rem;
      border-left: 2px solid #90b4ce;
      position: relative;
    }
  }

  /* レスポンシブ対応 */
  @media screen and (max-width: 768px) {
    p {
      font-size: 2.6rem;
      font-weight: bold;
      color: #094067;
    }

    p + ul li {
      font-size: 1.2rem;
      color: #094067;
      padding: 1rem 0;

      li {
        font-size: 0.8rem;
        color: #5f6c7b;
        padding: 0;
      }

      ul {
        padding: 1rem 0;
        padding-left: 1rem;
        border-left: 2px solid #90b4ce;
        position: relative;
      }
    }
  }
`;

export default MarkdownContainer;
