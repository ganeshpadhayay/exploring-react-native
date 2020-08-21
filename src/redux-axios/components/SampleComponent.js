import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/Actions';
import {Text, SafeAreaView, ActivityIndicator} from 'react-native';
import {Card} from '../../common/Card';
import {CardSection} from '../../common/CardSection';
import {Button} from '../../common/Button';
import hitAPI from '../NetworkService';

class SampleComponent extends Component {
  state = {
    useremail: null,
    loading: false,
    error: null,
  };

  onButtonPress() {
    //WITHOUT USING REDUX
    this.setState({
      useremail: null,
      loading: true,
      error: null,
    });
    hitAPI(
      'https://jsonplaceholder.typicode.com/users/1',
      60000,
      (result, error) => {
        if (result) {
          this.setState({
            useremail: result.data.email,
            loading: false,
            error: null,
          });
        }
        if (error) {
          this.setState({
            useremail: '',
            loading: false,
            error: error,
          });
        }
      },
    );

    //WITH REDUX
    // this.props.makeNetworkCall({
    //   url: 'https://jsonplaceholder.typicode.com/users/1',
    //   timeOut: 60000,
    // });
  }

  renderButton() {
    return (
      <Button onPress={this.onButtonPress.bind(this)}>Make Network Call</Button>
    );
  }

  render() {
    return (
      <SafeAreaView>
        <Card>
          {/* <Text style={styles.errorTextStyle}>{this.props.data.email}</Text>
          <CardSection>{this.renderButton()}</CardSection>
          {this.props.loading && (
            <ActivityIndicator style={{height: 80}} color="#C00" size="large" />
          )} */}
          <Text style={styles.textStyle}>{this.state.useremail}</Text>
          <Text style={styles.errorTextStyle}>{this.state.error}</Text>
          <CardSection>{this.renderButton()}</CardSection>
          {this.state.loading && (
            <ActivityIndicator style={{height: 80}} color="#C00" size="large" />
          )}
        </Card>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = ({networkCall}) => {
  const {data, error, loading} = networkCall;
  return {
    data: data,
    error: error,
    loading: loading,
  };
};

const styles = {
  textStyle: {
    color: 'green',
    alignSelf: 'center',
    fontSize: 20,
  },
  errorTextStyle: {
    color: 'green',
    alignSelf: 'center',
    fontSize: 20,
  },
};

export default connect(mapStateToProps, actions)(SampleComponent);
