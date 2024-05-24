import React from 'react';
import styled from 'styled-components';

const StyledComplete = styled.div`
  body {
    background: white;
    overflow: hidden;
    font-family: 'Red Hat Display', sans-serif;
    letter-spacing: 0.05rem;
    line-height: 1.5rem;
  }

  .stripe {
    position: absolute;
    height: 30rem;
    width: 400%;
    left: 50%;
    top: 50%;
    background: #FE5F55;
    transform: translate(-50%, -50%) rotate(-30deg);
  }

  .center {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .card {
    position: relative;
    background: #fff;
    color: #2C3534;
    width: 24rem;
    border-radius: 1rem;
    overflow: hidden;
    box-shadow: 
      0 0 8rem 0 rgba(0, 0, 0, 0.2),
      0 2rem 4rem -3rem rgba(0, 0, 0, 0.9);
  }

  .illustration {
    position: relative;
    height: 10rem;
    background: #EDF9F8;
    overflow: hidden;
  }

  .content {
    padding: 2rem;
    h2, p {
      opacity: 0.7;
      margin: 0; 
    }

    h2 { 
      opacity: 0.9;
      margin-bottom: 1rem; 
    }
  }

  .car {
    position: absolute;
    top: 4rem;
    left: -5rem;
    z-index: 30;
    animation: car 10s infinite  ease-in-out;
  }

  /* Add other CSS rules as needed */
`;

const Complete = () => {
  return (
    <StyledComplete>
      <div className="stripe"></div>
      <div className="center">
        <div className="card">
          <div className="illustration">
            <div className="car">
              <div className="body">
                <div className="body-front"></div>
                <div className="body-back"></div>
                <div className="window"></div>
              </div>
              <div className="front wheel"></div>
              <div className="back wheel"></div>
            </div>
          </div>
          <div className="content">
            <h2>Your order is on its way!</h2>
            <p>Check your mail box for a tracking code and estimated delivery time.</p>
          </div>
        </div>
      </div>
    </StyledComplete>
  );
}

export default Complete;
