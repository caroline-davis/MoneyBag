import React, { FunctionComponent } from "react";
import { StatusBar } from "expo-status-bar";
import styled from "styled-components";
// custom components
import { colors } from "../components/colors";
import { Container } from "../components/shared";
import CardSection from "../components/Cards/CardSection";
import TransactionSection from "../components/Transactions/TransactionSection";
import SendMoneySection from "../components/SendMoney/SendMoneySection";
// card logos
import logo1 from "./../assets/cards/visa_white.png";
import logo2 from "./../assets/cards/mc.png";
// send money images
import portrait1 from "./../assets/portraits/1.png";
import portrait2 from "./../assets/portraits/2.png";
import portrait3 from "./../assets/portraits/3.png";
//types
import { RootStackParamList } from "../navigators/RootStack";
import { StackScreenProps } from "@react-navigation/stack";
export type Props = StackScreenProps<RootStackParamList, "Home">;

const HomeContainer = styled(Container)`
    background-color: ${colors.grayLight};
    width: 100%;
    flex: 1;
`;

const Home: FunctionComponent<Props> = () => {
    const cardsData = [
        {
            id: 1,
            accountNo: "3856078730",
            balance: 20000.15,
            alias: "Work Debit",
            logo: logo1,
        },
        {
            id: 2,
            accountNo: "3856012500",
            balance: 12000.01,
            alias: "Personal Prepaid",
            logo: logo2,
        },
        {
            id: 3,
            accountNo: "3856099110",
            balance: 56000.85,
            alias: "School Prepaid",
            logo: logo1,
        },
    ];

    const transactionData = [
        {
            id: 1,
            amount: "-$86.00",
            date: "14th September 2023",
            title: "Taxi",
            subtitle: "Uber car",
            art: {
                background: colors.primary,
                icon: "car",
            },
        },
        {
            id: 2,
            amount: "-$286.00",
            date: "14th September 2023",
            title: "Shopping",
            subtitle: "Ali express",
            art: {
                background: colors.tertiary,
                icon: "cart",
            },
        },
        {
            id: 3,
            amount: "-$586.00",
            date: "14th August 2023",
            title: "Travel",
            subtitle: "Emirates",
            art: {
                background: colors.accent,
                icon: "airplane",
            },
        },
    ];

    const sendMoneyData = [
        {
            id: 1,
            amount: "2345.90",
            name: "Coby Andoh",
            background: colors.tertiary,
            img: portrait1,
        },
        {
            id: 2,
            amount: "4450.56",
            name: "Harleen Scott",
            background: colors.primary,
            img: portrait2,
        },
        {
            id: 3,
            amount: "6250.23",
            name: "James Corbyn",
            background: colors.accent,
            img: portrait3,
        },
    ];

    return (
        <HomeContainer>
            <StatusBar style="dark" />
            <CardSection data={cardsData} />
            <TransactionSection data={transactionData} />
            <SendMoneySection data={sendMoneyData}/>
        </HomeContainer>
    );
}

export default Home;