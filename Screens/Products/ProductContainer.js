import React, { useState, useEffect } from 'react';
import { View, FlatList } from 'react-native';
import { Container, Header, Icon, Item, Input, Text } from 'native-base';
import ProductList from './ProductList';

const data = require('../../assets/data/products.json');

const ProductContainer = () => {

    const [products, setProducts] = useState([]);

    useEffect(()=>{
        setProducts(data);

        return () => {setProducts([])}
    }, [])

    return(
        <Container>
        
        <View>
            <Text>PRODUCTS</Text>
            <View  style={{marginTop: 30}}>
            <FlatList
                data={products}
                numColumns={2}
                renderItem={({item}) => <ProductList key={item.id} item={item}/>}
                keyExtractor={item => item.name}
            />
            </View>
        </View>
        </Container>
    )
}

export default ProductContainer;