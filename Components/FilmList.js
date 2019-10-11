// Components/FilmList.js

import React from "react";
import { StyleSheet, FlatList } from "react-native";
import FilmItem from "./FilmItem";
import { connect } from "react-redux";

class FilmList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      favoriteList: props.favoriteList
    }
  }

  _displayDetailForFilm = (idFilm) => {
    this.props.navigation.navigate("FilmDetail", { idFilm: idFilm });
  }

  render() {
    return (
      <FlatList
        style={styles.list}
        data={this.props.films}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({item}) => <FilmItem displayDetailForFilm={this._displayDetailForFilm} isFilmFavorite={this.props.favoritesFilm.findIndex(film => film.id === item.id) !== -1} film={item}/>}
        onEndReachedThreshold={0.5}
        onEndReached={() => {
            if (this.props.films.length > 0 && this.page < this.totalPages && !this.state.favoriteList) {
               this._loadFilms()
            }
        }}
      />
    )
  }
}

const styles = StyleSheet.create({
  list: {
    flex: 1
  }
});

const mapStateToProps = state => {
  return {
    favoritesFilm: state.favoritesFilm
  }
}

export default connect(mapStateToProps)(FilmList);
