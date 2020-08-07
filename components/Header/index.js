import Link from "next/link";
import { withRouter } from "next/router";
import { useState, useContext } from "react";
import styled from "styled-components";

import { UserContext } from 'providers/UserProvider';
import { INTERNAL_LINKS } from 'enum';

import styles from "./Header.module.scss";

const signupLinks = {
  affiliate: "/email",
};

const Header = ({ router }) => {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isRecommendOpen, setIsRecommendOpen] = useState(false);
  const { userImage } = useContext(UserContext)

  const toggle = (e) => {
    e.preventDefault();
    setIsUserMenuOpen(!isUserMenuOpen);
  };

  const toggleRecommend = (e) => {
    e.preventDefault();
    setIsRecommendOpen(!isRecommendOpen);
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    router.push(signupLinks.affiliate);
    return;
  };

  const goToHomePage = (e) => {
    e.preventDefault();
    router.push(INTERNAL_LINKS.HOME)
  }

  const isHomePage = router.route === "/";

  const userSection = (
    <UserSection>
      <UserName onClick={toggle}>
        Billy Mosh
        {isUserMenuOpen && (
          <Menu>
            <MenuItem>
              <img src="/images/settings.png" alt="settings" /> Account Settings
            </MenuItem>
            <MenuItem>
              <img src="/images/credit-card.png" alt="credit-card" /> Billing
            </MenuItem>
            <MenuItem>
              <img src="/images/log-out.png" alt="log-out" /> Log Out
            </MenuItem>
            <MenuItem>
              <img src="/images/help-circle.png" alt="help-circle" /> Help
            </MenuItem>
          </Menu>
        )}
      </UserName>
      <Img>
        <img src={userImage ? userImage : "/images/avatar.png"} alt="user" />
      </Img>
    </UserSection>
  );

  const recommendBtn = (
    <RecommendSection>
      <a className="recommend" onClick={toggleRecommend}>
        Recommend ▴
      </a>
      {isRecommendOpen && (
        <RecMenu>
          <MenuItem>
            <img src="/images/list.png" alt="list" />
            Add Recs+
          </MenuItem>
          <MenuItem onClick={() => router.push("/recommendations")}>
            <img src="/images/plus-circle-blue.png" alt="plus" />
            My Recs
          </MenuItem>
        </RecMenu>
      )}
    </RecommendSection>
  );

  if (!isHomePage) {
    return (
      <header className={styles.topHeader}>
        <SectionLeft>
          <div className="img-wrapper">
            <img src="/images/guideshop-logo.svg" alt="logo" onClick={goToHomePage} />
          </div>
          <>
            {recommendBtn}
            <Link href="/earnings">
              <a>Earnings</a>
            </Link>
          </>
        </SectionLeft>
        <SectionRight>
          {/* <input
            type='text'
            placeholder='Search'
            className={styles.searchField}
          /> */}
          {userSection}
        </SectionRight>
      </header>
    );
  }

  return (
    <header className={styles.topHeader}>
      <SectionLeft>
        <div className="img-wrapper">
          <img src="/images/guideshop-logo.svg" alt="logo" onClick={goToHomePage} />
        </div>
      </SectionLeft>
      <SectionRight>
        <>
          <Link href="/email">
            <a className={styles.signInBtn}>Sign In</a>
          </Link>
          <a onClick={handleSignUp} className={styles.signUpBtn}>
            Sign Up
          </a>
        </>
      </SectionRight>
    </header>
  );
};

const Img = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  overflow: hidden;

  img {
    max-width: 100%;
    height: auto;
  }
`;

const Menu = styled.div`
  position: absolute;
  right: -35px;
  font-weight: normal;
  background: #ffffff;
  box-shadow: 0px 4px 60px rgba(0, 0, 0, 0.09);
  border-radius: 24px;
  padding: 30px 20px;
  min-width: 200px;
  margin-top: 10px;
`;

const RecMenu = styled(Menu)`
  right: initial;
  left: 0;
  top: 24px;
  padding: 30px 20px;
`;

const MenuItem = styled.div`
  font-family: "Noto Sans TC", sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  color: #1e2e4f;
  display: flex;
  align-items: center;
  cursor: pointer;

  &:not(:last-of-type) {
    margin-bottom: 25px;
  }

  img {
    margin-right: 10px;
  }
`;

const UserName = styled.div`
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  color: #1e2e4f;
  margin-right: 30px;
  position: relative;
  cursor: pointer;

  &:after {
    content: "";
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 3px 6px 3px;
    border-color: transparent transparent #1e2e4f transparent;
    position: absolute;
    right: -10px;
    top: 50%;
    transform: translateY(-50%);
  }
`;

const RecommendSection = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const UserSection = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin-left: 80px;
`;

const SectionLeft = styled.div`
  display: flex;
  align-items: center;
  height: 25px;

  .img-wrapper {
    height: 25px;    

    img {
      cursor: pointer;
      height: 100%;
      object-fit: cover;
    }
  }

  a {
    color: #1e2e4f;
    font-family: Montserrat;
    font-weight: 600;
    font-size: 14px;
    line-height: 24px;
  }

  .recommend {
    margin: 0 65px 0 100px;
  }
`;

const SectionRight = styled.div`
  display: flex;
  align-items: center;
`;

export default withRouter(Header);
