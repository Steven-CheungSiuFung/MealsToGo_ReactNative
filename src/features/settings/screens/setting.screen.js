import React, { useContext } from "react";
import { List, ActivityIndicator, Avatar } from "react-native-paper";
import { Text } from "../../../components/typography/text.component";

import { AuthenticationContext } from "../../../services/authentication/authentication.context";

import { SaveArea } from "../../../components/utility/save-area.component";
import styled from "styled-components/native";
import { Spacer } from "../../../components/spacer/spacer.component";

const SettingItems = styled(List.Item)`
  padding: ${(props) => props.theme.space[3]};
`;

const AvatarContainer = styled.View`
  padding: ${(props) => props.theme.space[4]};
  align-items: center;
`;

const AvatarIcon = styled(Avatar.Icon)`
  background-color: ${(props) => props.theme.colors.brand.secondary};
`;

export const SettingsScreen = ({ navigation }) => {
  const { onLogout, isLoading, user } = useContext(AuthenticationContext);

  const handleFavourites = () => {
    navigation.navigate("Favourites");
  };

  const handleLogout = () => {
    onLogout();
  };

  return (
    <SaveArea>
      <Spacer position={"top"} size={"xl"}>
        <AvatarContainer>
          <AvatarIcon size={120} icon="account" />
          {user && (
            <Spacer position={"top"} size={"lg"}>
              <Text variant={"body"}>{user.email}</Text>
            </Spacer>
          )}
        </AvatarContainer>
      </Spacer>
      <Spacer position={"bottom"} size={"lg"} />
      <List.Section>
        <SettingItems
          title="Favourites"
          description="check your favourite restaurants"
          left={(props) => <List.Icon {...props} icon="folder-star-outline" />}
          onPress={handleFavourites}
        />
        <SettingItems
          title="Logout"
          left={(props) => <List.Icon {...props} icon="logout-variant" />}
          right={(props) =>
            isLoading ? (
              <ActivityIndicator {...props} animating={true} color={"gray"} />
            ) : null
          }
          onPress={handleLogout}
        />
      </List.Section>
    </SaveArea>
  );
};
