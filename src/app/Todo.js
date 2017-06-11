import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    TouchableHighlight,
    TouchableOpacity
} from 'react-native';

const SERVER_BASE_URL = 'http://DESKTOP-AE9FRO4:3000/todos';

class Todo extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      newTodo: ''
    };
  }
  
  componentWillMount() {
    fetch(SERVER_BASE_URL, {
      headers: {
        'Accept': 'application/json'
      }
    })
      .then(res => res.json())
      .then(todos => {
        this.setState({ todos })
      })
      .catch(err => {
        console.error('Error fetching todos from server: ' + err.message);
        console.warn(err);
      });
  }

  handleChange(text) {
    this.setState({
      newTodo: text
    });
  }

  handlePress() {
    fetch(SERVER_BASE_URL, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: this.state.newTodo
      })
    })
    .then(res => res.json())
    .then(newTodo => {
      const todos = [newTodo, ...this.state.todos];
      this.setState({
        todos,
        newTodo: ''
      });
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.form}>
          <TextInput 
            style={styles.input}
            value={this.state.newTodo} 
            onChangeText={this.handleChange.bind(this)} />
          <TouchableOpacity 
            style={styles.button}
            onPress={this.handlePress.bind(this)}>
            <Text>Add Todo</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.todos}>
          {this.state.todos.map((todo, index) => {
            return (<Text key={index} style={styles.todo}>{index + 1}. {todo.name}</Text>);
          })}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25
  },
  form: {
    flexDirection: 'row'
  },
  input: {
    flex: 0.7,
    fontSize: 24
  },
  button: {
    flex: 0.3,
    borderWidth: 1,
    borderColor: 'blue',
    height: 50,
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center'
  },
  todos: {
    marginTop: 50
  },
  todo: {
    borderBottomWidth: 1,
    borderColor: 'lightgrey',
    fontSize: 18,
    marginBottom: 10
  }
});

export default Todo;
