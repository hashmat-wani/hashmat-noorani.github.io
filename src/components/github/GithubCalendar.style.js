import styled from "styled-components";

export const GithubCalendarWrapper = styled.div`
  /* border: 1px solid red; */
  
  .phone {
    display: none;
    @media ${(props) => props.theme.media.mobile} {
      display: block;
    }
  }
  .tablet {
    display: none;
    @media (min-width: 481px) and (${(props) => props.theme.media.tablet}) {
      display: block;
    }
  }

  .fablet {
    display: none;
    @media (min-width: 769px) and (${(props) => props.theme.media.fablet}) {
      display: block;
    }
  }

  .desktop {
    display: none;
    @media only screen and (min-width: 1001px) {
      display: block;
    }
  }
`;
