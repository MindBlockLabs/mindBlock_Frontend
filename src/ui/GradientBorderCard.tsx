import React from "react";
import styled from "styled-components";

// Define props
interface GradientBorderCardProps {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  title: string;
  description: string;
}

const GradientBorderCard = ({
  icon: Icon,
  title,
  description,
}: GradientBorderCardProps) => {
  return (
    <StyledWrapper>
      <div className="card">
        <div className="card__border_animated" />
        <Icon size={40} className="card_icon" />
        <div className="card_title__container">
          <span className="card_title">{title}</span>
          <p className="card_paragraph">{description}</p>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .card {
    --white: hsl(0, 0%, 100%);
    --black: hsl(240, 15%, 9%);
    --paragraph: hsl(0, 0%, 83%);
    --line: hsl(240, 9%, 17%);
    --primary: hsl(189, 92%, 58%);

    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1.5rem;
    width: 100%;
    max-width: 350px;
    min-height: 280px;
    background-color: hsla(240, 15%, 9%, 1);
    background-image: radial-gradient(
        at 88% 40%,
        hsla(240, 15%, 9%, 1) 0px,
        transparent 85%
      ),
      radial-gradient(at 49% 30%, hsla(240, 15%, 9%, 1) 0px, transparent 85%),
      radial-gradient(at 14% 26%, hsla(240, 15%, 9%, 1) 0px, transparent 85%),
      radial-gradient(at 0% 64%, hsl(189, 99%, 26%) 0px, transparent 85%),
      radial-gradient(at 41% 94%, hsl(189, 97%, 36%) 0px, transparent 85%),
      radial-gradient(at 100% 99%, hsl(188, 94%, 13%) 0px, transparent 85%);
    border-radius: 1rem;
    box-shadow: 0px -16px 24px 0px rgba(255, 255, 255, 0.1) inset;
    margin: 0 auto;
    height: 100%;

    &::before {
      content: "";
      position: absolute;
      inset: -1px;
      border: 1px solid hsla(0, 0%, 100%, 0.2);
      border-radius: inherit;
      z-index: 0;
    }
  }

  .card__border_animated {
    content: "";
    pointer-events: none;
    position: absolute;
    z-index: 1;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 250%;
    height: 15rem;
    background-image: linear-gradient(
      0deg,
      hsla(0, 0%, 100%, 0) 0%,
      hsla(189, 100%, 50%, 0.4) 40%,
      // Adjusted transparency
      hsla(189, 100%, 50%, 0.4) 60%,
      // Adjusted transparency
      hsla(0, 0%, 100%, 0) 100%
    );
    animation: rotate 6s linear infinite;
    transform-origin: center;
  }

  @keyframes rotate {
    0% {
      transform: translate(-50%, -50%) rotate(0deg);
    }
    100% {
      transform: translate(-50%, -50%) rotate(360deg);
    }
  }

  .card_icon,
  .card_title__container {
    position: relative;
    z-index: 2;
  }

  .card_icon {
    color: var(--primary);
    margin-bottom: 0.75rem;
    align-self: flex-start;
  }

  .card_title__container .card_title {
    font-size: 1.25rem;
    font-weight: 600;
    color: var(--white);
    font-family: var(--font-primary);
  }

  .card_title__container .card_paragraph {
    margin-top: 0.5rem;
    width: 100%;
    font-size: 0.9rem;
    color: var(--paragraph);
    line-height: 1.5;
  }
`;

export default GradientBorderCard;
