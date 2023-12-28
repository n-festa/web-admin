import Layout from '@layouts/layout'
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Link from "next/link";
import Footer from '@components/footer';
import Banner from '@components/landingPage/banner';
import Today from '@components/landingPage/today';
import OrderStep from '@components/landingPage/order-step';
import WhyChoose from '@components/landingPage/why-choose';
import Testimonial from '@components/landingPage/testimonial';
import Contact from '@components/landingPage/contact';
import Download from '@components/landingPage/download';

export const getStaticProps = async ({ locale }:any) => ({
    props: {
        ...await serverSideTranslations(locale),
    },
})


export default function LandingPage() {
    //translations from common.json
    const {t} = useTranslation('common');
    const {t: homeT} = useTranslation('home');
    const changeLanguage = (language: string) => {
        window.location.replace("/" + language)
    }
    return (
        <Layout >
            <Banner />
            <Today title={t("food_today")} />
            <OrderStep />
            <WhyChoose />
            <Testimonial />
            <Contact />
            <Download />
            <Footer />
        </Layout>
    )
}
