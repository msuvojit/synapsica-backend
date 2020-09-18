const mongoose = require('mongoose');

const CalculationSchema = new mongoose.Schema(
  {
    token: {
      type: String,
    },
    expression: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = Transaction = mongoose.model('calculation', CalculationSchema);
