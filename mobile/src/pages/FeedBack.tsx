import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import React, { ReactElement } from 'react';
import Loader from '../modules/Loader/view/Loader';
import { ScrollView, Text, View } from 'react-native';
import { IFeedBackStore } from '../redux/reducers/feedBack';
import FeedBackForm from '../modules/FeedBackForm/view/FeedBackForm';

export default function FeedBack(): ReactElement {
    const { error, loading }: IFeedBackStore = useSelector((state: RootState) => state.feedBack);

    return (
        <ScrollView className="bg-slate-700 px-4 py-4" contentContainerStyle={{alignItems: 'center'}}>
            <Loader
                error={error}
                loading={loading}
            >
                <>
                    <FeedBackForm/>
                    <Text className="text-gray-400 text-2xl text-center">We are <Text className="text-white">really appreciative</Text> about your feedback</Text>
                    <View className="mb-8"></View>
                </>
            </Loader>
        </ScrollView>
    );
}