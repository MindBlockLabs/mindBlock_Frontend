import styled from "styled-components";

const SubscribeInput = () => {
  return (
    <StyledWrapper>
      <div className="input-wrapper">
        <svg
          className="icon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <g data-name="Layer 2">
            <g data-name="inbox">
              <rect
                width={24}
                height={24}
                transform="rotate(180 12 12)"
                opacity={0}
              />
              <path d="M20.79 11.34l-3.34-6.68A3 3 0 0 0 14.76 3H9.24a3 3 0 0 0-2.69 1.66l-3.34 6.68a2 2 0 0 0-.21.9V18a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-5.76a2 2 0 0 0-.21-.9zM8.34 5.55a1 1 0 0 1 .9-.55h5.52a1 1 0 0 1 .9.55L18.38 11H16a1 1 0 0 0-1 1v2a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-2a1 1 0 0 0-1-1H5.62z" />
            </g>
          </g>
        </svg>
        <input
          type="email"
          name="email"
          className="input"
          placeholder="Enter your email"
        />
        <button className="Subscribe-btn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={30}
            height={15}
            viewBox="0 0 24 24"
            fill="currentColor"
            className="arrow"
          >
            <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" />
          </svg>
          Join
        </button>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .input-wrapper {
    width: fit-content;
    height: 45px;
    border-radius: 20px;
    padding: 5px;
    box-sizing: content-box;
    display: flex;
    align-items: center;
    background-color: var(--color-gray, #212122);
    border: 1px solid rgba(255, 255, 255, 0.1);
  }

  .icon {
    width: 24px;
    height: 24px;
    fill: var(--color-text, white);
    margin-left: 10px;
    margin-right: 5px;
    transition: all 0.3s;
  }
  .input {
    max-width: 170px;
    height: 100%;
    border: none;
    outline: none;
    padding-left: 10px;
    background-color: transparent;
    color: var(--color-text, white);
    font-size: 0.9em;
    font-family: var(--font-secondary);

    &::placeholder {
      color: rgba(255, 255, 255, 0.5);
      font-family: var(--font-secondary);
    }
  }
  .input:-webkit-autofill {
    -webkit-box-shadow: 0 0 0px 1000px var(--color-gray, #212122) inset;
    -webkit-text-fill-color: var(--color-text, white);
  }
  .Subscribe-btn {
    height: 100%;
    width: 100px;
    border: none;
    border-radius: 15px;
    color: var(--color-primary-dark, #0d0d0d); // Keep dark text for contrast
    cursor: pointer;
    /* Removed linear-gradient, added background-color */
    background-color: #00e5ff;
    font-weight: 500;
    font-family: var(--font-primary);
    font-size: 0.9em;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    transition: all 0.3s ease-in-out;
    gap: 5px;
  }
  .arrow {
    width: 18px;
    height: 18px;
    position: relative;
    margin-right: 0;
    transition: transform 0.3s ease-in-out;
    color: var(--color-primary-dark, #0d0d0d);
  }

  .Subscribe-btn:hover {
    color: var(--color-text, white); // Keep white text on hover
    /* Removed linear-gradient, added slightly darker background-color for hover */
    background-color: #00cfff; // Slightly darker cyan for hover
    box-shadow: 0 0 15px rgba(0, 229, 255, 0.6); /* Adjusted glow color to match */
  }

  .Subscribe-btn:hover .arrow {
    transform: translateX(5px);
    color: var(--color-text, white); // Keep arrow white on hover
  }

  .Subscribe-btn:active {
    transform: scale(0.95);
    box-shadow: 0 0 10px rgba(0, 229, 255, 0.3);
  }
`;

export default SubscribeInput;
