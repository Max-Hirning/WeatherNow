import { themes } from '../models';
import { IFeedBack } from '../types';
import FormEl from '../../../components/FormEl';
import SelectDropdown from 'react-native-select-dropdown';
import React, { ReactElement, useMemo, useState } from 'react';
import { feedBackAPI } from '../../../controllers/api/feedBack';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function FeedBackForm(): ReactElement {
    const [feedBack ,setFeedBack] = useState<IFeedBack>({
        theme: "",
        details: "",
    });
    const [disabledButton, setDisabledButton] = useState<boolean>(true);

    useMemo(() => {
        setDisabledButton(!Boolean(feedBack.theme.length && feedBack.details.length));
    }, [feedBack]);

    const sendFeedBack = async (): Promise<void> => {
        const response = await feedBackAPI.post(feedBack);
        setFeedBack({
            theme: "",
            details: "",
        })
    }

    return (
        <View>
            <FormEl title='Theme of your feedback'>
            <SelectDropdown
                data={themes}
                buttonStyle={{
                    width: "100%",
                    borderWidth: 1,
                    borderRadius: 12,
                    backgroundColor: 'transparent',
                    borderColor: 'rgb(156 163 175)',
                }}
                buttonTextStyle={{
                    fontSize: 18,
                    lineHeight: 28,
                    color: 'rgb(156 163 175)',
                }}
                onSelect={(value: string) => {
                    setFeedBack((state: IFeedBack) => ({...state, theme: value}));
                }}
                buttonTextAfterSelection={(selectedItem, index) => {
                    // text represented after item is selected
                    // if data array is an array of objects then return selectedItem.property to render after item is selected
                    return selectedItem
                }}
                rowTextForSelection={(item, index) => {
                    // text represented for each item in dropdown
                    // if data array is an array of objects then return item.property to represent item in dropdown
                    return item
                }}
            />
            </FormEl>
            <FormEl title='Details'>
                <TextInput 
                    multiline={true}
                    value={feedBack.details}
                    onChangeText={(value: string) => {
                        setFeedBack((state: IFeedBack) => ({...state, details: value}));
                    }}
                    className='px-4 text-gray-400 text-base rounded-xl border border-gray-400'
                />
            </FormEl>
            <TouchableOpacity 
                onPress={sendFeedBack}
                disabled={disabledButton}
                className={`p-3 my-5 bg-gray-800 rounded-xl border border-gray-800 ${(disabledButton && 'opacity-50')}`}
            >
                <Text className="text-gray-400 text-2xl text-center">Send feedback</Text>
            </TouchableOpacity>
        </View>
    );
}