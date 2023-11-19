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

  li {
    font-size: 1rem;
    color: #5f6c7b;

    padding: 1rem 0;
    padding-left: 1rem;
    border-left: 2px solid #90b4ce;
    position: relative;

    &:before {
      content: '';
      position: absolute;
      top: 0rem;
      left: -6px;
      width: 10px;
      height: 10px;
      background-color: #3da9fc;
      border-radius: 50%;
    }

    li:first-child {
      font-size: 1.4rem;
      color: #094067;
    }

    li {
      border: none;
      padding: 0;
      &:before {
        display: none;
      }
    }
  }

  a {
    color: #3da9fc;
    text-decoration: none;
    font-weight: bold;
  }

  /* レスポンシブ対応 */
  @media screen and (max-width: 768px) {
    p {
      font-size: 2.6rem;
      font-weight: bold;
      color: #094067;
    }

    li {
      font-size: 0.8rem;
      color: #5f6c7b;

      padding: 1rem 0;
      padding-left: 1rem;
      border-left: 2px solid #90b4ce;
      position: relative;

      &:before {
        content: '';
        position: absolute;
        top: 0rem;
        left: -6px;
        width: 10px;
        height: 10px;
        background-color: #3da9fc;
        border-radius: 50%;
      }

      li:first-child {
        font-size: 1.2rem;
        color: #094067;
      }

      li {
        border: none;
        padding: 0;
        &:before {
          display: none;
        }
      }
    }
  }
`;

export default MarkdownContainer;
