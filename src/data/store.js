import { reactive } from 'vue';

export const store = reactive({
  logo: 'data:image/png;base64,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',
  mainTitle: '- Rick & Morty -',
  apiUrl: 'https://rickandmortyapi.com/api/character',
  pageOneUrl: 'https://rickandmortyapi.com/api/character/?page=1',
  cardList: [],
  characterList:[],
  errorString: '',
  pageInfo: {
    counter: 1,
    itemsPerPages: 20,
    totalPages: 0,

  },
  queryParams:{
    page: 1,
    id: '',
    name: '',
    status: '',
    species: '',
  }
  
})