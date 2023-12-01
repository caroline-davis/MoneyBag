import React, { FunctionComponent, useRef } from "react";
import styled from "styled-components/native";
import BottomSheet from '@gorhom/bottom-sheet';
// types
import { SendMoneySectionProps } from "./types";
// components
import { colors } from "../colors";
import RegularText from "../Texts/RegularText";
import SmallText from "../Texts/SmallText";
import SendMoneyItem from "./SendMoneyItem";

const SendMoneySectionBackground = styled.View`
    width: 100%;
    padding-top: 15px;
    background-color: ${colors.white};
`;

const SendMoneyRow = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding-horizontal: 25px;
`;

const SendMoneyList = styled.FlatList`
    width: 100%;
    flex: auto;
    min-height: 80%;
    padding-horizontal: 25px;
`;

const TextButton = styled.TouchableOpacity`

`;

const SendMoneySection: FunctionComponent<SendMoneySectionProps> = (props) => {
    const sheetRef = useRef<BottomSheet>(null);

    const renderContent = () => {
        return (
            <SendMoneySectionBackground>
                <SendMoneyRow style ={{ marginBottom: 25 }}>
                    <RegularText textStyles={{ fontSize: 19, color: colors.secondary }}>
                        Send money to
                    </RegularText>
                    <TextButton onPress={() => alert("Add")}>
                        <SmallText textStyles={{ fontWeight: "bold", color: colors.tertiary }}>
                            +Add
                        </SmallText>
                    </TextButton>
                </SendMoneyRow>
                <SendMoneyList 
                    data={props.data}
                    contentContainerStyle={{
                        alignItems: "flex-start",
                    }}
                    horizontal={false}
                    showVerticalScrollIndicator={false}
                    numColumns={3}
                    keyExtractor={({ id }: any) => id.toString()}
                    renderItem={({ item }:any) => <SendMoneyItem {...item} />}
                />
            </SendMoneySectionBackground>
        )
    };

    return (
        <BottomSheet 
            ref={sheetRef}
            snapPoints={[240, 85]}
            index={1}
            enableContentPanningGesture={false}
     >
     {renderContent()}
     </BottomSheet>
    )
};

export default SendMoneySection;