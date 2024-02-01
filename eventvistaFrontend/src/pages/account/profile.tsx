import Profile from '@/components/account/user/profile';
import SEO from '@/components/seo';
import Wrapper from '@/layout/wrapper';
import React from 'react';

const index = () => {
    return (
        <Wrapper>
            <SEO pageTitle="Profile" />
            <Profile />
        </Wrapper>
    );
};

export default index;


index.authenticate = true;