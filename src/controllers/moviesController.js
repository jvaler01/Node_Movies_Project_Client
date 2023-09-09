const User = require('../models/User');
const axios = require('axios');
// Pasar a un archivo de configuración
const apiKey = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NmVlNWMyODk1MzYxYzc4MWExYWJkMTczYTczOGI2NSIsInN1YiI6IjY0ZmM1YTc1ZmZjOWRlMGVkZWQyNjBkMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5zFS0e0Rcmrd7a7ScbLq8QZig_iIHZD79o04p1zL8ig'

exports.nowPlaying = async (req, res) => {
    try {
        const response = await axios.get('https://api.themoviedb.org/3/movie/now_playing?language=es-ES&page=1', {
        headers: {
            'Authorization': `Bearer ${apiKey}`
          },
        });
    
        const movies = response.data.results;
        res.status(200).json(movies);
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al obtener las películas.' });
      }
}
exports.popular = async (req, res) => {
    try {
        const response = await axios.get('https://api.themoviedb.org/3/movie/popular?language=es-ES&page=1', {
        headers: {
            'Authorization': `Bearer ${apiKey}`
          },
        });
    
        const movies = response.data.results;
        res.status(200).json(movies);
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al obtener las películas.' });
      }
}
exports.credits = async (req, res) => {
    try {
        const { movieId } = req.body;
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/credits?language=es-ES`, {
        headers: {
            'Authorization': `Bearer ${apiKey}`
          },
        });
    
        const movies = response.data.results;
        res.status(200).json(movies);
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al obtener las películas.' });
      }
}