import Link from 'next/link';
import { useState, useContext } from 'react'
import { useRouter } from 'next/router';
import fetch from "isomorphic-unfetch";
import styled from 'styled-components';
import { notification } from 'antd';
import { UserContext } from '../../providers/UserProvider';

export default function Onboarding() {
  const [filename, setFilename] = useState('This will appear on your shop. Images 180pxby 180px will work best!')
  const [profileImage, setProfileImage] = useState(null)
  const [about, setAbout] = useState('')
  const [location, setLocation] = useState('')
  const router = useRouter()
  const { userToken } = useContext(UserContext);

  const uploadProfileImage = event => {
    setFilename(event.target.files[0].name)
    setProfileImage(event.target.files[0])
  }

  const checkValidation = () => {
    let res = {
      success: true,
      error: ''
    }

    if (!about) {
      res = {
        success: false,
        error: 'Please type the about'
      }
    } else if (!location) {
      res = {
        success: false,
        error: 'Please type the location'
      }
    }

    return res
  }

  const handleSave = async () => {
    const isValid = checkValidation()
    if (isValid.success) {
      let requests = []
      // first, save profile image
      const formData = new FormData();
      formData.append("file", profileImage)
      requests.push(fetch("/api/v1/influencer/image", {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
        body: formData,
      }));
      
      // Next, save about and location info
      requests.push(fetch("/api/v1/influencer/profile", {
        method: "PUT",
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${userToken}`,
        },
        body: JSON.stringify({
          about,
          location
        })
      }));
      let results = await Promise.all(requests)
      if (results[0].status != 200) {
        notification.open({
          message: 'Profile image upload failed',
          description: 'Uploading profile image was failed',
        })
      } else if (results[1].status != 200) {
        notification.open({
          message: 'Profile data upload failed',
          description: 'Uploading profile data was failed',
        })
      } else {
        notification.open({
          message: 'Successfully, saved.',
          description: 'Profile data was successfully saved',
        })
        router.push('/dashboard')
      }
    } else {
      notification.open({
        message: 'Lack of information',
        description: isValid.error,
      })
    }
  }

  return (
    <>
      <LogoContainer>
        <img src='/images/matchjet_logo.png' alt='logo' />
      </LogoContainer>
      <Container>
        <Title>Get started as a guide</Title>
        <SubTitle>
          Own your recommendations and earn 20% of every sale. Recommend your
          favorite products and share with friends or clients for access
          anywhere, anytime.
        </SubTitle>
        <Form>
          <Row className='file'>
            <Label htmlFor='image' className='fileLabel'>
              Set your profile image
            </Label>
            <SubTitle>{filename}</SubTitle>
            <Input
              type='file'
              id='image'
              accept='image/png, image/jpeg'
              className='file'
              onChange={uploadProfileImage}
            />
          </Row>

          <Row>
            <Label htmlFor='about'>About</Label>
            <TextArea id='about' className='size-100' rows='4' onChange={e => setAbout(e.target.value)} />
          </Row>

          <Row>
            <Label htmlFor='location'>Location</Label>
            <Input type='text' id='location' className='size-50' onChange={e => setLocation(e.target.value)} />
          </Row>
        </Form>

        <PaymentSection>
          <Title className='title-payment'>Payment</Title>
          <Link href={'/onboarding/payment'}>
            <Button className='payment'>Add Payment</Button>
          </Link>
        </PaymentSection>

        <BtnContainer>
          <Link href='/'>
            <Button className='cancel'>Cancel</Button>
          </Link>
          {/* TODO: add handleSave and redirect */}
          <Button className='save' onClick={handleSave}>Save</Button>
        </BtnContainer>
      </Container>
    </>
  );
}

const PaymentSection = styled.div`
  padding-bottom: 60px;
  border-bottom: 1px solid #eef1f2;
  width: 100%;
`;

const BtnContainer = styled.div`
  margin-top: 60px;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-bottom: 136px;
`;

const Button = styled.a`
  text-align: center;
  width: auto;
  background: #fc5185;
  color: #fff;
  box-shadow: 0px 10px 24px rgba(0, 0, 0, 0.08);
  border-radius: 100px;
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 26px;
  padding: 13px 80px;
  cursor: pointer;

  &:hover {
    text-decoration: none;
  }

  &.payment {
    width: 327px;
    padding: 13px 120px;

    &:hover {
      background: #db3165;
    }
  }

  &.cancel {
    background: #fff;
    color: #979eac;
    border: 1px solid #979eac;
    margin-right: 32px;
  }

  &.save {
    &:hover {
      background: #db3165;
    }
  }
`;

const Form = styled.form`
  margin-top: 95px;
  width: 100%;
`;

const Input = styled.input`
  background: #f4f9ff;
  border-radius: 60px;
  border: none;
  outline: none;
  padding: 15px 20px;
  color: #44516f;
  font-family: 'Noto Sans TC', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 19px;
  margin-bottom: 24px;
  margin-top: 15px;
  min-width: 450px;

  &.size-50 {
    width: 50%;
  }

  &.size-100 {
    width: 100%;
  }

  &.file {
    visibility: hidden;
  }
`;

const TextArea = styled.textarea`
  border-radius: 4px;
  background: #f4f9ff;
  border: none;
  outline: none;
  padding: 15px 20px;
  color: #44516f;
  font-family: 'Noto Sans TC', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 19px;
  margin-bottom: 24px;
  margin-top: 15px;
  min-width: 450px;
  resize: none;

  &.size-100 {
    width: 100%;
  }
`;

const Row = styled.div`
  width: 100%;
  margin-bottom: 60px;
  position: relative;

  &.file {
    margin-bottom: 80px;
  }
`;

const Label = styled.label`
  color: #1e2e4f;
  font-weight: bold;
  font-size: 18px;
  line-height: 25px;
  font-family: 'Noto Sans TC', sans-serif;
  display: block;

  &.fileLabel {
    &:after {
      content: url('/images/file.png');
      position: absolute;
      top: 75px;
      display: flex;
      align-items: center;
      border: 15px solid #f4f8ff;
      border-radius: 50%;
      padding: 15px 15px 10px 15px;
      outline: none;
      -webkit-user-select: none;
      cursor: pointer;
      text-shadow: 1px 1px #fff;
      font-weight: 700;
      font-size: 10pt;
    }
  }
`;

const SubTitle = styled.h3`
  color: #44516f;
  font-family: 'Noto Sans TC', sans-serif;
  font-weight: normal;
  font-size: 14px;
  line-height: 19px;
  margin-top: 15px;
`;

const Title = styled.h1`
  margin: 0;
  color: #1e2e4f;
  font-family: 'Noto Sans TC', sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 49px;

  &.title-payment {
    margin-bottom: 48px;
  }
`;

const LogoContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  padding: 25px 0 20px;
`;

const Container = styled.div`
  width: 70%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  margin-top: 80px;
  align-items: flex-start;
  color: #1e2e4f;
`;
