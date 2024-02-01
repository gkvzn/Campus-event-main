import AboutUs from '@/components/about-us';
import SEO from '@/components/seo';
import Footer from '@/layout/footer/footer';
import Header from '@/layout/header/header';
import Wrapper from '@/layout/wrapper';
import app_service from '@/services/app.service';
import { PageType } from '@/types_and_interfaces/types';
import HeadBanner from '@/utils/global/banner';
import React from 'react';

const index: React.FC = () => {
    return (
        <Wrapper>
            <SEO pageTitle="About Us" />
            <Header />
            <HeadBanner title="About Us"/>
            <AboutUs  />
            <Footer/>
        </Wrapper>
    );
};

export default index;

