import React, {useState} from 'react';
import {Text, ImageBackground, View} from 'react-native';
import {imageCarouselStyles} from './ImageCarousel.styles';
import LinearGradient from 'react-native-linear-gradient';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {Dimensions} from 'react-native';
import {colors} from '../../colors';

const ImageCarouselComponent = props => {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <View style={imageCarouselStyles.parentView}>
      <Carousel
        data={props.images}
        renderItem={() => {
          let imageData = props.images[activeSlide];
          return (
            <ImageBackground
              source={{uri: imageData.uri}}
              style={imageCarouselStyles.imageBackground}>
              <LinearGradient
                colors={[colors.LIGHTBLACK, colors.TRANSPARENT]}
                style={imageCarouselStyles.linearGradientStyle}>
                <View style={imageCarouselStyles.recipeTypeDecription}>
                  <Text> {imageData.name} </Text>
                </View>
              </LinearGradient>
            </ImageBackground>
          );
        }}
        sliderWidth={Dimensions.get('screen').width}
        itemWidth={Dimensions.get('screen').width}
        style={imageCarouselStyles.carouselStyle}
        onSnapToItem={setActiveSlide}
      />

      <Pagination
        dotsLength={props.images.length}
        activeDotIndex={activeSlide}
        containerStyle={imageCarouselStyles.containerStyle}
        dotStyle={imageCarouselStyles.dotStyle}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
      <View style={imageCarouselStyles.titleContainer}>
        <Text style={imageCarouselStyles.title}>{props.title}</Text>
      </View>
    </View>
  );
};

export const ImageCarousel = ImageCarouselComponent;
