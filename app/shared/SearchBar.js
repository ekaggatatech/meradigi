import { StyleSheet, View, TextInput, Image } from 'react-native';
import React from 'react';
// import { useNavigation } from '@react-navigation/native'; 
// import Icon from 'react-native-vector-icons/FontAwesome';

const SearchBar = ({ value, setValue, style }) => 
{
    // const navigation = useNavigation();
    /* const [query, setQuery] = useState("");
    const [error, setError] = useState(null); */
    /* const API_ENDPOINT = `https://randomuser.me/api/?results=30`;
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState([]);
    const [fullData, setFullData] = useState([]);
    useEffect(()=>{
        setIsLoading(true);
        fetchData(API_ENDPOINT);
    },[]);
    const fetchData = async(url)=>{
        try
        {
            const response = await fetch(url);
            const json = await response.json();
            setData(json.results);
            console.log(json.results);
            setIsLoading(false);
        }
        catch(error)
        {
            setError(error);
            console.log(error);
            // setIsLoading(false);
        }
    }
    const handleSearch = (value) => 
    {
      setQuery(value);
    }
    if(isLoading)
    {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size={"large"} color="red" />
            </View>
        );
    }
    if(error)
    {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>
                    Error in fetching data...Please check your internet connection!
                </Text>
            </View>
        );
    } */
    return (
    <>
        <View style={[styles.container,style]}>
            <View style={styles.searchContainer}>
                <View style={styles.vwSearch}>
                    <Image
                        style={styles.icSearch}
                        source={require('../assets/ic_search.png')} />
                </View>
                <TextInput
                    // value={query}
                    value={value}
                    onChangeText={(text)=>setValue(text)}
                    placeholder="Search What You Want"
                    clearButtonMode="always"
                    autoCapitalize="none"
                    autoCorrect={false}
                    style={styles.textInput}
                    /* onChangeText={(text) => 
                    // setValue(text)
                    {
                            var letters = /^$|^[a-zA-Z._\b ]+$/;
                            if (text.length > 12)
                            {
                                setError("Query too long.")
                            }
                            else if(text.match(letters)) 
                            {
                                setQuery(text)
                                updateSearch(text)
                                if (error)
                                {
                                    setError(false)
                                }
                            }
                            else 
                            {
                                setError("Please only enter alphabets");
                            } 
                    }
                    } */
                // onChangeText={(value)=>handleSearch(value)}
                />
                {/* {
                    query ?
                        <TouchableOpacity
                            onPress={() => setQuery('')}
                            style={styles.vwClear}>
                            <Image
                                style={styles.icClear}
                                source={require('../assets/ic_clear.png')} />
                        </TouchableOpacity>
                        : 
                        <View style={styles.vwClear} />
                } */}
            </View>
            {/* {
                error &&
                <Text style={styles.txtError}>
                    {error}
                </Text>
            } */}
        </View>
    </>
);
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
    icon:
    {
        justifyContent: 'center',
        alignSelf:"center",
        alignContent:'center',
        paddingLeft:33
    }
});

export default SearchBar;