import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'
import s from '../style'
import { Spinner } from 'native-base'
export default class MovieCard extends Component {
    state = {
        loaded: false,
    }

    _onLoad = () => {
        this.setState(() => ({ loaded: true }))
    }

    loadImg = (movie) => {
        return (<Image onLoad={this._onLoad} resizeMode="contain" style={{...s.thumbn }} source={{ uri: `https://image.tmdb.org/t/p/original/${movie.poster_path}`}} />)
    }

  render() {
    let { movie } = this.props
    return (
      <View style={s.card}>
        {
            this.loadImg(movie)
        }
        {!this.state.loaded && <Spinner color="grey" style={{ flex: 1,  }}/> }
        <Text style={{ ...s.textWhite, margin: 14, fontWeight: '600' }} > { movie.title } </Text>
      </View>
    )
  }
}
