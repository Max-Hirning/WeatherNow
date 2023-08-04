import { themes } from '../models';
import FormEl from '../../../components/FormEl';
import { useDispatch, useSelector } from 'react-redux';
import SelectDropdown from 'react-native-select-dropdown';
import { AppDispatch, RootState } from '../../../redux/store';
import React, { ReactElement, useMemo, useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { IFeedBackStore, changeDetails, changeTheme, setFeedBackAsync } from '../../../redux/reducers/feedBack';

export default function FeedBackForm(): ReactElement {
    const dispatch: AppDispatch = useDispatch();
    const [disabledButton, setDisabledButton] = useState<boolean>(true);
    const { data }: IFeedBackStore = useSelector((state: RootState) => state.feedBack);

    useMemo(() => {
        setDisabledButton(!Boolean(data.theme.length && data.details.length));
    }, [data]);

    const sendFeedBack = async (): Promise<void> => {
        dispatch(setFeedBackAsync(data));
    }

    return (
        <View className='w-80'> 
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
                    dispatch(changeTheme(value));
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
                    value={data.details}
                    onChangeText={(value: string) => {
                        dispatch(changeDetails(value));
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