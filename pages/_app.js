import React from "react";
import Head from "next/head";
import App from "next/app";

import Layout from "components/Layout";
import UserProvider from "providers/UserProvider";
import ModalsProvider from "providers/ModalsProvider";

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

import "../assets/css/style.css";
import "../styles/global.scss";
import 'antd/dist/antd.css';

const stripePromise = loadStripe(
  "pk_test_51GumODF2EEnSfY8Kt4gnTKubjgNr3sDgfCP6BPa6ae1tHQFU1B6Xztbbkau0AL2oW4ynh7TqIlN0jVxdcPXjMcsf00TIM8ENaH"
);
class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <UserProvider>
        <ModalsProvider>
          <Elements stripe={stripePromise}>
            <Layout>
              <Head>
                <title>GiftJet</title>
                <meta
                  name="viewport"
                  content="initial-scale=1.0, width=device-width"
                />
                <link
                  rel="stylesheet"
                  href="https://fonts.googleapis.com/css?family=Staatliches"
                />
                <link
                  href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&family=Noto+Sans+TC:wght@100;300;400;900&display=swap"
                  rel="stylesheet"
                />
              </Head>

              <Component {...pageProps} />
            </Layout>
          </Elements>
        </ModalsProvider>
      </UserProvider>
    );
  }
}

export default MyApp;
