import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    TouchableHighlight,
    TouchableOpacity
} from 'react-native';

class Todo extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      newTodo: ''
    };
  }
  
  handleChange(text) {
    this.setState({
      newTodo: text
    });
  }

  handlePress() {
    const todos = [...this.state.todos, this.state.newTodo];
    this.setState({
      todos,
      newTodo: ''
    });
  }

  render() {
    console.log(this.state.newTodo);
    return (
      <View>
        <TextInput value={this.state.newTodo} onChangeText={this.handleChange.bind(this)} />
        <TouchableOpacity onPress={this.handlePress.bind(this)}>
          <Text>Add Todo</Text>
        </TouchableOpacity>
        <View>
          {this.state.todos.map((todo, index) => {
            return (<Text key={index}>{index + 1}. {todo}</Text>);
          })}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default Todo;
