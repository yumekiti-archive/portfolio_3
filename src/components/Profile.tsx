import styled from 'styled-components';
import Background from '../assets/background.svg';

const MarkdownContainer = styled.div`
  padding: 2rem;
  height: 100%;
  min-height: 80vh;
  display: flex;
  align-items: center;
  background-image: url(${Background});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  > * {
    width: 50%;
    display: flex;
    justify-content: center;
  }

  > *:first-child {
    display: none;
  }

  img {
    width: 280px;
    border-radius: 50%;
  }

  ul {
    text-align: center;
    list-style: none;
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    li {
      font-size: 1rem;
      font-weight: normal;
      color: #5f6c7b;
      margin: 0.5rem 0;

      ul li {
        font-size: 1.4rem;
        font-weight: 300;
        color: #094067;
        margin: 0;
      }
    }
  }

  /* レスポンシブ対応 */
  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding: 2rem 0;

    > * {
      width: 100%;
      margin: 1rem 0;
    }

    img {
      width: 180px;
    }

    ul li {
      font-size: 0.8rem;
    }

    ul li ul li {
      font-size: 1.2rem;
    }
  }
`;

export default MarkdownContainer;
