import { connect } from 'react-redux';
import Waiter from './Waiter';
import { getAll, fetchFromAPI, getLoadingState, changeAPI } from '../../../redux/tablesRedux';

const mapStateToProps = (state) => ({
  tables: getAll(state),
  loading: getLoadingState(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchTables: () => dispatch(fetchFromAPI()),
  changeStatus: (tableId, status) => dispatch(changeAPI(tableId, status)),
});
console.log();

export default connect(mapStateToProps, mapDispatchToProps)(Waiter);
