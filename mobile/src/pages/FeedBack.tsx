import React, { ReactElement } from 'react';
import { ScrollView, Text, View } from 'react-native';
import FeedBackForm from '../modules/FeedBackForm/view/FeedBackForm';

export default function FeedBack(): ReactElement {
    return (
        <ScrollView className="bg-slate-700 px-4 py-4 flex-1">
            <FeedBackForm/>
            <Text className="text-gray-400 text-2xl text-center">We are <Text className="text-white">really appreciative</Text> about your feedback</Text>
            <View className="mb-8"></View>
        </ScrollView>
    );
}