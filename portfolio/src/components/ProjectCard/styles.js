import styled from 'styled-components';

export const Container = styled.div`
  .img-wrapper {
    background-color: var(--pink);
    border-radius: 0.5rem;
    box-shadow: 1px 1px 10px 1px gray;
    display: flex;
    height: 100%;
    width: 100%;

    img {
      border-radius: 0.5rem;
      width: 100%;
      height: 100%;
      filter: grayscale(100%) opacity(50%);
    }
  }

  .details {
    display: flex;
    flex-direction: column;
    margin: 0.8rem 0.4rem 0 0.4rem;

    div {
      align-items: center;
      display: flex;
      justify-content: space-between;

      .links-wrapper {
        a {
          align-items: center;
          border-radius: 0.5rem;
          color: var(--blue);
          display: flex;
          justify-content: center;
          margin-left: 0.5rem;
          padding: 0.2rem;

          svg {
            height: 1.2rem;
            width: 1.2rem;
          }
  
          &:hover {
            background-color: var(--pink);
          }
        }
      }
    }

    p {
      margin: 0.4rem 0 0.8rem 0;
      width: 100%;
    }

    ul {
      display: flex;
      flex-wrap: wrap;
      list-style: none;

      li {
        background-color: var(--pink);
        border-radius: 0.5rem;
        margin: 0 0.5rem 0.5rem 0;
        padding: 0.1rem 0.3rem;
        font-size: 0.9rem;
      }
    }
  }

  img:hover {
    filter: grayscale(0%) opacity(100%);
  }
`;
