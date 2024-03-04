import { StyleSheet, View, TouchableOpacity, Text, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Menu = () => {
    const navigation = useNavigation();

    return (
        <View style={local.container}>
            <View style={local.buttonRow}>
                <TouchableOpacity style={local.buttonStyle} onPress={() => navigation.navigate('Lessons')}>
                    <Text style={local.buttonText}>Lessons</Text>
                </TouchableOpacity>
                <TouchableOpacity style={local.buttonStyle} onPress={() => navigation.navigate('Quiz')}>
                    <Text style={local.buttonText}>Quiz</Text>
                </TouchableOpacity>
            </View>

            <View style={[local.buttonRow, local.border]}>
                <TouchableOpacity style={local.buttonStyle} onPress={() => navigation.navigate('Blog')}>
                    <Text style={local.buttonText}>Blog</Text>
                </TouchableOpacity>
                <TouchableOpacity style={local.buttonStyle} onPress={() => navigation.navigate('Register')}>
                    <Text style={local.buttonText}>Register</Text>
                </TouchableOpacity>
            </View>
            <View style={local.bottomRow}>
                <TouchableOpacity style={local.buttonStyle} onPress={() => navigation.navigate('About')}>
                    <Text style={local.buttonText}>About us</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const local = StyleSheet.create({
    container: { flex: 2, backgroundColor: '#35605a' },
    buttonRow: { flex: 1, flexDirection: 'row', alignItems: 'center' },
    buttonStyle: { backgroundColor: '#35605a', width: '50%', height: '55%', alignItems: 'center' },
    buttonText: { color: '#ffffff', fontSize: 20 },
    border: { borderColor: '#ffffff', borderBottomWidth: 1 },
    bottomRow: { flex: 1, alignSelf: 'flex-end', justifyContent: 'center' },
    bottomButtonStyle: { backgroundColor: '#35605a', width: '100%', height: '50%', paddingRight: 20 }
});



export default Menu;

