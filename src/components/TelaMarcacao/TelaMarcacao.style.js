import { StyleSheet } from 'react-native'
export default StyleSheet.create({
    content: {
        flex: 2,
        margin: 8,
        alignItems: "center",
    },
    titleText: {
        fontSize: 24,
        marginLeft: 10,
    },
    genericImage: {
        borderRadius: 130,
        width: 70,
        height: 70,
        margin: 10
    },
    organizerHeader: {
        flexDirection: 'row',
        paddingTop: 20,
        paddingBottom: 20,
    },
    card: {
        width: 225,
        height: 70,
        marginVertical: 15,
        marginLeft: 10,
        backgroundColor: "#FFFF",
        justifyContent: "center",
        borderRadius: 10,
        alignItems: "center"
    },
    textMedic: {
        fontSize: 24,
    },
    contentShared: {
        height: 390,
        width: 360,
        paddingTop: 20,
        paddingBottom: 20,
    },
    button: {
        width: 320,
        height: 50,
        marginVertical: 15,
        marginLeft: 10,
        backgroundColor: "#38B6FF",
        justifyContent: 'center',
        alignItems: "center",
        borderRadius: 10
    },
    textButton: {
        marginLeft: 10,
        fontSize: 24,
    }
});