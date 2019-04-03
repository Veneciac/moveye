import React, { Component } from 'react'
import { Text, View, SafeAreaView, TouchableHighlight, Image, ScrollView } from 'react-native'
import s from '../style'
import { Icon, Fab, Badge } from 'native-base'

import MovieCard from '../components/MovieCard'

//ACTIONS
import { getDetail, getSimilar } from '../store/actions/movie'

//STORE
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class Detail extends Component {
  componentDidMount () {
    let id = this.props.navigation.getParam('id')
    this.props.getDetail(id)
    this.props.getSimilar(id)
  }

  showButtonBack = () => {
    return (
      <TouchableHighlight onPress={() => this.props.navigation.navigate('Home')} style={{ justifyContent: 'center', marginRight: 50, top: 10, backgroundColor: 'rgba(200, 200, 200, 0.2)', borderRadius: 50, position: 'absolute', zIndex: 10, width: 45, height: 45, margin: 8, }} >
        <Icon name="ios-arrow-back" style={{ marginRight: 5, textAlign: 'center', color: 'white', textAlign: 'center', alignSelf: 'center' }} />
      </TouchableHighlight>
    )
  }

  render() {
    let { detail, similar } = this.props
    return (
      <SafeAreaView style={s.detail}>
        {
          this.showButtonBack()
        }
        <ScrollView style={{ flex: 1 }}>
          <Text style={{...s.textWhite, fontSize: 21, fontWeight: '600', marginBottom: 8, marginHorizontal: 5, textAlign: 'center' }}> {detail.original_title} </Text>

          <Image resizeMode="contain" style={{...s.detailImg }} source={{ uri: `https://image.tmdb.org/t/p/original/${detail.poster_path}`}} />
          <View style={{ marginHorizontal: 13}}>
            <Text style={{ textAlign: 'right', color: 'grey', fontSize: 15, marginRight: 5 }}> { detail.release_date } </Text>
            <Text style={{ ...s.textWhite, fontSize: 20, fontWeight: '500'}}>
              Overview
            </Text>
            <Text style={{color: 'lightgrey', marginTop: 10}}>
              { detail.overview }
            </Text>
            <Text style={{ color: 'white', fontWeight: '500', marginTop: 20, marginBottom: 10, fontSize: 20}}>
              Genre
            </Text>
            <View style={{ flex:1 , flexDirection: 'row'}}>
              {
                detail.genres && detail.genres.map(el => <Badge key={el.id} style={{ backgroundColor: 'grey', marginRight: 6}}><Text style={{ color: 'white'}}> {el.name} </Text></Badge>)
              }
            </View>
          </View>
          <Text style={{ color: 'white', margin: 10, fontSize: 20, fontWeight: '500'}}>
            Movies you might like
          </Text>
          <ScrollView horizontal={true}>
              {
                similar && similar.map((el, i) => <TouchableHighlight key={i} onPress={() => this.props.navigation.push('Detail', { id: el.id })}><MovieCard movie={el} /></TouchableHighlight>)
              }
          </ScrollView>
        </ScrollView>
      </SafeAreaView>
    )
  }
}

const mapStateToProps = state => ({
  detail: state.movie.detailMovie,
  similar: state.movie.similar
})

const mapDispatchToProps = (dispatch) => bindActionCreators({ getDetail, getSimilar }, dispatch)


export default connect(mapStateToProps, mapDispatchToProps)(Detail)