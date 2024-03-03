import { StyleSheet, Image } from "react-native";

const Hero = () => {
    return(
        <Image
            style={Styles.heroImage}
            source={ require('./img/hacker.jpg')}
            resizeMode="cover"
        />
    );
}
