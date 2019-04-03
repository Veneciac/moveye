import React, { Component } from 'react'
import { Text, View, SafeAreaView, FlatList, TouchableHighlight, ScrollView, Image, Dimensions } from 'react-native'
import s from '../style'

const { width } = Dimensions.get('window')
//ACTIONS
import { getMovies } from '../store/actions/movie'

//STORE
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

//COMPONENTS
import MovieCard from '../components/MovieCard'

class Home extends Component {
  state = {
    page: 2,
    sliderIndex: 0,
    maxSlider: 19,
  }

  scrollToIndex = (index, animated) => {
    this.listRef && this.listRef.scrollToIndex({ index, animated })
  }
 
  componentWillMount() {
    setInterval(function() {
      const { sliderIndex, maxSlider } = this.state
      let nextIndex = 0
 
      if (sliderIndex < maxSlider) {
        nextIndex = sliderIndex + 1
      }
 
      this.scrollToIndex(nextIndex, true)
      this.setState({ sliderIndex: nextIndex })
    }.bind(this), 10000)
  }

  componentDidMount () {
    this.props.getMovies()
  }

  fetchAgain = () => {
    this.props.getMovies(this.state.page)
    this.setState({
      page: this.state.page + 1
    })
  }

  render() {
    let { movies, navigation } = this.props
    return (
      <SafeAreaView style={s.home}>
        <ScrollView>
          <Text style={{ color: 'white', fontWeight: '600', fontSize: 21, textAlign: 'center' }}> MOVIES </Text>
          <View style={s.sliderContainer}>
            {
              movies.map(function(item, index) {
                return (
                  <View key={index} style={s.sliderBtnContainer}>
                      {
                        this.state.sliderIndex == index ? <Image style={{...s.sliding }} key={item.id} source={{ uri: `https://image.tmdb.org/t/p/w300/${item.backdrop_path}`}} /> : null
                      }
                  </View>
                )
              }.bind(this))
            }
          </View>
          <FlatList
            style={{ marginTop: 10 }}
            data={movies}
            renderItem={({ item }) => (
              <TouchableHighlight underlayColor='#ffffff00' onPress={ () => navigation.navigate('Detail', { id: item.id })}>
                <MovieCard movie={item} />
              </TouchableHighlight>
            )}
            numColumns={2}
            onEndReachedThreshold={4}
            onEndReached={ ({distanceFromEnd}) => {
              this.fetchAgain()
            }}
            keyExtractor={(item) => item.id}
          />
        </ScrollView>
      </SafeAreaView>
    )
  }
}

const mapStateToProps = state => ({
  movies: state.movie.movies
})

const mapDispatchToProps = (dispatch) => bindActionCreators({ getMovies }, dispatch)


export default connect(mapStateToProps, mapDispatchToProps)(Home)