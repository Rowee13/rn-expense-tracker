import { View, StyleSheet } from "react-native";

import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";
import { GlobalStyles } from "../../constants/styles";

//=============================================================

const DUMMY_EXPENSES = [
  {
    id: "e1",
    description: "A pair of shoes",
    amount: 5999.99,
    date: new Date("2022-12-19"),
  },
  {
    id: "e2",
    description: "A pair of trousers",
    amount: 899.99,
    date: new Date("2022-12-23"),
  },
  {
    id: "e3",
    description: "Some bananas",
    amount: 199.99,
    date: new Date("2022-12-28"),
  },
  {
    id: "e4",
    description: "A guitar",
    amount: 10999.99,
    date: new Date("2023-01-04"),
  },
  {
    id: "e5",
    description: "Yummy cake",
    amount: 599.99,
    date: new Date("2023-01-09"),
  },
  {
    id: "e6",
    description: "A pair of shoes",
    amount: 5999.99,
    date: new Date("2022-12-19"),
  },
  {
    id: "e7",
    description: "A pair of trousers",
    amount: 899.99,
    date: new Date("2022-12-23"),
  },
  {
    id: "e8",
    description: "Some bananas",
    amount: 199.99,
    date: new Date("2022-12-28"),
  },
  {
    id: "e9",
    description: "A guitar",
    amount: 10999.99,
    date: new Date("2023-01-04"),
  },
  {
    id: "e10",
    description: "Yummy cake",
    amount: 599.99,
    date: new Date("2023-01-09"),
  },
];

//=============================================================

const ExpenseOutput = ({ expenses, expensesPeriod }) => {
  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod} />
      <ExpensesList expenses={DUMMY_EXPENSES} />
    </View>
  );
};

export default ExpenseOutput;

//=============================================================

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 0,
    backgroundColor: GlobalStyles.colors.primary700,
  },
});
