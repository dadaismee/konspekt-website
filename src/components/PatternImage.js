import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const PatternImage = () => {
  const imageHeight = 101;
  const [scrolled, setScrolled] = useState(imageHeight);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.scrollY > imageHeight &&
        window.scrollY < window.innerHeight / 2.5
      )
        setScrolled(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <Wrapper>
      <svg
        width='1440'
        height={scrolled}
        viewBox={`0 0 1440 100`}
        // viewBox={`${window.innerWidth <= 820 ? scrolled / 0.5 : 0} 0 1440 101`} // на мобиле вниз и вбок
        preserveAspectRatio='none'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M446 98.1501L436.442 100.565V86.0756L446 83.8983V98.1501Z'
          fill='#EF8AAA'
          fill-opacity='0.8'
        />
        <path
          d='M436.443 98.1501L417.329 100.565V86.0756L436.443 83.8983V98.1501Z'
          fill='#EF8AAA'
          fill-opacity='0.8'
        />
        <path
          d='M417.328 98.1501L388.657 100.565V86.0756L417.328 83.8983V98.1501Z'
          fill='#EF8AAA'
          fill-opacity='0.8'
        />
        <path
          d='M388.657 98.1501L350.428 100.565V86.0756L388.657 83.8983V98.1501Z'
          fill='#EF8AAA'
          fill-opacity='0.8'
        />
        <path
          d='M446 79.0682L436.443 83.8979V54.9193L446 50.5646V79.0682Z'
          fill='#EF8AAA'
        />
        <path
          d='M436.442 79.0682L417.328 83.8979V54.9193L436.442 50.5646V79.0682Z'
          fill='#EF8AAA'
        />
        <path
          d='M417.328 79.0682L388.657 83.8979V54.9193L417.328 50.5646V79.0682Z'
          fill='#EF8AAA'
        />
        <path
          d='M388.657 79.0682L350.429 83.8979V54.9193L388.657 50.5646V79.0682Z'
          fill='#EF8AAA'
        />
        <path
          d='M446 43.2553L436.443 50.5V7.03205L446 0.499981V43.2553Z'
          fill='#8ECE9B'
        />
        <path
          d='M436.442 43.2553L417.328 50.5V7.03205L436.442 0.499981V43.2553Z'
          fill='#8ECE9B'
        />
        <path
          d='M417.328 43.2553L388.657 50.5V7.03205L417.328 0.499981V43.2553Z'
          fill='#8ECE9B'
        />
        <path
          d='M388.657 43.2553L350.429 50.5V7.03205L388.657 0.499981V43.2553Z'
          fill='#8ECE9B'
        />
        <path
          d='M350.428 98.1501L302.642 100.565V86.0756L350.428 83.8983V98.1501Z'
          fill='#EF8AAA'
          fill-opacity='0.8'
        />
        <path
          d='M350.428 79.0682L302.642 83.8979V54.9193L350.428 50.5646V79.0682Z'
          fill='#EF8AAA'
        />
        <path
          d='M350.428 43.2553L302.642 50.5V7.03205L350.428 0.499981V43.2553Z'
          fill='#8ECE9B'
        />
        <path
          d='M143.357 98.1501L0 100.565L0 86.0756L143.357 83.8983V98.1501Z'
          fill='#EF8AAA'
          fill-opacity='0.8'
        />
        <path
          d='M143.357 79.0682L0 83.8979L0 54.9193L143.357 50.5646V79.0682Z'
          fill='#EF8AAA'
        />
        <path
          d='M143.357 43.2553L0 50.5L0 7.03205L143.357 0.499981V43.2553Z'
          fill='#8ECE9B'
        />
        <path
          d='M302.643 98.1501L238.929 100.565V86.0756L302.643 83.8983V98.1501Z'
          fill='#EF8AAA'
          fill-opacity='0.8'
        />
        <path
          d='M302.643 79.0682L238.929 83.8979V54.9193L302.643 50.5646V79.0682Z'
          fill='#EF8AAA'
        />
        <path
          d='M302.643 43.2553L238.929 50.5V7.03205L302.643 0.499981V43.2553Z'
          fill='#8ECE9B'
        />
        <path
          d='M238.929 98.1501L143.357 100.565V86.0756L238.929 83.8983V98.1501Z'
          fill='#EF8AAA'
          fill-opacity='0.8'
        />
        <path
          d='M238.929 79.0682L143.357 83.8979V54.9193L238.929 50.5646V79.0682Z'
          fill='#EF8AAA'
        />
        <path
          d='M238.929 43.2553L143.357 50.5V7.03205L238.929 0.499981V43.2553Z'
          fill='#8ECE9B'
        />
        <g opacity='0.9'>
          <path
            d='M446.001 98.1501L467.301 100.565V86.0756L446.001 83.8983V98.1501Z'
            fill='#EF8AAA'
            fill-opacity='0.8'
          />
          <path
            d='M467.302 98.1501L509.902 100.565V86.0756L467.302 83.8983V98.1501Z'
            fill='#EF8AAA'
            fill-opacity='0.8'
          />
          <path
            d='M509.902 98.1501L573.802 100.565V86.0756L509.902 83.8983V98.1501Z'
            fill='#EF8AAA'
            fill-opacity='0.8'
          />
          <path
            d='M573.801 98.1501L659.001 100.565V86.0756L573.801 83.8983V98.1501Z'
            fill='#EF8AAA'
            fill-opacity='0.8'
          />
          <path
            d='M446 79.0682L467.3 83.8979V54.9193L446 50.5646V79.0682Z'
            fill='#EF8AAA'
          />
          <path
            d='M467.302 79.0682L509.902 83.8979V54.9193L467.302 50.5646V79.0682Z'
            fill='#EF8AAA'
          />
          <path
            d='M509.901 79.0682L573.801 83.8979V54.9193L509.901 50.5646V79.0682Z'
            fill='#EF8AAA'
          />
          <path
            d='M573.8 79.0682L659 83.8979V54.9193L573.8 50.5646V79.0682Z'
            fill='#EF8AAA'
          />
          <path
            d='M446.032 43.2553L467.332 50.5V7.03207L446.032 0.500003V43.2553Z'
            fill='#8ECE9B'
          />
          <path
            d='M467.335 43.2553L509.935 50.5V7.03207L467.335 0.500003V43.2553Z'
            fill='#8ECE9B'
          />
          <path
            d='M509.934 43.2553L573.833 50.5V7.03207L509.934 0.500003V43.2553Z'
            fill='#8ECE9B'
          />
          <path
            d='M573.832 43.2553L659.032 50.5V7.03207L573.832 0.500003V43.2553Z'
            fill='#8ECE9B'
          />
          <path
            d='M659.001 98.1501L765.501 100.565V86.0756L659.001 83.8983V98.1501Z'
            fill='#EF8AAA'
            fill-opacity='0.8'
          />
          <path
            d='M659.001 79.0682L765.501 83.8979V54.9193L659.001 50.5646V79.0682Z'
            fill='#EF8AAA'
          />
          <path
            d='M659.022 43.2553L765.521 50.5V7.03207L659.022 0.500003V43.2553Z'
            fill='#8ECE9B'
          />
          <path
            d='M1120.5 98.1501L1440 100.565V86.0756L1120.5 83.8983V98.1501Z'
            fill='#EF8AAA'
            fill-opacity='0.8'
          />
          <path
            d='M1120.5 79.0682L1440 83.8979V54.9193L1120.5 50.5646V79.0682Z'
            fill='#EF8AAA'
          />
          <path
            d='M1120.5 43.2553L1440 50.5V7.03207L1120.5 0.500003V43.2553Z'
            fill='#8ECE9B'
          />
          <path
            d='M765.501 98.1501L907.501 100.565V86.0756L765.501 83.8983V98.1501Z'
            fill='#EF8AAA'
            fill-opacity='0.8'
          />
          <path
            d='M765.501 79.0682L907.501 83.8979V54.9193L765.501 50.5646V79.0682Z'
            fill='#EF8AAA'
          />
          <path
            d='M765.518 43.2553L907.518 50.5V7.03207L765.518 0.500003V43.2553Z'
            fill='#8ECE9B'
          />
          <path
            d='M907.501 98.1501L1120.5 100.565V86.0756L907.501 83.8983V98.1501Z'
            fill='#EF8AAA'
            fill-opacity='0.8'
          />
          <path
            d='M907.501 79.0682L1120.5 83.8979V54.9193L907.501 50.5646V79.0682Z'
            fill='#EF8AAA'
          />
          <path
            d='M907.511 43.2553L1120.51 50.5V7.03207L907.511 0.500003V43.2553Z'
            fill='#8ECE9B'
          />
        </g>
      </svg>
    </Wrapper>
  );
};

export default PatternImage;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;
