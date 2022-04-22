import { StyleSheet } from 'react-native'
export default StyleSheet.create({
    header: {
        backgroundColor: '#101010',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingRight: 10,
        paddingLeft: 10,
        paddingTop: 10,
        paddingBottom: 10,
        borderBottomWidth: 2,
        borderBottomColor: 'yellow',
        marginTop: 5,
        marginLeft: 5,
        marginRight: 5
    },
    box: {
        height: 300,
        backgroundColor: '#DDD',
        margin: 7,
        borderRadius: 5
    },
    scrollview: {
    },
    footer: {
        height: 100,
        backgroundColor: 'white',
        marginLeft: 5,
        marginRight: 5,
        marginBottom: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        borderRadius: 5
    },
    footerButton: {
        backgroundColor: 'red',
        paddingTop: 10,
        paddingBottom: 10,
        paddingRight: 10,
        paddingLeft: 10,
        borderRadius: 5
    }
})