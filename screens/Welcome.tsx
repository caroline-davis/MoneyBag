import React, { FunctionComponent } from "react";
import { StatusBar } from "expo-status-bar";
import styled from "styled-components/native";

import { Container } from "../components/shared";
import { colors } from "../components/colors";
import BigText from "../components/Texts/BigText";
import SmallText from "../components/Texts/SmallText";
// image
import background from "./../assets/bgs/background_v1.png";
import RegularButton from "../components/Buttons/RegularButton";

const WelcomeContainer = styled(Container)`
    background-color: ${colors.secondary};
    justify-content: space-between;
    width: 100%;
    height: 100%;
`

const TopSection = styled.View`
    width: 100%;
    flex: 1;
    max-height: 55%;
`

const TopImage = styled.Image`
    width: 100%;
    height: 100%;
    resize-mode: stretch;
`

const BottomSection = styled.View`
    width: 100%;
    padding: 25px;
    flex: 1;
    justify-content: flex-end;
    margin-bottom: 30px;
`

const Welcome: FunctionComponent = () => {
    return (
        <>
        <StatusBar style="light" />
        <WelcomeContainer>
            <TopSection>
                <TopImage source={background} />
            </TopSection>
            <BottomSection>
                <BigText textStyles={{ width: "70%", marginBottom: 25 }}>
                    Best way to track your money
                </BigText>
                <SmallText textStyles={{ width: "70%", marginBottom: 25 }}>
                    Best payment method, connects your money to your friends, family.
                </SmallText>
                <RegularButton onPress={() => {}}>
                  Get Started  
                </RegularButton>
            </BottomSection>
        </WelcomeContainer>
        </>
    );
}

export default Welcome;