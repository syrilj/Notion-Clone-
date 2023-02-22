function App() {
  return <h1>Lotion</h1>;
}
class App extends React.Component{
  constructor(){
  super();
  this.state ={
    selectedNoteIndex: null, 
    selectedNote: null,
    notes: null
  };
}
  render(){
    return <h1>Lotion</h1>;
  }
  //react hook
  componentDidMount = () => {
    firebase
    .firestore()
    .collection('notes')
    .onSnapshot(serverUpdate => {
      const notes = serverUpdate.docs.map(_doc => {
        const data = _doc.data();
        data['id'] = _doc.id;
        return data;
      });
      console.log(notes);
      this.setState({notes: notes});
    });
  }
}
export default App;
