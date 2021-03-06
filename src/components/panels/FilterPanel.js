import React, { useState } from "react";
import { connect } from "react-redux";
import {
  applyFilterReset,
  applyFilterPicked
} from "../../store/actions/storageActions";
import database from "../../data/db.json";
import { BasicButton, ControlPanel } from "../../styles/elements.js";

const FilterPanel = props => {
  const [unFiltered, setUnFiltered] = useState(database);

  const resetFilter = newArray => {
    setUnFiltered(newArray);
    props.applyFilterReset(unFiltered);
  };
  const filterPicked = sortBool => {
    if (unFiltered < props.foods) setUnFiltered(props.foods);
    props.applyFilterPicked(sortBool);
  };

  return (
    <ControlPanel>
      <BasicButton onClick={() => resetFilter(props.foods)}>Reset</BasicButton>
      <BasicButton onClick={() => filterPicked(true)}>Označené</BasicButton>
      <BasicButton onClick={() => filterPicked(false)}>Ostatní</BasicButton>
    </ControlPanel>
  );
};

const mapStateToProps = state => ({
  foods: state.foods,
  cart: state.cart
});

const mapDispatchToProps = {
  applyFilterReset,
  applyFilterPicked
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterPanel);
