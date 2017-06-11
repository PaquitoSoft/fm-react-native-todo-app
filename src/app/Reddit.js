import React from 'react';
import {
    View,
    Text
} from 'react-native';
import { connect } from 'react-redux';

class Reddit extends React.Component {
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

function _Reddit({ posts }) {
    return (
        <View>
            <Text>Reddit Component</Text>
            <View>
                {posts.map((post, index) => {
                    return (
                        <Text key={index}>{post.data.author}</Text>
                    );
                })}
            </View>
        </View>
    );
}

function mapStateToProps(state) {
    return {
        posts: state.reddit
    };
}

export default connect(mapStateToProps)(_Reddit);
