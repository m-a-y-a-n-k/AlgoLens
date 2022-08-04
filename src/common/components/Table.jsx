import React, { useCallback, useState, useEffect, lazy } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { lighten, makeStyles } from '@material-ui/core/styles';
import {
  FormControl,
  Switch,
  FormControlLabel,
  Tooltip,
  IconButton,
  Checkbox,
  Paper,
  Typography,
  Toolbar,
  Table,
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import SearchIcon from '@material-ui/icons/Search';
import NotInterestedIcon from '@material-ui/icons/NotInterested';
import { DynamicLoader } from '../../routing/base/Router';

const TableBody = lazy(() => import(`@material-ui/core/TableBody`));
const TableContainer = lazy(() => import(`@material-ui/core/TableContainer`));
const TablePagination = lazy(() => import(`@material-ui/core/TablePagination`));

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

function EnhancedTableHead(props) {
  const {
    classes,
    numSelected,
    order,
    orderBy,
    onSelectAllClick,
    onRequestSort,
    rowCount,
    headCells,
  } = props;

  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead className={classes.tableHead}>
      <TableRow>
        <TableCell padding='checkbox'>
          <Checkbox
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{ 'aria-label": "select all enteries' }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            className={classes.headCell}
            key={headCell.id}
            align={headCell.numeric ? 'right" : "left'}
            padding={headCell.disablePadding ? 'none" : "default'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <span className={classes.visuallyHidden}>
                  {order === 'desc" ? "sorted descending" : "sorted ascending'}
                </span>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  classes: PropTypes.object.isRequired,
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc", "desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
  headCells: PropTypes.array.isRequired,
};

const useToolbarStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(1),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(1),
    flexDirection: 'column',
  },
  highlight:
    theme.palette.type === 'light'
      ? {
          color: theme.palette.secondary.main,
          backgroundColor: lighten(theme.palette.secondary.light, 0.85),
          flexDirection: 'row',
        }
      : {
          color: theme.palette.text.primary,
          backgroundColor: theme.palette.secondary.dark,
          flexDirection: 'row',
        },
  title: {
    flex: '1 1 100%',
    margin: theme.spacing(1),
  },
  searchField: {
    margin: theme.spacing(2),
    width: '80%',
  },
  searchColumns: {
    margin: theme.spacing(1),
    flexDirection: 'row',
  },
}));

const EnhancedTableToolbar = ({
  numSelected,
  title,
  setSelected,
  deleteHandler,
  selected,
  searchState,
  setSearchState,
  performSearch,
  headCells,
}) => {
  const classes = useToolbarStyles();
  const searchText = searchState?.searchText || '';
  const selectedIds = searchState?.searchIds || new Set();

  return (
    <Toolbar
      className={clsx(classes.root, {
        [classes.highlight]: numSelected > 0,
      })}
    >
      {numSelected > 0 ? (
        <Typography
          className={classes.title}
          color='inherit'
          variant='subtitle1'
          component='div'
        >
          {numSelected} selected
        </Typography>
      ) : (
        <>
          <FormControl className={classes.searchField} variant='outlined'>
            <InputLabel htmlFor='outlined-search-table'>
              Search In Table
            </InputLabel>
            <OutlinedInput
              autoComplete='off'
              id='outlined-search-table'
              type={'text'}
              value={searchText}
              onChange={({ target: { value } }) => {
                setSearchState({
                  searchText: value || '',
                  searchIds: selectedIds,
                });
              }}
              endAdornment={
                <Tooltip title='Filter table'>
                  <InputAdornment position='end'>
                    <IconButton
                      aria-label='perform-search'
                      onClick={() => {
                        performSearch(searchState);
                      }}
                      onMouseDown={(e) => {
                        e.preventDefault();
                      }}
                      disabled={!searchText}
                      edge='end'
                    >
                      {searchText ? <SearchIcon /> : <NotInterestedIcon />}
                    </IconButton>
                  </InputAdornment>
                </Tooltip>
              }
              labelWidth={120}
            />
          </FormControl>
          {searchText && (
            <FormControl className={classes.searchColumns}>
              {headCells.map((cell) => {
                const { id, label } = cell;
                return (
                  <FormControlLabel
                    key={id}
                    control={
                      <Checkbox
                        checked={selectedIds.has(id)}
                        onChange={({ target: { checked } }) => {
                          checked
                            ? selectedIds.add(id)
                            : selectedIds.size > 1 && selectedIds.delete(id);
                          setSearchState({
                            searchText: searchText,
                            searchIds: selectedIds,
                          });
                        }}
                        inputProps={{ 'aria-label": "select all enteries' }}
                      />
                    }
                    label={label}
                  />
                );
              })}
            </FormControl>
          )}
        </>
      )}

      {numSelected > 0 ? (
        <Tooltip title='Delete'>
          <IconButton
            aria-label='delete'
            onClick={() => {
              deleteHandler(selected);
              setSelected([]);
            }}
          >
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      ) : (
        <Typography
          className={classes.title}
          variant='h6'
          id='tableTitle'
          component='div'
        >
          {title}
        </Typography>
      )}
    </Toolbar>
  );
};

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  searchState: PropTypes.object.isRequired,
  performSearch: PropTypes.func.isRequired,
  setSearchState: PropTypes.func.isRequired,
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  paper: {
    width: '100%',
    marginBottom: theme.spacing(2),
  },
  table: {
    width: '100vw',
  },
  visuallyHidden: {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: 1,
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    top: 20,
    width: 1,
  },
  tableHead: {
    background: '#A2DDFF',
  },
  headCell: {
    fontWeight: 'bolder',
  },
  tableNote: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'lighter',
    padding: '15px 0px',
    fontStyle: 'italic',
  },
}));

export default function EnhancedTable({
  allRows,
  rows,
  headCells,
  deleteHandler,
  title,
  setFilteredRows,
}) {
  const primaryCellKey =
    (headCells &&
      Array.isArray(headCells) &&
      headCells.length > 0 &&
      headCells[0].id) ||
    '';
  const classes = useStyles();
  const [order, setOrder] = useState('asc');
  const [orderBy, setOrderBy] = useState(primaryCellKey);
  const [selected, setSelected] = useState([]);
  const [page, setPage] = useState(0);
  const [dense, setDense] = useState(false);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [searchState, setSearchState] = useState({
    searchText: '',
    searchIds: new Set([primaryCellKey]),
  });

  const handlePerformSearch = useCallback(() => {
    const { searchText, searchIds } = searchState;
    const temp = allRows.filter((row) => {
      let res = false;
      for (let id of searchIds) {
        if (!res) {
          res = row[id].includes(searchText);
        }
      }
      return res;
    });
    setFilteredRows(temp);
    setPage(0);
  }, [searchState, setFilteredRows, allRows]);

  useEffect(() => {
    handlePerformSearch();
  }, [handlePerformSearch]);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc" : "asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = rows.map((n) => n[primaryCellKey]);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }
    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event) => {
    setDense(event.target.checked);
  };

  const isSelected = (name) => selected.indexOf(name) !== -1;

  const emptyRows = rows.length === 0;

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <EnhancedTableToolbar
          title={title}
          numSelected={selected.length}
          selected={selected}
          searchState={searchState}
          headCells={headCells}
          performSearch={() => {
            handlePerformSearch();
          }}
          deleteHandler={deleteHandler}
          setSelected={setSelected}
          setSearchState={setSearchState}
        />
        {DynamicLoader(TableContainer, {
          children: (
            <>
              <Table
                className={classes.table}
                aria-labelledby='tableTitle'
                size={dense ? 'small" : "medium'}
                aria-label='enhanced table'
              >
                <EnhancedTableHead
                  classes={classes}
                  numSelected={selected.length}
                  order={order}
                  orderBy={orderBy}
                  onSelectAllClick={handleSelectAllClick}
                  onRequestSort={handleRequestSort}
                  rowCount={rows.length}
                  headCells={headCells}
                />
                {DynamicLoader(TableBody, {
                  children: stableSort(rows, getComparator(order, orderBy))
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row, index) => {
                      const isItemSelected = isSelected(row[primaryCellKey]);
                      const labelId = `enhanced-table-checkbox-${index}`;

                      return (
                        <TableRow
                          hover
                          onClick={(event) =>
                            handleClick(event, row[primaryCellKey])
                          }
                          role='checkbox'
                          aria-checked={isItemSelected}
                          tabIndex={-1}
                          key={row[primaryCellKey]}
                          selected={isItemSelected}
                        >
                          <TableCell padding='checkbox'>
                            <Checkbox
                              checked={isItemSelected}
                              inputProps={{ 'aria-labelledby': labelId }}
                            />
                          </TableCell>
                          {headCells.map((cell, index) => {
                            return index === 0 ? (
                              <TableCell
                                key={cell.id}
                                component='th'
                                id={labelId}
                                scope='row'
                                padding='none'
                              >
                                {row[cell.id]}
                              </TableCell>
                            ) : (
                              <TableCell key={cell.id} align='left'>
                                {row[cell.id]}
                              </TableCell>
                            );
                          })}
                        </TableRow>
                      );
                    }),
                })}
              </Table>
              {emptyRows && (
                <Typography className={classes.tableNote}>
                  {searchState.searchText
                    ? `No search results found :( `
                    : `No data found. Please add some entries using + button`}
                </Typography>
              )}
            </>
          ),
        })}
        {DynamicLoader(TablePagination, {
          rowsPerPageOptions: [5, 10, 25],
          component: 'div',
          count: rows.length,
          rowsPerPage: rowsPerPage,
          page: page,
          onChangePage: handleChangePage,
          onChangeRowsPerPage: handleChangeRowsPerPage,
        })}
      </Paper>
      <FormControlLabel
        control={<Switch checked={dense} onChange={handleChangeDense} />}
        label='Dense padding'
      />
    </div>
  );
}
