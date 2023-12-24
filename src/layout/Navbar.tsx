"use client";

import Image from "next/image";
import { useTheme } from "@/providers/ThemesProvider";
import { styled } from "styled-components";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const ThemeIcon = theme.type === "dark" ? BsFillSunFill : BsFillMoonFill;

  return (
    <NavbarStyles>
      <div className="logo-container">
        <div className="logo">
          <Image src="/main-icon.svg" alt="icon" fill />
        </div>
        <div className="inner-rounded-box" />
      </div>
      <div className="settings-container">
        <div className="theme-icon-container" onClick={toggleTheme}>
          <ThemeIcon className="theme-icon" />
        </div>
        <div className="user-container">
          <div className="user-avatar-container">
            <AiOutlineUser className="user-avatar" />
          </div>
        </div>
      </div>
    </NavbarStyles>
  );
};

const NavbarStyles = styled.header`
  background-color: ${({ theme }) => theme.navbar.background};
  height: 4.5rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media (min-width: 768px) {
    height: 5rem;
  }

  @media (min-width: 1440px) {
    flex-direction: column;
    border-radius: 0rem 1.25rem 1.25rem 0rem;
    height: 100vh;
    width: 6.43rem;
  }

  .logo-container {
    background-color: ${({ theme }) => theme.palette.primary.main};
    height: 100%;
    width: 4.5rem;
    position: relative;
    border-radius: 0 1.25rem 1.25rem 0;

    @media (min-width: 768px) {
      width: 5rem;
    }

    @media (min-width: 1440px) {
      width: 100%;
      height: 6.43rem;
    }

    .logo {
      width: 1.75rem;
      height: 1.75rem;
      border-radius: 100%;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      z-index: 2;

      @media (min-width: 1440px) {
        width: 2.5rem;
        height: 2.5rem;
      }
    }

    .inner-rounded-box {
      background-color: ${({ theme }) => theme.palette.primary.light};
      width: 100%;
      height: 50%;
      border-radius: 1.25rem 0 1.25rem 0;
      position: absolute;
      bottom: 0;
    }
  }

  .settings-container {
    display: flex;
    flex-direction: row;
    align-items: center;

    @media (min-width: 1440px) {
      flex-direction: column;
    }

    .theme-icon-container {
      width: 1.25rem;
      height: 1.25rem;
      margin-right: 1.5rem;
      cursor: pointer;

      @media (min-width: 768px) {
        margin-right: 2rem;
      }

      @media (min-width: 1440px) {
        margin-right: 0;
        margin-bottom: 2rem;
      }

      @media (hover: hover) {
        &:hover {
          .theme-icon {
            color: #dfe3fa;
          }
        }
      }

      .theme-icon {
        color: ${({ theme }) => theme.navbar.icon};
        transition: color 0.3s ease-in-out;
        width: 100%;
        height: 100%;
      }
    }

    .user-container {
      border-left: 0.06rem solid ${({ theme }) => theme.navbar.border};
      height: 100%;
      width: 5rem;
      display: flex;
      justify-content: center;
      align-items: center;

      @media (min-width: 768px) {
        width: 6rem;
      }

      @media (min-width: 1440px) {
        border-top: 0.06rem solid ${({ theme }) => theme.navbar.border};
        border-left: 0;
        width: 100%;
        height: 6rem;
      }

      .user-avatar-container {
        background-color: ${({ theme }) => theme.palette.common.white};
        width: 2rem;
        height: 2rem;
        border-radius: 100%;
        display: flex;
        justify-content: center;
        align-items: center;

        @media (min-width: 1440px) {
          width: 2.5rem;
          height: 2.5rem;
        }

        .user-avatar {
          color: ${({ theme }) => theme.navbar.background};
          height: 100%;
          width: 100%;
        }
      }
    }
  }
`;

export default Navbar;
