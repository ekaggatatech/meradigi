import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    TextInput, Image
} from 'react-native';
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native'; 

const SearchBar = ({value, updateSearch, style}) => {

    const navigation = useNavigation();

    const [query, setQuery] = useState();

    const [error, setError] = useState()

    return (
        <View style={[styles.container, style]}>
            <View style={styles.searchContainer}>
                <View style={styles.vwSearch}>
                    <Image
                        style={styles.icSearch}
                        source={require('../assets/ic_search.png')} />
                </View>

                <TextInput
                    value={query}
                    placeholder="Search"
                    style={styles.textInput}
                    onChangeText={(text) => {
                        var letters = /^$|^[a-zA-Z._\b ]+$/;
                        if (text.length > 12)
                            setError("Query too long.")
                        else if (text.match(letters)) {
                                setQuery(text)
                                updateSearch(text)
                            if (error)
                                setError(false)
                        }
                        else setError("Please only enter alphabets")
                    }}
                />
                {
                    query ?
                        <TouchableOpacity
                            onPress={() => setQuery('')}
                            style={styles.vwClear}>
                            <Image
                                style={styles.icClear}
                                source={require('../assets/ic_clear.png')} />
                        </TouchableOpacity>
                        : <View style={styles.vwClear} />
                }

            </View>
            {
                error &&
                <Text style={styles.txtError}>
                    {error}
                </Text>
            }
        </View >
    )
}
const styles = StyleSheet.create({
    txtError: {
        marginTop: '2%',
        width: '89%',
        color: 'white',
    },
    vwClear: {
        flex: 0.2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textInput: {
        flex: 1,
    },

    vwSearch: {
        flex: 0.2,
        justifyContent: 'center',
        alignItems: 'center',
        // width: 40,
        // backgroundColor: 'red'
    },
    icSearch: {
        height: 18, width: 18
    },
    searchContainer:
    {
        backgroundColor: 'white',
        width: '100%',
        height: 40,
        flexDirection: 'row',
        borderColor: '#DEDEDE',
        borderWidth: 1,
        borderRadius: 9
    },
    container: {
        height: 46,
        alignItems: 'flex-start',
        paddingLeft: 10,
        paddingRight: 10,
        flexDirection:'row',
        // height: '100%', width: '100%' 
    },
    icon:{
        justifyContent: 'center',
        alignSelf:"center",
        alignContent:'center',
        paddingLeft:33
        
    },
   
});
export default SearchBar