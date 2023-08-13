import React from 'react'
import Github from '../../assets/Github'
import Linkedin from '../../assets/Linkedin'

import styled from 'styled-components'
const FooterSection = styled.footer`
  position: fixed;
  bottom: 0%;
  left: 0%;
  width: 100%;
  display: flex-box;
  background-color: #555555;
  opacity: 0.4;
  &:hover {
    opacity: 1;
  }

  & > a {
    text-decoration: none;
    color: #fff;
    border-right: 2px solid #000;

    padding: 0px 10px;
    font-size: 1.2rem;
    opacity: 0.7;
    &:hover {
      opacity: 1;
    }

    & > img {
      width: 23px;
    }
  }
  & > p {
    font-size: 1.2rem;
  }
`

const Section = styled.section`
  width: 100%;
  height: 10vh;
  position: relative;
`
const Footer = () => {
  return (
    <>
      <Section>
        <FooterSection>
          <p>web realizada con motivos de estudio personal</p>

          <a
            href="https://www.linkedin.com/in/angelo-berrios-pinto-96b317235/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
            <Linkedin width="25px"></Linkedin>
          </a>

          <a
            href="https://github.com/Dbaljeet"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
            <Github width="30px"></Github>
          </a>
        </FooterSection>
      </Section>
    </>
  )
}

export default Footer
