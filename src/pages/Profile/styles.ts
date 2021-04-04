/* eslint-disable prettier/prettier */
import styled from 'styled-components/native';
import { Platform } from 'react-native';

interface ContainerProps {
  keyboardOpened: boolean;
}

export const Container = styled.View<ContainerProps>`
  flex: 1;
  justify-content: center;

  padding: 0 30px
    ${Platform.OS === 'android'
    ? props => (props.keyboardOpened ? 150 : 60)
    : 40}px;
  position: relative;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: #f4ede8;
  font-family: 'RobotoSlab-Medium';
  margin: 64px 0 24px;
`;

export const UserAvatar = styled.Image`
  width: 186px;
  height: 186px;
  border-radius: 98px;
  
  align-self: center;
`;

export const UserAvatarButton = styled.TouchableOpacity`
margin-top: 32px;
`;

export const BackButton = styled.TouchableOpacity`
  margin-top: 42px;
`;

