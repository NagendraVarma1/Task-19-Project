const express = require("express");
const expenseController = require("../controllers/expenses");

const router = express.Router();

router.get("/", expenseController.expenseForm);
router.post("/getExpenses", expenseController.postExpenses);
router.post("/delete/:id", (req, res) => {expenseController.deleteExpense});
router.post("/edit/:id", (req, res) => {expenseController.editExpense});
router.post("/postEdit", (req, res) => {expenseController.postEdit});

module.exports = router;