import styled from 'styled-components';
import { withRouter } from 'next/router';

import Header from '../Header';
import Footer from '../Footer';

function Layout({ children, router }) {
  console.log('router: ', router);
  const { pathname } = router;

  const withNoHeader = [
    'store',
    'complete',
    'comission',
    'card',
    'affiliate/onboarding',
    'affiliate/email',
  ];
  const withNoFooter = [
    'store',
    'complete',
    'comission',
    'card',
    'affiliate/payment',
  ];

  const showHeaeder = withNoHeader
    .map((page) => pathname.includes(page))
    .every((path) => !path);

  const showFooter = withNoFooter
    .map((page) => pathname.includes(page))
    .every((path) => !path);

  const isPayment = pathname.includes('payment');

  return (
    <Container>
      {showHeaeder && <Header />}

      <main>{children}</main>

      {showFooter && <Footer />}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;

  main {
    flex: 1;
  }
`;

export default withRouter(Layout);
