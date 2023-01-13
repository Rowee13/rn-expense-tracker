import { View, FlatList } from "react-native";

import ExpenseItem from "./ExpenseItem";

//=============================================================

const renderExpenseItem = (itemData) => {
  return <ExpenseItem {...itemData.item} />;
};

const ExpensesList = ({ expenses }) => {
  return (
    <View>
      <FlatList
        data={expenses}
        renderItem={renderExpenseItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default ExpensesList;
