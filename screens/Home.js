import React, { Component } from 'react'
import { Text, View, SafeAreaView, FlatList, TouchableHighlight } from 'react-native'
import s from '../style'

//ACTIONS
import { getMovies } from '../store/actions/movie'

//STORE
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

//COMPONENTS
import MovieCard from '../components/MovieCard'

class Home extends Component {
  state = {
    page: 2
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
    return (
      <SafeAreaView style={s.home}>
        <View>
          <Text style={{ color: 'white', fontWeight: '600', fontSize: 21, textAlign: 'center' }}> MOVIES </Text>
          <FlatList
                data={this.props.movies}
                renderItem={({ item }) => (
                  <TouchableHighlight underlayColor='#ffffff00' onPress={ () => this.props.navigation.navigate('Detail', { id: item.id })}>
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
        </View>
      </SafeAreaView>
    )
  }
}

const mapStateToProps = state => ({
  movies: state.movie.movies
})

const mapDispatchToProps = (dispatch) => bindActionCreators({ getMovies }, dispatch)


export default connect(mapStateToProps, mapDispatchToProps)(Home)