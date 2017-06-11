import React from 'react';
import {
    View,
    Text
} from 'react-native';

export default class Reddit extends React.Component {
    constructor() {
        super();
        this.state = {
            posts: []
        };
    }
    componentWillMount() {
        fetch('https://www.reddit.com/.json')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                this.setState({
                    posts: data.data.children
                })
            })
    }
    render() {
        return (
            <View>
                <Text>Reddit Component</Text>
                <View>
                    {this.state.posts.map((post, index) => {
                        return (
                            <Text key={index}>{post.data.author}</Text>
                        );
                    })}
                </View>
            </View>
        );
    }
};