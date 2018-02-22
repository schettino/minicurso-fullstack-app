import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Segment, Input, Transition, Image, Header} from 'semantic-ui-react';
import {loadCoinlist, filterCoins} from './actions';

class HomePage extends React.Component {
  componentWillMount() {
    this.props.dispatch(loadCoinlist());
  }

  componentDidMount() {
    setTimeout(() => this.searchField.focus(), 750);
  }

  handleChange = ev => {
    const {value} = ev.target;
    this.props.dispatch(filterCoins(value));
  };

  renderCoins = () => {
    const {coinlist, searchlist} = this.props;
    if (!coinlist.length) return;

    let items = searchlist;
    if (!searchlist.length) {
      const start = Math.round(Math.random() * coinlist.length - 6);
      items = coinlist.slice(start, start + 6);
    }

    return (
      <div>
        {items.map((item, index) => (
          <Transition
            key={item.id}
            animation="fade down"
            duration={250 * index}
            transitionOnMount>
            <Segment size="tiny" padded>
              <Header as="h2">
                <Image inline size="tiny" circular src={item.imageUrl} />
                <Header.Content>
                  {item.coinName}
                  <Header.Subheader content={item.name} />
                </Header.Content>
              </Header>
            </Segment>
          </Transition>
        ))}
      </div>
    );
  };

  render() {
    return (
      <div>
        <Transition animation="slide down" duration={500} transitionOnMount>
          <Segment color="teal" raised size="massive">
            <Input
              ref={searchField => {
                this.searchField = searchField;
              }}
              value={this.props.searchTerm}
              onChange={this.handleChange}
              icon="btc"
              transparent
              iconPosition="left"
              fluid
              size="huge"
              placeholder="Search for a crypto currency"
            />
          </Segment>
        </Transition>
        <div>{this.renderCoins()}</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    coinlist: state.home.coinlist,
    searchlist: state.home.searchlist,
    searchTerm: state.home.searchTerm,
  };
}

HomePage.propTypes = {
  coinlist: PropTypes.array.isRequired,
  searchlist: PropTypes.array.isRequired,
};

export default connect(mapStateToProps)(HomePage);
