import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {
  CompositeScreenProps,
  NavigatorScreenParams,
} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type RootStackParamList = {
  Root: NavigatorScreenParams<TabBarStackParamList>;
};

export type TabBarStackParamList = {
  DashboardScreen: undefined;
  ProfileScreen: undefined;
  ChatScreen: undefined;
  ProjectScreen: undefined;
};

export type DashboardScreenProps = CompositeScreenProps<
  BottomTabScreenProps<TabBarStackParamList, 'DashboardScreen'>,
  NativeStackScreenProps<RootStackParamList>
>;
