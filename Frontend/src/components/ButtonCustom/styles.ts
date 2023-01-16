import styled from "styled-components";

type Props = {
  backgroundColor: string;
};

export const Container = styled.div<Props>`
  .containerButton {
    .buttonSeeProjects {
      width: 169px;
      height: 48px;
      border-radius: 5px;
      border: none;
      background: linear-gradient(to right, #ff023e, #8e01a7, #3e05dd);
      color: #000000;
      letter-spacing: 0;
      transition: 0.3s;
      font-weight: 500;
      font-size: 16px;
      display: flex;
      align-items: center;
      justify-content: center;
      text-decoration: none;
      &:hover {
        background: linear-gradient(to right, #ff023e, #8e01a7, #3e05dd);
        color: #fff;
      }
    }
    width: 185px;
    height: 65px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    border-radius: 5px;
  }
  .animated-border {
    width: 200px;
    height: 50px;
    background: linear-gradient(to right, #ff023e, #8e01a7, #3e05dd);
    position: absolute;
    animation: rotate 3s infinite ease-in-out;
    border-radius: 5px;
  }
  .corner {
    width: 183px;
    height: 63px;
    background: ${(props) => props.backgroundColor && props.backgroundColor};
    border-radius: 5px;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }

  @media (max-width: 900px) {
    .buttonSeeProjects {
      font-size: 13px !important;
    }
  }
`;
