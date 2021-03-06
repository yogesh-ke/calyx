import React from "react";
import { StyleSheet, Image, SafeAreaView } from "react-native";

const Header = () => {
    return(
        <SafeAreaView style={styles.headr}>
            <Image
                source={require("../assets/Logo.png")}
                resizeMode="contain"
                style={{height: 50}}
            />
        </SafeAreaView>
    )   
}
const styles = StyleSheet.create ({
    headr: {
        width: "100%",
        flexDirection: 'row',
        alignContent: "center",
        justifyContent: "center",
        padding: 20
    }
});

export default Header;