import { StyleSheet, Text, ScrollView, Image } from 'react-native';
import { resolveTripleslashReference } from 'typescript';

const aboutGlobo = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut a eros vel nibh fringilla consectetur. Suspendisse potenti. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur efficitur nisl et libero gravida dapibus. Nunc id eros ac turpis consectetur lobortis. Etiam cursus sapien vel massa ultricies sollicitudin. Suspendisse semper nisl lacinia quam egestas, in ultrices mauris efficitur. Proin non nibh laoreet mi pretium varius ac sit amet ipsum.';
const whatGlobo = 'Duis varius leo neque, ut fermentum sapien rhoncus vitae. Pellentesque luctus risus metus, quis bibendum nulla laoreet eu. Nullam nunc mi, suscipit quis porttitor quis, accumsan vitae risus. Mauris commodo nibh non auctor suscipit. Fusce vitae augue a mi finibus venenatis quis ac arcu. Integer quis lectus vitae nibh congue fringilla. Nam tincidunt eget libero eget ullamcorper. Phasellus auctor metus vitae turpis dignissim suscipit. Nam et suscipit velit. Mauris ut vulputate nulla. Quisque dignissim erat sed blandit feugiat. Proin ac consequat urna. In hac habitasse platea dictumst.';

const AboutScreen = () => {
    return (
        <ScrollView style={styles.container}>
            <Image style={styles.pics} source={require('../img/about.png')} />
            <Text style={styles.aboutTitle}>This is my forst react app</Text>
            <Text style={styles.aboutText}>{aboutGlobo}</Text>
            <Image style={styles.pics} source={require('../img/computer.png')} />
            <Text style={styles.aboutTitle}>This is another content</Text>
            <Text style={styles.aboutText}>{aboutGlobo}</Text>
        </ScrollView>
    );

};

const styles = StyleSheet.create({
    container: { paddingTop: 20 },
    pics: { height: 300 },
    aboutTitle: { paddingTop: 10, textAlign: 'center' },
    aboutText: { paddingBottom: 20, paddingLeft: 10, paddingRight: 10 }
});

export default AboutScreen;