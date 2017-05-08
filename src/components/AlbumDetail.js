import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = ({ album }) => {
    const { title, artist, thumbnail_image, image, url } = album;
    const {
        thumbnailStyle,
        headerContentStyle,
        thumbnailContainerStyle,
        albumTitleTextStyle,
        albumArtistTextStyle,
        imageStyle
    } = styles;
    return (
        <Card>
            <CardSection>
                <View style={thumbnailContainerStyle}>
                    <Image
                        style={thumbnailStyle}
                        source={{ uri: thumbnail_image }}
                    />
                </View>
                <View style={headerContentStyle}>
                    <Text style={albumTitleTextStyle}>{title}</Text>
                    <Text style={albumArtistTextStyle}>{artist}</Text>
                </View>
            </CardSection>

            <CardSection>
                <Image
                    style={imageStyle}
                    source={{ uri: image }}
                />
            </CardSection>

            <CardSection>
                <Button
                    onPress={() => Linking.openURL(url)}
                    setText="Buy Now"
                />
            </CardSection>
        </Card>
    );
};

const styles = {
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around',
    },
    albumTitleTextStyle: {
        fontSize: 18,
        fontFamily: 'Avenir Next'
    },
    albumArtistTextStyle: {
        fontFamily: 'Avenir-Light',
        fontStyle: 'italic'
    },
    thumbnailStyle: {
        height: 64,
        width: 64,
        borderRadius: 32
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10
    },
    imageStyle: {
        height: 300,
        flex: 1,
        width: null
    }

};

export default AlbumDetail;
